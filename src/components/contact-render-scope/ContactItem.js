import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useState } from "react";

const ContactItem = ({ index, call, onRemove, onEdit, onCancel, onSave }) => {
  const [isEdit, setIsEdit] = useState(call.isEdit);
  return (
    <TableRow>
      <TableCell style={{ width: "10%" }}>
        <Button
          onClick={() => {
            onRemove(index);
          }}
        >
          {" "}
          삭제
        </Button>
      </TableCell>
      <TableCell style={{ width: "15%" }}>
        {!isEdit && <span>{call.callName}</span>}
        {isEdit && (
          <TextField
            type="text"
            className={"cname"}
            defaultValue={call.callName}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "25%" }}>
        {!isEdit && <span>{call.callNumber}</span>}
        {isEdit && (
          <TextField
            type="text"
            className={"cnumber"}
            defaultValue={call.callNumber}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "30%" }}>
        {!isEdit && <span>{call.callMail}</span>}
        {isEdit && (
          <TextField
            type="text"
            className={"cmail"}
            defaultValue={call.callMail}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ width: "20%" }}>
        {!isEdit && <span>{call.memo}</span>}
        {!isEdit && (
          <Button
            onClick={() => {
              onEdit(index);
              setIsEdit(true);
            }}
          >
            edit
          </Button>
        )}

        {isEdit && (
          <Button
            onClick={() => {
              onSave(index);
              setIsEdit(false);
            }}
          >
            save
          </Button>
        )}

        {isEdit && (
          <Button
            onClick={() => {
              onCancel(index);
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
