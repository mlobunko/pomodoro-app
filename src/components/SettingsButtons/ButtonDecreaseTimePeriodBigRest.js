import React from "react";
import { connect } from "react-redux";
import { decreaseTimePeriodBigRest } from "../../actions/settings";

export const ButtonDecreaseTimePeriodBigRest = ({
  decreaseTimePeriodBigRest
}) => (
  <button
    onClick={decreaseTimePeriodBigRest}
    className="button-plus-minus"
    aria-label="button decrease time for big rest"
  >
    <i className="fa fa-minus" />
  </button>
);

export default connect(undefined, { decreaseTimePeriodBigRest })(
  ButtonDecreaseTimePeriodBigRest
);
