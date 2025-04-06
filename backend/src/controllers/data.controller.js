import { loadJSON } from "../utils/index.js";


export function getTeam() {
    const teamData = loadJSON('Team.json');
    const result = teamData.map(d => ({
    count: d.count,
    acv: d.acv,
    closed_fiscal_quarter: d.closed_fiscal_quarter,
    Team: d.Team
    }));
    return result;  
}

export function getACVRange() {
    const acvRangeData = loadJSON('ACVRange.json');
    const result = acvRangeData.map(d => ({
        count: d.count,
        acv: d.acv,
        closed_fiscal_quarter: d.closed_fiscal_quarter,
        ACV_Range: d.ACV_Range
    }));
    return result;  
}

export function getAccountIndustry() {
    const accountIndustryData = loadJSON('AccountIndustry.json');
    const result = accountIndustryData.map(d => ({
        count: d.count,
        acv: d.acv,
        closed_fiscal_quarter: d.closed_fiscal_quarter,
        Acct_Industry: d.Acct_Industry,
        query_key: d.query_key
    }));
    return result;  
}

export function getCustomerType() {
    const customerTypeData = loadJSON('CustomerType.json');
    const result = customerTypeData.map(d => ({
        count: d.count,
        acv: d.acv,
        closed_fiscal_quarter: d.closed_fiscal_quarter,
        Cust_Type: d.Cust_Type,
    }));
    return result;  
}