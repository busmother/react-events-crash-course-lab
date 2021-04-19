import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  printLocation = (e) => {
    console.log("client x = ", e.clientX)
    console.log("client y = ", e.clientY)
  }
  
  handleMouseMove = (e) => {
    let xCoord = e.clientX
    let yCoord = e.clientY
    drawChromeBoiAtCoords(xCoord, yCoord)
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  }

  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */

  keyPressMethod = (e) => {
    console.log("in onKeyPress, before the conditional, the key you pressed is =", e.key)
    if (e.key === 's'){
      resize(`-`)
    }else if (e.key === 'a'){
      resize(`+`)
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.keyPressMethod}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
