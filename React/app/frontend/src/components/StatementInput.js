import React, {PropTypes, Component} from 'react';

class StatementInput extends Component {
    constructor(props) {
        super(props);
        this.onAddStatementClick = this.onAddStatementClick.bind(this);
    }

    onAddStatementClick() {
        const lastNameElement = document.getElementById('lastname');

        this.props.addStatement({
            lastname: lastNameElement.value
        });

        lastNameElement.value = "";

        lastNameElement.focus();
    }

    componentDidMount() {
        document.getElementById('lastname').focus();
    }

    render() {
        return (
            <div>
                <input id="lastname" type="text" placeholder="Last Name" />
                <button onClick={this.onAddStatementClick}>Add Statement</button>
            </div>
        );
    }
}

StatementInput.propTypes = {
    addStatement: PropTypes.func.isRequired
};

export default StatementInput;