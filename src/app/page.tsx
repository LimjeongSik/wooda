import MainSwiper from "./main/MainSwiper";
import MainRequest from "./main/MainRequest";
import BlockTemplate from "@/components/Template/BlockTemplate";
import MainTitle from "./main/MainTitle";
import MainMark from "./main/MainMark";
import MainProfile from "./main/MainProfile";
import dynamic from "next/dynamic";
import Loading from "./loading";
import MainDumy from "./main/MainDumy";

export default function Main() {
    const FullHeightInnerDynamic = dynamic(
        () => import("@/components/Layout/FullHeightInner"),
        {
            loading: () => <Loading />,
        },
    );

    return (
        <>
            <FullHeightInnerDynamic>
                <BlockTemplate styles={{ paddingBottom: "44rem" }}>
                    <MainTitle />
                    <MainMark />
                    <MainProfile />
                    <MainDumy />
                    <MainSwiper />
                    <MainRequest />
                </BlockTemplate>
            </FullHeightInnerDynamic>
        </>
    );
}
