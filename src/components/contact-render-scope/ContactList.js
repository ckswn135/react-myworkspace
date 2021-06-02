import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import ContactItem from "./ContactItem";

const ContactList = ({
  callList,
  trRef,
  onRemove,
  onEdit,
  onCancel,
  onSave,
}) => {
  return (
    <Table>
      <TableBody ref={trRef} style={{ height: "40vh", overflowY: "auto" }}>
        {callList.map((call, index) => (
          <ContactItem
            key={index}
            index={index}
            call={call}
            onRemove={onRemove}
            onEdit={onEdit}
            onCancel={onCancel}
            onSave={onSave}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactList;
