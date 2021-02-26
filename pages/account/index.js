import React, { useEffect, useState } from "react";
import firebase from "../../services/firebase";
import Layout from "../../components/layout";
import { getInfo } from "../../services/userService";
import store from "../../store/store";
import face from "../../public/assets/happy_face.svg";
import { useProxy } from "valtio";
import Zero from "../../components/account/zero";
import First from "../../components/account/first";
import Second from "../../components/account/second";
import Modal from "../../components/modal/modal";
import Link from "next/link";

const Index = () => {
  const snapshot = useProxy(store);
  const [showDash, setShowDash] = useState(false);
  const [accountInfo, setAccountInfo] = useState({
    bvn: "",
    first_name: "",
    last_name: "",
    bank_name: "",
    bank_account_number: "",
    nok_name: "",
    nok_phone: "",
    address: "",
  });
  const [step, setStep] = useState(0);
  

  const handleChange = (event) => {
    const { value, name } = event.target;

    setAccountInfo({
      ...accountInfo,
      [name]: value,
    });
  };

  const Next = () => {
    if (step === 1) {
      return (
        <First
          handleChange={handleChange}
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
          setStep={setStep}
        />
      );
    } else if (step === 2) {
      return (
        <Second
          handleChange={handleChange}
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
          setStep={setStep}
        />
      );
    }
  };

  useEffect(() => {
    store.loading = true;
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        router.push("/login");
      } else {
        store.user = user;
        getInfo(user);
        setShowDash(true);
        store.loading = false;
      }
    });
  }, []);

  useEffect(() => {
    if (snapshot.accountInfo) {
      store.loading = false;
      setAccountInfo(snapshot.accountInfo);
    }
  }, [snapshot.accountInfo]);

  useEffect(() => {
    if (snapshot.accountInfo) {
      let newInfo = {
        ...snapshot.userInfo,
        ...accountInfo,
      };
      store.accountInfo = newInfo;
    }
  }, [accountInfo]);

  useEffect(() => {
   
  }, [accountInfo]);

  console.log(accountInfo.bvn)
  return (
    <Layout>
      <div className="container">
        <div className="account">
          <h5 className="heading" style={{ fontSize: "25px" }}>
            Update your account
          </h5>
          {step === 0 && (
            <Zero
              handleChange={handleChange}
              setAccountInfo={setAccountInfo}
              accountInfo={accountInfo}
              setStep={setStep}
            />
          )}
          {/* <Next /> */}

          {step === 3 && (
            <Modal>
              <div className="pop-message">
                <img src={face} height={90} width={90} />
                <p className="sub-heading mt-2">Account Updated</p>
                <p className="text-gray mt-1">
                  Your account details was updated successfully!
                </p>
                <Link href="/dashboard">
                  <button className="btn btn-primary mt-2">Back to Home</button>
                </Link>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
