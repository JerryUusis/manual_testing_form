import { renderWithTheme } from "./renderTestUtils";
import { screen } from "@testing-library/dom";
import InstructionListItem, {
  InstructionListItemProps,
} from "../../src/components/InstructionListItem";
import { theme } from "../../src/utils/theme";

describe("<InstructionListItem />", () => {
  let testData: InstructionListItemProps;

  describe("initial render", () => {
    testData = {
      filterInstruction: vi.fn(),
      dataTestId: "testId",
      instructionText: "test intruction",
    };

    const { dataTestId, instructionText } = testData;

    beforeEach(() => {
      renderWithTheme(<InstructionListItem {...testData} />, theme);
    });

    test("should render", () => {
      const listItem = screen.getByTestId(dataTestId);
      expect(listItem).toBeVisible();
    });
    test("should have right value", () => {
      const listItem = screen.getByTestId(dataTestId);
      expect(listItem).toHaveTextContent(instructionText);
    });
  });
});
