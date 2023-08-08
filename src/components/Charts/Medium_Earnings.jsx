import React from 'react'
import'./Medium_Earnings.css'
import { IoIosStats } from "react-icons/Io";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";


const min=800
const max=1000


const monthly = Array.from({length: 12}, () => (Math.random() *( max - min) + min).toFixed(2))

const labels = Array.from({ length: 12 }, (_, index) => index + 1);

const percentChange =((( monthly[11] -monthly[10])/monthly[10]) *100).toFixed(2)
console.log(percentChange)


const data = {
  labels: labels,
  datasets: [
    {
      // label: "Monthly Earnings ",
      backgroundColor: "rgba(21, 99, 255, 1)",
      borderColor: "rgba(21, 99, 255, 0.8)", 
      tension:0.5,
      data: monthly,
      fill: {
        target: 'origin',
        above: 'rgba(21, 99, 255, .1)',   
        below: 'rgba(21, 99, 255, 0.6)'   
        
      },
     
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
          display: false
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
      backgroundColor: 'transparent'
  }
}
}

const Medium_Earnings = () => {
  return (
    <div className='mediumearnings'>
          <div  className='mediumearnings-icon'>
             <button>{<IoIosStats/>}</button>
             
          </div>
          <div className='mediumearnings-details'>
               <p>This month earnings</p>
               <h1>${monthly[5]}</h1>
               <span style={{color:percentChange > 0? '#41ad07':'#c43e29',
                          backgroundColor: percentChange > 0? '#b9fa96':'#f06565'
              }} >{percentChange}%</span>
          </div>
          <div className='linechart'>
          <Line  data={data} options={options} />
          </div>
      </div>
  )
}

export default Medium_Earnings