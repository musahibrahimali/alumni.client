import React from 'react';
import Router from 'next/router';

const Home = () => {
  React.useEffect(() => {
    Router.push('/client/home');
  });
  return <div />
}


export default Home;
