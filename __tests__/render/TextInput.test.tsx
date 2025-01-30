import { renderWithTheme } from "./renderTestUtils";
import { screen } from "@testing-library/dom";
import TextInput from "../../src/components/TextInput";
import { TextInputProps } from "../../src/components/TextInput";
import { theme } from "../../src/utils/theme";

describe("<TextInput />", () => {
  let testData: TextInputProps;

  describe("when type=text", () => {
    testData = {
      type: "text",
      dataTestId: "testId",
      label: "test label",
      value: "test value",
    };

    const { type, dataTestId, label, value } = testData;

    beforeEach(() => {
      renderWithTheme(<TextInput {...testData} />, theme);
    });

    test("should render", () => {
      const textInput = screen.getByTestId(dataTestId);
      expect(textInput).toBeVisible();
    });
    test("should have right label text", async () => {
      const labelElement = await screen.findByLabelText(label);
      expect(labelElement).toBeVisible();
    });
    test("should have the right input type", () => {
      const textInput = screen.getByTestId(dataTestId);
      expect(textInput).toHaveAttribute("type", type);
    });
    test("should have the right value", () => {
      const textInput = screen.getByTestId(dataTestId);
      expect(textInput).toHaveValue(value);
    });
  });
});
