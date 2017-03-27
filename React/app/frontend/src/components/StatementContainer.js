import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as statementActions from '../actions/statement-actions';
import StatementList from './StatementList';
import StatementInput from './StatementInput';

    class StatementContainer extends Component {

      render() {
          const {statements} = this.props;
          return (
              <div>
                  <StatementInput addStatement={this.props.actions.addProStatement} />
                  <StatementList statements={statements} />
              </div>
          );
      }
    }

StatementContainer.propTypes = {
    statements: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
    return {
        statements: state.statements
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(statementActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementContainer);