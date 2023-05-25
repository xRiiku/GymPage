import Footer from "./Sections/footer";
import Copyright from "./Sections/copyright";
import ClassesTable from "./Sections/ClassesTable";
import ClassesIntro from "./Sections/ClassesIntro";
import OurTeamTrainers from "./Sections/OurTeamTrainers";
import Info from "./Sections/info";
import HomeOurClasses from "./Sections/homeOurClasses";


export default function AboutUs() {

    return (
        <div className='parent'>
            <ClassesIntro />
            <ClassesTable />
            <HomeOurClasses />
            <OurTeamTrainers />
            <Info />
            <Footer />
            <Copyright />
        </div>
    );
}
