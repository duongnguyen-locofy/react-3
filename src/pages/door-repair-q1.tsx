import * as React from "react";
import { FunctionComponent } from "react";
import Window1 from "../components/window1";
import QuestionProgress from "../components/question-progress";
import Question from "../components/question";
import FrameComponent1 from "../components/frame-component1";
import SelectRadio from "../components/select-radio";
import GBoard from "../components/g-board";
import * as styles from "./door-repair-q1.module.css";

const DoorRepairQ1: FunctionComponent = () => {
  return (
    <div className={styles.doorRepairQ5}>
      <Window1
        notch="pending_I2002:22891;2519:56387"
        indicator="pending_I2002:22891;2519:56392"
      />
      <QuestionProgress />
      <main className={styles.q5ContentParent}>
        <section className={styles.q5Content}>
          <Question
            whatTypeOfServiceDoYouNeed="What kind of retouching do you want?
"
          />
          <FrameComponent1 />
        </section>
        <div className={styles.background} />
      </main>
      <SelectRadio />
      <GBoard />
    </div>
  );
};

export default DoorRepairQ1;
