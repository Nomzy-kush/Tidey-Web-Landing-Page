import FaqItem from "./FaqItem";

const CustomFaqList = ({ items }) => {
  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#06AED5] scrollbar-track-gray-800">
      {items.map((item, idx) => (
        <FaqItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default CustomFaqList;
