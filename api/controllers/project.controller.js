import Project from "../models/project.model.js";
import slugify from "slugify";

export const createProject = async (req, res) => {
  const slug =
    slugify(req.body.title).toLowerCase() +
    Math.random().toString(36).slice(-8);

  try {
    const project = await Project.create({
      title: req.body.title,
      slug,
      category: req.body.category,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      imageDesc: req.body.imageDesc,
      link: req.body.link,
      github: req.body.github,
    });
    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;
    const searchIndex = parseInt(req.query.startIndex) || 0;

    const projects = await Project.find().limit(limit).skip(searchIndex);

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      error: error.message,
    });
  }
};

export const getProject = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      error: error.message,
    });
  }
};
