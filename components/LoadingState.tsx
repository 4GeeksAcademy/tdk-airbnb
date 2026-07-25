const LoadingState = ({ label }: { label: string }) => {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm">
      <p className="text-sm font-medium text-zinc-700">{label}</p>
      <div className="mx-auto mt-4 h-2 w-28 animate-pulse rounded-full bg-amber-200" />
    </div>
  );
};

export default LoadingState;
