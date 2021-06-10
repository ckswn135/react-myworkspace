import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const ContactItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(contact.isEdit);
  const dispatch = useDispatch();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };

  const save = (id) => {
    const name = inputRef1.current.value;
    const number = inputRef2.current.value;
    const mail = inputRef3.current.value;
    dispatch({
      type: "MODIFY_CONTACT",
      payload: { id, name, number, mail },
    });
  };
  return (
    <TableRow>
      <TableCell style={{ width: "10%" }}>
        <Button
          onClick={() => {
            remove(contact.id);
          }}
        >
          삭제
        </Button>
      </TableCell>
      <TableCell style={{ width: "15%" }}>
        {!isEdit && <span>{contact.name}</span>}
        {isEdit && (
          <TextField
            type="text"
            inputProps={{ className: "cname" }}
            inputRef={inputRef1}
            defaultValue={contact.name}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "25%" }}>
        {!isEdit && <span>{contact.number}</span>}
        {isEdit && (
          <TextField
            type="text"
            inputProps={{ className: "cnumber" }}
            inputRef={inputRef2}
            defaultValue={contact.number}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "30%" }}>
        {!isEdit && <span>{contact.mail}</span>}
        {isEdit && (
          <TextField
            type="text"
            inputProps={{ className: "cmail" }}
            inputRef={inputRef3}
            defaultValue={contact.mail}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "20%" }}>
        {!isEdit && <span>{contact.memo}</span>}
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
              save(contact.id);
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
