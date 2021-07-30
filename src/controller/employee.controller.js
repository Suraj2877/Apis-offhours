const EmployeeService = require("../services/employee.service");

exports.createEmployee = async (req, res) => {
  try {
    let response = await EmployeeService.createEmployee(req.body);
    if (response) {
      // console.log("res",response,response.code)
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.getCandidate = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await EmployeeService.getEmployee(skip, limit);
    if (response) {
      // console.log("res",response,response.code)
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const data = Object.keys(req.body);
    const data1 = req.body;
    let response = await EmployeeService.deleteEmployee(id, data, data1);
    if (response) {
      // console.log("res",response,response.code)
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const data = Object.keys(req.body);
    const data1 = req.body;
    let response = await EmployeeService.updateEmployee(id, data, data1);
    if (response) {
      // console.log("res",response,response.code)
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};



exports.sortEmployee = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await EmployeeService.sortEmployeedata(skip, limit);
    if (response) {
      // console.log("res",response,response.code)
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};

exports.FilterEmployee = async (req, res) => {
  try {
    const skip = parseInt((req.query.page - 1) * req.query.limit);
    const limit = parseInt(req.query.limit);
    let response = await EmployeeService.FilterEmployeedata(skip, limit);
    if (response) {
      // console.log("res",response,response.code)
      res.status(response.code).json(response);
    } else {
      res.status(400);
    }
  } catch (error) {
    console.log("error", error);
    let code = error.code ? error.code : 400;
    res.status(code).json({ code: code, message: error.message });
  }
};