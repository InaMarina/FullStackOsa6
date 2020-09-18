import React from "react";
import { connect } from "react-redux";
import { createNewAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    //dispatch(createNewAnecdote(content);
    props.createNewAnecdote(content);

    const notification = "New anecdote: " + content;
    // dispatch(setNotification(notification, 5));
    props.setNotification(notification);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  createNewAnecdote,
  setNotification,
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm;
//export default AnecdoteForm;
