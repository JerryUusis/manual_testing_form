import { SetStateAction } from "react";

export const toggleState = (setState: React.Dispatch<SetStateAction<boolean>>) => {
  setState((previousState) => !previousState);
};
