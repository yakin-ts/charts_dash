import { useEffect } from 'react'
import { useDispatch } from "react-redux";

import { getTeam, getACVRange, getAccountIndustry, getCustomerType} from "./services/dataApi";
import { getACVRangeByIndustry, getACVbyCustAndIndustry, getCustomerDistributionByIndustry, getTeamPerformanceByACVRange } from "./services/insightsApi";
import { setAllData } from "./store/slices/dataSlice";

import './App.css'
import { setAllInsights } from "./store/slices/insightSlice";


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

 
  return (
    <div className="app">
      
    </div>
  )
}

export default App
