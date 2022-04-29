import React, { useState, useContext } from 'react';
import { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/index.css'

import NotificationContextProvider, { NotificationContext } from '../components/Notifications/NotificationContextProvider';
import PopupBalloon from '../components/Notifications/PopupBalloon'

const PopupBalloonComp = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const {popupMessage, setPopupMessage} = useContext(NotificationContext);

  return (
    <PopupBalloon popupMessage={popupMessage} setPopupMessage={setPopupMessage} showPopup={showPopup} setShowPopup={setShowPopup}/>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <NotificationContextProvider>
        <PopupBalloonComp />
        <Component {...pageProps} />
      </NotificationContextProvider>
  );
}

export default MyApp