import React from "react";
import CardDivs from "./CardDivs";
import cards from "../cards.json";

export default class Score extends React.Component{

    state = {
        score: 0,
        cards,
    };

    handleClick = () => {
        this.setState({
            score: this.state.score + 1,
            clicked: true,
        });

        console.log()
    };

    render() {
        return (
          <div className="panel panel-primary">
            <div className="panel-heading">Score : {this.state.score}</div>
            {this.state.cards.map(card => (
          <div onClick={this.handleClick}><CardDivs
          image = {card.image}
          key = {card.id}
        /></div>))};
          </div>
        );
      }

}

