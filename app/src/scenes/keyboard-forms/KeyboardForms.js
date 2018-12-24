import React from 'react';
import { classNamed } from 'classnamed-components';

const FieldSet = classNamed('fieldset')`b--light-gray ba bw2 bg-white mb4`;
const Legend = classNamed('Legend')`f4 mb2 pa3 bg-black white`;
const Section = classNamed('section')`flex items-center mb2`;
const Input = classNamed('input')`mr2`;
const Label = classNamed('label')`lh-copy`;

export default () => {
  return (
    <>
      <div className="absolute h5 bg-light-green left-0 right-0" />
      <section className="pa4 black-80 mw7 avenir mr-auto ml-auto relative">
        <h1 id="heading1">Movie Night Sign Up</h1>
        <form id="mainForm">
          <FieldSet id="favorite_movies">
            <Legend>Favorite Movies</Legend>
            <Section>
              <Input type="checkbox" id="spacejam" value="spacejam" />
              <Label htmlFor="spacejam">Space Jam</Label>
            </Section>
            <Section>
              <Input type="checkbox" id="airbud" value="airbud" />
              <Label htmlFor="airbud">Air Bud</Label>
            </Section>
            <Section>
              <Input type="checkbox" id="hocuspocus" value="hocuspocus" />
              <Label htmlFor="hocuspocus">Hocus Pocus</Label>
            </Section>
            <Section>
              <Input type="checkbox" id="diehard" value="diehard" />
              <Label htmlFor="diehard">Die Hard</Label>
            </Section>
            <Section>
              <Input type="checkbox" id="primer" value="primer" />
              <Label htmlFor="primer">Primer</Label>
            </Section>
            <Section>
              <Input type="checkbox" id="proxy" value="proxy" />
              <Label htmlFor="proxy">Hudsucker Proxy</Label>
            </Section>
            <Section>
              <Input type="checkbox" id="homealone" value="homealone" />
              <Label htmlFor="homealone">Home Alone</Label>
            </Section>
          </FieldSet>
          <FieldSet id="favorite_snacks">
            <Legend>Snack Choice</Legend>
            <Section>
              <Input type="radio" id="popcorn" value="popcorn" name="snack" />
              <Label htmlFor="popcorn">Popcorn</Label>
            </Section>
            <Section>
              <Input type="radio" id="tea" value="tea" name="snack" />
              <Label htmlFor="tea">Tea</Label>
            </Section>
            <Section>
              <Input type="radio" id="beer" value="beer" name="snack" />
              <Label htmlFor="beer">Beer</Label>
            </Section>
            <Section>
              <Input type="radio" id="none" value="none" name="snack" />
              <Label htmlFor="none">I'm not hungry</Label>
            </Section>
          </FieldSet>
          <FieldSet id="availability">
            <Legend>Availability</Legend>
            <Section>
              <Label htmlFor="time">What's the best time for you?</Label>
              <input
                className="pa2 ma2 db measure hover-purple"
                type="time"
                id="time"
                min="9:00"
                max="18:00"
                required
              />
            </Section>
            <Section>
              <Label htmlFor="day" className="mr2">
                What day is best for you?
              </Label>
              <select id="day" required>
                <option value="" disabled selected>
                  Day
                </option>
                <option value="Mon">Monday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thur">Thursday</option>
                <option value="Fri">Friday</option>
              </select>
            </Section>
            <Section>
              <Label htmlFor="enthusiasm" className="mr2">
                How interested are you in joining every week? (1-10)
              </Label>
              <input
                className="pa2 ma2 db measure"
                type="range"
                id="enthusiasm"
                min="1"
                max="11"
                step="1"
                required
              />
            </Section>
          </FieldSet>
          <FieldSet id="sign_up">
            <Legend>Personal info</Legend>
            <div className="mt3">
              <Label htmlFor="email-address" className="db fw4 f6">
                Email address
              </Label>
              <input
                className="pa2 input-reset ba bg-transparent w-100"
                type="email"
                name="email-address"
                id="email-address"
                required
              />
            </div>
            <div className="mt3">
              <Label className="db fw4 f6" for="password">
                Password
              </Label>
              <input
                className="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                id="password"
                aria-describedby="password-desc"
                required
                minlength="9"
              />
              <small id="password-desc" className="f6 lh-copy black-60 db mb2">
                Must be 9 characters long and contain both a number and an
                uppercase character.
              </small>
            </div>
            <Section>
              <Input type="checkbox" id="newsletter" value="newsletter" />
              <Label htmlFor="newsletter">
                I would like to get the weekly newsletter for movie updates!
              </Label>
            </Section>
            <Section>
              <Input type="checkbox" id="terms" value="terms" checked />
              <Label htmlFor="terms">
                I hereby agree to the
                <button
                  type="button"
                  id="open-terms"
                  className="input-reset bg-transparent link underline bn"
                >
                  terms and conditions
                </button>
              </Label>
            </Section>
          </FieldSet>
          <div className="mt3">
            <input
              className="b ph4 pv3 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
      </section>
      <dialog id="dialog" className="mw6">
        <h1>Terms and conditions</h1>
        <p>
          I hereby agree to give all of my belongings (and my soul) to the group
          and waive all my rights to counsel.
        </p>
        <input
          type="submit"
          id="confirm"
          className="b ph4 mh3 pv3 input-reset ba b--black bg-transparent grow pointer f6"
          value="Sounds good!"
        />
        <button
          type="button"
          id="cancel"
          className="b ph4 pv3 input-reset ba b--black bg-transparent grow pointer f6"
        >
          Cancel
        </button>
      </dialog>
    </>
  );
};
