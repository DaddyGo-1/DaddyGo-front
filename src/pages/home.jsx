import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/nav1';

class HomePage extends Component {
    state = {  } 
    render() { 
        return (
          <div>
          <Nav/>
            <section class="hero">
      <div class="hero-center">
        <article class="hero-info">
          <h1>
            Realtime school updates in engineering.
            <p> We dey for u</p>
          </h1>
          <p>
            Connect with thousands of upcoming engineers and leaders at all levels
            Stripe’s app allow to to get accurate and up-to-date information from the horses mouth as quickly as possible.
          </p>
          <NavLink className='' to='/login'><button class="btn">Start now</button></NavLink>
        </article>
        <article class="hero-images">
          <img src="./images/phone.svg" class="img" alt="" />
        </article>
      </div>
    </section>
    </div>
        );
    }
}
 
export default HomePage;