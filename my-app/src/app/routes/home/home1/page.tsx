'use client'
import FeatureProperty from '@/app/common components/featureproperty'
import ImageSwap from '@/app/common components/imageSwap'
import LogoSection from '@/app/common components/partner'
import HomeHeader1 from '@/app/components/homeHeader1/homeHeader1'
import PropertySwap from '@/app/components/propertySwap'
import Whyus from '@/app/components/whyus'
import BlogPost from '../../../common components/blogpost';
import VideoPLay2 from '@/app/common components/videoPlay2'
import { Reviews } from '@/app/common components/reviews'
function Home1() {

    return (
        <div>
            <HomeHeader1 />
            <PropertySwap />
            <Whyus image='/whyus/whyus2.webp'/>
            <FeatureProperty type='mainpage' />
            <VideoPLay2/>
            <ImageSwap />
            <LogoSection />
            <Reviews />
            <BlogPost />
        </div>
    )
}

export default Home1