import ErrorHandler from "../utils/error.js";
import { reservation } from "../models/resvervationModel.js";
export const sendReservation=async (req,res,next)=>{
    const{firstName,lastName,email,phoneNumber,time,date}=req.body;
    if(!firstName||!lastName||!email||!phoneNumber||!time||!date){
        return next(new ErrorHandler("please fill full reservation form!",400))
    }
    try{
        await reservation.create({firstName,lastName,email,phoneNumber,time,date});
        res.status(200)
        .json({
            "success":"true",
            "message":"form submited successfully"
        });
    }
    catch(error){
        if(error==="ValidationError"){
            const ValidationErrors=Object.values(error.errors).map((err)=>err.message);
            return next(new ErrorHandler(ValidationErrors.join(','),400));
        }
        return next(error);
    }
    
}
