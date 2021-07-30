
const employeeRoutes = require("./employee.routes");


module.exports = (app) => {

  app.use("/api/employee", employeeRoutes);


};
