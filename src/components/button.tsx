import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import * as styles from "./button.module.css";

export type ButtonType = {
  className?: string;

  /** Action props */
  onButtonClick?: () => void;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  onButtonClick,
}) => {
  const onButtonClick1 = useCallback(() => {
    navigate("/door-repair-q1");
  }, []);

  return (
    <button
      className={[styles.button, className].join(" ")}
      onClick={onButtonClick}
    >
      <div className={styles.bookNow}>Next</div>
    </button>
  );
};

export default Button;
