var React = require('react');
var Results = require('../components/results');
var githubHelpers = require('../utils/githubhelpers');

var ResultsContainer = React.createClass({
  getInitialState() {
      return {
          isLoading: true,
          scores: []
      };
  },
  componentDidMount: function () {
    githubHelpers.battle(this.props.location.state.playerInfo)
    .then(function (scores) {
      this.setState({
        scores: scores,
        isLoading: false
      })
    }.bind(this))
  },
  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playerInfo={this.props.location.state.playerInfo}
        score={this.state.scores}/>
    );
  }
});

module.exports = ResultsContainer;