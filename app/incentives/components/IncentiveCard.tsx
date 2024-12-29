import React from 'react'

const IncentiveCard = () => {
  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg h-[200px]" src="https://img.freepik.com/premium-photo/green-arrow-is-going-up-stacks-coins-arranged-bar-graph_35913-2808.jpg" alt="" />
            {/* <img className="rounded-t-lg h-[100px]" src="https://thumbs.dreamstime.com/b/business-growth-bar-chart-arrow-going-up-financial-business-growth-bar-chart-arrow-going-up-vector-cartoon-illustration-103334966.jpg" alt="" /> */}
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Double Points!</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get double the points when you pay rent on time</p>
            {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> */}
        </div>
    </div>
  )
}

export default IncentiveCard