import * as React from "react";
import { FunctionComponent } from "react";
import MultiselectionCard from "./multiselection-card";
import * as styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.q4ContentInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.multiselectionCardWrapper}>
          <MultiselectionCard
            propMinHeight="56px"
            installation="No need to replace components"
            propAlignSelf="stretch"
            propHeight="unset"
            propDisplay="unset"
            selectCheckOffName="radioGroup-1"
          />
        </div>
        <div className={styles.multiselectionCardWrapper}>
          <MultiselectionCard
            propMinHeight="56px"
            installation="Replace them; I already have new components"
            propAlignSelf="unset"
            propHeight="unset"
            propDisplay="unset"
            selectCheckOffName="radioGroup-1"
          />
        </div>
        <div className={styles.multiselectionCardWrapper}>
          <MultiselectionCard
            propMinHeight="56px"
            installation="Replace them; I don't have the new components"
            propAlignSelf="unset"
            propHeight="unset"
            propDisplay="unset"
            selectCheckOffName="radioGroup-1"
          />
        </div>
        <div className={styles.multiselectionCardWrapper}>
          <MultiselectionCard
            propMinHeight="56px"
            installation="Keep current components but change locks"
            propAlignSelf="stretch"
            propHeight="unset"
            propDisplay="unset"
            selectCheckOffName="radioGroup-1"
          />
        </div>
        <div className={styles.multiselectionCardWrapper}>
          <MultiselectionCard
            installation="Polish or repair current components"
            selectCheckOffName="radioGroup-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
