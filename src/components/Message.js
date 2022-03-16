import React from 'react';

const Message = ({pseudo, message, isCurrentUser}) => {

    if(isCurrentUser(pseudo)) {
        return (
            <p className='user-message'>
                <strong>{pseudo}</strong>: {message}
            </p>
        )
    } else {
        return (
            <p className='not-user-message'>
                <strong>{pseudo}</strong>: {message}
            </p>
        )
    }
}

export default Message