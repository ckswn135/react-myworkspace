import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const ContactItem = ({ call }) => {
  const [isEdit, setIsEdit] = useState(call.isEdit);
  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };

  const save = (id) => {
    const callName = inputRef1.current.value;
    const callNumber = inputRef2.current.value;
    const callMail = inputRef3.current.value;
    dispatch({
      type: "SAVE_CONTACT",
      payload: { id, callName, callNumber, callMail },
    });
  };
  return (
    <TableRow>
      <TableCell style={{ width: "10%" }}>
        <Button
          onClick={() => {
            remove(call.id);
          }}
        >
          삭제
        </Button>
      </TableCell>
      <TableCell style={{ width: "15%" }}>
        {!isEdit && (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push(`/contact/${call.id}`);
            }}
          >
            {call.callName}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputProps={{ className: "cname" }}
            inputRef={inputRef1}
            defaultValue={call.callName}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "25%" }}>
        {!isEdit && (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push(`/contact/${call.id}`);
            }}
          >
            {call.callNumber}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputProps={{ className: "cnumber" }}
            inputRef={inputRef2}
            defaultValue={call.callNumber}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "30%" }}>
        {!isEdit && (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push(`/contact/${call.id}`);
            }}
          >
            {call.callMail}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            inputProps={{ className: "cmail" }}
            inputRef={inputRef3}
            defaultValue={call.callMail}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "20%" }}>
        {!isEdit && <span>{call.memo}</span>}
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
          <Button
            onClick={() => {
              save(call.id);
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
      </TableCell>
    </TableRow>
  );
};

export default ContactItem;