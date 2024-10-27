import Feedback from "../models/feedbackSchema.js";

// Save feedback to the database
export const submitFeedback = async (req, res) => {
  const { name, email, phone, eventDescription } = req.body;

  try {
    // Create new feedback entry
    const feedback = new Feedback({
      name,
      email,
      phone,
      eventDescription
    });

    // Save to the database
    await feedback.save();

    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ message: "Failed to submit feedback." });
  }
};
