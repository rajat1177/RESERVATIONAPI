import mongoose from "mongoose";
import validator from "validator";
const reservationSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"firstname must contain atleast three letters"],
        maxlength:[30,"firstname must contain atmost thirty letters"]
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"firstname must contain atleast three letters"],
        maxlength:[30,"firstname must contain atmost thirty letters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"provide a valid email"]
    },
    phoneNumber:{
        type:String,
        required:true,
        minlength:[10,"phone no. must have 10 digits"],
        maxlength:[10,"phone no. must have 10 digits"]
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
})
export const reservation=mongoose.model("reservation",reservationSchema);