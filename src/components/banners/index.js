import { useEffect, useState } from 'react'
import BannerLaptop from './BannerLaptop'
import BannerMobile from './BannerMobile'
import BannerPortrait from './BannerPortrait'
import BannerTablet from './BannerTablet'

const screenSizes = {
    desktop: 1250,
    laptop: 1250,
    tablet: 1024,
    portrait: 798
}

function Banners() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [banners, setBanners] = useState(null)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        fetch(`https://admin.croconews.cc/api/banners`)
        .then(res => res.json())
        .then(data => setBanners(data))
    }, [])
    
    // Google click tracker-ისთვის
    const redirectOutside = banner => {
        window.open(banner.url)
    }

    return (
        <div className='container'>
            {
                banners && <>
                    {
                        (screenSize >= screenSizes.laptop) && <div className='cursor-pointer banner-div rounded overflow-hidden h-[120px] md:h-auto' onClick={() => redirectOutside(banners['new-banner-1330'])}>
                            <BannerLaptop banner={banners['new-banner-1330']} />
                        </div>
                    }

                    {
                        (screenSize >= screenSizes.tablet && screenSize < screenSizes.laptop) && <div className='cursor-pointer banner-div rounded overflow-hidden h-[120px] md:h-auto' onClick={() => redirectOutside(banners['new-banner-1180'])}>
                            <BannerTablet banner={banners['new-banner-1180']} />
                        </div>
                    }

                    {
                        (screenSize >= screenSizes.portrait && screenSize < screenSizes.tablet) && <div className='cursor-pointer banner-div rounded overflow-hidden h-[120px] md:h-auto' onClick={() => redirectOutside(banners['new-banner-576'])}>
                            <BannerPortrait banner={banners['new-banner-576']} />
                        </div>
                    }

                    {
                        screenSize <= screenSizes.portrait && <div className='cursor-pointer banner-div rounded overflow-hidden h-[80px] md:h-auto' onClick={() => redirectOutside(banners['new-banner-576'])}>
                            <BannerMobile banner={banners['new-banner-576']} />
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Banners
