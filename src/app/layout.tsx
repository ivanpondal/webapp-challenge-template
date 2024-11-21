import type { Metadata } from "next";
import "./globals.css";
import MasterDetailLayout from "@/components/ui/master-detail-layout";
import { SpaceLaunchItem } from "@/components/space-launch/SpaceLaunchItem";
import { SpaceLaunchList } from "@/components/space-launch/SpaceLaunchlist";

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
        <MasterDetailLayout master={<SpaceLaunchList />}>{children}</MasterDetailLayout>
      </body>
    </html>
  );
}
