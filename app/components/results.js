var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./userdetails');
var UserDetailsWrapper = require('./userdetailswrapper');
var MainContainer = require('./maincontainer.js');
var Loading = require('./loading');
var Link = require('react-router').Link;

function Results(props) {

  var winningIndex = props.score[0] > props.score[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  if (props.loading) {
    return (<Loading text="One moment" />);
  }

  if (props.score[0] === props.score[1]) {
    return (
      <MainContainer>
        <h1>Its a Tie</h1>
        <StartOver />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.score[winningIndex]} info={props.playerInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.score[losingIndex]} info={props.playerInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

function StartOver(props) {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  );
}


Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  score: PropTypes.array.isRequired
}

module.exports = Results;