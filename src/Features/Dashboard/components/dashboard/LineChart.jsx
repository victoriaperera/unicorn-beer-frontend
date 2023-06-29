import "../styles.css";
import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Sales",
          data: [25, 40, 35, 49, 60, 91, 125],
        },
        {
          name: "Revenue",
          data: [10, 20, 60, 35, 45, 60, 80],
        },
      ],
      xaxis: {
        categories: ["Jan", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep"],
      },
      colors: ["#ff000d", "#ff9522"],
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    const handleResize = () => {
      chart.updateOptions({
        chart: {
          height: chartRef.current.offsetHeight,
          width: chartRef.current.offsetWidth,
        },
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.destroy();
    };
  }, []);

  return <div className="chart-container" ref={chartRef}></div>;
}

export default LineChart;
