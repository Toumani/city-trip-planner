import React from "react";

import styles from './Configuration.module.css';

export default class Configuration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mean: 'train',
      departuneHome: 'before',
      departuneWork: 'before',
      climate: 'clear',

      travelTime: 115,
      wastedTime: 30,
      cost: 580,
      energy: 180,
      comfort: 3,
      security: 5
    }
  }

  compute = (mean, departuneHome, departuneWork, climate) =>  {
    console.log('Computing with state: ', this.state);
    let travelTime = 0;
    let cost = 0;
    let energy = 0;
    let comfort = 0;
    switch (mean) {
      case 'train':
        switch (departuneHome) {
          case 'before':
            travelTime += 50;
            comfort += 4;
            break;
          case 'during':
            travelTime += 60;
            comfort += 2;
            break;
          case 'after':
            travelTime += 50;
            comfort += 3;
            break;
        }
        switch (departuneWork) {
          case 'before':
            travelTime += 60;
            comfort += 4;
            break;
          case 'during':
            travelTime += 70;
            comfort += 2;
            break;
          case 'after':
            travelTime += 60;
            comfort += 4;
            break;
        }
        switch (climate) {
          case 'clear':
            comfort += 5;
            break;
          case 'sunny':
            comfort += 3;
            break;
          case 'rainy':
            comfort += 1;
            break;
          case 'cold':
            comfort += 4;
            break;
        }
        comfort /= 3;
        this.setState({ travelTime, wastedTime: 30, cost: 580, energy: 60, comfort, security: 5})
        break;
      case 'cycle':
        switch (departuneHome) {
          case 'before':
            travelTime += 30;
            break;
          case 'during':
            travelTime += 35;
            break;
          case 'after':
            travelTime += 30;
            break;
        }
        switch (departuneWork) {
          case 'before':
            travelTime += 30;
            break;
          case 'during':
            travelTime += 35;
            break;
          case 'after':
            travelTime += 30;
            break;
        }
        switch (climate) {
          case 'clear':
            comfort += 3;
            break;
          case 'sunny':
            comfort += 1;
            break;
          case 'rainy':
            comfort += 1;
            break;
          case 'cold':
            comfort += 2
            break;
        }
        this.setState({ travelTime, wastedTime: travelTime, cost: 0, energy: 1210, comfort, security: 3})
        break;
      case 'car':
        switch (departuneHome) {
          case 'before':
            travelTime += 25;
            comfort += 5;
            cost += 12.5;
            energy += 60;
            break;
          case 'during':
            travelTime += 40;
            comfort += 4;
            cost += 14.5;
            energy += 120;
            break;
          case 'after':
            travelTime += 35;
            comfort += 5;
            cost += 14.5;
            energy += 120;
            break;
        }
        switch (departuneWork) {
          case 'before':
            travelTime += 25;
            comfort += 5;
            cost += 7.5;
            break;
          case 'during':
            travelTime += 40;
            comfort += 4;
            cost += 7.5;
            break;
          case 'after':
            travelTime += 30;
            comfort += 5;
            cost += 7.5;
            break;
        }
        comfort /= 2;
        cost *= 22; // 22 working days in a month
        this.setState({ travelTime, wastedTime: travelTime, cost, energy, comfort, security: 4 });
    }
  }

  componentDidMount() {
    const { mean, departuneHome, departuneWork, climate } = this.state
    this.compute(mean, departuneHome, departuneWork, climate);
  }

  updateMean = (mean) => {
    const { departuneHome, departuneWork, climate } = this.state
    this.setState({ mean })
    this.compute(mean, departuneHome, departuneWork, climate);
  }

  updateDepartuneHome = (departuneHome) => {
    const { mean, departuneWork, climate } = this.state
    this.setState({ departuneHome })
    this.compute(mean, departuneHome, departuneWork, climate);
  }

  updateDepartuneWork = (departuneWork) => {
    const { mean, departuneHome, climate } = this.state
    this.setState({ departuneWork })
    this.compute(mean, departuneHome, departuneWork, climate);
  }

  updateClimate = (climate) => {
    const { mean, departuneHome, departuneWork } = this.state
    this.setState({ climate })
    this.compute(mean, departuneHome, departuneWork, climate);
  }

  render() {
    const { travelTime, wastedTime, cost, energy, comfort, security } = this.state;
    const { id } = this.props;

    return (
      <section className={styles.root}>
        <section className={styles.configuration}>
          <h4>Configuration</h4>
          <div>
            <label for="train-radio">Train</label>
            <input id="train-radio" type="radio" name={`${id}-mean`} value="train"
              onChange={() => { this.updateMean('train'); }}
            />
            <label for="cycle-radio">Cycle</label>
            <input id="cycle-radio" type="radio" name={`${id}-mean`} value="cycle"
              onChange={() => { this.updateMean('cycle'); }}
            />
            <label for="car-radio">Car</label>
            <input id="car-radio" type="radio" name={`${id}-mean`} value="car"
              onChange={() => { this.updateMean('car'); } }
            />
          </div>
          <div className={styles.select}>
            <label>Departune from home</label>
            <select onChange={(e) => { this.updateDepartuneHome(e.target.value) }}>
              <option value="before">Before rush hour</option>
              <option value="during">During rush hour</option>
              <option value="after">After rush hour</option>
            </select>
          </div>
          <div className={styles.select}>
            <label>Departune from work</label>
            <select onChange={(e) => { this.updateDepartuneWork(e.target.value) }}>
              <option value="before">Before rush hour</option>
              <option value="during">During rush hour</option>
              <option value="after">After rush hour</option>
            </select>
          </div>
          <div>
            <h5>Climate</h5>
            <label for="clear-radio">Clear</label>
            <input id="clear-radio" type="radio" name={`${id}-climate`} value="clear"
              onChange={() => { this.updateClimate('clear'); }}
            />
            <label for="sunny-radio">Sunny</label>
            <input id="sunny-radio" type="radio" name={`${id}-climate`} value="sunny"
              onChange={() => { this.updateClimate('sunny'); }}
            />
            <label for="rainy-radio">Rainy</label>
            <input id="rainy-raido" type="radio" name={`${id}-climate`} value="rainy"
              onChange={() => { this.updateClimate('rainy'); }}
            />
            <label for="cold-radio">Cold</label>
            <input id="cold-raido" type="radio" name={`${id}-climate`} value="cold"
              onChange={() => { this.updateClimate('cold'); }}
            />
          </div>
        </section>
        <section className={styles.features}>
          <div className={`${styles.feature} even`}><span>{ `${travelTime} m` }</span></div>
          <div className={`${styles.feature} odd`}>{ `${wastedTime} m` }</div>
          <div className={`${styles.feature} even`}>{ `${cost} MAD` }</div>
          <div className={`${styles.feature} odd`}>{ `${energy} kcal` }</div>
          <div className={`${styles.feature} even`}>{ `${comfort} *` }</div>
          <div className={`${styles.feature} odd`}>{ `${security} *` }</div>
        </section>
      </section>
    )
  }
}