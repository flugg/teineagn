import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo-inverted.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img src={logo} alt="Kaldi" style={{ width: '14em' }} />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw', paddingBottom: '2.5em' }}>
              <section>
                <div style={{ marginBottom: '2em' }}>
                  <a href="mailto:post@teineagn.no">post@teineagn.no</a>
                </div>
                <div style={{ color: '#aaa', fontSize: '0.8em' }}>© Copyright {year}</div>
              </section>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
