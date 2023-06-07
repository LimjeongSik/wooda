import FullHeightInner from "@/components/Layout/FullHeightInner";
import AboutProfile from "./AboutProfile";
import AboutDescription from "./AboutDescription";
import AboutEnd from "./AboutEnd";

export default function About() {
    return (
        <FullHeightInner>
            <AboutProfile />
            <AboutDescription />
            <AboutEnd />
        </FullHeightInner>
    );
}
