import WhyChose from './HomeSections/WhyChose'
import HomeOurClasses from './HomeSections/homeOurClasses'
import Intro from './HomeSections/intro'
import PricingPlan from './HomeSections/pricingPlan'

export default function Home () {

    return (
        <div className='parent'>
            <Intro />
            <WhyChose />
            <HomeOurClasses />
            <PricingPlan />
        </div>
    )
}