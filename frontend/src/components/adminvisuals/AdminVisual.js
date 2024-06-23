import React, { useEffect, useRef } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function AdminVisual() {
  const chartRefs = useRef([]);

  const data = {
    "events_conducted": [
      { "year": 2017, "count": 8 },
      { "year": 2018, "count": 12 },
      { "year": 2019, "count": 20 },
      { "year": 2020, "count": 10 },
      { "year": 2021, "count": 15 },
      { "year": 2022, "count": 18 },
      { "year": 2023, "count": 25 }
    ],
    "donations_received": [
      { "year": 2017, "count": 200 },
      { "year": 2018, "count": 350 },
      { "year": 2019, "count": 500 },
      { "year": 2020, "count": 300 },
      { "year": 2021, "count": 500 },
      { "year": 2022, "count": 650 },
      { "year": 2023, "count": 1000 }
    ],
    "recipients_served": [
      { "year": 2017, "count": 600 },
      { "year": 2018, "count": 900 },
      { "year": 2019, "count": 1400 },
      { "year": 2020, "count": 800 },
      { "year": 2021, "count": 1200 },
      { "year": 2022, "count": 1500 },
      { "year": 2023, "count": 2500 }
    ],
    "products_distributed": [
      {
        "year": 2017,
        "reusable_pads": 400,
        "plastic_free_period_cups": 250
      },
      {
        "year": 2018,
        "reusable_pads": 600,
        "plastic_free_period_cups": 350
      },
      {
        "year": 2019,
        "reusable_pads": 800,
        "plastic_free_period_cups": 500
      },
      {
        "year": 2020,
        "reusable_pads": 500,
        "plastic_free_period_cups": 300
      },
      {
        "year": 2021,
        "reusable_pads": 800,
        "plastic_free_period_cups": 400
      },
      {
        "year": 2022,
        "reusable_pads": 1000,
        "plastic_free_period_cups": 600
      },
      {
        "year": 2023,
        "reusable_pads": 1500,
        "plastic_free_period_cups": 800
      }
    ],
    "total_funds_raised": [
      { "year": 2017, "amount": 10000 },
      { "year": 2018, "amount": 20000 },
      { "year": 2019, "amount": 30000 },
      { "year": 2020, "amount": 15000 },
      { "year": 2021, "amount": 25000 },
      { "year": 2022, "amount": 45000 },
      { "year": 2023, "amount": 60000 }
    ]
  };

  // Common settings
  const years = data.events_conducted.map(item => item.year);
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  // Events conducted chart data
  const eventsData = {
    labels: years,
    datasets: [
      {
        label: 'Events Conducted',
        data: data.events_conducted.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Donations received chart data
  const donationsData = {
    labels: years,
    datasets: [
      {
        label: 'Donations Received',
        data: data.donations_received.map(item => item.count),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Recipients served chart data
  const recipientsData = {
    labels: years,
    datasets: [
      {
        label: 'Recipients Served',
        data: data.recipients_served.map(item => item.count),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Products distributed chart data
  const productsData = {
    labels: years,
    datasets: [
      {
        label: 'Reusable Pads',
        data: data.products_distributed.map(item => item.reusable_pads),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Plastic-Free Period Cups',
        data: data.products_distributed.map(item => item.plastic_free_period_cups),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Total funds raised chart data
  const fundsData = {
    labels: years,
    datasets: [
      {
        label: 'Total Funds Raised',
        data: data.total_funds_raised.map(item => item.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Cleanup chart instances on unmount
  useEffect(() => {
    return () => {
      chartRefs?.current?.forEach(ref => {
        if (ref) {
          ref.chartInstance?.destroy();
        }
      })
    };
  }, []);

  return (
    <div>
      <h1 className='text-8xl font-bold text-center'>STATISTICS</h1>
      <div className="p-8 grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Events Conducted</h2>
        <Bar ref={el => chartRefs.current[0] = el} data={eventsData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { display: true, text: 'Events Conducted' } } }} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Donations Received</h2>
        <Bar ref={el => chartRefs.current[1] = el} data={donationsData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { display: true, text: 'Donations Received' } } }} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Recipients Served</h2>
        <Bar ref={el => chartRefs.current[2] = el} data={recipientsData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { display: true, text: 'Recipients Served' } } }} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Products Distributed</h2>
        <Bar ref={el => chartRefs.current[3] = el} data={productsData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { display: true, text: 'Products Distributed' } } }} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 w-[75%] mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Total Funds Raised</h2>
        <Line ref={el => chartRefs.current[4] = el} data={fundsData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { display: true, text: 'Total Funds Raised' } } }} />
      </div>
    </div>
    </div>
    
  );
}

export default AdminVisual;
