import {useRef, useImperativeHandle} from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  const inputRef = useRef()

  const activate = () => {
    inputRef.current.focus()
  }

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
