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
    'LittleMac', 'Gerninja', 'CombateMii', 'Palutena',
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
    if (i != 3 && i != 12 && i != 14) {
      function obtenerImagenAleatoria() {
        //El numero generado es el que se quita del arreglo personajes
        nombresAux = personajes.splice((Math.floor(Math.random() * personajes.length)), 1)
        return personajes[Math.floor(Math.random() * personajes.length)];
      }

      function cambiarImagen() {
        $(`#imagen${i}`).attr('src', obtenerImagenAleatoria());
      }
    }
  }
  cambiarImagen();
  $('#boton').on('click', cambiarImagen);
});

function mostrar_Jugadores() {
  nombresAux.forEach(i => {
    for (var i = 0; i < nombresAux.length; i++) {
      document.getElementsByClassName("image3")[i].innerHTML += `<option value=' ${nombresAux[i]} '> ${nombresAux[i]} </option>`;
      document.getElementsByClassName("image12")[i].innerHTML += `<option value=' ${nombresAux[i]} '> ${nombresAux[i]} </option>`;
      document.getElementsByClassName("image14")[i].innerHTML += `<option value=' ${nombresAux[i]} '> ${nombresAux[i]} </option>`;
    }
  });
}