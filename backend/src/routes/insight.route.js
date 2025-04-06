import { Router } from "express";
import { getACVByCustomerTypeAndIndustry } from "../controllers/insights.controller.js";

const router = Router();

// Define the route for getting ACV by customer type and industry
router.get("/customer-type-vs-industry", (req, res) => {
  const data = getACVByCustomerTypeAndIndustry();
  res.json(data);
});

export default router;