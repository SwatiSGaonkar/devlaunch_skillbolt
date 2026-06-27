function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;