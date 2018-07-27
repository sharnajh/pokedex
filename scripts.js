// mew: https://pokeapi-nycda.firebaseio.com/pokemon/151.json
// gengar: https://pokeapi-nycda.firebaseio.com/pokemon/94.json
// clefairy: https://pokeapi-nycda.firebaseio.com/pokemon/35.json

let start = document.getElementById("start-button");

let mewDiv = document.getElementById("mew"),
gengarDiv = document.getElementById("gengar"),
clefairyDiv = document.getElementById("clefairy");


// mew vars
axios.get('https://pokeapi.co/api/v2/pokemon/151/').then((response) => {
    let mew = response.data;
    let mewName = mew.name;
    let mewSprite = mew.sprites.front_default;
    let mewId = mew.game_indices[0].game_index;
    let mewAbility = mew.abilities[0].ability.name;
    let mewHp = mew.stats[5].base_stat;
    let mewAttk = mew.stats[4].base_stat;
    let mewDef = mew.stats[3].base_stat;
    console.log(mew);

    // bootstrap grid system
    mewDiv.insertAdjacentHTML('beforeend',`
    <div class="container">
    <div class="row">
        <div class="col-sm-2"><img class="sprite" src="${mewSprite}"></div>
        <div class="col-sm-5"><ul>
    <li><h1 class="pkmn-name">${mewName}</h1></li>
    <li><h1 class="id">#${mewId}</h1></li>
    </ul></div>
    </div>
    <div class="row">
        <div class="col-md-12"><p class="ability"><b>Ability:</b> ${mewAbility}</p></div>
    </div>
    <div class="row">
        <div class="col-md-12"><ul id="base-stats">
    <li><p class="hp"><b>HP:</b> ${mewHp}</p></li>
    <li><p class="attk"><b>Attack:</b> ${mewAttk}</p></li>
    <li><p class="def"><b>Defense:</b> ${mewDef}</p></li>
    </ul></div>
    </div>
    </div>
    `)
});


// gengar vars
axios.get('https://pokeapi.co/api/v2/pokemon/94/').then((response) => {
    let gengar = response.data;
    let gengarName = gengar.name;
    let gengarSprite = gengar.sprites.front_default;
    let gengarId = gengar.game_indices[0].game_index;
    let gengarAbility = gengar.abilities[0].ability.name;
    let gengarHp = gengar.stats[5].base_stat;
    let gengarAttk = gengar.stats[4].base_stat;
    let gengarDef = gengar.stats[3].base_stat;
    console.log(gengar);

    // bootstrap grid system
    gengarDiv.insertAdjacentHTML('beforeend',`
    <div class="container">
    <div class="row">
        <div class="col-sm-2"><img class="sprite" src="${gengarSprite}"></div>
        <div class="col-sm-5"><ul>
    <li><h1 class="pkmn-name">${gengarName}</h1></li>
    <li><h1 class="id">#${gengarId}</h1></li>
    </ul></div>
    </div>
    <div class="row">
        <div class="col-md-12"><p class="ability"><b>Ability:</b> ${gengarAbility}</p></div>
    </div>
    <div class="row">
        <div class="col-md-12"><ul id="base-stats">
    <li><p class="hp"><b>HP:</b> ${gengarHp}</p></li>
    <li><p class="attk"><b>Attack:</b> ${gengarAttk}</p></li>
    <li><p class="def"><b>Defense:</b> ${gengarDef}</p></li>
    </ul></div>
    </div>
    </div>
    `)
});



// clefaity vars
axios.get('https://pokeapi.co/api/v2/pokemon/35/').then((response) => {
    let clefairy = response.data;
    let clefName = clefairy.name;
    let clefSprite = clefairy.sprites.front_default;
    let clefId = clefairy.game_indices[0].game_index;
    let clefAbility = clefairy.abilities[0].ability.name;
    let clefHp = clefairy.stats[5].base_stat;
    let clefAttk = clefairy.stats[4].base_stat;
    let clefDef = clefairy.stats[3].base_stat;
    console.log(clefairy);

    // bootstrap grid system
    clefairyDiv.insertAdjacentHTML('beforeend',`
    <div class="container">
    <div class="row">
        <div class="col-sm-2"><img class="sprite" src="${clefSprite}"></div>
        <div class="col-sm-5"><ul>
    <li><h1 class="pkmn-name">${clefName}</h1></li>
    <li><h1 class="id">#${clefId}</h1></li>
    </ul></div>
    </div>
    <div class="row">
        <div class="col-md-12"><p class="ability"><b>Ability:</b> ${clefAbility}</p></div>
    </div>
    <div class="row">
        <div class="col-md-12"><ul id="base-stats">
    <li><p class="hp"><b>HP:</b> ${clefHp}</p></li>
    <li><p class="attk"><b>Attack:</b> ${clefAttk}</p></li>
    <li><p class="def"><b>Defense:</b> ${clefDef}</p></li>
    </ul></div>
    </div>
    </div>
    `)
});

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