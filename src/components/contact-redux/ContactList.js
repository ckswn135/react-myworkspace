import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const callList = useSelector((state) => state.contact);
  console.log(callList);

  return (
    <Table>
      <TableBody style={{ height: "40vh", overflowY: "auto" }}>
        {callList.map((call) => (
          <ContactItem key={call.id} call={call} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactList;
