import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TaskBlock from "../components/TaskBlock";
import { TaskBlockArrayObject } from "../utils/types";
import { useState } from "react";

const CreateBugReportSurvey = () => {
  const [taskBlocks, setTaskBlocks] = useState<TaskBlockArrayObject[]>([
    {
      taskNumber: 1,
      id: crypto.randomUUID(),
    },
  ]);

  const handleCreateNewBlock = () => {
    const newItem: TaskBlockArrayObject = {
      taskNumber: taskBlocks.length + 1,
      id: crypto.randomUUID(),
    };
    setTaskBlocks((previousState) => [...previousState, newItem]);
  };

  const handleRemoveBlock = (id: string) => {
    const filteredTaskBlocks = taskBlocks.filter(
      (taskBlock) => taskBlock.id !== id
    );
    setTaskBlocks(filteredTaskBlocks);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        py: "4rem",
      }}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          mb: "3rem",
        }}
      >
        <Typography variant="h1">Create a bug report survey</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {taskBlocks.map((taskBlock, index) => (
            <TaskBlock
              taskNumber={index + 1}
              key={taskBlock.id}
              id={taskBlock.id}
              handleRemoveTaskBlock={() => {
                handleRemoveBlock(taskBlock.id);
              }}
            />
          ))}
        </Box>
        <Button onClick={handleCreateNewBlock}>Create new task</Button>
      </Box>
      <Button type="submit">Publish survey</Button>
    </Box>
  );
};

export default CreateBugReportSurvey;
