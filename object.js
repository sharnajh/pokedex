class Pokemon {
    constructor(pokemonName,id,sprite,ability,attk,def,hp) {
        this.pokemonData = {
            name_of_pkmn: this.pokemonName = pokemonName,
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
                    console.log(data)
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
                    // it does get pushed into pokemonTeam but console.log prints too fast for api sometimes
                    // or api just doesn't work at all
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

// I would manipulate the pkmn data stored in the new instances of Pokemon created in the add method from Trainer class
// red.pokemonTeam[0].pokemonData.name_of_pkmn

