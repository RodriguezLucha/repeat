import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Container, Card as RSCard, Form, FormGroup, Input, Jumbotron } from "reactstrap";
import { leftArrayCircleFill } from "../../icons";
import {useSelector} from "react-redux";
import {selectFlowById} from "../flow/flowSlice";
import styles from "./Recall.module.scss";




export const Recall = () => {
  const history = useHistory();
  const params = useParams();
  let {id} = params;
  let flow = useSelector(state => selectFlowById(state, id));

 
  return (
      <>
        <Jumbotron className={styles.jumbotron}>
          <Button color="info" onClick={() => history.goBack()}>
            {leftArrayCircleFill()}
          </Button>
           <h1>Recall</h1>
        </Jumbotron>
    <Container>
      <Container>
          <RSCard>
            <Container>
                <Container className={styles.flowFrontContainer}>
                    <h5>{flow.name}</h5>
                    <div>{flow.steps}</div>
                    <div>{flow.speed}</div>
                </Container>
            </Container>
          </RSCard>

      </Container>
    </Container>
    </>
  );
};
