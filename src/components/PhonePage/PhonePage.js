// import "./PhonePage.css";

// let listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const PhonePage = () => {
//   let numbers = [];
//   listNumber.forEach((element) => {

//     numbers.push(<div>{element}</div>);
//     return numbers
//   });
//   return (
//     <>
//       <div className="phone">{numbers}</div>
//     </>
//   );
// };
// export { PhonePage };

import React, { useState, useRef, useEffect } from "react";
import "./PhonePage.css";
import InputMask from "react-input-mask";

function PhoneInput(props) {
  return (
    <InputMask
      mask="+7 (9 9 9)-9 9 9-9 9 9 9"
      maskChar="-"
      value={props.value}
      alwaysShowMask={true}
      onChange={props.onChange}
    ></InputMask>
  );
}

const PhonePage = () => {
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);
  return (
    <div>
      <PhoneInput value={phone} onChange={handleInput}></PhoneInput>
    </div>
  );
};

export { PhonePage };
