import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import IssueNumberInputs from "./IssueNumberInputs";
import CloseIcon from "@mui/icons-material/Close";
import InstructionList from "./InstructionList";

export interface TaskBlockProps {
  taskNumber: number;
  handleRemoveTaskBlock: (id: string) => void;
  id: string;
}

export interface InstructionObject {
  instruction: string;
  id: string;
}

const TaskBlock = ({
  taskNumber,
  handleRemoveTaskBlock,
  id,
}: TaskBlockProps) => {
  const [instruction, setInstruction] = useState<InstructionObject[]>([]);
  const [listInput, setListInput] = useState<string>("");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [isTitleStored, setIsTitleStored] = useState(false);

  const addToInstruction = () => {
    setInstruction((previousState) => [
      ...previousState,
      { instruction: listInput, id: crypto.randomUUID() },
    ]);
    setListInput("");
  };

  const toggleIsTitleStored = () => {
    setIsTitleStored((previusState) => !previusState);
  };

  const filterInstruction = (id: string) => {
    const filteredInstructions = instruction.filter(
      (instruction) => id !== instruction.id
    );
    setInstruction(filteredInstructions);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        gap: "1rem",
        padding: "2rem",
        position: "relative",
        width: "750px",
      }}
      elevation={1}
      component={Paper}
    >
      <IconButton
        sx={{ position: "absolute", top: "0", right: "0" }}
        onClick={() => {
          handleRemoveTaskBlock(id);
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h2" sx={{alignSelf:"start"}}>Task {taskNumber}</Typography>
      <IssueNumberInputs />
      {isTitleStored ? (
        <Box
          sx={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{taskTitle}</Typography>
          <IconButton onClick={toggleIsTitleStored}>
            <EditIcon />
          </IconButton>
        </Box>
      ) : null}
      {!isTitleStored ? (
        <TextInput
          label="Task title"
          dataTestId="titleInput"
          type="text"
          value={taskTitle}
          setExternalState={setTaskTitle}
        />
      ) : null}
      {!isTitleStored ? (
        <Button onClick={toggleIsTitleStored}>Save title</Button>
      ) : null}
      <InstructionList
        filterInstruction={filterInstruction}
        instructionsArray={instruction}
      />
      <TextInput
        label="Add instruction"
        dataTestId="instructionBlock"
        type="text"
        setExternalState={setListInput}
        value={listInput}
      />
      <Button onClick={addToInstruction}>Add instruction</Button>
    </Box>
  );
};

export default TaskBlock;
