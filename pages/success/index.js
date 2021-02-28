import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import firebase from "../../services/firebase";
import { formatNumber } from "../../services/userService";
import store from "../../store/store";
import { useProxy } from "valtio";
import { useRouter } from "next/router";


useEffect(() => {
  store.loading = true;
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      router.push("/login");
    } else {
      store.user = user;
      getInfo(user);
      // getInvestment(user);
      // setShowDash(true);
      store.loading = false;
    }
  });
}, []);

useEffect(() => {
  store.loading = true;
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      router.push("/login");
    } else {
      store.user = user;
      getInfo(user);
      // getInvestment(user);
      // setShowDash(true);
      store.loading = false;
    }
  });
}, []);


atlabs.SMS.SMSService({
  sandbox_key: "Your sandbox key",
  payload: {
    to: "+2349091271976",
    from: "FSI",
    message: "Hello World"
  }
}).then(res => {
  //do something
});

const Index = () => {
  return (
    <Layout>
      <Head>
          <title>Success Page</title>
      </Head>
      <div className="register">
        <div id="recaptcha-container"></div>
        <div className="reg-form">
          <h1 className="heading mb-3">Mun gode!</h1>
          <p className="text-center">Congratulation! Your request is successfully made. Kindly wait for call from us and subsequent personal and business verification. Thanks.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
