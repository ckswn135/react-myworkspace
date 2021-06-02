import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ContactItem = ({ index, call, onRemove, onEdit, onSave, onCancel }) => {
  return (
    <ListItem>
      <tr>
        <td>
          <Button
            onClick={() => {
              onRemove(index);
            }}
          >
            삭제
          </Button>
        </td>
        <td>
          {!call.isEdit && <ListItemText>{call.callName}</ListItemText>}
          {call.isEdit && (
            <TextField
              type="text"
              className={"cname"}
              defaultValue={call.callName}
            ></TextField>
          )}
        </td>
        <td>
          {!call.isEdit && <ListItemText>{call.callNumber}</ListItemText>}
          {call.isEdit && (
            <TextField
              type="text"
              className={"cnumber"}
              defaultValue={call.callNumber}
            ></TextField>
          )}
        </td>
        <td>
          {!call.isEdit && <ListItemText>{call.callMail}</ListItemText>}
          {call.isEdit && (
            <TextField
              type="text"
              className={"cmail"}
              defaultValue={call.callMail}
            ></TextField>
          )}
        </td>
        <td>
          {!call.isEdit && <ListItemText>{call.memo}</ListItemText>}
          {!call.isEdit && (
            <Button
              onClick={() => {
                onEdit(index);
              }}
            >
              edit
            </Button>
          )}

          {call.isEdit && (
            <Button
              onClick={() => {
                onSave(index);
              }}
            >
              save
            </Button>
          )}

          {call.isEdit && (
            <Button
              onClick={() => {
                onCancel(index);
              }}
            >
              cancel
            </Button>
          )}
        </td>
      </tr>
    </ListItem>
  );
};

export default ContactItem;
