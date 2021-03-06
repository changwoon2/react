import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clook";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import Accommodate from "./chapter_07/Accommodate,";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";
import ProfileCard from "./chapter_13/ProfileCard";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Library></Library>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock></Clock>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// }, 1000);

// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList></CommentList>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//  ReactDOM.render(
//    <React.StrictMode>
//      <NotificationList></NotificationList>
//    </React.StrictMode>,
//    document.getElementById("root")
//  );

ReactDOM.render(
  <React.StrictMode>
    <ProfileCard></ProfileCard>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
