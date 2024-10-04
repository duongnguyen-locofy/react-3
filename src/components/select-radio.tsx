import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Button from "./button";
import * as styles from "./select-radio.module.css";

export type SelectRadioType = {
  className?: string;
};

const SelectRadio: FunctionComponent<SelectRadioType> = ({
  className = "",
}) => {
  const onButtonClick = useCallback(() => {
    navigate("/door-repair-q1");
  }, []);

  return (
    <div className={[styles.selectradio, className].join(" ")}>
      <div className={styles.totalEstimationParent}>
        <div className={styles.totalEstimation}>Total estimation</div>
        <div className={styles.estimationValueParent}>
          <div className={styles.estimationValue}>100-120$</div>
          <img
            className={styles.arrowDropDownIcon}
            alt=""
            src="/arrow-drop-down.svg"
          />
        </div>
      </div>
      <Button onButtonClick={onButtonClick} />
    </div>
  );
};

export default SelectRadio;
