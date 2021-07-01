import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Check } from "@material-ui/icons";
import { useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const NoteItem = ({ note }) => {
  const [isEdit, setIsEdit] = useState(note.isEdit);
  const history = useHistory();
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
      <ListItemIcon
        onClick={() => {
          remove(note.id);
        }}
      >
        <Check style={{ cursor: "pointer" }} />
      </ListItemIcon>
      {!isEdit && (
        <ListItemText
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push(`/note/${note.id}`);
          }}
        >
          {note.memo}
        </ListItemText>
      )}
      {!isEdit && (
        <Button
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
