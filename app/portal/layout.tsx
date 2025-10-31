export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='w-full'>
      <div className='w-full'>{children}</div>
    </section>
  );
}
