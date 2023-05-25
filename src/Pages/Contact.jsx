import ContactIntro from "./Sections/ContactIntro";
import Footer from "./Sections/footer";
import Copyright from "./Sections/copyright";
import ContactMap from "./Sections/ContactMap";


export default function Contact() {

    return (
        <div className='parent'>
            <ContactIntro />
            <ContactMap />
            <Footer />
            <Copyright />
        </div>
    );
}
