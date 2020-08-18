import React, { useState, useEffect } from "react";
import { Button, Jumbotron, Form, Label, Input, Container } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import styles from "./Flow.module.scss";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addFlow, selectFlowById } from "./flowSlice";

export const AddEditFlow = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [steps, setSteps] = useState("");
  const [speed, setSpeed] = useState("");

  const params = useParams();
  let { id } = params;
  const flow = useSelector(state => selectFlowById(state, id));
  console.log(flow);

  useEffect(
    () => {
      if(flow){
        setName(flow.name);
        setSteps(flow.steps);
        setSpeed(flow.speed);
      } 
    },
    [flow]
  );

  const handleSubmit = () => {
    dispatch(addFlow({ name, steps, speed, id }));
    history.goBack();
  };

  return (
    <div>
      <Jumbotron className={styles.center}>
        <Button color="info" onClick={() => history.goBack()}>
          Back
        </Button>
        <h1>{id ? "Edit" : "Add"} Flow</h1>
      </Jumbotron>
      <Container>
        <Form className={classnames(styles.center, styles.margin)}>
          <Label className={classnames(styles.fullWidth)}>
            {" "}Flow
            <Input value={name} onChange={e => setName(e.target.value)} />
            <Input value={steps} onChange={e => setSteps(e.target.value)} />
            <Input value={speed} onChange={e => setSpeed(e.target.value)} />
          </Label>
        </Form>
        <div className={styles.center}>
          <div />
          <Button color="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
          <div />
        </div>
      </Container>
    </div>
  );
};
