function BannerTablet({ banner }) {
    return (
        <>
            {
                banner && <iframe src="https://promotions.crocobet.com/iframes/990x120/990x120.html" className="w-100 border-none pointer-none banner-iframe"></iframe>
            }

            {/* {
                !banner && <BannerSkeleton />
            } */}
        </>
    )
}

export default BannerTablet
