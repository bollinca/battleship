import React from 'react'

const ships = (props) => {
  return {
    length: props.length,
    damageLocations: props.damageLocations,
    isSunk: (props.length === props.damageLocations.length),

    updateObject() {
      this.damageLocations = props.damageLocations;
      this.isSunk = (props.length === props.damageLocations.length);
      // LEARN: why "return this" doesn't work here
    },

    hit(location) {
      props.damageLocations.push(location);
      this.updateObject();
      return this; // LEARN: why does this work?
    }
  }
}

export default ships
