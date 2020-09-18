import React from "react";
import { connect } from "react-redux";
//import { useSelector } from "react-redux";

/*const Notification = () => {
  const notification = useSelector((state) => state.notification);
  if (notification !== null) {
    const style = {
      border: "solid",
      padding: 10,
      borderWidth: 1,
    };

    return <div style={style}>{notification}</div>;
  }
  return null;
};*/

const Notification = (props) => {
  if (props.notification !== null) {
    const style = {
      border: "solid",
      padding: 10,
      borderWidth: 1,
    };

    return <div style={style}>{props.notification}</div>;
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
//export default Notification;
