import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import firebase from "../../services/firebase";
import { formatNumber } from "../../services/userService";
import store from "../../store/store";
import { useProxy } from "valtio";
import { useRouter } from "next/router";
// sms api
import { atlabs } from "innovation-sandbox";

const Index = () => {

const AtlabsSms = () => atlabs.SMS.SMSService({
  sandbox_key: "3c47f1e48aa32425b63f241aba9cf4cf",
  payload: {
    to: "+23438156896",
    from: "ArewaPrenuer",
    message: "Congratulation"
  }
}).then(res => {
  //do something
});

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
