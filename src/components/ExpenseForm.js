import React,{ useState,useEffect }  from 'react'
import { useForm } from "react-hook-form"
import { GptIntegration } from './GptIntegration';




const ExpenseForm = () => {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        formState: { errors, isSubmitSuccessful },
      } = useForm()
      const [formData,setFormData]=useState({
        icu:"",ot:"",specialist:"",med:"",total:""
    })
    const calculateTotal = () => {
        const total = Object.values(formData).reduce((acc, val) => (acc + parseFloat(val || 0)), 0);
        return total.toFixed(2);
      };
    
      const clickHandler=()=>{
        console.log(formData);
      }
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            icu:0,
            ot:0,
            specialist: 0,
            med: 0,
            total:0,
          })
        }
      }, [reset, isSubmitSuccessful])
    
    
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 pb-12 max-w-maxContent flex-col justify-center items-center gap-10 text-white lg:flex-row">
        {/* Contact Form */}
        <div className="lg:w-[60%]">
        <div className="border mx-auto border-richblack-600 text-[#246583] rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-[#0e1f34]">
        Expense Details
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
      <form
      className="flex flex-col gap-7"
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="icu" className="lable-style">
            ICU Charges
          </label>
          <input
            type="number"
            name="icu"
            id="icu"
            placeholder="Enter ICU Charges here"
            className="form-style"
            value={formData.icu}
            onChange={handleInputChange}
            required="true"
          />
          {errors.icu && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your ICU Charges.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="ot" className="lable-style">
            OT Charges
          </label>
          <input
            type="number"
            name="ot"
            id="ot"
            placeholder="Enter OT Charges"
            className="form-style"
            value={formData.ot}
            onChange={handleInputChange}
            required="true"
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="specialist" className="lable-style">
            Specialist Charges
          </label>
          <input
            type="number"
            name="specialist"
            id="specialist"
            placeholder="Enter Specialist Charges"
            className="form-style"
            value={formData.specialist}
            onChange={handleInputChange}
            required="true"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="meds" className="lable-style">
            Meds Consumable Charges
          </label>
          <input
            type="number"
            name="meds"
            id="meds"
            placeholder="Enter Meds Consumable Charges"
            className="form-style"
            value={formData.meds}
            onChange={handleInputChange}
            required="true"
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="total" className="lable-style">
            Total Estimated Amount
          </label>
          <input
            type="number"
            name="total"
            id="total"
            placeholder="Total Estimated Amount"
            className="form-style"
            value={calculateTotal()}
            onChange={handleInputChange}
            required="true"
          />
        </div>

      

        <button
        disabled={loading}
        type="submit"
        onClick={clickHandler}
        className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
          disabled:bg-richblack-500 sm:text-[16px] "
      >
        Generate Pdf
      </button>

      {/* <Link to='/expensesform'>
      
      </Link> */}
    </form>
      </div>
    </div>
        </div>
      </div>
      <GptIntegration formData={formData}/>
    </div>
    
  )
}

export default ExpenseForm