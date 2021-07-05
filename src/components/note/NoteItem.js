import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

const NoteItem = ({ note }) => {
  const [isEdit, setIsEdit] = useState(note.isEdit);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_NOTE", payload: id });
  };

  const save = (id) => {
    const memo = inputRef.current.value;
    dispatch({ type: "MODIFY_NOTE", payload: { id, memo } });
  };

  return (
    <ListItem>
      {!isEdit && <ListItemText>{note.memo}</ListItemText>}
      {!isEdit && (
        <Button
          variant="outlined"
          onClick={() => {
            remove(note.id);
          }}
        >
          delete
        </Button>
      )}
      {!isEdit && (
        <Button
          variant="outlined"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          edit
        </Button>
      )}
      {isEdit && (
        <ListItemText>
          <TextField
            type="text"
            inputRef={inputRef}
            defaultValue={note.memo}
            style={{ width: "100%" }}
          ></TextField>
        </ListItemText>
      )}
      {isEdit && (
        <Button
          variant="outlined"
          onClick={() => {
            save(note.id);
            setIsEdit(false);
          }}
        >
          save
        </Button>
      )}
      {isEdit && (
        <Button
          variant="outlined"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          cancel
        </Button>
      )}
    </ListItem>
  );
};

export default NoteItem;
