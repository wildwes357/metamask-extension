import React from 'react'
import PropTypes from 'prop-types'

const activities = [
  'Transaction created with a value of 0.000023 ETH at 09:50 on 8/8/2019.',
  'Transaction submitted with gas fee of 0 WEI at 09:47 on 8/8/2019.',
  'Transaction confirmed at 09:45 on 8/8/2019.',
  'Transaction created with a value of 0.000023 ETH at 09:50 on 8/8/2019.',
  'Transaction submitted with gas fee of 0 WEI at 09:47 on 8/8/2019.',
  'Transaction confirmed at 09:45 on 8/8/2019.',
]

const TransactionActivity = () => (
  <div className="transaction-activity">
    <div className="transaction-activity__header">
      <a className="transaction-activity__etherscan" href="#" onClick={e => e.preventDefault()}>
        View on Etherscan
      </a>
      <h3 className="transaction-activity__heading">Activity</h3>
    </div>
    <ul className="transaction-activity__list">
      {
        activities.map((item, index) => (
          <li className="transaction-activity__list-item" key={index}>
            <div className="transaction-activity__line" />
            <div className="transaction-activity__bullet">
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="3.5" r="3.5" fill="#037DD6" />
              </svg>
            </div>
            <span>{item}</span>
          </li>
        ))
      }
    </ul>
  </div>
)

export default TransactionActivity
