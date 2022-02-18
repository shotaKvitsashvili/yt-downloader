import React from 'react';

import copySvg from '../images/copy.svg'
import inputSvg from '../images/input.svg'
import downloadSvg from '../images/download-black.svg'

function HowToConvert() {
    const steps = [
        {
            icon: copySvg,
            heading: 'დააკოპირეთ ვიდეოს URL მისამართი',
            desc: 'დააკოპირეთ ლინკი YouTube-დან'
        },
        {
            icon: inputSvg,
            heading: 'ჩასვით დაკოპირებული მისამართი',
            desc: 'ჩასვით იუთუბის ლინკი ზემოთ არსებულ ველში და დააჭირეთ ღილაკს "კონვერტაცია"'
        },
        {
            icon: downloadSvg,
            heading: 'ჩამოტვირთეთ MP3 ფაილი',
            desc: 'კონვერტაციის შემდეგ დააჭირეთ ღილაკს "ჩამოტვირთვა"'
        }
    ]

    return <>
        <h1 className='text-[20px] text-center mb-8'>როგორ გადავიყვანოთ YOUTUBE-ის ლინკი MP3 ფორმატში</h1>
        <div className="grid lg:grid-cols-3 gap-4">
            {
                steps.map(step => (
                    <div key={step.heading} className="flex flex-col items-center text-center rounded-2xl bg-white xl:p-15 lg:p-10 p-6">
                        <img src={step.icon} alt={step.heading} className="opacity-30 w-[32px] h-[32px]" />
                        <h3 className='text-[14px] mt-4 mb-3'>{step.heading}</h3>
                        <p className='opacity-60 color-text'>{step.desc}</p>
                    </div>
                ))
            }
        </div>

        <div className='mt-10'>
            <p className='text-center color-text'>
                Mp3-downloader.ge საშუალებას გაძლევთ ჩამოტვირთოთ და გადაიყვანოთ YouTube ვიდეო MP3 მუსიკად მაღალი ხარისხით 320 kbps-მდე. მხარდაჭერილი ყველა პოპულარული ფორმატი მოიცავს MP4, MP3, FLV, M4V, WMV და WEBM. შეგიძლიათ თავისუფლად ჩამოტვირთოთ ვიდეო YouTube-დან და გადაიყვანოთ ისინი MP3 აუდიოზე შეზღუდვის გარეშე.
            </p>
        </div>
    </>;
}

export default HowToConvert;
