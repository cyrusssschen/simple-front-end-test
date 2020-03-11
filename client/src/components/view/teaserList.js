import React from "react";
import { useWindowSize } from "react-use";
import { TeaserItem } from "./teaserItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SCREEN_BREAKPOINTS, TEASER_GROUP_NUM } from "../../utils/constants";

export const TeaserList = props => {
  const { width } = useWindowSize();
  const isTablet =
    width >= SCREEN_BREAKPOINTS.md && width <= SCREEN_BREAKPOINTS.lg;
  const border = isTablet ? 1 : 0;

  const teasersDataForGrid =
    props.teasersData && Array.isArray(props.teasersData)
      ? props.teasersData
          .map((_, index) => {
            if (isTablet && index === 0) {
              return props.teasersData.slice(0, 1);
            }

            return index % TEASER_GROUP_NUM === border
              ? props.teasersData.slice(index, index + TEASER_GROUP_NUM)
              : null;
          })
          .filter(item => item !== null)
      : null;

  return teasersDataForGrid ? (
    <Container className="teaserlist__container">
      {teasersDataForGrid.map((teasersData, index) => {
        return (
          <Row className="teaserlist__grid" key={index}>
            {teasersData.map(teaser => {
              return (
                <Col
                  sm={12}
                  md={6}
                  key={teaser.id}
                  className="teaserlist__col px-0 px-sm-3"
                >
                  <TeaserItem teaser={teaser} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  ) : null;
};
