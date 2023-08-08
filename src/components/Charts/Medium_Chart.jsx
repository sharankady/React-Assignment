import React from 'react'
import'./Medium_Chart.css'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const min=500
const max=1000


const monthly = Array.from({length: 7}, () => (Math.random() *( max - min) + min).toFixed(2))

const labels = Array.from({ length: 7 }, (_, index) => index + 1);

const percentChange =((( monthly[3] -monthly[2])/monthly[2]) *100).toFixed(2)



const data = {
  labels: labels,
  datasets: [
    {
      label: "Monthly Expenses ",
      backgroundColor: "rgba(21, 99, 255, 1)",
      borderColor: "rgba(21, 99, 255, 0.8)", 
      borderRadius:12,
      barThickness:12,
      data: monthly,
     
     
    },
    
  ],
}

const options ={
  scales: {
    x: {
        ticks: {
            display: false
        },
        grid: {
          display: false
        }
    },
    y: {
      ticks: {
          display: false,
          
      },
      grid: {
        display: false
      }
  },  
},
plugins: {
  legend: {
      display: false
  },
},
elements:{
  point:{
      borderWidth: 0,
      radius: 0,
      backgroundColor: 'rgba(0,0,0,0)'
  }
}
}

const Medium_Chart = () => {
  return (
    <div className='mediumchart'>
          
          <div className='mediumchart-details'>
               <div>
               <p>Spent this month</p>
               <h1>${monthly[5]}</h1>
               <span>On Track </span>
               </div>
               <div>
               <span style={{color:percentChange > 0? '#41ad07':'#c43e29'
              }} >{percentChange}%</span>
               </div>
          </div>
          <div className='barchart'>
          <Bar  data={data} options={options} />
          </div>
      </div>
  )
}

export default Medium_Chart