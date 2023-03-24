import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/storeConfig/store";
import MainLayout from "../layouts/MainLayout";

const layouts = {
  Main: MainLayout,
};

function MyApp({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] || (({ children }) => <div>{children}</div>);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
