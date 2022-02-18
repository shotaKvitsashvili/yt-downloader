import React from 'react'

import maiavtoMain from '../images/maiavto-main.png'
import maiavtoIcon from '../images/maiavto-icon.svg'

import amindigeMain from '../images/amindige-main.png'
import amindigeIcon from '../images/amindige-icon.svg'

import tiktokMain from '../images/tiktok-main.png'
import tiktokIcon from '../images/tiktok-icon.svg'

const sites = [
    {
        name: 'MAI-AVTO.GE',
        url: '',
        desc: 'გაიგე საინტერესო ფაქტები ავტომობილებზე',
        icon: maiavtoIcon,
        img: maiavtoMain
    },
    {
        name: 'AMINDI-GE.GE',
        url: '',
        desc: 'ყველაზე ზუსტი ამინდის პროგნოზი',
        icon: amindigeIcon,
        img: amindigeMain
    },
    {
        name: 'Tik-Tok.ge',
        url: '',
        desc: 'გაერთე ტრენდული ტიკტოკ ვიდეოებით',
        icon: tiktokIcon,
        img: tiktokMain
    },
]

function SimilarSites() {
    return (
        <div className='grid lg:grid-cols-3 gap-4 mb-8'>
            {
                sites.map(site => (
                    <a href={site.url} key={site.name} target="_blank">
                        <div className="rounded-2xl bg-white xl:p-12 lg:p-10 p-6 relative grayscale hover:grayscale-0 transition duration-150 min-h-[190px] overflow-hidden">
                            <div className="w-2/3">
                                <div className="flex items-center">
                                    <img src={site.icon} alt={site.name} className="max-w-[22px]" />
                                    <div className="ml-2">
                                        <h3 className='text-[18px]'>
                                            {site.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="mt-2 opacity-60">
                                    {site.desc}
                                </div>
                            </div>

                            <div className='absolute right-[-5px] top-0 h-full'>
                                <img src={site.img} alt={site.name} className="h-full" />
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default SimilarSites