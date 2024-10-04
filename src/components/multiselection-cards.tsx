import * as React from "react";
import { FunctionComponent } from "react";
import MultiselectionCard from "./multiselection-card";
import * as styles from "./multiselection-cards.module.css";

export type MultiselectionCardsType = {
  className?: string;
  installation?: string;
  propMinHeight?: string;
  propAlignSelf?: string;
  propHeight?: string;
  propDisplay?: string;
};

const MultiselectionCards: FunctionComponent<MultiselectionCardsType> = ({
  className = "",
  installation,
  propMinHeight,
  propAlignSelf,
  propHeight,
  propDisplay,
}) => {
  return (
    <div className={[styles.multiselectionCards, className].join(" ")}>
      <MultiselectionCard
        propMinHeight={propMinHeight}
        installation={installation}
        propAlignSelf={propAlignSelf}
        propHeight={propHeight}
        propDisplay={propDisplay}
      />
    </div>
  );
};

export default MultiselectionCards;
