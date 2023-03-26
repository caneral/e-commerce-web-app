import "../styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "@layouts/MainLayout";
import store, { persistor } from "@redux/storeConfig/store";

const layouts = {
  Main: MainLayout,
};

function MyApp({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] || (({ children }) => <div>{children}</div>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
