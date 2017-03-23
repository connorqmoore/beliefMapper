import React, {PropTypes} from 'react';

const Statement = ({statement}) => {
    return (
        <div>
            {statement.lastname}
        </div>
      );
    };

Statement.propTypes = {
    statement: PropTypes.object.isRequired
};

export default Statement;