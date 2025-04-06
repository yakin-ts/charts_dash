import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AccountIndustry, AcvRange, CustomerType, Team } from "../../types"

export interface DataState {
    teams: Team[]
    acvRange: AcvRange[]
    accountIndustry: AccountIndustry[]
    customerType: CustomerType[]
}

const initialState: DataState = {
    teams: [],
    acvRange: [],
    accountIndustry: [],
    customerType: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setTeams: (state, action: PayloadAction<string[]>) => {
            const teams = action.payload.map((team: string) => {
                return { Team: team, count: 0, acv: 0, closed_fiscal_quarter: '' }
            })
            state.teams = teams
        },
      setACVRange: (state, action: PayloadAction<string[]>) => {
            const acvRange = action.payload.map((range: string) => {
                return { ACV_Range: range, count: 0, acv: 0, closed_fiscal_quarter: '' }
            })
            state.acvRange = acvRange
        },
        setAccountIndustry: (state, action: PayloadAction<string[]>) => {
            const accountIndustry = action.payload.map((industry: string) => {
                return { Acct_Industry: industry, count: 0, acv: 0, closed_fiscal_quarter: '', query_key: '' }
            })
            state.accountIndustry = accountIndustry
        },
        setCustomerType: (state, action: PayloadAction<string[]>) => {
            const customerType = action.payload.map((type: string) => {
                return { Cust_Type: type, count: 0, acv: 0, closed_fiscal_quarter: '' }
            })
            state.customerType = customerType
        },
        setTeamsData: (state, action: PayloadAction<Team[]>) => {
            state.teams = action.payload
        },
        setACVRangeData: (state, action: PayloadAction<AcvRange[]>) => {
            state.acvRange = action.payload
        },
        setAccountIndustryData: (state, action: PayloadAction<AccountIndustry[]>) => {
            state.accountIndustry = action.payload
        },
        setCustomerTypeData: (state, action: PayloadAction<CustomerType[]>) => {
            state.customerType = action.payload
        },
        setAllData: (state, action: PayloadAction<DataState>) => {
            state.teams = action.payload.teams
            state.acvRange = action.payload.acvRange
            state.accountIndustry = action.payload.accountIndustry
            state.customerType = action.payload.customerType
        },
    },
})

export const {
    setTeamsData,
    setACVRangeData,
    setAccountIndustryData,
    setCustomerTypeData, setAllData
} = dataSlice.actions

export const selectTeams = (state: DataState) => state.teams
export const selectACVRange = (state: DataState) => state.acvRange
export const selectAccountIndustry = (state: DataState) => state.accountIndustry
export const selectCustomerType = (state: DataState) => state.customerType
export const selectAllData = (state: DataState) => state

export default dataSlice.reducer