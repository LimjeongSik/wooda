import BasicLayout from "@/components/BasicLayout";
import StyledComponentsRegistry from "@/lib/styledComponents";
import { GlobalStyle } from "@/styles/GlobalStyle";

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
            <body>
                <StyledComponentsRegistry>
                    <GlobalStyle />
                    <BasicLayout>{children}</BasicLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
