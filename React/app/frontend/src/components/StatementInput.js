import React, {PropTypes, Component} from 'react';

class StatementInput extends Component {
    constructor(props) {
        super(props);
        this.onAddStatementClick = this.onAddStatementClick.bind(this);
    }

    onAddStatementClick() {
        const nameElement = document.getElementById('name');

        this.props.addStatement({
            name: nameElement.value
        });

        nameElement.value = "";

        nameElement.focus();
    }

    componentDidMount() {
        document.getElementById('name').focus();
    }

    render() {
        return (
            <div>
                <input id="name" type="text" placeholder="Name" />
                <button onClick={this.onAddStatementClick}>Add Statement</button>
            </div>
        );
    }
}

StatementInput.propTypes = {
    addStatement: PropTypes.func.isRequired
};

export default StatementInput;