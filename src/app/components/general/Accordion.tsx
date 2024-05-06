"use client";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { createContext, useContext, useState } from "react";
import clsx from "clsx";

const AccordionContext = createContext<any>(null);

function Accordion({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<any>(null);
  const data = { active, setActive };

  return (
    <AccordionContext.Provider value={data}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  itemKey: any;
  title: string;
}

function AccordionItem({ children, title, itemKey: key }: AccordionItemProps) {
  const { active, setActive } = useContext(AccordionContext);

  const clickHandle = () => {
    if (active != key) {
      setActive(key);
    } else {
      setActive(null);
    }
  };

  const isOpen = active === key;

  return (
    <div
      className="border-b border-off-wite/30 cursor-pointer transition-all duration-300 ease-in-out p-3"
      onClick={clickHandle}
    >
      <div className="flex items-center justify-between py-3">
        <h4 className="text-3xl">{title}</h4>
        <MdOutlineKeyboardArrowLeft
          className={clsx("transition duration-300 text-4xl", {
            "-rotate-90": isOpen,
          })}
        />
      </div>
      <div
        className={clsx(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          {
            "grid-rows-[0fr] opacity-0": !isOpen,
            "grid-rows-[1fr] opacity-100 py-3": isOpen,
          }
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem };
