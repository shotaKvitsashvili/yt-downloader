// import BannerSkeleton from "../skeletons/BannerSkeleton"

function BannerDesktop({ banner }) {
    return (
        <>
            {
                banner && <iframe src="https://promotions.crocobet.com/iframes/1370x150/1370x150.html" className="w-100 border-none pointer-none banner-iframe"></iframe>
            }

            {/* {
                !banner && <BannerSkeleton />
            } */}
        </>
    )
}

export default BannerDesktop
