import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionsGrid from './QuestionsGrid';
import AppTitle from '../../shared/AppTitle';

class UnansweredQuestions extends Component {
  static propTypes = {
    unansweredQuestions: PropTypes.array,
  };

  shouldComponentUpdate(props) {
    // If the user has logged out, this would be re-rendered without the user during the pages transition animation.
    // Keep this component as is for the animation to finish with the user that was logged in.
    return props.unansweredQuestions !== null;
  }

  render() {
    const { unansweredQuestions } = this.props;

    return (
      <Fragment>
        <AppTitle value="Unanswered Questions" />
        <QuestionsGrid questions={unansweredQuestions} />
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  const authedUser = state.users[state.authedUser];
  if (!authedUser) {
    return {
      ...props,
      unansweredQuestions: null,
    };
  }

  const unansweredQuestions = Object.keys(state.questions)
    .filter((questionId) => !(questionId in authedUser.answers))
    .map((questionId) => {
      const question = state.questions[questionId];
      return {
        ...question,
        author: state.users[question.author],
      };
    });

  return {
    ...props,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(UnansweredQuestions);
