import * as React from "react";
import { FunctionComponent } from "react";
import MultiselectionCards from "./multiselection-cards";
import MultiselectionCard from "./multiselection-card";
import * as styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.q5ContentInner, className].join(" ")}>
      <div className={styles.multiselectionCardsParent}>
        <MultiselectionCards
          installation="None; current door finishes are in good condition"
          propMinHeight="72px"
          propAlignSelf="unset"
          propHeight="40px"
          propDisplay="flex"
        />
        <div className={styles.multiselectionCards}>
          <MultiselectionCard
            propMinHeight="56px"
            installation="Repaint the door"
            propAlignSelf="stretch"
            propHeight="unset"
            propDisplay="unset"
            selectCheckOffName="radioGroup-1"
          />
        </div>
        <div className={styles.multiselectionCards}>
          <MultiselectionCard
            propMinHeight="56px"
            installation="Sand and dye the door"
            propAlignSelf="stretch"
            propHeight="unset"
            propDisplay="unset"
            selectCheckOffName="radioGroup-1"
          />
        </div>
        <MultiselectionCards
          installation="The door will need repair work first (e.g. rusty metal, ripped or rotting wood)"
          propMinHeight="72px"
          propAlignSelf="unset"
          propHeight="unset"
          propDisplay="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
