export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex flex-1 flex-col font-sans">
    {children}
    </main>;
}
