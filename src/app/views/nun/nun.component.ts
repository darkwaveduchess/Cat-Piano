import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-nun',
  templateUrl: './nun.component.html',
  styleUrls: ['./nun.component.scss']
})
export class NunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('keydown', this.playKey)
  }

  playKey(event: any): void {
    var key: HTMLElement = event.target;
    let note: string;// = this.keyMap[event.key];
    if (event.type === 'click')
      note = this.keyMap[key.innerText.toLowerCase()];
    else
      note = this.keyMap[event.key];
    //Mover mao
    var keyX = key.getBoundingClientRect().left;
    var hand = document.getElementById("hand");
    if (hand != null)
      hand.style.left = keyX - 50 + "px";

    //Tocar nota
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    synth.triggerAttack(note, now)
    synth.triggerRelease([note], now + 1)
  }

  keyMap: any = {
    //white-keys
    "q": "C4", "w": "D4", "e": "E4", "r": "F4", "t": "G4", "y": "A4", "u": "B4",
    "i": "C5", "o": "D5", "p": "E5", "a": "F5", "s": "G5", "d": "A5", "f": "B5",
    //black-keys
    "0": "C#4", "1": "D#4", "2": "F#4", "3": "G#4", "4": "A#4",
    "5": "C#5", "6": "D#5", "7": "F#5", "8": "G#5", "9": "A#5"
  }
}


