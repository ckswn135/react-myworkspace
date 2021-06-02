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
              <th>이름</th>
              <th>연락처</th>
              <th>이메일</th>
            </tr>
          </thead>

          <tbody>
            {callList.map((call, index) => (
              <tr key={index}>
                <td>{call.callName}</td>
                <td>{call.callNumber}</td>
                <td>{call.callMail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
