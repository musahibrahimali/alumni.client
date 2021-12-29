import React from 'react';
import Router from 'next/router';

const _error = () => {
    React.useEffect(() => {
        Router.push('/client/error');
    });
    return <div />;
}

export default _error;
