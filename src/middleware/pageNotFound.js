const pageNotFound = (err,req,res,next)=>{
res.status(404).json({
    success: false,
    message: err.message,
});
}
export default pageNotFound;