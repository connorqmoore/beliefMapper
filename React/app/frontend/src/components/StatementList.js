import React, {PropTypes} from 'react';
import Statement from './Statement';

const StatementList = ({statements}) => {
    return (
        <div>
        {statements.map((statement) =>
            <Statement key={statement.name} statement={statement} />
        )}
        </div>
    );
};

StatementList.propTypes = {
    statements: PropTypes.array.isRequired
};

export default StatementList;