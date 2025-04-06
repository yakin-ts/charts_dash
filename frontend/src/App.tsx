import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';

import { getTeam, getACVRange, getAccountIndustry, getCustomerType } from "./services/dataApi";
import { getACVRangeByIndustry, getACVbyCustAndIndustry, getCustomerDistributionByIndustry, getTeamPerformanceByACVRange } from "./services/insightsApi";
import { DataState, setAllData } from "./store/slices/dataSlice";
import { InsightState, setAllInsights } from "./store/slices/insightSlice";
import { ACVbyCustAndIndustry, ACVRangeByIndustry, CustomerDistributionByIndustry, TeamPerformanceByACVRange, } from "./types";

import InsightCard from './components/InsightCard';
import ChartBar from './components/ChartBar';
import ChartDoughnut from './components/ChartDoughnut';

import './App.css'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {

        const teamData = await getTeam();
        const acvRangeData = await getACVRange();
        const accountIndustryData = await getAccountIndustry();
        const customerTypeData = await getCustomerType();
        const acvByCustAndIndustryData = await getACVbyCustAndIndustry();
        const teamPerformanceByACVRangeData = await getTeamPerformanceByACVRange();
        const customerDistributionByIndustryData = await getCustomerDistributionByIndustry();
        const acvRangeByIndustryData = await getACVRangeByIndustry();
        // Dispatch actions to store the data in Redux store
        dispatch(setAllData({
          teams: teamData,
          acvRange: acvRangeData,
          accountIndustry: accountIndustryData,
          customerType: customerTypeData
        }))
        // You can also dispatch actions for insights data if needed
        dispatch(setAllInsights({
          acvByCustAndIndustry: acvByCustAndIndustryData,
          teamPerformanceByACVRange: teamPerformanceByACVRangeData,
          customerDistributionByIndustry: customerDistributionByIndustryData,
          acvRangeByIndustry: acvRangeByIndustryData
        }))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, [dispatch]);

  const data = useSelector((state: { data: DataState }) => state.data)
  const insights = useSelector((state: { insight: InsightState }) => state.insight)


  return (
    <div className="app">
      <div className="head-title">Insight from the Datas</div>
      <Grid container spacing={2} padding={2}>
        <Grid item={true} xs={12} md={6}>
          <InsightCard title="ACV by Industry">
            <ChartBar<ACVRangeByIndustry>
              data={insights.acvRangeByIndustry}
              xKey="acvRange"
              yKey="count"
              labelKey="industry"
            />
          </InsightCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <InsightCard title="Customer Type Breakdown">
            <ChartDoughnut<ACVbyCustAndIndustry>
              data={insights.acvByCustAndIndustry}
              labelKey="customerType"
              valueKey="acv"
            />
          </InsightCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <InsightCard title="Team Contribution">
            <ChartBar<TeamPerformanceByACVRange>
              data={insights.teamPerformanceByACVRange}
              xKey="team"
              yKey="count"
              labelKey="acvRange"
            />
          </InsightCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <InsightCard title="Customer Distribution by Industry">
            <ChartDoughnut<CustomerDistributionByIndustry>
              data={insights.customerDistributionByIndustry}
              labelKey="customerType"
              valueKey="count"
            />
          </InsightCard>
        </Grid>
      </Grid>
      <div className="head-title">Data from the API</div>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} md={6}>
          <InsightCard title="Teams">
            <ChartBar
              data={data.teams}
              xKey="Team"
              yKey="count"
              labelKey="Team"
            />
          </InsightCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <InsightCard title="ACV Range">
            <ChartBar
              data={data.acvRange}
              xKey="ACV_Range"
              yKey="count"
              labelKey="ACV_Range"
            />
          </InsightCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <InsightCard title="Account Industry">
            <ChartBar
              data={data.accountIndustry}
              xKey="Acct_Industry"
              yKey="count"
              labelKey="Acct_Industry"
            />
          </InsightCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <InsightCard title="Customer Type">
            <ChartBar
              data={data.customerType}
              xKey="Cust_Type"
              yKey="count"
              labelKey="Cust_Type"
            />
          </InsightCard>
        </Grid>
      </Grid>
      <div className="footer">
        <p>Data Visualization Dashboard</p>
        <p>Created by Your Yakin T.</p>
      </div>
    </div>
  )
}

export default App
