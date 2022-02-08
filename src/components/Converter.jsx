import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import ConvertedBlock from './ConvertedBlock';

function Converter() {
    const [url, setUrl] = useState('')
    const [html, setHtml] = useState(null)
    const [isConverting, setIsConverting] = useState(false)
    const [isValidUrl, setIsValidUrl] = useState(true)
    const [convertingFinished, setConvertingFinished] = useState(false)
    const [imgSrc, setImgSrc] = useState(null)
    const [heading, setHeading] = useState(null)
    const [downloadLink, setDownloadLink] = useState(null)
    const [fileSize, setFileSize] = useState(null)

    const inputRef = useRef(null)

    useEffect(() => {
        const img = document.querySelector('.converter-hidden-container img')
        const h = document.querySelector('.converter-hidden-container h2')
        const link = document.querySelector('.converter-hidden-container a')
        const size = document.querySelector('.converter-hidden-container a')?.querySelectorAll('div')[3]

        setImgSrc(img?.src)
        setHeading(h?.textContent)
        setDownloadLink(link?.href)
        setFileSize(size?.textContent)
    }, [html])

    const downloadFile = () => {
        setHtml(null)
        setIsConverting(true)
        setConvertingFinished(false)

        if (url.includes('youtube.com/watch?v=')) {
            setIsValidUrl(true)

            let u = url.split('v=')[1]
            u = u.split('&')[0]

            axios.get(`https://www.yt-download.org/api/widget/mp3/${u}`)
                .then(data => {
                    let h = data.data.split('<body>')[1];
                    h = h.split('</body>')[0]

                    setHtml(data.data)
                    setIsConverting(false)
                    setConvertingFinished(true)
                })
        } else {
            setIsConverting(false)
            setIsValidUrl(false)
        }
    }

    return <div className="overflow-hidden">
        <div className='pt-14'>
            <h1 className='text-[20px] text-center'>ჩამოტვირთე YOUTUBE ვიდეოები MP3 ფორმატში</h1>

            <div className="flex w-full items-center border border-primary mt-8 rounded-full cursor-text bg-white" onClick={() => inputRef.current.focus()}>
                <div className="ml-4 my-2 flex-1">
                    <input
                        type="text"
                        onChange={e => setUrl(e.target.value)}
                        className="w-full outline-none p-1 text-lg bg-transparent"
                        ref={inputRef}
                        placeholder="ჩაწერეთ youtube-ის ლინკი..."
                        onKeyDown={e => e.key.toLocaleLowerCase() === 'enter' && downloadFile()}
                    />
                </div>
                <button
                    onClick={downloadFile}
                    disabled={isConverting}
                    style={{ outline: 'none' }}
                    className={`
                    px-4 py-3 rounded-full
                    text-white 
                    text-center mr-1
                    like_heading
                    transition-all
                    ${url.length > 0 ? 'bg-primary' : 'bg-secondary'} min-w-[120px] h-[40px]
                    hover:${url.length > 0 ? 'bg-primary-hover' : 'bg-secondary-hover'}
                    `}
                >
                    {
                        isConverting
                            ?
                            <div className='flex w-full justify-center gap-1'>
                                {
                                    [...Array(3)].map((_, i) => (
                                        <div className='w-[4px] h-[4px] animate-pulse bg-white rounded-full' style={{ animationDelay: i / 10 + 's' }} key={i}></div>
                                    ))
                                }
                            </div>
                            : 'კონვერტაცია'
                    }
                </button>
            </div>
            {
                html && <div className='converter-hidden-container' style={{ display: 'none' }}>
                    {ReactHtmlParser(html)}
                </div>
            }

            <ConvertedBlock
                isValidUrl={isValidUrl}
                imgSrc={imgSrc}
                heading={heading}
                downloadLink={downloadLink}
                fileSize={fileSize}
                convertingFinished={convertingFinished}
            />
        </div>
    </div>
}

export default Converter;
