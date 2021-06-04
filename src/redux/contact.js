const initialState = [
  {
    id: 1,
    callName: "qqq",
    callNumber: "011-1241-124",
    callMail: "naver.com",
  },
  {
    id: 2,
    callName: "www",
    callNumber: "010-1671-0875",
    callMail: "gmail.com",
  },
];

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [{ ...action.payload }, ...state];
    case "REMOVE_CONTACT":
      return state.filter((todo) => todo.id !== action.payload);

    case "SAVE_CONTACT":
      return state.map((contact) =>
        contact.id === action.payload.id ? { ...action.payload } : contact
      );

    default:
      return state;
  }
};

export default contact;
