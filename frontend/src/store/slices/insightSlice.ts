import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
    ACVRangeByIndustry,
    CustomerDistributionByIndustry,
    TeamPerformanceByACVRange,
    ACVbyCustAndIndustry
} from "../../types"

export interface InsightState {
    acvByCustAndIndustry: ACVbyCustAndIndustry[],
    teamPerformanceByACVRange: TeamPerformanceByACVRange[],
    customerDistributionByIndustry: CustomerDistributionByIndustry[],
    acvRangeByIndustry: ACVRangeByIndustry[],
}
    const initialState: InsightState = {
        acvByCustAndIndustry: [],
        teamPerformanceByACVRange: [],
        customerDistributionByIndustry: [],
        acvRangeByIndustry: [],
    }

export const insightSlice = createSlice({
    name: 'insight',
    initialState,
    reducers: {
        setACVbyCustAndIndustry: (state, action: PayloadAction<ACVbyCustAndIndustry[]>) => {
            state.acvByCustAndIndustry = action.payload
        },
        setTeamPerformanceByACVRange: (state, action: PayloadAction<TeamPerformanceByACVRange[]>) => {
            state.teamPerformanceByACVRange = action.payload
        },
        setCustomerDistributionByIndustry: (state, action: PayloadAction<CustomerDistributionByIndustry[]>) => {
            state.customerDistributionByIndustry = action.payload
        },
        setACVRangeByIndustry: (state, action: PayloadAction<ACVRangeByIndustry[]>) => {
            state.acvRangeByIndustry = action.payload
        },
        setAllInsights: (state, action: PayloadAction<InsightState>) => {
            state.acvByCustAndIndustry = action.payload.acvByCustAndIndustry
            state.teamPerformanceByACVRange = action.payload.teamPerformanceByACVRange
            state.customerDistributionByIndustry = action.payload.customerDistributionByIndustry
            state.acvRangeByIndustry = action.payload.acvRangeByIndustry
        },
    },
})

export const { 
    setACVbyCustAndIndustry, 
    setTeamPerformanceByACVRange, 
    setCustomerDistributionByIndustry, 
    setACVRangeByIndustry, setAllInsights 
} = insightSlice.actions

export const insightReducer = insightSlice.reducer

export const selectACVbyCustAndIndustry = (state: { insight: InsightState }) => state.insight.acvByCustAndIndustry
export const selectTeamPerformanceByACVRange = (state: { insight: InsightState }) => state.insight.teamPerformanceByACVRange
export const selectCustomerDistributionByIndustry = (state: { insight: InsightState }) => state.insight.customerDistributionByIndustry
export const selectACVRangeByIndustry = (state: { insight: InsightState }) => state.insight.acvRangeByIndustry
export const selectAllInsights = (state: { insight: InsightState }) => state.insight


