import { Component } from '@angular/core';
import { Pokemon, PokemonDetail } from '../pokemon';
import { PokeApiService } from '../poke-api.service';
import { ShareDetailsService } from '../share-details.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeApiService, ShareDetailsService]
})
export class MyComponentComponent {
  id: string = '';
  pokeList : Pokemon[] = [];
  pokeSelectorId : string = '';
  pokeFilterName : string = '';
  pokeDetails!: PokemonDetail ;

  constructor(private api : PokeApiService, private shareDetail: ShareDetailsService){}

  ngOnInit(): void{
    this.api.getPokemons().subscribe((data: any) =>{
      for (let index = 0; index < data.results.length; index++) {
        let pokeId = index+1;
        this.pokeList.push(new Pokemon(pokeId.toString(), data.results[index].name, data.results[index].url));
      }
    });
  }

  buttonGo(){

    this.shareDetail.setValue(this.pokeSelectorId);

    if (this.pokeSelectorId != ''){
      this.api.getPokemon(this.pokeSelectorId).subscribe((data) =>{
        this.pokeDetails = data;
      });
    }
  }
}
