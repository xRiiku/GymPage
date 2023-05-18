import WhyChose from './Sections/WhyChose'
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
        </div>
    )
}