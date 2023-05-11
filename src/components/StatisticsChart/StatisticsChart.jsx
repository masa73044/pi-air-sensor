import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const StatisticsChart = () => {
  const option = {
    color: ["var(--orange)"],

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0,0,0,0.59)",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(229,104,100)",
              //   color: "red",
            },
            {
              offset: 1,
              color: "rgb(181,221,113)",
              //   color: "green",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              //   color: "#FE4C00",

              color: "rgb(229,104,100)",
              //   color: "red",
            },
            {
              offset: 1,
              //   color: "rgb(181,221,113)",
              color: "rgba(255,144,70,0.1)",

              //   color: "green",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
      },
    ],
  };
  return <ReactECharts option={option} />;
};

export default StatisticsChart;
