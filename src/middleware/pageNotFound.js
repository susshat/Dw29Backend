const pageNotFound = (err,req,res,next)=>{
res.json({
    success: false,
    message: err.message,
});
}
export default pageNotFound;