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
        text: "Bon dia! Benvinguts!",
        english: "Good morning! Welcome!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "waiter",
        text: "Què voleu beure?",
        english: "What would you like to drink?"
      },
      {
        speaker: "user",
        prompt: "Say: I would like water please",
        correctSentence: "Voldria aigua si us plau",
        wordBank: ["Voldria", "aigua", "si us plau", "vi", "cervesa"]
      },
      {
        speaker: "waiter",
        text: "Perfecte! I per menjar?",
        english: "Perfect! And to eat?"
      },
      {
        speaker: "user",
        prompt: "Say: The menu please",
        correctSentence: "El menú si us plau",
        wordBank: ["El", "menú", "si us plau", "compte", "deliciós"]
      },
      {
        speaker: "waiter",
        text: "Aquí teniu el menú.",
        english: "Here is the menu."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "hola", "bon dia"]
      },
      {
        speaker: "waiter",
        text: "La comida estava bona?",
        english: "Was the food good?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes delicious",
        correctSentence: "Sí deliciós",
        wordBank: ["Sí", "No", "deliciós", "fred", "calent"]
      },
      {
        speaker: "waiter",
        text: "Voleu alguna cosa més?",
        english: "Would you like anything else?"
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
        text: "Hola! Bon dia!",         
        english: "Hello! Good morning!"
      },
      {
        speaker: "user",
        prompt: "Say: Hello",
        correctSentence: "Hola",
        wordBank: ["Hola", "Adéu", "Bon dia", "Gràcies"]
      },
      {
        speaker: "stranger",
        text: "Necessiteu ajuda?",         english: "Do you need help?"
      },
      {
        speaker: "user",
        prompt: "Ask: Where is the metro?",
        correctSentence: "On és el metro?",
        wordBank: ["On", "és", "el", "metro?", "plaça", "carrer"]
      },
      {
        speaker: "stranger",
        text: "El metro és a l'esquerra.",         english: "The metro is on the left."
      },
      {
        speaker: "user",
        prompt: "Ask: Is it near?",
        correctSentence: "És a prop?",
        wordBank: ["És", "a prop?", "lluny?", "aquí", "recte"]
      },
      {
        speaker: "stranger",
        text: "Sí, molt a prop. Cinc minuts.",         english: "Yes, very close. Five minutes."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "si us plau", "hola"]
      },
      {
        speaker: "stranger",
        text: "De res! Bon dia!",         english: "You're welcome! Good morning!"
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
        text: "Bon dia! Com puc ajudar?",         english: "Good morning! How can I help?"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "pharmacist",
        text: "Què necessiteu?",         english: "What do you need?"
      },
      {
        speaker: "user",
        prompt: "Say: I have a headache",
        correctSentence: "Tinc mal de cap",
        wordBank: ["Tinc", "mal de cap", "dolor", "febre", "medicina"]
      },
      {
        speaker: "pharmacist",
        text: "Teniu febre també?",         english: "Do you have a fever too?"
      },
      {
        speaker: "user",
        prompt: "Say: No",
        correctSentence: "No",
        wordBank: ["No", "Sí", "una mica", "molt"]
      },
      {
        speaker: "pharmacist",
        text: "Necessiteu pastilles?",         english: "Do you need pills?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "No", "si us plau", "gràcies", "recepta"]
      },
      {
        speaker: "pharmacist",
        text: "Aquí teniu. Són 8 euros.",         english: "Here you go. That's 8 euros."
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
        text: "Hola!",         english: "Hello!"
      },
      {
        speaker: "user",
        prompt: "Say: Hello",
        correctSentence: "Hola",
        wordBank: ["Hola", "Adéu", "Bon dia", "Gràcies"]
      },
      {
        speaker: "friend",
        text: "Com et dius?",         english: "What's your name?"
      },
      {
        speaker: "user",
        prompt: "Say: Nice to meet you",
        correctSentence: "Encantat",
        wordBank: ["Encantat", "adéu", "amic", "fins després", "hola"]
      },
      {
        speaker: "friend",
        text: "Encantat! D'on ets?",         english: "Nice to meet you! Where are you from?"
      },
      {
        speaker: "user",
        prompt: "Say: I'm from England",
        correctSentence: "Sóc d'Anglaterra",
        wordBank: ["Sóc", "de", "d'Anglaterra", "aquí", "vius"]
      },
      {
        speaker: "friend",
        text: "Molt bé! Vius aquí?",         english: "Very good! Do you live here?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes",
        correctSentence: "Sí",
        wordBank: ["Sí", "No", "aquí", "ara", "sempre"]
      },
      {
        speaker: "friend",
        text: "Fantàstic! Fins aviat!",         english: "Fantastic! See you soon!"
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
        text: "Hola! Bon dia!",         english: "Hello! Good morning!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "cashier",
        text: "Què necessiteu?",         english: "What do you need?"
      },
      {
        speaker: "user",
        prompt: "Say: Bread and milk please",
        correctSentence: "Pa i llet si us plau",
        wordBank: ["Pa", "i", "llet", "si us plau", "ous", "fruita"]
      },
      {
        speaker: "cashier",
        text: "Voleu ous també?",         english: "Do you want eggs too?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "No", "si us plau", "gràcies", "també"]
      },
      {
        speaker: "cashier",
        text: "Perfecte! Són 5 euros.",         english: "Perfect! That's 5 euros."
      },
      {
        speaker: "user",
        prompt: "Ask: How much?",
        correctSentence: "Quan costa?",
        wordBank: ["Quan", "costa?", "diners", "euros", "car"]
      },
      {
        speaker: "cashier",
        text: "Cinc euros.",         english: "Five euros."
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
        text: "Bona tarda! Benvingut!",         english: "Good afternoon! Welcome!"
      },
      {
        speaker: "user",
        prompt: "Say: Good afternoon",
        correctSentence: "Bona tarda",
        wordBank: ["Bona tarda", "Bon dia", "Hola", "Gràcies"]
      },
      {
        speaker: "receptionist",
        text: "Té una reserva?",         english: "Do you have a reservation?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I have a reservation",
        correctSentence: "Sí tinc una reserva",
        wordBank: ["Sí", "tinc", "una", "reserva", "habitació", "clau"]
      },
      {
        speaker: "receptionist",
        text: "Quin nom?",         english: "What name?"
      },
      {
        speaker: "user",
        prompt: "Give your name",
        correctSentence: "El meu nom és Smith",
        wordBank: ["El", "meu", "nom", "és", "Smith", "registre"]
      },
      {
        speaker: "receptionist",
        text: "Perfecte! Aquí està la clau.",         english: "Perfect! Here is the key."
      },
      {
        speaker: "user",
        prompt: "Ask: What time is breakfast?",
        correctSentence: "A quina hora és l'esmorzar?",
        wordBank: ["A", "quina", "hora", "és", "l'esmorzar?", "recepció"]
      },
      {
        speaker: "receptionist",
        text: "De set a deu del matí.",         english: "From seven to ten in the morning."
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
        text: "Hola! Bon dia!",         english: "Hello! Good morning!"
      },
      {
        speaker: "user",
        prompt: "Say: Hello",
        correctSentence: "Hola",
        wordBank: ["Hola", "Bon dia", "Adéu", "Gràcies"]
      },
      {
        speaker: "clerk",
        text: "Busqueu alguna cosa?",         english: "Are you looking for something?"
      },
      {
        speaker: "user",
        prompt: "Say: I would like a shirt",
        correctSentence: "Voldria una camisa",
        wordBank: ["Voldria", "una", "camisa", "pantalons", "sabates", "talla"]
      },
      {
        speaker: "clerk",
        text: "Quina talla?",         english: "What size?"
      },
      {
        speaker: "user",
        prompt: "Say: Size medium",
        correctSentence: "Talla mitjana",
        wordBank: ["Talla", "mitjana", "petita", "gran", "color"]
      },
      {
        speaker: "clerk",
        text: "Quin color voleu?",         english: "What color do you want?"
      },
      {
        speaker: "user",
        prompt: "Say: Blue",
        correctSentence: "Blau",
        wordBank: ["Blau", "Negre", "Blanc", "Vermell", "color"]
      },
      {
        speaker: "clerk",
        text: "Aquesta camisa costa 25 euros.",         english: "This shirt costs 25 euros."
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
        text: "Hola bon dia!",         english: "Hello good morning!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Hola", "Gràcies", "Adéu"]
      },
      {
        speaker: "doctor",
        text: "Com es troba?",         english: "How are you feeling?"
      },
      {
        speaker: "user",
        prompt: "Say: I feel sick",
        correctSentence: "Em trobo malament",
        wordBank: ["Em", "trobo", "malament", "bé", "així així"]
      },
      {
        speaker: "doctor",
        text: "Quins símptomes té?",         english: "What symptoms do you have?"
      },
      {
        speaker: "user",
        prompt: "Say: I have a fever",
        correctSentence: "Tinc febre",
        wordBank: ["Tinc", "febre", "mal de cap", "dolor", "símptomes"]
      },
      {
        speaker: "doctor",
        text: "També té mal de cap?",         english: "Do you also have a headache?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes",
        correctSentence: "Sí",
        wordBank: ["Sí", "No", "una mica", "molt"]
      },
      {
        speaker: "doctor",
        text: "Necessita medicina. Aquí té la recepta.",         english: "You need medicine. Here is the prescription."
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
        text: "Bon dia!",         english: "Good morning!"
      },
      {
        speaker: "user",
        prompt: "Say: Good morning",
        correctSentence: "Bon dia",
        wordBank: ["Bon dia", "Bona tarda", "Hola", "Adéu"]
      },
      {
        speaker: "driver",
        text: "On anem?",         english: "Where are we going?"
      },
      {
        speaker: "user",
        prompt: "Say: To the airport please",
        correctSentence: "A l'aeroport si us plau",
        wordBank: ["A", "l'aeroport", "si us plau", "estació", "centre"]
      },
      {
        speaker: "driver",
        text: "Perfecte! Són vint minuts.",         english: "Perfect! It's twenty minutes."
      },
      {
        speaker: "user",
        prompt: "Ask: How much?",
        correctSentence: "Quan costa?",
        wordBank: ["Quan", "costa?", "temps", "minuts", "lluny"]
      },
      {
        speaker: "driver",
        text: "Trenta euros.",         english: "Thirty euros."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "diners", "targeta", "adéu"]
      },
      {
        speaker: "driver",
        text: "Hem arribat!",         english: "We've arrived!"
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
        text: "Hola! Quin temps fa avui?",         english: "Hello! What's the weather like today?"
      },
      {
        speaker: "user",
        prompt: "Say: It's sunny",
        correctSentence: "Fa sol",
        wordBank: ["Fa", "sol", "fred", "calor", "plou"]
      },
      {
        speaker: "friend",
        text: "Sí! Fa molt bona temperatura.",         english: "Yes! The temperature is very nice."
      },
      {
        speaker: "user",
        prompt: "Say: Yes it's hot",
        correctSentence: "Sí fa calor",
        wordBank: ["Sí", "fa", "calor", "fred", "vent", "plou"]
      },
      {
        speaker: "friend",
        text: "Vols anar a la platja?",         english: "Do you want to go to the beach?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes",
        correctSentence: "Sí",
        wordBank: ["Sí", "No", "potser", "ara", "després"]
      },
      {
        speaker: "friend",
        text: "Perfecte! A quina hora?",         english: "Perfect! At what time?"
      },
      {
        speaker: "user",
        prompt: "Say: Now",
        correctSentence: "Ara",
        wordBank: ["Ara", "Després", "Més tard", "Demà", "Avui"]
      },
      {
        speaker: "friend",
        text: "Fantàstic! Anem!",         english: "Fantastic! Let's go!"
      },
      {
        speaker: "user",
        prompt: "Say: Yes let's go",
        correctSentence: "Sí anem",
        wordBank: ["Sí", "anem", "perfecte", "bé", "ara"]
      }
    ]
  },

{
    id: 11,
    title: "At the Hairdresser",
    unlockAfterLesson: 15,
    icon: "💇",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "hairdresser",
        text: "Bon dia! Com et vull tallar els cabells?",
        english: "Good morning! How would you like your hair cut?"
      },
      {
        speaker: "user",
        prompt: "Say: Not too short please",
        correctSentence: "No gaire curt si us plau",
        wordBank: ["No", "gaire", "curt", "si us plau", "llarg", "una mica"]
      },
      {
        speaker: "hairdresser",
        text: "D'acord. Vols que renti els cabells primer?",
        english: "Okay. Do you want me to wash your hair first?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "No", "si us plau", "gràcies", "perfecte"]
      },
      {
        speaker: "hairdresser",
        text: "Perfecte. Està bé la temperatura de l'aigua?",
        english: "Perfect. Is the water temperature okay?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes it's perfect",
        correctSentence: "Sí està perfecte",
        wordBank: ["Sí", "està", "perfecte", "bé", "calent", "fred"]
      },
      {
        speaker: "hairdresser",
        text: "Molt bé! Vols la ratlla al mig o al costat?",
        english: "Very good! Do you want the part in the middle or on the side?"
      },
      {
        speaker: "user",
        prompt: "Say: On the side please",
        correctSentence: "Al costat si us plau",
        wordBank: ["Al", "costat", "si us plau", "mig", "esquerra", "dreta"]
      },
      {
        speaker: "hairdresser",
        text: "Genial! Només tisores o també màquina?",
        english: "Great! Just scissors or clippers too?"
      },
      {
        speaker: "user",
        prompt: "Say: Just scissors",
        correctSentence: "Només tisores",
        wordBank: ["Només", "tisores", "màquina", "totes dues", "gràcies"]
      },
      {
        speaker: "hairdresser",
        text: "Perfecte! Ja hem acabat. T'agrada?",
        english: "Perfect! We're done. Do you like it?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I like it a lot",
        correctSentence: "Sí m'agrada molt",
        wordBank: ["Sí", "m'agrada", "molt", "gràcies", "perfecte", "bé"]
     }
    ]
  },
  {
    id: 12,
    title: "Making a Phone Call",
    unlockAfterLesson: 16,
    icon: "📞",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "receptionist",
        text: "Bon dia, clínica dental. En què et puc ajudar?",
        english: "Good morning, dental clinic. How can I help you?"
      },
      {
        speaker: "user",
        prompt: "Say: I want to make an appointment",
        correctSentence: "Vull demanar hora",
        wordBank: ["Vull", "demanar", "hora", "cita", "visita", "consulta"]
      },
      {
        speaker: "receptionist",
        text: "Perfecte! Quin dia et va millor?",
        english: "Perfect! Which day works best for you?"
      },
      {
        speaker: "user",
        prompt: "Say: Thursday",
        correctSentence: "Dijous",
        wordBank: ["Dijous", "Dimarts", "Dimecres", "Divendres", "Dilluns"]
      },
      {
        speaker: "receptionist",
        text: "Molt bé. Tenim les deu del matí o les tres de la tarda. Quina hora?",
        english: "Very good. We have ten in the morning or three in the afternoon. What time?"
      },
      {
        speaker: "user",
        prompt: "Say: Ten in the morning",
        correctSentence: "Les deu del matí",
        wordBank: ["Les", "deu", "del", "matí", "tarda", "tres"]
      },
      {
        speaker: "receptionist",
        text: "Perfecte! Em pots dir el teu nom?",
        english: "Perfect! Can you tell me your name?"
      },
      {
        speaker: "user",
        prompt: "Say: My name is John",
        correctSentence: "El meu nom és John",
        wordBank: ["El", "meu", "nom", "és", "John", "cognom"]
      },
      {
        speaker: "receptionist",
        text: "Gràcies! I tens número de telèfon?",
        english: "Thanks! And do you have a phone number?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes it's six one two",
        correctSentence: "Sí és el sis un dos",
        wordBank: ["Sí", "és", "el", "sis", "un", "dos", "tres"]
      },
      {
        speaker: "receptionist",
        text: "Perfecte! Doncs ja tens cita per dijous a les deu. Fins llavors!",
        english: "Perfect! So you have an appointment for Thursday at ten. See you then!"
      },
      {
        speaker: "user",
        prompt: "Say: Thank you very much",
        correctSentence: "Moltes gràcies",
        wordBank: ["Moltes", "gràcies", "adéu", "fins aviat", "perfecte"]
      }
    ]
  },
  {
    id: 13,
    title: "At the Bank",
    unlockAfterLesson: 18,
    icon: "🏦",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "employee",
        text: "Bon dia! Què necessites avui?",
        english: "Good morning! What do you need today?"
      },
      {
        speaker: "user",
        prompt: "Say: I want to open an account",
        correctSentence: "Vull obrir un compte",
        wordBank: ["Vull", "obrir", "un", "compte", "targeta", "diner"]
      },
      {
        speaker: "employee",
        text: "Perfecte! Tens el passaport i un justificant de domicili?",
        english: "Perfect! Do you have your passport and proof of address?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I have all documents",
        correctSentence: "Sí tinc tots els documents",
        wordBank: ["Sí", "tinc", "tots", "els", "documents", "passaport"]
      },
      {
        speaker: "employee",
        text: "Molt bé. Vols un compte corrent o d'estalvis?",
        english: "Very good. Do you want a checking or savings account?"
      },
      {
        speaker: "user",
        prompt: "Say: A checking account",
        correctSentence: "Un compte corrent",
        wordBank: ["Un", "compte", "corrent", "estalvis", "targeta"]
      },
      {
        speaker: "employee",
        text: "D'acord. També vols una targeta de dèbit?",
        english: "Okay. Do you also want a debit card?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "No", "si us plau", "gràcies", "perfecte"]
      },
      {
        speaker: "employee",
        text: "Genial! La targeta té una quota de quinze euros anuals.",
        english: "Great! The card has an annual fee of fifteen euros."
      },
      {
        speaker: "user",
        prompt: "Say: That's fine",
        correctSentence: "Està bé",
        wordBank: ["Està", "bé", "perfecte", "d'acord", "sí"]
      },
      {
        speaker: "employee",
        text: "Perfecte! Omple aquest formulari si us plau.",
        english: "Perfect! Fill out this form please."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "perfecte", "molt bé"]
      }
    ]
  },
  {
    id: 14,
    title: "Renting an Apartment",
    unlockAfterLesson: 20,
    icon: "🏠",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "landlord",
        text: "Hola! Ets aquí per veure el pis?",
        english: "Hello! Are you here to see the apartment?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes that's me",
        correctSentence: "Sí sóc jo",
        wordBank: ["Sí", "sóc", "jo", "aquí", "veure", "pis"]
      },
      {
        speaker: "landlord",
        text: "Perfecte! El pis té dues habitacions i un bany. Vols veure-ho?",
        english: "Perfect! The apartment has two bedrooms and one bathroom. Want to see it?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I would like to see it",
        correctSentence: "Sí m'agradaria veure-ho",
        wordBank: ["Sí", "m'agradaria", "veure-ho", "perfecte", "gràcies"]
      },
      {
        speaker: "landlord",
        text: "El lloguer és vuit-cents cinquanta euros al mes més despeses.",
        english: "The rent is eight hundred fifty euros per month plus expenses."
      },
      {
        speaker: "user",
        prompt: "Say: That seems good",
        correctSentence: "Em sembla bé",
        wordBank: ["Em", "sembla", "bé", "car", "barat", "perfecte"]
      },
      {
        speaker: "landlord",
        text: "Molt bé! Quan voldries entrar a viure?",
        english: "Very good! When would you like to move in?"
      },
      {
        speaker: "user",
        prompt: "Say: The first of March",
        correctSentence: "El primer de març",
        wordBank: ["El", "primer", "de", "març", "abril", "demà"]
      },
      {
        speaker: "landlord",
        text: "Perfecte! Acceptem mascotes petites. Tens animals?",
        english: "Perfect! We accept small pets. Do you have any pets?"
      },
      {
        speaker: "user",
        prompt: "Say: No I don't have pets",
        correctSentence: "No no tinc mascotes",
        wordBank: ["No", "No", "tinc", "mascotes", "gos", "gat"]
      },
      {
        speaker: "landlord",
        text: "Cap problema! Pots signar el contracte la setmana que ve.",
        english: "No problem! You can sign the contract next week."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you very much",
        correctSentence: "Moltes gràcies",
        wordBank: ["Moltes", "gràcies", "perfecte", "bé", "adéu"]
      }
    ]
  },
  {
    id: 15,
    title: "Job Interview",
    unlockAfterLesson: 23,
    icon: "💼",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "interviewer",
        text: "Bon dia! Seu si us plau. Parla'm una mica sobre tu.",
        english: "Good morning! Sit down please. Tell me a bit about yourself."
      },
      {
        speaker: "user",
        prompt: "Say: I'm from England",
        correctSentence: "Sóc d'Anglaterra",
        wordBank: ["Sóc", "d'Anglaterra", "visc", "aquí", "Barcelona", "treballo"]
      },
      {
        speaker: "interviewer",
        text: "Molt interessant! Per què vols treballar aquí?",
        english: "Very interesting! Why do you want to work here?"
      },
      {
        speaker: "user",
        prompt: "Say: I like this company",
        correctSentence: "M'agrada aquesta empresa",
        wordBank: ["M'agrada", "aquesta", "empresa", "feina", "lloc", "equip"]
      },
      {
        speaker: "interviewer",
        text: "Perfecte! Tens experiència en aquest sector?",
        english: "Perfect! Do you have experience in this sector?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I have three years experience",
        correctSentence: "Sí tinc tres anys d'experiència",
        wordBank: ["Sí", "tinc", "tres", "anys", "d'experiència", "molt"]
      },
      {
        speaker: "interviewer",
        text: "Molt bé! Quins idiomes parles?",
        english: "Very good! What languages do you speak?"
      },
      {
        speaker: "user",
        prompt: "Say: I speak English and Catalan",
        correctSentence: "Parlo anglès i català",
        wordBank: ["Parlo", "anglès", "i", "català", "espanyol", "francès"]
      },
      {
        speaker: "interviewer",
        text: "Excel·lent! Quan podries començar?",
        english: "Excellent! When could you start?"
      },
      {
        speaker: "user",
        prompt: "Say: I can start Monday",
        correctSentence: "Puc començar dilluns",
        wordBank: ["Puc", "començar", "dilluns", "demà", "setmana", "ara"]
      },
      {
        speaker: "interviewer",
        text: "Genial! Et trucarem la setmana que ve. Tens preguntes?",
        english: "Great! We'll call you next week. Do you have questions?"
      },
      {
        speaker: "user",
        prompt: "Ask: What is the schedule?",
        correctSentence: "Quin és l'horari?",
        wordBank: ["Quin", "és", "l'horari?", "salari", "vacances", "gràcies"]
      }
    ]
  },
  {
    id: 16,
    title: "At a Party",
    unlockAfterLesson: 26,
    icon: "🎉",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "friend",
        text: "Hola! No et conec. Com et dius?",
        english: "Hi! I don't know you. What's your name?"
      },
      {
        speaker: "user",
        prompt: "Say: My name is Sarah",
        correctSentence: "Em dic Sarah",
        wordBank: ["Em", "dic", "Sarah", "nom", "sóc", "encantat"]
      },
      {
        speaker: "friend",
        text: "Molt de gust! D'on ets?",
        english: "Nice to meet you! Where are you from?"
      },
      {
        speaker: "user",
        prompt: "Say: I'm from the United States",
        correctSentence: "Sóc dels Estats Units",
        wordBank: ["Sóc", "dels", "Estats Units", "Anglaterra", "aquí", "Barcelona"]
      },
      {
        speaker: "friend",
        text: "Què interessant! Fa molt que vius aquí?",
        english: "How interesting! Have you been living here long?"
      },
      {
        speaker: "user",
        prompt: "Say: I've been here for six months",
        correctSentence: "Visc aquí des de fa sis mesos",
        wordBank: ["Visc", "aquí", "des de fa", "sis", "mesos", "any"]
      },
      {
        speaker: "friend",
        text: "I t'agrada Barcelona?",
        english: "And do you like Barcelona?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I like it a lot",
        correctSentence: "Sí m'agrada molt",
        wordBank: ["Sí", "m'agrada", "molt", "una mica", "fantàstic", "genial"]
      },
      {
        speaker: "friend",
        text: "Genial! A què et dediques?",
        english: "Great! What do you do for work?"
      },
      {
        speaker: "user",
        prompt: "Say: I'm a teacher",
        correctSentence: "Sóc professor",
        wordBank: ["Sóc", "professor", "metge", "enginyer", "estudiant", "feina"]
      },
      {
        speaker: "friend",
        text: "Molt bé! Vols una copa? Hi ha vi i cervesa.",
        english: "Very good! Do you want a drink? There's wine and beer."
      },
      {
        speaker: "user",
        prompt: "Say: A beer please",
        correctSentence: "Una cervesa si us plau",
        wordBank: ["Una", "cervesa", "si us plau", "vi", "aigua", "gràcies"]
      }
    ]
  },
  {
    id: 17,
    title: "Complaining About Service",
    unlockAfterLesson: 28,
    icon: "😤",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "employee",
        text: "Bon dia! Et puc ajudar?",
        english: "Good morning! Can I help you?"
      },
      {
        speaker: "user",
        prompt: "Say: I have a problem",
        correctSentence: "Tinc un problema",
        wordBank: ["Tinc", "un", "problema", "queixa", "producte", "compra"]
      },
      {
        speaker: "employee",
        text: "Oh ho sento molt! Quin és el problema?",
        english: "Oh I'm very sorry! What's the problem?"
      },
      {
        speaker: "user",
        prompt: "Say: It doesn't work",
        correctSentence: "No funciona",
        wordBank: ["No", "funciona", "trencat", "defectuós", "mal", "nou"]
      },
      {
        speaker: "employee",
        text: "Entenc. Tens el tiquet de compra?",
        english: "I understand. Do you have the receipt?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I have it here",
        correctSentence: "Sí aquí el tinc",
        wordBank: ["Sí", "aquí", "el", "tinc", "tiquet", "compra"]
      },
      {
        speaker: "employee",
        text: "Perfecte! Vols un canvi o que et tornem els diners?",
        english: "Perfect! Do you want an exchange or your money back?"
      },
      {
        speaker: "user",
        prompt: "Say: I want an exchange",
        correctSentence: "Vull un canvi",
        wordBank: ["Vull", "un", "canvi", "diners", "tornar", "nou"]
      },
      {
        speaker: "employee",
        text: "Molt bé. Ara mateix et faig el canvi. Un moment.",
        english: "Very good. I'll do the exchange right now. One moment."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "perfecte", "bé", "d'acord", "adéu"]
      },
      {
        speaker: "employee",
        text: "Aquí tens el producte nou. Espero que funcioni bé!",
        english: "Here's the new product. I hope it works well!"
      },
      {
        speaker: "user",
        prompt: "Say: Thank you very much",
        correctSentence: "Moltes gràcies",
        wordBank: ["Moltes", "gràcies", "adéu", "perfecte", "bé"]
      }
    ]
  },
  {
    id: 18,
    title: "Emergency Situations",
    unlockAfterLesson: 30,
    icon: "🚨",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "operator",
        text: "Emergències. Què ha passat?",
        english: "Emergencies. What happened?"
      },
      {
        speaker: "user",
        prompt: "Say: I need help",
        correctSentence: "Necessito ajuda",
        wordBank: ["Necessito", "ajuda", "urgent", "ràpid", "emergència", "problema"]
      },
      {
        speaker: "operator",
        text: "D'acord manté la calma. On ets ara?",
        english: "Okay stay calm. Where are you now?"
      },
      {
        speaker: "user",
        prompt: "Say: I'm on Gran Via street",
        correctSentence: "Sóc al carrer Gran Via",
        wordBank: ["Sóc", "al", "carrer", "Gran Via", "plaça", "número"]
      },
      {
        speaker: "operator",
        text: "Molt bé. Hi ha algú ferit?",
        english: "Very good. Is anyone injured?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes there's an injured person",
        correctSentence: "Sí hi ha una persona ferida",
        wordBank: ["Sí", "hi ha", "una", "persona", "ferida", "mal"]
      },
      {
        speaker: "operator",
        text: "Entesos. L'ambulància està de camí. Què ha passat exactament?",
        english: "Understood. The ambulance is on the way. What happened exactly?"
      },
      {
        speaker: "user",
        prompt: "Say: He fell",
        correctSentence: "Ha caigut",
        wordBank: ["Ha", "caigut", "accident", "cotxe", "mal", "sang"]
      },
      {
        speaker: "operator",
        text: "D'acord. Queda't allà i espera l'ambulància. Cinc minuts.",
        english: "Okay. Stay there and wait for the ambulance. Five minutes."
      },
      {
        speaker: "user",
        prompt: "Say: Okay thank you",
        correctSentence: "D'acord gràcies",
        wordBank: ["D'acord", "gràcies", "ràpid", "si us plau", "bé"]
      },
      {
        speaker: "operator",
        text: "Mantingues la calma. Tot anirà bé. No penguis.",
        english: "Stay calm. Everything will be fine. Don't hang up."
      },
      {
        speaker: "user",
        prompt: "Say: I understand",
        correctSentence: "Ho entenc",
        wordBank: ["Ho", "entenc", "bé", "d'acord", "sí", "gràcies"]
      }
    ]
  },
  {
    id: 19,
    title: "Booking Train Tickets",
    unlockAfterLesson: 32,
    icon: "🚆",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "agent",
        text: "Bon dia! On vols anar?",
        english: "Good morning! Where do you want to go?"
      },
      {
        speaker: "user",
        prompt: "Say: To Madrid please",
        correctSentence: "A Madrid si us plau",
        wordBank: ["A", "Madrid", "si us plau", "Barcelona", "València", "Girona"]
      },
      {
        speaker: "agent",
        text: "Perfecte! Quin dia vols viatjar?",
        english: "Perfect! Which day do you want to travel?"
      },
      {
        speaker: "user",
        prompt: "Say: Next Friday",
        correctSentence: "Divendres que ve",
        wordBank: ["Divendres", "que ve", "demà", "avui", "dilluns", "dissabte"]
      },
      {
        speaker: "agent",
        text: "D'acord. Hi ha tren a les nou i a les dues. Quin prefereixes?",
        english: "Okay. There's a train at nine and at two. Which do you prefer?"
      },
      {
        speaker: "user",
        prompt: "Say: At nine in the morning",
        correctSentence: "A les nou del matí",
        wordBank: ["A", "les", "nou", "del", "matí", "tarda", "dues"]
      },
      {
        speaker: "agent",
        text: "Molt bé. Vols anar i tornar o només anada?",
        english: "Very good. Do you want round trip or just one way?"
      },
      {
        speaker: "user",
        prompt: "Say: Round trip please",
        correctSentence: "Anar i tornar si us plau",
        wordBank: ["Anar", "i", "tornar", "si us plau", "només", "anada"]
      },
      {
        speaker: "agent",
        text: "Perfecte! Són seixanta euros. Com vols pagar?",
        english: "Perfect! That's sixty euros. How do you want to pay?"
      },
      {
        speaker: "user",
        prompt: "Say: By card",
        correctSentence: "Amb targeta",
        wordBank: ["Amb", "targeta", "efectiu", "diners", "cash", "pagar"]
      },
      {
        speaker: "agent",
        text: "Molt bé. Aquí tens els bitllets. Bon viatge!",
        english: "Very good. Here are your tickets. Have a good trip!"
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "bon dia", "perfecte"]
      }
    ]
  },
  {
    id: 20,
    title: "At the Gym",
    unlockAfterLesson: 35,
    icon: "💪",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "trainer",
        text: "Hola! Vols fer-te soci del gimnàs?",
        english: "Hello! Do you want to become a gym member?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "si us plau", "No", "potser", "informació", "preu"]
      },
      {
        speaker: "trainer",
        text: "Genial! Tenim quota mensual o anual. Quina prefereixes?",
        english: "Great! We have monthly or annual membership. Which do you prefer?"
      },
      {
        speaker: "user",
        prompt: "Say: Monthly",
        correctSentence: "Mensual",
        wordBank: ["Mensual", "Anual", "mes", "any", "quota", "preu"]
      },
      {
        speaker: "trainer",
        text: "Perfecte! La quota mensual són quaranta euros. T'interessa?",
        english: "Perfect! The monthly fee is forty euros. Are you interested?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I'm interested",
        correctSentence: "Sí m'interessa",
        wordBank: ["Sí", "m'interessa", "bé", "d'acord", "perfecte", "massa car"]
      },
      {
        speaker: "trainer",
        text: "Molt bé! Quins dies vols venir a entrenar?",
        english: "Very good! Which days do you want to come train?"
      },
      {
        speaker: "user",
        prompt: "Say: Monday and Thursday",
        correctSentence: "Dilluns i dijous",
        wordBank: ["Dilluns", "i", "dijous", "dimarts", "divendres", "dissabte"]
      },
      {
        speaker: "trainer",
        text: "Perfecte! Vols classes dirigides o sala lliure?",
        english: "Perfect! Do you want group classes or free gym access?"
      },
      {
        speaker: "user",
        prompt: "Say: Free gym access",
        correctSentence: "Sala lliure",
        wordBank: ["Sala", "lliure", "classes", "dirigides", "entrenador", "ambdues"]
      },
      {
        speaker: "trainer",
        text: "Genial! Pots començar demà mateix. Benvingut!",
        english: "Great! You can start tomorrow. Welcome!"
      },
      {
        speaker: "user",
        prompt: "Say: Thank you very much",
        correctSentence: "Moltes gràcies",
        wordBank: ["Moltes", "gràcies", "perfecte", "genial", "adéu"]
      }
    ]
  },
  {
    id: 21,
    title: "Visiting the Vet",
    unlockAfterLesson: 37,
    icon: "🐕",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "vet",
        text: "Bon dia! Què li passa a la teva mascota?",
        english: "Good morning! What's wrong with your pet?"
      },
      {
        speaker: "user",
        prompt: "Say: My dog is sick",
        correctSentence: "El meu gos està malalt",
        wordBank: ["El", "meu", "gos", "està", "malalt", "gat", "ferida"]
      },
      {
        speaker: "vet",
        text: "Ho sento. Quins símptomes té?",
        english: "I'm sorry. What symptoms does it have?"
      },
      {
        speaker: "user",
        prompt: "Say: He doesn't want to eat",
        correctSentence: "No vol menjar",
        wordBank: ["No", "vol", "menjar", "beure", "juga", "dorm", "camina"]
      },
      {
        speaker: "vet",
        text: "Entenc. Des de quan està així?",
        english: "I understand. Since when has it been like this?"
      },
      {
        speaker: "user",
        prompt: "Say: Since yesterday",
        correctSentence: "Des d'ahir",
        wordBank: ["Des", "d'ahir", "avui", "fa dos dies", "aquesta setmana"]
      },
      {
        speaker: "vet",
        text: "D'acord. Té febre o vòmits?",
        english: "Okay. Does it have a fever or vomiting?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes a bit of fever",
        correctSentence: "Sí una mica de febre",
        wordBank: ["Sí", "una mica", "de", "febre", "vòmits", "No"]
      },
      {
        speaker: "vet",
        text: "Molt bé. Li faré una revisió. Puc agafar-lo?",
        english: "Very good. I'll do an examination. Can I hold him?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes of course",
        correctSentence: "Sí és clar",
        wordBank: ["Sí", "és clar", "perfecte", "amb compte", "gràcies"]
      },
      {
        speaker: "vet",
        text: "Necessita antibiòtics. Aquí tens la recepta.",
        english: "He needs antibiotics. Here's the prescription."
      },
      {
        speaker: "user",
        prompt: "Say: How much is it?",
        correctSentence: "Quan costa?",
        wordBank: ["Quan", "costa?", "gràcies", "on", "farmàcia", "preu"]
      }
    ]
  },
  {
    id: 22,
    title: "At the Post Office",
    unlockAfterLesson: 40,
    icon: "📮",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "clerk",
        text: "Bon dia! Què necessites?",
        english: "Good morning! What do you need?"
      },
      {
        speaker: "user",
        prompt: "Say: I want to send a package",
        correctSentence: "Vull enviar un paquet",
        wordBank: ["Vull", "enviar", "un", "paquet", "carta", "segell"]
      },
      {
        speaker: "clerk",
        text: "Perfecte! On el vols enviar?",
        english: "Perfect! Where do you want to send it?"
      },
      {
        speaker: "user",
        prompt: "Say: To England",
        correctSentence: "A Anglaterra",
        wordBank: ["A", "Anglaterra", "França", "Alemanya", "Espanya", "Estats Units"]
      },
      {
        speaker: "clerk",
        text: "D'acord. Vols enviament normal o urgent?",
        english: "Okay. Do you want regular or express delivery?"
      },
      {
        speaker: "user",
        prompt: "Say: Express please",
        correctSentence: "Urgent si us plau",
        wordBank: ["Urgent", "si us plau", "Normal", "ràpid", "lent", "estàndard"]
      },
      {
        speaker: "clerk",
        text: "Molt bé. Pesa tres quilos. Són vint-i-cinc euros.",
        english: "Very good. It weighs three kilos. That's twenty-five euros."
      },
      {
        speaker: "user",
        prompt: "Ask: How long does it take?",
        correctSentence: "Quan triga?",
        wordBank: ["Quan", "triga?", "temps", "dies", "costa", "arriba"]
      },
      {
        speaker: "clerk",
        text: "Tres o quatre dies laborables.",
        english: "Three or four business days."
      },
      {
        speaker: "user",
        prompt: "Say: Perfect",
        correctSentence: "Perfecte",
        wordBank: ["Perfecte", "Bé", "D'acord", "Gràcies", "Molt bé"]
      },
      {
        speaker: "clerk",
        text: "Aquí tens el rebut. Pots seguir l'enviament online.",
        english: "Here's your receipt. You can track the shipment online."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "perfecte", "bon dia"]
      }
    ]
  },
  {
    id: 23,
    title: "Renting a Car",
    unlockAfterLesson: 42,
    icon: "🚗",
    difficulty: "Intermediate",
    turns: [
      {
        speaker: "agent",
        text: "Bon dia! Vols llogar un cotxe?",
        english: "Good morning! Do you want to rent a car?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "si us plau", "No", "informació", "preu", "tipus"]
      },
      {
        speaker: "agent",
        text: "Perfecte! Per quants dies?",
        english: "Perfect! For how many days?"
      },
      {
        speaker: "user",
        prompt: "Say: For three days",
        correctSentence: "Per tres dies",
        wordBank: ["Per", "tres", "dies", "quatre", "setmana", "mes"]
      },
      {
        speaker: "agent",
        text: "Molt bé. Quin tipus de cotxe vols? Petit mitjà o gran?",
        english: "Very good. What type of car do you want? Small medium or large?"
      },
      {
        speaker: "user",
        prompt: "Say: A small car",
        correctSentence: "Un cotxe petit",
        wordBank: ["Un", "cotxe", "petit", "mitjà", "gran", "automàtic"]
      },
      {
        speaker: "agent",
        text: "D'acord. Vols automàtic o manual?",
        english: "Okay. Do you want automatic or manual?"
      },
      {
        speaker: "user",
        prompt: "Say: Automatic",
        correctSentence: "Automàtic",
        wordBank: ["Automàtic", "Manual", "no importa", "prefereixo", "millor"]
      },
      {
        speaker: "agent",
        text: "Perfecte! Són seixanta euros per dia. Vols assegurança extra?",
        english: "Perfect! It's sixty euros per day. Do you want extra insurance?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes I want insurance",
        correctSentence: "Sí vull assegurança",
        wordBank: ["Sí", "vull", "assegurança", "No", "extra", "completa"]
      },
      {
        speaker: "agent",
        text: "Molt bé. Necessito el carnet de conduir i la targeta de crèdit.",
        english: "Very good. I need your driver's license and credit card."
      },
      {
        speaker: "user",
        prompt: "Say: Here they are",
        correctSentence: "Aquí els tens",
        wordBank: ["Aquí", "els", "tens", "estan", "gràcies", "perfecte"]
      }
    ]
  },
  {
    id: 24,
    title: "At a Museum",
    unlockAfterLesson: 45,
    icon: "🎨",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "clerk",
        text: "Bona tarda! Vols una entrada?",
        english: "Good afternoon! Do you want a ticket?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes please",
        correctSentence: "Sí si us plau",
        wordBank: ["Sí", "si us plau", "No", "entrada", "visita", "preu"]
      },
      {
        speaker: "clerk",
        text: "Perfecte! Vols l'audioguia també?",
        english: "Perfect! Do you want the audio guide too?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes how much is it?",
        correctSentence: "Sí quan costa?",
        wordBank: ["Sí", "quan", "costa?", "No", "preu", "gràcies"]
      },
      {
        speaker: "clerk",
        text: "L'entrada són quinze euros i l'audioguia cinc euros més.",
        english: "The ticket is fifteen euros and the audio guide five euros more."
      },
      {
        speaker: "user",
        prompt: "Say: Okay I'll take both",
        correctSentence: "D'acord vull les dues",
        wordBank: ["D'acord", "vull", "les", "dues", "només", "entrada"]
      },
      {
        speaker: "clerk",
        text: "Molt bé! Ets estudiant? Hi ha descompte.",
        english: "Very good! Are you a student? There's a discount."
      },
      {
        speaker: "user",
        prompt: "Say: No I'm not a student",
        correctSentence: "No no sóc estudiant",
        wordBank: ["No", "sóc", "estudiant", "Sí", "carnet", "descompte"]
      },
      {
        speaker: "clerk",
        text: "Cap problema! Són vint euros en total. Com vols pagar?",
        english: "No problem! That's twenty euros total. How do you want to pay?"
      },
      {
        speaker: "user",
        prompt: "Say: By card",
        correctSentence: "Amb targeta",
        wordBank: ["Amb", "targeta", "efectiu", "diners", "cash", "pagar"]
      },
      {
        speaker: "clerk",
        text: "Perfecte! Aquí tens l'entrada i l'audioguia. Gaudeix de la visita!",
        english: "Perfect! Here's your ticket and audio guide. Enjoy the visit!"
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "perfecte", "bon dia"]
      }
    ]
  },
  {
    id: 25,
    title: "Attending a Concert",
    unlockAfterLesson: 48,
    icon: "🎵",
    difficulty: "Beginner",
    turns: [
      {
        speaker: "usher",
        text: "Bona tarda! Puc veure la teva entrada?",
        english: "Good afternoon! Can I see your ticket?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes here it is",
        correctSentence: "Sí aquí la tens",
        wordBank: ["Sí", "aquí", "la", "tens", "entrada", "bitllet"]
      },
      {
        speaker: "usher",
        text: "Perfecte! Ets a la fila quinze seient vint.",
        english: "Perfect! You're in row fifteen seat twenty."
      },
      {
        speaker: "user",
        prompt: "Ask: Where is row fifteen?",
        correctSentence: "On és la fila quinze?",
        wordBank: ["On", "és", "la", "fila", "quinze?", "seient", "aquí"]
      },
      {
        speaker: "usher",
        text: "A l'esquerra al fons. T'acompanyo.",
        english: "On the left at the back. I'll take you there."
      },
      {
        speaker: "user",
        prompt: "Say: Thank you very much",
        correctSentence: "Moltes gràcies",
        wordBank: ["Moltes", "gràcies", "perfecte", "bé", "amable"]
      },
      {
        speaker: "usher",
        text: "De res! Vols alguna cosa de beure?",
        english: "You're welcome! Do you want something to drink?"
      },
      {
        speaker: "user",
        prompt: "Say: Yes a water please",
        correctSentence: "Sí una aigua si us plau",
        wordBank: ["Sí", "una", "aigua", "si us plau", "cervesa", "vi"]
      },
      {
        speaker: "usher",
        text: "Perfecte! El bar és a la dreta. Són tres euros.",
        english: "Perfect! The bar is on the right. It's three euros."
      },
      {
        speaker: "user",
        prompt: "Ask: What time does it start?",
        correctSentence: "A quina hora comença?",
        wordBank: ["A", "quina", "hora", "comença?", "acaba", "dura"]
      },
      {
        speaker: "usher",
        text: "A les nou en punt. Gaudeix del concert!",
        english: "At nine o'clock sharp. Enjoy the concert!"
      },
      {
        speaker: "user",
        prompt: "Say: Thank you",
        correctSentence: "Gràcies",
        wordBank: ["Gràcies", "adéu", "perfecte", "genial"]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
// NEW CONVERSATIONS (C26-C55) - 30 CONVERSATIONS
// Add these to conversations.js after conversation 25
// ═══════════════════════════════════════════════════════════

// ─── CONVERSATION 26: First Date ───────────────────────────
{
  id: 26,
  title: "💕 First Date",
  unlocksAfter: 50,
  difficulty: "intermediate",
  turns: [
    { speaker: "you", text: "Hola! Estic content de conèixer-te finalment.", translation: "Hi! I'm happy to finally meet you.", options: [] },
    { speaker: "date", text: "Hola! Jo també. Aquest restaurant sembla molt acollidor.", translation: "Hi! Me too. This restaurant looks very cozy.", options: [] },
    { speaker: "you", text: "", translation: "What do you like to do in your free time?", options: ["Què t'agrada fer en el teu temps lliure?", "On vius?", "Tens germans?"] },
    { speaker: "date", text: "M'encanta llegir i anar a la platja. I tu?", translation: "I love reading and going to the beach. And you?", options: [] },
    { speaker: "you", text: "", translation: "I like hiking and trying new restaurants.", options: ["M'agrada fer excursions i provar restaurants nous.", "No faig gaire.", "Treballo molt."] },
    { speaker: "date", text: "Genial! Hauríem d'anar a fer una excursió junts algun dia.", translation: "Great! We should go hiking together someday.", options: [] },
    { speaker: "you", text: "", translation: "I'd love to! Would you like to order?", options: ["M'encantaria! Vols demanar?", "Potser algun dia.", "Ja veurem."] },
    { speaker: "date", text: "Sí, el suquet de peix té molt bona pinta.", translation: "Yes, the fish stew looks really good.", options: [] }
  ]
},

// ─── CONVERSATION 27: Job Interview ────────────────────────
{
  id: 27,
  title: "💼 Job Interview",
  unlocksAfter: 51,
  difficulty: "advanced",
  turns: [
    { speaker: "interviewer", text: "Bon dia! Siè's i posa't còmode/a.", translation: "Good morning! Sit down and make yourself comfortable.", options: [] },
    { speaker: "you", text: "", translation: "Good morning. Thank you for the opportunity.", options: ["Bon dia. Gràcies per l'oportunitat.", "Hola.", "Estic nerviós/a."] },
    { speaker: "interviewer", text: "Explica'm una mica sobre la teva experiència professional.", translation: "Tell me a bit about your professional experience.", options: [] },
    { speaker: "you", text: "", translation: "I've worked in marketing for five years.", options: ["He treballat en màrqueting durant cinc anys.", "No tinc gaire experiència.", "Sóc molt bo/a."] },
    { speaker: "interviewer", text: "I per què vols treballar amb nosaltres?", translation: "And why do you want to work with us?", options: [] },
    { speaker: "you", text: "", translation: "Your company is a leader in innovation.", options: ["La vostra empresa és líder en innovació.", "Necessito feina.", "Està a prop de casa."] },
    { speaker: "interviewer", text: "Molt bé. Quines són les teves expectatives salarials?", translation: "Very good. What are your salary expectations?", options: [] },
    { speaker: "you", text: "", translation: "I'm flexible, but I'd like to discuss based on the full package.", options: ["Sóc flexible, però m'agradaria discutir-ho segons el paquet complet.", "Vull molt diners.", "No ho sé."] }
  ]
},

// ─── CONVERSATION 28: At the Barber/Hairdresser ────────────
{
  id: 28,
  title: "✂️ At the Barber",
  unlocksAfter: 53,
  difficulty: "intermediate",
  turns: [
    { speaker: "barber", text: "Hola! Què vols fer avui?", translation: "Hi! What would you like to do today?", options: [] },
    { speaker: "you", text: "", translation: "I'd like a trim, please.", options: ["Voldria un retoc, si us plau.", "Talla-ho tot.", "No ho sé."] },
    { speaker: "barber", text: "Quant de llarg vols deixar-ho?", translation: "How long do you want to leave it?", options: [] },
    { speaker: "you", text: "", translation: "Just a few centimeters shorter.", options: ["Només uns centímetres més curt.", "Molt curt.", "Com tu vulguis."] },
    { speaker: "barber", text: "Vol que et faci la barba també?", translation: "Would you like me to do your beard too?", options: [] },
    { speaker: "you", text: "", translation: "Yes, just shape it a bit.", options: ["Sí, només arregla-la una mica.", "No, gràcies.", "Afeita-la del tot."] },
    { speaker: "barber", text: "Perfecte. Ara mateix començo.", translation: "Perfect. I'll start right now.", options: [] }
  ]
},

// ─── CONVERSATION 29: Making Travel Plans ──────────────────
{
  id: 29,
  title: "✈️ Making Travel Plans",
  unlocksAfter: 54,
  difficulty: "intermediate",
  turns: [
    { speaker: "friend", text: "Hola! Estem pensant en anar a Menorca aquest estiu. T'animes?", translation: "Hi! We're thinking of going to Menorca this summer. Want to join?", options: [] },
    { speaker: "you", text: "", translation: "That sounds great! When are you thinking?", options: ["Sona genial! Quan ho tens pensat?", "No puc.", "Ja veuré."] },
    { speaker: "friend", text: "Al juliol, dues setmanes. Llogaríem una casa a la costa.", translation: "In July, two weeks. We'd rent a house on the coast.", options: [] },
    { speaker: "you", text: "", translation: "How much would it cost per person?", options: ["Quant costaria per persona?", "És massa car.", "Perfecte."] },
    { speaker: "friend", text: "Uns cinc-cents euros tot inclòs. Vols que et reservem plaça?", translation: "About five hundred euros all included. Should we reserve a spot for you?", options: [] },
    { speaker: "you", text: "", translation: "Yes, count me in!", options: ["Sí, compta amb mi!", "Ho he de pensar.", "No gràcies."] },
    { speaker: "friend", text: "Genial! T'enviaré tots els detalls per correu.", translation: "Great! I'll send you all the details by email.", options: [] }
  ]
},

// ─── CONVERSATION 30: Reporting a Problem to Landlord ──────
{
  id: 30,
  title: "🏠 Landlord Problem",
  unlocksAfter: 55,
  difficulty: "intermediate",
  turns: [
    { speaker: "you", text: "", translation: "Hello, I have a problem with the heating.", options: ["Hola, tinc un problema amb la calefacció.", "Hola.", "Tot va bé."] },
    { speaker: "landlord", text: "Hola! Què passa exactament?", translation: "Hi! What's happening exactly?", options: [] },
    { speaker: "you", text: "", translation: "It hasn't been working for three days.", options: ["Fa tres dies que no funciona.", "No escalfa gaire.", "Està bé."] },
    { speaker: "landlord", text: "Això és greu. Trucaré el tècnic avui mateix.", translation: "That's serious. I'll call the technician today.", options: [] },
    { speaker: "you", text: "", translation: "Thank you. When can they come?", options: ["Gràcies. Quan pot venir?", "Perfecte.", "D'acord."] },
    { speaker: "landlord", text: "Demà al matí entre les 9 i les 12. Et sembla bé?", translation: "Tomorrow morning between 9 and 12. Is that okay?", options: [] },
    { speaker: "you", text: "", translation: "Yes, I'll be home. Thank you.", options: ["Sí, seré a casa. Gràcies.", "No puc.", "Potser."] }
  ]
},

// ─── CONVERSATION 31: At the Gym (Personal Trainer) ────────
{
  id: 31,
  title: "💪 Personal Trainer",
  unlocksAfter: 56,
  difficulty: "intermediate",
  turns: [
    { speaker: "trainer", text: "Hola! Vols que et faci una rutina personalitzada?", translation: "Hi! Would you like me to make you a personalized routine?", options: [] },
    { speaker: "you", text: "", translation: "Yes, I want to improve my endurance.", options: ["Sí, vull millorar la meva resistència.", "No gràcies.", "No ho sé."] },
    { speaker: "trainer", text: "Quants cops per setmana pots entrenar?", translation: "How many times per week can you train?", options: [] },
    { speaker: "you", text: "", translation: "Three or four times.", options: ["Tres o quatre cops.", "Cada dia.", "Un cop."] },
    { speaker: "trainer", text: "Perfecte. Combinarem cardio amb peses. Tens alguna lesió?", translation: "Perfect. We'll combine cardio with weights. Do you have any injuries?", options: [] },
    { speaker: "you", text: "", translation: "No, I'm in good shape.", options: ["No, estic en bona forma.", "Em fa mal el genoll.", "Sí, algunes."] },
    { speaker: "trainer", text: "Molt bé! Començarem dimarts que ve.", translation: "Very good! We'll start next Tuesday.", options: [] }
  ]
},

// CONTINUING WITH MORE CONVERSATIONS...

// ─── CONVERSATION 32: Emergency at Hospital ────────────────
{
  id: 32,
  title: "🏥 Hospital Emergency",
  unlocksAfter: 57,
  difficulty: "advanced",
  turns: [
    { speaker: "nurse", text: "Bona tarda. Què li passa?", translation: "Good afternoon. What's wrong?", options: [] },
    { speaker: "you", text: "", translation: "I fell and I think I broke my ankle.", options: ["M'he caigut i crec que m'he trencat el turmell.", "Em fa mal.", "Estic bé."] },
    { speaker: "nurse", text: "D'acord. Pot caminar o necessita cadira de rodes?", translation: "Okay. Can you walk or do you need a wheelchair?", options: [] },
    { speaker: "you", text: "", translation: "I need a wheelchair, please.", options: ["Necessito cadira de rodes, si us plau.", "Puc caminar.", "No sé."] },
    { speaker: "nurse", text: "Ara mateix. Té la targeta sanitària?", translation: "Right away. Do you have your health card?", options: [] },
    { speaker: "you", text: "", translation: "Yes, here it is.", options: ["Sí, aquí la té.", "No, l'he oblidat.", "No en tinc."] },
    { speaker: "nurse", text: "Gràcies. El metge el veurà en breu.", translation: "Thank you. The doctor will see you shortly.", options: [] }
  ]
},

// ─── CONVERSATION 33: Negotiating Salary ───────────────────
{
  id: 33,
  title: "💰 Salary Negotiation",
  unlocksAfter: 58,
  difficulty: "advanced",
  turns: [
    { speaker: "boss", text: "Volia parlar amb tu sobre el teu sou.", translation: "I wanted to talk to you about your salary.", options: [] },
    { speaker: "you", text: "", translation: "Thank you. I also wanted to discuss this.", options: ["Gràcies. Jo també ho volia comentar.", "D'acord.", "Sí."] },
    { speaker: "boss", text: "Crec que mereixies un augment. Què et semblaria un 5%?", translation: "I think you deserve a raise. What would you think about 5%?", options: [] },
    { speaker: "you", text: "", translation: "I appreciate it, but I was hoping for 10%.", options: ["Ho agraeixo, però esperava un 10%.", "Perfecte.", "És massa poc."] },
    { speaker: "boss", text: "És molt. Pots justificar-ho?", translation: "That's a lot. Can you justify it?", options: [] },
    { speaker: "you", text: "", translation: "I've increased sales by 30% this year.", options: ["He augmentat les vendes un 30% aquest any.", "Treballo molt.", "Ho mereixo."] },
    { speaker: "boss", text: "Tens raó. Et puc oferir un 8%. Et sembla bé?", translation: "You're right. I can offer you 8%. Does that work?", options: [] },
    { speaker: "you", text: "", translation: "Yes, I accept. Thank you.", options: ["Sí, accepto. Gràcies.", "Vull més.", "Ho pensaré."] }
  ]
},

// ─── CONVERSATION 34: Booking a Hotel Room ─────────────────
{
  id: 34,
  title: "🏨 Hotel Booking",
  unlocksAfter: 59,
  difficulty: "intermediate",
  turns: [
    { speaker: "receptionist", text: "Bon dia! En què puc ajudar-lo?", translation: "Good morning! How can I help you?", options: [] },
    { speaker: "you", text: "", translation: "I'd like to book a double room for three nights.", options: ["Voldria reservar una habitació doble per tres nits.", "Vull una habitació.", "Tinc una reserva."] },
    { speaker: "receptionist", text: "Quines dates, si us plau?", translation: "What dates, please?", options: [] },
    { speaker: "you", text: "", translation: "From the 15th to the 18th of March.", options: ["Del 15 al 18 de març.", "Aquest cap de setmana.", "No ho sé."] },
    { speaker: "receptionist", text: "Perfecte. Amb vistes al mar o al carrer?", translation: "Perfect. With sea view or street view?", options: [] },
    { speaker: "you", text: "", translation: "Sea view, please. How much is it?", options: ["Vistes al mar, si us plau. Quant costa?", "El més barat.", "M'és igual."] },
    { speaker: "receptionist", text: "120 euros per nit, amb esmorzar inclòs.", translation: "120 euros per night, with breakfast included.", options: [] },
    { speaker: "you", text: "", translation: "Perfect, I'll take it.", options: ["Perfecte, la reservo.", "És massa car.", "Ho penso."] }
  ]
},

// ─── CONVERSATION 35: Meeting the In-Laws ──────────────────
{
  id: 35,
  title: "👨‍👩‍👧 Meeting In-Laws",
  unlocksAfter: 60,
  difficulty: "intermediate",
  turns: [
    { speaker: "mother_in_law", text: "Hola! Passa, passa! Estem molt contents de conèixer-te.", translation: "Hi! Come in, come in! We're very happy to meet you.", options: [] },
    { speaker: "you", text: "", translation: "Thank you for inviting me. Your home is beautiful.", options: ["Gràcies per convidar-me. La vostra casa és preciosa.", "Hola.", "Gràcies."] },
    { speaker: "mother_in_law", text: "Molt amable! Seu-te. T'agradaria beure alguna cosa?", translation: "Very kind! Sit down. Would you like to drink something?", options: [] },
    { speaker: "you", text: "", translation: "Water, please. Thank you.", options: ["Aigua, si us plau. Gràcies.", "Res, gràcies.", "Un vi."] },
    { speaker: "father_in_law", text: "La nostra filla ens ha parlat molt bé de tu. A què et dediques?", translation: "Our daughter has spoken very well of you. What do you do?", options: [] },
    { speaker: "you", text: "", translation: "I work in technology as a developer.", options: ["Treballo en tecnologia com a desenvolupador.", "Treballo.", "Faig coses."] },
    { speaker: "father_in_law", text: "Interessant! El dinar ja està gairebé llest.", translation: "Interesting! Lunch is almost ready.", options: [] }
  ]
},

// ─── CONVERSATION 36: At the Mechanic ──────────────────────
{
  id: 36,
  title: "🔧 Car Mechanic",
  unlocksAfter: 61,
  difficulty: "intermediate",
  turns: [
    { speaker: "mechanic", text: "Hola! Què li passa al cotxe?", translation: "Hi! What's wrong with the car?", options: [] },
    { speaker: "you", text: "", translation: "It makes a strange noise when I brake.", options: ["Fa un soroll estrany quan freno.", "No funciona.", "No ho sé."] },
    { speaker: "mechanic", text: "D'acord. Quan va començar?", translation: "Okay. When did it start?", options: [] },
    { speaker: "you", text: "", translation: "About a week ago.", options: ["Fa una setmana més o menys.", "Ahir.", "Fa temps."] },
    { speaker: "mechanic", text: "Sembla que són les pastilles de fre. Hauré de mirar-ho.", translation: "It sounds like brake pads. I'll have to check it.", options: [] },
    { speaker: "you", text: "", translation: "How long will it take?", options: ["Quant de temps trigarà?", "És urgent.", "D'acord."] },
    { speaker: "mechanic", text: "Un parell d'hores. El puc deixar aquí?", translation: "A couple of hours. Can you leave it here?", options: [] },
    { speaker: "you", text: "", translation: "Yes, I'll come back at 5.", options: ["Sí, tornaré a les 5.", "No puc.", "Esperaré."] }
  ]
},

// ─── CONVERSATION 37: Wine Tasting ─────────────────────────
{
  id: 37,
  title: "🍷 Wine Tasting",
  unlocksAfter: 62,
  difficulty: "advanced",
  turns: [
    { speaker: "sommelier", text: "Benvinguts a la nostra bodega! Avui tastarem cinc vins del Penedès.", translation: "Welcome to our winery! Today we'll taste five Penedès wines.", options: [] },
    { speaker: "you", text: "", translation: "Great! I don't know much about wine.", options: ["Genial! No sé gaire de vins.", "Perfecte.", "Sóc expert."] },
    { speaker: "sommelier", text: "No et preocupis. Començarem amb un blanc jove.", translation: "Don't worry. We'll start with a young white.", options: [] },
    { speaker: "you", text: "", translation: "What grapes does it have?", options: ["Quins raïms té?", "M'agrada.", "És bo?"] },
    { speaker: "sommelier", text: "Xarel·lo i macabeu. És fresc i lleuger. Què en penses?", translation: "Xarel·lo and macabeu. It's fresh and light. What do you think?", options: [] },
    { speaker: "you", text: "", translation: "It's very smooth. I like it.", options: ["És molt suau. M'agrada.", "No m'agrada.", "Està bé."] },
    { speaker: "sommelier", text: "Ara provarem un negre més corpulent.", translation: "Now we'll try a fuller-bodied red.", options: [] }
  ]
},

// ─── CONVERSATION 38: Networking Event ─────────────────────
{
  id: 38,
  title: "🤝 Networking Event",
  unlocksAfter: 63,
  difficulty: "advanced",
  turns: [
    { speaker: "professional", text: "Hola! No ens coneixem, oi? Sóc en Marc.", translation: "Hi! We don't know each other, right? I'm Marc.", options: [] },
    { speaker: "you", text: "", translation: "Nice to meet you. I'm [name]. What do you do?", options: ["Encantat/da. Sóc [nom]. A què et dediques?", "Hola.", "Sí, ens coneixem."] },
    { speaker: "professional", text: "Sóc consultor de màrqueting digital. I tu?", translation: "I'm a digital marketing consultant. And you?", options: [] },
    { speaker: "you", text: "", translation: "I work in software development.", options: ["Treballo en desenvolupament de programari.", "També faig màrqueting.", "No treballo."] },
    { speaker: "professional", text: "Interessant! Busquem algú per desenvolupar una app. T'interessaria?", translation: "Interesting! We're looking for someone to develop an app. Would you be interested?", options: [] },
    { speaker: "you", text: "", translation: "Definitely. Can we exchange cards?", options: ["Definitivament. Podem intercanviar targetes?", "Potser.", "No gràcies."] },
    { speaker: "professional", text: "Clar! T'enviaré un correu demà amb els detalls.", translation: "Of course! I'll send you an email tomorrow with details.", options: [] }
  ]
},

// ─── CONVERSATION 39: Discussing Politics (Careful) ────────
{
  id: 39,
  title: "🗳️ Political Discussion",
  unlocksAfter: 64,
  difficulty: "advanced",
  turns: [
    { speaker: "friend", text: "Què opines sobre les últimes eleccions?", translation: "What do you think about the recent elections?", options: [] },
    { speaker: "you", text: "", translation: "It's a complicated topic. I prefer not to discuss it.", options: ["És un tema complicat. Prefereixo no discutir-ho.", "No m'interessa.", "Tinc una opinió clara."] },
    { speaker: "friend", text: "Entenc. Però creus que les coses milloraran?", translation: "I understand. But do you think things will improve?", options: [] },
    { speaker: "you", text: "", translation: "I hope so. We need stability.", options: ["Això espero. Necessitem estabilitat.", "No ho crec.", "Segur que sí."] },
    { speaker: "friend", text: "Tens raó. Canviem de tema. T'agrada el futbol?", translation: "You're right. Let's change the subject. Do you like football?", options: [] },
    { speaker: "you", text: "", translation: "Yes, I follow Barça.", options: ["Sí, segueixo el Barça.", "No m'agrada.", "Una mica."] },
    { speaker: "friend", text: "Jo també! Van jugar molt bé diumenge passat.", translation: "Me too! They played very well last Sunday.", options: [] }
  ]
},

// ─── CONVERSATION 40: Complaining About Neighbors ──────────
{
  id: 40,
  title: "🔊 Noisy Neighbors",
  unlocksAfter: 65,
  difficulty: "intermediate",
  turns: [
    { speaker: "you", text: "", translation: "Excuse me, can I speak with you for a moment?", options: ["Perdoni, puc parlar amb vostè un moment?", "Hola.", "Tinc un problema."] },
    { speaker: "neighbor", text: "Sí, clar. Què passa?", translation: "Yes, of course. What's wrong?", options: [] },
    { speaker: "you", text: "", translation: "The music is very loud at night.", options: ["La música està molt alta a la nit.", "Fas molt soroll.", "M'agrada la música."] },
    { speaker: "neighbor", text: "Oh, ho sento molt! No sabia que es sentia tant.", translation: "Oh, I'm very sorry! I didn't know it was so loud.", options: [] },
    { speaker: "you", text: "", translation: "Could you lower the volume after 11 pm?", options: ["Podria abaixar el volum després de les 11?", "Cal·lat!", "Gràcies."] },
    { speaker: "neighbor", text: "Per descomptat. Tinc tota la raó. No tornarà a passar.", translation: "Of course. You're absolutely right. It won't happen again.", options: [] },
    { speaker: "you", text: "", translation: "Thank you for understanding.", options: ["Gràcies per la comprensió.", "D'acord.", "Bé."] }
  ]
},

// ─── CONVERSATION 41: At a Catalan Festival ────────────────
{
  id: 41,
  title: "🎉 La Mercè Festival",
  unlocksAfter: 66,
  difficulty: "intermediate",
  turns: [
    { speaker: "local", text: "És el teu primer any a la Mercè?", translation: "Is this your first year at La Mercè?", options: [] },
    { speaker: "you", text: "", translation: "Yes! What should I see?", options: ["Sí! Què hauria de veure?", "No, ja hi he estat.", "Què és?"] },
    { speaker: "local", text: "Definitivament els castells a la plaça Sant Jaume. Són impressionants!", translation: "Definitely the castells at Plaça Sant Jaume. They're impressive!", options: [] },
    { speaker: "you", text: "", translation: "What time do they start?", options: ["A quina hora comencen?", "On és?", "Genial!"] },
    { speaker: "local", text: "A les sis de la tarda. També hi ha correfoc a les deu.", translation: "At six in the evening. There's also correfoc at ten.", options: [] },
    { speaker: "you", text: "", translation: "What's correfoc?", options: ["Què és el correfoc?", "Sona perillós.", "Hi aniré."] },
    { speaker: "local", text: "Gent disfressada de dimonis amb focs artificials. És molt divertit!", translation: "People dressed as devils with fireworks. It's very fun!", options: [] },
    { speaker: "you", text: "", translation: "That sounds amazing!", options: ["Sona increïble!", "Tinc por.", "Potser hi vaig."] }
  ]
},

// ─── CONVERSATION 42: Buying Property ──────────────────────
{
  id: 42,
  title: "🏡 Property Viewing",
  unlocksAfter: 67,
  difficulty: "advanced",
  turns: [
    { speaker: "agent", text: "Benvingut! Aquest és el pis. Com pot veure, té molt de llum natural.", translation: "Welcome! This is the apartment. As you can see, it has lots of natural light.", options: [] },
    { speaker: "you", text: "", translation: "It's very nice. How many square meters is it?", options: ["És molt maco. Quants metres quadrats té?", "M'agrada.", "És car?"] },
    { speaker: "agent", text: "Noranta metres quadrats. Tres habitacions i dos banys.", translation: "Ninety square meters. Three bedrooms and two bathrooms.", options: [] },
    { speaker: "you", text: "", translation: "Are the building fees included?", options: ["Les despeses de comunitat estan incloses?", "Quant costa?", "Hi ha ascensor?"] },
    { speaker: "agent", text: "No, són 80 euros al mes. Inclou aigua i manteniment.", translation: "No, they're 80 euros per month. Includes water and maintenance.", options: [] },
    { speaker: "you", text: "", translation: "Is the price negotiable?", options: ["El preu és negociable?", "És massa car.", "Ho compro."] },
    { speaker: "agent", text: "Hi ha una mica de marge. Faci'm una oferta.", translation: "There's a bit of room. Make me an offer.", options: [] }
  ]
},

// ─── CONVERSATION 43: Attending a Wedding ──────────────────
{
  id: 43,
  title: "💒 Wedding Guest",
  unlocksAfter: 68,
  difficulty: "intermediate",
  turns: [
    { speaker: "guest", text: "Hola! No ets amic/ga dels nuvis?", translation: "Hi! Aren't you a friend of the couple?", options: [] },
    { speaker: "you", text: "", translation: "Yes, I work with the groom.", options: ["Sí, treballo amb el nuvi.", "No els conec.", "Sóc familiar."] },
    { speaker: "guest", text: "Quina cerimònia tan bonica, oi?", translation: "What a beautiful ceremony, right?", options: [] },
    { speaker: "you", text: "", translation: "Yes, very emotional. Have you known them long?", options: ["Sí, molt emotiva. Fa temps que els coneixes?", "Sí.", "Ha estat llarga."] },
    { speaker: "guest", text: "Des de la universitat. Som amics des de fa quinze anys.", translation: "Since university. We've been friends for fifteen years.", options: [] },
    { speaker: "you", text: "", translation: "How nice! Shall we go to the reception?", options: ["Què bonic! Anem a la recepció?", "Genial.", "D'acord."] },
    { speaker: "guest", text: "Sí, ja tinc gana! Diuen que el menú és boníssim.", translation: "Yes, I'm already hungry! They say the menu is amazing.", options: [] }
  ]
},

// ─── CONVERSATION 44: Discussing Catalan Language ──────────
{
  id: 44,
  title: "📚 Language Learning",
  unlocksAfter: 69,
  difficulty: "advanced",
  turns: [
    { speaker: "teacher", text: "Com portes el català? Noto que has millorat molt.", translation: "How's your Catalan going? I notice you've improved a lot.", options: [] },
    { speaker: "you", text: "", translation: "Thank you! I practice every day.", options: ["Gràcies! Practico cada dia.", "Encara em costa.", "No ho sé."] },
    { speaker: "teacher", text: "Quina és la part més difícil per tu?", translation: "What's the hardest part for you?", options: [] },
    { speaker: "you", text: "", translation: "The subjunctive is complicated.", options: ["El subjuntiu és complicat.", "Tot m'és fàcil.", "La pronunciació."] },
    { speaker: "teacher", text: "És normal. Fins i tot per catalans és difícil! Llegeixes en català?", translation: "That's normal. Even for Catalans it's difficult! Do you read in Catalan?", options: [] },
    { speaker: "you", text: "", translation: "Yes, I read the news every morning.", options: ["Sí, llegeixo les notícies cada matí.", "No gaire.", "Només llibres."] },
    { speaker: "teacher", text: "Excel·lent! La lectura és clau per millorar.", translation: "Excellent! Reading is key to improving.", options: [] }
  ]
},

// ─── CONVERSATION 45: Breakup Conversation ─────────────────
{
  id: 45,
  title: "💔 Ending Relationship",
  unlocksAfter: 70,
  difficulty: "advanced",
  turns: [
    { speaker: "partner", text: "Hem de parlar. Sento que les coses no van bé.", translation: "We need to talk. I feel things aren't going well.", options: [] },
    { speaker: "you", text: "", translation: "I've felt it too. What do you want to do?", options: ["Jo també ho he sentit. Què vols fer?", "Tot va bé.", "No entenc."] },
    { speaker: "partner", text: "Crec que necessitem un temps. No estic content/a.", translation: "I think we need some time. I'm not happy.", options: [] },
    { speaker: "you", text: "", translation: "I understand. Maybe it's for the best.", options: ["T'entenc. Potser és el millor.", "No vull.", "Pots canviar."] },
    { speaker: "partner", text: "Ho sento molt. Realment he intentat que funcioni.", translation: "I'm very sorry. I really tried to make it work.", options: [] },
    { speaker: "you", text: "", translation: "I know. Me too. I hope we can be friends.", options: ["Ho sé. Jo també. Espero que puguem ser amics.", "T'odio.", "D'acord."] },
    { speaker: "partner", text: "Amb el temps, segur. Cuida't molt.", translation: "With time, for sure. Take care of yourself.", options: [] }
  ]
},

// ─── CONVERSATION 46: Reporting a Crime ────────────────────
{
  id: 46,
  title: "👮 Police Report",
  unlocksAfter: 71,
  difficulty: "advanced",
  turns: [
    { speaker: "officer", text: "Bon dia. Què ha passat?", translation: "Good morning. What happened?", options: [] },
    { speaker: "you", text: "", translation: "Someone stole my backpack on the metro.", options: ["Algú m'ha robat la motxilla al metro.", "M'han atacat.", "He perdut alguna cosa."] },
    { speaker: "officer", text: "A quina línia i a quina hora?", translation: "On which line and at what time?", options: [] },
    { speaker: "you", text: "", translation: "Line 3, around 10 am.", options: ["Línia 3, cap a les 10 del matí.", "No ho recordo.", "Ahir."] },
    { speaker: "officer", text: "Què portava a dins?", translation: "What was inside?", options: [] },
    { speaker: "you", text: "", translation: "My wallet, documents, and laptop.", options: ["La cartera, documents i l'ordinador portàtil.", "Poca cosa.", "No ho sé."] },
    { speaker: "officer", text: "D'acord. Farem un informe. Té còpia dels documents?", translation: "Okay. We'll make a report. Do you have copies of the documents?", options: [] },
    { speaker: "you", text: "", translation: "Yes, at home. When can I get the report?", options: ["Sí, a casa. Quan puc recollir l'informe?", "No.", "Gràcies."] }
  ]
},

// ─── CONVERSATION 47: Talking About Family Plans ───────────
{
  id: 47,
  title: "👶 Family Planning",
  unlocksAfter: 72,
  difficulty: "advanced",
  turns: [
    { speaker: "partner", text: "Últimament he estat pensant... vols tenir fills?", translation: "Lately I've been thinking... do you want to have children?", options: [] },
    { speaker: "you", text: "", translation: "I've thought about it. Do you?", options: ["Hi he pensat. I tu?", "No.", "Sí, ara mateix."] },
    { speaker: "partner", text: "M'agradaria, però encara no estic preparat/da. Potser d'aquí uns anys.", translation: "I'd like to, but I'm not ready yet. Maybe in a few years.", options: [] },
    { speaker: "you", text: "", translation: "I agree. We should be more stable first.", options: ["Estic d'acord. Hauríem d'estar més estables primer.", "Jo ja estic preparat/da.", "Mai."] },
    { speaker: "partner", text: "Quants en voldries?", translation: "How many would you want?", options: [] },
    { speaker: "you", text: "", translation: "Two or three. A good number.", options: ["Dos o tres. Un bon nombre.", "Un.", "Molts."] },
    { speaker: "partner", text: "Sí, a mi també em sembla bé. Ja ho decidirem quan arribi el moment.", translation: "Yes, that seems good to me too. We'll decide when the time comes.", options: [] }
  ]
},

// ─── CONVERSATION 48: At the Vet ───────────────────────────
{
  id: 48,
  title: "🐱 Veterinarian Visit",
  unlocksAfter: 73,
  difficulty: "intermediate",
  turns: [
    { speaker: "vet", text: "Hola! Qui tenim aquí?", translation: "Hi! Who do we have here?", options: [] },
    { speaker: "you", text: "", translation: "This is Luna, my cat. She's not eating well.", options: ["Aquesta és la Luna, la meva gata. No menja bé.", "El meu gos.", "Està malalta."] },
    { speaker: "vet", text: "Des de quan?", translation: "Since when?", options: [] },
    { speaker: "you", text: "", translation: "Three days ago. She also seems tired.", options: ["Fa tres dies. També sembla cansada.", "Ahir.", "No ho sé."] },
    { speaker: "vet", text: "Deixi'm examinar-la. Té les vacunes al dia?", translation: "Let me examine her. Are her vaccines up to date?", options: [] },
    { speaker: "you", text: "", translation: "Yes, we did them last month.", options: ["Sí, les vam fer el mes passat.", "No.", "No ho recordo."] },
    { speaker: "vet", text: "Perfecte. Sembla que té un refredat feliní. Li donaré un antibiòtic.", translation: "Perfect. It looks like she has a feline cold. I'll give her an antibiotic.", options: [] }
  ]
},

// ─── CONVERSATION 49: Discussing Career Change ─────────────
{
  id: 49,
  title: "🎯 Career Change",
  unlocksAfter: 74,
  difficulty: "advanced",
  turns: [
    { speaker: "friend", text: "Estic pensant en deixar la meva feina i canviar de sector.", translation: "I'm thinking of leaving my job and changing sectors.", options: [] },
    { speaker: "you", text: "", translation: "Really? What do you want to do?", options: ["De veritat? Què vols fer?", "No ho facis.", "Bona idea."] },
    { speaker: "friend", text: "M'agradaria dedicar-me a l'educació. Sempre m'ha agradat ensenyar.", translation: "I'd like to dedicate myself to education. I've always liked teaching.", options: [] },
    { speaker: "you", text: "", translation: "That's a big change. Have you thought about the salary?", options: ["És un gran canvi. Has pensat en el sou?", "Genial!", "És difícil."] },
    { speaker: "friend", text: "Sí, guanyaria menys. Però seria més feliç.", translation: "Yes, I'd earn less. But I'd be happier.", options: [] },
    { speaker: "you", text: "", translation: "Happiness is important. I support you.", options: ["La felicitat és important. T'apoio.", "Pensa-t'ho bé.", "Mala idea."] },
    { speaker: "friend", text: "Gràcies! El teu suport vol dir molt per mi.", translation: "Thanks! Your support means a lot to me.", options: [] }
  ]
},

// ─── CONVERSATION 50: Apartment Viewing ────────────────────
{
  id: 50,
  title: "🏠 Viewing Apartment",
  unlocksAfter: 75,
  difficulty: "intermediate",
  turns: [
    { speaker: "owner", text: "Endavant, aquest és el menjador. Té balcó.", translation: "Come in, this is the dining room. It has a balcony.", options: [] },
    { speaker: "you", text: "", translation: "It's very bright. Is it furnished?", options: ["Té molta llum. Està moblat?", "M'agrada.", "És car?"] },
    { speaker: "owner", text: "Sí, completament. Inclou electrodomèstics nous.", translation: "Yes, completely. Includes new appliances.", options: [] },
    { speaker: "you", text: "", translation: "Perfect. How much is the rent?", options: ["Perfecte. Quant és el lloguer?", "On està?", "Hi ha més pisos?"] },
    { speaker: "owner", text: "900 euros al mes, més despeses.", translation: "900 euros per month, plus expenses.", options: [] },
    { speaker: "you", text: "", translation: "What are the expenses?", options: ["Quines són les despeses?", "És massa.", "D'acord."] },
    { speaker: "owner", text: "Uns 100 euros. Inclou aigua, llum i comunitat.", translation: "About 100 euros. Includes water, electricity and building fees.", options: [] },
    { speaker: "you", text: "", translation: "When is it available?", options: ["Quan està disponible?", "El llogo.", "Ho penso."] }
  ]
},

// ─── CONVERSATION 51: Tech Support Call ────────────────────
{
  id: 51,
  title: "💻 Tech Support",
  unlocksAfter: 76,
  difficulty: "intermediate",
  turns: [
    { speaker: "support", text: "Servei tècnic, bon dia. Com puc ajudar-lo?", translation: "Tech support, good morning. How can I help you?", options: [] },
    { speaker: "you", text: "", translation: "My internet hasn't worked since yesterday.", options: ["Internet no funciona des d'ahir.", "Tinc un problema.", "Hola."] },
    { speaker: "support", text: "Ho sento. Ha reiniciat el router?", translation: "I'm sorry. Have you restarted the router?", options: [] },
    { speaker: "you", text: "", translation: "Yes, several times. The lights keep blinking.", options: ["Sí, diverses vegades. Les llums parpellegen.", "No.", "Què és això?"] },
    { speaker: "support", text: "D'acord. Sembla un problema de línia. Enviaré un tècnic.", translation: "Okay. It seems like a line problem. I'll send a technician.", options: [] },
    { speaker: "you", text: "", translation: "When can they come?", options: ["Quan pot venir?", "Gràcies.", "Urgent!"] },
    { speaker: "support", text: "Demà entre les 9 i les 13h. Li va bé?", translation: "Tomorrow between 9 and 1pm. Does that work?", options: [] },
    { speaker: "you", text: "", translation: "Yes, perfect. Thank you.", options: ["Sí, perfecte. Gràcies.", "No puc.", "Massa tard."] }
  ]
},

// ─── CONVERSATION 52: Planning a Birthday Party ────────────
{
  id: 52,
  title: "🎂 Birthday Party",
  unlocksAfter: 77,
  difficulty: "intermediate",
  turns: [
    { speaker: "friend", text: "Estic organitzant una festa pels meus 30. Vindràs?", translation: "I'm organizing a party for my 30th. Will you come?", options: [] },
    { speaker: "you", text: "", translation: "Of course! When is it?", options: ["Per descomptat! Quan és?", "No puc.", "Potser."] },
    { speaker: "friend", text: "Dissabte vinent a casa meva. A les vuit.", translation: "Next Saturday at my place. At eight.", options: [] },
    { speaker: "you", text: "", translation: "Should I bring anything?", options: ["Porto alguna cosa?", "Genial!", "On vius?"] },
    { speaker: "friend", text: "No cal, però si vols portar alguna cosa de beure, genial!", translation: "No need, but if you want to bring something to drink, great!", options: [] },
    { speaker: "you", text: "", translation: "I'll bring wine. How many people are coming?", options: ["Portaré vi. Quanta gent vindrà?", "Porto cervesa.", "D'acord."] },
    { speaker: "friend", text: "Uns vint. Serà divertit!", translation: "About twenty. It'll be fun!", options: [] }
  ]
},

// ─── CONVERSATION 53: At the Dentist ───────────────────────
{
  id: 53,
  title: "🦷 Dentist Appointment",
  unlocksAfter: 78,
  difficulty: "intermediate",
  turns: [
    { speaker: "dentist", text: "Hola! Què et fa mal exactament?", translation: "Hi! What hurts exactly?", options: [] },
    { speaker: "you", text: "", translation: "This tooth on the right. When I eat cold things.", options: ["Aquesta dent de la dreta. Quan menjo coses fredes.", "Tot.", "No ho sé."] },
    { speaker: "dentist", text: "D'acord. Deixa'm veure. Obre bé la boca.", translation: "Okay. Let me see. Open wide.", options: [] },
    { speaker: "you", text: "", translation: "[Opens mouth]", options: ["[Obre la boca]", "Em fa mal.", "Espereu."] },
    { speaker: "dentist", text: "Tens una càries. Haurem de fer un empastament.", translation: "You have a cavity. We'll need to do a filling.", options: [] },
    { speaker: "you", text: "", translation: "Does it hurt?", options: ["Farà mal?", "Quant costa?", "D'acord."] },
    { speaker: "dentist", text: "No, faré anestèsia local. No sentiràs res.", translation: "No, I'll do local anesthesia. You won't feel anything.", options: [] }
  ]
},

// ─── CONVERSATION 54: Asking for a Raise ───────────────────
{
  id: 54,
  title: "📈 Requesting Raise",
  unlocksAfter: 79,
  difficulty: "advanced",
  turns: [
    { speaker: "you", text: "", translation: "Thank you for meeting with me. I wanted to discuss my salary.", options: ["Gràcies per reunir-te amb mi. Volia discutir el meu sou.", "Hola.", "Necessito parlar."] },
    { speaker: "boss", text: "Per descomptat. Explica'm.", translation: "Of course. Tell me.", options: [] },
    { speaker: "you", text: "", translation: "I've been here three years and exceeded all my targets.", options: ["Porto tres anys aquí i he superat tots els objectius.", "Treballo molt.", "Vull més diners."] },
    { speaker: "boss", text: "És cert. El teu rendiment ha estat excel·lent.", translation: "That's true. Your performance has been excellent.", options: [] },
    { speaker: "you", text: "", translation: "I'd like to discuss a salary increase.", options: ["M'agradaria discutir un augment de sou.", "Necessito més.", "Mereixo més."] },
    { speaker: "boss", text: "Quin percentatge tenies al cap?", translation: "What percentage did you have in mind?", options: [] },
    { speaker: "you", text: "", translation: "15%, based on market rates.", options: ["Un 15%, basat en les tarifes del mercat.", "Molt.", "No ho sé."] },
    { speaker: "boss", text: "Deixa'm mirar els números. Parlarem dimarts que ve.", translation: "Let me look at the numbers. We'll talk next Tuesday.", options: [] }
  ]
},

// ─── CONVERSATION 55: Final Goodbye (Moving Away) ──────────
{
  id: 55,
  title: "👋 Farewell",
  unlocksAfter: 80,
  difficulty: "advanced",
  turns: [
    { speaker: "friend", text: "Així que realment te'n vas a Alemanya...", translation: "So you're really leaving for Germany...", options: [] },
    { speaker: "you", text: "", translation: "Yes, it's a great opportunity. But I'll miss you.", options: ["Sí, és una gran oportunitat. Però et trobaré a faltar.", "Sí.", "No estic segur/a."] },
    { speaker: "friend", text: "I jo a tu. Barcelona no serà el mateix sense tu.", translation: "And I'll miss you. Barcelona won't be the same without you.", options: [] },
    { speaker: "you", text: "", translation: "We'll visit each other. And there's video calls.", options: ["Ens visitarem. I hi ha videotrucades.", "Sí.", "Potser."] },
    { speaker: "friend", text: "Tens raó. Quan marxes exactament?", translation: "You're right. When are you leaving exactly?", options: [] },
    { speaker: "you", text: "", translation: "Next month. I still have a lot to organize.", options: ["El mes que ve. Encara tinc molt a organitzar.", "Aviat.", "No ho sé."] },
    { speaker: "friend", text: "Si necessites ajuda amb alguna cosa, digues-m'ho.", translation: "If you need help with anything, tell me.", options: [] },
    { speaker: "you", text: "", translation: "Thank you. You're a great friend.", options: ["Gràcies. Ets un gran amic/ga.", "D'acord.", "Sí."] }
  ]
}

];