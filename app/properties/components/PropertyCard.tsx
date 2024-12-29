import React from 'react'

const IncentiveCard = () => {
  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg h-[200px]" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fDB8fHww" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">New house!</h5>
            </a>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Just live here already</p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">For rent!</p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">$ 250 / mo</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Edit Property
            </a>
        </div>
    </div>
  )
}

export default IncentiveCard