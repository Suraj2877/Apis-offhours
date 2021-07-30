const Employee = require("../models/employee.model");

exports.createEmployee = async (Qdata) => {
  const employee = new Employee(Qdata);

  let promise = new Promise(async (resolve, reject) => {
    try {
      if (employee) {
        await employee.save();
        resolve({ code: 200, employee });
      }
    } catch (err) {
      reject({ code: 500, message: err.message });
    }
  });
  return promise;
};

exports.getEmployee = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const total = await Employee.find({ isDeleted: false });
      const employee = await Employee.find({ isDeleted: false }, null, {
       
      })
        .skip(skip)
        .limit(limit);
      resolve({ code: 200, totalCandidate: total.length, employee });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};

exports.deleteEmployee = async (id, data, data1) => {
  let promise = new Promise(async (resolve, reject) => {
    const updates = data;
    const allowedUpdates = ["isDeleted"];

    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return reject({ code: 400, message: "Invalid Updates!!" });
    }

    try {
      employee = await Employee.findById(id);

      if (!employee) {
        return reject({ code: 400, message: "Candidate not found" });
      }

      // console.log(updates,question)
      updates.forEach((update) => (employee[update] = data1[update]));
      await employee.save();
      resolve({ code: 200, message: "Candidate Deleted Successfully" });
    } catch (e) {
      reject({ code: 400, message: e.message });
    }
  });
  return promise;
};

exports.updateEmployee = async (id, data, data1) => {
  let promise = new Promise(async (resolve, reject) => {
    const updates = data;
    const allowedUpdates = [
      "status",
      "dateOfShortlisted",
      "dateOfCleared",
      "dateOfOfferReleased",
      "dateOfOfferAccepted",
      "dateOfCompanyJoined",
    ];

    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return reject({ code: 400, message: "Invalid Updates!!" });
    }

    try {
      employee = await Employee.findById(id);

      if (!employee) {
        return reject({ code: 400, message: "Candidate not found" });
      }

      // console.log(updates,question)
      updates.forEach((update) => (employee[update] = data1[update]));
      await employee.save();
      resolve({
        code: 200,
        message: "Candidate updated Successfully",
        employee,
      });
    } catch (e) {
      reject({ code: 400, message: e.message });
    }
  });
  return promise;
};


exports.sortEmployeedata = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const total = await Employee.find({ isDeleted: false });
      const employee = await Employee.find({ isDeleted: false }, null, {
        sort: {
          createdAt: 1, //Sort by Date Added ASC
        },
       
      })
        .skip(skip)
        .limit(limit);
      resolve({ code: 200, totalCandidate: total.length, employee });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};

exports.FilterEmployeedata = async (skip, limit) => {
  let promise = new Promise(async (resolve, reject) => {
    try {
      const total = await Employee.find({ isDeleted: false });
      const employee = await Employee.find({ isDeleted: false,status:"CLEARED" }, null, {
       
       
      })
        .skip(skip)
        .limit(limit);
      resolve({ code: 200, totalCandidate: total.length, employee });
    } catch (error) {
      reject({ code: 500, message: error.message });
    }
  });
  return promise;
};