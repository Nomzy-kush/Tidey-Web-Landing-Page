import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
  className="faq-item w-full max-w-full bg-[#06AED5] rounded-xl p-4 cursor-pointer shadow-md transition hover:shadow-lg text-left box-border overflow-hidden"
  onClick={() => setOpen(!open)}
>
  <div className="flex justify-between items-center w-full">
    <h4 className="faq-question text-white font-semibold text-base leading-snug break-words w-[85%]">
      {question}
    </h4>
    <span className="text-white text-xl flex-shrink-0">{open ? "−" : "+"}</span>
  </div>
  {open && (
    <p className="faq-answer text-white mt-3 leading-relaxed break-words">
      {answer}
    </p>
  )}
</div>

  
  );
};

export default FaqItem;
