import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled from "styled-components";
const Tabs = props => {
  const TabDivs = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;
    @media (min-width: 1280px) {
      width: 1280px;
    }
  `;

  const Topics = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
  `;
  const Title = styled.span`
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  `;
  return (
    <TabDivs>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map(tab => (
          <Tab
            tab={tab}
            key= {props.tabs.indexOf(tab)}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
        ))

        /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
        }
      </Topics>
    </TabDivs>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};
export default Tabs;
