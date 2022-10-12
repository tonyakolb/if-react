import './App.css';
import React from 'react';
import Footer from "../Footer/Footer";
import TopSection from "../TopSection/TopSection";
import HomeGuestLoves from "../HomeGuestLoves/HomeGuestLoves";

const App=()=>{
    return(
        <>
            <TopSection />
            <HomeGuestLoves/>
            {/*<Footer className='container'/>*/}
        </>
    )
}

export default App;
