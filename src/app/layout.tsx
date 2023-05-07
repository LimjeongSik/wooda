export const metadata = {
    title: "Woo-da",
    description: "Wooda's portfolio feat. JS",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
