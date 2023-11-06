import React, { useEffect } from 'react'
import Home from './fragments/Home/views'
import About from './fragments/About/views'
import LegacyNWhy from './fragments/LegacyNWhy/views'
import PreEvents from './fragments/PreEvents/views'
import Events from './fragments/Events/views'
import Sponsors from './fragments/Sponsors/views'
import Maps from './fragments/Maps/views'
import QnA from './fragments/QnA/views'

export default function MainPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div
            className='MainPage'
        >
            <Home id={"/"} />
            <About id="about" />
            <LegacyNWhy />
            <PreEvents id="pre-events" />
            <Events id="events" />
            <Sponsors id="sponsors" />
            <QnA id="qna" />
            <Maps />
        </div>
    )
}
