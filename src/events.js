// Base de datos de eventos históricos
export const EVENTS_DATABASE = [
  // ⚔️ GUERRAS
  {
    year: 1939,
    event: "Inicio de la Segunda Guerra Mundial",
    category: "Guerras",
    continent: "Europa",
    century: "Siglo XX",
    person: "Adolf Hitler",
    description: "Alemania invade Polonia, iniciando el conflicto armado más grande de la historia",
    decade: "Años 30"
  },
  {
    year: 1945,
    event: "Fin de la Segunda Guerra Mundial",
    category: "Guerras",
    continent: "Europa",
    century: "Siglo XX",
    person: "Harry S. Truman",
    description: "Rendición incondicional de Alemania y Japón, fin del conflicto mundial",
    decade: "Años 40"
  },
  {
    year: 1914,
    event: "Inicio de la Primera Guerra Mundial",
    category: "Guerras",
    continent: "Europa",
    century: "Siglo XX",
    person: "Francisco Fernando",
    description: "Asesinato del archiduque en Sarajevo desencadena el conflicto",
    decade: "Años 10"
  },
  {
    year: 1789,
    event: "Revolución Francesa",
    category: "Guerras",
    continent: "Europa",
    century: "Siglo XVIII",
    person: "Luis XVI",
    description: "Toma de la Bastilla, inicio de la revolución que cambió Francia",
    decade: "Años 80"
  },
  {
    year: 1492,
    event: "Conquista de Granada",
    category: "Guerras",
    continent: "Europa",
    century: "Siglo XV",
    person: "Reyes Católicos",
    description: "Fin de la Reconquista española con la toma del último reino musulmán",
    decade: "Años 90"
  },
  {
    year: 1815,
    event: "Batalla de Waterloo",
    category: "Guerras",
    continent: "Europa",
    century: "Siglo XIX",
    person: "Napoleón Bonaparte",
    description: "Derrota definitiva de Napoleón que puso fin a su imperio",
    decade: "Años 10"
  },
  {
    year: 476,
    event: "Caída del Imperio Romano de Occidente",
    category: "Guerras",
    continent: "Europa",
    century: "Siglo V",
    person: "Rómulo Augústulo",
    description: "Último emperador romano depuesto por los bárbaros",
    decade: "Años 70"
  },

  // 🎨 ARTE Y CULTURA
  {
    year: 1503,
    event: "Leonardo da Vinci pinta la Mona Lisa",
    category: "Arte",
    continent: "Europa",
    century: "Siglo XVI",
    person: "Leonardo da Vinci",
    description: "Creación del retrato más famoso del mundo en Florencia",
    decade: "Años 00"
  },
  {
    year: 1605,
    event: "Publicación de Don Quijote",
    category: "Arte",
    continent: "Europa",
    century: "Siglo XVII",
    person: "Miguel de Cervantes",
    description: "Primera parte de la novela considerada el mejor libro de la historia",
    decade: "Años 00"
  },
  {
    year: 1879,
    event: "Estreno del Sueño de una noche de verano",
    category: "Arte",
    continent: "Europa",
    century: "Siglo XIX",
    person: "Mendelssohn",
    description: "Obra maestra musical basada en Shakespeare",
    decade: "Años 70"
  },
  {
    year: 1895,
    event: "Primera proyección cinematográfica",
    category: "Arte",
    continent: "Europa",
    century: "Siglo XIX",
    person: "Hermanos Lumière",
    description: "Nacimiento del cine con la proyección en París",
    decade: "Años 90"
  },
  {
    year: 1969,
    event: "Festival de Woodstock",
    category: "Arte",
    continent: "América",
    century: "Siglo XX",
    person: "Jimi Hendrix",
    description: "El festival de música más icónico de la historia del rock",
    decade: "Años 60"
  },
  {
    year: 1889,
    event: "Construcción de la Torre Eiffel",
    category: "Arte",
    continent: "Europa",
    century: "Siglo XIX",
    person: "Gustave Eiffel",
    description: "Inauguración del icono parisino para la Exposición Universal",
    decade: "Años 80"
  },

  // 🔬 CIENCIA Y TECNOLOGÍA
  {
    year: 1969,
    event: "El hombre llega a la Luna",
    category: "Ciencia",
    continent: "América",
    century: "Siglo XX",
    person: "Neil Armstrong",
    description: "Apollo 11 logra el primer alunizaje tripulado de la historia",
    decade: "Años 60"
  },
  {
    year: 1543,
    event: "Copérnico publica su teoría heliocéntrica",
    category: "Ciencia",
    continent: "Europa",
    century: "Siglo XVI",
    person: "Nicolás Copérnico",
    description: "Revolución científica: el Sol, no la Tierra, es el centro",
    decade: "Años 40"
  },
  {
    year: 1859,
    event: "Darwin publica El Origen de las Especies",
    category: "Ciencia",
    continent: "Europa",
    century: "Siglo XIX",
    person: "Charles Darwin",
    description: "Teoría de la evolución que cambió la biología para siempre",
    decade: "Años 50"
  },
  {
    year: 1905,
    event: "Teoría de la relatividad especial de Einstein",
    category: "Ciencia",
    continent: "Europa",
    century: "Siglo XX",
    person: "Albert Einstein",
    description: "E=mc²: la física moderna nace con este artículo revolucionario",
    decade: "Años 00"
  },
  {
    year: 1953,
    event: "Descubrimiento de la estructura del ADN",
    category: "Ciencia",
    continent: "Europa",
    century: "Siglo XX",
    person: "Watson y Crick",
    description: "Descifrado de la doble hélice, la molécula de la vida",
    decade: "Años 50"
  },
  {
    year: 1991,
    event: "Nace la World Wide Web",
    category: "Ciencia",
    continent: "Europa",
    century: "Siglo XX",
    person: "Tim Berners-Lee",
    description: "Primera página web, nace la internet como la conocemos",
    decade: "Años 90"
  },
  {
    year: 1769,
    event: "Invención de la máquina de vapor",
    category: "Ciencia",
    continent: "Europa",
    century: "Siglo XVIII",
    person: "James Watt",
    description: "Inicio de la Revolución Industrial con esta invención",
    decade: "Años 60"
  },

  // 👑 POLÍTICA
  {
    year: 1989,
    event: "Caída del Muro de Berlín",
    category: "Política",
    continent: "Europa",
    century: "Siglo XX",
    person: "Mijaíl Gorbachov",
    description: "Fin de la Guerra Fría, reunificación alemana",
    decade: "Años 80"
  },
  {
    year: 1776,
    event: "Independencia de Estados Unidos",
    category: "Política",
    continent: "América",
    century: "Siglo XVIII",
    person: "George Washington",
    description: "Declaración de independencia de las 13 colonias británicas",
    decade: "Años 70"
  },
  {
    year: 1215,
    event: "Magna Carta",
    category: "Política",
    continent: "Europa",
    century: "Siglo XIII",
    person: "Juan Sin Tierra",
    description: "Primera carta de derechos, limita el poder real en Inglaterra",
    decade: "Años 10"
  },
  {
    year: 1945,
    event: "Creación de las Naciones Unidas",
    category: "Política",
    continent: "América",
    century: "Siglo XX",
    person: "Roosevelt",
    description: "Fundación de la ONU tras la Segunda Guerra Mundial",
    decade: "Años 40"
  },
  {
    year: 1517,
    event: "Reforma Protestante",
    category: "Política",
    continent: "Europa",
    century: "Siglo XVI",
    person: "Martín Lutero",
    description: "Las 95 tesis desafían la Iglesia Católica y cambian Europa",
    decade: "Años 10"
  },
  {
    year: 1994,
    event: "Fin del apartheid en Sudáfrica",
    category: "Política",
    continent: "África",
    century: "Siglo XX",
    person: "Nelson Mandela",
    description: "Elecciones multirraciales, Mandela primer presidente negro",
    decade: "Años 90"
  },

  // ⚽ DEPORTES
  {
    year: 1930,
    event: "Primer Mundial de Fútbol",
    category: "Deportes",
    continent: "América",
    century: "Siglo XX",
    person: "José Nasazzi",
    description: "Uruguay campeón en el primer mundial de la historia",
    decade: "Años 30"
  },
  {
    year: 1896,
    event: "Primeros Juegos Olímpicos modernos",
    category: "Deportes",
    continent: "Europa",
    century: "Siglo XIX",
    person: "Pierre de Coubertin",
    description: "Renacimiento de la Olimpiada en Atenas tras 1500 años",
    decade: "Años 90"
  },
  {
    year: 1966,
    event: "Inglaterra gana su único Mundial",
    category: "Deportes",
    continent: "Europa",
    century: "Siglo XX",
    person: "Bobby Moore",
    description: "La final del 'gol fantasma' contra Alemania en Wembley",
    decade: "Años 60"
  },
  {
    year: 1986,
    event: "La 'Mano de Dios' de Maradona",
    category: "Deportes",
    continent: "América",
    century: "Siglo XX",
    person: "Diego Maradona",
    description: "Argentina vs Inglaterra, los dos goles más famosos del fútbol",
    decade: "Años 80"
  },
  {
    year: 2008,
    event: "España gana la Eurocopa",
    category: "Deportes",
    continent: "Europa",
    century: "Siglo XXI",
    person: "Luis Aragonés",
    description: "Inicio de la era dorada del fútbol español en Viena",
    decade: "Años 00"
  },

  // 🌍 EXPLORACIÓN
  {
    year: 1492,
    event: "Descubrimiento de América",
    category: "Exploración",
    continent: "Europa",
    century: "Siglo XV",
    person: "Cristóbal Colón",
    description: "Llegada a las Américas cambia la historia mundial",
    decade: "Años 90"
  },
  {
    year: 1522,
    event: "Primera vuelta al mundo",
    category: "Exploración",
    continent: "Europa",
    century: "Siglo XVI",
    person: "Magallanes-Elcano",
    description: "La Victoria completa la circunnavegación del planeta",
    decade: "Años 20"
  },
  {
    year: 1911,
    event: "Descubrimiento de Machu Picchu",
    category: "Exploración",
    continent: "América",
    century: "Siglo XX",
    person: "Hiram Bingham",
    description: "La ciudad perdida de los incas revelada al mundo",
    decade: "Años 10"
  },
  {
    year: 1928,
    event: "Fleming descubre la penicilina",
    category: "Exploración",
    continent: "Europa",
    century: "Siglo XX",
    person: "Alexander Fleming",
    description: "El primer antibiótico, revolución en medicina",
    decade: "Años 20"
  }
]
