/* eslint-disable */
import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import clsx from 'clsx';

import { personalityTraits } from '../global/constants';

@observer
class TraitsView extends React.Component {
  calcTrait = () => {
    const { params } = this.props.match;
    const fractionClassX = Number(params.fractionClassX);
    const fractionClassY = Number(params.fractionClassY);

    const findPersonality = personalityTraits.filter((item) => {
      const flagX =
        fractionClassX >= item.fractionMinClassX &&
        fractionClassX <= item.fractionMaxClassX;
      const flagY =
        fractionClassY >= item.fractionMinClassY &&
        fractionClassY <= item.fractionMaxClassY;

      return flagX && flagY;
    });

    return findPersonality[0];
  };

  render() {
    const trait = this.calcTrait();

    console.log(trait);

    return (
      <div>
        <h1>Traits View</h1>
        <h3>{trait.answer}</h3>
      </div>
    );
  }
}

export default withRouter(TraitsView);
