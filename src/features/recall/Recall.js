import React, { useState, useRef, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Card as RSCard,
  Form,
  FormGroup,
  Input,
  Jumbotron
} from "reactstrap";
import { leftArrayCircleFill } from "../../icons";
import { useSelector } from "react-redux";
import { selectFlowById } from "../flow/flowSlice";
import styles from "./Recall.module.scss";

const synth = window.speechSynthesis;

function isNumeric(num) {
  return !isNaN(num);
}

function speakCount(word) {
  if (synth.speaking) {
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(word);
  if (word.indexOf("*") !== -1) {
    let justWord = word.substring(0, word.length - 1);
    utterThis = new SpeechSynthesisUtterance(justWord);
    utterThis.rate = 0.5;
    if (isNumeric(justWord)) {
      if (justWord >= 13) {
        utterThis.rate = 0.8;
      }
    }
  }
  synth.speak(utterThis);
}

function useCounter(initialValue, ms) {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  const start = useCallback(
    () => {
      if (intervalRef.current !== null) {
        return;
      }
      intervalRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, ms);
    },
    [ms]
  );
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  const reset = useCallback(() => {
    setCount(-1);
  }, []);
  return { count, start, stop, reset };
}

export const Recall = () => {
  const history = useHistory();
  const params = useParams();

  let { id } = params;

  let flow = useSelector(state => selectFlowById(state, id));

  const [isRunning, setIsRunning] = useState(false);
  const { count, start, stop, reset } = useCounter(200, flow.speed);

  let steps = flow.steps.split(",");
  let index = count % steps.length;
  let theStep = count === -1 ? "-" : steps[index];
  let theCount = count === -1 ? "-" : Math.floor(count / steps.length);
  if (theStep !== "-") {
    if (isRunning) {
      if (`${theStep}`.indexOf("Count") !== -1) {
        speakCount(`${theCount + 1}*`);
      } else {
        speakCount(theStep);
      }
    }
  }

  const playOrPauseButton = !isRunning
    ? <Button
        className={styles.button}
        onClick={() => {
          start();
          setIsRunning(true);
        }}
      >
        Start
      </Button>
    : <Button
        className={styles.button}
        onClick={() => {
          stop();
          setIsRunning(false);
        }}
      >
        Pause
      </Button>;

  return (
    <div>
      <Jumbotron className={styles.jumbotron}>
        <Button color="info" onClick={() => history.goBack()}>
          {leftArrayCircleFill()}
        </Button>
        <h1>Recall</h1>
      </Jumbotron>
      <Container>
        <Container className={styles.flowFrontContainer}>
          <h5>
            {" "}{flow.name}{" "}
          </h5>
          <div>
            {" "}{flow.steps}{" "}
          </div>
          <div>
            {" "}{flow.speed}{" "}
          </div>
        </Container>
        <Container>
          <h5>
            {" "}Count: {count}{" "}
          </h5>
          <h1>
            {" "}Step: {theStep}{" "}
          </h1>
          <h1>
            {" "}Count: {theCount}{" "}
          </h1>
        </Container>
        <Container>
          <Container>
            <Button
              className={styles.button}
              onClick={() => {
                stop();
                reset();
              }}
            >
              Stop
            </Button>
          {playOrPauseButton}
          </Container>
        </Container>
      </Container>
    </div>
  );
};
