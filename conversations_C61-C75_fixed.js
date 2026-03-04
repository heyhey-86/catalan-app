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
