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
        wordBank: ["No", "tinc", "mascotes", "gos", "gat", "animals"]
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
  }
];