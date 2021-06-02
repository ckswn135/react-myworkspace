import List from "@material-ui/core/List";
import ContactItem from "./ContactItem";

const ContactList = ({
  callList,
  trRef,
  onRemove,
  onEdit,
  onSave,
  onCancel,
}) => {
  return (
    <div>
      <List ref={trRef} style={{ height: "40vh", overflowY: "auto" }}>
        {callList.map((call, index) => (
          <ContactItem
            key={index}
            index={index}
            call={call}
            onRemove={onRemove}
            onEdit={onEdit}
            onSave={onSave}
            onCancel={onCancel}
          />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
