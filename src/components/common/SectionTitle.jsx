function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-cyan-400">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 mt-2 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;