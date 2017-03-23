import React, {PropTypes, Component} from 'react';

class PersonInput extends Component {
    constructor(props) {
        super(props);
        this.onAddPersonClick = this.onAddPersonClick.bind(this);
    }

    onAddPersonClick() {
        const lastNameElement = document.getElementById('lastname');

        this.props.addPerson({
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
                <button onClick={this.onAddPersonClick}>Add Person</button>
            </div>
        );
    }
}

PersonInput.propTypes = {
    addPerson: PropTypes.func.isRequired
};

export default PersonInput;