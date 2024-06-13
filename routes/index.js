const router = require("express").Router();

const apiRoutes = require("./api/index");
router.use("/v1", apiRoutes);
router.get("/ping",async (req,res)=>{
    res.status(200).json({message:"yo..!!"})
});



module.exports=router