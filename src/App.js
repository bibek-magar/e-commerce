import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sigin-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selector";

import "./App.css";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ currentUser, checkUserSession }) => {
  let unsubscribeFromAuth = () => null;

  useEffect(() => {
    checkUserSession();
    //   unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);
    //       userRef.onSnapshot(snapShot => {
    //         setCurrentUser({ id: snapShot.id, ...snapShot.data() });
    //       });
    //     }
    //     setCurrentUser(userAuth);
    //   });
    //   return () => {
    //     unsubscribeFromAuth();
    //   };
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} exact />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
