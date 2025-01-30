import { useState } from "react";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { toggleState } from "../utils/library";

const IssueNumberInputs = () => {
  const [isIssueStored, setIsIssueStored] = useState(false);
  const [issueNumberInput, setIssueNumberInput] = useState("");
  const [issueLinkInput, setIssueLinkInput] = useState("");

  const parseToHyperLink = (
    issueNumber: string,
    issueLink: string,
    toggleEdit: () => void
  ) => {
    return (
      <>
        <Link href={issueLink} target="_blank">
          #{issueNumber}
        </Link>
        <IconButton onClick={toggleEdit}>
          <EditIcon />
        </IconButton>
      </>
    );
  };

  return (
    <>
      {!isIssueStored ? (
        <>
          <TextInput
            label="Issue number"
            type="text"
            dataTestId="issueNumberInput"
            value={issueNumberInput}
            setExternalState={setIssueNumberInput}
          />
          <TextInput
            label="Issue link"
            dataTestId="issueLink"
            type="text"
            value={issueLinkInput}
            setExternalState={setIssueLinkInput}
          />
          <Button
            onClick={() => {
              toggleState(setIsIssueStored);
            }}
          >
            Save title & issue number
          </Button>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {parseToHyperLink(issueNumberInput, issueLinkInput, () => {
            toggleState(setIsIssueStored);
          })}
        </Box>
      )}
    </>
  );
};

export default IssueNumberInputs;
