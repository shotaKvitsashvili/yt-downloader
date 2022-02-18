function BannerPortrait({ banner }) {
    return (
        <>
            {
                banner && <iframe src="https://promotions.crocobet.com/iframes/540x120/540x120.html" className="w-100 border-none pointer-none banner-iframe"></iframe>
            }
{/* 
            {
                !banner && <BannerSkeleton />
            } */}
        </>
    )
}

export default BannerPortrait
