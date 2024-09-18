import React from "react";
import { FontSizeConsumer } from "./FontContext";

function ContextComponent() {
  return (
    <div>
      <FontSizeConsumer>
        {(context) => (
          <>
            <p style={{ fontSize: context.state.fontSize }}>
              리액트 context API 환영해
            </p>
            <button
              onClick={() => {
                context.action.setFontSize("0.1rem");
              }}
            >
              글자크기 작게 변경
            </button>
          </>
        )}
      </FontSizeConsumer>
    </div>
  );
}

export default ContextComponent;
