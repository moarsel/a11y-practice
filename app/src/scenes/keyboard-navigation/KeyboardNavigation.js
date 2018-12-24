import React from 'react';
import './keyboard-navigation.css';
import { classNamed } from 'classnamed-components';

const A = classNamed('a')`link dim dark-gray f5 dib mr3`;
const Subhead = classNamed('h2')`avenir fw1 ph3 ph0-l`;

export default () => {
  return (
    <>
      <header className="pa4 black-80 avenir mr-auto ml-auto">
        <nav className="db dt-l w-100 border-box pa3 ph5-l">
          <a
            className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
            href="#"
            title="Home"
          >
            <h1 className="mw3-ns">Tech Daily News</h1>
          </a>
          <a href="#maincontent" className="skip-link">
            Skip navigation
          </a>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <A href="#" title="World">
              World
            </A>
            <A href="#" title="U.S.">
              U.S.
            </A>
            <A href="#" title="Politics">
              Politics
            </A>
            <A href="#" title="N.Y.">
              N.Y.
            </A>
            <A href="#" title="Business">
              Business
            </A>
            <A href="#" title="Opinion">
              Opinion
            </A>
            <A href="#" title="Tech">
              Tech
            </A>
            <A href="#" title="Science">
              Science
            </A>
            <A href="#" title="Health">
              HeAlth
            </A>
            <A href="#" title="Sports">
              Sports
            </A>
            <A href="#" title="Arts">
              Arts
            </A>
            <A href="#" title="Books">
              Books
            </A>
            <A href="#" title="Style">
              Style
            </A>
            <A href="#" title="Food">
              Food
            </A>
            <A href="#" title="Travel">
              Travel
            </A>
            <A href="#" title="Magazine">
              Magazine
            </A>
            <A href="#" title="T Magazine">
              Weekly
            </A>
            <A href="#" title="Real Estate">
              Newsletter
            </A>
            <A href="#" title="Real Estate">
              Random
            </A>
            <A href="#" title="Real Estate">
              Menu
            </A>
            <A href="#" title="Real Estate">
              Clutter
            </A>
            <A href="#" title="Arts">
              Analysis
            </A>
            <A href="#" title="Books">
              Celebrities
            </A>
            <A href="#" title="Style">
              Programming
            </A>
          </div>
        </nav>
      </header>
      <main
        id="maincontent"
        className="flex flex-row-reverse-ns flex-column-reverse justify-around"
      >
        <aside>
          <form id="login" className="bw1 ba b--silver ma3 pa4">
            <Subhead>Login</Subhead>
            <div className="mt3">
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
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                id="password"
                required
                minlength="9"
              />
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" id="terms" value="terms" />
              <label htmlFor="terms" className="lh-copy">
                Remember me
              </label>
            </div>
            <div className="mt3">
              <input
                className="b ph4 pv3 input-reset ba b--black bg-transparent grow pointer f6"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </aside>
        <section className="mw7">
          <Subhead>News</Subhead>
          <article className="bt bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img
                    src="http://mrmrs.github.io/photos/cpu.jpg"
                    className="db"
                    alt="Photo of a dimly lit room with a computer interface terminal."
                  />
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                  <h1 className="f3 fw1 avenir mt0 lh-title">
                    Tech Giant Invests Huge Money to Build a Computer Out of
                    Science Fiction
                  </h1>
                  <p className="f6 f5-l lh-copy">
                    The tech giant says it is ready to begin planning a quantum
                    computer, a powerful cpu machine that relies on subatomic
                    particles instead of transistors.
                  </p>
                  <p className="f6 lh-copy mv0">By Robin Darnell</p>
                </div>
              </div>
            </a>
          </article>
          <article className="bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img
                    src="http://mrmrs.github.io/photos/warehouse.jpg"
                    className="db"
                    alt="Photo of a warehouse with stacked shelves."
                  />
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                  <h1 className="f3 fw1 avenir mt0 lh-title">
                    Warehouse Prices Are Fast on the Rise
                  </h1>
                  <p className="f6 f5-l lh-copy">
                    A warehouse is a commercial building for storage of goods.
                    Warehouses are used by manufacturers, importers, exporters,
                    wholesalers, transport businesses, customs, etc. They are
                    usually large plain buildings in industrial areas of cities,
                    towns and villages.
                  </p>
                  <p className="f6 lh-copy mv0">By Robin Darnell</p>
                </div>
              </div>
            </a>
          </article>
          <article className="bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img
                    src="http://mrmrs.github.io/photos/whale.jpg"
                    className="db"
                    alt="Photo of a whale's tale coming crashing out of the water."
                  />
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                  <h1 className="f3 fw1 avenir mt0 lh-title">
                    Giant Whale Invests Huge Money to Build a Computer Out of
                    Plankton
                  </h1>
                  <p className="f6 f5-l lh-copy">
                    Whale is the common name for a widely distributed and
                    diverse group of fully aquatic placental marine mammals.
                    They are an informal grouping within the infraorder Cetacea,
                    usually excluding dolphins and porpoises.
                  </p>
                  <p className="f6 lh-copy mv0">By Robin Darnell</p>
                </div>
              </div>
            </a>
          </article>
        </section>
      </main>
    </>
  );
};
