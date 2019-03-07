import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class DrumMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "CR-78"
      }
      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    playSound (letter) {
      if (letter == "Q") {
        document.getElementById("Q").play();
        this.setState ({
          input: "Bass Drum"
        })
      } 
      else if (letter == "W") {
        document.getElementById("W").play();
        this.setState ({
          input: "Bass Hi"
        })
      }
      else if (letter == "E") {
        document.getElementById("E").play();
        this.setState ({
          input: "Bass Lo"
        })
      }
      else if (letter == "A") {
        document.getElementById("A").play();
        this.setState ({
          input: "Bass Med"
        })
      }
      else if (letter == "S") {
        document.getElementById("S").play();
        this.setState ({
          input: "cla"
        })
      }
      else if (letter == "D") {
        document.getElementById("D").play();
        this.setState ({
          input: "Cowbell"
        })
      }
      else if (letter == "Z") {
        document.getElementById("Z").play();
        this.setState ({
          input: "gui"
        })
      }
      else if (letter == "X") {
        document.getElementById("X").play();
        this.setState ({
          input: "Hihat Open"
        })
      }
      else if (letter == "C") {
        document.getElementById("C").play();
        this.setState ({
          input: "Hihat Closed"
        })
      }
    };
    handleKeyPress (event, fnc) {
      if (event.keyCode === 81) {
        fnc("Q");
      }
      else if (event.keyCode === 87) {
        fnc("W");
      }
      else if (event.keyCode === 69) {
        fnc("E");
      }
      else if (event.keyCode === 65) {
        fnc("A");
      }
      else if (event.keyCode === 83) {
        fnc("S");
      }
      else if (event.keyCode === 68) {
        fnc("D");
      }
      else if (event.keyCode === 90) {
        fnc("Z");
      }
      else if (event.keyCode === 88) {
        fnc("X");
      }
      else if (event.keyCode === 67) {
        fnc("C");
      }
    }
    
    render () {
      return (
        <div onKeyDown={(e) => this.handleKeyPress(e, this.playSound)}>
          <h1>Drum Machine</h1>
          <div id="drum-machine">
              <div id="display">{this.state.input}</div>
              <div id="button-div">
                  <button class="drum-pad" id="bass-drum" onClick={this.playSound.bind(this, "Q")}>Q<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/15[kb]78-BD1.aif.mp3" class="clip" id="Q"></audio></button>
                  <button class="drum-pad" id="bass-hi" onClick={this.playSound.bind(this, "W")}>W<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/10[kb]78-BHI1.aif.mp3" type="audio/mpeg" class="clip" id="W"></audio></button>
                  <button class="drum-pad" id="bass-lo" onClick={this.playSound.bind(this, "E")}>E<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/19[kb]78-BLO1.aif.mp3" class="clip" id="E"></audio></button>
                  <button class="drum-pad" id="bass-med" onClick={this.playSound.bind(this, "A")}>A<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/10[kb]78-BME1.aif.mp3" class="clip" id="A"></audio></button>
                  <button class="drum-pad" id="cla" onClick={this.playSound.bind(this, "S")}>S<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/4[kb]78-CLA1.aif.mp3" class="clip" id="S"></audio></button>
                  <button class="drum-pad" id="cow" onClick={this.playSound.bind(this, "D")}>D<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/8[kb]78-COW1.aif.mp3" class="clip" id="D"></audio></button>
                  <button class="drum-pad" id="gui" onClick={this.playSound.bind(this, "Z")}>Z<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/18[kb]78-GUI1.aif.mp3" class="clip" id="Z"></audio></button>
                  <button class="drum-pad" id="hihat-closed" onClick={this.playSound.bind(this, "X")}>X<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/6[kb]78-HH1.aif.mp3" class="clip" id="X"></audio></button>
                  <button class="drum-pad" id="hihat-open" onClick={this.playSound.bind(this, "C")}>C<audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/45[kb]78-HO1.aif.mp3" class="clip" id="C"></audio></button>
              </div>
          </div>
        </div>
      )
    }
  }
  ReactDOM.render(<DrumMachine/>, document.getElementById("main"));