import { Router } from "express";
import { getACVRange, getAccountIndustry, getCustomerType, getTeam } from "../controllers/data.controller.js";

const router = Router();

// Define the route for getting team data
router.get("/team", (req, res) => {
  const data = getTeam();
  res.json(data);
});

// Define the route for getting ACV range data
router.get("/acv-range", (req, res) => {
  const data = getACVRange();
  res.json(data);
});

// Define the route for getting account industry data
router.get("/account-industry", (req, res) => {
  const data = getAccountIndustry();
  res.json(data);
});

// Define the route for getting customer type data
router.get("/customer-type", (req, res) => {
  const data = getCustomerType();
  res.json(data);
});

export default router;