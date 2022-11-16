import Routers from "routes/Routers";
import { connect } from "react-redux";
import * as authActions from "store/auth/actions";
import "./app.scss";
import { useRef, useEffect } from "react";

function App({ authRequest, verifyTokenRequest, auth_token }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (auth_token) {
        verifyTokenRequest();
      } else {
        authRequest();
      }
    }
  }, [authRequest, auth_token, verifyTokenRequest]);

  return <Routers />;
}

const mapStateToProps = (state) => {
  return {
    auth_token: state.auth.data?.access_token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authRequest: () => {
      dispatch(authActions.authRequest());
    },
    verifyTokenRequest: () => {
      dispatch(authActions.verifyTokenRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
