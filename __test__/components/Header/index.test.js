import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Header from "../../../components/Header";

const mockStore = configureMockStore();
const store = mockStore({
  cart: { totalAmount: 100 },
});

describe("Header component", () => {
  it("renders Eteration text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(getByText("Eteration")).toBeInTheDocument();
  });

  it("renders the search bar", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("renders the cart and profile section", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(getByText("Caner")).toBeInTheDocument();
    expect(getByText("100 ₺")).toBeInTheDocument();
  });
});
