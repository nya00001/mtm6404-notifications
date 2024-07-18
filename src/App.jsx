import React, { useState } from "react";
import notificationsData from "./notifications";
import "./App.css"; 

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-app">
      <h1>Notifications</h1>
      <div className="notification-count">
        {`You have ${notifications.length} notification${notifications.length !== 1 ? 's' : ''}`}
      </div>
      <button onClick={clearAllNotifications} className="clear-all-button">
        Clear All Notifications
      </button>
      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className="notification-item">
            <h2>{notification.name}</h2>
            <p>{notification.message}</p>
            <button onClick={() => clearNotification(notification.id)} className="clear-button">
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
