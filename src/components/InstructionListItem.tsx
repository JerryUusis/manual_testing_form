import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export interface InstructionListItemProps {
  filterInstruction: () => void;
  instructionText: string;
  dataTestId: string;
}

const InstructionListItem = ({
  filterInstruction,
  instructionText,
  dataTestId,
}: InstructionListItemProps) => {
  return (
    <ListItem
      data-testid={dataTestId}
      secondaryAction={
        <ListItemButton onClick={filterInstruction}>
          <ListItemIcon>
            <RemoveCircleIcon />
          </ListItemIcon>
        </ListItemButton>
      }
    >
      {instructionText}
    </ListItem>
  );
};

export default InstructionListItem;
