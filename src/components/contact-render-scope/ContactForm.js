import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const ContactForm = ({ inputRef1, inputRef2, inputRef3, onAdd }) => {
  return (
    <Table style={{ display: "flex" }}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={5}>
            <TextField
              variant="outlined"
              inputRef={inputRef1}
              label="이름"
              size="small"
              style={{
                width: "25%",
                marginRight: "0.5rem",
              }}
            />
            <TextField
              variant="outlined"
              inputRef={inputRef2}
              label="연락처"
              size="small"
              style={{
                width: "30%",
                marginRight: "0.5rem",
              }}
            />
            <TextField
              variant="outlined"
              inputRef={inputRef3}
              label="이메일"
              size="small"
              style={{
                width: "30%",
                marginRight: "0.5rem",
              }}
            />

            <Button
              style={{ width: "10%" }}
              variant="contained"
              color="primary"
              onClick={onAdd}
            >
              입력
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ width: "10%" }}>삭제</TableCell>
          <TableCell style={{ width: "15%" }}>이름</TableCell>
          <TableCell style={{ width: "25%" }}>연락처</TableCell>
          <TableCell style={{ width: "30%" }}>이메일</TableCell>
          <TableCell style={{ width: "20%" }}>수정</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default ContactForm;
