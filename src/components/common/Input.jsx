function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:border-cyan-400 outline-none"
      />
    </div>
  );
}

export default Input;