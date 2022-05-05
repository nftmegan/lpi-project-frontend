import { createContext, useState } from "react";

export type PopupMessage = {
  msg: string;
  hint: string;
  icon: string;
}

type NotificationType = {
  popupMessage: PopupMessage;
  setPopupMessage: (c: PopupMessage) => void;
};

export const NotificationContext = createContext<NotificationType>({
  popupMessage: {msg: "Loading...", hint: "", icon: "success"},
  setPopupMessage: () => {},
});

const NotificationContextProvider = ({ children }) => {
  var defaultMsg : PopupMessage = {msg: "Loading...", hint: "", icon: "success"};
  const [popupMessage, setPopupMessage] = useState<PopupMessage>(defaultMsg);

  return (
    <NotificationContext.Provider value={{ popupMessage, setPopupMessage }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;