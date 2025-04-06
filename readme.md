# Project Documentation

This dashboard visualizes various data (Teams, Industries, ACV ranges, and Customer Types) using React + TypeScript + Vite for the frontend and Node.js + Express + cors for the backend.


## Screenshot
- Access the screenshot [here](https://drive.google.com/file/d/1HHALqq2x6LyUoD97lc_3A97cxfuL97GZ/view?usp=sharing) and [here](https://drive.google.com/file/d/1HCTr_I1Thzxw2oWieKQjPx_3dnhwaqdt/view?usp=sharing)
## Features
- Uses Redux Toolkit ([frontend/src/store/index.ts](frontend/src/store/index.ts)) for state management.  
- D3.js ([ChartBar](frontend/src/components/ChartBar.tsx) and [ChartDoughnut](frontend/src/components/ChartDoughnut.tsx)) for rendering charts.  
- Express routes in [backend/src/routes](backend/src/routes) serve data and insights.

## Setup and Run
1. Install dependencies in both [frontend](frontend/package.json) and [backend](backend/package.json).  
2. Run the frontend:  
   ```sh
   cd frontend
   npm install
   npm run dev