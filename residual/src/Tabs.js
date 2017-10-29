import React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from "react-swipeable-views";
import "./Tabs.css";

export default class TabsSwipeable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = value => {
    this.setState({
      slideIndex: value
    });
  };

  render() {
    return (
      <div className="Tabs">
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Residual" value={0} />
          <Tab label="how it works" value={1} />
          <Tab label="get started" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div className="Tabs-slide1">
            <img
              className="Tabs-slide1img"
              src={require("./img/coinflip.gif")}
              alt="Coin-Flip"
            />
            <br />
            <img
              className="Tabs-slide1img"
              src={require("./img/residualgold.jpg")}
              alt="Residual-Gold"
            />
            <h1 className="Tabs-title">Putting your spare change to work</h1>
          </div>
          <div className="Tabs-slide2">
            <h1 className="Tabs-title">
              Here is a quick run down of how it works
            </h1>
            <div className="Tabs-slide2-columns">
              <div className="Tabs-slide2-column1">
                Use your debit card to make normal every day purchases
                <br />
                <img
                  className="Tabs-slide2-imgs"
                  src={require("./img/debit.png")}
                  alt="debit card swipe"
                />
              </div>
              <div className="Tabs-slide2-column2">
                Your purchases are rounded to the nearest dollar
                <br />
                <img
                  className="Tabs-slide2-imgs"
                  src={require("./img/change.png")}
                  alt="round up graph"
                />
              </div>
              <div className="Tabs-slide2-column3">
                <div className="Tabs-slide2-column3-text">
                  Decide where your money goes
                </div>
                <img
                  className="Tabs-slide2-imgs"
                  src={require("./img/Car-Made-of-Money.png")}
                  alt="Car made of money"
                />
              </div>
            </div>
          </div>
          <div className="Tabs-slide3">Sign up</div>
        </SwipeableViews>
      </div>
    );
  }
}
