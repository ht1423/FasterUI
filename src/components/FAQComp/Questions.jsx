import React from 'react'
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
    question: 'What services do you offer?' 
  },
  { 
    question: 'Do you provide website maintenance services?' 
  },
  { 
    question: ' How long does it take to design and develop a website?' 
  },
  { 
    question: 'Do you require a deposit for projects?' 
  },
]

function Questions() {

  return (
    <div className="flex flex-col gap-[16px] w-full max-w-[696px] px-4 sm:px-6 lg:px-0">

      {faqs.map((faq, index) => (

        <div key={index} className={`bg-white rounded-[10px] px-4 sm:px-6 lg:px-[30px] py-4 sm:py-6 lg:py-[24px] ${
          index === 0 ? 'h-auto' : 'h-[70px]'} flex flex-col`}>

          {/* Questions */}
          <div className="flex justify-between items-center">
            <p className="inter font-medium text-[16px] sm:text-[18px] text-[#252432]">{faq.question}</p>

            {/* Plus or Minus Icon */}
            <img src={index === 0 ? MinusIcon : PlusIcon} alt={index === 0 ? 'Minus' : 'Plus'} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"/>
          </div>

          {/* Answer first card */}
          {index === 0 && (
            <p className="mt-[16px] inter font-normal text-[14px] sm:text-[16px] leading-[150%] text-[#8987A1] max-w-full"> {faq.answer} </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Questions
