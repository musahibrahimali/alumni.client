import React, { useEffect } from 'react';
import Router from 'next/router';

const Home = (props) => {
  console.log(props);
  useEffect(() => {
    Router.push('/client/home');
  });
  return <div />
}


export default Home;
