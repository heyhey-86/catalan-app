export const CONVERSATIONS = [
  {
    id: 1,
    title: "Ordering at a Restaurant",
    unlockAfterLesson: 3,
    icon: "🍽️",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "waiter",
        text: "Bon dia! Benvinguts!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "waiter",
        text: "Què voleu beure?"
      },
      {
        speaker: "user",
        prompt: "Say: I would like water please",
        correctSentence: "Voldria aigua si us plau",
        wordBank: ["Voldria", "aigua", "si us plau", "vi", "cervesa"]
      },
      {
        speaker: "waiter",
        text: "Perfecte! I per menjar?"
      },
      {
        speaker: "user",
        prompt: "Say: The menu please",
        correctSentence: "El menú si us plau",
        wordBank: ["El", "menú", "si us plau", "compte", "deliciós"]
      },
      {
        speaker: "waiter",
        text: "Aquí teniu el menú."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "hola", "bon dia"]
      },
      {
        speaker: "waiter",
        text: "La comida estava bona?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes delicious",
        correctSentence: "Sí deliciós",
        wordBank: ["Sí", "No", "deliciós", "fred", "calent"]
      },
      {
        speaker: "waiter",
        text: "Voleu alguna cosa més?"
      },
      {
        speaker: "user",
        prompt: "Say: The bill please",
        correctSentence: "El compte si us plau",
        wordBank: ["El", "compte", "si us plau", "menú", "aigua"]
      }
    ]
  },
  {
    id: 2,
    title: "Asking for Directions",
    unlockAfterLesson: 5,
    icon: "🗺️",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "stranger",
        text: "Hola! Bon dia!"
      },
      {
        speaker: "user",
        prompt: "Say: Hello",
        correctSentence: "Hola",
        wordBank: ["Hola", "Adéu", "Bon dia", "Gràcies"]
      },
      {
        speaker: "stranger",
        text: "Necessiteu ajuda?"
      },
      {
        speaker: "user",
        prompt: "Ask: Where is the metro?",
        correctSentence: "On és el metro?",
        wordBank: ["On", "és", "el", "metro?", "plaça", "carrer"]
      },
      {
        speaker: "stranger",
        text: "El metro és a l'esquerra."
      },
      {
        speaker: "user",
        prompt: "Ask: Is it near?",
        correctSentence: "És a prop?",
        wordBank: ["És", "a prop?", "lluny?", "aquí", "recte"]
      },
      {
        speaker: "stranger",
        text: "Sí, molt a prop. Cinc minuts."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "si us plau", "hola"]
      },
      {
        speaker: "stranger",
        text: "De res! Bon dia!"
      },
      {
        speaker: "user",
        prompt: "Say: Goodbye",
        correctSentence: "Adéu",
        wordBank: ["Adéu", "Hola", "Gràcies", "Bon dia"]
      }
    ]
  },
  {
    id: 3,
    title: "At the Pharmacy",
    unlockAfterLesson: 7,
    icon: "💊",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "pharmacist",
        text: "Bon dia! Com puc ajudar?"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "pharmacist",
        text: "Què necessiteu?"
      },
      {
        speaker: "user",
        prompt: "Say: I have a headache",
        correctSentence: "Tinc mal de cap",
        wordBank: ["Tinc", "mal de cap", "dolor", "febre", "medicina"]
      },
      {
        speaker: "pharmacist",
        text: "Teniu febre també?"
      },
      {
        speaker: "user",
        prompt: "Say: No",
        correctSentence: "No",
        wordBank: ["No", "Sí", "una mica", "molt"]
      },
      {
        speaker: "pharmacist",
        text: "Necessiteu pastilles?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "No", "si us plau", "gràcies", "recepta"]
      },
      {
        speaker: "pharmacist",
        text: "Aquí teniu. Són 8 euros."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "si us plau", "diners"]
      }
    ]
  },
  {
    id: 4,
    title: "Making Friends",
    unlockAfterLesson: 8,
    icon: "👋",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "friend",
        text: "Hola!"
      },
      {
        speaker: "user",
        prompt: "Say: Hello",
        correctSentence: "Hola",
        wordBank: ["Hola", "Adéu", "Bon dia", "Gràcies"]
      },
      {
        speaker: "friend",
        text: "Com et dius?"
      },
      {
        speaker: "user",
        prompt: "Say: Nice to meet you",
        correctSentence: "Encantat",
        wordBank: ["Encantat", "adéu", "amic", "fins després", "hola"]
      },
      {
        speaker: "friend",
        text: "Encantat! D'on ets?"
      },
      {
        speaker: "user",
        prompt: "Say: I'm from England",
        correctSentence: "Sóc d'Anglaterra",
        wordBank: ["Sóc", "de", "d'Anglaterra", "aquí", "vius"]
      },
      {
        speaker: "friend",
        text: "Molt bé! Vius aquí?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes",
        correctSentence: "Sí",
        wordBank: ["Sí", "No", "aquí", "ara", "sempre"]
      },
      {
        speaker: "friend",
        text: "Fantàstic! Fins aviat!"
      },
      {
        speaker: "user",
        prompt: "Say: See you later",
        correctSentence: "Fins després",
        wordBank: ["Fins després", "Adéu", "Hola", "Gràcies"]
      }
    ]
  },
  {
    id: 5,
    title: "Shopping for Groceries",
    unlockAfterLesson: 22,
    icon: "🛒",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "cashier",
        text: "Hola! Bon dia!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "cashier",
        text: "Què necessiteu?"
      },
      {
        speaker: "user",
        prompt: "Say: Bread and milk please",
        correctSentence: "Pa i llet si us plau",
        wordBank: ["Pa", "i", "llet", "si us plau", "ous", "fruita"]
      },
      {
        speaker: "cashier",
        text: "Voleu ous també?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "No", "si us plau", "gràcies", "també"]
      },
      {
        speaker: "cashier",
        text: "Perfecte! Són 5 euros."
      },
      {
        speaker: "user",
        prompt: "Ask: How much?",
        correctSentence: "Quan costa?",
        wordBank: ["Quan", "costa?", "diners", "euros", "car"]
      },
      {
        speaker: "cashier",
        text: "Cinc euros."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "si us plau", "bon dia"]
      }
    ]
  },
  {
    id: 6,
    title: "At the Hotel",
    unlockAfterLesson: 29,
    icon: "🏨",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "receptionist",
        text: "Bona tarda! Benvingut!"
      },
      {
        speaker: "user",
        prompt: "Say: Good afternoon",
        correctSentence: "Bona tarda",
        wordBank: ["Bona tarda", "Bon dia", "Hola", "Gràcies"]
      },
      {
        speaker: "receptionist",
        text: "Té una reserva?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I have a reservation",
        correctSentence: "Sí tinc una reserva",
        wordBank: ["Sí", "tinc", "una", "reserva", "habitació", "clau"]
      },
      {
        speaker: "receptionist",
        text: "Quin nom?"
      },
      {
        speaker: "user",
        prompt: "Give your name",
        correctSentence: "El meu nom és Smith",
        wordBank: ["El", "meu", "nom", "és", "Smith", "registre"]
      },
      {
        speaker: "receptionist",
        text: "Perfecte! Aquí està la clau."
      },
      {
        speaker: "user",
        prompt: "Ask: What time is breakfast?",
        correctSentence: "A quina hora és l'esmorzar?",
        wordBank: ["A", "quina", "hora", "és", "l'esmorzar?", "recepció"]
      },
      {
        speaker: "receptionist",
        text: "De set a deu del matí."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "si us plau", "clau"]
      }
    ]
  },
  {
    id: 7,
    title: "Buying Clothes",
    unlockAfterLesson: 25,
    icon: "👕",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "clerk",
        text: "Hola! Bon dia!"
      },
      {
        speaker: "user",
        prompt: "Say: Hello",
        correctSentence: "Hola",
        wordBank: ["Hola", "Bon dia", "Adéu", "Gràcies"]
      },
      {
        speaker: "clerk",
        text: "Busqueu alguna cosa?"
      },
      {
        speaker: "user",
        prompt: "Say: I would like a shirt",
        correctSentence: "Voldria una camisa",
        wordBank: ["Voldria", "una", "camisa", "pantalons", "sabates", "talla"]
      },
      {
        speaker: "clerk",
        text: "Quina talla?"
      },
      {
        speaker: "user",
        prompt: "Say: Size medium",
        correctSentence: "Talla mitjana",
        wordBank: ["Talla", "mitjana", "petita", "gran", "color"]
      },
      {
        speaker: "clerk",
        text: "Quin color voleu?"
      },
      {
        speaker: "user",
        prompt: "Say: Blue",
        correctSentence: "Blau",
        wordBank: ["Blau", "Negre", "Blanc", "Vermell", "color"]
      },
      {
        speaker: "clerk",
        text: "Aquesta camisa costa 25 euros."
      },
      {
        speaker: "user",
        prompt: "Ask: How much is it?",
        correctSentence: "Quan costa?",
        wordBank: ["Quan", "costa?", "preu", "car", "barat"]
      }
    ]
  },
  {
    id: 8,
    title: "At the Doctor",
    unlockAfterLesson: 13,
    icon: "🏥",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "doctor",
        text: "Hola bon dia!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Hola", "Gràcies", "Adéu"]
      },
      {
        speaker: "doctor",
        text: "Com es troba?"
      },
      {
        speaker: "user",
        prompt: "Say: I feel sick",
        correctSentence: "Em trobo malament",
        wordBank: ["Em", "trobo", "malament", "bé", "així així"]
      },
      {
        speaker: "doctor",
        text: "Quins símptomes té?"
      },
      {
        speaker: "user",
        prompt: "Say: I have a fever",
        correctSentence: "Tinc febre",
        wordBank: ["Tinc", "febre", "mal de cap", "dolor", "símptomes"]
      },
      {
        speaker: "doctor",
        text: "També té mal de cap?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes",
        correctSentence: "Sí",
        wordBank: ["Sí", "No", "una mica", "molt"]
      },
      {
        speaker: "doctor",
        text: "Necessita medicina. Aquí té la recepta."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "recepta", "medicina"]
      }
    ]
  },
  {
    id: 9,
    title: "Taking a Taxi",
    unlockAfterLesson: 6,
    icon: "🚕",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "driver",
        text: "Bon dia!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "driver",
        text: "On anem?"
      },
      {
        speaker: "user",
        prompt: "Say: To the airport please",
        correctSentence: "A l'aeroport si us plau",
        wordBank: ["A", "l'aeroport", "si us plau", "estació", "centre"]
      },
      {
        speaker: "driver",
        text: "Perfecte! Són vint minuts."
      },
      {
        speaker: "user",
        prompt: "Ask: How much?",
        correctSentence: "Quan costa?",
        wordBank: ["Quan", "costa?", "temps", "minuts", "lluny"]
      },
      {
        speaker: "driver",
        text: "Trenta euros."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "diners", "targeta", "adéu"]
      },
      {
        speaker: "driver",
        text: "Hem arribat!"
      },
      {
        speaker: "user",
        prompt: "Say: Goodbye",
        correctSentence: "Adéu",
        wordBank: ["Adéu", "Gràcies", "Bon dia", "si us plau"]
      }
    ]
  },
  {
    id: 10,
    title: "Talking About the Weather",
    unlockAfterLesson: 14,
    icon: "🌤️",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "friend",
        text: "Hola! Quin temps fa avui?"
      },
      {
        speaker: "user",
        prompt: "Say: It's sunny",
        correctSentence: "Fa sol",
        wordBank: ["Fa", "sol", "fred", "calor", "plou"]
      },
      {
        speaker: "friend",
        text: "Sí! Fa molt bona temperatura."
      },
      {
        speaker: "user",
        prompt: "Say: Yes it's hot",
        correctSentence: "Sí fa calor",
        wordBank: ["Sí", "fa", "calor", "fred", "vent", "plou"]
      },
      {
        speaker: "friend",
        text: "Vols anar a la platja?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes",
        correctSentence: "Sí",
        wordBank: ["Sí", "No", "potser", "ara", "després"]
      },
      {
        speaker: "friend",
        text: "Perfecte! A quina hora?"
      },
      {
        speaker: "user",
        prompt: "Say: Now",
        correctSentence: "Ara",
        wordBank: ["Ara", "Després", "Més tard", "Demà", "Avui"]
      },
      {
        speaker: "friend",
        text: "Fantàstic! Anem!"
      },
      {
        speaker: "user",
        prompt: "Say: Yes let's go",
        correctSentence: "Sí anem",
        wordBank: ["Sí", "anem", "perfecte", "bé", "ara"]
      }
    ]
  }
];