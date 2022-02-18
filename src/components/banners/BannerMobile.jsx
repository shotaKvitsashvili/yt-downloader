function BannerMobile({ banner }) {
    return (
        <>
            {
                banner && <iframe src="https://promotions.crocobet.com/iframes/100prx120/100prx120.html" className="w-full h-full border-none pointer-none banner-iframe overflow-hidden" scrolling="no"></iframe>
            }

            {/* {
                !banner && <BannerSkeleton />
            } */}
        </>
    )
}

export default BannerMobile
