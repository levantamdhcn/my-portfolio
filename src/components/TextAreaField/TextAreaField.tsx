import React from "react";
import { TextField as MuiInput, ThemeOptions } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  disabled?: boolean;
  minRows?: number;
}

const useStyles = makeStyles((them: ThemeOptions) => ({
  input: {
    width: "100%",
    boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
    borderRadius: 30,
    border: "none",
    padding: '10px 30px !important',
    fontSize: '16px',
    fontFamily: 'Rubik, sans-serif',
    "& textarea": {
        color: "rgba(0,0,0,0.87) !important",
        width: "100%",
      boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
      borderRadius: 30,
      padding: '10px 30px !important',
      height: '40px',
    },
    "& fieldset": {
      display: "none",
    },
  },
}));

const TextAreaField = ({
  placeholder,
  value,
  onChange,
  minRows,
  disabled = false,
}: IProps) => {
  const classes = useStyles();

  return (
    <TextareaAutosize
      placeholder={placeholder}
      className={classes.input}
      value={value}
      onChange={onChange}
      disabled={disabled}
      minRows={minRows}
      cols={40}
    />
  );
};

export default TextAreaField;
