import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-[#06AED5] rounded-xl p-5 cursor-pointer shadow-md transition hover:shadow-lg text-left"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-white font-semibold text-lg">{question}</h4>
        <span className="text-white text-2xl">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <p className="text-white mt-3 leading-relaxed break-words">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
