import React, { useState } from 'react'
import MinusIcon from '../../assets/FAQAsset/minus.svg'
import PlusIcon from '../../assets/FAQAsset/plus.svg'

const faqs = [
  {
    question: ' How can I contact Inkyy Team?',
    answer: (
      <>
        You can reach us through our contact form on our website or by emailing us at  
        <strong> hello@inkyy.com</strong> We typically respond within 24 hours.
      </>
    )
  },
  { 
    question: 'What services do you offer?' ,
    answer: (
      <>
        You can reach us through our contact form on our website or by emailing us at  
        <strong> hello@inkyy.com</strong> We typically respond within 24 hours.
      </>
    )
  },
  { 
    question: 'Do you provide website maintenance services?',
    answer: (
      <>
        You can reach us through our contact form on our website or by emailing us at  
        <strong> hello@inkyy.com</strong> We typically respond within 24 hours.
      </>
    ) 
  },
  { 
    question: ' How long does it take to design and develop a website?',
    answer: (
      <>
        You can reach us through our contact form on our website or by emailing us at  
        <strong> hello@inkyy.com</strong> We typically respond within 24 hours.
      </>
    )
  },
  { 
    question: 'Do you require a deposit for projects?',
    answer: (
      <>
        You can reach us through our contact form on our website or by emailing us at  
        <strong> hello@inkyy.com</strong> We typically respond within 24 hours.
      </>
    )
  },
]

function Questions() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFunc = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-[16px] w-full max-w-[696px] px-4 sm:px-6 lg:px-0">

      {/* Questions and Answer row */}
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index
        return (
          <div
            key={index}
            className="bg-white rounded-[10px] px-4 sm:px-6 lg:px-[30px] py-4 sm:py-6 lg:py-[24px] flex flex-col w-full"
          >
            {/* Question */}
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFunc(index)}
            >
              <p className="inter font-medium text-[16px] sm:text-[18px] text-[#252432]">
                {faq.question}
              </p>

              <img
                src={isActive ? MinusIcon : PlusIcon}
                alt={isActive ? 'Minus' : 'Plus'}
                className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
              />
            </div>

            <div
              className={`transition-all duration-200 overflow-hidden`}
              style={{
                maxHeight: isActive ? '200px' : '0px'
              }}
            >
              <p className="mt-[16px] inter font-normal text-[14px] sm:text-[16px] leading-[150%] text-[#8987A1]">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Questions
