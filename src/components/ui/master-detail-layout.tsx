'use client'
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MasterDetailLayout({
    master,
    children,
}: Readonly<{
    master: React.ReactNode;
    children: React.ReactNode;
}>) {
    const { id: isDetailPage } = useParams<{ id?: string }>()

    return (
        <div className="container mx-auto mt-4 flex flex-row">
            <div className={cn({ "invisible": isDetailPage, "w-0": isDetailPage, "w-full": !isDetailPage }, "md:visible md:max-w-md md:w-full")}>
                {master}
            </div>
            <div className={cn({ "invisible": !isDetailPage, "w-0": !isDetailPage, "w-full": isDetailPage }, "md:visible md:w-full bg-slate-400")}>
                {children}
            </div>
        </div>
    );
}