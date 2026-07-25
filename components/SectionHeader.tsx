interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="space-y-1">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-sm text-zinc-600">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeader;
