import { loadJSON } from "../utils/index.js";

export function getACVByCustomerTypeAndIndustry() {
    const industryData = loadJSON('accountIndustry.json');
    const customerData = loadJSON('customerType.json');
  
    // Group by quarter, then fake-match customers to industries (for demo)
    const result = [];
  
    const quarter = '2023-Q3';
  
    // Simulate spread by taking percentage distribution
    const totalCustACV = customerData
      .filter(d => d.closed_fiscal_quarter === quarter)
      .reduce((sum, d) => sum + d.acv, 0);
  
    industryData
      .filter(d => d.closed_fiscal_quarter === quarter)
      .forEach(ind => {
        customerData
          .filter(c => c.closed_fiscal_quarter === quarter)
          .forEach(cust => {
            const ratio = cust.acv / totalCustACV;
            result.push({
              industry: ind.Acct_Industry,
              customerType: cust.Cust_Type,
              acv: (ind.acv * ratio).toFixed(2)
            });
          });
      });
  
    return result;
  }

  export function getTeamPerformanceByACVRange() {
    const teamData = loadJSON('Team.json');
    const acvRangeData = loadJSON('ACVRange.json');
  
    const quarter = '2023-Q3';
  
    const filteredTeams = teamData.filter(t => t.closed_fiscal_quarter === quarter);
    const filteredACVs = acvRangeData.filter(a => a.closed_fiscal_quarter === quarter);
  
    const totalTeamACV = filteredTeams.reduce((sum, t) => sum + t.acv, 0);
  
    const result = [];
  
    filteredTeams.forEach(team => {
      const teamRatio = team.acv / totalTeamACV;
  
      filteredACVs.forEach(acv => {
        result.push({
          team: team.Team,
          acvRange: acv.ACV_Range,
          count: Math.round(acv.count * teamRatio)
        });
      });
    });
  
    return result;
  }

  export function getCustomerTypeDistributionByTeam() {
    const teamData = loadJSON('team.json');
    const customerData = loadJSON('customerType.json');
  
    const quarter = '2023-Q3';
  
    const filteredTeams = teamData.filter(t => t.closed_fiscal_quarter === quarter);
    const filteredCusts = customerData.filter(c => c.closed_fiscal_quarter === quarter);
  
    const totalTeamACV = filteredTeams.reduce((sum, t) => sum + t.acv, 0);
  
    const result = [];
  
    filteredTeams.forEach(team => {
      const teamRatio = team.acv / totalTeamACV;
  
      filteredCusts.forEach(cust => {
        result.push({
          team: team.Team,
          customerType: cust.Cust_Type,
          count: Math.round(cust.count * teamRatio)
        });
      });
    });
  
    return result;
  }

  export function getACVRangeByIndustry() {
    const industryData = loadJSON('accountIndustry.json');
    const acvRangeData = loadJSON('acvRange.json');
  
    const quarter = '2023-Q3';
  
    const filteredIndustries = industryData.filter(i => i.closed_fiscal_quarter === quarter);
    const filteredACVs = acvRangeData.filter(a => a.closed_fiscal_quarter === quarter);
  
    const totalIndustryACV = filteredIndustries.reduce((sum, i) => sum + i.acv, 0);
  
    const result = [];
  
    filteredIndustries.forEach(industry => {
      const industryRatio = industry.acv / totalIndustryACV;
  
      filteredACVs.forEach(acv => {
        result.push({
          industry: industry.Acct_Industry,
          acvRange: acv.ACV_Range,
          count: Math.round(acv.count * industryRatio)
        });
      });
    });
  
    return result;
  }