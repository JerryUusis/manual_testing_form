import { TextField } from "@mui/material";
import { TextInputTypes } from "../utils/types";
import { useState } from "react";

export interface TextInputProps {
  label: string;
  dataTestId: string;
  type: TextInputTypes;
}

// https://mui.com/material-ui/react-text-field/
// https://mui.com/material-ui/api/text-field/
const TextInput = ({ label, dataTestId, type }: TextInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <TextField
      label={label}
      slotProps={{
        htmlInput: {
          "data-testid": dataTestId ,
          type,
        },
      }}
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

export default TextInput;
