
// Types for datasets used in the charts
export interface Team {
    "count": number,
    "acv": number,
    "closed_fiscal_quarter": string,
    "Team": string
}

export interface AccountIndustry {
    "count": number,
    "acv": number,
    "closed_fiscal_quarter": string,
    "Acct_Industry": string,
    "query_key": string
}

export interface CustomerType {
    "count": number,
    "acv": number,
    "closed_fiscal_quarter": string,
    "Cust_Type": string,
}

export interface AcvRange {
    "count": number,
    "acv": number,
    "closed_fiscal_quarter": string,
    "ACV_Range": string,
}


//Types for insight data from the datasets
export interface ACVbyCustAndIndustry {
    "industry": string,
    "customerType": string,
    "acv": number,
}

export interface TeamPerformanceByACVRange {
    "team": string,
    "acvRange": string,
    "count": number,
}

export interface CustomerDistributionByIndustry {
    "team": string,
    "customerType": string,
    "count": number,
}

export interface ACVRangeByIndustry {
    "industry": string,
    "acvRange": string,
    "count": number,
}
