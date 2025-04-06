import { useEffect } from 'react'
import { useDispatch } from "react-redux";

import { getTeam, getACVRange, getAccountIndustry, getCustomerType} from "./services/dataApi";
import { setAllData } from "./store/slices/dataSlice";

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
        // Dispatch actions to store the data in Redux store
        dispatch(setAllData({
          teams: teamData,
          acvRange: acvRangeData,
          accountIndustry: accountIndustryData,
          customerType: customerTypeData
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
