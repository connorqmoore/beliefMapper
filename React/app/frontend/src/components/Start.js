import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as statementActions from '../actions/statement-actions';
import StatementInput from './StatementInput';

import {
    Link
} from 'react-router-dom';

class Start extends Component {

    render() {

        return (
            <div>
                <Link to="/temp">
                    <StatementInput addStatement={this.props.actions.addProStatement} />
                </Link>
            </div>

        );
    }
}

Start.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(statementActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Start);