import React, {PropTypes} from 'react';

const Statement = ({statement}) => {
    return (
        <div>
            {statement.name}
        </div>
      );
    };

Statement.propTypes = {
    statement: PropTypes.object.isRequired
};

export default Statement;