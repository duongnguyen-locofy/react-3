import * as React from "react";
import { FunctionComponent } from "react";
import Window1 from "../components/window1";
import QuestionProgress from "../components/question-progress";
import Question from "../components/question";
import FrameComponent from "../components/frame-component";
import SelectRadio from "../components/select-radio";
import GBoard from "../components/g-board";
import * as styles from "./index.module.css";

const DoorRepairQ: FunctionComponent = () => {
  return (
    <div className={styles.doorRepairQ4}>
      <Window1
        notch="pending_I2002:22870;2519:56387"
        indicator="pending_I2002:22870;2519:56392"
      />
      <main className={styles.content}>
        <QuestionProgress />
        <section className={styles.q4Content}>
          <Question
            whatTypeOfServiceDoYouNeed="Would you like to change the locks or other door components?
"
          />
          <FrameComponent />
        </section>
      </main>
      <div className={styles.background} />
      <SelectRadio />
      <GBoard />
    </div>
  );
};

export default DoorRepairQ;
