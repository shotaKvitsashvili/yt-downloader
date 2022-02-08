import React from 'react';

import Header from './components/Header';
import Converter from './components/Converter';
import HowToConvert from './components/HowToConvert';
import Footer from './components/Footer';

function App() {

    return <div className='container'>
        <div className="px-4 min-h-screen flex flex-col justify-between w-full">
            <div>
                <Header />
                <Converter />
                <HowToConvert />
            </div>
            <Footer />
        </div>
    </div>
}

export default App;
