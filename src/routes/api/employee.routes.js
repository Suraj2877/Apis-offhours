const express = require("express");

const router = new express.Router();
const employeeController = require("../../controller/employee.controller");

//add jobDescription
router.post("/create", employeeController.createEmployee);
router.get("/get",  employeeController.getCandidate);
router.patch("/delete/:id", employeeController.deleteEmployee);
router.patch("/update/:id",  employeeController.updateEmployee);
router.get("/sort",  employeeController.sortEmployee);
router.get("/filter",  employeeController.FilterEmployee);



module.exports=router;


