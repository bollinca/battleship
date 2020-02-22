import React from 'react'

const ships = (props) => {
  return {
    length: props.length,
    damageLocations: props.damageLocations,
    isSunk: (props.length === props.damageLocations.length),
  }
}

export default ships
