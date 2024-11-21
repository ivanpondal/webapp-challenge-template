
export default function MasterDetailLayout({
    master,
    children,
}: Readonly<{
    master: React.ReactNode;
    children: React.ReactNode;
}>) {
    return (
        <div className="container sm mx-auto mt-4">
            {master}
            <div>
                {children}
            </div>
        </div>
    );
}