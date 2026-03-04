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
        wordBank: ["No", "no", "tinc", "mascotes", "gos", "gat"]
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
  icon: "💕",

  title: "First Date",
  unlockAfterLesson: 50,
  difficulty: "intermediate",
  turns: [
    { speaker: "narrator", text: "Hola! Estic content de conèixer-te finalment.", english: "Hi! I'm happy to finally meet you." },
    { speaker: "date", text: "Hola! Jo també. Aquest restaurant sembla molt acollidor.", english: "Hi! Me too. This restaurant looks very cozy.", options: [] },
    { speaker: "user", prompt: "What do you like to do in your free time?", wordBank: ["temps","t'agrada","fer","Què","en","lliure","teu","el"], correctSentence: "Què t'agrada fer en el teu temps lliure" },
    { speaker: "date", text: "M'encanta llegir i anar a la platja. I tu?", english: "I love reading and going to the beach. And you?", options: [] },
    { speaker: "user", prompt: "I like hiking and trying new restaurants.", wordBank: ["M'agrada","provar","excursions","i","restaurants","nous","fer"], correctSentence: "M'agrada fer excursions i provar restaurants nous" },
    { speaker: "date", text: "Genial! Hauríem d'anar a fer una excursió junts algun dia.", english: "Great! We should go hiking together someday.", options: [] },
    { speaker: "user", prompt: "I'd love to! Would you like to order?", wordBank: ["M'encantaria","Vols","demanar"], correctSentence: "M'encantaria Vols demanar" },
    { speaker: "date", text: "Sí, el suquet de peix té molt bona pinta.", english: "Yes, the fish stew looks really good.", options: [] }
  ]
},

// ─── CONVERSATION 27: Job Interview ────────────────────────
{
  id: 27,
  icon: "💼",

  title: "Job Interview: Advanced",
  unlockAfterLesson: 105,
  difficulty: "advanced",
  turns: [
    { speaker: "interviewer", text: "Bon dia! Siè's i posa't còmode/a.", english: "Good morning! Sit down and make yourself comfortable.", options: [] },
    { speaker: "user", prompt: "Good morning. Thank you for the opportunity.", wordBank: ["Bon","Gràcies","per","l'oportunitat","dia"], correctSentence: "Bon dia Gràcies per l'oportunitat" },
    { speaker: "interviewer", text: "Explica'm una mica sobre la teva experiència professional.", english: "Tell me a bit about your professional experience.", options: [] },
    { speaker: "user", prompt: "I've worked in marketing for five years.", wordBank: ["en","treballat","anys","cinc","He","durant","màrqueting"], correctSentence: "He treballat en màrqueting durant cinc anys" },
    { speaker: "interviewer", text: "I per què vols treballar amb nosaltres?", english: "And why do you want to work with us?", options: [] },
    { speaker: "user", prompt: "Your company is a leader in innovation.", wordBank: ["en","líder","és","empresa","vostra","La","innovació"], correctSentence: "La vostra empresa és líder en innovació" },
    { speaker: "interviewer", text: "Molt bé. Quines són les teves expectatives salarials?", english: "Very good. What are your salary expectations?", options: [] },
    { speaker: "user", prompt: "I'm flexible, but I'd like to discuss based on the full package.", wordBank: ["m'agradaria","Sóc","segons","flexible","complet","paquet","discutir-ho","el","però"], correctSentence: "Sóc flexible però m'agradaria discutir-ho segons el paquet complet" }
  ]
},

// ─── CONVERSATION 28: At the Barber/Hairdresser ────────────
{
  id: 28,
  icon: "✂",

  title: "️ At the Barber",
  unlockAfterLesson: 108,
  difficulty: "intermediate",
  turns: [
    { speaker: "barber", text: "Hola! Què vols fer avui?", english: "Hi! What would you like to do today?", options: [] },
    { speaker: "user", prompt: "I'd like a trim, please.", wordBank: ["Voldria","un","us","plau","retoc","si"], correctSentence: "Voldria un retoc si us plau" },
    { speaker: "barber", text: "Quant de llarg vols deixar-ho?", english: "How long do you want to leave it?", options: [] },
    { speaker: "user", prompt: "Just a few centimeters shorter.", wordBank: ["més","curt","Només","uns","centímetres"], correctSentence: "Només uns centímetres més curt" },
    { speaker: "barber", text: "Vol que et faci la barba també?", english: "Would you like me to do your beard too?", options: [] },
    { speaker: "user", prompt: "Yes, just shape it a bit.", wordBank: ["Sí","només","una","mica","arregla-la"], correctSentence: "Sí només arregla-la una mica" },
    { speaker: "barber", text: "Perfecte. Ara mateix començo.", english: "Perfect. I'll start right now.", options: [] }
  ]
},

// ─── CONVERSATION 29: Making Travel Plans ──────────────────
{
  id: 29,
  icon: "✈",

  title: "️ Making Travel Plans",
  unlockAfterLesson: 54,
  difficulty: "intermediate",
  turns: [
    { speaker: "friend", text: "Hola! Estem pensant en anar a Menorca aquest estiu. T'animes?", english: "Hi! We're thinking of going to Menorca this summer. Want to join?", options: [] },
    { speaker: "user", prompt: "That sounds great! When are you thinking?", wordBank: ["tens","ho","pensat","Quan","genial","Sona"], correctSentence: "Sona genial Quan ho tens pensat" },
    { speaker: "friend", text: "Al juliol, dues setmanes. Llogaríem una casa a la costa.", english: "In July, two weeks. We'd rent a house on the coast.", options: [] },
    { speaker: "user", prompt: "How much would it cost per person?", wordBank: ["Quant","costaria","per","persona"], correctSentence: "Quant costaria per persona" },
    { speaker: "friend", text: "Uns cinc-cents euros tot inclòs. Vols que et reservem plaça?", english: "About five hundred euros all included. Should we reserve a spot for you?", options: [] },
    { speaker: "user", prompt: "Yes, count me in!", wordBank: ["mi","compta","amb","Sí"], correctSentence: "Sí compta amb mi" },
    { speaker: "friend", text: "Genial! T'enviaré tots els detalls per correu.", english: "Great! I'll send you all the details by email.", options: [] }
  ]
},

// ─── CONVERSATION 30: Reporting a Problem to Landlord ──────
{
  id: 30,
  icon: "🏠",

  title: "Landlord Problem",
  unlockAfterLesson: 55,
  difficulty: "intermediate",
  turns: [
    { speaker: "user", prompt: "Hello, I have a problem with the heating.", wordBank: ["Hola","tinc","amb","problema","un","la","calefacció"], correctSentence: "Hola tinc un problema amb la calefacció" },
    { speaker: "landlord", text: "Hola! Què passa exactament?", english: "Hi! What's happening exactly?", options: [] },
    { speaker: "user", prompt: "It hasn't been working for three days.", wordBank: ["Fa","que","funciona","tres","dies","no"], correctSentence: "Fa tres dies que no funciona" },
    { speaker: "landlord", text: "Això és greu. Trucaré el tècnic avui mateix.", english: "That's serious. I'll call the technician today.", options: [] },
    { speaker: "user", prompt: "Thank you. When can they come?", wordBank: ["venir","Quan","Gràcies","pot"], correctSentence: "Gràcies Quan pot venir" },
    { speaker: "landlord", text: "Demà al matí entre les 9 i les 12. Et sembla bé?", english: "Tomorrow morning between 9 and 12. Is that okay?", options: [] },
    { speaker: "user", prompt: "Yes, I'll be home. Thank you.", wordBank: ["casa","a","Sí","Gràcies","seré"], correctSentence: "Sí seré a casa Gràcies" }
  ]
},

// ─── CONVERSATION 31: At the Gym (Personal Trainer) ────────
{
  id: 31,
  icon: "💪",

  title: "Personal Trainer",
  unlockAfterLesson: 56,
  difficulty: "intermediate",
  turns: [
    { speaker: "trainer", text: "Hola! Vols que et faci una rutina personalitzada?", english: "Hi! Would you like me to make you a personalized routine?", options: [] },
    { speaker: "user", prompt: "Yes, I want to improve my endurance.", wordBank: ["millorar","vull","la","meva","Sí","resistència"], correctSentence: "Sí vull millorar la meva resistència" },
    { speaker: "trainer", text: "Quants cops per setmana pots entrenar?", english: "How many times per week can you train?", options: [] },
    { speaker: "user", prompt: "Three or four times.", wordBank: ["cops","o","Tres","quatre"], correctSentence: "Tres o quatre cops" },
    { speaker: "trainer", text: "Perfecte. Combinarem cardio amb peses. Tens alguna lesió?", english: "Perfect. We'll combine cardio with weights. Do you have any injuries?", options: [] },
    { speaker: "user", prompt: "No, I'm in good shape.", wordBank: ["forma","bona","estic","No","en"], correctSentence: "No estic en bona forma" },
    { speaker: "trainer", text: "Molt bé! Començarem dimarts que ve.", english: "Very good! We'll start next Tuesday.", options: [] }
  ]
},

// CONTINUING WITH MORE CONVERSATIONS...

// ─── CONVERSATION 32: Emergency at Hospital ────────────────
{
  id: 32,
  icon: "🏥",

  title: "Hospital Emergency",
  unlockAfterLesson: 57,
  difficulty: "advanced",
  turns: [
    { speaker: "nurse", text: "Bona tarda. Què li passa?", english: "Good afternoon. What's wrong?", options: [] },
    { speaker: "user", prompt: "I fell and I think I broke my ankle.", wordBank: ["M'he","m'he","i","turmell","crec","el","que","caigut","trencat"], correctSentence: "M'he caigut i crec que m'he trencat el turmell" },
    { speaker: "nurse", text: "D'acord. Pot caminar o necessita cadira de rodes?", english: "Okay. Can you walk or do you need a wheelchair?", options: [] },
    { speaker: "user", prompt: "I need a wheelchair, please.", wordBank: ["si","cadira","Necessito","plau","rodes","us","de"], correctSentence: "Necessito cadira de rodes si us plau" },
    { speaker: "nurse", text: "Ara mateix. Té la targeta sanitària?", english: "Right away. Do you have your health card?", options: [] },
    { speaker: "user", prompt: "Yes, here it is.", wordBank: ["té","Sí","aquí","la"], correctSentence: "Sí aquí la té" },
    { speaker: "nurse", text: "Gràcies. El metge el veurà en breu.", english: "Thank you. The doctor will see you shortly.", options: [] }
  ]
},

// ─── CONVERSATION 33: Negotiating Salary ───────────────────
{
  id: 33,
  icon: "💰",

  title: "Salary Negotiation",
  unlockAfterLesson: 58,
  difficulty: "advanced",
  turns: [
    { speaker: "boss", text: "Volia parlar amb tu sobre el teu sou.", english: "I wanted to talk to you about your salary.", options: [] },
    { speaker: "user", prompt: "Thank you. I also wanted to discuss this.", wordBank: ["volia","Jo","comentar","ho","Gràcies","també"], correctSentence: "Gràcies Jo també ho volia comentar" },
    { speaker: "boss", text: "Crec que mereixies un augment. Què et semblaria un 5%?", english: "I think you deserve a raise. What would you think about 5%?", options: [] },
    { speaker: "user", prompt: "I appreciate it, but I was hoping for 10%.", wordBank: ["Ho","agraeixo","però","esperava","un","10%"], correctSentence: "Ho agraeixo però esperava un 10%" },
    { speaker: "boss", text: "És molt. Pots justificar-ho?", english: "That's a lot. Can you justify it?", options: [] },
    { speaker: "user", prompt: "I've increased sales by 30% this year.", wordBank: ["les","30%","aquest","any","augmentat","un","He","vendes"], correctSentence: "He augmentat les vendes un 30% aquest any" },
    { speaker: "boss", text: "Tens raó. Et puc oferir un 8%. Et sembla bé?", english: "You're right. I can offer you 8%. Does that work?", options: [] },
    { speaker: "user", prompt: "Yes, I accept. Thank you.", wordBank: ["Sí","accepto","Gràcies"], correctSentence: "Sí accepto Gràcies" }
  ]
},

// ─── CONVERSATION 34: Booking a Hotel Room ─────────────────
{
  id: 34,
  icon: "🏨",

  title: "Hotel Booking",
  unlockAfterLesson: 59,
  difficulty: "intermediate",
  turns: [
    { speaker: "receptionist", text: "Bon dia! En què puc ajudar-lo?", english: "Good morning! How can I help you?", options: [] },
    { speaker: "user", prompt: "I'd like to book a double room for three nights.", wordBank: ["una","nits","doble","reservar","tres","per","habitació","Voldria"], correctSentence: "Voldria reservar una habitació doble per tres nits" },
    { speaker: "receptionist", text: "Quines dates, si us plau?", english: "What dates, please?", options: [] },
    { speaker: "user", prompt: "From the 15th to the 18th of March.", wordBank: ["de","Del","15","al","març","18"], correctSentence: "Del 15 al 18 de març" },
    { speaker: "receptionist", text: "Perfecte. Amb vistes al mar o al carrer?", english: "Perfect. With sea view or street view?", options: [] },
    { speaker: "user", prompt: "Sea view, please. How much is it?", wordBank: ["us","si","plau","Quant","mar","al","Vistes","costa"], correctSentence: "Vistes al mar si us plau Quant costa" },
    { speaker: "receptionist", text: "120 euros per nit, amb esmorzar inclòs.", english: "120 euros per night, with breakfast included.", options: [] },
    { speaker: "user", prompt: "Perfect, I'll take it.", wordBank: ["Perfecte","la","reservo"], correctSentence: "Perfecte la reservo" }
  ]
},

// ─── CONVERSATION 35: Meeting the In-Laws ──────────────────
{
  id: 35,
  icon: "👨",

  title: "‍👩‍👧 Meeting In-Laws",
  unlockAfterLesson: 60,
  difficulty: "intermediate",
  turns: [
    { speaker: "mother_in_law", text: "Hola! Passa, passa! Estem molt contents de conèixer-te.", english: "Hi! Come in, come in! We're very happy to meet you.", options: [] },
    { speaker: "user", prompt: "Thank you for inviting me. Your home is beautiful.", wordBank: ["vostra","convidar-me","per","La","és","preciosa","Gràcies","casa"], correctSentence: "Gràcies per convidar-me La vostra casa és preciosa" },
    { speaker: "mother_in_law", text: "Molt amable! Seu-te. T'agradaria beure alguna cosa?", english: "Very kind! Sit down. Would you like to drink something?", options: [] },
    { speaker: "user", prompt: "Water, please. Thank you.", wordBank: ["si","plau","Aigua","Gràcies","us"], correctSentence: "Aigua si us plau Gràcies" },
    { speaker: "father_in_law", text: "La nostra filla ens ha parlat molt bé de tu. A què et dediques?", english: "Our daughter has spoken very well of you. What do you do?", options: [] },
    { speaker: "user", prompt: "I work in technology as a developer.", wordBank: ["Treballo","en","tecnologia","desenvolupador","com","a"], correctSentence: "Treballo en tecnologia com a desenvolupador" },
    { speaker: "father_in_law", text: "Interessant! El dinar ja està gairebé llest.", english: "Interesting! Lunch is almost ready.", options: [] }
  ]
},

// ─── CONVERSATION 36: At the Mechanic ──────────────────────
{
  id: 36,
  icon: "🔧",

  title: "Car Mechanic",
  unlockAfterLesson: 61,
  difficulty: "intermediate",
  turns: [
    { speaker: "mechanic", text: "Hola! Què li passa al cotxe?", english: "Hi! What's wrong with the car?", options: [] },
    { speaker: "user", prompt: "It makes a strange noise when I brake.", wordBank: ["Fa","un","soroll","freno","quan","estrany"], correctSentence: "Fa un soroll estrany quan freno" },
    { speaker: "mechanic", text: "D'acord. Quan va començar?", english: "Okay. When did it start?", options: [] },
    { speaker: "user", prompt: "About a week ago.", wordBank: ["setmana","o","una","menys","Fa","més"], correctSentence: "Fa una setmana més o menys" },
    { speaker: "mechanic", text: "Sembla que són les pastilles de fre. Hauré de mirar-ho.", english: "It sounds like brake pads. I'll have to check it.", options: [] },
    { speaker: "user", prompt: "How long will it take?", wordBank: ["Quant","de","temps","trigarà"], correctSentence: "Quant de temps trigarà" },
    { speaker: "mechanic", text: "Un parell d'hores. El puc deixar aquí?", english: "A couple of hours. Can you leave it here?", options: [] },
    { speaker: "user", prompt: "Yes, I'll come back at 5.", wordBank: ["5","les","a","tornaré","Sí"], correctSentence: "Sí tornaré a les 5" }
  ]
},

// ─── CONVERSATION 37: Wine Tasting ─────────────────────────
{
  id: 37,
  icon: "🍷",

  title: "Wine Tasting",
  unlockAfterLesson: 62,
  difficulty: "advanced",
  turns: [
    { speaker: "sommelier", text: "Benvinguts a la nostra bodega! Avui tastarem cinc vins del Penedès.", english: "Welcome to our winery! Today we'll taste five Penedès wines.", options: [] },
    { speaker: "user", prompt: "Great! I don't know much about wine.", wordBank: ["Genial","gaire","No","sé","de","vins"], correctSentence: "Genial No sé gaire de vins" },
    { speaker: "sommelier", text: "No et preocupis. Començarem amb un blanc jove.", english: "Don't worry. We'll start with a young white.", options: [] },
    { speaker: "user", prompt: "What grapes does it have?", wordBank: ["Quins","raïms","té"], correctSentence: "Quins raïms té" },
    { speaker: "sommelier", text: "Xarel·lo i macabeu. És fresc i lleuger. Què en penses?", english: "Xarel·lo and macabeu. It's fresh and light. What do you think?", options: [] },
    { speaker: "user", prompt: "It's very smooth. I like it.", wordBank: ["És","molt","M'agrada","suau"], correctSentence: "És molt suau M'agrada" },
    { speaker: "sommelier", text: "Ara provarem un negre més corpulent.", english: "Now we'll try a fuller-bodied red.", options: [] }
  ]
},

// ─── CONVERSATION 38: Networking Event ─────────────────────
{
  id: 38,
  icon: "🤝",

  title: "Networking Event",
  unlockAfterLesson: 63,
  difficulty: "advanced",
  turns: [
    { speaker: "professional", text: "Hola! No ens coneixem, oi? Sóc en Marc.", english: "Hi! We don't know each other, right? I'm Marc.", options: [] },
    { speaker: "user", prompt: "Nice to meet you. I'm [name]. What do you do?", wordBank: ["Encantat/da.","et","Sóc","[nom].","ens","Hola.","què","Sí,","dediques?","A","coneixem."], correctSentence: "Encantat/da. Sóc [nom]. A què et dediques?" },
    { speaker: "professional", text: "Sóc consultor de màrqueting digital. I tu?", english: "I'm a digital marketing consultant. And you?", options: [] },
    { speaker: "user", prompt: "I work in software development.", wordBank: ["desenvolupament","Treballo","en","de","programari"], correctSentence: "Treballo en desenvolupament de programari" },
    { speaker: "professional", text: "Interessant! Busquem algú per desenvolupar una app. T'interessaria?", english: "Interesting! We're looking for someone to develop an app. Would you be interested?", options: [] },
    { speaker: "user", prompt: "Definitely. Can we exchange cards?", wordBank: ["Definitivament","targetes","intercanviar","Podem"], correctSentence: "Definitivament Podem intercanviar targetes" },
    { speaker: "professional", text: "Clar! T'enviaré un correu demà amb els detalls.", english: "Of course! I'll send you an email tomorrow with details.", options: [] }
  ]
},

// ─── CONVERSATION 39: Discussing Politics (Careful) ────────
{
  id: 39,
  icon: "🗳",

  title: "️ Political Discussion",
  unlockAfterLesson: 64,
  difficulty: "advanced",
  turns: [
    { speaker: "friend", text: "Què opines sobre les últimes eleccions?", english: "What do you think about the recent elections?", options: [] },
    { speaker: "user", prompt: "It's a complicated topic. I prefer not to discuss it.", wordBank: ["És","discutir-ho","un","Prefereixo","tema","complicat","no"], correctSentence: "És un tema complicat Prefereixo no discutir-ho" },
    { speaker: "friend", text: "Entenc. Però creus que les coses milloraran?", english: "I understand. But do you think things will improve?", options: [] },
    { speaker: "user", prompt: "I hope so. We need stability.", wordBank: ["estabilitat","espero","Això","Necessitem"], correctSentence: "Això espero Necessitem estabilitat" },
    { speaker: "friend", text: "Tens raó. Canviem de tema. T'agrada el futbol?", english: "You're right. Let's change the subject. Do you like football?", options: [] },
    { speaker: "user", prompt: "Yes, I follow Barça.", wordBank: ["Barça","el","segueixo","Sí"], correctSentence: "Sí segueixo el Barça" },
    { speaker: "friend", text: "Jo també! Van jugar molt bé diumenge passat.", english: "Me too! They played very well last Sunday.", options: [] }
  ]
},

// ─── CONVERSATION 40: Complaining About Neighbors ──────────
{
  id: 40,
  icon: "🔊",

  title: "Noisy Neighbors",
  unlockAfterLesson: 65,
  difficulty: "intermediate",
  turns: [
    { speaker: "user", prompt: "Excuse me, can I speak with you for a moment?", wordBank: ["moment","amb","parlar","vostè","un","puc","Perdoni"], correctSentence: "Perdoni puc parlar amb vostè un moment" },
    { speaker: "neighbor", text: "Sí, clar. Què passa?", english: "Yes, of course. What's wrong?", options: [] },
    { speaker: "user", prompt: "The music is very loud at night.", wordBank: ["nit","a","alta","La","música","la","està","molt"], correctSentence: "La música està molt alta a la nit" },
    { speaker: "neighbor", text: "Oh, ho sento molt! No sabia que es sentia tant.", english: "Oh, I'm very sorry! I didn't know it was so loud.", options: [] },
    { speaker: "user", prompt: "Could you lower the volume after 11 pm?", wordBank: ["Podria","les","abaixar","11","el","volum","després","de"], correctSentence: "Podria abaixar el volum després de les 11" },
    { speaker: "neighbor", text: "Per descomptat. Tinc tota la raó. No tornarà a passar.", english: "Of course. You're absolutely right. It won't happen again.", options: [] },
    { speaker: "user", prompt: "Thank you for understanding.", wordBank: ["Gràcies","per","comprensió","la"], correctSentence: "Gràcies per la comprensió" }
  ]
},

// ─── CONVERSATION 41: At a Catalan Festival ────────────────
{
  id: 41,
  icon: "🎉",

  title: "La Mercè Festival",
  unlockAfterLesson: 66,
  difficulty: "intermediate",
  turns: [
    { speaker: "local", text: "És el teu primer any a la Mercè?", english: "Is this your first year at La Mercè?", options: [] },
    { speaker: "user", prompt: "Yes! What should I see?", wordBank: ["hauria","Què","Sí","veure","de"], correctSentence: "Sí Què hauria de veure" },
    { speaker: "local", text: "Definitivament els castells a la plaça Sant Jaume. Són impressionants!", english: "Definitely the castells at Plaça Sant Jaume. They're impressive!", options: [] },
    { speaker: "user", prompt: "What time do they start?", wordBank: ["comencen","hora","quina","A"], correctSentence: "A quina hora comencen" },
    { speaker: "local", text: "A les sis de la tarda. També hi ha correfoc a les deu.", english: "At six in the evening. There's also correfoc at ten.", options: [] },
    { speaker: "user", prompt: "What's correfoc?", wordBank: ["Què","el","és","correfoc"], correctSentence: "Què és el correfoc" },
    { speaker: "local", text: "Gent disfressada de dimonis amb focs artificials. És molt divertit!", english: "People dressed as devils with fireworks. It's very fun!", options: [] },
    { speaker: "user", prompt: "That sounds amazing!", wordBank: ["increïble","Sona"], correctSentence: "Sona increïble" }
  ]
},

// ─── CONVERSATION 42: Buying Property ──────────────────────
{
  id: 42,
  icon: "🏡",

  title: "Property Viewing",
  unlockAfterLesson: 67,
  difficulty: "advanced",
  turns: [
    { speaker: "agent", text: "Benvingut! Aquest és el pis. Com pot veure, té molt de llum natural.", english: "Welcome! This is the apartment. As you can see, it has lots of natural light.", options: [] },
    { speaker: "user", prompt: "It's very nice. How many square meters is it?", wordBank: ["És","molt","maco","metres","Quants","quadrats","té"], correctSentence: "És molt maco Quants metres quadrats té" },
    { speaker: "agent", text: "Noranta metres quadrats. Tres habitacions i dos banys.", english: "Ninety square meters. Three bedrooms and two bathrooms.", options: [] },
    { speaker: "user", prompt: "Are the building fees included?", wordBank: ["comunitat","incloses","Les","de","despeses","estan"], correctSentence: "Les despeses de comunitat estan incloses" },
    { speaker: "agent", text: "No, són 80 euros al mes. Inclou aigua i manteniment.", english: "No, they're 80 euros per month. Includes water and maintenance.", options: [] },
    { speaker: "user", prompt: "Is the price negotiable?", wordBank: ["negociable","El","preu","és"], correctSentence: "El preu és negociable" },
    { speaker: "agent", text: "Hi ha una mica de marge. Faci'm una oferta.", english: "There's a bit of room. Make me an offer.", options: [] }
  ]
},

// ─── CONVERSATION 43: Attending a Wedding ──────────────────
{
  id: 43,
  icon: "💒",

  title: "Wedding Guest",
  unlockAfterLesson: 68,
  difficulty: "intermediate",
  turns: [
    { speaker: "guest", text: "Hola! No ets amic/ga dels nuvis?", english: "Hi! Aren't you a friend of the couple?", options: [] },
    { speaker: "user", prompt: "Yes, I work with the groom.", wordBank: ["amb","Sí","el","treballo","nuvi"], correctSentence: "Sí treballo amb el nuvi" },
    { speaker: "guest", text: "Quina cerimònia tan bonica, oi?", english: "What a beautiful ceremony, right?", options: [] },
    { speaker: "user", prompt: "Yes, very emotional. Have you known them long?", wordBank: ["que","Sí","Fa","molt","temps","els","coneixes","emotiva"], correctSentence: "Sí molt emotiva Fa temps que els coneixes" },
    { speaker: "guest", text: "Des de la universitat. Som amics des de fa quinze anys.", english: "Since university. We've been friends for fifteen years.", options: [] },
    { speaker: "user", prompt: "How nice! Shall we go to the reception?", wordBank: ["Anem","bonic","la","a","recepció","Què"], correctSentence: "Què bonic Anem a la recepció" },
    { speaker: "guest", text: "Sí, ja tinc gana! Diuen que el menú és boníssim.", english: "Yes, I'm already hungry! They say the menu is amazing.", options: [] }
  ]
},

// ─── CONVERSATION 44: Discussing Catalan Language ──────────
{
  id: 44,
  icon: "📚",

  title: "Language Learning",
  unlockAfterLesson: 69,
  difficulty: "advanced",
  turns: [
    { speaker: "teacher", text: "Com portes el català? Noto que has millorat molt.", english: "How's your Catalan going? I notice you've improved a lot.", options: [] },
    { speaker: "user", prompt: "Thank you! I practice every day.", wordBank: ["cada","dia","Practico","Gràcies"], correctSentence: "Gràcies Practico cada dia" },
    { speaker: "teacher", text: "Quina és la part més difícil per tu?", english: "What's the hardest part for you?", options: [] },
    { speaker: "user", prompt: "The subjunctive is complicated.", wordBank: ["complicat","subjuntiu","és","El"], correctSentence: "El subjuntiu és complicat" },
    { speaker: "teacher", text: "És normal. Fins i tot per catalans és difícil! Llegeixes en català?", english: "That's normal. Even for Catalans it's difficult! Do you read in Catalan?", options: [] },
    { speaker: "user", prompt: "Yes, I read the news every morning.", wordBank: ["llegeixo","notícies","matí","les","cada","Sí"], correctSentence: "Sí llegeixo les notícies cada matí" },
    { speaker: "teacher", text: "Excel·lent! La lectura és clau per millorar.", english: "Excellent! Reading is key to improving.", options: [] }
  ]
},

// ─── CONVERSATION 45: Breakup Conversation ─────────────────
{
  id: 45,
  icon: "💔",

  title: "Ending Relationship",
  unlockAfterLesson: 70,
  difficulty: "advanced",
  turns: [
    { speaker: "partner", text: "Hem de parlar. Sento que les coses no van bé.", english: "We need to talk. I feel things aren't going well.", options: [] },
    { speaker: "user", prompt: "I've felt it too. What do you want to do?", wordBank: ["Jo","també","fer","ho","he","sentit","Què","vols"], correctSentence: "Jo també ho he sentit Què vols fer" },
    { speaker: "partner", text: "Crec que necessitem un temps. No estic content/a.", english: "I think we need some time. I'm not happy.", options: [] },
    { speaker: "user", prompt: "I understand. Maybe it's for the best.", wordBank: ["T'entenc","millor","és","Potser","el"], correctSentence: "T'entenc Potser és el millor" },
    { speaker: "partner", text: "Ho sento molt. Realment he intentat que funcioni.", english: "I'm very sorry. I really tried to make it work.", options: [] },
    { speaker: "user", prompt: "I know. Me too. I hope we can be friends.", wordBank: ["també","sé","Jo","Espero","ser","puguem","Ho","amics","que"], correctSentence: "Ho sé Jo també Espero que puguem ser amics" },
    { speaker: "partner", text: "Amb el temps, segur. Cuida't molt.", english: "With time, for sure. Take care of yourself.", options: [] }
  ]
},

// ─── CONVERSATION 46: Reporting a Crime ────────────────────
{
  id: 46,
  icon: "👮",

  title: "Police Report",
  unlockAfterLesson: 71,
  difficulty: "advanced",
  turns: [
    { speaker: "officer", text: "Bon dia. Què ha passat?", english: "Good morning. What happened?", options: [] },
    { speaker: "user", prompt: "Someone stole my backpack on the metro.", wordBank: ["motxilla","la","m'ha","metro","robat","al","Algú"], correctSentence: "Algú m'ha robat la motxilla al metro" },
    { speaker: "officer", text: "A quina línia i a quina hora?", english: "On which line and at what time?", options: [] },
    { speaker: "user", prompt: "Line 3, around 10 am.", wordBank: ["del","cap","3","matí","a","Línia","10","les"], correctSentence: "Línia 3 cap a les 10 del matí" },
    { speaker: "officer", text: "Què portava a dins?", english: "What was inside?", options: [] },
    { speaker: "user", prompt: "My wallet, documents, and laptop.", wordBank: ["l'ordinador","i","documents","portàtil","cartera","La"], correctSentence: "La cartera documents i l'ordinador portàtil" },
    { speaker: "officer", text: "D'acord. Farem un informe. Té còpia dels documents?", english: "Okay. We'll make a report. Do you have copies of the documents?", options: [] },
    { speaker: "user", prompt: "Yes, at home. When can I get the report?", wordBank: ["a","recollir","l'informe","casa","puc","Quan","Sí"], correctSentence: "Sí a casa Quan puc recollir l'informe" }
  ]
},

// ─── CONVERSATION 47: Talking About Family Plans ───────────
{
  id: 47,
  icon: "👶",

  title: "Family Planning",
  unlockAfterLesson: 72,
  difficulty: "advanced",
  turns: [
    { speaker: "partner", text: "Últimament he estat pensant... vols tenir fills?", english: "Lately I've been thinking... do you want to have children?", options: [] },
    { speaker: "user", prompt: "I've thought about it. Do you?", wordBank: ["I","pensat","Hi","he","tu"], correctSentence: "Hi he pensat I tu" },
    { speaker: "partner", text: "M'agradaria, però encara no estic preparat/da. Potser d'aquí uns anys.", english: "I'd like to, but I'm not ready yet. Maybe in a few years.", options: [] },
    { speaker: "user", prompt: "I agree. We should be more stable first.", wordBank: ["més","primer","estables","d'estar","Hauríem","d'acord","Estic"], correctSentence: "Estic d'acord Hauríem d'estar més estables primer" },
    { speaker: "partner", text: "Quants en voldries?", english: "How many would you want?", options: [] },
    { speaker: "user", prompt: "Two or three. A good number.", wordBank: ["Dos","Un","bon","nombre","o","tres"], correctSentence: "Dos o tres Un bon nombre" },
    { speaker: "partner", text: "Sí, a mi també em sembla bé. Ja ho decidirem quan arribi el moment.", english: "Yes, that seems good to me too. We'll decide when the time comes.", options: [] }
  ]
},

// ─── CONVERSATION 48: At the Vet ───────────────────────────
{
  id: 48,
  icon: "🐱",

  title: "Veterinarian Visit",
  unlockAfterLesson: 73,
  difficulty: "intermediate",
  turns: [
    { speaker: "vet", text: "Hola! Qui tenim aquí?", english: "Hi! Who do we have here?", options: [] },
    { speaker: "user", prompt: "This is Luna, my cat. She's not eating well.", wordBank: ["No","gata","menja","és","Aquesta","meva","la","bé","la","Luna"], correctSentence: "Aquesta és la Luna la meva gata No menja bé" },
    { speaker: "vet", text: "Des de quan?", english: "Since when?", options: [] },
    { speaker: "user", prompt: "Three days ago. She also seems tired.", wordBank: ["dies","tres","cansada","sembla","També","Fa"], correctSentence: "Fa tres dies També sembla cansada" },
    { speaker: "vet", text: "Deixi'm examinar-la. Té les vacunes al dia?", english: "Let me examine her. Are her vaccines up to date?", options: [] },
    { speaker: "user", prompt: "Yes, we did them last month.", wordBank: ["Sí","el","passat","les","vam","mes","fer"], correctSentence: "Sí les vam fer el mes passat" },
    { speaker: "vet", text: "Perfecte. Sembla que té un refredat feliní. Li donaré un antibiòtic.", english: "Perfect. It looks like she has a feline cold. I'll give her an antibiotic.", options: [] }
  ]
},

// ─── CONVERSATION 49: Discussing Career Change ─────────────
{
  id: 49,
  icon: "🎯",

  title: "Career Change",
  unlockAfterLesson: 74,
  difficulty: "advanced",
  turns: [
    { speaker: "friend", text: "Estic pensant en deixar la meva feina i canviar de sector.", english: "I'm thinking of leaving my job and changing sectors.", options: [] },
    { speaker: "user", prompt: "Really? What do you want to do?", wordBank: ["De","veritat","vols","Què","fer"], correctSentence: "De veritat Què vols fer" },
    { speaker: "friend", text: "M'agradaria dedicar-me a l'educació. Sempre m'ha agradat ensenyar.", english: "I'd like to dedicate myself to education. I've always liked teaching.", options: [] },
    { speaker: "user", prompt: "That's a big change. Have you thought about the salary?", wordBank: ["És","un","sou","Has","gran","pensat","canvi","el","en"], correctSentence: "És un gran canvi Has pensat en el sou" },
    { speaker: "friend", text: "Sí, guanyaria menys. Però seria més feliç.", english: "Yes, I'd earn less. But I'd be happier.", options: [] },
    { speaker: "user", prompt: "Happiness is important. I support you.", wordBank: ["T'apoio","important","és","felicitat","La"], correctSentence: "La felicitat és important T'apoio" },
    { speaker: "friend", text: "Gràcies! El teu suport vol dir molt per mi.", english: "Thanks! Your support means a lot to me.", options: [] }
  ]
},

// ─── CONVERSATION 50: Apartment Viewing ────────────────────
{
  id: 50,
  icon: "🏠",

  title: "Viewing Apartment",
  unlockAfterLesson: 75,
  difficulty: "intermediate",
  turns: [
    { speaker: "owner", text: "Endavant, aquest és el menjador. Té balcó.", english: "Come in, this is the dining room. It has a balcony.", options: [] },
    { speaker: "user", prompt: "It's very bright. Is it furnished?", wordBank: ["Té","Està","moblat","molta","llum"], correctSentence: "Té molta llum Està moblat" },
    { speaker: "owner", text: "Sí, completament. Inclou electrodomèstics nous.", english: "Yes, completely. Includes new appliances.", options: [] },
    { speaker: "user", prompt: "Perfect. How much is the rent?", wordBank: ["el","és","Quant","lloguer","Perfecte"], correctSentence: "Perfecte Quant és el lloguer" },
    { speaker: "owner", text: "900 euros al mes, més despeses.", english: "900 euros per month, plus expenses.", options: [] },
    { speaker: "user", prompt: "What are the expenses?", wordBank: ["les","despeses","són","Quines"], correctSentence: "Quines són les despeses" },
    { speaker: "owner", text: "Uns 100 euros. Inclou aigua, llum i comunitat.", english: "About 100 euros. Includes water, electricity and building fees.", options: [] },
    { speaker: "user", prompt: "When is it available?", wordBank: ["està","disponible","Quan"], correctSentence: "Quan està disponible" }
  ]
},

// ─── CONVERSATION 51: Tech Support Call ────────────────────
{
  id: 51,
  icon: "💻",

  title: "Tech Support",
  unlockAfterLesson: 76,
  difficulty: "intermediate",
  turns: [
    { speaker: "support", text: "Servei tècnic, bon dia. Com puc ajudar-lo?", english: "Tech support, good morning. How can I help you?", options: [] },
    { speaker: "user", prompt: "My internet hasn't worked since yesterday.", wordBank: ["Internet","d'ahir","des","no","funciona"], correctSentence: "Internet no funciona des d'ahir" },
    { speaker: "support", text: "Ho sento. Ha reiniciat el router?", english: "I'm sorry. Have you restarted the router?", options: [] },
    { speaker: "user", prompt: "Yes, several times. The lights keep blinking.", wordBank: ["diverses","Les","llums","Sí","parpellegen","vegades"], correctSentence: "Sí diverses vegades Les llums parpellegen" },
    { speaker: "support", text: "D'acord. Sembla un problema de línia. Enviaré un tècnic.", english: "Okay. It seems like a line problem. I'll send a technician.", options: [] },
    { speaker: "user", prompt: "When can they come?", wordBank: ["pot","Quan","venir"], correctSentence: "Quan pot venir" },
    { speaker: "support", text: "Demà entre les 9 i les 13h. Li va bé?", english: "Tomorrow between 9 and 1pm. Does that work?", options: [] },
    { speaker: "user", prompt: "Yes, perfect. Thank you.", wordBank: ["Gràcies","perfecte","Sí"], correctSentence: "Sí perfecte Gràcies" }
  ]
},

// ─── CONVERSATION 52: Planning a Birthday Party ────────────
{
  id: 52,
  icon: "🎂",

  title: "Birthday Party",
  unlockAfterLesson: 77,
  difficulty: "intermediate",
  turns: [
    { speaker: "friend", text: "Estic organitzant una festa pels meus 30. Vindràs?", english: "I'm organizing a party for my 30th. Will you come?", options: [] },
    { speaker: "user", prompt: "Of course! When is it?", wordBank: ["Quan","descomptat","Per","és"], correctSentence: "Per descomptat Quan és" },
    { speaker: "friend", text: "Dissabte vinent a casa meva. A les vuit.", english: "Next Saturday at my place. At eight.", options: [] },
    { speaker: "user", prompt: "Should I bring anything?", wordBank: ["cosa","alguna","Porto"], correctSentence: "Porto alguna cosa" },
    { speaker: "friend", text: "No cal, però si vols portar alguna cosa de beure, genial!", english: "No need, but if you want to bring something to drink, great!", options: [] },
    { speaker: "user", prompt: "I'll bring wine. How many people are coming?", wordBank: ["Quanta","vi","gent","vindrà","Portaré"], correctSentence: "Portaré vi Quanta gent vindrà" },
    { speaker: "friend", text: "Uns vint. Serà divertit!", english: "About twenty. It'll be fun!", options: [] }
  ]
},

// ─── CONVERSATION 53: At the Dentist ───────────────────────
{
  id: 53,
  icon: "🦷",

  title: "Dentist Appointment",
  unlockAfterLesson: 78,
  difficulty: "intermediate",
  turns: [
    { speaker: "dentist", text: "Hola! Què et fa mal exactament?", english: "Hi! What hurts exactly?", options: [] },
    { speaker: "user", prompt: "This tooth on the right. When I eat cold things.", wordBank: ["Quan","de","la","dent","fredes","dreta","coses","Aquesta","menjo"], correctSentence: "Aquesta dent de la dreta Quan menjo coses fredes" },
    { speaker: "dentist", text: "D'acord. Deixa'm veure. Obre bé la boca.", english: "Okay. Let me see. Open wide.", options: [] },
    { speaker: "user", prompt: "[Opens mouth]", wordBank: ["[Obre","la","boca]","Em","fa","mal.","Espereu."], correctSentence: "[Obre la boca]" },
    { speaker: "dentist", text: "Tens una càries. Haurem de fer un empastament.", english: "You have a cavity. We'll need to do a filling.", options: [] },
    { speaker: "user", prompt: "Does it hurt?", wordBank: ["mal","Farà"], correctSentence: "Farà mal" },
    { speaker: "dentist", text: "No, faré anestèsia local. No sentiràs res.", english: "No, I'll do local anesthesia. You won't feel anything.", options: [] }
  ]
},

// ─── CONVERSATION 54: Asking for a Raise ───────────────────
{
  id: 54,
  icon: "📈",

  title: "Requesting Raise",
  unlockAfterLesson: 79,
  difficulty: "advanced",
  turns: [
    { speaker: "user", prompt: "Thank you for meeting with me. I wanted to discuss my salary.", wordBank: ["amb","Gràcies","sou","meu","per","Volia","discutir","reunir-te","el","mi"], correctSentence: "Gràcies per reunir-te amb mi Volia discutir el meu sou" },
    { speaker: "boss", text: "Per descomptat. Explica'm.", english: "Of course. Tell me.", options: [] },
    { speaker: "user", prompt: "I've been here three years and exceeded all my targets.", wordBank: ["superat","aquí","anys","i","tres","he","objectius","tots","els","Porto"], correctSentence: "Porto tres anys aquí i he superat tots els objectius" },
    { speaker: "boss", text: "És cert. El teu rendiment ha estat excel·lent.", english: "That's true. Your performance has been excellent.", options: [] },
    { speaker: "user", prompt: "I'd like to discuss a salary increase.", wordBank: ["augment","un","discutir","sou","de","M'agradaria"], correctSentence: "M'agradaria discutir un augment de sou" },
    { speaker: "boss", text: "Quin percentatge tenies al cap?", english: "What percentage did you have in mind?", options: [] },
    { speaker: "user", prompt: "15%, based on market rates.", wordBank: ["en","tarifes","basat","les","mercat","15%","Un","del"], correctSentence: "Un 15% basat en les tarifes del mercat" },
    { speaker: "boss", text: "Deixa'm mirar els números. Parlarem dimarts que ve.", english: "Let me look at the numbers. We'll talk next Tuesday.", options: [] }
  ]
},

// ─── CONVERSATION 55: Final Goodbye (Moving Away) ──────────
{
  id: 55,
  icon: "👋",

  title: "Farewell",
  unlockAfterLesson: 80,
  difficulty: "advanced",
  turns: [
    { speaker: "friend", text: "Així que realment te'n vas a Alemanya...", english: "So you're really leaving for Germany...", options: [] },
    { speaker: "user", prompt: "Yes, it's a great opportunity. But I'll miss you.", wordBank: ["Sí","és","una","gran","oportunitat","Però","et","faltar","trobaré","a"], correctSentence: "Sí és una gran oportunitat Però et trobaré a faltar" },
    { speaker: "friend", text: "I jo a tu. Barcelona no serà el mateix sense tu.", english: "And I'll miss you. Barcelona won't be the same without you.", options: [] },
    { speaker: "user", prompt: "We'll visit each other. And there's video calls.", wordBank: ["ha","hi","I","visitarem","Ens","videotrucades"], correctSentence: "Ens visitarem I hi ha videotrucades" },
    { speaker: "friend", text: "Tens raó. Quan marxes exactament?", english: "You're right. When are you leaving exactly?", options: [] },
    { speaker: "user", prompt: "Next month. I still have a lot to organize.", wordBank: ["Encara","a","organitzar","mes","El","tinc","que","ve","molt"], correctSentence: "El mes que ve Encara tinc molt a organitzar" },
    { speaker: "friend", text: "Si necessites ajuda amb alguna cosa, digues-m'ho.", english: "If you need help with anything, tell me.", options: [] },
    { speaker: "user", prompt: "Thank you. You're a great friend.", wordBank: ["amic/ga","gran","un","Ets","Gràcies"], correctSentence: "Gràcies Ets un gran amic/ga" }
  ]
}
,
{
  id: 56,
  icon: "🚨",
  title: "Emergency Services",
  unlockAfterLesson: 85,
  difficulty: "intermediate",
  turns: [
    { speaker: "operator", text: "Emergències, digui'm. Quina és la seva emergència?", english: "Emergency services, go ahead. What is your emergency?" },
    { speaker: "user", prompt: "Say: I need an ambulance, please.", wordBank: ["si", "us", "plau", "una", "Necessito", "ambulància"], correctSentence: "Necessito una ambulància si us plau" },
    { speaker: "operator", text: "D'acord. On és vostè ara mateix?", english: "Alright. Where are you right now?" },
    { speaker: "user", prompt: "Say: I am on Carrer Gran, number 15.", wordBank: ["Sóc", "al", "número", "Carrer", "Gran", "quinze"], correctSentence: "Sóc al Carrer Gran número quinze" },
    { speaker: "operator", text: "Quina és la naturalesa de l'emergència?", english: "What is the nature of the emergency?" },
    { speaker: "user", prompt: "Say: A person has fallen and is unconscious.", wordBank: ["Una", "persona", "ha", "caigut", "i", "inconscient", "està"], correctSentence: "Una persona ha caigut i està inconscient" },
    { speaker: "operator", text: "L'ambulància és en camí. Queda't amb el telèfon, si us plau.", english: "The ambulance is on its way. Please stay on the line." },
    { speaker: "user", prompt: "Say: Thank you. How long will it take?", wordBank: ["Gràcies", "Quant", "trigarà", "de", "temps"], correctSentence: "Gràcies Quant de temps trigarà" }
  ]
},
{
  id: 57,
  icon: "👮",
  title: "At the Police Station",
  unlockAfterLesson: 90,
  difficulty: "intermediate",
  turns: [
    { speaker: "officer", text: "Bona tarda. En què li puc ajudar?", english: "Good afternoon. How can I help you?" },
    { speaker: "user", prompt: "Say: I want to report a theft.", wordBank: ["denunciar", "un", "robatori", "Vull"], correctSentence: "Vull denunciar un robatori" },
    { speaker: "officer", text: "Ho sento molt. Quan ha passat això?", english: "I'm very sorry. When did this happen?" },
    { speaker: "user", prompt: "Say: This morning, around ten o'clock.", wordBank: ["Aquest", "matí", "cap", "a", "les", "deu"], correctSentence: "Aquest matí cap a les deu" },
    { speaker: "officer", text: "Què li han robat exactament?", english: "What exactly was stolen from you?" },
    { speaker: "user", prompt: "Say: My wallet and my mobile phone.", wordBank: ["La", "meva", "cartera", "i", "el", "meu", "mòbil"], correctSentence: "La meva cartera i el meu mòbil" },
    { speaker: "officer", text: "Té el número de sèrie del telèfon?", english: "Do you have the serial number of the phone?" },
    { speaker: "user", prompt: "Say: No, but I have the model and the colour.", wordBank: ["No", "però", "tinc", "el", "model", "i", "color", "el"], correctSentence: "No però tinc el model i el color" },
    { speaker: "officer", text: "D'acord. Ompli aquest formulari i li donarem un número de denúncia.", english: "Alright. Fill in this form and we will give you a report number." },
    { speaker: "user", prompt: "Say: Thank you. Can I have a copy?", wordBank: ["Gràcies", "Puc", "tenir", "una", "còpia"], correctSentence: "Gràcies Puc tenir una còpia" }
  ]
},
{
  id: 58,
  icon: "🏥",
  title: "At the Doctor",
  unlockAfterLesson: 105,
  difficulty: "intermediate",
  turns: [
    { speaker: "doctor", text: "Bon dia. Soc el doctor Puig. Què li passa?", english: "Good morning. I am Doctor Puig. What seems to be the problem?" },
    { speaker: "user", prompt: "Say: I have had a headache for three days.", wordBank: ["tinc", "tres", "des", "de", "fa", "mal", "de", "cap", "dies"], correctSentence: "Des de fa tres dies tinc mal de cap" },
    { speaker: "doctor", text: "Té febre o altres símptomes?", english: "Do you have a fever or other symptoms?" },
    { speaker: "user", prompt: "Say: Yes, I also feel very tired.", wordBank: ["Sí", "també", "em", "molt", "sento", "cansat"], correctSentence: "Sí també em sento molt cansat" },
    { speaker: "doctor", text: "Li faré una exploració. Respiri fondo, si us plau.", english: "I will examine you. Take a deep breath, please." },
    { speaker: "user", prompt: "Say: Doctor, could it be serious?", wordBank: ["Doctor", "podria", "ser", "greu"], correctSentence: "Doctor podria ser greu" },
    { speaker: "doctor", text: "Probablement és un virus. Li receptaré una cosa per al dolor i el descans.", english: "It is probably a virus. I will prescribe something for the pain and rest." },
    { speaker: "user", prompt: "Say: How many days do I need to rest?", wordBank: ["Quants", "dies", "he", "de", "descansar"], correctSentence: "Quants dies he de descansar" },
    { speaker: "doctor", text: "Uns tres o quatre dies. Si no millora, torni a veure'm.", english: "About three or four days. If you do not improve, come back to see me." },
    { speaker: "user", prompt: "Say: Thank you doctor. I will follow your advice.", wordBank: ["Gràcies", "doctor", "Seguiré", "els", "seus", "consells"], correctSentence: "Gràcies doctor Seguiré els seus consells" }
  ]
},
{
  id: 59,
  icon: "🏦",
  title: "At the Bank",
  unlockAfterLesson: 109,
  difficulty: "intermediate",
  turns: [
    { speaker: "clerk", text: "Bon dia, benvingut al Banc. En què li puc ajudar?", english: "Good morning, welcome to the Bank. How can I help you?" },
    { speaker: "user", prompt: "Say: I would like to open a bank account.", wordBank: ["Voldria", "obrir", "un", "compte", "bancari"], correctSentence: "Voldria obrir un compte bancari" },
    { speaker: "clerk", text: "Perfecte. Té el document d'identitat i el certificat d'empadronament?", english: "Perfect. Do you have your identity document and proof of address?" },
    { speaker: "user", prompt: "Say: Yes, I have my passport and a receipt.", wordBank: ["Sí", "tinc", "el", "meu", "passaport", "i", "un", "rebut"], correctSentence: "Sí tinc el meu passaport i un rebut" },
    { speaker: "clerk", text: "Molt bé. Quin tipus de compte vol? Corrent o d'estalvi?", english: "Very good. What type of account do you want? Current or savings?" },
    { speaker: "user", prompt: "Say: A current account, please.", wordBank: ["Un", "compte", "corrent", "si", "us", "plau"], correctSentence: "Un compte corrent si us plau" },
    { speaker: "clerk", text: "Hi ha una comissió mensual de tres euros. És acceptable?", english: "There is a monthly fee of three euros. Is that acceptable?" },
    { speaker: "user", prompt: "Say: Yes, that is fine. Can I also get a card?", wordBank: ["Sí", "està", "bé", "Puc", "també", "una", "targeta", "tenir"], correctSentence: "Sí està bé Puc també tenir una targeta" },
    { speaker: "clerk", text: "Sí, la targeta s'enviarà a casa seva en cinc dies laborables.", english: "Yes, the card will be sent to your home within five working days." },
    { speaker: "user", prompt: "Say: Perfect. Thank you very much for your help.", wordBank: ["Perfecte", "Moltes", "gràcies", "per", "la", "seva", "ajuda"], correctSentence: "Perfecte Moltes gràcies per la seva ajuda" }
  ]
},
{
  id: 60,
  icon: "🏠",
  title: "Renting a Flat",
  unlockAfterLesson: 117,
  difficulty: "advanced",
  turns: [
    { speaker: "landlord", text: "Hola! Vostè deu ser qui va trucar pel pis. Passi, passi.", english: "Hello! You must be the one who called about the flat. Come in, come in." },
    { speaker: "user", prompt: "Say: Yes, thank you. The flat looks very nice.", wordBank: ["Sí", "gràcies", "El", "pis", "sembla", "molt", "maco"], correctSentence: "Sí gràcies El pis sembla molt maco" },
    { speaker: "landlord", text: "Té dos dormitoris, un bany complet i una terrassa petita.", english: "It has two bedrooms, a full bathroom and a small terrace." },
    { speaker: "user", prompt: "Say: How much is the monthly rent?", wordBank: ["Quant", "és", "el", "lloguer", "mensual"], correctSentence: "Quant és el lloguer mensual" },
    { speaker: "landlord", text: "Mil cent euros al mes, amb les despeses de comunitat incloses.", english: "One thousand one hundred euros per month, with community fees included." },
    { speaker: "user", prompt: "Say: Are bills included too?", wordBank: ["Les", "factures", "també", "estan", "incloses"], correctSentence: "Les factures també estan incloses" },
    { speaker: "landlord", text: "No, la llum i l'aigua van a part. Solen ser uns seixanta euros.", english: "No, electricity and water are separate. They are usually about sixty euros." },
    { speaker: "user", prompt: "Say: And how long is the contract?", wordBank: ["I", "quant", "dura", "el", "contracte"], correctSentence: "I quant dura el contracte" },
    { speaker: "landlord", text: "Un any mínim, amb possibilitat de renovació.", english: "One year minimum, with the possibility of renewal." },
    { speaker: "user", prompt: "Say: I am interested. What are the next steps?", wordBank: ["M'interessa", "Quins", "són", "els", "passos", "següents"], correctSentence: "M'interessa Quins són els passos següents" }
  ]
}
,
// ============================================================
// HOLACATALÀ — CONVERSATIONS C61-C75
// Add these to the end of src/conversations.js
// Before the final ]; closing bracket
// ============================================================

  {
    id: "C61",
    title: "At the Notary",
    icon: "📋",
    difficulty: "Advanced",
    unlocksAfter: "L121",
    description: "Signing an important document at the notary's office",
    turns: [
      { speaker: "Notari", text: "Bon dia! Vostè és el senyor Martí?", isUserTurn: false, translation: "Good morning! Are you Mr Martí?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Confirm your identity and say you have an appointment", correctSentence: "Sí, soc jo. Tinc una cita per signar el contracte", wordBank: ["Sí", "soc", "jo", "Tinc", "una", "cita", "per", "signar", "el", "contracte"] },
      { speaker: "Notari", text: "Perfecte. Necessito el seu passaport i el DNI, si us plau.", isUserTurn: false, translation: "Perfect. I need your passport and ID card, please." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you have the passport but ask if a driving licence is valid", correctSentence: "Tinc el passaport però el carnet de conduir és vàlid?", wordBank: ["Tinc", "el", "passaport", "però", "el", "carnet", "de", "conduir", "és", "vàlid"] },
      { speaker: "Notari", text: "En aquest cas necessitem el passaport obligatòriament.", isUserTurn: false, translation: "In this case we need the passport obligatorily." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you have it here and ask where to sign", correctSentence: "Aquí el tinc. On he de signar exactament?", wordBank: ["Aquí", "el", "tinc", "On", "he", "de", "signar", "exactament"] },
      { speaker: "Notari", text: "Al final de cada pàgina i aquí a la darrera.", isUserTurn: false, translation: "At the bottom of each page and here on the last one." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask when you will receive your copy of the document", correctSentence: "Quan rebré la meva còpia del document?", wordBank: ["Quan", "rebré", "la", "meva", "còpia", "del", "document"] }
    ]
  },

  {
    id: "C62",
    title: "Booking a Specialist",
    icon: "🏥",
    difficulty: "Intermediate",
    unlocksAfter: "L122",
    description: "Calling to book an appointment with a medical specialist",
    turns: [
      { speaker: "Recepcionista", text: "CAP Gràcia, bon dia, en què puc ajudar-lo?", isUserTurn: false, translation: "Health centre Gràcia, good morning, how can I help you?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you need an appointment with the cardiologist", correctSentence: "Necessito demanar hora amb el cardiòleg", wordBank: ["Necessito", "demanar", "hora", "amb", "el", "cardiòleg"] },
      { speaker: "Recepcionista", text: "D'acord. Té targeta sanitària?", isUserTurn: false, translation: "OK. Do you have a health card?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say yes and give your card number", correctSentence: "Sí, el número de la targeta és 1234567890", wordBank: ["Sí", "el", "número", "de", "la", "targeta", "és", "1234567890"] },
      { speaker: "Recepcionista", text: "Perfecte. Tenim disponibilitat el dijous a les 10 del matí.", isUserTurn: false, translation: "Perfect. We have availability on Thursday at 10 in the morning." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say Thursday is fine and ask what to bring", correctSentence: "El dijous em va bé. Què he de portar?", wordBank: ["El", "dijous", "em", "va", "bé", "Què", "he", "de", "portar"] },
      { speaker: "Recepcionista", text: "Porti el volant del metge de capçalera i les analítiques.", isUserTurn: false, translation: "Bring the GP referral and the blood test results." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Thank them and confirm the appointment", correctSentence: "Moltes gràcies, fins el dijous", wordBank: ["Moltes", "gràcies", "fins", "el", "dijous"] }
    ]
  },

  {
    id: "C63",
    title: "Viewing a Property",
    icon: "🏠",
    difficulty: "Advanced",
    unlocksAfter: "L123",
    description: "Visiting a flat with an estate agent",
    turns: [
      { speaker: "Agent", text: "Benvingut! Aquest és el pis. Té 90 metres quadrats.", isUserTurn: false, translation: "Welcome! This is the flat. It has 90 square metres." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say it looks bigger than expected and ask what floor it is", correctSentence: "Sembla més gran del que esperava. A quina planta és?", wordBank: ["Sembla", "més", "gran", "del", "que", "esperava", "A", "quina", "planta", "és"] },
      { speaker: "Agent", text: "És al tercer pis, amb ascensor. Té molt de llum natural.", isUserTurn: false, translation: "It's on the third floor, with a lift. It has a lot of natural light." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask if the deposit is one or two months", correctSentence: "La fiança és d'un mes o de dos?", wordBank: ["La", "fiança", "és", "d'un", "mes", "o", "de", "dos"] },
      { speaker: "Agent", text: "Dos mesos de fiança i el primer mes per endavant.", isUserTurn: false, translation: "Two months deposit and the first month upfront." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask if utilities are included in the rent", correctSentence: "Els subministraments estan inclosos en el lloguer?", wordBank: ["Els", "subministraments", "estan", "inclosos", "en", "el", "lloguer"] },
      { speaker: "Agent", text: "No, els pagueu a part. La comunitat sí que està inclosa.", isUserTurn: false, translation: "No, you pay those separately. The community fees are included." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you're interested and ask when you can move in", correctSentence: "M'interessa. Quan es pot entrar a viure?", wordBank: ["M'interessa", "Quan", "es", "pot", "entrar", "a", "viure"] }
    ]
  },

  {
    id: "C64",
    title: "School Meeting",
    icon: "🎒",
    difficulty: "Intermediate",
    unlocksAfter: "L124",
    description: "Meeting with your child's teacher at school",
    turns: [
      { speaker: "Mestra", text: "Bon dia! Sou els pares de la Júlia?", isUserTurn: false, translation: "Good morning! Are you Julia's parents?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Confirm and say you are pleased to meet her", correctSentence: "Sí, som els seus pares. Encantat de conèixer-la", wordBank: ["Sí", "som", "els", "seus", "pares", "Encantat", "de", "conèixer-la"] },
      { speaker: "Mestra", text: "La Júlia és una alumna molt bona. Però té dificultats amb les matemàtiques.", isUserTurn: false, translation: "Julia is a very good pupil. But she has difficulties with maths." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you know and ask how you can help her at home", correctSentence: "Ho sabíem. Com la podem ajudar a casa?", wordBank: ["Ho", "sabíem", "Com", "la", "podem", "ajudar", "a", "casa"] },
      { speaker: "Mestra", text: "Practicant els deures cada dia, uns vint minuts n'hi ha prou.", isUserTurn: false, translation: "Practising homework every day, about twenty minutes is enough." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask if there are any extra classes available", correctSentence: "Hi ha classes de reforç disponibles?", wordBank: ["Hi", "ha", "classes", "de", "reforç", "disponibles"] },
      { speaker: "Mestra", text: "Sí, els dimecres de quatre a cinc. Apunteu-la si voleu.", isUserTurn: false, translation: "Yes, on Wednesdays from four to five. Sign her up if you want." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say yes, you will sign her up and thank the teacher", correctSentence: "Sí, l'apuntem. Moltes gràcies per tot", wordBank: ["Sí", "l'apuntem", "Moltes", "gràcies", "per", "tot"] }
    ]
  },

  {
    id: "C65",
    title: "After the Match",
    icon: "⚽",
    difficulty: "Intermediate",
    unlocksAfter: "L125",
    description: "Discussing a football match with a friend",
    turns: [
      { speaker: "Amic", text: "Has vist el partit ahir? Increïble!", isUserTurn: false, translation: "Did you see the match yesterday? Incredible!" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say yes and that the second goal was spectacular", correctSentence: "Sí! El segon gol ha estat espectacular", wordBank: ["Sí", "El", "segon", "gol", "ha", "estat", "espectacular"] },
      { speaker: "Amic", text: "I l'àrbitre? Quines decisions tan dolentes!", isUserTurn: false, translation: "And the referee? What terrible decisions!" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Agree and say the red card was completely unjust", correctSentence: "Sí, la targeta vermella ha estat completament injusta", wordBank: ["Sí", "la", "targeta", "vermella", "ha", "estat", "completament", "injusta"] },
      { speaker: "Amic", text: "Ara el campionat s'ha complicat molt.", isUserTurn: false, translation: "Now the championship has got much more complicated." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you still believe in the team and they will win the league", correctSentence: "Encara crec en l'equip, guanyaran la lliga", wordBank: ["Encara", "crec", "en", "l'equip", "guanyaran", "la", "lliga"] },
      { speaker: "Amic", text: "Esperem! Vas al proper partit a l'estadi?", isUserTurn: false, translation: "Let's hope so! Are you going to the next match at the stadium?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say yes, you already have tickets for Saturday", correctSentence: "Sí, ja tinc les entrades per dissabte", wordBank: ["Sí", "ja", "tinc", "les", "entrades", "per", "dissabte"] }
    ]
  },

  {
    id: "C66",
    title: "At the Museum",
    icon: "🖼️",
    difficulty: "Intermediate",
    unlocksAfter: "L126",
    description: "Visiting a museum and discussing art with a guide",
    turns: [
      { speaker: "Guia", text: "Benvinguts al MNAC! Avui veurem la col·lecció de Modernisme.", isUserTurn: false, translation: "Welcome to MNAC! Today we'll see the Modernisme collection." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask if the Gaudí works are included in this exhibition", correctSentence: "Les obres de Gaudí estan incloses en aquesta exposició?", wordBank: ["Les", "obres", "de", "Gaudí", "estan", "incloses", "en", "aquesta", "exposició"] },
      { speaker: "Guia", text: "Gaudí és principalment a la Sagrada Família. Aquí tenim Domènech i Puig.", isUserTurn: false, translation: "Gaudí is mainly at the Sagrada Família. Here we have Domènech and Puig." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say the paintings are impressive and ask about the largest one", correctSentence: "Els quadres són impressionants. Qui ha pintat el més gran?", wordBank: ["Els", "quadres", "són", "impressionants", "Qui", "ha", "pintat", "el", "més", "gran"] },
      { speaker: "Guia", text: "Aquell és de Ramon Casas, un dels grans artistes catalans.", isUserTurn: false, translation: "That one is by Ramon Casas, one of the great Catalan artists." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask if there is a catalogue you can buy to take home", correctSentence: "Hi ha un catàleg que pugui comprar per endur-me a casa?", wordBank: ["Hi", "ha", "un", "catàleg", "que", "pugui", "comprar", "per", "endur-me", "a", "casa"] },
      { speaker: "Guia", text: "Sí, a la botiga del museu trobareu tot el que necessiteu.", isUserTurn: false, translation: "Yes, at the museum shop you'll find everything you need." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Thank the guide and say it has been a very enriching visit", correctSentence: "Moltes gràcies, ha estat una visita molt enriquidora", wordBank: ["Moltes", "gràcies", "ha", "estat", "una", "visita", "molt", "enriquidora"] }
    ]
  },

  {
    id: "C67",
    title: "Concert Night",
    icon: "🎵",
    difficulty: "Intermediate",
    unlocksAfter: "L127",
    description: "At a concert venue with a friend",
    turns: [
      { speaker: "Amic", text: "Quina cua! Menys mal que tenim les entrades comprades.", isUserTurn: false, translation: "What a queue! Just as well we bought the tickets." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Agree and say the group always attracts a lot of people", correctSentence: "Sí, aquest grup sempre atrau molta gent", wordBank: ["Sí", "aquest", "grup", "sempre", "atrau", "molta", "gent"] },
      { speaker: "Amic", text: "Saps quins cançons tocaran? He sentit que fan un nou àlbum.", isUserTurn: false, translation: "Do you know which songs they'll play? I've heard they're doing a new album." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you hope they play songs from the new album and the old ones too", correctSentence: "Espero que toquin cançons del nou àlbum i també les antigues", wordBank: ["Espero", "que", "toquin", "cançons", "del", "nou", "àlbum", "i", "també", "les", "antigues"] },
      { speaker: "Amic", text: "El cantant és increïble en directe. Millor que al disc.", isUserTurn: false, translation: "The singer is incredible live. Better than on the record." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you agree, live music is a completely different experience", correctSentence: "Tens raó, la música en directe és una experiència completament diferent", wordBank: ["Tens", "raó", "la", "música", "en", "directe", "és", "una", "experiència", "completament", "diferent"] },
      { speaker: "Amic", text: "Mira, ja obren les portes! Anem cap a l'escenari!", isUserTurn: false, translation: "Look, they're opening the doors! Let's go towards the stage!" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say great and that you want to be in the front row", correctSentence: "Genial! Vull ser a la primera fila", wordBank: ["Genial", "Vull", "ser", "a", "la", "primera", "fila"] }
    ]
  },

  {
    id: "C68",
    title: "Tourist Information",
    icon: "🗺️",
    difficulty: "Intermediate",
    unlocksAfter: "L128",
    description: "Getting help from the tourist information office",
    turns: [
      { speaker: "Oficina", text: "Benvingut a l'oficina de turisme! En què puc ajudar-lo?", isUserTurn: false, translation: "Welcome to the tourist office! How can I help you?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you want to do a guided excursion to Montserrat", correctSentence: "Vull fer una excursió guiada a Montserrat", wordBank: ["Vull", "fer", "una", "excursió", "guiada", "a", "Montserrat"] },
      { speaker: "Oficina", text: "Tenim sortides cada matí a les 9. Inclou transport i guia.", isUserTurn: false, translation: "We have departures every morning at 9. It includes transport and guide." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask how long the excursion lasts and if lunch is included", correctSentence: "Quant dura l'excursió i el dinar hi és inclòs?", wordBank: ["Quant", "dura", "l'excursió", "i", "el", "dinar", "hi", "és", "inclòs"] },
      { speaker: "Oficina", text: "Sis hores en total. El dinar no hi és inclòs però hi ha restaurants.", isUserTurn: false, translation: "Six hours in total. Lunch is not included but there are restaurants." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask the price for two adults", correctSentence: "Quin és el preu per a dos adults?", wordBank: ["Quin", "és", "el", "preu", "per", "a", "dos", "adults"] },
      { speaker: "Oficina", text: "Seixanta euros per persona. Vol reservar per a demà?", isUserTurn: false, translation: "Sixty euros per person. Do you want to book for tomorrow?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say yes, book for two people for tomorrow", correctSentence: "Sí, vull reservar per a dues persones per a demà", wordBank: ["Sí", "vull", "reservar", "per", "a", "dues", "persones", "per", "a", "demà"] }
    ]
  },

  {
    id: "C69",
    title: "Talking About Gaudí",
    icon: "🏛️",
    difficulty: "Advanced",
    unlocksAfter: "L129",
    description: "A deep conversation about Gaudí's architecture",
    turns: [
      { speaker: "Guia", text: "Ara som davant de la façana de la Nativitat, la primera que va construir Gaudí.", isUserTurn: false, translation: "Now we are in front of the Nativity facade, the first one Gaudí built." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say the stained glass windows are extraordinary", correctSentence: "Els vitralls són extraordinaris", wordBank: ["Els", "vitralls", "són", "extraordinaris"] },
      { speaker: "Guia", text: "Sí! Gaudí va combinar el Modernisme amb elements gòtics i orientals.", isUserTurn: false, translation: "Yes! Gaudí combined Modernisme with Gothic and Oriental elements." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask when the Sagrada Família will be finally finished", correctSentence: "Quan s'acabarà definitivament la Sagrada Família?", wordBank: ["Quan", "s'acabarà", "definitivament", "la", "Sagrada", "Família"] },
      { speaker: "Guia", text: "Esperem que cap al 2026, el centenari de la mort de Gaudí.", isUserTurn: false, translation: "We hope around 2026, the centenary of Gaudí's death." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say it is incredible that it has been under construction for 140 years", correctSentence: "És increïble que porti 140 anys en construcció", wordBank: ["És", "increïble", "que", "porti", "140", "anys", "en", "construcció"] },
      { speaker: "Guia", text: "Gaudí va dir que el seu client no tenia pressa. Es referia a Déu.", isUserTurn: false, translation: "Gaudí said his client was in no hurry. He was referring to God." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say that is a wonderful phrase and that Gaudí was a visionary", correctSentence: "Quina frase tan meravellosa, Gaudí era un visionari", wordBank: ["Quina", "frase", "tan", "meravellosa", "Gaudí", "era", "un", "visionari"] }
    ]
  },

  {
    id: "C70",
    title: "Wine Tasting",
    icon: "🍷",
    difficulty: "Advanced",
    unlocksAfter: "L130",
    description: "A guided wine tasting at a Penedès winery",
    turns: [
      { speaker: "Sommelier", text: "Benvinguts al celler! Comencem amb un blanc del Penedès.", isUserTurn: false, translation: "Welcome to the winery! We'll start with a white from Penedès." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask what year the vintage is and what grapes they use", correctSentence: "De quina anyada és i quins raïms fan servir?", wordBank: ["De", "quina", "anyada", "és", "i", "quins", "raïms", "fan", "servir"] },
      { speaker: "Sommelier", text: "És del 2022, elaborat amb raïm Xarel·lo, molt típic d'aquí.", isUserTurn: false, translation: "It's from 2022, made with Xarel·lo grapes, very typical here." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say it has a very fresh taste and ask what food it pairs with", correctSentence: "Té un gust molt fresc. Amb quin menjar marida bé?", wordBank: ["Té", "un", "gust", "molt", "fresc", "Amb", "quin", "menjar", "marida", "bé"] },
      { speaker: "Sommelier", text: "Perfecte amb marisc i peix. Ara provem el negre del Priorat.", isUserTurn: false, translation: "Perfect with seafood and fish. Now let's try the Priorat red." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say the red is much more intense and complex", correctSentence: "El negre és molt més intens i complex", wordBank: ["El", "negre", "és", "molt", "més", "intens", "i", "complex"] },
      { speaker: "Sommelier", text: "Exacte! El Priorat és famós per la seva potència. El preferiu?", isUserTurn: false, translation: "Exactly! Priorat is famous for its power. Do you prefer it?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you prefer the white but want to buy a bottle of each", correctSentence: "Prefereixo el blanc però vull comprar una ampolla de cadascun", wordBank: ["Prefereixo", "el", "blanc", "però", "vull", "comprar", "una", "ampolla", "de", "cadascun"] }
    ]
  },

  {
    id: "C71",
    title: "Historical Walking Tour",
    icon: "🏛️",
    difficulty: "Advanced",
    unlocksAfter: "L131",
    description: "A walking tour through the Gothic Quarter learning about Catalan history",
    turns: [
      { speaker: "Guia", text: "Som al Barri Gòtic, el cor medieval de Barcelona. Aquí va néixer Catalunya.", isUserTurn: false, translation: "We're in the Gothic Quarter, the medieval heart of Barcelona. This is where Catalonia was born." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask when the city of Barcelona was founded", correctSentence: "Quan va ser fundada la ciutat de Barcelona?", wordBank: ["Quan", "va", "ser", "fundada", "la", "ciutat", "de", "Barcelona"] },
      { speaker: "Guia", text: "Els romans la van fundar l'any 15 aC. Però el comtat català és del segle IX.", isUserTurn: false, translation: "The Romans founded it in 15 BC. But the Catalan county is from the 9th century." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you did not know it was so old and ask about the Count of Barcelona", correctSentence: "No sabia que fos tan antiga. Qui era el Comte de Barcelona?", wordBank: ["No", "sabia", "que", "fos", "tan", "antiga", "Qui", "era", "el", "Comte", "de", "Barcelona"] },
      { speaker: "Guia", text: "El primer comte unificador va ser Guifré el Pilós al segle IX.", isUserTurn: false, translation: "The first unifying count was Wilfred the Hairy in the 9th century." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask why Catalan history is so different from Spanish history", correctSentence: "Per què la història catalana és tan diferent de l'espanyola?", wordBank: ["Per", "què", "la", "història", "catalana", "és", "tan", "diferent", "de", "l'espanyola"] },
      { speaker: "Guia", text: "Perquè Catalunya va néixer com un territori independent, no com a part de Castella.", isUserTurn: false, translation: "Because Catalonia was born as an independent territory, not as part of Castile." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say this helps you understand the present much better", correctSentence: "Això m'ajuda a entendre molt millor el present", wordBank: ["Això", "m'ajuda", "a", "entendre", "molt", "millor", "el", "present"] }
    ]
  },

  {
    id: "C72",
    title: "Talking About the Civil War",
    icon: "📚",
    difficulty: "Expert",
    unlocksAfter: "L132",
    description: "A sensitive conversation about the Spanish Civil War and its impact on Catalonia",
    turns: [
      { speaker: "Avi", text: "El meu avi em va explicar com va ser la guerra civil aquí.", isUserTurn: false, translation: "My grandfather told me what the civil war was like here." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you have read about it and it was a very hard period", correctSentence: "He llegit sobre aquella època i va ser un període molt dur", wordBank: ["He", "llegit", "sobre", "aquella", "època", "i", "va", "ser", "un", "període", "molt", "dur"] },
      { speaker: "Avi", text: "Sí. Durant la dictadura, parlar català era perillós.", isUserTurn: false, translation: "Yes. During the dictatorship, speaking Catalan was dangerous." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say it is incredible that a language was forbidden and ask how people resisted", correctSentence: "És increïble que es prohibís una llengua. Com van resistir?", wordBank: ["És", "increïble", "que", "es", "prohibís", "una", "llengua", "Com", "van", "resistir"] },
      { speaker: "Avi", text: "Parlaven català a casa, en secret. La llengua va sobreviure gràcies a les famílies.", isUserTurn: false, translation: "They spoke Catalan at home, in secret. The language survived thanks to families." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say that is why learning Catalan feels so meaningful to you", correctSentence: "Per això aprendre català és tan significatiu per a mi", wordBank: ["Per", "això", "aprendre", "català", "és", "tan", "significatiu", "per", "a", "mi"] },
      { speaker: "Avi", text: "M'alegra molt que ho entenguis. Els estrangers que aprenen català ens donen esperança.", isUserTurn: false, translation: "I'm very glad you understand. Foreigners who learn Catalan give us hope." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you will continue learning and using Catalan every day", correctSentence: "Continuaré aprenent i fent servir el català cada dia", wordBank: ["Continuaré", "aprenent", "i", "fent", "servir", "el", "català", "cada", "dia"] }
    ]
  },

  {
    id: "C73",
    title: "Planning a Hike",
    icon: "🥾",
    difficulty: "Intermediate",
    unlocksAfter: "L135",
    description: "Planning a hiking trip in the Pyrenees with friends",
    turns: [
      { speaker: "Amic", text: "Hem de planificar la sortida de senderisme als Pirineus!", isUserTurn: false, translation: "We need to plan the hiking trip to the Pyrenees!" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you want to go to the Aigüestortes national park", correctSentence: "Vull anar al parc nacional d'Aigüestortes", wordBank: ["Vull", "anar", "al", "parc", "nacional", "d'Aigüestortes"] },
      { speaker: "Amic", text: "Excel·lent elecció! Hi ha llacs increïbles. Quant de temps tenim?", isUserTurn: false, translation: "Excellent choice! There are incredible lakes. How much time do we have?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you have three days and want to sleep in a mountain hut", correctSentence: "Tenim tres dies i vull dormir en un refugi de muntanya", wordBank: ["Tenim", "tres", "dies", "i", "vull", "dormir", "en", "un", "refugi", "de", "muntanya"] },
      { speaker: "Amic", text: "Perfecte! Cal reservar el refugi amb antelació a l'estiu.", isUserTurn: false, translation: "Perfect! You need to book the mountain hut in advance in summer." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask what level of difficulty the trail is and if children can do it", correctSentence: "Quin nivell de dificultat té el sender i els nens hi poden anar?", wordBank: ["Quin", "nivell", "de", "dificultat", "té", "el", "sender", "i", "els", "nens", "hi", "poden", "anar"] },
      { speaker: "Amic", text: "Hi ha senders per a tots els nivells. Pels nens hi ha rutes fàcils.", isUserTurn: false, translation: "There are trails for all levels. For children there are easy routes." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say perfect and that you will book everything this weekend", correctSentence: "Perfecte, ho reservo tot aquest cap de setmana", wordBank: ["Perfecte", "ho", "reservo", "tot", "aquest", "cap", "de", "setmana"] }
    ]
  },

  {
    id: "C74",
    title: "Sant Joan Night",
    icon: "🔥",
    difficulty: "Intermediate",
    unlocksAfter: "L138",
    description: "Celebrating the Midsummer festival of Sant Joan",
    turns: [
      { speaker: "Veí", text: "Feliç Revetlla de Sant Joan! Vens a la foguera de la plaça?", isUserTurn: false, translation: "Happy Sant Joan Eve! Are you coming to the bonfire in the square?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say happy Sant Joan and ask what time the bonfire is lit", correctSentence: "Feliç Sant Joan! A quina hora encenen la foguera?", wordBank: ["Feliç", "Sant", "Joan", "A", "quina", "hora", "encenen", "la", "foguera"] },
      { speaker: "Veí", text: "A la mitjanit! I després hi ha focs artificials fins a les dues.", isUserTurn: false, translation: "At midnight! And then there are fireworks until two." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Ask if the correfoc is also happening tonight", correctSentence: "El correfoc també és aquesta nit?", wordBank: ["El", "correfoc", "també", "és", "aquesta", "nit"] },
      { speaker: "Veí", text: "Sí! El correfoc comença a les onze. Porta roba vella!", isUserTurn: false, translation: "Yes! The correfoc starts at eleven. Wear old clothes!" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say it is the first time you celebrate Sant Joan and ask what the correfoc is exactly", correctSentence: "És el primer cop que celebro Sant Joan. Què és exactament el correfoc?", wordBank: ["És", "el", "primer", "cop", "que", "celebro", "Sant", "Joan", "Què", "és", "exactament", "el", "correfoc"] },
      { speaker: "Veí", text: "Gent disfressada de dimonis amb focs artificials. És boig però meravellós!", isUserTurn: false, translation: "People dressed as devils with fireworks. It's mad but marvellous!" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you cannot wait and that this is exactly why you love Catalonia", correctSentence: "Tinc moltes ganes i és exactament per això que m'encanta Catalunya", wordBank: ["Tinc", "moltes", "ganes", "i", "és", "exactament", "per", "això", "que", "m'encanta", "Catalunya"] }
    ]
  },

  {
    id: "C75",
    title: "Negotiating at Work",
    icon: "💼",
    difficulty: "Expert",
    unlocksAfter: "L140",
    description: "Negotiating a salary raise with your manager in Catalan",
    turns: [
      { speaker: "Cap", text: "Bon dia! Has demanat reunir-te amb mi. De què vols parlar?", isUserTurn: false, translation: "Good morning! You asked to meet with me. What do you want to talk about?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you want to talk about your salary and your role in the company", correctSentence: "Vull parlar del meu sou i del meu paper a l'empresa", wordBank: ["Vull", "parlar", "del", "meu", "sou", "i", "del", "meu", "paper", "a", "l'empresa"] },
      { speaker: "Cap", text: "D'acord. Quina és la teva proposta?", isUserTurn: false, translation: "OK. What is your proposal?" },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you have been with the company for three years and your results have been excellent", correctSentence: "Porto tres anys a l'empresa i els meus resultats han estat excel·lents", wordBank: ["Porto", "tres", "anys", "a", "l'empresa", "i", "els", "meus", "resultats", "han", "estat", "excel·lents"] },
      { speaker: "Cap", text: "Sí, el teu treball és molt valorat. Però el pressupost és limitat.", isUserTurn: false, translation: "Yes, your work is highly valued. But the budget is limited." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you understand but insist that a 10% raise is fair given your contribution", correctSentence: "Ho entenc però insisteixo que un augment del 10% és just donada la meva contribució", wordBank: ["Ho", "entenc", "però", "insisteixo", "que", "un", "augment", "del", "10%", "és", "just", "donada", "la", "meva", "contribució"] },
      { speaker: "Cap", text: "Puc oferir un 7% ara i revisar-ho en sis mesos.", isUserTurn: false, translation: "I can offer 7% now and review it in six months." },
      { speaker: "user", text: "", isUserTurn: true, prompt: "Say you agree and thank them for their time and consideration", correctSentence: "D'acord, accepto. Gràcies pel seu temps i per considerar la meva petició", wordBank: ["D'acord", "accepto", "Gràcies", "pel", "seu", "temps", "i", "per", "considerar", "la", "meva", "petició"] }
    ]
  },
  ]; 


