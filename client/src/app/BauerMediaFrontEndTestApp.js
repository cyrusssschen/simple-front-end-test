import React from "react";
import useTeasersData from "../hooks/useTeasersData";
import { LoadingSpinner } from "../components/view/loadingSpinner";
import { ErrorMessage } from "../components/view/errorMessage";
import { TeaserList } from "../components/view/teaserList";
import { SideBar } from "../components/view/sideBar";
import { DATA_FEED_URL } from "../utils/api";
import { SIDEBAR_IMAGE_URL } from "../utils/constants";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BauerMediaFrontEndTestApp() {
  const { teasersData, isLoading, hasError } = useTeasersData(DATA_FEED_URL);

  return (
    <div className="app">
      {isLoading ? (
        <LoadingSpinner />
      ) : hasError ? (
        <ErrorMessage />
      ) : (
        <div className="page">
          <div className="header">
            <header className="page__header">
              <h1>Article Feed</h1>
            </header>
          </div>
          <Container className="content__container">
            <Row>
              <Col sm={12} md={9} className="px-0 px-sm-3">
                <TeaserList teasersData={teasersData} />
              </Col>
              <Col sm={12} md={3}>
                <SideBar imageUrl={SIDEBAR_IMAGE_URL} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default BauerMediaFrontEndTestApp;
