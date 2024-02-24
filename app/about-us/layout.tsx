export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      this is about-us layout!!!
    </div>
  );
}
