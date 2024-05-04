import { GrDocumentUser } from "react-icons/gr";

function LastClickCard() {
  return (
    <div className="bg-white shadow-md h-52 rounded-lg">
      <div className="flex gap-3 items-center border-b border-b-gray/50 px-2 py-3">
        <GrDocumentUser size={26} className="text-green" />
        <span className="text-2xl">Son Tıklamalar</span>
      </div>

      <div></div>
    </div>
  );
}

export default LastClickCard;
