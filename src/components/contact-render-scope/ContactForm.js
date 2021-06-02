import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ContactForm = ({ inputRef, onAdd }) => {
  return (
    <div style={{ display: "flex" }}>
      <TextField
        variant="outlined"
        inputRef={inputRef}
        label="이름"
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={inputRef}
        label="연락처"
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={inputRef}
        label="이메일"
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="outlined"
        color="primary"
        onClick={onAdd}
      >
        입력
      </Button>
    </div>
  );
};

export default ContactForm;
