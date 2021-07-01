import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const NoteForm = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const add = () => {
    const memo = inputRef.current.value;

    dispatch({ type: "ADD_NOTE", payload: { memo } });
    inputRef.current.value = "";
  };

  const change = (event) => {
    if (event.charCode === 13) {
      add();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        variant="outlined"
        inputRef={inputRef}
        label="메모"
        onKeyPress={change}
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="contained"
        color="primary"
        onClick={add}
      >
        입력
      </Button>
    </div>
  );
};

export default NoteForm;
