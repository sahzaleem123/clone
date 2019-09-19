import React from 'react';
import PropTypes from 'prop-types'

const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.number}</p>
            <p>{props.chat}</p>
            <p>{props.time}</p>
        </div>
    );
};
User.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    chat: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
export default User;