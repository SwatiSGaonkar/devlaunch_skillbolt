function Button({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-cyan-400 text-black hover:bg-cyan-300",

    secondary:
      "border border-cyan-400 hover:bg-cyan-400 hover:text-black",

    danger:
      "bg-red-600 hover:bg-red-500 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;