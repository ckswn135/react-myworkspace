import { useRef, useState } from "react";

const Contact = () => {
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
      <div>
        <input type="text" placeholder="이름" ref={input1} />
        <input type="text" placeholder="연락처" ref={input2} />
        <input type="text" placeholder="이메일" ref={input3} />
        <button onClick={add}>추가</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>삭제</th>
              <th>이름</th>
              <th>연락처</th>
              <th>이메일</th>
              <th>수정</th>
            </tr>
          </thead>

          <tbody>
            {callList.map((call, index) => (
              <tr ref={tr} key={index}>
                <td>
                  <button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    삭제
                  </button>
                </td>
                <td>
                  {!call.isEdit && <span>{call.callName}</span>}
                  {call.isEdit && (
                    <input
                      type="text"
                      className={"cname"}
                      defaultValue={call.callName}
                    ></input>
                  )}
                </td>
                <td>
                  {!call.isEdit && <span>{call.callNumber}</span>}
                  {call.isEdit && (
                    <input
                      type="text"
                      className={"cnumber"}
                      defaultValue={call.callNumber}
                    ></input>
                  )}
                </td>
                <td>
                  {!call.isEdit && <span>{call.callMail}</span>}
                  {call.isEdit && (
                    <input
                      type="text"
                      className={"cmail"}
                      defaultValue={call.callMail}
                    ></input>
                  )}
                </td>
                <td>
                  {!call.isEdit && <span>{call.memo}</span>}
                  {!call.isEdit && (
                    <button
                      onClick={() => {
                        edit(index);
                      }}
                    >
                      edit
                    </button>
                  )}

                  {call.isEdit && (
                    <button
                      onClick={() => {
                        save(index);
                      }}
                    >
                      save
                    </button>
                  )}

                  {call.isEdit && (
                    <button
                      onClick={() => {
                        cancel(index);
                      }}
                    >
                      cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
