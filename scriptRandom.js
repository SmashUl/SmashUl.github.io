$(document).ready(function () {
    personajes = new Array();
    nombres = ['Mario', 'DonkeyKong', 'Link', 'Samus',
      'SamusOscura', 'Yoshi', 'Kirby', 'Fox',
      'Pikachu', 'Luigi', 'Ness', 'CaptainFalcon',
      'Jigglypuff', 'Peach', 'Daisy', 'Bowser',
      'IceClimbers', 'Sheik', 'Zelda', 'DrMario',
      'Pichu', 'Falco', 'Marth', 'Lucina', 'YoungLink',
      'Ganondorf', 'Mewtwo', 'Roy', 'Chrom', 'MrGame&Watch',
      'MetaKnight', 'Pit', 'PitSombrio', 'SamusZero',
      'Wario', 'Snake', 'Ike', 'EntrenadorPokémon',
      'DiddyKong', 'Lucas', 'Sonic', 'ReyDedede', 'Olimar',
      'Lucario', 'ROB', 'ToonLink', 'Wolf', 'Aldeano',
      'MegaMan', 'EntrenadoradeWiiFit', 'EstelayDestello',
      'LittleMac', 'Greninja', 'LuchadoresMii', 'Palutena',
      'PacMan', 'Daraen', 'Shulk', 'Bowsy', 'DuoDuckHunt',
      'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling',
      'Ridley', 'SimonBelmont', 'RichterBelmont', 'KingKRool',
      'Canela', 'Incineroar', 'PlantaPiraña', 'Joker', 'Heroe',
      'BanjoyKazooie', 'Terry', 'Byleth', 'MinMin', 'Steve',
      'Sefirot', 'Pyra', 'Mythra', 'Kazuya', 'Sora']
    nombresAux = nombres
  
  
    for (var i = 0; i < nombres.length; i++) {
      personajes[i] = [`assets/Personajes Smash/${nombres[i]}.png`];
    }
  
  
    // genera numero aleatorio y coloca la imagen, itera 17 veces
    for (var i = 1; i < 17; i++) {
        function obtenerImagenAleatoria() {
            //El numero generado es el que se quita del arreglo personajes
            nombresAux = personajes.splice((Math.floor(Math.random() * personajes.length)), 1)
            return personajes[Math.floor(Math.random() * personajes.length)];
        }

        function cambiarImagen() {
            $(`#imagen${i}`).attr('src', obtenerImagenAleatoria());
        }
    }
    cambiarImagen();
    $('#boton').on('click', cambiarImagen);
  });
  
  function clickOnContenedor(){
    document.querySelectorAll(".click").forEach(el => {
      el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");
        for(i=0; i < personaje.length; i++){
          if(personaje[i] == e.target.getAttribute("src")){
            var found = personajesIcono.find((element) => element == `${nombres[i]}`);
            $(`#${id}`).attr('src', `assets/Personajes Smash/Ico/${found}.ico`);
          }
        }
      })
    })
  }
  
  
  function mostrar_Jugadores() {
    nombresAux.forEach(i => {
      for (var i = 0; i < nombresAux.length; i++) {
        document.getElementsByClassName("image3")[i].innerHTML += `<option value=' ${nombres[i]} '> ${nombres[i]} </option>`;
        document.getElementsByClassName("image12")[i].innerHTML += `<option value=' ${nombres[i]} '> ${nombres[i]} </option>`;
        document.getElementsByClassName("image14")[i].innerHTML += `<option value=' ${nombres[i]} '> ${nombres[i]} </option>`;
      }
    });
  }