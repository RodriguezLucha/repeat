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

export const Recall = () => {
  const history = useHistory();
  const params = useParams();

  let { id } = params;

  let flow = useSelector(state => selectFlowById(state, id));

  function useCounter(initialValue, ms) {
    const [count, setCount] = useState(initialValue);
    const intervalRef = useRef(null);
    const start = useCallback(
      () => {
        console.log("OMG.");
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
      setCount(0);
    }, []);
    return { count, start, stop, reset };
  }

  // const [step, setStep] = useState(null);
  // const [count, setCount] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const { count, start, stop, reset } = useCounter(1, 1000);
  console.log(count);

  const playOrPauseButton = !isRunning
    ? <Button onClick={() => start()}>Start</Button>
    : <Button onClick={() => stop()}>Pause</Button>;

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
            {flow.name}
          </h5>
          <div>
            {flow.steps}
          </div>
          <div>
            {flow.speed}
          </div>
        </Container>
        <Container>
          <h1>
            Count: {count}
          </h1>
        </Container>
        <Container>
          <Button
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
    </div>
  );
};
