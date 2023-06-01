import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedContent = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const content = isExpanded && (
      <div className="border-b p-5">{item.content}</div>
    );
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    const handleClick = () => {
      setExpandedIndex((currentIndex) => {
        if (currentIndex !== index) return index;
        else return -1;
      });
    };

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={handleClick}
        >
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedContent}</div>;
}

export default Accordion;
