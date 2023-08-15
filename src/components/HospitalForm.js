import React,{ useState,useEffect }  from 'react'
import { useForm } from "react-hook-form"
import JsPDF from 'jspdf';
import { Link } from 'react-router-dom'
import { RoomType } from '../data/roomtype'
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
          <Text>Illness: {formData.illness}</Text>
          <Text>Past History of Illness: {formData.phoi}</Text>
          <Text>Findings: {formData.findings}</Text>
          <Text>Diagnosis Name: {formData.dn}</Text>
          <Text>Proposed Line of Treatment: {formData.plot}</Text>
          <Text>Date of Admission: {formData.doa}</Text>
          <Text>Time of Admission: {formData.toa}</Text>
          <Text>Expected no of Days of Stay: {formData.dos}</Text>
          <Text>Room type: {formData.roomtype}</Text>
          <Text>Case: {formData.case}</Text>
        </View>
      </Page>
    </Document>
  );

const HospitalForm = () => {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        formState: { errors, isSubmitSuccessful },
      } = useForm()

    const [formData,setFormData]=useState({
        illness:"",phoi:"",findings:"",dn:"",plot:"",doa:"",toa:"",dos:"",roomtype:"",case:""
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
    
    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            illness: "",
            phoi: "",
            findings: "",
            dn: "",
            plot: "",
            doa: "",
            toa: "",
            dos: 0,
            roomtype: "",
            case: ""
          })
        }
      }, [reset, isSubmitSuccessful])
    
    
  return (
    <div id='report' className="border mx-auto border-richblack-600 text-[#246583] rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-[#0e1f34]">
        Hospital Details
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
      <form 
      className="flex flex-col gap-7" 
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="illness" className="lable-style">
            Illness
          </label>
          <input
            type="text"
            name="illness"
            id="illness"
            placeholder="Enter your illness"
            className="form-style"
            value={formData.illness}
            onChange={handleInputChange}
            required="true"
            // {...register("illness", { required: true })}
          />
          {errors.illness && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your illness.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="phoi" className="lable-style">
            Past History of Illness
          </label>
          <input
            type="text"
            name="phoi"
            id="phoi"
            placeholder="Enter Past History of Illness"
            className="form-style"
            value={formData.phoi}
            onChange={handleInputChange}
            required="true"
            // {...register("phoi", { required: true })}
          />
          {errors.phoi && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your past history of illness.
          </span>
        )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
      <label htmlFor="findings" className="lable-style">
            Findings
          </label>
          <input
            type="text"
            name="findings"
            id="findings"
            placeholder="Enter findings"
            className="form-style"
            value={formData.findings}
            onChange={handleInputChange}
            // {...register("findings")}
          />
      </div>
      <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="dn" className="lable-style">
            Diagnosis Name
          </label>
          <input
            type="text"
            name="dn"
            id="dn"
            placeholder="Enter diagnosis name"
            className="form-style"
            value={formData.dn}
            onChange={handleInputChange}
            required="true"
            // {...register("dn", { required: true })}
          />
          {errors.dn && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter diagnosis name.
          </span>
        )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="plot" className="lable-style">
            Proposed Line of Treatment
          </label>
          <input
            type="text"
            name="plot"
            id="plot"
            placeholder="Enter Proposed Line of Treatment"
            className="form-style"
            value={formData.plot}
            onChange={handleInputChange}
            required="true"
            // {...register("plot")}
          />
        </div>
        {/* date tag */}

        <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="doa" className="lable-style">
            Date of Admission
          </label>
          <input
            type="text"
            name="doa"
            id="doa"
            placeholder="Enter Date of Admission"
            className="form-style"
            value={formData.doa}
            onChange={handleInputChange}
            required="true"
            // {...register("Date of Admission", { required: true })}
          />
          {errors.doa && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter date of Admission.
          </span>
        )}
          
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="toa" className="lable-style">
            Time of Admission
          </label>
          <input
            type="text"
            name="toa"
            id="toa"
            placeholder="Enter Time of Admission"
            className="form-style"
            value={formData.toa}
            onChange={handleInputChange}
            required="true"
            // {...register("toa", { required: true })}
          />
          {errors.toa && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter time of admission.
          </span>
        )}
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="dos" className="lable-style">
            Expected No of days of stay
          </label>
          <input
            type="number"
            name="dos"
            id="dos"
            placeholder="Enter Expected No of days of stay"
            className="form-style"
            value={formData.dos}
            onChange={handleInputChange}
            // {...register("dos")}
          />
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
        <label htmlFor='roomtype' className="label-style">
            Room Type
        </label>
        <select
        name='roomtype'
        id='roomtype'
        className="form-style"
        value={formData.roomtype}
        onChange={handleInputChange}
        required="true"
        // onChange={changeHandler}
        >
            {
                RoomType.map((item,index)=>(
                    <option value={item.type}>{item.type}</option>
                ))
            }
        </select> 
        </div>  
        <fieldset className='flex gap-5'>
            <legend>Case:</legend>
            <input
            type='radio'
            onChange={handleInputChange}
            name='case'
            value="packagedcase"
            id='packagedcase'
            checked={formData.case==='packagedcase'}
            ></input>
            <label htmlFor='packagedcase'>Packaged Case</label>
            <input
            type='radio'
            onChange={handleInputChange}
            name='case'
            value="nonpackagedcase"
            id='nonpackagedcase'
            checked={formData.case==='nonpackagedcase'}
            ></input>
            <label  htmlFor='nonpackagedcase'>Non Packaged Case</label>
        </fieldset>
        <button
        type="submit"
        className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
     " >
        Generate pdf
      </button>

      {/* <Link to='/patientform'>
      
      </Link> */}
    </form>
      </div>
      
    </div>
  )
}

export default HospitalForm