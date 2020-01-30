import React from "react";
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

const App = ({ currentUser, setCurrentUser }) => {
  // let unsubscribeFromAuth = () => null;

  // useEffect(() => {
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
  // }, []);
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

export default connect(mapStateToProps, null)(App);
