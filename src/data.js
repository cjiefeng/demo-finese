const formatTooltip = (params) => {
  let display = params[0].axisValueLabel + '<br /> <table>'
  let total = 0
  for (let i = 0; i < params.length; i++) {
    total += params[i].data
  }
  display += '<tr><td><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#000000;"></span></td><td>Total&nbsp;&nbsp;&nbsp;'
  display += '</td><td style="text-align:right"><b>' + total + '</b></td>'
  display += '</tr>'
  for (let i = 0; i < params.length; i++) {
    display += '<tr><td>' + params[i].marker
    display += '</td><td>' + params[i].seriesName + '&nbsp;&nbsp;&nbsp;'
    display += '</td><td style="text-align:right"><b>' + params[i].value + '</b></td>'
  }
  return display
}

export const safeOption = {
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      return formatTooltip(params)
    },
  },
  legend: {
    data: ['Savings', 'FD', 'Bonds', 'Endowment']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Savings',
      type: 'line',
      stack: 'total',
      data: [1000, 1500, 1500, 2000, 2500, 3000, 2000, 2500, 3000, 4000, 3000, 3500]
    },
    {
      name: 'FD',
      type: 'line',
      stack: 'total',
      data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000]
    },
    {
      name: 'Bonds',
      type: 'line',
      stack: 'total',
      data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000]
    },
    {
      name: 'Endowment',
      type: 'line',
      stack: 'total',
      data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000]
    },
  ]
};

export const riskOption = {
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      return formatTooltip(params)
    },
  },
  legend: {
    data: ['Crypto', 'REIT', 'S&P500']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Crypto',
      type: 'line',
      stack: 'total',
      data: [1000, 1500, 1500, 2000, 2500, 3000, 2000, 2500, 1500, 0, 0, 0]
    },
    {
      name: 'REIT',
      type: 'line',
      stack: 'total',
      data: [2500, 2500, 3000, 3000, 3500, 3500, 3500, 4000, 4000, 4500, 4500, 5000]
    },
    {
      name: 'S&P500',
      type: 'line',
      stack: 'total',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 1000, 1500, 1500, 2000]
    },
  ]
};

export const totalOption = {
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      return formatTooltip(params)
    },
  },
  legend: {
    data: ['Safe', 'Risk']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Crypto',
      type: 'line',
      stack: 'total',
      data: [7000, 7500, 7500, 8000, 8500, 9000, 8000, 8500, 9000, 10000, 9000, 9500]
    },
    {
      name: 'REIT',
      type: 'line',
      stack: 'total',
      data: [3500, 4000, 4500, 5000, 6000, 6500, 5500, 6500, 6500, 6000, 6000, 7000]
    },
  ]
};