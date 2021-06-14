import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
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
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "10%" }}>삭제</TableCell>
            <TableCell style={{ width: "15%" }}>이름</TableCell>
            <TableCell style={{ width: "25%" }}>연락처</TableCell>
            <TableCell style={{ width: "30%" }}>이메일</TableCell>
            <TableCell style={{ width: "20%" }}>수정</TableCell>
          </TableRow>
        </TableHead>
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
