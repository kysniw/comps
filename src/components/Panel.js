import React from "react";
import classNames from "classnames";

function Panel({ children, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    rest.className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
