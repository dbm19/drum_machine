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
   
    playSound(letter) {
      switch(letter) {
        case "Q":
            this.setState ({
              input: "Bass Drum"
            })
            break;
        case "W":
            this.setState ({
              input: "Bass Hi"
            })
            break;
        case "E":
            this.setState ({
              input: "Bass Lo"
            })
            break;
        case "A":
            this.setState ({
              input: "Bass Med"
            })
            break;
        case "S":
            this.setState ({ 
              input: "cla"
            })
            break;
        case "D":
            this.setState ({
              input: "Cowbell"
            })
            break;
        case "Z":
            this.setState ({
              input: "Gui"
            })
            break;
        case "X":
            this.setState ({
              input: "Hihat Open"
            })
            break;
        case "C":
            this.setState ({
              input: "Hihat Closed"
            })
            break;
        default:
            break;
          }
        document.getElementById(letter).play();
      }

    handleKeyPress(event, fnc) {
      switch(event.keyCode) {
        case 81: 
          fnc("Q");
          break;
        case 87:
          fnc("W");
          break;
        case 69:
          fnc("E");
          break;
        case 65:
          fnc("A");
          break;
        case 83: 
          fnc("S");
          break;
        case 68:
          fnc("D");
          break;
        case 90:
          fnc("Z");
          break;
        case 88:
          fnc("X");
          break;
        case 67:
          fnc("C");
          break;
        default:
          break;
      }
    }
    
    render() {
      return(
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