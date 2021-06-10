import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactItem from "./ContactItem";

import ContactPagination from "./ContactPagination";

const ContactList = () => {
  const data = useSelector((state) => state.contact);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CONTACTLIST_PAGING" });
  }, [dispatch]);

  return (
    <div style={{ height: "40vh", overflowY: "auto" }}>
      <Table>
        <TableBody>
          {data.content.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </TableBody>
      </Table>
      <ContactPagination />
    </div>
  );
};

export default ContactList;
