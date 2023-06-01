import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const options = [
    { label: "Not spicy", value: "mild" },
    { label: "A little spicy", value: "spicy" },
    { label: "Really spicy!", value: "extra_spicy" },
  ];

  const handleSelection = (option) => {
    setSelection(option);
  };

  return (
    <div className="flex">
      <Dropdown
        options={options}
        selection={selection}
        onSelect={handleSelection}
      />
    </div>
  );
}

export default DropdownPage;
