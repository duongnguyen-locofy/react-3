import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./select-check-off.module.css";

export type SelectCheckOffType = {
  className?: string;
  selectCheckOffName?: string;
};

const SelectCheckOff: FunctionComponent<SelectCheckOffType> = ({
  className = "",
  selectCheckOffName,
}) => {
  return (
    <input
      className={[styles.selectcheckoff, className].join(" ")}
      type="radio"
      name={selectCheckOffName}
    />
  );
};

export default SelectCheckOff;
