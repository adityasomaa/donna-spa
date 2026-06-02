export default function Stars({
  count = 5,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M10 1.6l2.47 5.18 5.7.66-4.2 3.86 1.1 5.62L10 14.9l-5.07 2.68 1.1-5.62-4.2-3.86 5.7-.66z" />
        </svg>
      ))}
    </div>
  );
}
