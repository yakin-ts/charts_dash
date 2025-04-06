import { Router } from "express";
import {
    getACVByCustomerTypeAndIndustry,
    getTeamPerformanceByACVRange,
    getCustomerTypeDistributionByTeam,
    getACVRangeByIndustry
} from "../controllers/insights.controller.js";

const router = Router();

// Define the route for getting ACV by customer type and industry
router.get("/acv-by-cust-and-industry", (req, res) => {
    const data = getACVByCustomerTypeAndIndustry();
    res.json(data);
});

// Define the route for getting team performance by ACV range
router.get('/team-performance-by-acv-range', (req, res) => {
    const data = getTeamPerformanceByACVRange();
    res.json(data);
});

// Define the route for getting customer type distribution by team
router.get('/customer-distribution-by-industry', (req, res) => {
    res.json(getCustomerTypeDistributionByTeam());
});

// Define the route for getting ACV range by industry
router.get('/acv-range-by-industry', (req, res) => {
    res.json(getACVRangeByIndustry());
  });

export default router;