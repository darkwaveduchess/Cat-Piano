import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ForgiveMeFatherIHaveSynthed';

  ngOnInit() {

    document.addEventListener('keydown', this.playSound)

  }

  playSound(event: any) {
    let nota: string = event.key;

    if (["a","b","c","d","e","f","g"].indexOf(nota) == -1)
      return; 



    var scales: any = {
      "g": { "f": "f#" }
    }

    //tocar nota;;
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    let scale = scales["g"];
    let note = (scale[nota] ? scale[nota] : nota).toUpperCase()+4;
    synth.triggerAttack(note, now)
    synth.triggerRelease([note], now + 1)



  }
}




