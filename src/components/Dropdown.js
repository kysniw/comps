import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handleDocClick = (e) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocClick, true);

    return () => {
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selection?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
