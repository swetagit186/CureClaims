import React, { useState, useEffect } from 'react';
import openai from 'openai'

export const GptIntegration = ({formData},{crcdData}) => {
    const [gptResponse, setGptResponse] = useState('');

    useEffect(() => {
      const runGPT = async () => {
        openai.api_key = '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';
  
        const prompt = `
        You are a smart assistant helping users manage their medical expenses. A user has submitted an expense report for medical treatment, and you need to validate it against the Cashless Rate Card of the TPA (Third Party Administrator).

        
        
        The submitted expenses are as follows:
        - ICU Charges:  ₹ ${formData.icu}
        - OT Charges: ₹ ${formData.ot}
        - Specialist Charges: ₹ ${formData.specialist}
        - Meds Consumables Charges: ₹ ${formData.med}
        
        The Cashless Rate Card of the TPA is as follows:
        - ICU Charges: ₹ ${crcdData.icu}
        - OT Charges: ₹ ${crcdData.ot}
        - Specialist Charges: ₹ ${crcdData.specialist}
        - Meds Consumables Charges: ₹ ${crcdData.med}
        Please validate the entered expenses and calculate the potential overcharges or undercharges. Provide feedback to the user based on the comparison with the Cashless Rate Card. Additionally, suggest a link that the user can follow to modify the expenses if needed.
        
        `;
  
        try {
          const response = await openai.Completion.create({
            engine: 'davinci-codex',
            prompt: prompt,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.7,
          });
  
          setGptResponse(response.choices[0].text.strip());
        } catch (error) {
          console.error('Error calling GPT-3.5:', error);
        }
      };
  
      runGPT();
    });
  
   

  return (
    <div>
    <h2>GPT-3.5 Response</h2>
    <p>GPT Response:{gptResponse}</p>
    </div>
  )
}

// import React from 'react'
// import openai from 'openai';
// import os

// from dotenv import load_dotenv, find_dotenv
// _ = load_dotenv(find_dotenv()) 

// openai.api_key  = os.getenv('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')


// const GptIntegration = () => {
//     const prompt = `You are a smart assistant helping users manage their medical expenses. A user has submitted an expense report for medical treatment, and you need to validate it against the Cashless Rate Card of the TPA (Third Party Administrator).
//     ICU Charges: $1200
// //         - OT Charges: $1600
// //         - Specialist Charges: $220
// //         - Surgeon Charges: $900
// //         - Meds Consumables Charges: $280

// //         The Cashless Rate Card of the TPA is as follows:
// //         - ICU Charges: $1000
// //         - OT Charges: $1500
// //         - Specialist Charges: $200
// //         - Surgeon Charges: $800
// //         - Meds Consumables Charges: $300
// //         Please validate the entered expenses and calculate the potential overcharges or undercharges. Provide feedback to the user based on the comparison with the Cashless Rate Card. Additionally, suggest a link that the user can follow to modify the expenses if needed.
        
// //         `;

//   return (
//     <div>def get_completion(prompt, model="gpt-3.5-turbo"): # Andrew mentioned that the prompt/ completion paradigm is preferable for this class
//     messages = [{"role": "user", "content": prompt}]
//     response = openai.ChatCompletion.create(
//         model=model,
//         messages=messages,
//         temperature=0, # this is the degree of randomness of the model's output
//     )
//     return response.choices[0].message["content"]
// </div>
//   )
// }

// export default GptIntegration