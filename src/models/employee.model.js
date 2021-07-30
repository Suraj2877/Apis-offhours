const mongoose = require("mongoose");
const validator = require('validator')

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    phone:{
      type: String,
      required: true
    },
 
    status:{
      type: String,
      
    enum: [
      "REJECTED",
     
      "CLEARED",
     
    ],
    required: true,
    default:"PENDING"
    },
    
  
  
   
  },
  {
    timestamps: true
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
