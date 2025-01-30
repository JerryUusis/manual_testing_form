import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TaskBlock from "../components/TaskBlock";
import { useState } from "react";

const CreateBugReportSurvey = () => {
  const [taskBlocks, setTaskBlocks] = useState<string[]>(["task"]);

  const handleCreateNewBlock = () => {
    const newItem = "task";
    setTaskBlocks((previousState) => [...previousState, newItem]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        py: "4rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="h3">Create a bug report survey</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {taskBlocks.map((taskBlock, index) => (
            <TaskBlock
              taskNumber={index + 1}
              key={`${taskBlock}_${index.toString()}`}
            />
          ))}
        </Box>
        <Button onClick={handleCreateNewBlock}>Create new task</Button>
      </Box>
    </Box>
  );
};

export default CreateBugReportSurvey;
