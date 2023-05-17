import MainSwiper from "./main/MainSwiper";
import MainRequest from "./main/MainRequest";
import BlockTemplate from "@/components/Template/BlockTemplate";
import MainTitle from "./main/MainTitle";
import MainMark from "./main/MainMark";
import MainProfile from "./main/MainProfile";
import MainArrow from "./main/MainArrow";

export default function Main() {
    return (
        <BlockTemplate styles={{ paddingBottom: "44rem" }}>
            <MainTitle />
            <MainMark />
            <MainProfile />
            <MainArrow />
            <MainSwiper />
            <MainRequest />
        </BlockTemplate>
    );
}
