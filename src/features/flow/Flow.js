import React from "react";
import {
  Button,
  Jumbotron,
  Container,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFlows, removeFlow } from "./flowSlice";
import { trashFillIcon } from "../../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from "./Flow.module.scss";

export const Flow = () => {
  let dispatch = useDispatch();
  let categories = useSelector(state => selectAllFlows(state));
  return (
    <div>
      <Jumbotron className={styles.center}>
        <h1>Flows</h1>
      </Jumbotron>

      <Container>
        <ListGroup>
          {categories.map(c => {
            return (
              <ListGroupItem key={c.id}>
                <div className={styles.listGroupItem}>
                  <div>
                    <Link to={`/flow/${c.id}/card`}>
                      {c.name}
                    </Link>
                  </div>
                  <div className={styles.flowControlContainer}>
                    <Button
                      className={styles.button}
                      color="danger"
                      onClick={() => dispatch(removeFlow(c.id))}
                    >
                      {trashFillIcon()}
                    </Button>
                    <Link to={`/flow/edit/${c.id}`}>
                      <Button color="info" className={styles.cardControlButton}>
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Container>
      <Container className={styles.center}>
        <div />
        <Link to="/flow/add">
          <Button color="primary" className={styles.addFlowButton}>
            Add Flow
          </Button>
        </Link>
        <div />
      </Container>
    </div>
  );
};
