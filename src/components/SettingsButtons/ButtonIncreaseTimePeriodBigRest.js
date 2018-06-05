import React from "react";
import { connect } from "react-redux";
import { increaseTimePeriodBigRest } from "../../actions/settings";

export const ButtonIncreaseTimePeriodBigRest = ({
  increaseTimePeriodBigRest
}) => (
  <button
    onClick={increaseTimePeriodBigRest}
    className="button-plus-minus"
    aria-label="button increase time for big rest"
  >
    <i className="fa fa-plus" />
  </button>
);

export default connect(undefined, { increaseTimePeriodBigRest })(
  ButtonIncreaseTimePeriodBigRest
);
