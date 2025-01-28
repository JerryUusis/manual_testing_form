import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import { useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EditIcon from "@mui/icons-material/Edit";

interface TaskBlockProps {
  taskNumber: number;
}

const TaskBlock = ({ taskNumber }: TaskBlockProps) => {
  const [instruction, setInstruction] = useState<string[]>([]);
  const [listInput, setListInput] = useState<string>("");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [isTitleStored, setIsTitleStored] = useState(false);

  const addToInstruction = () => {
    setInstruction((previoussState) => [...previoussState, listInput]);
    setListInput("");
  };

  const storeTitle = () => {
    setIsTitleStored(true);
  };

  const filterInstruction = (instructionText: string) => {
    const filteredInstructions = instruction.filter(
      (instruction) => instructionText !== instruction
    );
    setInstruction(filteredInstructions);
  };

  const handleEdit = () => {
    setIsTitleStored(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
          <IconButton onClick={handleEdit}>
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
      {!isTitleStored ? <Button onClick={storeTitle}>Save title</Button> : null}
      <List>
        {instruction.map((instructionText, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <ListItemButton
                onClick={() => {
                  filterInstruction(instructionText);
                }}
              >
                <ListItemIcon>
                  <RemoveCircleIcon />
                </ListItemIcon>
              </ListItemButton>
            }
          >
            {instructionText}
          </ListItem>
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
