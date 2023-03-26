import { render, screen } from "@testing-library/react";
import Card from "../../../components/Card";

describe("Card component", () => {
  it("renders card with title and children", () => {
    const title = "Test Title";
    const testText = "Test Text";
    render(<Card title={title}>{testText}</Card>);

    const titleElement = screen.getByText(title);
    const textElement = screen.getByText(testText);
    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
