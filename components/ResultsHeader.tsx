interface ResultsHeaderProps {
  count: number;
}

const ResultsHeader = ({ count }: ResultsHeaderProps) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-3">
      <p className="text-sm text-zinc-600">{count} stays found</p>
      <p className="text-sm font-semibold text-zinc-800">Price sorted</p>
    </div>
  );
};

export default ResultsHeader;
