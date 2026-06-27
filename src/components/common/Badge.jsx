function Badge({ children }) {
  return (
    <span className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}

export default Badge;