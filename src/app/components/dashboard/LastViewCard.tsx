import { IconType } from "react-icons";

interface LastViewCardProps {
  Icon: IconType;
  label: string;
  children: React.ReactNode;
}

function LastViewCard({ Icon, label, children, ...props }: LastViewCardProps) {
  return (
    <section
      {...props}
      className="bg-white shadow-md h-auto rounded-lg overflow-hidden"
    >
      <div className="flex gap-3 items-center border-b border-b-gray/50 px-2 py-3">
        <Icon size={26} className="text-green" />
        <span className="text-2xl">{label}</span>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default LastViewCard;
