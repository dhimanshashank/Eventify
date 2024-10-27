import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  headline: { type: String },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Testimonial", TestimonialSchema);
