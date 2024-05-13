import TotalCardProps from "@/types/TotalCardType";

function TotalCard({ Icon, count, info, label }: TotalCardProps) {
  return (
    <div className="flex gap-5 flex-col flex-1 bg-white p-3 rounded-lg shadow-cover">
      <div className="flex gap-2 items-center justify-start">
        <Icon size={32} className="text-green" />
        <span className="text-4xl font-light">{count}</span>
        {info && <span className="font-light text-lg opacity-50">{info}</span>}
      </div>
      <div>
        <span className="text-4xl font-light">{label}</span>
      </div>
    </div>
  );
}

export default TotalCard;
