import Application from "../models/Application.js";

export const applyJob = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const existing = await Application.findOne({
      user: userId,
      job: jobId,
    });

    if (existing) {
      return res.status(400).json({
        message: "You have already applied for this job.",
      });
    }

    const application = await Application.create({
      user: userId,
      job: jobId,
    });

    res.status(201).json({
      message: "Application submitted successfully.",
      application,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("user", "name email")
      .populate("job", "title company");

    res.json(applications);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateApplicationStatus = async (
  req,
  res
) => {
  try {
    const application =
      await Application.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        {
          new: true,
        }
      );

    res.json(application);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};