import React,{ useState }  from 'react'
import { useForm } from "react-hook-form"
import CountryCode from "../data/countrycode.json"
import { Link } from 'react-router-dom'
import { Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
      paddingBottom: 50,
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
    },
  });
const PdfDocument = ({ formData }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Hospital Details</Text>
          <Text>First Name: {formData.firstname}</Text>
          <Text>Last Name: {formData.lastname}</Text>
          <Text>Email Address: {formData.email}</Text>
          <Text>Patient Phone No: {formData.pphonenumber}</Text>
          <Text>Attendant Phone No: {formData.aphonenumber}</Text>
          <Text>Patient Address: {formData.address}</Text>
          <Text>Gender: {formData.gender}</Text>
        </View>
      </Page>
    </Document>
  );

const PatientForm = () => {
    
    const {
        register,
        formState: { errors},
      } = useForm()
      const [formData,setFormData]=useState({
        firstname:"",lastname:"",email:"",pphonenumber:"",aphonenumber:"",gender:"",address:""
    })
    
      
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Generate PDF using react-pdf
        const pdfBlob = new Blob([<PdfDocument formData={formData} />], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 pb-12 max-w-maxContent flex-col justify-center items-center gap-10 text-white lg:flex-row">
        {/* Contact Form */}
        <div className="lg:w-[60%]">
        <div className="border mx-auto border-richblack-600 text-[#246583] rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-[#0e1f34]">
        Patient Details
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
      <form
      className="flex flex-col gap-7"
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"
            value={formData.firstname}
            required="true"
            onChange={handleInputChange}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="form-style"
            value={formData.lastname}
            required="true"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
          value={formData.email}
          required="true"
          onChange={handleInputChange}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pphonenumber" className="lable-style">
          Patient's Phone Number
        </label>

        <div className="flex gap-5">
          <div className="flex w-[150px] flex-col gap-2">
            <select
              type="text"
              name="code"
              id="code"
              placeholder="Enter code"
              className="form-style"
              value={formData.pphonenumber}
            required="true"
              onChange={handleInputChange}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="pphonenumber"
              id="pphonenumber"
              placeholder="12345 67890"
              className="form-style"
              value={formData.pphonenumber}
              required="true"
              onChange={handleInputChange}
            />
          </div>
          {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
        </div>
        
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="aphonenumber" className="lable-style">
          Attendant's Phone Number
        </label>

        <div className="flex gap-5">
          <div className="flex w-[150px] flex-col gap-2">
            <select
              type="text"
              name="code"
              id="code"
              placeholder="Enter code"
              className="form-style"
              onChange={handleInputChange}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="aphonenumber"
              id="aphonenumber"
              placeholder="12345 67890"
              className="form-style"
              value={formData.aphonenumber}
            required="true"
              onChange={handleInputChange}
            />
          </div>
          {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
        </div>
        
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="lable-style">
          Patient's Address
        </label>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="7"
          placeholder="Enter your address here"
          className="form-style"
          value={formData.address}
            required="true"
          onChange={handleInputChange}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Address.
          </span>
        )}
      </div>
      <fieldset className='flex gap-5'>
            <legend>Gender:</legend>
            <input
            type='radio'
 
            onChange={handleInputChange}
            name='gender'
            value="male"
            id='male'
            checked={formData.case==='male'}
            ></input>
            <label htmlFor='male'>Male</label>
            <input
            type='radio'
            onChange={handleInputChange}
            name='gender'
            value="female"
            id='female'
            checked={formData.case==='female'}
            ></input>
            <label htmlFor='female'>Female</label>
        </fieldset>
        {/* date of birth */}
        <button
        type="submit"
        className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         "
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
    </div>
    
  )
}

export default PatientForm