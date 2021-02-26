import React from "react";

function Zero({ accountInfo, handleChange, setStep }) {
  return (
    <div className="form-col mt-2">
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
      <div className="d-flex">
        <p className="text-mini mb-3 text-gray">Why do I need to input my BVN ?</p>
        <button
          className=""
          onClick={() => setStep(1)}
        >
          Skip
        </button>
      </div>

      <div className="btn-holder-2 ">
        <div />
        <button
          className="btn btn-primary"
          style={{ width: "120px" }}
          onClick={() => setStep(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Zero;
