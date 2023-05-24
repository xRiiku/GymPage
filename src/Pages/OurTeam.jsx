import Footer from "./Sections/footer";
import Copyright from "./Sections/copyright";
import OurTeamIntro from "./Sections/OurTeamIntro";
import OurTeamTrainers from "./Sections/OurTeamTrainers";


export default function OurTeam() {

    return (
        <div className='parent'>
            <OurTeamIntro />
            <OurTeamTrainers />
            <Footer />
            <Copyright />
        </div>
    );
}
