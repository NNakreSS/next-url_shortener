interface TableProps {
  children: React.ReactNode;
}

function Table({ children, ...props }: TableProps) {
  return (
    <div className="w-full flex flex-col gap-3 p-5" {...props}>
      {children}
    </div>
  );
}

function Head({ children, ...props }: TableProps) {
  return (
    <div
      className="rounded-xl w-full text-black uppercase bg-off-wite"
      {...props}
    >
      {children}
    </div>
  );
}

function Column({ children, ...props }: TableProps) {
  return (
    <div
      className="text-2xl font-medium py-1 px-3 w-full text-center"
      {...props}
    >
      {children}
    </div>
  );
}

function Body({ children, ...props }: TableProps) {
  return (
    <div className="space-y-2" {...props}>
      {children}
    </div>
  );
}

function Row({ children, ...props }: TableProps) {
  return (
    <div
      className="bg-background/80 w-full flex items-center justify-between rounded-xl p-2 hover:bg-green/50 cursor-pointer"
      {...props}
    >
      {children}
    </div>
  );
}

function Cell({ children, ...props }: TableProps) {
  return (
    <div className="text-center py-3 text-black/80 text-lg w-full" {...props}>
      {children}
    </div>
  );
}

Table.Head = Head;
Table.Column = Column;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
