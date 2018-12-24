import React, { Component } from 'react';
import './scavenger-hunt.css';

export default props => {
  return (
    <>
      <div className="avenir pa4 black-80 avenir mr-auto ml-auto mw7">
        <p aria-hidden="true" className="relative pale-yellow z-1">
          Press Command + F5 to turn on VoiceOver
        </p>
        <p aria-hidden="true" className="relative pale-yellow z-1">
          Press Control + Option + Shift + Down Arrow to Enter Page
        </p>
        <h1 className="relative pale-yellow z-1">
          Welcome to the Scavenger Hunt
        </h1>
        <main id="maincontent">
          <h2>Your mission is to turn on the lights in here...</h2>
          <div className="house">
            <p>You are now inside the house.</p>
            <div className="ba bw1 b--gray pa3 pb5 ma4" className="front-hall">
              <h3>You're standing by the light switch.</h3>
              <input
                type="checkbox"
                id="light-switch"
                aria-describedby="explanation"
                disabled
              />
              {/* <!-- switch from https://codepen.io/designcouch/pen/dCBJr --> */}
              <label
                aria-hidden="true"
                for="light-switch"
                id="light-switch-label"
              >
                <div className="screw" />
                <div className="switch" />
                <div className="screw" />
              </label>
              <div id="background" />
              <p id="explanation" hidden>
                The light switch isn't working, please turn on the power
                generator.
              </p>
            </div>
            <div className="ba bw1 b--gray pa3 pb5 ma4">
              <h3>You're in the living room</h3>
              <button className="input-reset">Sit on the couch</button>
              <button className="input-reset">Stare out the window</button>
              <button className="input-reset">Pet the dog</button>
            </div>
            <div className="ba bw1 b--gray pa3 pb5 ma4" id="main">
              <h3>You are beside the basement stairs</h3>
              <a href="#basement">Go down the basement stairs</a>
            </div>
            <div className="ba bw1 b--gray pa3 pb5 ma4">
              <h3>You are now in the kitchen</h3>
              <button className="input-reset">Turn on the faucet</button>
              <button className="input-reset">Preheat the oven</button>
              <button className="input-reset">Open the cupboard</button>
            </div>
            <div id="basement" className="mt5 pa3 pb5 ba bw1 b--gray">
              <h3>You're now in the basement</h3>
              <p>You can see:</p>
              <ul>
                <li>Some dusty cobwebs</li>
                <li>A broken bicycle</li>
                <li>A scary clown standing in the corner</li>
                <li>A chainsaw</li>
                <li>The generator!</li>
              </ul>
              <a className="mt4 mb4" href="#main">
                Run back up stairs?
              </a>
              <fieldset>
                <legend>Power Generator</legend>
                <div className="flex items-center mb2">
                  <label for="day" className="lh-copy mr2">
                    Settings
                  </label>
                  <select id="generator" required>
                    <option value="" selected>
                      Off
                    </option>
                    <option value="on">Power On</option>
                  </select>
                </div>
              </fieldset>
              <p>
                You're in the back corner of the basement... The lights are
                still off.
              </p>
            </div>
          </div>
          <div
            id="click-grabber"
            className="top-0 bottom-0 right-0 left-0 fixed z-3"
          />
        </main>
      </div>
    </>
  );
};
