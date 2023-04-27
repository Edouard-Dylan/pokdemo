import { Component, Input } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { PokemonDetail } from '../pokemon';
import { ShareDetailsService } from '../share-details.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
  providers: [ShareDetailsService]
})
export class PokemonDetailsComponent {

  @Input('details')
  details!: PokemonDetail;

  constructor(private shareDetail: ShareDetailsService){
    shareDetail.getObservable().subscribe((data:any) =>{
      this.details = data;
    })
  }

  ngOnInit(): void{
  }

}
