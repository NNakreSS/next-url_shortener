export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="h-screen w-full">
        <div className="mx-auto">{children}</div>
      </div>
    );
  }
  