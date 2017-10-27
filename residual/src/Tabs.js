import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import './Tabs.css';

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
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
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                <div className="Tabs-slide1">
                    <img className="Tabs-slide1img" src={require("./img/coinflip.gif")} alt="Coin-Flip" />
                    <br />
                    <img className="Tabs-slide1img" src={require("./img/residualgold.jpg")} alt="Residual-Gold" />
                    <h1 className="Tabs-title">Putting your spare change to work</h1>
                    <br/>
                    <p>Username</p>
                    <p>Password</p>
                </div>
                <div className="Tabs-slide2">
                    <h1 className="Tabs-title">Here is a quick run down of how it works.</h1>
                    <div className="Tabs-slide2-columns">
                        <div className="Tabs-slide2-column1">
                            <p>You use your debit card</p>
                        </div>
                        <div className="Tabs-slide2-column2">
                            <p>We round every transaction to the nearest dollar</p>
                        </div>
                        <div className="Tabs-slide2-column3">
                        <p>You decide where the change goes</p>
                        </div>
                    </div>
                </div>
                <div className="Tabs-slide3">
                    Sign up
                </div>
            </SwipeableViews>
        </div>
    );
  }
}