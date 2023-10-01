import React from "react";
import { TextField as MuiInput, ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  disabled?: boolean;
  rows?: number;
}

const useStyles = makeStyles((them: ThemeOptions) => ({
  input: {
    width: "100%",
    boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
    borderRadius: 30,
    border: "none",
    "& input": {
      width: "100%",
      boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
      borderRadius: 30,
      padding: '10px 30px',
      height: '40px',
    },
    "& fieldset": {
      display: "none",
    },
  },
}));

const TextField = ({
  placeholder,
  value,
  onChange,
  rows,
  disabled = false,
}: IProps) => {
  const classes = useStyles();

  return (
    <MuiInput
      placeholder={placeholder}
      className={classes.input}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
    />
  );
};

export default TextField;
