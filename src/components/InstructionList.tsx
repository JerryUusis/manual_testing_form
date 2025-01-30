import List from "@mui/material/List";
import InstructionListItem from "./InstructionListItem";
import { InstructionObject } from "./TaskBlock";

interface InstructionListProps {
  instructionsArray: InstructionObject[];
  filterInstruction: (id: string) => void;
}

const InstructionList = ({
  instructionsArray,
  filterInstruction,
}: InstructionListProps) => {
  return (
    <List>
      {instructionsArray.map((instructionObject, index) => (
        <InstructionListItem
          key={crypto.randomUUID()}
          filterInstruction={() => {
            filterInstruction(instructionObject.id);
          }}
          instructionText={instructionObject.instruction}
          dataTestId={`instructionListItem${index.toString()}`}
        />
      ))}
    </List>
  );
};

export default InstructionList;
