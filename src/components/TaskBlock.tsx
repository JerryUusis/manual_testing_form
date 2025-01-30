import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import InstructionListItem from "./InstructionListItem";

interface TaskBlockProps {
  taskNumber: number;
}

const TaskBlock = ({ taskNumber }: TaskBlockProps) => {
  const [instruction, setInstruction] = useState<string[]>([]);
  const [listInput, setListInput] = useState<string>("");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [isTitleStored, setIsTitleStored] = useState(false);

  const addToInstruction = () => {
    setInstruction((previousState) => [...previousState, listInput]);
    setListInput("");
  };

  const toggleIsTitleStored = () => {
    setIsTitleStored((previusState) => !previusState);
  };

  const filterInstruction = (instructionText: string) => {
    const filteredInstructions = instruction.filter(
      (instruction) => instructionText !== instruction
    );
    setInstruction(filteredInstructions);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "4rem",
      }}
      elevation={1}
      component={Paper}
    >
      <Typography variant="h4">Task {taskNumber}</Typography>
      {isTitleStored ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{taskTitle}</Typography>
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
      <List>
        {instruction.map((instructionText, index) => (
          <InstructionListItem
            key={`instruction_${index.toString()}`}
            filterInstruction={() => {
              filterInstruction(instructionText);
            }}
            instructionText={instructionText}
            dataTestId={`instructionListItem${index.toString()}`}
          />
        ))}
      </List>
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
