import { useState, useEffect } from "react";

const FormInput = (props) => {
  const name = props.value;

  const [input, setInput] = useState(name);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
    props.onSave(event.target.value);
  };

  useEffect(() => {
    setInput(props.value);
  }, [props.value]);

  return (
    <input
      type="text"
      className="form-control form-control-lg"
      value={input}
      onChange={inputChangeHandler}
    />
  );
};

export default FormInput;
