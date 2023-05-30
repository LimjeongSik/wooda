import MainSwiper from "./main/MainSwiper";
import MainRequest from "./main/MainRequest";
import BlockTemplate from "@/components/Template/BlockTemplate";
import MainTitle from "./main/MainTitle";
import MainMark from "./main/MainMark";
import MainProfile from "./main/MainProfile";
import MainArrow from "./main/MainArrow";
import FullHeightInner from "@/components/Layout/FullHeightInner";
import { Suspense } from "react";

export default function Main() {
    return (
        <FullHeightInner>
            <BlockTemplate styles={{ paddingBottom: "44rem" }}>
                <MainTitle />
                <MainMark />
                <MainProfile />
                <MainArrow />
                <MainSwiper />
                <MainRequest />
            </BlockTemplate>
        </FullHeightInner>
    );
}
