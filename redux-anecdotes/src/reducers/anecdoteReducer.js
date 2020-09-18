import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  console.log("anecdote state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "NEW_ANECDOTE":
      return [...state, action.data];
    case "VOTE":
      const id = action.data.id;
      const anecdoteToVote = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : changedAnecdote));
    case "INIT_ANECDOTES":
      return action.data;

    default:
      return state;
  }
};

export const createNewAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });
  };
};
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export const vote = (anecdote) => {
  return async (dispatch) => {
    const changedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    await anecdoteService.voteForAnecdote(anecdote.id, changedAnecdote);
    dispatch({
      type: "VOTE",
      data: changedAnecdote,
    });
  };
};

/*export const vote = (id) => {
  return {
    type: "VOTE",
    data: {
      id,
    },
  };
};*/
export default anecdoteReducer;
