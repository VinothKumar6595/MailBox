import React from 'react'

const ViewMail = ({ mailDetails, setOpenMail }) => {
  console.log(mailDetails, '5555555555555555555')
  return (
    <div className='w-[80%] mx-2'>
      <p
        onClick={() => setOpenMail(false)}
        className='bg-blue-200 inline-block px-4 py-2 cursor-pointer'
      >
        Go back
      </p>
      <div className='flex justify-between my-2'>
        <p>From: {mailDetails.from}</p>
        <p>Date: {mailDetails.date}</p>
      </div>
      <p className='my-2'>Subject: {mailDetails.emailSub}</p>
      <div className='bg-gray-200 h-[960px]'>
        <p className='p-10'>{mailDetails.emailContent}</p>
      </div>
    </div>
  )
}

export default ViewMail
