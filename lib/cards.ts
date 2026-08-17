export type CardKind = "sound" | "mime"
export type DeckKind = CardKind | "mixed"

export type GameCard = {
  id: string
  label: string
  emoji: string
  deck: CardKind
}

export const ROUND_LENGTH = 8

export const cards: Record<CardKind, readonly GameCard[]> = {
  sound: [
    { id: "sound-lion", label: "Lleó", emoji: "🦁", deck: "sound" },
    { id: "sound-train", label: "Tren", emoji: "🚂", deck: "sound" },
    { id: "sound-bee", label: "Abella", emoji: "🐝", deck: "sound" },
    { id: "sound-cow", label: "Vaca", emoji: "🐄", deck: "sound" },
    { id: "sound-rain", label: "Pluja", emoji: "🌧️", deck: "sound" },
    { id: "sound-robot", label: "Robot", emoji: "🤖", deck: "sound" },
    { id: "sound-car", label: "Cotxe de curses", emoji: "🏎️", deck: "sound" },
    { id: "sound-baby", label: "Bebè", emoji: "👶", deck: "sound" },
    { id: "sound-clock", label: "Rellotge", emoji: "⏰", deck: "sound" },
    { id: "sound-horse", label: "Cavall", emoji: "🐴", deck: "sound" },
    { id: "sound-snake", label: "Serp", emoji: "🐍", deck: "sound" },
    { id: "sound-dog", label: "Gos", emoji: "🐕", deck: "sound" },
    { id: "sound-cat", label: "Gat", emoji: "🐈", deck: "sound" },
    { id: "sound-rooster", label: "Gall", emoji: "🐓", deck: "sound" },
    { id: "sound-duck", label: "Ànec", emoji: "🦆", deck: "sound" },
    { id: "sound-pig", label: "Porc", emoji: "🐖", deck: "sound" },
    { id: "sound-sheep", label: "Ovella", emoji: "🐑", deck: "sound" },
    { id: "sound-frog", label: "Granota", emoji: "🐸", deck: "sound" },
    { id: "sound-wolf", label: "Llop", emoji: "🐺", deck: "sound" },
    { id: "sound-monkey", label: "Mico", emoji: "🐒", deck: "sound" },
    { id: "sound-elephant", label: "Elefant", emoji: "🐘", deck: "sound" },
    { id: "sound-owl", label: "Mussol", emoji: "🦉", deck: "sound" },
    { id: "sound-dolphin", label: "Dofí", emoji: "🐬", deck: "sound" },
    { id: "sound-whale", label: "Balena", emoji: "🐋", deck: "sound" },
    { id: "sound-motorcycle", label: "Moto", emoji: "🏍️", deck: "sound" },
    { id: "sound-helicopter", label: "Helicòpter", emoji: "🚁", deck: "sound" },
    { id: "sound-airplane", label: "Avió", emoji: "✈️", deck: "sound" },
    { id: "sound-fire-engine", label: "Camió de bombers", emoji: "🚒", deck: "sound" },
    { id: "sound-ambulance", label: "Ambulància", emoji: "🚑", deck: "sound" },
    { id: "sound-police-car", label: "Cotxe de policia", emoji: "🚓", deck: "sound" },
    { id: "sound-ship", label: "Vaixell", emoji: "🚢", deck: "sound" },
    { id: "sound-tractor", label: "Tractor", emoji: "🚜", deck: "sound" },
    { id: "sound-bell", label: "Campana", emoji: "🔔", deck: "sound" },
    { id: "sound-telephone", label: "Telèfon", emoji: "☎️", deck: "sound" },
    { id: "sound-drum", label: "Tambor", emoji: "🥁", deck: "sound" },
    { id: "sound-trumpet", label: "Trompeta", emoji: "🎺", deck: "sound" },
    { id: "sound-guitar", label: "Guitarra", emoji: "🎸", deck: "sound" },
    { id: "sound-saxophone", label: "Saxòfon", emoji: "🎷", deck: "sound" },
    { id: "sound-violin", label: "Violí", emoji: "🎻", deck: "sound" },
    { id: "sound-flute", label: "Flauta", emoji: "🪈", deck: "sound" },
    { id: "sound-wind", label: "Vent", emoji: "🌬️", deck: "sound" },
    { id: "sound-thunderstorm", label: "Tempesta", emoji: "⛈️", deck: "sound" },
    { id: "sound-explosion", label: "Explosió", emoji: "💥", deck: "sound" },
    { id: "sound-fireworks", label: "Focs artificials", emoji: "🎆", deck: "sound" },
    { id: "sound-sneeze", label: "Esternut", emoji: "🤧", deck: "sound" },
    { id: "sound-laugh", label: "Rialla", emoji: "😂", deck: "sound" },
    { id: "sound-snore", label: "Ronc", emoji: "😴", deck: "sound" },
    { id: "sound-ghost", label: "Fantasma", emoji: "👻", deck: "sound" },
    { id: "sound-monster", label: "Monstre", emoji: "👹", deck: "sound" },
    { id: "sound-witch", label: "Bruixa", emoji: "🧙", deck: "sound" },
    { id: "sound-donkey", label: "Ase", emoji: "🫏", deck: "sound" },
    { id: "sound-goat", label: "Cabra", emoji: "🐐", deck: "sound" },
    { id: "sound-turkey", label: "Gall dindi", emoji: "🦃", deck: "sound" },
    { id: "sound-goose", label: "Oca", emoji: "🪿", deck: "sound" },
    { id: "sound-hen", label: "Gallina", emoji: "🐔", deck: "sound" },
    { id: "sound-chick", label: "Pollet", emoji: "🐤", deck: "sound" },
    { id: "sound-crow", label: "Corb", emoji: "🐦‍⬛", deck: "sound" },
    { id: "sound-parrot", label: "Lloro", emoji: "🦜", deck: "sound" },
    { id: "sound-peacock", label: "Paó", emoji: "🦚", deck: "sound" },
    { id: "sound-seagull", label: "Gavina", emoji: "🐦", deck: "sound" },
    { id: "sound-cricket", label: "Grill", emoji: "🦗", deck: "sound" },
    { id: "sound-mosquito", label: "Mosquit", emoji: "🦟", deck: "sound" },
    { id: "sound-fly", label: "Mosca", emoji: "🪰", deck: "sound" },
    { id: "sound-mouse", label: "Ratolí", emoji: "🐁", deck: "sound" },
    { id: "sound-squirrel", label: "Esquirol", emoji: "🐿️", deck: "sound" },
    { id: "sound-bear", label: "Ós", emoji: "🐻", deck: "sound" },
    { id: "sound-tiger", label: "Tigre", emoji: "🐯", deck: "sound" },
    { id: "sound-gorilla", label: "Goril·la", emoji: "🦍", deck: "sound" },
    { id: "sound-seal", label: "Foca", emoji: "🦭", deck: "sound" },
    { id: "sound-penguin", label: "Pingüí", emoji: "🐧", deck: "sound" },
    { id: "sound-crocodile", label: "Cocodril", emoji: "🐊", deck: "sound" },
    { id: "sound-camel", label: "Camell", emoji: "🐫", deck: "sound" },
    { id: "sound-bat", label: "Ratpenat", emoji: "🦇", deck: "sound" },
    { id: "sound-eagle", label: "Àguila", emoji: "🦅", deck: "sound" },
    { id: "sound-hyena", label: "Hiena", emoji: "🐾", deck: "sound" },
    { id: "sound-bus", label: "Autobús", emoji: "🚌", deck: "sound" },
    { id: "sound-truck", label: "Camió", emoji: "🚚", deck: "sound" },
    { id: "sound-subway", label: "Metro", emoji: "🚇", deck: "sound" },
    { id: "sound-tram", label: "Tramvia", emoji: "🚊", deck: "sound" },
    { id: "sound-rocket", label: "Coet", emoji: "🚀", deck: "sound" },
    { id: "sound-bulldozer", label: "Buldòzer", emoji: "🚧", deck: "sound" },
    { id: "sound-excavator", label: "Excavadora", emoji: "🏗️", deck: "sound" },
    {
      id: "sound-bicycle-bell",
      label: "Timbre de bicicleta",
      emoji: "🚲",
      deck: "sound",
    },
    { id: "sound-scooter", label: "Patinet", emoji: "🛴", deck: "sound" },
    { id: "sound-car-horn", label: "Clàxon", emoji: "🚗", deck: "sound" },
    {
      id: "sound-reversing-truck",
      label: "Camió fent marxa enrere",
      emoji: "🚛",
      deck: "sound",
    },
    {
      id: "sound-tire-screech",
      label: "Pneumàtics derrapant",
      emoji: "🛞",
      deck: "sound",
    },
    {
      id: "sound-engine-start",
      label: "Motor engegant-se",
      emoji: "⚙️",
      deck: "sound",
    },
    { id: "sound-train-brakes", label: "Fre de tren", emoji: "🚆", deck: "sound" },
    {
      id: "sound-boat-horn",
      label: "Sirena de vaixell",
      emoji: "🛳️",
      deck: "sound",
    },
    {
      id: "sound-submarine-sonar",
      label: "Sonar de submarí",
      emoji: "🤿",
      deck: "sound",
    },
    { id: "sound-chainsaw", label: "Serra mecànica", emoji: "🪚", deck: "sound" },
    { id: "sound-drill", label: "Trepant", emoji: "🛠️", deck: "sound" },
    { id: "sound-hammer", label: "Martell", emoji: "🔨", deck: "sound" },
    { id: "sound-vacuum", label: "Aspiradora", emoji: "🧹", deck: "sound" },
    {
      id: "sound-hairdryer",
      label: "Assecador de cabells",
      emoji: "💨",
      deck: "sound",
    },
    {
      id: "sound-blender",
      label: "Batedora elèctrica",
      emoji: "🥤",
      deck: "sound",
    },
    { id: "sound-washing-machine", label: "Rentadora", emoji: "🧺", deck: "sound" },
    { id: "sound-microwave", label: "Microones", emoji: "🍲", deck: "sound" },
    { id: "sound-toaster", label: "Torradora", emoji: "🍞", deck: "sound" },
    {
      id: "sound-kettle",
      label: "Bullidor d’aigua",
      emoji: "🫖",
      deck: "sound",
    },
    { id: "sound-printer", label: "Impressora", emoji: "🖨️", deck: "sound" },
    { id: "sound-keyboard", label: "Teclat", emoji: "⌨️", deck: "sound" },
    {
      id: "sound-camera-click",
      label: "Càmera fent clic",
      emoji: "📸",
      deck: "sound",
    },
    { id: "sound-elevator", label: "Ascensor", emoji: "🛗", deck: "sound" },
    {
      id: "sound-cash-register",
      label: "Caixa registradora",
      emoji: "💵",
      deck: "sound",
    },
    { id: "sound-lawnmower", label: "Tallagespa", emoji: "🌱", deck: "sound" },
    { id: "sound-zipper", label: "Cremallera", emoji: "🤐", deck: "sound" },
    { id: "sound-jingling-keys", label: "Claus dringant", emoji: "🔑", deck: "sound" },
    { id: "sound-scissors", label: "Tisores", emoji: "✂️", deck: "sound" },
    {
      id: "sound-creaky-door",
      label: "Porta grinyolant",
      emoji: "🚪",
      deck: "sound",
    },
    {
      id: "sound-door-knock",
      label: "Truquen a la porta",
      emoji: "✊",
      deck: "sound",
    },
    {
      id: "sound-breaking-glass",
      label: "Vidre trencant-se",
      emoji: "🥛",
      deck: "sound",
    },
    {
      id: "sound-balloon-pop",
      label: "Globus petant",
      emoji: "🎈",
      deck: "sound",
    },
    { id: "sound-popcorn", label: "Crispetes", emoji: "🍿", deck: "sound" },
    {
      id: "sound-opening-can",
      label: "Llauna obrint-se",
      emoji: "🥫",
      deck: "sound",
    },
    {
      id: "sound-spray-bottle",
      label: "Esprai polvoritzant",
      emoji: "🧴",
      deck: "sound",
    },
    {
      id: "sound-dripping-tap",
      label: "Aixeta degotant",
      emoji: "🚰",
      deck: "sound",
    },
    {
      id: "sound-toilet-flush",
      label: "Cisterna del vàter",
      emoji: "🚽",
      deck: "sound",
    },
    { id: "sound-shower", label: "Dutxa", emoji: "🚿", deck: "sound" },
    { id: "sound-fan", label: "Ventilador", emoji: "🪭", deck: "sound" },
    {
      id: "sound-cuckoo-clock",
      label: "Rellotge de cucut",
      emoji: "🕰️",
      deck: "sound",
    },
    {
      id: "sound-school-bell",
      label: "Timbre de l’escola",
      emoji: "🏫",
      deck: "sound",
    },
    { id: "sound-waves", label: "Onades del mar", emoji: "🌊", deck: "sound" },
    { id: "sound-waterfall", label: "Cascada", emoji: "🏞️", deck: "sound" },
    { id: "sound-river", label: "Riu corrent", emoji: "🏞️", deck: "sound" },
    { id: "sound-crackling-fire", label: "Foc crepitant", emoji: "🔥", deck: "sound" },
    { id: "sound-hail", label: "Calamarsa", emoji: "🌨️", deck: "sound" },
    { id: "sound-avalanche", label: "Allau", emoji: "🏔️", deck: "sound" },
    {
      id: "sound-volcano",
      label: "Volcà en erupció",
      emoji: "🌋",
      deck: "sound",
    },
    { id: "sound-earthquake", label: "Terratrèmol", emoji: "🌍", deck: "sound" },
    {
      id: "sound-crunching-leaves",
      label: "Fulles trepitjades",
      emoji: "🍂",
      deck: "sound",
    },
    {
      id: "sound-snapping-branch",
      label: "Branca trencant-se",
      emoji: "🌿",
      deck: "sound",
    },
    { id: "sound-bubbles", label: "Bombolles", emoji: "🫧", deck: "sound" },
    {
      id: "sound-cracking-ice",
      label: "Gel esquerdant-se",
      emoji: "🧊",
      deck: "sound",
    },
    { id: "sound-cough", label: "Tos", emoji: "🤒", deck: "sound" },
    { id: "sound-hiccup", label: "Singlot", emoji: "😮", deck: "sound" },
    { id: "sound-yawn", label: "Badall", emoji: "🥱", deck: "sound" },
    { id: "sound-whistle", label: "Xiulet", emoji: "😗", deck: "sound" },
    { id: "sound-applause", label: "Aplaudiments", emoji: "👏", deck: "sound" },
    { id: "sound-kiss", label: "Petó", emoji: "💋", deck: "sound" },
    { id: "sound-cry", label: "Plor", emoji: "😢", deck: "sound" },
    { id: "sound-gargle", label: "Gàrgares", emoji: "🫗", deck: "sound" },
    { id: "sound-heartbeat", label: "Batec del cor", emoji: "❤️", deck: "sound" },
    { id: "sound-footsteps", label: "Passes caminant", emoji: "👣", deck: "sound" },
    {
      id: "sound-shivering",
      label: "Tremolar de fred",
      emoji: "🥶",
      deck: "sound",
    },
    { id: "sound-gasp", label: "Ensurt sobtat", emoji: "😱", deck: "sound" },
    { id: "sound-burp", label: "Rot", emoji: "🤭", deck: "sound" },
    {
      id: "sound-growling-stomach",
      label: "Panxa rondinant",
      emoji: "😋",
      deck: "sound",
    },
    { id: "sound-piano", label: "Piano", emoji: "🎹", deck: "sound" },
    { id: "sound-accordion", label: "Acordió", emoji: "🪗", deck: "sound" },
  ],
  mime: [
    { id: "mime-camera", label: "Càmera", emoji: "📷", deck: "mime" },
    { id: "mime-astronaut", label: "Astronauta", emoji: "🧑‍🚀", deck: "mime" },
    { id: "mime-elephant", label: "Elefant", emoji: "🐘", deck: "mime" },
    { id: "mime-toothbrush", label: "Rentar-se les dents", emoji: "🪥", deck: "mime" },
    { id: "mime-swimmer", label: "Nedar", emoji: "🏊", deck: "mime" },
    { id: "mime-penguin", label: "Pingüí", emoji: "🐧", deck: "mime" },
    { id: "mime-superhero", label: "Superheroi o superheroïna", emoji: "🦸", deck: "mime" },
    { id: "mime-chef", label: "Cuiner o cuinera", emoji: "🧑‍🍳", deck: "mime" },
    { id: "mime-sleepy", label: "Adormir-se", emoji: "🥱", deck: "mime" },
    { id: "mime-guitar", label: "Tocar la guitarra", emoji: "🎸", deck: "mime" },
    { id: "mime-monkey", label: "Mico", emoji: "🐒", deck: "mime" },
    { id: "mime-tree", label: "Arbre al vent", emoji: "🌳", deck: "mime" },
    { id: "mime-cycling", label: "Anar amb bicicleta", emoji: "🚴", deck: "mime" },
    { id: "mime-running", label: "Córrer", emoji: "🏃", deck: "mime" },
    { id: "mime-dancing", label: "Ballar", emoji: "💃", deck: "mime" },
    { id: "mime-skiing", label: "Esquiar", emoji: "⛷️", deck: "mime" },
    { id: "mime-surfing", label: "Fer surf", emoji: "🏄", deck: "mime" },
    { id: "mime-climbing", label: "Escalar", emoji: "🧗", deck: "mime" },
    { id: "mime-weightlifting", label: "Aixecar peses", emoji: "🏋️", deck: "mime" },
    { id: "mime-basketball", label: "Jugar a bàsquet", emoji: "⛹️", deck: "mime" },
    { id: "mime-football", label: "Jugar a futbol", emoji: "⚽", deck: "mime" },
    { id: "mime-tennis", label: "Jugar a tennis", emoji: "🎾", deck: "mime" },
    { id: "mime-boxing", label: "Fer boxa", emoji: "🥊", deck: "mime" },
    { id: "mime-ice-skating", label: "Patinar sobre gel", emoji: "⛸️", deck: "mime" },
    { id: "mime-doctor", label: "Metge o metgessa", emoji: "🧑‍⚕️", deck: "mime" },
    { id: "mime-firefighter", label: "Bomber o bombera", emoji: "🧑‍🚒", deck: "mime" },
    { id: "mime-police", label: "Policia", emoji: "👮", deck: "mime" },
    { id: "mime-detective", label: "Detectiu o detectiva", emoji: "🕵️", deck: "mime" },
    { id: "mime-pilot", label: "Pilot d'avió", emoji: "🧑‍✈️", deck: "mime" },
    { id: "mime-teacher", label: "Mestre o mestra", emoji: "🧑‍🏫", deck: "mime" },
    { id: "mime-farmer", label: "Pagès o pagesa", emoji: "🧑‍🌾", deck: "mime" },
    { id: "mime-mechanic", label: "Mecànic o mecànica", emoji: "🧑‍🔧", deck: "mime" },
    { id: "mime-painter", label: "Pintor o pintora", emoji: "🧑‍🎨", deck: "mime" },
    { id: "mime-scientist", label: "Científic o científica", emoji: "🧑‍🔬", deck: "mime" },
    { id: "mime-eating-pasta", label: "Menjar espaguetis", emoji: "🍝", deck: "mime" },
    {
      id: "mime-eating-popcorn",
      label: "Menjar crispetes",
      emoji: "🍿",
      deck: "mime",
    },
    { id: "mime-drinking", label: "Beure amb una palleta", emoji: "🥤", deck: "mime" },
    { id: "mime-umbrella", label: "Obrir un paraigua", emoji: "☂️", deck: "mime" },
    { id: "mime-reading", label: "Llegir un llibre", emoji: "📖", deck: "mime" },
    {
      id: "mime-typing",
      label: "Escriure a l'ordinador",
      emoji: "💻",
      deck: "mime",
    },
    { id: "mime-fishing", label: "Pescar", emoji: "🎣", deck: "mime" },
    { id: "mime-rowing", label: "Remar", emoji: "🚣", deck: "mime" },
    { id: "mime-shower", label: "Dutxar-se", emoji: "🚿", deck: "mime" },
    { id: "mime-washing-hands", label: "Rentar-se les mans", emoji: "🧼", deck: "mime" },
    { id: "mime-suitcase", label: "Arrossegar una maleta", emoji: "🧳", deck: "mime" },
    { id: "mime-balloon", label: "Inflar un globus", emoji: "🎈", deck: "mime" },
    {
      id: "mime-birthday-candles",
      label: "Bufar espelmes d'aniversari",
      emoji: "🎂",
      deck: "mime",
    },
    { id: "mime-kangaroo", label: "Saltar com un cangur", emoji: "🦘", deck: "mime" },
    { id: "mime-crab", label: "Caminar com un cranc", emoji: "🦀", deck: "mime" },
    {
      id: "mime-flamingo",
      label: "Aguantar-se com un flamenc",
      emoji: "🦩",
      deck: "mime",
    },
    { id: "mime-zombie", label: "Caminar com un zombi", emoji: "🧟", deck: "mime" },
    { id: "mime-jump-rope", label: "Saltar a corda", emoji: "🪢", deck: "mime" },
    { id: "mime-skateboard", label: "Anar amb monopatí", emoji: "🛹", deck: "mime" },
    { id: "mime-bowling", label: "Jugar a bitlles", emoji: "🎳", deck: "mime" },
    { id: "mime-golf", label: "Jugar a golf", emoji: "🏌️", deck: "mime" },
    { id: "mime-archery", label: "Tir amb arc", emoji: "🏹", deck: "mime" },
    { id: "mime-fencing", label: "Fer esgrima", emoji: "🤺", deck: "mime" },
    { id: "mime-volleyball", label: "Jugar a voleibol", emoji: "🏐", deck: "mime" },
    { id: "mime-handball", label: "Jugar a handbol", emoji: "🤾", deck: "mime" },
    {
      id: "mime-table-tennis",
      label: "Jugar a ping-pong",
      emoji: "🏓",
      deck: "mime",
    },
    { id: "mime-badminton", label: "Jugar a bàdminton", emoji: "🏸", deck: "mime" },
    { id: "mime-rugby", label: "Jugar a rugbi", emoji: "🏉", deck: "mime" },
    { id: "mime-baseball", label: "Jugar a beisbol", emoji: "⚾", deck: "mime" },
    { id: "mime-hockey", label: "Jugar a hoquei", emoji: "🏒", deck: "mime" },
    {
      id: "mime-diving-board",
      label: "Saltar del trampolí",
      emoji: "🤿",
      deck: "mime",
    },
    {
      id: "mime-horse-riding",
      label: "Muntar a cavall",
      emoji: "🏇",
      deck: "mime",
    },
    { id: "mime-gymnastics", label: "Fer gimnàstica", emoji: "🤸", deck: "mime" },
    { id: "mime-karate", label: "Fer karate", emoji: "🥋", deck: "mime" },
    { id: "mime-wrestling", label: "Fer lluita", emoji: "🤼", deck: "mime" },
    { id: "mime-kayaking", label: "Anar amb caiac", emoji: "🛶", deck: "mime" },
    { id: "mime-snowboarding", label: "Fer snowboard", emoji: "🏂", deck: "mime" },
    {
      id: "mime-roller-skating",
      label: "Patinar sobre rodes",
      emoji: "🛼",
      deck: "mime",
    },
    { id: "mime-hiking", label: "Fer senderisme", emoji: "🥾", deck: "mime" },
    { id: "mime-hurdles", label: "Saltar tanques", emoji: "🏃‍➡️", deck: "mime" },
    { id: "mime-billiards", label: "Jugar a billar", emoji: "🎱", deck: "mime" },
    { id: "mime-darts", label: "Jugar als dards", emoji: "🎯", deck: "mime" },
    { id: "mime-dentist", label: "Dentista", emoji: "🦷", deck: "mime" },
    {
      id: "mime-vet",
      label: "Veterinari o veterinària",
      emoji: "🐾",
      deck: "mime",
    },
    { id: "mime-baker", label: "Forner o fornera", emoji: "🥖", deck: "mime" },
    { id: "mime-waiter", label: "Cambrer o cambrera", emoji: "🍽️", deck: "mime" },
    {
      id: "mime-hairdresser",
      label: "Perruquer o perruquera",
      emoji: "💇",
      deck: "mime",
    },
    {
      id: "mime-gardener",
      label: "Jardiner o jardinera",
      emoji: "🪴",
      deck: "mime",
    },
    {
      id: "mime-mail-carrier",
      label: "Carter o cartera",
      emoji: "📮",
      deck: "mime",
    },
    { id: "mime-builder", label: "Paleta", emoji: "🧱", deck: "mime" },
    { id: "mime-judge", label: "Jutge o jutgessa", emoji: "⚖️", deck: "mime" },
    { id: "mime-musician", label: "Músic o música", emoji: "🎼", deck: "mime" },
    {
      id: "mime-librarian",
      label: "Bibliotecari o bibliotecària",
      emoji: "📚",
      deck: "mime",
    },
    { id: "mime-lifeguard", label: "Socorrista", emoji: "🛟", deck: "mime" },
    {
      id: "mime-bus-driver",
      label: "Conductor o conductora d’autobús",
      emoji: "🚌",
      deck: "mime",
    },
    {
      id: "mime-train-driver",
      label: "Maquinista de tren",
      emoji: "🚆",
      deck: "mime",
    },
    {
      id: "mime-flight-attendant",
      label: "Auxiliar de vol",
      emoji: "🛫",
      deck: "mime",
    },
    {
      id: "mime-reporter",
      label: "Periodista amb micròfon",
      emoji: "🎤",
      deck: "mime",
    },
    { id: "mime-clown", label: "Pallasso o pallassa", emoji: "🤡", deck: "mime" },
    { id: "mime-magician", label: "Mag o maga", emoji: "🪄", deck: "mime" },
    {
      id: "mime-archaeologist",
      label: "Arqueòleg o arqueòloga",
      emoji: "🏺",
      deck: "mime",
    },
    {
      id: "mime-beekeeper",
      label: "Apicultor o apicultora",
      emoji: "🐝",
      deck: "mime",
    },
    {
      id: "mime-cleaner",
      label: "Personal de neteja",
      emoji: "🧽",
      deck: "mime",
    },
    {
      id: "mime-tailor",
      label: "Sastre o modista",
      emoji: "🧵",
      deck: "mime",
    },
    { id: "mime-florist", label: "Florista", emoji: "💐", deck: "mime" },
    { id: "mime-sailor", label: "Mariner o marinera", emoji: "⚓", deck: "mime" },
    { id: "mime-drummer", label: "Bateria", emoji: "🥁", deck: "mime" },
    {
      id: "mime-tying-shoelaces",
      label: "Cordar-se les sabates",
      emoji: "👟",
      deck: "mime",
    },
    { id: "mime-combing-hair", label: "Pentinar-se", emoji: "💇", deck: "mime" },
    { id: "mime-makeup", label: "Maquillar-se", emoji: "💄", deck: "mime" },
    { id: "mime-shaving", label: "Afaitar-se", emoji: "🪒", deck: "mime" },
    { id: "mime-getting-dressed", label: "Vestir-se", emoji: "👕", deck: "mime" },
    { id: "mime-putting-on-coat", label: "Posar-se un abric", emoji: "🧥", deck: "mime" },
    { id: "mime-opening-gift", label: "Obrir un regal", emoji: "🎁", deck: "mime" },
    {
      id: "mime-wrapping-gift",
      label: "Embolicar un regal",
      emoji: "🎀",
      deck: "mime",
    },
    {
      id: "mime-ironing-shirt",
      label: "Planxar una camisa",
      emoji: "👔",
      deck: "mime",
    },
    { id: "mime-sweeping", label: "Escombrar", emoji: "🧹", deck: "mime" },
    { id: "mime-mopping", label: "Fregar el terra", emoji: "🪣", deck: "mime" },
    {
      id: "mime-vacuuming",
      label: "Passar l’aspiradora",
      emoji: "🧹",
      deck: "mime",
    },
    { id: "mime-making-bed", label: "Fer el llit", emoji: "🛏️", deck: "mime" },
    {
      id: "mime-hanging-laundry",
      label: "Estendre la roba",
      emoji: "👚",
      deck: "mime",
    },
    { id: "mime-washing-dishes", label: "Rentar els plats", emoji: "🍽️", deck: "mime" },
    { id: "mime-stirring-soup", label: "Remenar una sopa", emoji: "🥣", deck: "mime" },
    { id: "mime-kneading-dough", label: "Pastar pa", emoji: "🍞", deck: "mime" },
    { id: "mime-flipping-crepe", label: "Girar una crep", emoji: "🥞", deck: "mime" },
    { id: "mime-peeling-banana", label: "Pelar un plàtan", emoji: "🍌", deck: "mime" },
    {
      id: "mime-squeezing-orange",
      label: "Exprimir una taronja",
      emoji: "🍊",
      deck: "mime",
    },
    { id: "mime-smelling-flower", label: "Olorar una flor", emoji: "🌸", deck: "mime" },
    { id: "mime-planting-seed", label: "Plantar una llavor", emoji: "🌱", deck: "mime" },
    { id: "mime-watering-plants", label: "Regar les plantes", emoji: "🪴", deck: "mime" },
    { id: "mime-walking-dog", label: "Passejar el gos", emoji: "🐕‍🦺", deck: "mime" },
    {
      id: "mime-feeding-baby",
      label: "Donar menjar a un bebè",
      emoji: "🍼",
      deck: "mime",
    },
    {
      id: "mime-changing-diaper",
      label: "Canviar un bolquer",
      emoji: "🧷",
      deck: "mime",
    },
    {
      id: "mime-shopping-cart",
      label: "Empènyer un carro de la compra",
      emoji: "🛒",
      deck: "mime",
    },
    {
      id: "mime-heavy-box",
      label: "Portar una caixa molt pesada",
      emoji: "📦",
      deck: "mime",
    },
    { id: "mime-elevator", label: "Pujar en ascensor", emoji: "🛗", deck: "mime" },
    { id: "mime-ladder", label: "Pujar una escala", emoji: "🪜", deck: "mime" },
    {
      id: "mime-opening-jar",
      label: "Obrir un pot molt dur",
      emoji: "🫙",
      deck: "mime",
    },
    { id: "mime-flying-kite", label: "Fer volar un estel", emoji: "🪁", deck: "mime" },
    {
      id: "mime-sandcastle",
      label: "Fer un castell de sorra",
      emoji: "🏖️",
      deck: "mime",
    },
    { id: "mime-snowman", label: "Fer un ninot de neu", emoji: "☃️", deck: "mime" },
    {
      id: "mime-brushing-pet",
      label: "Raspallar una mascota",
      emoji: "🐕",
      deck: "mime",
    },
    {
      id: "mime-rabbit",
      label: "Saltar com un conill",
      emoji: "🐇",
      deck: "mime",
    },
    {
      id: "mime-turtle",
      label: "Caminar com una tortuga",
      emoji: "🐢",
      deck: "mime",
    },
    {
      id: "mime-giraffe",
      label: "Menjar fulles com una girafa",
      emoji: "🦒",
      deck: "mime",
    },
    {
      id: "mime-snake",
      label: "Arrossegar-se com una serp",
      emoji: "🐍",
      deck: "mime",
    },
    {
      id: "mime-frog",
      label: "Saltar com una granota",
      emoji: "🐸",
      deck: "mime",
    },
    {
      id: "mime-cat",
      label: "Rentar-se com un gat",
      emoji: "🐈",
      deck: "mime",
    },
    {
      id: "mime-dog",
      label: "Espolsar-se com un gos",
      emoji: "🐕",
      deck: "mime",
    },
    {
      id: "mime-chicken",
      label: "Caminar com una gallina",
      emoji: "🐔",
      deck: "mime",
    },
    {
      id: "mime-horse",
      label: "Galopar com un cavall",
      emoji: "🐎",
      deck: "mime",
    },
    {
      id: "mime-bear",
      label: "Caminar com un ós",
      emoji: "🐻",
      deck: "mime",
    },
    { id: "mime-lion", label: "Moure’s com un lleó", emoji: "🦁", deck: "mime" },
    {
      id: "mime-butterfly",
      label: "Volar com una papallona",
      emoji: "🦋",
      deck: "mime",
    },
    { id: "mime-octopus", label: "Moure’s com un pop", emoji: "🐙", deck: "mime" },
    {
      id: "mime-robot",
      label: "Caminar com un robot",
      emoji: "🤖",
      deck: "mime",
    },
    {
      id: "mime-mummy",
      label: "Caminar com una mòmia",
      emoji: "🧟",
      deck: "mime",
    },
  ],
}

type DeckState = {
  remaining: GameCard[]
  recentIds: string[]
}

type RandomSource = () => number

function shuffle<T>(items: readonly T[], random: RandomSource) {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
  }

  return shuffled
}

export function createRoundDealer(random: RandomSource = Math.random) {
  const deckState: Record<CardKind, DeckState> = {
    sound: { remaining: [], recentIds: [] },
    mime: { remaining: [], recentIds: [] },
  }

  function refill(kind: CardKind, additionallyDeferredIds: readonly string[] = []) {
    // Refill as a shuffle bag, with the most recently dealt cards moved to the back.
    const deferredIds = new Set([...deckState[kind].recentIds, ...additionallyDeferredIds])
    const unseenCards = cards[kind].filter((card) => !deferredIds.has(card.id))
    const deferredCards = cards[kind].filter((card) => deferredIds.has(card.id))

    deckState[kind].remaining = [...shuffle(unseenCards, random), ...shuffle(deferredCards, random)]
  }

  function draw(kind: CardKind, count: number) {
    const selected: GameCard[] = []

    while (selected.length < count) {
      if (deckState[kind].remaining.length === 0) {
        refill(
          kind,
          selected.map((card) => card.id),
        )
      }

      const needed = count - selected.length
      selected.push(...deckState[kind].remaining.splice(0, needed))
    }

    deckState[kind].recentIds = [
      ...deckState[kind].recentIds,
      ...selected.map((card) => card.id),
    ].slice(-ROUND_LENGTH)

    return selected
  }

  return function dealRound(kind: DeckKind) {
    if (kind !== "mixed") return draw(kind, ROUND_LENGTH)

    const soundCards = draw("sound", Math.ceil(ROUND_LENGTH / 2))
    const mimeCards = draw("mime", Math.floor(ROUND_LENGTH / 2))

    return shuffle([...soundCards, ...mimeCards], random)
  }
}

export const deckDetails = {
  sound: {
    eyebrow: "Baralla de sons",
    title: "Fes un soroll",
    description: "Rugeix i retruny. No valen paraules!",
    instruction: "Imita el seu so",
    reminder: "Només sorolls — no diguis la paraula.",
  },
  mime: {
    eyebrow: "Baralla de mímica",
    title: "Fes mímica",
    description: "Gestos i teatre. Sense fer cap soroll!",
    instruction: "Fes mímica",
    reminder: "Fes servir tot el cos — sense cap soroll.",
  },
  mixed: {
    eyebrow: "Baralla mixta",
    title: "Barreja-ho tot",
    description: "Sons i mímica. Mira què toca!",
    instruction: "Segueix la carta",
    reminder: "Pot tocar fer un soroll o mímica — fixa-t’hi!",
  },
} as const satisfies Record<
  DeckKind,
  {
    eyebrow: string
    title: string
    description: string
    instruction: string
    reminder: string
  }
>
