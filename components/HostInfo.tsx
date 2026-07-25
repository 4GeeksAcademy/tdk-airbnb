interface HostInfoProps {
  avatar: string;
  name: string;
  tenure: string;
  badge?: string;
}

const HostInfo = ({ avatar, name, tenure, badge }: HostInfoProps) => {
  return (
    <section className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4">
      <div>
        <p className="font-semibold">Hosted by {name}</p>
        <p className="text-sm text-zinc-600">{tenure}</p>
        {badge ? <p className="text-sm text-ember">{badge}</p> : null}
      </div>
      <img src={avatar} alt={name} className="h-14 w-14 rounded-full object-cover" />
    </section>
  );
};

export default HostInfo;
