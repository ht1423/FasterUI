import React, { useState } from 'react'
import axios from 'axios';

function Form() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      

      await axios.post(
        '/save-customer',
        formData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      setEmail('');
      setName('');
      setMessage('');
      alert('Message sent successfully!');
    } 
    catch (error) {
      console.error(error.response?.data || error.message);
      alert('Failed to send message. Check console for details.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[696px] mt-[50px] sm:mt-[70px] md:mt-[60px] lg:mt-[65px] xl:mt-[71px] z-20 px-4 sm:px-6 md:px-0">

      {/* Email */}
      <label className="inter font-bold text-[14px] sm:text-[16px] md:text-[17px] xl:text-[18px] leading-[120%] text-[#252432] mb-[8px] sm:mb-[9px] xl:mb-[10px] block"> Email </label>

      <input type="email" placeholder="example@email.com" value={email}
        onChange={(e) => setEmail(e.target.value)} className="w-full h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] xl:h-[70px] rounded-[8px] sm:rounded-[9px] xl:rounded-[10px] border border-[#D6DDED] px-[20px] sm:px-[24px] md:px-[28px] xl:px-[32px] text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] leading-[150%] text-[#8987A1] font-normal inter mb-[12px] sm:mb-[14px] xl:mb-[16px]"/>

      {/* Name */}
      <label className="inter font-bold text-[14px] sm:text-[16px] md:text-[17px] xl:text-[18px] leading-[120%] text-[#252432] mb-[8px] sm:mb-[9px] xl:mb-[10px] block"> Name </label>

      <input type="text" placeholder="full name" value={name}
        onChange={(e) => setName(e.target.value)} className="w-full h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] xl:h-[70px] rounded-[8px] sm:rounded-[9px] xl:rounded-[10px] border border-[#D6DDED] px-[20px] sm:px-[24px] md:px-[28px] xl:px-[32px] text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] leading-[150%] text-[#8987A1] font-normal inter mb-[12px] sm:mb-[14px] xl:mb-[16px]"/>

      {/* Message */}
      <label className="inter font-bold text-[14px] sm:text-[16px] md:text-[17px] xl:text-[18px] leading-[120%] text-[#252432] mb-[8px] sm:mb-[9px] xl:mb-[10px] block"> Message </label>

      <textarea placeholder="Write your message..." value={message}
        onChange={(e) => setMessage(e.target.value)} className="w-full h-[150px] sm:h-[170px] md:h-[190px] lg:h-[210px] xl:h-[222px] rounded-[8px] sm:rounded-[9px] xl:rounded-[10px] border border-[#D6DDED] p-[20px] sm:p-[24px] md:p-[28px] xl:p-[32px] resize-none text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] leading-[150%] text-[#8987A1] font-normal inter scrollbar-hide"/>

      {/* Submit Button */}
      <button type="submit" className="w-full mt-[20px] sm:mt-[22px] md:mt-[23px] lg:mt-[24px] xl:mt-[25px] h-[50px] sm:h-[54px] md:h-[58px] lg:h-[60px] xl:h-[62px] rounded-[8px] sm:rounded-[9px] xl:rounded-[10px] bg-[#4E47FF] flex justify-center items-center cursor-pointer hover:opacity-70">
        <span className="raleway font-bold text-[14px] sm:text-[15px] xl:text-[16px] leading-[150%] text-white"> Get in Touch </span>
      </button>

    </form>
  )
}

export default Form
