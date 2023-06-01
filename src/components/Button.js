import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classNames(
    "px-3 py-1.5 border flex items-center justify-center gap-1",
    {
      "border-blue-500 bg-blue-500 text-white": primary && !outline,
      "border-gray-900 bg-gray-900 text-white": secondary && !outline,
      "border-green-500 bg-green-500 text-white": success && !outline,
      "border-yellow-400 bg-yellow-400 text-white": warning && !outline,
      "border-red-500 bg-red-500 text-white": danger && !outline,
      "rounded-full": rounded,
      "border-blue-500 bg-white text-blue-500": outline && primary,
      "border-gray-900 bg-white text-gray-900": outline && secondary,
      "border-green-500 bg-white text-green-500": outline && success,
      "border-yellow-400 bg-white text-yellow-400": outline && warning,
      "border-red-500 bg-white text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const number =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (number > 1) {
      return new Error(
        "Only one from primary, secondary, success, warning and danger can be used!"
      );
    }
  },
};

export default Button;
