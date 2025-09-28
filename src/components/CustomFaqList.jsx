import FaqItem from "./FaqItem";

const CustomFaqList = ({ items }) => {
  return (
    <div
  id="FAQs"
  className="faq-list space-y-4 max-h-[400px] overflow-y-auto pr-2 w-full max-w-full mx-auto"
>
  {items.map((item, idx) => (
    <FaqItem key={idx} question={item.question} answer={item.answer} />
  ))}
</div>

  );
};

export default CustomFaqList;
