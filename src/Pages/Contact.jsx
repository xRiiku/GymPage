import ContactIntro from "./Sections/ContactIntro";
import Footer from "./Sections/footer";
import Copyright from "./Sections/copyright";
import ContactMap from "./Sections/ContactMap";
import ContactGetInTouch from "./Sections/ContactGetInTouch";


export default function Contact() {

    return (
        <div className='parent'>
            <ContactIntro />
            <ContactGetInTouch />
            <ContactMap />
            <Footer />
            <Copyright />
        </div>
    );
}
