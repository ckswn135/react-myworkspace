import { useState, useRef } from "react";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Contact from "./ContactMod";

const ContactContainer = () => {
  const [callList, setCallList] = useState([
    {
      callName: "박찬주",
      callNumber: "010-9412-4626",
      callMail: "ckswn1357@naver.com",
    },
  ]);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const tr = useRef();

  const add = () => {
    setCallList(
      [
        {
          callName: input1.current.value,
          callNumber: input2.current.value,
          callMail: input3.current.value,
        },
      ].concat(callList)
    );

    input1.current.value = "";
    input2.current.value = "";
    input3.current.value = "";
  };

  const remove = (index) => {
    setCallList(callList.filter((_, idx) => idx !== index));
  };

  const edit = (index) => {
    setCallList(
      callList.map((call, idx) => {
        if (idx === index) {
          call.isEdit = true;
        }

        return call;
      })
    );
  };

  const cancel = (index) => {
    setCallList(
      callList.map((call, idx) => {
        if (idx === index) {
          delete call.isEdit;
        }
        return call;
      })
    );
  };

  const save = (index) => {
    setCallList(
      callList.map((call, idx) => {
        if (idx === index) {
          const editInput1 = document.querySelector(".cname");
          const editInput2 = document.querySelector(".cnumber");
          const editInput3 = document.querySelector(".cmail");

          call.callName = editInput1.value;
          call.callNumber = editInput2.value;
          call.callMail = editInput3.value;
          delete call.isEdit;
        }
        return call;
      })
    );
  };

  return (
    <>
      <ContactForm
        inputRef={input1}
        inputRef={input2}
        inputRef={input3}
        onAdd={add}
      />
      <div>
        <input type="text" placeholder="이름" ref={input1} />
        <input type="text" placeholder="연락처" ref={input2} />
        <input type="text" placeholder="이메일" ref={input3} />
        <button onClick={add}>추가</button>
      </div>
      <ContactList
        callList={callList}
        trRef={tr}
        onRemove={remove}
        onEdit={edit}
        onSave={save}
        onCancel={cancel}
      />
    </>
  );
};

export default ContactContainer;
