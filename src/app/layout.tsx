import type { Metadata } from "next";
import "./globals.css";
import MasterDetailLayout from "@/components/ui/master-detail-layout";
import { SpaceLaunchList } from "@/components/space-launch/SpaceLaunchList";

export const metadata: Metadata = {
  title: "Martian Cronicles",
  description: "Timeline of space technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-4xl font-bold">martian chronicles</h1>

        <MasterDetailLayout master={<SpaceLaunchList />}>
          {children}
        </MasterDetailLayout>
      </body>
    </html>
  );
}
