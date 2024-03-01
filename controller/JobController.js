const jobmodel = require("../Model/JobModel");

const CreateJob =async (req, res) => {
  try{
    const newjob = new jobmodel(req.body);
  await newjob.save();
  res.json({
    sucess: true,
    message: "job Created successfully",
  });
  }catch(e){
     return res.status(500).json({error:e})
  }
};

const getJob = async (req, res) => {
  const alljobs = await jobmodel.find({});
  res.json({
    sucess: true,
    message: " getting jobs",
    result: alljobs,
  });
};

const updateJob = async (req, res) => {
  try {
    // const update=await jobmodel.updateOne({_id:req.body._id},{$set:req.body})
    const update = await jobmodel.findByIdAndUpdate(req.body._id, req.body);
    if (update) {
      res.json({
        sucess: true,
        message: "updated successFully",
        result: update,
      });
    } else {
      res.status(404).json({ error: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteJOb = async (req, res) => {
  try {
    await jobmodel.findByIdAndDelete(req.body._id);

    res.json({
      sucess: true,
      message: "deleted successFully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { CreateJob, getJob, updateJob, deleteJOb };
