import React from 'react'
import HospitalForm from "../components/HospitalForm"


const Form = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 pb-12 max-w-maxContent flex-col justify-center items-center gap-10 text-white lg:flex-row">
        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <HospitalForm />
        </div>
      </div>
    </div>
  )
}

export default Form