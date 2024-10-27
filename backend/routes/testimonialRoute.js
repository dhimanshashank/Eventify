import express from "express";
import Testimonial from "../models/testimonialModel.js";

const router = express.Router();

// Route to get all testimonials
router.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials" });
  }
});

router.post("/testimonials", async (req, res) => {
    const { name, role, feedback, rating, headline } = req.body;
  
    const newTestimonial = new Testimonial({
      name,
      role,
      feedback,
      rating,
      headline,
    });
  
    try {
      const savedTestimonial = await newTestimonial.save();
      res.status(201).json(savedTestimonial);
    } catch (error) {
      res.status(400).json({ message: "Error creating testimonial" });
    }
  });
  

export default router;
