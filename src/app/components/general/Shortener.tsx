import Button from "./Button";
// links
import { LuLink } from "react-icons/lu";

function Shortener() {
  return (
    <div className="bg-white shadow-md flex justify-between items-center gap-3 p-2 rounded-lg h-14 box-border">
      <div className="flex gap-3 border border-light-aqua w-full h-full p-2 justify-start items-center rounded-lg box-border">
        <LuLink className="text-light-aqua" size={20} />
        <input
          placeholder="https://link.nakres.dev/"
          type="url"
          className="outline-none border-none bg-transparent w-full font-light"
        />
      </div>
      <Button
        label="Kısalt"
        className="flex items-center justify-center bg-light-aqua text-white rounded-lg text-2xl px-5 font-normal h-full box-border"
      />
    </div>
  );
}

export default Shortener;
