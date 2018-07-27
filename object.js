let start = document.getElementById("start-button");
let mewDiv = document.getElementById("mew"),
gengarDiv = document.getElementById("gengar"),
clefairyDiv = document.getElementById("clefairy");

class Pokemon {
    constructor(pokemonName,id,sprite,ability,attk,def,hp) {
        this.pokemonName = pokemonName;
        this.pokemonData = {
            name_of_pkmn: this.pokemonName = name,
            id_of_pkmn: this.id = id,
            pkmn_sprite_url: this.sprite = sprite,
            pkmn_ability: this.ability = ability,
            pkmn_attk: this.attk = attk,
            pkmn_def: this.def = def,
            pkmn_hp: this.hp = hp
        };
    }
}

class Trainer {
    constructor(trainerName) {
        this.trainerName = trainerName;
        this.pokemonTeam = [];
    }
        get(pokemonName) {
            this.pokemonName = pokemonName;
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`).then((response) => {
                    let data = response.data;
                    this.pokemonTeam.push(data)
                });
        }
        add(pokemonName) {
            this.pokemonName = pokemonName;
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`).then((response) => {
                    let data = response.data;
                    let name = data.name;
                    let sprite = data.sprites.front_default;
                    let id = data.game_indices[0].game_index;
                    let ability = data.abilities[0].ability.name;
                    let hp = data.stats[5].base_stat;
                    let attk = data.stats[4].base_stat;
                    let def = data.stats[3].base_stat;
                    this.pokemonTeam.push(new Pokemon(name,id,sprite,ability,attk,def,hp))
                });
        }
        all() {
            console.log(this.pokemonTeam)
        }
}

let red = new Trainer("Red")
red.get(151)
red.get(94)
red.get(35)
red.add(151)
red.add(94)
red.add(35)
red.all()



$( "#start-button" ).click(function() {     
    $('#menu').toggle("slow");
    $('#start').toggle();
 });

 $( "#mew-select" ).click(function() {     
    $('#mew').toggle("slide");
    $('#menu').toggle();
 });

 $( "#gengar-select" ).click(function() {     
    $('#gengar').toggle("slide");
    $('#menu').toggle();
 });

 $( "#clefairy-select" ).click(function() {     
    $('#clefairy').toggle("slide");
    $('#menu').toggle();
 });

 $( "#trainer-select" ).click(function() {     
    $('#trainer-card').toggle("slow");
    $('#menu').toggle();
 });

 $( "#m-exit" ).click(function() {  
    $('#mew').toggle();  
    $('#menu').toggle("slow");
 });

 $( "#g-exit" ).click(function() {  
    $('#gengar').toggle();  
    $('#menu').toggle("slow");
 });

 $( "#c-exit" ).click(function() {  
    $('#clefairy').toggle();  
    $('#menu').toggle("slow");
 });

 $( "#t-exit" ).click(function() {  
    $('#trainer-card').toggle();  
    $('#menu').toggle("slow");
 });