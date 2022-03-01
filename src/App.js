import React from 'react';

import Header from './components/Header';
import Converter from './components/Converter';
import HowToConvert from './components/HowToConvert';
import Footer from './components/Footer';
import Banners from './components/banners';
import SimilarSites from './components/SimilarSites';

function App() {
    return <div className='container'>
        <div className="px-4 sm:px-0 min-h-screen flex flex-col justify-between w-full">
            <div>
                <Header />
                <Converter />
                <SimilarSites />
                <HowToConvert />
                {/* <div className="pt-6">
                    <Banners />
                </div> */}

            </div>
            <Footer />
        </div>
    </div>
}

export default App;
