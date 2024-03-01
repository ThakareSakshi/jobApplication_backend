const express= require("express");
const JobController=require("../controller/JobController");


const router=express.Router();

router.post("/api/v1/jobs",JobController.CreateJob);

router.get("/api/v1/jobs",JobController.getJob);

router.patch("/api/v1/jobs",JobController.updateJob)
router.delete("/api/v1/jobs",JobController.deleteJOb);

module.exports =router;