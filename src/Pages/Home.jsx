import WhyChose from './HomeSections/WhyChose'
import HomeOurClasses from './HomeSections/homeOurClasses'
import Intro from './HomeSections/intro'

export default function Home () {

    return (
        <div className='parent'>
            <Intro />
            <WhyChose />
            <HomeOurClasses />
        </div>
    )
}