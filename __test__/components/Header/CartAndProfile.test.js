import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import CartAndProfile from "../../../components/Header/CartAndProfile";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("CartAndProfile component", () => {
  it("should render the total amount correctly", () => {
    useSelector.mockImplementation((callback) =>
      callback({
        cart: {
          totalAmount: 100,
        },
      })
    );

    const { getByText } = render(<CartAndProfile />);

    expect(getByText(/100 ₺/i)).toBeInTheDocument();
  });
});
