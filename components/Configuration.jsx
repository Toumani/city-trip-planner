import React from "react";

import styles from './Configuration.module.css';

export default class Configuration extends React.Component {
  render() {
    return (
      <section className={styles.root}>
        <section className={styles.configuration}>
          <h4>Configuration</h4>
          <div>
            <label for="train-radio">Train</label>
            <input id="train-radio" type="radio" name="mean" value="train" />
            <label for="cyle-radio">Cycle</label>
            <input id="cycle-radio" type="radio" name="mean" value="cycle" />
            <label for="car-radio">Car</label>
            <input id="car-radio" type="radio" name="mean" value="car" />
          </div>
          <div className={styles.select}>
            <label>Departune from home</label>
            <select>
              <option>Before rush hour</option>
              <option>During rush hour</option>
              <option>After rush hour</option>
            </select>
          </div>
          <div className={styles.select}>
            <label>Departune from work</label>
            <select>
              <option>Before rush hour</option>
              <option>During rush hour</option>
              <option>After rush hour</option>
            </select>
          </div>
          <div>
            <h5>Climate</h5>
            <label for="clear-radio">Clear</label>
            <input id="clear-radio" type="radio" name="climate" value="clear" />
            <label for="sunny-radio">Sunny</label>
            <input id="sunny-radio" type="radio" name="climate" value="sunny" />
            <label for="rainy-radio">Rainy</label>
            <input id="rainy-raido" type="radio" name="climate" value="rainy" />
            <label for="cold-radio">Cold</label>
            <input id="cold-raido" type="radio" name="climate" value="cold" />
          </div>
        </section>
        <section className={styles.features}>
          <div className={`${styles.feature} even`}><span>1h</span></div>
          <div className={`${styles.feature} odd`}>1h</div>
          <div className={`${styles.feature} even`}>440 MAD</div>
          <div className={`${styles.feature} odd`}>60 kcal</div>
          <div className={`${styles.feature} even`}>****</div>
          <div className={`${styles.feature} odd`}>****</div>
        </section>
      </section>
    )
  }
}