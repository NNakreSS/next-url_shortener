import React from "react";

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-1 lg:px-40 grow relative h-full w-full">
      {children}
    </main>
  );
}

export default MainContainer;
