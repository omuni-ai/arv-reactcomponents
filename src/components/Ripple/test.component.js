import React, { Fragment } from "react";
import { Button, Ripple } from "../../components";

function RippleTest() {
  return (
    <Fragment>
      <Ripple className="nwc-ripple-dark">
        <Button className="nwc-btn-secondary">Button with Dark Ripple</Button>
      </Ripple>
      <Ripple className="nwc-ripple-light">
        <Button className="nwc-btn-dark-background">
          Button with light Ripple
        </Button>
      </Ripple>
    </Fragment>
  );
}

export default RippleTest;
