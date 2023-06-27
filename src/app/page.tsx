import MainSwiper from "./main/MainSwiper";
import MainRequest from "./main/MainRequest";
import BlockTemplate from "@/components/Template/BlockTemplate";
import dynamic from "next/dynamic";
import Loading from "./loading";
import MainDumy from "./main/MainDumy";
import Onepage from "@/components/Layout/Onepage";

export default function Main() {
    const FullHeightInnerDynamic = dynamic(
        () => import("@/components/Layout/FullHeightInner"),
        {
            loading: () => <Loading />,
        },
    );

    return (
        <FullHeightInnerDynamic>
            <BlockTemplate styles={{ paddingBottom: "44rem" }}>
                <Onepage />
                <MainDumy />
                <MainSwiper />
                <MainRequest />
            </BlockTemplate>
        </FullHeightInnerDynamic>
    );
}
