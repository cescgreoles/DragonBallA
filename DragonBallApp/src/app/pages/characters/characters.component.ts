import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  myCharacters?: any[];
  constructor(private characterService: CharactersService) {
    this.characterService.getAllCharacters().subscribe((data: any) => {
      console.log(data);
      // this.myCharacters = [...data];
      // console.log(this.myCharacters);

      const characterData: any[] = data.map((character: any) => ({
        id: character._id,
        name: character.name,
        image: character.img,
        race: character.race,
      }));

      this.myCharacters = [...characterData];
    });
  }

  ngOnInit(): void {}
}
