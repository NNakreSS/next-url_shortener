import { wrapper } from "@/redux/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

function _app({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default _app;
