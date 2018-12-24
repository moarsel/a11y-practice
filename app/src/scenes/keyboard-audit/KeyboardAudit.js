import React from 'react';
import './keyboard-audit.css';

import ClickStopper from '../../components/ClickStopper';

export default () => {
  return (
    <ClickStopper>
      <header className="pa4 black-80 avenir mr-auto ml-auto flex-row-ns flex flex-column justify-around">
        <a
          className="db mid-gray w-25-l mw5 outline-none"
          href="#"
          title="Home"
        >
          <h1 className="mw3-ns f3">Business Central</h1>
        </a>
        <nav className="db w-100 border-box pa3 fr">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Products</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Click tracking</a>
                </li>
                <li>
                  <a href="#">Content analysis</a>
                </li>
                <li>
                  <a href="#">Enterprise solutinos</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a className="outline-none" href="#">
                Sales
              </a>
            </li>
            <li>
              <a className="outline-none" href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main
        id="maincontent"
        className="flex flex-row-reverse-ns flex-column-reverse justify-around"
      >
        <section className="mw5">
          <h2 className="avenir fw6 ph2 ph0-l">Latest News</h2>
          <article className="bt bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div className="flex flex-column">
                <div className="pr3-ns mb4 mb0-ns w-100 ">
                  <img
                    src="http://mrmrs.github.io/photos/cpu.jpg"
                    className="db"
                    alt="Photo of a dimly lit room with a computer interface terminal."
                  />
                </div>
                <div className="w-100 pl3-ns">
                  <h1 className="f3 fw6 avenir mt0 lh-title">
                    Tech Giant Invests Huge Money to Build a Computer Out of
                    Science Fiction
                  </h1>
                  <p className="f6 lh-copy mv0">By Robin Darnell</p>
                </div>
              </div>
            </a>
          </article>
          <article className="bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div className="flex flex-column">
                <div className="pr3-ns mb4 mb0-ns w-100">
                  <img
                    src="http://mrmrs.github.io/photos/warehouse.jpg"
                    className="db"
                    alt="Photo of a warehouse with stacked shelves."
                  />
                </div>
                <div className="w-100 pl3-ns">
                  <h1 className="f3 fw6 avenir mt0 lh-title">
                    Warehouse Prices Are Fast on the Rise
                  </h1>
                  <p className="f6 lh-copy mv0">By Robin Darnell</p>
                </div>
              </div>
            </a>
          </article>
          <article className="bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div className="flex flex-column">
                <div className="pr3-ns mb4 mb0-ns w-100 ">
                  <img
                    src="http://mrmrs.github.io/photos/whale.jpg"
                    className="db"
                    alt="Photo of a whale's tale coming crashing out of the water."
                  />
                </div>
                <div className="w-100 pl3-ns">
                  <h1 className="f3 fw6 avenir mt0 lh-title">
                    Giant Whale Invests Huge Money to Build a Computer Out of
                    Plankton
                  </h1>
                  <p className="f6 lh-copy mv0">By Robin Darnell</p>
                </div>
              </div>
            </a>
          </article>
        </section>
        <section>
          <form id="login" className="bw1 ba b--silver ma3 pa4">
            <h2 className="avenir fw6 ph3 ph0-l">Sign up now!</h2>
            <div className="mt4 flex flex-row-reverse">
              <div>
                <label className="db fw4 lh-copy f6" htmlFor="first-name">
                  Last name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="input"
                  name="first-name"
                  id="first-name"
                  required
                />
              </div>
              <div>
                <label className="db fw4 lh-copy f6" htmlFor="middle">
                  Middle name
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent"
                  type="input"
                  name="middle"
                  id="middle"
                  required
                  minlength="9"
                />
              </div>
              <div>
                <label className="db fw4 lh-copy f6" htmlFor="last-name">
                  First name
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent"
                  type="input"
                  name="last-name"
                  id="last-name"
                  required
                  minlength="9"
                />
              </div>
            </div>
            <div className="mt4">
              <label>How many months do you want to sign up for?</label>
              <div className="wrapper db">
                <div className="label-wrapper">
                  <input id="one" type="radio" name="group-1" />
                  <label className="lbl" htmlFor="one">
                    One
                  </label>
                  <input id="two" type="radio" name="group-1" />
                  <label className="lbl" htmlFor="two">
                    Two
                  </label>
                  <input id="three" type="radio" name="group-1" />
                  <label className="lbl" htmlFor="three">
                    Three
                  </label>
                  <input id="four" type="radio" name="group-1" />
                  <label className="lbl" htmlFor="four">
                    Four
                  </label>
                  <div className="slider" />
                </div>
              </div>
            </div>
            <div className="mt4">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">
                Email address
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100"
                type="email"
                name="email-address"
                id="email-address"
                required
              />
            </div>
            <div className="mt4">
              <label className="db fw4 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent outline-none"
                type="password"
                name="password"
                id="password"
                aria-describedby="password-desc"
                required
                minlength="9"
              />
            </div>
            <div className="mt4 flex items-center mb2">
              <input
                className="mr2"
                type="checkbox"
                id="newsletter"
                value="newsletter"
              />
              <label htmlFor="newsletter" className="lh-copy">
                I hereby agree to the
                <a href="javascript:;" id="open-terms" className="input-reset">
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="mt4">
              <a
                href="#maincontent"
                className="b ph4 pv3 input-reset ba b--black bg-transparent pointer f5 link"
              >
                Login
              </a>
            </div>
          </form>
        </section>
      </main>
      <div
        id="dialog"
        className="mw6 dn fixed top-0 bottom-0 right-0 left-0 width-100 center"
      >
        <div className="mw7 ba bw1  pa4 bg-white center">
          <h1>Terms and conditions</h1>
          <p>
            I hereby agree to give all of my belongings (and my soul) to the
            business corp and waive all my rights to counsel.
          </p>
          <input
            type="submit"
            id="confirm"
            className="b ph4 mh3 pv3 input-reset ba b--black bg-transparent pointer f6"
            value="Sounds good!"
          />
          <button
            id="cancel"
            className="b ph4 pv3 input-reset ba b--black bg-transparent pointer f6"
          >
            Cancel!
          </button>
        </div>
      </div>
      <footer className="pa3">
        <small>
          Legal notice: please contact our
          <a href="mailto:lawyer@law.com">lawyers</a> when stealing from this
          site so we know who to sue.
        </small>
      </footer>
    </ClickStopper>
  );
};
