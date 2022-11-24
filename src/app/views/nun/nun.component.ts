import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-nun',
  templateUrl: './nun.component.html',
  styleUrls: ['./nun.component.scss']
})

export class NunComponent implements OnInit {

  musicx: string = "";

  ngOnInit(): void {
    document.addEventListener('keydown', this.playKey);
    this.musicx = window.location.pathname.split('/')[2];
  }

  playKey(event: any): void {
    let keyMap: any = {
      //white-keys
      "q": "C4", "w": "D4", "e": "E4", "r": "F4", "t": "G4", "y": "A4", "u": "B4",
      "i": "C5", "o": "D5", "p": "E5", "a": "F5", "s": "G5", "d": "A5", "f": "B5",
      //black-keys
      "0": "C#4", "1": "D#4", "2": "F#4", "3": "G#4", "4": "A#4",
      "5": "C#5", "6": "D#5", "7": "F#5", "8": "G#5", "9": "A#5"
    }

    var key: any = null;
    let note: string;

    if (event.type === 'click') {
      key = event.target;
      var value = (key.textContent + "").toLowerCase()
      note = keyMap[value ?? "q"];
    }
    else {
      note = keyMap[event.key];

      var aTags = document.getElementsByClassName("key");
      var searchText = event.key.toUpperCase();

      for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
          key = aTags[i];
          break;
        }
      }
    }

    //Mover mao
    if (key != null) {
      var keyX = key.getBoundingClientRect().left;
      var hand = document.getElementById("hand");
      if (hand != null)
        hand.style.left = keyX - 30 + "px";
    }

    //Tocar nota
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    synth.triggerAttack(note, now)
    synth.triggerRelease([note], now + 1)
  }

  playMeow() {
    var meow = new Audio("../../../assets/imgs/meow.wav");
    meow.play();
  }

}


