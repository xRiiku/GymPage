import AboutIntro from "./Sections/AboutIntro";
import WhyChose from "./Sections/WhyChose";
import AboutHaveDone from "./Sections/AboutHaveDone";
import AboutTestimonials from "./Sections/aboutTestimonials";
import Footer from "./Sections/footer";
import Copyright from "./Sections/copyright";


export default function AboutUs() {

    return (
        <div className='parent'>
            <AboutIntro />
            <WhyChose />
            <AboutHaveDone />
            <AboutTestimonials />
            <Footer />
            <Copyright />
        </div>
    );
}
