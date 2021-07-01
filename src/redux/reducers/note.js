const initialState = [];

const note = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE_SUCCEEDED":
      return [{ ...action.payload }, ...state];
    case "REMOVE_NOTE_SUCCEEDED":
      return state.filter((note) => note.id !== action.payload);

    case "MODIFY_NOTE_SUCCEEDED":
      return state.map((note) =>
        note.id === action.payload.id ? { ...action.payload } : note
      );

    case "FETCH_NOTELIST_SUCCEEDED":
      return [...action.payload];

    default:
      return state;
  }
};

export default note;
