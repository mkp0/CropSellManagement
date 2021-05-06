import React from "react";
import { StyledLoader, LoaderWrapper } from "./index.style";

function Loader() {
  return (
    <LoaderWrapper>
      <StyledLoader className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledLoader>
    </LoaderWrapper>
  );
}

export default Loader;
