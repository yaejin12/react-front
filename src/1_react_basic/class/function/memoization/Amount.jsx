import React from "react";

function Amount({
  props,
  divStyle,
  pStyle,
  buttonStyle,
  onClickToAddAmount,
  onClickToAddCoupon,
  onClickToSubtractAmount,
  onClickToSubtractCoupon,
}) {
  console.log("자식(Amount) 랜더링👼");

  const { amount, coupon } = props;

  return (
    <div style={divStyle}>
      <p style={pStyle}>수량 : {amount} </p>
      {amount === 0 ? null : (
        <button style={buttonStyle} onClick={onClickToSubtractAmount}>
          -
        </button>
      )}
      <button style={buttonStyle} onClick={onClickToAddAmount}>
        +
      </button>

      <p style={pStyle}>쿠폰 : {coupon}</p>
      {coupon > 0 && (
        <button style={buttonStyle} onClick={onClickToSubtractCoupon}>
          -
        </button>
      )}
      <button style={buttonStyle} onClick={onClickToAddCoupon}>
        +
      </button>
    </div>
  );
}

export default Amount;
