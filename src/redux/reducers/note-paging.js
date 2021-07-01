const initialState = {
  content: [],
  page: 0,
  size: 10,
  totalElements: 0,
};

const note = (state = initialState, action) => {
  switch (action.type) {
    case "MODIFY_NOTE_SUCCEEDED": {
      const newState = { ...state };

      newState.content = state.content.map((note) =>
        note.id === action.payload.id ? { ...action.payload } : note
      );

      return newState;
    }

    case "FETCH_NOTELIST_PAGING_SUCCEEDED":
      return {
        content: action.payload.content,
        page: action.payload.number,
        size: action.payload.size,
        totalElements: action.payload.totalElements,
      };

    default:
      return state;
  }
};

export default note;
