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
    catch {
      alert('Failed to send message.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-[696px] mt-[71px] z-20">

      {/* Email */}
      <label className="inter font-bold text-[18px] leading-[120%] text-[#252432] mb-[10px] block"> Email </label>

      <input type="email" placeholder="example@email.com" value={email}
        onChange={(e) => setEmail(e.target.value)} className="w-full h-[70px] rounded-[10px] border border-[#D6DDED] px-[32px] text-[20px] leading-[150%] text-[#8987A1] font-normal inter mb-[16px]"/>

      {/* Name */}
      <label className="inter font-bold text-[18px] leading-[120%] text-[#252432] mb-[10px] block"> Name </label>

      <input type="text" placeholder="full name" value={name}
        onChange={(e) => setName(e.target.value)} className="w-full h-[70px] rounded-[10px] border border-[#D6DDED] px-[32px] text-[20px] leading-[150%] text-[#8987A1] font-normal inter mb-[16px]"/>

      {/* Message */}
      <label className="inter font-bold text-[18px] leading-[120%] text-[#252432] mb-[10px] block"> Message </label>

      <textarea placeholder="Write your message..." value={message}
        onChange={(e) => setMessage(e.target.value)} className="w-full h-[222px] rounded-[10px] border border-[#D6DDED] p-[32px] resize-none text-[20px] leading-[150%] text-[#8987A1] font-normal inter scrollbar-hide"/>

      {/* Submit Button */}
      <button type="submit" className="w-full mt-[25px] h-[62px] rounded-[10px] bg-[#4E47FF] flex justify-center items-center cursor-pointer">
        <span className="raleway font-bold text-[16px] leading-[150%] text-white"> Get in Touch </span>
      </button>

    </form>
  )
}

export default Form
