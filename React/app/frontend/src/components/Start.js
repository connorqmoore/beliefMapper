import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as statementActions from '../actions/statement-actions';
import StatementInput from './StatementInput';

class Start extends Component {

    render() {

        return (
            <div>
                <StatementInput addStatement={this.props.actions.addProStatement} />
            </div>
        );
    }
}

Start.propTypes = {
    actions: PropTypes.object.isRequired
};

// function mapStateToProps(state, props) {
//     return {
//         statements: state.statements
//     };
// }

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(statementActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Start);
// export default Start;