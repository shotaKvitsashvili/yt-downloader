import React from 'react';

import downloadSvg from '../images/download.svg'

function ConvertedBlock({
    isValidUrl,
    imgSrc,
    heading,
    downloadLink,
    fileSize,
    duration,
    convertingFinished
}) {
    return <div className='mt-10'>
        {
            !isValidUrl
                ?
                <div className='rounded-3xl border border-danger bg-danger-light w-full p-5 text-danger text-center text-[14px] mb-8'>
                    <span>სამწუხაროდ ვიდეოს კონვერტაცია ვერ მოხერხდა</span>
                    <div className='py-4'></div>
                    <p>ლინკის სწორად შეყვანისთვის აუცილებელია მისამართი იწყებოდეს: https://www.youtube.com/watch?v=id-ით</p>
                </div>
                :
                convertingFinished && <div className='rounded-3xl bg-white w-full lg:p-6 p-4 flex items-stretch converter-box'>

                    {
                        imgSrc && <img src={imgSrc} className="rounded-2xl w-full lg:w-auto object-cover" />
                    }

                    <div className="flex flex-col justify-between lg:ml-6 ml-0 lg:mt-0 mt-4 w-full lg:w-auto">
                        <div>
                            {
                                heading && <h2 className='text-xl w-full lg:w-[90%]'>{heading}</h2>
                            }

                            <div className="my-4">
                                {
                                    duration && <div style={{ fontSize: '14px' }} className="flex items-center my-4 lg:my-0">
                                        <span className='text-text opacity-60'>ხანგრძლივობა: &nbsp;</span>
                                        {duration}
                                    </div>
                                }

                                {
                                    fileSize && <div style={{ fontSize: '14px' }} className="flex items-center my-4 lg:my-0">
                                        <span className='text-text opacity-60'>ფაილის ზომა: &nbsp;</span>
                                        {fileSize?.toLowerCase().trim()}
                                    </div>
                                }
                            </div>
                        </div>


                        {
                            downloadLink && <div className='lg:block hidden'>
                                <a
                                    href={downloadLink}
                                    style={{ fontSize: '14px' }}
                                    className="px-4 py-3 rounded-full text-white text-center mr-1 like_heading bg-primary flex items-center w-fit"
                                >
                                    <img src={downloadSvg} alt="download" className='opacity-40 mr-2' />
                                    ჩამოტვირთვა
                                </a>
                            </div>
                        }

                        {
                            // for mobile 
                            downloadLink && <div className='lg:hidden block'>
                                <a
                                    href={downloadLink}
                                    style={{ fontSize: '14px' }}
                                    className="px-4 py-3 rounded-full text-white text-center mr-1 like_heading bg-primary flex items-center justify-center w-full"
                                >
                                    <img src={downloadSvg} alt="download" className='opacity-40 mr-2' />
                                    ჩამოტვირთვა
                                </a>
                            </div>
                        }
                    </div>
                </div>
        }
    </div>;
}

export default ConvertedBlock;
