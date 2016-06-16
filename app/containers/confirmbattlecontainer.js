var React = require('react');
var ConfirmBattle = require('../components/confirmbattle');
var githubHelpers = require('../utils/githubhelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })
    }.bind(this));
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    });
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playerInfo={this.state.playerInfo}/>
    );
  }
});

module.exports = ConfirmBattleContainer;