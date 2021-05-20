import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
// TODO: Uncomment when you intehrate Sentry
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

//! Ant Imports

import Button from "antd/lib/button";
import message from "antd/lib/message";

//! User Files

import client from "./apollo";
import Routes from "./Routes";
import { AppContextProvider } from "./AppContext";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "./styles/main.less";

// TODO: Uncomment when you intehrate Sentry
// Sentry.init({
//   dsn: process.env.REACT_APP_SENTRY_DSN,
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  </ApolloProvider>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);

// Do this once
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: (registration) => {
    if (registration && registration.waiting) {
      message.info({
        content: (
          <>
            New version available! Click Reload to get the latest version.
            <Button
              className="ml-1 mb-0"
              type="link"
              onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                registration &&
                  registration.waiting &&
                  registration.waiting.postMessage &&
                  registration.waiting.postMessage({ type: "SKIP_WAITING" });
                // eslint-disable-next-line no-undef
                window.location.reload(true);
              }}
            >
              Reload
            </Button>
          </>
        ),
        duration: 0,
      });
    }
  },
});
