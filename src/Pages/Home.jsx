import WhyChose from './Sections/WhyChose'
import Footer from './Sections/footer'
import HomeOurClasses from './Sections/homeOurClasses'
import Info from './Sections/info'
import Intro from './Sections/intro'
import PricingPlan from './Sections/pricingPlan'

export default function Home () {

    return (
        <div className='parent'>
            <Intro />
            <WhyChose />
            <HomeOurClasses />
            <PricingPlan />
            <Info />
            <Footer />
        </div>
    )
}