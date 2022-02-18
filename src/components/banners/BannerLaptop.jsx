function BannerLaptop({ banner }) {
    return (
        <>
            {
                banner && <iframe src="https://promotions.crocobet.com/iframes/1230x150/1230x150.html" className="w-100 border-none pointer-none banner-iframe"></iframe>
            }

            {/* {
                !banner && <BannerSkeleton />
            } */}
        </>
    )
}

export default BannerLaptop
