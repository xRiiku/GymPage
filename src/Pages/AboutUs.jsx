import AboutIntro from "./Sections/AboutIntro";
import WhyChose from "./Sections/WhyChose";
import AboutHaveDone from "./Sections/AboutHaveDone";

export default function AboutUs() {

    return (
        <div className='parent'>
            <AboutIntro />
            <WhyChose />
            <AboutHaveDone />
        </div>
    )
}