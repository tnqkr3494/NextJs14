import { Metadata } from "next";
import Nav from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | NextJS",
    default: "NextJS",
  },
  description: "this is description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
