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
