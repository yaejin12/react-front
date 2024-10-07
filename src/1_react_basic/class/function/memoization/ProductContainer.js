import React, { useCallback, useMemo, useState } from "react";
import Amount from "./Amount";

function ProductContainer() {
  console.log("부모(Product) 랜더링 🧑🏻‍💻");

  let [like, setLike] = useState(0);
  let [amount, setAmount] = useState(1);
  let [coupon, setCoupon] = useState(0);

  // 값은 캐시에 저장되어 있지만, 의존성 배열로 아무것도 전달하지 
  // 않았기에 리랜더링 되지 않는다.
  // const props = useMemo(() => {
  //   return { amount: amount, coupon: coupon };
  // }, [amount,coupon]);

  const amountMemo = useMemo(() => {
    console.log("amount 연산");
    return amount;
  }, [amount]);

  const couponMemo = useMemo(() => {
    console.log("coupon 연산");
    return coupon;
  }, [coupon]);
  const props = { amount: amountMemo, coupon: couponMemo };

  // useCallback : 메모리를 효과적으로 관리하기위해 사용한다.
  // 부모에서 자식으로 값을 넘길때 사용하는것이 약간의 공식인데 그렇다고 또 다 감싸는건 아니다.
  // (무조건 감싸는건아니고 회의를 통해 쓸 것이다.)

  const onClickToAddAmount = useCallback(() => {
    setAmount(amount + 1);
  }, [amount]);
  const onClickToSubtractAmount = useCallback(() => {
    setAmount(amount - 1);
  }, [amount]);
  const onClickToAddCoupon = useCallback(() => {
    setCoupon(coupon + 1);
  }, [coupon]);
  const onClickToSubtractCoupon = useCallback(() => {
    setCoupon(coupon - 1);
  }, coupon);

  const onClickToAddList = () => {
    setLike(like + 1);
  };

  // 스타일
  const containerStyle = {
    width: "500px",
    height: "300px",
    margin: "20px auto",
  };

  const productStyle = {
    border: "1px solid lightgrey",
    padding: "30px",
    lineHeight: "1.3",
  };

  const divStyle = {
    border: "1px solid blue",
    height: "60px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "20px",
    padding: "20px",
  };

  const pStyle = {
    lineHeight: "0",
  };

  const buttonStyle = {
    width: "40px",
    height: "40px",
  };

  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 미움 받을 용기</p>
        <button onClick={onClickToAddList}>좋아요 {like}</button>
        <Amount
          props={props}
          divStyle={divStyle}
          pStyle={pStyle}
          buttonStyle={buttonStyle}
          onClickToAddAmount={onClickToAddAmount}
          onClickToAddCoupon={onClickToAddCoupon}
          onClickToSubtractAmount={onClickToSubtractAmount}
          onClickToSubtractCoupon={onClickToSubtractCoupon}
        />
      </div>
    </div>
  );
}

export default ProductContainer;

