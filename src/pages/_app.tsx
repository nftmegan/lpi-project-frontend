import React, { useState, useContext } from 'react';
import { AppProps } from 'next/app'

import '../../styles/globals.css'
import '../../styles/index.css'

import NotificationContextProvider, { NotificationContext } from '../common/components/Notifications/NotificationContextProvider';
import NotificationBalloon from '../common/components/Notifications/NotificationBalloon'

import { SessionProvider } from "next-auth/react"

const NotificationBalloonComp = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const {popupMessage, setPopupMessage} = useContext(NotificationContext);

    return (
        <NotificationBalloon popupMessage={popupMessage} setPopupMessage={setPopupMessage} showPopup={showPopup} setShowPopup={setShowPopup}/>
    );
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
            <NotificationContextProvider>
                <NotificationBalloonComp />
                <Component {...pageProps} />
            </NotificationContextProvider>
        </SessionProvider>
    );
}

export default MyApp