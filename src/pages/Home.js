import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center  items-center mt-10  mx-auto'>
      <div>
      <div className="mx-auto mt-20   flex pb-12  max-w-maxContent  justify-center items-center gap-10 text-white lg:flex-row">
        {/* Contact Form */}
        <div className='w-[1500%]'>
        <div className="border  mx-auto border-richblack-600 text-[#246583] rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-[#0e1f34]">
        Form Links:-
      </h1>
      

      <div className="mt-7">
      <form
      className="flex flex-col gap-7"
      
    >
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-row gap-2 lg:w-[48%]">
          1.<a href='/form'>Hospital Form</a>
        </div>
        <div className="flex flex-row gap-2 lg:w-[48%]">
          2.<a href='/patientform'>Patient Form</a>
        </div>
        <div className="flex flex-row gap-2 lg:w-[100%]">
          3.<a href='/expensesform'>Expenses form</a>
        </div>
        <div className="flex flex-row gap-2 lg:w-[100%]">
        4.<a href='/ratecarddetails'>Cashless Rate Card Details form</a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        
        
        
      </div>

      
        
    </form>
      </div>
    </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
