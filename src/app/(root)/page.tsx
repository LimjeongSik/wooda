import MainSwiper from "./MainSwiper";
import MainRequest from "./MainRequest";
import BlockTemplate from "@/components/Template/BlockTemplate";
import dynamic from "next/dynamic";
import Loading from "../loading";
import MainDumy from "./MainDumy";
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
