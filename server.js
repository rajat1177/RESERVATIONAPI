import app from "./app.js"
app.listen(process.env.PORT,()=>{
    console.log(`SERVER RUNING ON PORT:${process.env.PORT}`);
})