import React from 'react'
import RecentItem from './RecentItem';
import'./Small_Transactions.css'



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const day = getRandomNumber(1, 31);
  const month = months[getRandomNumber(0, 11)];
  const hours = getRandomNumber(0, 23).toString().padStart(2, '0');
  const minutes = getRandomNumber(0, 59).toString().padStart(2, '0');

  return `${day} ${month},${hours}:${minutes}`;
}
const randomDate = getRandomDate();

const max=200
const min =500
const creditBalanceMax =20000
const creditBalanceMin =25000

const randomCost = Array.from({length: 3}, () => Math.floor(Math.random() * (max - min + 1) + min).toFixed(2))
const creditBalance =  Math.floor(Math.random() * (creditBalanceMax - creditBalanceMin + 1) + creditBalanceMin).toFixed(0)

const creditBalanceUSD = Intl.NumberFormat('en-US').format(creditBalance)
const recentitems = [
  {
    name:'Bill & Taxes',
    icon: '../../../public/bill.png',
    date: getRandomDate(),
    cost:randomCost[0]

  },
  {
    name:'Car Energy',
     icon:  '../../../public/car.png',
    date: getRandomDate(),
    cost:randomCost[1]

  },
  {
    name:'Design Course',
    icon: '../../../public/college.png' ,
    date: getRandomDate(),
    cost:randomCost[2]

  },
  
]

const Small_transactions = () => {
  return (
    <div className="smalltransactions">
      <div className="creditbalance">
           <div className="creditbalance-text">
               <p>Credit Balance</p>
               <h1>${creditBalanceUSD}</h1>
           </div>
      </div>

      <div className='recent'>
           <div className='recent-text'>
           <p>Recent</p>
           </div>
          <div className='recent-items'>

          <ul>
          {recentitems.map(recent =>(
              <RecentItem recent={recent}/>
            ))}
          </ul>

          </div>
      </div>
      </div>
  )
}

export default Small_transactions