import FullHeightInner from "@/components/Layout/FullHeightInner";
import AboutTitle from "./AboutTitle";
import AboutDescription from "./AboutDescription";
import AboutAbility from "./AboutAbility";
import AboutExperience from "./AboutExperience";
import AboutContact from "./AboutContact";

export default function About() {
    return (
        <FullHeightInner>
            <AboutTitle />
            <AboutDescription />
            <AboutAbility />
            <AboutExperience />
            <AboutContact />
        </FullHeightInner>
    );
}
