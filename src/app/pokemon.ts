export class Pokemon {

    constructor(public id:string, public name:string, public url:string){}

}

export interface PokemonDetail{
    abilities:any[];
    base_experience: number;
    forms:any[];
    game_indices:any[];
    height:number;
    held_items:any[];
    id:number;
    is_default:boolean;
    location_area_encounters:string;
    move:any[];
    name:string;
    order: number;
    past_types: any[];
    species: any[];
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight:number;
}

export interface Type{
    slot: number;
    type: any;
}

export interface Stat{
    base_stat: number;
    stat: any;
}

export interface Sprite{
    back_default:string;
    back_female:string;
    back_shiny:string;
    back_shiny_female:string;
    front_default:string;
    front_female:string;
    front_shiny:string;
    front_shiny_female:string;
} 
