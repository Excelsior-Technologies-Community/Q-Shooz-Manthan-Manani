import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const orderFaqs = [
  {
    question: "How do I make a purchase?",
    answer: "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall."
  },
  {
    question: "How do I know if my order is confirmed?",
    answer: "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall."
  },
  {
    question: "Can I change my shipping address after my order is placed?",
    answer: "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall."
  }
];

const shippingFaqs = [
  {
    question: "Do you ship internationally?",
    answer: "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall."
  },
  {
    question: "When will my order be shipped?",
    answer: "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall."
  },
  {
    question: "What is your return policy?",
    answer: "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall."
  },
  {
    question: "How long will it take until I receive my order?",
    answer: "This is an example of a response that you might give. It's good to be as thorough as possible in responses as that has a tendency to improve trust overall."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick, isLast }) => {
  return (
    <div className={`border-t border-gray-200 py-6 ${isLast ? 'border-b' : ''}`}>
      <button 
        onClick={onClick} 
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-bold text-[20px] text-gray-900">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-gray-400" strokeWidth={1.5} /> : <Plus className="w-5 h-5 text-gray-400" strokeWidth={1.5} />}
      </button>
      {isOpen && (
        <p className="mt-4 text-[16px] text-gray-500 leading-relaxed pr-10">
          {answer}
        </p>
      )}
    </div>
  );
};

const Faqs = () => {
  const [openOrderIndex, setOpenOrderIndex] = useState(0); 
  const [openShippingIndex, setOpenShippingIndex] = useState(0);

  return (
    <div className="w-full font-sans text-gray-900 mb-20">
      {/* Breadcrumbs */}
      <div className="bg-white py-4 px-6 md:px-15 text-[13.5px] text-gray-500 border-b border-gray-100">
        <span className="text-[#FDB813]">Home</span> / <span className="text-black">Faqs</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-15 mt-16 text-center">
        {/* Orders Section */}
        <div className="mb-20">
           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Orders</h2>
           <p className="text-gray-400 text-[15px] mb-12">Below are some of are common questions about<br/>orders</p>
           
           <div className="text-left">
              {orderFaqs.map((faq, index) => (
                 <AccordionItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openOrderIndex === index}
                    onClick={() => setOpenOrderIndex(openOrderIndex === index ? -1 : index)}
                    isLast={index === orderFaqs.length - 1}
                 />
              ))}
           </div>
        </div>

        {/* Shipping & Returns Section */}
        <div className="mb-24">
           <h2 className="text-4xl md:text-[44px] font-bold text-black mb-4">Shipping & Returns</h2>
           <p className="text-gray-400 text-[15px] mb-12">Below are some common questions about<br/>shipping, returns, and exchanges</p>
           
           <div className="text-left">
              {shippingFaqs.map((faq, index) => (
                 <AccordionItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openShippingIndex === index}
                    onClick={() => setOpenShippingIndex(openShippingIndex === index ? -1 : index)}
                    isLast={index === shippingFaqs.length - 1}
                 />
              ))}
           </div>
        </div>

        {/* Call to Action block */}
        <div className="text-center pb-12">
            <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold mb-6">ADVAND SUB</p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-4 text-black">
              Have a project in mind? Let's talk.
            </h2>
            <h3 className="text-[22px] font-bold mb-3 text-black">Didn't find your answer?</h3>
            <p className="text-gray-500 text-[15px] mb-10">Don't hesitate to contact us</p>
            
            <button className="bg-[#AE3F4F] text-white px-8 py-3 text-[13px] font-semibold tracking-widest hover:bg-black transition-colors rounded uppercase">
               Contact Us
            </button>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
