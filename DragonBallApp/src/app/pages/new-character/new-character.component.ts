import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss'],
})
export class NewCharacterComponent implements OnInit {
  newCharacter: any = {
    name: '',
    img: '',
    race: '',
  };
  constructor() {}

  ngOnInit(): void {}

  enviar() {
    console.log(this.newCharacter);
    this.newCharacter.postCharacter(this.newCharacter).subscribe();
  }
}
