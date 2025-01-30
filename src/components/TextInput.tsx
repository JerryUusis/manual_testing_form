import { TextField } from "@mui/material";
import { TextInputTypes } from "../utils/types";
import { SetStateAction } from "react";

export interface TextInputProps {
  label: string;
  dataTestId: string;
  type: TextInputTypes;
  setExternalState?: React.Dispatch<SetStateAction<string>>;
  value: string;
}

// https://mui.com/material-ui/react-text-field/
// https://mui.com/material-ui/api/text-field/
const TextInput = ({
  label,
  dataTestId,
  type,
  setExternalState,
  value,
}: TextInputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputString = event.target.value;

    if (setExternalState) {
      setExternalState(inputString);
    }
  };

  return (
    <TextField
      label={label}
      slotProps={{
        htmlInput: {
          "data-testid": dataTestId,
          type,
        },
      }}
      value={value}
      onChange={handleOnChange}
      fullWidth
    />
  );
};

export default TextInput;
