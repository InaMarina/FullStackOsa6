const notificationReducer = (state = null, action) => {
  console.log("notification state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "SET_NOTIFICATION": {
      return action.notification;
    }
    case "UNSET_NOTIFICATION": {
      return action.notification;
    }
    default:
      return state;
  }
};
var timeoutID;

export const setNotification = (notification, time) => {
  time = time * 1000;

  return (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      notification,
    });
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      dispatch({
        type: "UNSET_NOTIFICATION",
        notification: null,
      });
    }, time);
  };
};

export default notificationReducer;
