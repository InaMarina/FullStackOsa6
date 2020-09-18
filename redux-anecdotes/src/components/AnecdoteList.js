import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const filterToUse = useSelector((state) => state.filter);
  console.log("filter " + filterToUse);
  const anecdotes = useSelector((state) => {
    if (state.filter === "") {
      return state.anecdotes;
    }
    return state.filter === ""
      ? state.anecdotes
      : state.anecdotes.filter((anecdote) =>
          anecdote.content.includes(state.filter)
        );
  });

  const sortedA = anecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });

  const addVote = (a) => {
    dispatch(vote(a));

    const notification = "You voted " + a.content;
    dispatch(setNotification(notification, 10));
  };

  return (
    <div>
      {sortedA.map((a) => (
        <Anecdote key={a.id} anecdote={a} handleClick={() => addVote(a)} />
      ))}
    </div>
  );
};
export default AnecdoteList;
