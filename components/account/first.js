import React from "react";
import banks from "../../banks.json";
import store from "../../store/store";
import firebase from "../../services/firebase";
import { useProxy } from "valtio";

const First = ({accountInfo, setStep, setAccountInfo}) => {

  const snapshot = useProxy(store);
  const handleChange = (event) => {
    const { value, name } = event.target;

    setAccountInfo({
      ...accountInfo,
      [name]: value,
    });
  };

  const splitNumber = (number) => {
    let phone = number.split("");
    phone.splice(0, 4);
    return phone;
  };

  const saveInfo = () => {
    store.loading = true;
    firebase
      .database()
      .ref("userinfo/" + snapshot.user.uid)
      .set(snapshot.accountInfo)
      .then(() => {
        store.loading = false;
        setStep(3);
      });
    }
  return (<div className="form-col mt-2">
  <div className="form-group mb-2">
    <label className="text-mini">First Name</label>
    <input
      type="text"
      className="form-input mt-1"
      name="first_name"
      placeholder="Enter your first name"
      value={accountInfo.first_name}
      onChange={handleChange}
    />
  </div>
  <div className="form-group mb-2">
    <label className="text-mini">Last Name</label>
    <input
      type="text"
      className="form-input mt-1"
      name="last_name"
      placeholder="Enter your last name"
      value={accountInfo.last_name}
      onChange={handleChange}
    />
  </div>
  <label className="text-mini">Phone</label>
  <div className="phone-input">
    <p>+234</p>
    <p className="text-normal">
      0{splitNumber(snapshot.user?.phoneNumber || "")}
    </p>
  </div>
  <p className="text-mini text-gray mb-2">
    Must be the phone number linked to your BVN
  </p>
  <div className="form-group mb-1">
    <label className="text-mini">Bank Verification Number</label>
    <input
      type="number"
      className="form-input mt-1"
      name="bvn"
      placeholder="Enter your BVN"
      value={accountInfo.bvn}
      onChange={handleChange}
    />
  </div>
  <p className="text-mini text-gray">
    Why do I need to input my BVN
  </p>
  <div className="btn-holder-2 ">
    <div />
    <button
      className="btn btn-primary"
      style={{ width: "120px" }}
      onClick={() => setStep(2)}
    >
      Next
    </button>
  </div>
</div>
)
};

export default First;
