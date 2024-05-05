interface LastViewTableProps {
  children: React.ReactNode;
}

function LastViewTable({ children, ...props }: LastViewTableProps) {
  return (
    <table className="w-full" {...props}>
      {children}
    </table>
  );
}

function Head({ children, ...props }: LastViewTableProps) {
  return (
    <thead className="w-full py-3" {...props}>
      {children}
    </thead>
  );
}

function Column({ children, ...props }: LastViewTableProps) {
  return (
    <th className="text-xl font-medium text-gray/60 py-3 bg-white" {...props}>
      {children}
    </th>
  );
}

function Body({ children, ...props }: LastViewTableProps) {
  return <tbody {...props}>{children}</tbody>;
}

function Row({ children, ...props }: LastViewTableProps) {
  return (
    <tr className="py-10 odd:bg-off-wite" {...props}>
      {children}
    </tr>
  );
}

function Cell({ children, ...props }: LastViewTableProps) {
  return (
    <td className="text-center py-3 text-gray/70 text-lg" {...props}>
      {children}
    </td>
  );
}

LastViewTable.Head = Head;
LastViewTable.Column = Column;
LastViewTable.Body = Body;
LastViewTable.Row = Row;
LastViewTable.Cell = Cell;

export default LastViewTable;
