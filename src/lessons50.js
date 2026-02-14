// ============================================================
// lessons50.js — Full 50-Lesson Content for HolaCatalà
// ============================================================
// Lessons 1-10:  Original format (Intro → Flashcards → Match → Quiz)
// Lessons 11-20: Fill-in-the-blank + Sentence Ordering
// Lessons 21-30: Mini-conversations + Error Correction + Listen-and-type
// Lessons 31-40: Mixed formats (intermediate vocabulary)
// Lessons 41-50: Mixed formats (advanced, production-based)
//
// Each lesson has:
//   - id, title, module, free (boolean)
//   - words: array of { en, ca, pronunciation }
//   - stages: array describing which stage types to use
//   - stageData: the data for each new-format stage
// ============================================================

export const lessons = [

  // ═══════════════════════════════════════════════════════════
  // MODULE 1: BASICS (Lessons 1-5)
  // Format: Classic (Intro → Flashcards → Match → Quiz)
  // ═══════════════════════════════════════════════════════════
  
  {
    id: 1,
    title: "Greetings & Basics",
    module: "Basics",
    free: true,
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Hello", ca: "Hola", pronunciation: "OH-lah" },
      { en: "Good morning", ca: "Bon dia", pronunciation: "bon DEE-ah" },
      { en: "Good afternoon", ca: "Bona tarda", pronunciation: "BOH-nah TAR-dah" },
      { en: "Good evening", ca: "Bon vespre", pronunciation: "bon BES-preh" },
      { en: "Goodbye", ca: "Adéu", pronunciation: "ah-DEH-oo" },
      { en: "Please", ca: "Si us plau", pronunciation: "see oos PLOW" },
      { en: "Thank you", ca: "Gràcies", pronunciation: "GRAH-see-es" },
      { en: "Yes", ca: "Sí", pronunciation: "SEE" },
      { en: "No", ca: "No", pronunciation: "NOH" }
    ]
  },

  {
    id: 2,
    title: "Numbers 1-10",
    module: "Basics",
    free: true,
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "One", ca: "Un", pronunciation: "OON" },
      { en: "Two", ca: "Dos", pronunciation: "DOHS" },
      { en: "Three", ca: "Tres", pronunciation: "TREHS" },
      { en: "Four", ca: "Quatre", pronunciation: "KAH-treh" },
      { en: "Five", ca: "Cinc", pronunciation: "SEENK" },
      { en: "Six", ca: "Sis", pronunciation: "SEES" },
      { en: "Seven", ca: "Set", pronunciation: "SEHT" },
      { en: "Eight", ca: "Vuit", pronunciation: "bweet" },
      { en: "Nine", ca: "Nou", pronunciation: "NOH-oo" },
      { en: "Ten", ca: "Deu", pronunciation: "DEH-oo" }
    ]
  },

  {
    id: 3,
    title: "At the Restaurant",
    module: "Basics",
    free: true,
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Water", ca: "Aigua", pronunciation: "EYE-gwah" },
      { en: "Wine", ca: "Vi", pronunciation: "bee" },
      { en: "Beer", ca: "Cervesa", pronunciation: "ser-BEH-sah" },
      { en: "Coffee", ca: "Cafè", pronunciation: "kah-FEH" },
      { en: "Bread", ca: "Pa", pronunciation: "PAH" },
      { en: "I would like", ca: "Voldria", pronunciation: "bol-DREE-ah" },
      { en: "The bill", ca: "El compte", pronunciation: "el KOHM-teh" },
      { en: "Menu", ca: "La carta", pronunciation: "lah KAR-tah" }
    ]
  },

  {
    id: 4,
    title: "Essential Phrases",
    module: "Basics",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Excuse me", ca: "Perdoni", pronunciation: "per-DOH-nee" },
      { en: "I'm sorry", ca: "Ho sento", pronunciation: "oh SEN-toh" },
      { en: "I don't understand", ca: "No entenc", pronunciation: "noh en-TENK" },
      { en: "Do you speak English?", ca: "Parla anglès?", pronunciation: "PAR-lah an-GLEHS" },
      { en: "How much?", ca: "Quant costa?", pronunciation: "kwant KOHS-tah" },
      { en: "Where is...?", ca: "On és...?", pronunciation: "ohn EHS" },
      { en: "Help", ca: "Ajuda", pronunciation: "ah-ZHOO-dah" },
      { en: "Change", ca: "Canvi", pronunciation: "KAN-bee" }
    ]
  },

  {
    id: 5,
    title: "Days & Time",
    module: "Basics",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Monday", ca: "Dilluns", pronunciation: "dee-YOONS" },
      { en: "Tuesday", ca: "Dimarts", pronunciation: "dee-MARTS" },
      { en: "Wednesday", ca: "Dimecres", pronunciation: "dee-MEH-krehs" },
      { en: "Thursday", ca: "Dijous", pronunciation: "dee-ZHOHS" },
      { en: "Friday", ca: "Divendres", pronunciation: "dee-BEN-drehs" },
      { en: "Saturday", ca: "Dissabte", pronunciation: "dee-SAB-teh" },
      { en: "Sunday", ca: "Diumenge", pronunciation: "dee-oo-MEN-zheh" },
      { en: "Today", ca: "Avui", pronunciation: "ah-BOO-ee" },
      { en: "Tomorrow", ca: "Demà", pronunciation: "deh-MAH" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // MODULE 2: DAILY LIFE (Lessons 6-10)
  // Format: Classic (Intro → Flashcards → Match → Quiz)
  // ═══════════════════════════════════════════════════════════

  {
    id: 6,
    title: "Food & Drink",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Meat", ca: "Carn", pronunciation: "KARN" },
      { en: "Fish", ca: "Peix", pronunciation: "PAYSH" },
      { en: "Chicken", ca: "Pollastre", pronunciation: "poh-YAHS-treh" },
      { en: "Rice", ca: "Arròs", pronunciation: "ah-RROHS" },
      { en: "Salad", ca: "Amanida", pronunciation: "ah-mah-NEE-dah" },
      { en: "Fruit", ca: "Fruita", pronunciation: "FROO-ee-tah" },
      { en: "Milk", ca: "Llet", pronunciation: "YEHT" },
      { en: "Sugar", ca: "Sucre", pronunciation: "SOO-kreh" }
    ]
  },

  {
    id: 7,
    title: "Around Town",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Street", ca: "Carrer", pronunciation: "kah-RRER" },
      { en: "Square/Plaza", ca: "Plaça", pronunciation: "PLAH-sah" },
      { en: "Shop", ca: "Botiga", pronunciation: "boh-TEE-gah" },
      { en: "Market", ca: "Mercat", pronunciation: "mer-KAHT" },
      { en: "Church", ca: "Església", pronunciation: "ez-GLEH-zee-ah" },
      { en: "Hospital", ca: "Hospital", pronunciation: "ohs-pee-TAHL" },
      { en: "Pharmacy", ca: "Farmàcia", pronunciation: "far-MAH-see-ah" },
      { en: "Bank", ca: "Banc", pronunciation: "BAHNK" }
    ]
  },

  {
    id: 8,
    title: "Getting Around",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Bus", ca: "Autobús", pronunciation: "ow-toh-BOOS" },
      { en: "Train", ca: "Tren", pronunciation: "TREHN" },
      { en: "Metro", ca: "Metro", pronunciation: "MEH-troh" },
      { en: "Taxi", ca: "Taxi", pronunciation: "TAHK-see" },
      { en: "On foot", ca: "A peu", pronunciation: "ah PEH-oo" },
      { en: "Left", ca: "Esquerra", pronunciation: "es-KEH-rah" },
      { en: "Right", ca: "Dreta", pronunciation: "DREH-tah" },
      { en: "Do you live here?", ca: "Vius aquí?", pronunciation: "bee-oos ah-KEE" }
    ]
  },

  {
    id: 9,
    title: "Family & People",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Family", ca: "Família", pronunciation: "fah-MEE-lee-ah" },
      { en: "Father", ca: "Pare", pronunciation: "PAH-reh" },
      { en: "Mother", ca: "Mare", pronunciation: "MAH-reh" },
      { en: "Son", ca: "Fill", pronunciation: "FEE-yee" },
      { en: "Daughter", ca: "Filla", pronunciation: "FEE-yah" },
      { en: "Friend (m)", ca: "Amic", pronunciation: "ah-MEEK" },
      { en: "Friend (f)", ca: "Amiga", pronunciation: "ah-MEE-gah" },
      { en: "Child", ca: "Nen/Nena", pronunciation: "NEHN / NEH-nah" }
    ]
  },

  {
    id: 10,
    title: "Feelings & Descriptions",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Happy", ca: "Content", pronunciation: "kohn-TEHN" },
      { en: "Sad", ca: "Trist", pronunciation: "TREEST" },
      { en: "Tired", ca: "Cansat", pronunciation: "kahn-SAHT" },
      { en: "Good", ca: "Bo/Bona", pronunciation: "BOH / BOH-nah" },
      { en: "Bad", ca: "Dolent", pronunciation: "doh-LEHN" },
      { en: "Big", ca: "Gran", pronunciation: "GRAHN" },
      { en: "Small", ca: "Petit", pronunciation: "peh-TEET" },
      { en: "Beautiful", ca: "Bonic", pronunciation: "boh-NEEK" }
    ]
  },

  // BRIDGE LESSON: Essential Verbs
  // Teaches the 5 key verbs needed for lessons 11-20
  {
    id: 51,
    title: "Essential Verbs",
    module: "Foundations",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Is", ca: "És", pronunciation: "EHS" },
      { en: "I would like", ca: "Voldria", pronunciation: "bol-DREE-ah" },
      { en: "How much does it cost?", ca: "Quant costa?", pronunciation: "kwahnt KOHS-tah" },
      { en: "Where is?", ca: "On és?", pronunciation: "ohn EHS" },
      { en: "It makes / It's (weather)", ca: "Fa", pronunciation: "FAH" },
      { en: "It hurts me", ca: "Em fa mal", pronunciation: "ehm fah MAHL" },
      { en: "Very", ca: "Molt", pronunciation: "MOHLT" },
      { en: "This", ca: "Això", pronunciation: "ah-SHOH" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Barcelona ___ molt bonica", blank: "és", options: ["és", "fa", "voldria", "on"], correctIndex: 0, translation: "Barcelona is very beautiful", explanation: "'És' = is. The most important verb in Catalan! Use it to describe things." },
        { sentence: "___ un cafè, si us plau", blank: "Voldria", options: ["És", "Voldria", "Fa", "On"], correctIndex: 1, translation: "I would like a coffee, please", explanation: "'Voldria' = I would like. The polite way to ask for things." },
        { sentence: "___ costa el pa?", blank: "Quant", options: ["On", "Què", "Quant", "Com"], correctIndex: 2, translation: "How much does the bread cost?", explanation: "'Quant costa?' = How much does it cost? Essential for shopping." },
        { sentence: "___ és la farmàcia?", blank: "On", options: ["Quant", "Què", "Com", "On"], correctIndex: 3, translation: "Where is the pharmacy?", explanation: "'On és?' = Where is? Use it to find places." },
        { sentence: "Avui ___ sol", blank: "fa", options: ["és", "fa", "molt", "on"], correctIndex: 1, translation: "Today it's sunny", explanation: "'Fa' is used for weather: fa sol, fa fred, fa calor, fa vent." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'És' = is. Use it to describe anything: Barcelona és bonica, el cafè és bo.", words: ["Barcelona", "és", "molt", "bonica"], correctOrder: "Barcelona és molt bonica", translation: "Barcelona is very beautiful" },
        { grammarNote: "💡 'Voldria' = I would like. Add any item after it: Voldria + un cafè, Voldria + aigua.", words: ["Voldria", "un", "cafè", "si", "us", "plau"], correctOrder: "Voldria un cafè si us plau", translation: "I would like a coffee please" },
        { grammarNote: "💡 'On és...?' = Where is...? Put the place at the end.", words: ["On", "és", "la", "farmàcia"], correctOrder: "On és la farmàcia", translation: "Where is the pharmacy?" },
        { grammarNote: "💡 'Això és' = This is. Point at something and describe it!", words: ["Això", "és", "molt", "bo"], correctOrder: "Això és molt bo", translation: "This is very good" }
      ]
    }
  },

  // BRIDGE LESSON: Building Sentences
  // Teaches sentence structure with previously learned vocabulary
  {
    id: 52,
    title: "Building Sentences",
    module: "Foundations",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "The (masculine)", ca: "El", pronunciation: "EHL" },
      { en: "The (feminine)", ca: "La", pronunciation: "LAH" },
      { en: "A / One (masculine)", ca: "Un", pronunciation: "OON" },
      { en: "A / One (feminine)", ca: "Una", pronunciation: "OO-nah" },
      { en: "My (masculine)", ca: "El meu", pronunciation: "ehl MEH-oo" },
      { en: "My (feminine)", ca: "La meva", pronunciation: "lah MEH-bah" },
      { en: "And", ca: "I", pronunciation: "ee" },
      { en: "But", ca: "Però", pronunciation: "peh-ROH" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "___ mercat és gran", blank: "El", options: ["El", "La", "Un", "Una"], correctIndex: 0, translation: "The market is big", explanation: "'El' = the (masculine). 'Mercat' is masculine, so we use 'el'." },
        { sentence: "___ casa és bonica", blank: "La", options: ["El", "La", "Un", "Una"], correctIndex: 1, translation: "The house is beautiful", explanation: "'La' = the (feminine). 'Casa' is feminine, so we use 'la'." },
        { sentence: "Voldria ___ cafè", blank: "un", options: ["el", "la", "un", "una"], correctIndex: 2, translation: "I would like a coffee", explanation: "'Un' = a/one (masculine). Use with masculine nouns like 'cafè'." },
        { sentence: "El cafè és bo ___ car", blank: "però", options: ["i", "però", "un", "molt"], correctIndex: 1, translation: "The coffee is good but expensive", explanation: "'Però' = but. Connects two contrasting ideas." },
        { sentence: "___ pare és alt i fort", blank: "El meu", options: ["La meva", "El meu", "Un", "Una"], correctIndex: 1, translation: "My father is tall and strong", explanation: "'El meu' = my (masculine). 'Pare' is masculine, so 'el meu'." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 Basic Catalan sentence: Article + Noun + 'és' + Adjective. El cafè és bo.", words: ["El", "cafè", "és", "molt", "bo"], correctOrder: "El cafè és molt bo", translation: "The coffee is very good" },
        { grammarNote: "💡 'La meva' = my (feminine). Use with feminine nouns: la meva mare, la meva casa.", words: ["La", "meva", "mare", "és", "amable"], correctOrder: "La meva mare és amable", translation: "My mother is kind" },
        { grammarNote: "💡 'I' = and. Connect descriptions: gran i bonic, alt i fort, bo i barat.", words: ["El", "mercat", "és", "gran", "i", "bonic"], correctOrder: "El mercat és gran i bonic", translation: "The market is big and beautiful" },
        { grammarNote: "💡 'Però' = but. Join contrasting ideas: és bo però car, és petit però bonic.", words: ["La", "botiga", "és", "petita", "però", "bonica"], correctOrder: "La botiga és petita però bonica", translation: "The shop is small but beautiful" }
      ]
    }
  },

   {
    id: 53,
    title: "Numbers 11-20",
    module: "Foundations",
    stages: ['intro', 'flashcards', 'match', 'quiz'],
    words: [
      { en: "Eleven", ca: "Onze", pronunciation: "OHN-zeh" },
      { en: "Twelve", ca: "Dotze", pronunciation: "DOH-tzeh" },
      { en: "Thirteen", ca: "Tretze", pronunciation: "TREH-tzeh" },
      { en: "Fourteen", ca: "Catorze", pronunciation: "kah-TOR-zeh" },
      { en: "Fifteen", ca: "Quinze", pronunciation: "KEEN-zeh" },
      { en: "Sixteen", ca: "Setze", pronunciation: "SEH-tzeh" },
      { en: "Seventeen", ca: "Disset", pronunciation: "dee-SEHT" },
      { en: "Eighteen", ca: "Divuit", pronunciation: "dee-BWEET" },
      { en: "Nineteen", ca: "Dinou", pronunciation: "dee-NOH-oo" },
      { en: "Twenty", ca: "Vint", pronunciation: "BEENT" }
    ]
  },
  
  // ═══════════════════════════════════════════════════════════
// CORRECTED LESSONS 11-20
// Key changes:
// - Exercises only use vocabulary from COMPLETED lessons + current lesson
// - Grammar notes added to vocabulary where new patterns are introduced
// - Lesson 13: "Prova" replaced with "Paraigua" (Umbrella)
// - Lesson 14: Gender agreement forms taught explicitly
// - Simple structures only until Lesson 18 (Common Verbs)
// - After Lesson 18, verb forms can be used freely
// ═══════════════════════════════════════════════════════════

// LESSON 11 — At the Supermarket
// Previously known: Lessons 1-10 vocabulary
// New patterns: "Voldria" (already from L3), simple "és" (is)
{
    id: 11,
    title: "At the Supermarket",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Eggs", ca: "Ous", pronunciation: "OHS" },
      { en: "Butter", ca: "Mantega", pronunciation: "man-TEH-gah" },
      { en: "Cheese", ca: "Formatge", pronunciation: "for-MAH-jeh" },
      { en: "Vegetables", ca: "Verdures", pronunciation: "ber-DOO-rehs" },
      { en: "Bag", ca: "Bossa", pronunciation: "BOH-sah" },
      { en: "Receipt", ca: "Tiquet", pronunciation: "tee-KEHT" },
      { en: "Cheap", ca: "Barat", pronunciation: "bah-RAHT" },
      { en: "Expensive", ca: "Car", pronunciation: "KAHR" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Voldria un quilo de ___", blank: "formatge", options: ["formatge", "bossa", "tiquet", "cafè"], correctIndex: 0, translation: "I would like a kilo of cheese", explanation: "'Formatge' = cheese. You buy cheese by the kilo at the supermarket." },
        { sentence: "Una ___ si us plau", blank: "bossa", options: ["mantega", "bossa", "ous", "vi"], correctIndex: 1, translation: "A bag please", explanation: "'Bossa' = bag. Ask for one at the checkout." },
        { sentence: "Això és molt ___", blank: "car", options: ["barat", "petit", "car", "gran"], correctIndex: 2, translation: "This is very expensive", explanation: "'Car' = expensive. The opposite is 'barat' (cheap)." },
        { sentence: "Voldria ___ per la tortilla", blank: "ous", options: ["pa", "ous", "arròs", "carn"], correctIndex: 1, translation: "I would like eggs for the omelette", explanation: "'Ous' = eggs. Essential for making a tortilla!" },
        { sentence: "La ___ és molt bona", blank: "mantega", options: ["mantega", "bossa", "tiquet", "formatge"], correctIndex: 0, translation: "The butter is very good", explanation: "'Mantega' = butter. A dairy product like 'formatge' (cheese)." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Voldria' = I would like. A polite way to ask for things in shops and restaurants.", words: ["Voldria", "un", "quilo", "de", "formatge"], correctOrder: "Voldria un quilo de formatge", translation: "I would like a kilo of cheese" },
        { grammarNote: "💡 'Quant costa?' = How much does it cost? Put the item at the end.", words: ["Quant", "costa", "la", "mantega"], correctOrder: "Quant costa la mantega", translation: "How much does the butter cost?" },
        { grammarNote: "💡 'Si us plau' = Please. Add it at the end of any request to be polite.", words: ["Una", "bossa", "si", "us", "plau"], correctOrder: "Una bossa si us plau", translation: "A bag please" },
        { grammarNote: "💡 'Això és' = This is. Use 'molt' before adjectives to mean 'very'.", words: ["Això", "és", "molt", "barat"], correctOrder: "Això és molt barat", translation: "This is very cheap" }
      ]
    }
  },

  // LESSON 12 — Home & Rooms
  // New patterns: "On és...?" (already from L4), "és" (is), adjectives
  {
    id: 12,
    title: "Home & Rooms",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "House", ca: "Casa", pronunciation: "KAH-sah" },
      { en: "Kitchen", ca: "Cuina", pronunciation: "KOO-ee-nah" },
      { en: "Bedroom", ca: "Habitació", pronunciation: "ah-bee-tah-see-OH" },
      { en: "Bathroom", ca: "Bany", pronunciation: "BAH-nyee" },
      { en: "Living room", ca: "Sala d'estar", pronunciation: "SAH-lah des-TAR" },
      { en: "Door", ca: "Porta", pronunciation: "POR-tah" },
      { en: "Window", ca: "Finestra", pronunciation: "fee-NEHS-trah" },
      { en: "Floor", ca: "Terra", pronunciation: "TEH-rah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "La ___ és molt gran", blank: "cuina", options: ["cuina", "porta", "terra", "bany"], correctIndex: 0, translation: "The kitchen is very big", explanation: "'Cuina' = kitchen. The room where you cook." },
        { sentence: "On és el ___?", blank: "bany", options: ["casa", "bany", "finestra", "terra"], correctIndex: 1, translation: "Where is the bathroom?", explanation: "'Bany' = bathroom. Use 'el' because it's masculine." },
        { sentence: "La ___ és petita", blank: "habitació", options: ["habitació", "cuina", "bany", "casa"], correctIndex: 0, translation: "The bedroom is small", explanation: "'Habitació' = bedroom. 'Petita' is feminine to match." },
        { sentence: "La ___ és bonica", blank: "casa", options: ["porta", "terra", "casa", "cuina"], correctIndex: 2, translation: "The house is beautiful", explanation: "'Casa' = house. 'Bonica' = beautiful (feminine form)." },
        { sentence: "On és la ___?", blank: "porta", options: ["cuina", "sala", "porta", "finestra"], correctIndex: 2, translation: "Where is the door?", explanation: "'Porta' = door. Uses 'la' because it's feminine." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'On és...?' = Where is...? Use 'el' for masculine nouns, 'la' for feminine.", words: ["On", "és", "el", "bany"], correctOrder: "On és el bany", translation: "Where is the bathroom?" },
        { grammarNote: "💡 'La cuina és...' = The kitchen is... Use 'és' (is) to describe things.", words: ["La", "cuina", "és", "molt", "gran"], correctOrder: "La cuina és molt gran", translation: "The kitchen is very big" },
        { grammarNote: "💡 'Bonica' is the feminine form of 'bonic' (beautiful). Matches 'la casa' (feminine).", words: ["La", "casa", "és", "bonica"], correctOrder: "La casa és bonica", translation: "The house is beautiful" },
        { grammarNote: "💡 'Porta' is feminine, so we use 'la'. Notice: 'el bany' but 'la porta'.", words: ["On", "és", "la", "porta"], correctOrder: "On és la porta", translation: "Where is the door?" }
      ]
    }
  },

  // LESSON 13 — Weather & Seasons
  // New patterns: "Fa" (it makes/it's - weather), "Avui" (already from L5)
  // FIXED: Removed rogue "Prova" (Try/Taste), replaced with "Paraigua" (Umbrella)
  {
    id: 13,
    title: "Weather & Seasons",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Sun", ca: "Sol", pronunciation: "SOHL" },
      { en: "Rain", ca: "Pluja", pronunciation: "PLOO-zhah" },
      { en: "Cold", ca: "Fred", pronunciation: "FREHT" },
      { en: "Hot", ca: "Calor", pronunciation: "kah-LOR" },
      { en: "Wind", ca: "Vent", pronunciation: "BEHN" },
      { en: "Snow", ca: "Neu", pronunciation: "NEH-oo" },
      { en: "Cloud", ca: "Núvol", pronunciation: "NOO-bool" },
      { en: "Umbrella", ca: "Paraigua", pronunciation: "pah-RAH-ee-gwah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Avui fa molt de ___", blank: "sol", options: ["sol", "fred", "neu", "pluja"], correctIndex: 0, translation: "Today it's very sunny", explanation: "'Sol' = sun. 'Fa sol' is how you say 'it's sunny' in Catalan." },
        { sentence: "Fa molt de ___!", blank: "fred", options: ["calor", "sol", "fred", "vent"], correctIndex: 2, translation: "It's very cold!", explanation: "'Fred' = cold. 'Fa fred' = it's cold (weather)." },
        { sentence: "Pluja! Voldria un ___", blank: "paraigua", options: ["núvol", "sol", "paraigua", "vent"], correctIndex: 2, translation: "Rain! I would like an umbrella", explanation: "'Paraigua' = umbrella. Literally 'stops water'!" },
        { sentence: "Avui fa molt de ___", blank: "vent", options: ["sol", "vent", "fred", "calor"], correctIndex: 1, translation: "Today it's very windy", explanation: "'Vent' = wind. 'Fa vent' = it's windy." },
        { sentence: "Fa molt de ___ avui!", blank: "calor", options: ["pluja", "sol", "calor", "neu"], correctIndex: 2, translation: "It's very hot today!", explanation: "'Calor' = heat. 'Fa calor' = it's hot (weather)." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Fa' describes weather: Fa sol (sunny), Fa fred (cold), Fa calor (hot). Add 'molt de' for 'very'.", words: ["Avui", "fa", "molt", "de", "sol"], correctOrder: "Avui fa molt de sol", translation: "Today it's very sunny" },
        { grammarNote: "💡 Short weather sentences: 'Fa' + condition + time. 'Avui' (today) can go at the start or end.", words: ["Fa", "fred", "avui"], correctOrder: "Fa fred avui", translation: "It's cold today" },
        { grammarNote: "💡 Combine patterns! 'Voldria' (I would like) + item + 'si us plau' (please).", words: ["Voldria", "un", "paraigua", "si", "us", "plau"], correctOrder: "Voldria un paraigua si us plau", translation: "I would like an umbrella please" },
        { grammarNote: "💡 'Molta' is feminine because 'calor' is feminine in Catalan. Fa molta calor, NOT fa molt calor.", words: ["Fa", "molta", "calor", "avui"], correctOrder: "Fa molta calor avui", translation: "It's very hot today" }
      ]
    }
  },

  // LESSON 14 — Colours & Clothes
  // FIXED: Added feminine forms to vocabulary, simplified exercises
  {
    id: 14,
    title: "Colours & Clothes",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Red", ca: "Vermell / Vermella", pronunciation: "ber-MEYL / ber-MEH-yah" },
      { en: "Blue", ca: "Blau / Blava", pronunciation: "BLOW / BLAH-bah" },
      { en: "Green", ca: "Verd / Verda", pronunciation: "BERT / BER-dah" },
      { en: "White", ca: "Blanc / Blanca", pronunciation: "BLAHNK / BLAHN-kah" },
      { en: "Black", ca: "Negre / Negra", pronunciation: "NEH-greh / NEH-grah" },
      { en: "Shirt", ca: "Camisa", pronunciation: "kah-MEE-sah" },
      { en: "Trousers", ca: "Pantalons", pronunciation: "pahn-tah-LOHNS" },
      { en: "Dress", ca: "Vestit", pronunciation: "bes-TEET" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "La camisa és ___", blank: "blava", options: ["vermell", "blava", "negre", "blanc"], correctIndex: 1, translation: "The shirt is blue", explanation: "'Blava' is the feminine form of 'blau'. Matches 'la camisa' (feminine)." },
        { sentence: "El vestit és ___", blank: "negre", options: ["blau", "verda", "negre", "blanca"], correctIndex: 2, translation: "The dress is black", explanation: "'Negre' is masculine, matching 'el vestit'. Feminine would be 'negra'." },
        { sentence: "Voldria uns ___ nous", blank: "pantalons", options: ["camisa", "pantalons", "vestit", "blau"], correctIndex: 1, translation: "I would like new trousers", explanation: "'Pantalons' = trousers. Always plural in Catalan, like in English." },
        { sentence: "La porta és de color ___", blank: "vermell", options: ["vermell", "camisa", "vestit", "pantalons"], correctIndex: 0, translation: "The door is red", explanation: "'Vermell' = red. After 'de color', use the base masculine form." },
        { sentence: "La camisa és ___ i negra", blank: "blanca", options: ["verd", "blanca", "blava", "vermella"], correctIndex: 1, translation: "The shirt is white and black", explanation: "'Blanca' = white (feminine). Both colours match 'camisa' (feminine)." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 Colours match gender: 'blau' → 'blava' for feminine nouns like 'camisa'.", words: ["La", "camisa", "és", "blava"], correctOrder: "La camisa és blava", translation: "The shirt is blue" },
        { grammarNote: "💡 Adjectives go AFTER the noun in Catalan: 'vestit negre' (black dress), not 'negre vestit'.", words: ["El", "vestit", "negre", "és", "bonic"], correctOrder: "El vestit negre és bonic", translation: "The black dress is nice" },
        { grammarNote: "💡 'Uns' = some (masculine plural). 'Nous' = new (plural). Pantalons is always plural.", words: ["Voldria", "uns", "pantalons", "nous"], correctOrder: "Voldria uns pantalons nous", translation: "I would like new trousers" },
        { grammarNote: "💡 'De quin color és?' = What colour is it? A useful question for shopping.", words: ["De", "quin", "color", "és"], correctOrder: "De quin color és", translation: "What colour is it?" }
      ]
    }
  },

  // LESSON 15 — Body & Health
  // New patterns: "Em fa mal" (it hurts me) — taught as a fixed phrase
  // Uses "Voldria" (from L3) and "On és" (from L4)
  {
    id: 15,
    title: "Body & Health",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Head", ca: "Cap", pronunciation: "KAHP" },
      { en: "Hand", ca: "Mà", pronunciation: "MAH" },
      { en: "Eye", ca: "Ull", pronunciation: "OOY" },
      { en: "Mouth", ca: "Boca", pronunciation: "BOH-kah" },
      { en: "Sick", ca: "Malalt", pronunciation: "mah-LAHLT" },
      { en: "Doctor", ca: "Metge", pronunciation: "MET-zheh" },
      { en: "Medicine", ca: "Medicament", pronunciation: "meh-dee-kah-MEHN" },
      { en: "Pain", ca: "Dolor", pronunciation: "doh-LOR" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Em fa mal el ___", blank: "cap", options: ["cap", "ull", "boca", "mà"], correctIndex: 0, translation: "My head hurts", explanation: "'Cap' = head. 'Em fa mal el cap' is the standard way to say 'my head hurts'." },
        { sentence: "Voldria veure el ___", blank: "metge", options: ["dolor", "medicament", "metge", "malalt"], correctIndex: 2, translation: "I would like to see the doctor", explanation: "'Metge' = doctor. Use 'voldria veure' for polite requests to see someone." },
        { sentence: "On és la ___?", blank: "farmàcia", options: ["cap", "dolor", "farmàcia", "ull"], correctIndex: 2, translation: "Where is the pharmacy?", explanation: "'Farmàcia' = pharmacy. You learned this in Lesson 7 (Around Town)." },
        { sentence: "Em fa mal la ___", blank: "mà", options: ["cap", "dolor", "metge", "mà"], correctIndex: 3, translation: "My hand hurts", explanation: "'Mà' = hand. Notice 'la mà' (feminine) vs 'el cap' (masculine)." },
        { sentence: "Voldria un ___", blank: "medicament", options: ["metge", "dolor", "cap", "medicament"], correctIndex: 3, translation: "I would like a medicine", explanation: "'Medicament' = medicine. Use 'voldria' to ask politely at the pharmacy." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Em fa mal' = It hurts me. 'El cap' (head) is masculine, so we use 'el'.", words: ["Em", "fa", "mal", "el", "cap"], correctOrder: "Em fa mal el cap", translation: "My head hurts" },
        { grammarNote: "💡 'Voldria veure' = I would like to see. 'Voldria' + verb is a polite request.", words: ["Voldria", "veure", "el", "metge"], correctOrder: "Voldria veure el metge", translation: "I would like to see the doctor" },
        { grammarNote: "💡 You already know this pattern! 'On és la...?' — 'farmàcia' is feminine, so 'la'.", words: ["On", "és", "la", "farmàcia"], correctOrder: "On és la farmàcia", translation: "Where is the pharmacy?" },
        { grammarNote: "💡 'La mà' (hand) is feminine. Compare: 'Em fa mal EL cap' vs 'Em fa mal LA mà'.", words: ["Em", "fa", "mal", "la", "mà"], correctOrder: "Em fa mal la mà", translation: "My hand hurts" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════
  // MODULE 3 continued: LIVING (Lessons 16-20)
  // Lessons 16-17: Introduce "Tinc" (I have) and infinitive verbs
  // Lesson 18: Formally teaches common verbs
  // Lessons 19-20: Can use all verb forms from L18
  // ═══════════════════════════════════════════════════════════

  // LESSON 16 — Work & Professions
  // New patterns: "Tinc" (I have) — introduced as vocabulary item
  // Uses: Voldria (L3), On és (L4), és (L11-15)
  {
    id: 16,
    title: "Work & Professions",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Work/Job", ca: "Feina", pronunciation: "FAY-nah" },
      { en: "Office", ca: "Oficina", pronunciation: "oh-fee-SEE-nah" },
      { en: "Boss", ca: "Cap", pronunciation: "KAHP" },
      { en: "Teacher", ca: "Professor", pronunciation: "proh-feh-SOR" },
      { en: "Waiter", ca: "Cambrer", pronunciation: "kahm-BREHR" },
      { en: "Shop assistant", ca: "Dependent", pronunciation: "deh-pen-DEHN" },
      { en: "Meeting", ca: "Reunió", pronunciation: "reh-oo-nee-OH" },
      { en: "Holiday", ca: "Vacances", pronunciation: "bah-KAHN-sehs" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "La meva ___ és interessant", blank: "feina", options: ["vacances", "feina", "oficina", "reunió"], correctIndex: 1, translation: "My work is interesting", explanation: "'Feina' = work/job. 'La meva' = my (feminine, matching 'feina')." },
        { sentence: "El ___ és molt amable", blank: "cambrer", options: ["professor", "cap", "cambrer", "dependent"], correctIndex: 2, translation: "The waiter is very kind", explanation: "'Cambrer' = waiter. The person who serves you at a restaurant." },
        { sentence: "L'___ és al centre", blank: "oficina", options: ["oficina", "feina", "reunió", "cap"], correctIndex: 0, translation: "The office is in the centre", explanation: "'Oficina' = office. 'L'' because 'la' shortens before a vowel." },
        { sentence: "Voldria unes ___", blank: "vacances", options: ["feina", "reunió", "oficina", "vacances"], correctIndex: 3, translation: "I would like a holiday", explanation: "'Vacances' = holidays. Always plural in Catalan." },
        { sentence: "El ___ és molt bo", blank: "professor", options: ["professor", "cambrer", "dependent", "cap"], correctIndex: 0, translation: "The teacher is very good", explanation: "'Professor' = teacher. 'Bo' = good (masculine form)." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'La meva' = my (feminine). 'El meu' = my (masculine). Must match the noun's gender.", words: ["La", "meva", "feina", "és", "bona"], correctOrder: "La meva feina és bona", translation: "My work is good" },
        { grammarNote: "💡 'L'oficina' — when 'la' meets a vowel, it shortens to 'l''. Same as l'habitació, l'escola.", words: ["On", "és", "l'oficina"], correctOrder: "On és l'oficina", translation: "Where is the office?" },
        { grammarNote: "💡 'Unes' = some (feminine plural). 'Llargues' = long (feminine plural), matching 'vacances'.", words: ["Voldria", "unes", "vacances", "llargues"], correctOrder: "Voldria unes vacances llargues", translation: "I would like a long holiday" },
        { grammarNote: "💡 'Molt' = very. Goes between 'és' and the adjective: és + molt + amable.", words: ["El", "cambrer", "és", "molt", "amable"], correctOrder: "El cambrer és molt amable", translation: "The waiter is very kind" }
      ]
    }
  },

  // LESSON 17 — Hobbies & Free Time
  // Introduces infinitive verbs (to read, to walk, etc.) as VOCABULARY
  // Exercises use "M'agrada + infinitive" pattern (taught as fixed phrase)
  // This bridges to Lesson 18 where verbs are formally taught
  {
    id: 17,
    title: "Hobbies & Free Time",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "To read", ca: "Llegir", pronunciation: "yeh-ZHEER" },
      { en: "To walk", ca: "Caminar", pronunciation: "kah-mee-NAR" },
      { en: "To cook", ca: "Cuinar", pronunciation: "koo-ee-NAR" },
      { en: "To swim", ca: "Nedar", pronunciation: "neh-DAR" },
      { en: "To travel", ca: "Viatjar", pronunciation: "bee-at-ZHAR" },
      { en: "To sing", ca: "Cantar", pronunciation: "kahn-TAR" },
      { en: "Music", ca: "Música", pronunciation: "MOO-zee-kah" },
      { en: "Beach", ca: "Platja", pronunciation: "PLAH-jah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "M'agrada ___ a la platja", blank: "nedar", options: ["nedar", "llegir", "cuinar", "cantar"], correctIndex: 0, translation: "I like swimming at the beach", explanation: "'Nedar' = to swim. After 'M'agrada', use the verb in its base form." },
        { sentence: "M'agrada ___ plats catalans", blank: "cuinar", options: ["nedar", "cuinar", "cantar", "llegir"], correctIndex: 1, translation: "I like cooking Catalan dishes", explanation: "'Cuinar' = to cook. Related to 'cuina' (kitchen) from Lesson 12." },
        { sentence: "M'agrada ___ per la muntanya", blank: "caminar", options: ["caminar", "nedar", "cantar", "llegir"], correctIndex: 0, translation: "I like walking in the mountains", explanation: "'Caminar' = to walk. 'Per' = through/around." },
        { sentence: "M'agrada escoltar ___", blank: "música", options: ["platja", "feina", "música", "casa"], correctIndex: 2, translation: "I like listening to music", explanation: "'Música' = music. 'Escoltar' = to listen to." },
        { sentence: "M'agrada ___ molt!", blank: "viatjar", options: ["caminar", "nedar", "viatjar", "llegir"], correctIndex: 2, translation: "I like travelling a lot!", explanation: "'Viatjar' = to travel. 'Molt' = a lot, goes after the verb." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'M'agrada' + verb = I like doing something. The verb stays in its base form.", words: ["M'agrada", "nedar", "a", "la", "platja"], correctOrder: "M'agrada nedar a la platja", translation: "I like swimming at the beach" },
        { grammarNote: "💡 'Plats catalans' = Catalan dishes. Adjectives of nationality go after the noun.", words: ["M'agrada", "cuinar", "plats", "catalans"], correctOrder: "M'agrada cuinar plats catalans", translation: "I like cooking Catalan dishes" },
        { grammarNote: "💡 'Un bon llibre' — 'bon' (good) is one of few adjectives that goes BEFORE the noun.", words: ["M'agrada", "llegir", "un", "bon", "llibre"], correctOrder: "M'agrada llegir un bon llibre", translation: "I like reading a good book" },
        { grammarNote: "💡 'Per' = around/through. 'M'agrada caminar per Barcelona' = I like walking around Barcelona.", words: ["M'agrada", "caminar", "per", "Barcelona"], correctOrder: "M'agrada caminar per Barcelona", translation: "I like walking around Barcelona" }
      ]
    }
  },

  // LESSON 18 — Common Verbs
  // THE GATEWAY LESSON: Formally teaches verb forms
  // After this lesson, all exercises can use these verbs freely
  // Introduces: Vull (I want), Puc (I can), Tinc (I have), Sé (I know)
  {
    id: 18,
    title: "Common Verbs",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "To eat", ca: "Menjar", pronunciation: "men-ZHAR" },
      { en: "To drink", ca: "Beure", pronunciation: "BEH-oo-reh" },
      { en: "To sleep", ca: "Dormir", pronunciation: "door-MEER" },
      { en: "To come", ca: "Venir", pronunciation: "beh-NEER" },
      { en: "To go", ca: "Anar", pronunciation: "ah-NAR" },
      { en: "To want (I want)", ca: "Voler (Vull)", pronunciation: "boh-LER (bool)" },
      { en: "To be able (I can)", ca: "Poder (Puc)", pronunciation: "poh-DER (pook)" },
      { en: "To know (I know)", ca: "Saber (Sé)", pronunciation: "sah-BER (seh)" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Vull ___ a casa", blank: "anar", options: ["anar", "dormir", "menjar", "beure"], correctIndex: 0, translation: "I want to go home", explanation: "'Anar' = to go. 'Vull anar' = I want to go. 'A casa' = home." },
        { sentence: "No puc ___ avui", blank: "venir", options: ["saber", "anar", "venir", "dormir"], correctIndex: 2, translation: "I can't come today", explanation: "'Venir' = to come. 'No puc' = I can't. 'No' makes it negative." },
        { sentence: "Vull ___ alguna cosa", blank: "beure", options: ["dormir", "beure", "saber", "anar"], correctIndex: 1, translation: "I want to drink something", explanation: "'Beure' = to drink. 'Alguna cosa' = something." },
        { sentence: "Vull ___ una mica", blank: "dormir", options: ["menjar", "dormir", "beure", "anar"], correctIndex: 1, translation: "I want to sleep a bit", explanation: "'Dormir' = to sleep. 'Una mica' = a bit/a little." },
        { sentence: "Puc ___ alguna cosa?", blank: "menjar", options: ["menjar", "dormir", "anar", "venir"], correctIndex: 0, translation: "Can I eat something?", explanation: "'Menjar' = to eat. 'Puc' = I can, used for asking permission." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Vull' = I want. Follow with a verb: Vull anar (I want to go), Vull menjar (I want to eat).", words: ["Vull", "anar", "a", "casa"], correctOrder: "Vull anar a casa", translation: "I want to go home" },
        { grammarNote: "💡 'Puc' = I can. 'Puc venir' = I can come. Add time words at the end: demà (tomorrow).", words: ["Puc", "venir", "demà"], correctOrder: "Puc venir demà", translation: "I can come tomorrow" },
        { grammarNote: "💡 'Alguna cosa' = something. Works just like English: Vull menjar alguna cosa.", words: ["Vull", "menjar", "alguna", "cosa"], correctOrder: "Vull menjar alguna cosa", translation: "I want to eat something" },
        { grammarNote: "💡 'No sé' = I don't know. 'No' goes before the verb to make it negative.", words: ["No", "sé", "on", "és"], correctOrder: "No sé on és", translation: "I don't know where it is" }
      ]
    }
  },

  // LESSON 19 — Describing People
  // NOW safe to use: Tinc, Vull, Puc, Sé, és, són, M'agrada
  // Light fixes only — verb usage is now justified
  {
    id: 19,
    title: "Describing People",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Tall", ca: "Alt", pronunciation: "AHLT" },
      { en: "Short (height)", ca: "Baix", pronunciation: "BAHSH" },
      { en: "Young", ca: "Jove", pronunciation: "ZHOH-beh" },
      { en: "Old", ca: "Vell / Vella", pronunciation: "BEL / BEH-yah" },
      { en: "Strong", ca: "Fort / Forta", pronunciation: "FORT / FOR-tah" },
      { en: "Kind", ca: "Amable", pronunciation: "ah-MAH-bleh" },
      { en: "Funny", ca: "Divertit / Divertida", pronunciation: "dee-ber-TEET / dee-ber-TEE-dah" },
      { en: "Smart", ca: "Intel·ligent", pronunciation: "in-tel-lee-ZHEHN" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El meu pare és molt ___", blank: "alt", options: ["alt", "baix", "jove", "petit"], correctIndex: 0, translation: "My father is very tall", explanation: "'Alt' = tall. The opposite is 'baix' (short)." },
        { sentence: "La meva amiga és molt ___", blank: "divertida", options: ["vella", "divertida", "alta", "forta"], correctIndex: 1, translation: "My friend (f) is very funny", explanation: "'Divertida' = funny (feminine). Masculine would be 'divertit'." },
        { sentence: "La meva àvia és ___ però forta", blank: "vella", options: ["jove", "alta", "vella", "baixa"], correctIndex: 2, translation: "My grandmother is old but strong", explanation: "'Vella' = old (feminine). 'Però' = but. 'Forta' = strong (feminine)." },
        { sentence: "El professor és molt ___", blank: "amable", options: ["baix", "trist", "amable", "dolent"], correctIndex: 2, translation: "The teacher is very kind", explanation: "'Amable' = kind. This adjective stays the same for both genders." },
        { sentence: "El meu amic és molt ___", blank: "intel·ligent", options: ["vell", "fort", "alt", "intel·ligent"], correctIndex: 3, translation: "My friend is very smart", explanation: "'Intel·ligent' = smart. Note the 'l·l' — a special Catalan letter!" }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 Person + 'és' + adjective: 'El meu pare és alt'. Add 'molt' for emphasis.", words: ["El", "meu", "pare", "és", "molt", "alt"], correctOrder: "El meu pare és molt alt", translation: "My father is very tall" },
        { grammarNote: "💡 'Divertida' is feminine, matching 'amiga'. Masculine would be 'divertit'.", words: ["La", "meva", "amiga", "és", "divertida"], correctOrder: "La meva amiga és divertida", translation: "My friend (f) is funny" },
        { grammarNote: "💡 'Amable' stays the same for both genders — not all adjectives change!", words: ["El", "professor", "és", "molt", "amable"], correctOrder: "El professor és molt amable", translation: "The teacher is very kind" },
        { grammarNote: "💡 'Com és...?' = What is... like? Use this to ask about someone's personality or appearance.", words: ["Com", "és", "el", "teu", "amic"], correctOrder: "Com és el teu amic", translation: "What is your friend like?" }
      ]
    }
  },

  // LESSON 20 — At the Doctor's
  // NOW safe to use: All verb forms from L18 + Tinc (I have) + Necessito (I need)
  // "Tinc" formally introduced here, "Necessito" used as fixed phrase
  {
    id: 20,
    title: "At the Doctor's",
    module: "Living",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Appointment", ca: "Cita", pronunciation: "SEE-tah" },
      { en: "Fever", ca: "Febre", pronunciation: "FEH-breh" },
      { en: "Cough", ca: "Tos", pronunciation: "TOHS" },
      { en: "Stomach", ca: "Estómac", pronunciation: "es-TOH-mahk" },
      { en: "Back", ca: "Esquena", pronunciation: "es-KEH-nah" },
      { en: "Allergy", ca: "Al·lèrgia", pronunciation: "ah-LER-zhee-ah" },
      { en: "Prescription", ca: "Recepta", pronunciation: "reh-SEP-tah" },
      { en: "I have (verb)", ca: "Tinc", pronunciation: "TEENK" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Tinc una ___ amb el metge", blank: "cita", options: ["cita", "recepta", "febre", "tos"], correctIndex: 0, translation: "I have an appointment with the doctor", explanation: "'Cita' = appointment. 'Tinc una cita' = I have an appointment." },
        { sentence: "Tinc ___ i tos", blank: "febre", options: ["cita", "esquena", "febre", "recepta"], correctIndex: 2, translation: "I have a fever and a cough", explanation: "'Febre' = fever. Use 'Tinc' to describe symptoms: Tinc febre, Tinc tos." },
        { sentence: "Em fa mal l'___", blank: "estómac", options: ["al·lèrgia", "estómac", "esquena", "recepta"], correctIndex: 1, translation: "My stomach hurts", explanation: "'Estómac' = stomach. 'L'' because 'el' shortens before a vowel." },
        { sentence: "Em fa mal l'___", blank: "esquena", options: ["cita", "tos", "estómac", "esquena"], correctIndex: 3, translation: "My back hurts", explanation: "'Esquena' = back. Same pattern: 'Em fa mal' + body part." },
        { sentence: "Tinc una ___", blank: "al·lèrgia", options: ["febre", "cita", "recepta", "al·lèrgia"], correctIndex: 3, translation: "I have an allergy", explanation: "'Al·lèrgia' = allergy. Note the 'l·l' — a Catalan spelling feature." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Tinc' = I have. Use for appointments, symptoms, and possessions.", words: ["Tinc", "una", "cita", "amb", "el", "metge"], correctOrder: "Tinc una cita amb el metge", translation: "I have an appointment with the doctor" },
        { grammarNote: "💡 'L'esquena' — 'la' shortens to 'l'' before a vowel. Same pattern as l'oficina.", words: ["Em", "fa", "mal", "l'esquena"], correctOrder: "Em fa mal l'esquena", translation: "My back hurts" },
        { grammarNote: "💡 Combine what you've learned: 'Voldria' + item + 'si us plau'. A perfect polite request!", words: ["Voldria", "una", "recepta", "si", "us", "plau"], correctOrder: "Voldria una recepta si us plau", translation: "I would like a prescription please" },
        { grammarNote: "💡 'I' = and. Connect symptoms: 'Tinc febre i tos' = I have a fever and a cough.", words: ["Tinc", "febre", "i", "tos"], correctOrder: "Tinc febre i tos", translation: "I have a fever and a cough" }
      ]
    }
  },

  // ─── LESSON 54: Numbers & Counting (21-100) ─────────────

  {
    id: 54,
    title: "Numbers & Counting",
    module: "Foundations",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Twenty-one", ca: "Vint-i-un", pronunciation: "been-tee-OON" },
      { en: "Thirty", ca: "Trenta", pronunciation: "TREN-tah" },
      { en: "Forty", ca: "Quaranta", pronunciation: "kwah-RAHN-tah" },
      { en: "Fifty", ca: "Cinquanta", pronunciation: "seen-KWAHN-tah" },
      { en: "Sixty", ca: "Seixanta", pronunciation: "shay-SHAHN-tah" },
      { en: "Seventy", ca: "Setanta", pronunciation: "seh-TAHN-tah" },
      { en: "Eighty", ca: "Vuitanta", pronunciation: "bwee-TAHN-tah" },
      { en: "Ninety", ca: "Noranta", pronunciation: "noh-RAHN-tah" },
      { en: "One hundred", ca: "Cent", pronunciation: "SEHN" },
      { en: "One thousand", ca: "Mil", pronunciation: "MEEL" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El pis costa ___ euros al mes", blank: "vuitanta", options: ["trenta", "vuitanta", "cent", "mil"], correctIndex: 1, translation: "The flat costs eighty euros a month", explanation: "'Vuitanta' = 80. Pattern: vuit (8) → vuitanta (80)." },
        { sentence: "Tinc ___ anys", blank: "trenta", options: ["vint", "trenta", "quaranta", "cinquanta"], correctIndex: 1, translation: "I am thirty years old", explanation: "'Trenta' = 30. 'Tinc trenta anys' = I'm 30 years old." },
        { sentence: "Hi ha ___ alumnes a la classe", blank: "vint-i-cinc", options: ["vint-i-cinc", "trenta-dos", "quaranta", "cent"], correctIndex: 0, translation: "There are twenty-five students in the class", explanation: "'Vint-i-cinc' = 25. Pattern: vint-i- + units (vint-i-un, vint-i-dos...)." },
        { sentence: "Quant costa? ___ euros", blank: "Noranta", options: ["Noranta", "Seixanta", "Setanta", "Quaranta"], correctIndex: 0, translation: "How much does it cost? Ninety euros", explanation: "'Noranta' = 90. Pattern: nou (9) → noranta (90)." },
        { sentence: "Barcelona té ___ barris", blank: "setanta-tres", options: ["quaranta", "cinquanta", "seixanta", "setanta-tres"], correctIndex: 3, translation: "Barcelona has seventy-three neighbourhoods", explanation: "'Setanta-tres' = 73. For 31-99: tens-units (trenta-cinc = 35)." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 Numbers 21-29 use 'vint-i-' + unit: vint-i-un (21), vint-i-tres (23), vint-i-nou (29).", words: ["Tinc", "quaranta", "anys"], correctOrder: "Tinc quaranta anys", translation: "I am forty years old" },
        { grammarNote: "💡 For 31-99: tens-units with hyphen. Trenta-cinc (35), seixanta-dos (62), noranta-vuit (98).", words: ["Són", "cinquanta", "euros", "si", "us", "plau"], correctOrder: "Són cinquanta euros si us plau", translation: "It's fifty euros please" },
        { grammarNote: "💡 'Cent' = 100. 'Dos-cents' = 200. 'Tres-cents' = 300. 'Mil' = 1000.", words: ["El", "lloguer", "és", "vuit-cents", "euros"], correctOrder: "El lloguer és vuit-cents euros", translation: "The rent is eight hundred euros" },
        { grammarNote: "💡 'Quants anys tens?' = How old are you? Answer: 'Tinc + number + anys'.", words: ["La", "casa", "costa", "tres-cents", "mil", "euros"], correctOrder: "La casa costa tres-cents mil euros", translation: "The house costs three hundred thousand euros" }
      ]
    }
  },


  // ═══════════════════════════════════════════════════════════
  // MODULE 4: SOCIAL (Lessons 21-25)
  // Format: Intro → LISTEN-AND-TYPE → MINI CONVERSATION → ERROR CORRECTION
  // ═══════════════════════════════════════════════════════════

  {
    id: 21,
    title: "Making Plans",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Tonight", ca: "Aquesta nit", pronunciation: "ah-KES-tah NEET" },
      { en: "Weekend", ca: "Cap de setmana", pronunciation: "kahp deh seh-MAH-nah" },
      { en: "Party", ca: "Festa", pronunciation: "FEHS-tah" },
      { en: "Cinema", ca: "Cinema", pronunciation: "SEE-neh-mah" },
      { en: "To invite", ca: "Convidar", pronunciation: "kohn-bee-DAR" },
      { en: "To send", ca: "Enviar", pronunciation: "en-bee-AR" },
      { en: "Together", ca: "Junts", pronunciation: "ZHOONTS" },
      { en: "Fun", ca: "Diversió", pronunciation: "dee-ber-see-OH" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Vols venir a la festa?", english: "Do you want to come to the party?", pronunciation: "bols beh-NEER ah lah FEHS-tah" },
        { catalan: "Quedem aquest cap de setmana", english: "Let's meet this weekend", pronunciation: "keh-DEHM ah-KEST kahp deh seh-MAH-nah" },
        { catalan: "Anem al cinema junts", english: "Let's go to the cinema together", pronunciation: "ah-NEHM ahl SEE-neh-mah ZHOONTS" },
        { catalan: "Et convido a sopar", english: "I invite you to dinner", pronunciation: "eht kohn-BEE-doh ah soh-PAR" },
        { catalan: "Aquesta nit sortim?", english: "Are we going out tonight?", pronunciation: "ah-KES-tah NEET sor-TEEM" }
      ],
      miniConversation: [
        { speaker: "Anna", text: "Hola! Què fas aquest cap de setmana?", isUserTurn: false, translation: "Hi! What are you doing this weekend?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Res de especial, per què?", "Sóc de Barcelona", "M'agrada el formatge"], correctIndex: 0 },
        { speaker: "Anna", text: "Faig una festa a casa! Vols venir?", isUserTurn: false, translation: "I'm having a party at home! Do you want to come?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, m'encantaria!", "No entenc", "Quant costa?"], correctIndex: 0 },
        { speaker: "Anna", text: "Genial! Vine a les nou. Porta alguna cosa de beure!", isUserTurn: false, translation: "Great! Come at nine. Bring something to drink!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["D'acord, fins dissabte!", "No parlo català", "On és el bany?"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Vols anar a la cine?", errorWordIndex: 4, options: ["cine", "cinema", "festa", "casa"], correctIndex: 1, translation: "Do you want to go to the cinema?", explanation: "'Cinema' is the correct Catalan word, not 'cine'" },
        { sentence: "Quedem dissabte de nit junts", errorWordIndex: 2, options: ["de", "a", "al", "per"], correctIndex: 1, translation: "Let's meet Saturday night together", explanation: "'Dissabte a la nit' is the correct form" },
        { sentence: "Et convidio a la festa", errorWordIndex: 1, options: ["convidio", "convido", "convide", "convidar"], correctIndex: 1, translation: "I invite you to the party", explanation: "The correct first person form is 'convido'" },
        { sentence: "Anem a sopar juntes demà", errorWordIndex: 3, options: ["juntes", "junts", "junt", "juntas"], correctIndex: 1, translation: "Let's go to dinner together tomorrow", explanation: "'Junts' is the mixed/masculine plural in Catalan" }
      ]
    }
  },

  {
    id: 22,
    title: "Opinions & Preferences",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "I like", ca: "M'agrada", pronunciation: "mah-GRAH-dah" },
      { en: "I love", ca: "M'encanta", pronunciation: "men-KAHN-tah" },
      { en: "I prefer", ca: "Prefereixo", pronunciation: "preh-feh-RAY-shoh" },
      { en: "I think", ca: "Penso", pronunciation: "PEN-soh" },
      { en: "Better", ca: "Millor", pronunciation: "mee-YOR" },
      { en: "Worse", ca: "Pitjor", pronunciation: "pee-JZHOR" },
      { en: "Interesting", ca: "Interessant", pronunciation: "in-teh-reh-SAHNT" },
      { en: "Boring", ca: "Avorrit", pronunciation: "ah-boh-RREET" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "M'agrada molt Barcelona", english: "I really like Barcelona", pronunciation: "mah-GRAH-dah mohlt bar-seh-LOH-nah" },
        { catalan: "Prefereixo el cafè amb llet", english: "I prefer coffee with milk", pronunciation: "preh-feh-RAY-shoh ehl kah-FEH ahm YEHT" },
        { catalan: "Penso que és interessant", english: "I think it's interesting", pronunciation: "PEN-soh keh ehs in-teh-reh-SAHNT" },
        { catalan: "La muntanya és millor que la platja", english: "The mountain is better than the beach", pronunciation: "lah moon-TAH-nyah ehs mee-YOR keh lah PLAH-jah" },
        { catalan: "M'encanta viure aquí", english: "I love living here", pronunciation: "men-KAHN-tah BEE-oo-reh ah-KEE" }
      ],
      miniConversation: [
        { speaker: "Marc", text: "T'agrada viure a Catalunya?", isUserTurn: false, translation: "Do you like living in Catalonia?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, m'encanta!", "No entenc", "Adéu"], correctIndex: 0 },
        { speaker: "Marc", text: "Què és el que més t'agrada?", isUserTurn: false, translation: "What do you like most?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["La gent és molt amable", "Quant costa?", "Sóc anglès"], correctIndex: 0 },
        { speaker: "Marc", text: "Prefereixes Barcelona o la muntanya?", isUserTurn: false, translation: "Do you prefer Barcelona or the mountains?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Prefereixo la muntanya, és més tranquil", "No parlo català", "Tinc febre"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Me agrada molt la platja", errorWordIndex: 0, options: ["Me", "M'", "Mi", "Ma"], correctIndex: 1, translation: "I really like the beach", explanation: "In Catalan, 'me' contracts to 'm'' before a vowel" },
        { sentence: "Penso que és molt aburrida", errorWordIndex: 4, options: ["aburrida", "avorrida", "avorrit", "aburrido"], correctIndex: 1, translation: "I think it's very boring", explanation: "'Avorrida' is the Catalan form, not the Spanish 'aburrida'" },
        { sentence: "El cafè és més bo que el te", errorWordIndex: 3, options: ["bo", "millor", "bona", "bé"], correctIndex: 1, translation: "Coffee is better than tea", explanation: "'Millor' is the comparative form of 'bo' (better)" },
        { sentence: "Prefereixo la música rock a el jazz", errorWordIndex: 5, options: ["a el", "al", "a la", "del"], correctIndex: 1, translation: "I prefer rock music to jazz", explanation: "'a + el' contracts to 'al' in Catalan" }
      ]
    }
  },

  {
    id: 23,
    title: "At the Bank",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Money", ca: "Diners", pronunciation: "dee-NEHS" },
      { en: "Account", ca: "Compte", pronunciation: "KOHM-teh" },
      { en: "Card", ca: "Targeta", pronunciation: "tar-ZHEH-tah" },
      { en: "Cash", ca: "Efectiu", pronunciation: "eh-fehk-TEE-oo" },
      { en: "To pay", ca: "Pagar", pronunciation: "pah-GAR" },
      { en: "To withdraw", ca: "Treure", pronunciation: "TREH-oo-reh" },
      { en: "Transfer", ca: "Transferència", pronunciation: "trans-feh-REN-see-ah" },
      { en: "Receipt", ca: "Rebut", pronunciation: "reh-BOOT" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Vull obrir un compte", english: "I want to open an account", pronunciation: "bool oh-BREER oon KOHM-teh" },
        { catalan: "Puc pagar amb targeta?", english: "Can I pay by card?", pronunciation: "POOK pah-GAR ahm tar-ZHEH-tah" },
        { catalan: "Necessito treure diners", english: "I need to withdraw money", pronunciation: "neh-seh-SEE-toh TREH-oo-reh dee-NEHS" },
        { catalan: "On és el caixer automàtic?", english: "Where is the ATM?", pronunciation: "ohn ehs ehl kah-SHEHR ow-toh-MAH-teek" },
        { catalan: "Voldria fer una transferència", english: "I would like to make a transfer", pronunciation: "bol-DREE-ah fehr OO-nah trans-feh-REN-see-ah" }
      ],
      miniConversation: [
        { speaker: "Banker", text: "Bon dia! En què puc ajudar-lo?", isUserTurn: false, translation: "Good morning! How can I help you?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Vull obrir un compte, si us plau", "Voldria un cafè", "On és la platja?"], correctIndex: 0 },
        { speaker: "Banker", text: "Cap problema. Necessito el seu passaport.", isUserTurn: false, translation: "No problem. I need your passport." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Aquí el té", "No tinc passaport", "Quant costa?"], correctIndex: 0 },
        { speaker: "Banker", text: "Gràcies. Vol una targeta de dèbit?", isUserTurn: false, translation: "Thanks. Do you want a debit card?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, si us plau", "No m'agrada", "Adéu"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Puc pagar con targeta?", errorWordIndex: 2, options: ["con", "amb", "en", "per"], correctIndex: 1, translation: "Can I pay by card?", explanation: "'Amb' means 'with' in Catalan, not the Spanish 'con'" },
        { sentence: "Necesito treure diners", errorWordIndex: 0, options: ["Necesito", "Necessito", "Necesit", "Necessit"], correctIndex: 1, translation: "I need to withdraw money", explanation: "'Necessito' has double S in Catalan" },
        { sentence: "On és la caixer automàtic?", errorWordIndex: 2, options: ["la", "el", "un", "una"], correctIndex: 1, translation: "Where is the ATM?", explanation: "'Caixer' is masculine, so it needs 'el' not 'la'" },
        { sentence: "Vull fer un transferència", errorWordIndex: 2, options: ["un", "una", "el", "la"], correctIndex: 1, translation: "I want to make a transfer", explanation: "'Transferència' is feminine, so it needs 'una'" }
      ]
    }
  },

  {
    id: 24,
    title: "Phone & Technology",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Phone", ca: "Telèfon", pronunciation: "teh-LEH-fohn" },
      { en: "Message", ca: "Missatge", pronunciation: "mee-SAH-jeh" },
      { en: "To call", ca: "Trucar", pronunciation: "troo-KAR" },
      { en: "Internet", ca: "Internet", pronunciation: "een-ter-NEHT" },
      { en: "Password", ca: "Contrasenya", pronunciation: "kohn-trah-SEH-nyah" },
      { en: "Screen", ca: "Pantalla", pronunciation: "pahn-TAH-yah" },
      { en: "To charge", ca: "Carregar", pronunciation: "kah-reh-GAR" },
      { en: "Wi-Fi", ca: "Wi-Fi", pronunciation: "WEE-fee" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Pots trucar-me demà?", english: "Can you call me tomorrow?", pronunciation: "potz troo-KAR-meh deh-MAH" },
        { catalan: "No tinc bateria", english: "I don't have battery", pronunciation: "noh teenk bah-teh-REE-ah" },
        { catalan: "Quina és la contrasenya del Wi-Fi?", english: "What is the Wi-Fi password?", pronunciation: "KEE-nah ehs lah kohn-trah-SEH-nyah del WEE-fee" },
        { catalan: "T'envio un missatge", english: "I'll send you a message", pronunciation: "ten-BEE-oh oon mee-SAH-jeh" },
        { catalan: "Necessito carregar el telèfon", english: "I need to charge the phone", pronunciation: "neh-seh-SEE-toh kah-reh-GAR ehl teh-LEH-fohn" }
      ],
      miniConversation: [
        { speaker: "Friend", text: "Em pots donar la contrasenya del Wi-Fi?", isUserTurn: false, translation: "Can you give me the Wi-Fi password?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, és CATALA2026", "No tinc Wi-Fi", "Quant costa?"], correctIndex: 0 },
        { speaker: "Friend", text: "Gràcies! El meu telèfon no té bateria...", isUserTurn: false, translation: "Thanks! My phone has no battery..." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Pots carregar-lo aquí", "M'agrada la platja", "Adéu"], correctIndex: 0 },
        { speaker: "Friend", text: "Genial! T'envio un missatge quan estigui carregat.", isUserTurn: false, translation: "Great! I'll send you a message when it's charged." },
        { speaker: "You", text: "", isUserTurn: true, options: ["D'acord, perfecte!", "No entenc", "On és el bany?"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Pots llamar-me demà?", errorWordIndex: 1, options: ["llamar-me", "trucar-me", "cridar-me", "telefonar-me"], correctIndex: 1, translation: "Can you call me tomorrow?", explanation: "'Trucar' is 'to call' in Catalan. 'Llamar' is Spanish." },
        { sentence: "El meu telefon no funciona", errorWordIndex: 2, options: ["telefon", "telèfon", "telefone", "telephon"], correctIndex: 1, translation: "My phone doesn't work", explanation: "'Telèfon' has an accent on the 'e'" },
        { sentence: "T'enviare un missatge", errorWordIndex: 0, options: ["T'enviare", "T'enviaré", "T'enviaro", "T'envia"], correctIndex: 1, translation: "I'll send you a message", explanation: "The future tense needs the accent: 'enviaré'" },
        { sentence: "Necesito cargar el telèfon", errorWordIndex: 1, options: ["cargar", "carregar", "caregar", "carguar"], correctIndex: 1, translation: "I need to charge the phone", explanation: "'Carregar' is the Catalan word, not the Spanish 'cargar'" }
      ]
    }
  },

  {
    id: 25,
    title: "Emergencies",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Emergency", ca: "Emergència", pronunciation: "eh-mer-ZHEN-see-ah" },
      { en: "Police", ca: "Policia", pronunciation: "poh-lee-SEE-ah" },
      { en: "Fire", ca: "Foc", pronunciation: "FOHK" },
      { en: "Ambulance", ca: "Ambulància", pronunciation: "ahm-boo-LAHN-see-ah" },
      { en: "Danger", ca: "Perill", pronunciation: "peh-REEL" },
      { en: "Lost", ca: "Perdut", pronunciation: "per-DOOT" },
      { en: "Stolen", ca: "Robat", pronunciation: "roh-BAHT" },
      { en: "Help!", ca: "Socors!", pronunciation: "soh-KOHRS" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Socors! Necessito ajuda!", english: "Help! I need help!", pronunciation: "soh-KOHRS neh-seh-SEE-toh ah-ZHOO-dah" },
        { catalan: "Truqueu a la policia!", english: "Call the police!", pronunciation: "troo-KEH-oo ah lah poh-lee-SEE-ah" },
        { catalan: "M'han robat la cartera", english: "My wallet has been stolen", pronunciation: "mahn roh-BAHT lah kahr-TEH-rah" },
        { catalan: "Estic perdut, on sóc?", english: "I'm lost, where am I?", pronunciation: "es-TEEK per-DOOT ohn SOHK" },
        { catalan: "Hi ha un foc!", english: "There's a fire!", pronunciation: "ee ah oon FOHK" }
      ],
      miniConversation: [
        { speaker: "You", text: "Perdoni! Necessito ajuda!", isUserTurn: false, noAudio: true },
        { speaker: "Officer", text: "Què ha passat?", isUserTurn: false, translation: "What happened?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["M'han robat la cartera", "M'agrada Barcelona", "Voldria un cafè"], correctIndex: 0 },
        { speaker: "Officer", text: "On ha passat? Sap descriure el lladre?", isUserTurn: false, translation: "Where did it happen? Can you describe the thief?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Al carrer, era un home alt", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Officer", text: "D'acord. Farem un informe. Té el passaport?", isUserTurn: false, translation: "OK. We'll make a report. Do you have your passport?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, aquí el té", "No sé on és", "Adéu"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Necesito ayuda!", errorWordIndex: 1, options: ["ayuda", "ajuda", "aiuda", "ayude"], correctIndex: 1, translation: "I need help!", explanation: "'Ajuda' is the Catalan word. 'Ayuda' is Spanish." },
        { sentence: "Truca a el policia!", errorWordIndex: 2, options: ["a el", "al", "a la", "el"], correctIndex: 2, translation: "Call the police!", explanation: "'Policia' is feminine in Catalan: 'la policia'" },
        { sentence: "Estic perdudo", errorWordIndex: 1, options: ["perdudo", "perdut", "perdit", "perdido"], correctIndex: 1, translation: "I'm lost", explanation: "'Perdut' is the Catalan past participle, not 'perdudo'" },
        { sentence: "M'han robat el meu cartero", errorWordIndex: 4, options: ["cartero", "cartera", "carter", "cartere"], correctIndex: 1, translation: "My wallet has been stolen", explanation: "'Cartera' (wallet) is feminine. 'Cartero' means postman in Spanish." }
      ]
    }
  },

  {
    id: 26,
    title: "Booking & Reservations",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "To book", ca: "Reservar", pronunciation: "reh-ser-BAR" },
      { en: "Room", ca: "Habitació", pronunciation: "ah-bee-tah-see-OH" },
      { en: "Night", ca: "Nit", pronunciation: "NEET" },
      { en: "Key", ca: "Clau", pronunciation: "KLOW" },
      { en: "Available", ca: "Disponible", pronunciation: "dees-poh-NEE-bleh" },
      { en: "Full", ca: "Ple", pronunciation: "PLEH" },
      { en: "Check-in", ca: "Entrada", pronunciation: "en-TRAH-dah" },
      { en: "Check-out", ca: "Sortida", pronunciation: "sor-TEE-dah" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Voldria reservar una habitació", english: "I would like to book a room", pronunciation: "bol-DREE-ah reh-ser-BAR OO-nah ah-bee-tah-see-OH" },
        { catalan: "Per a dues nits, si us plau", english: "For two nights, please", pronunciation: "pehr ah DOO-ehs NEETS see oos PLOW" },
        { catalan: "Teniu habitacions disponibles?", english: "Do you have rooms available?", pronunciation: "teh-NEE-oo ah-bee-tah-see-OHNS dees-poh-NEE-blehs" },
        { catalan: "A quina hora és la sortida?", english: "What time is check-out?", pronunciation: "ah KEE-nah OH-rah ehs lah sor-TEE-dah" },
        { catalan: "Puc tenir la clau, si us plau?", english: "Can I have the key, please?", pronunciation: "POOK teh-NEER lah KLOW see oos PLOW" }
      ],
      miniConversation: [
        { speaker: "Receptionist", text: "Bona tarda! Benvingut a l'Hotel Catalunya.", isUserTurn: false, translation: "Good afternoon! Welcome to Hotel Catalunya." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Bona tarda! Voldria reservar una habitació", "Voldria un cafè", "On és el mercat?"], correctIndex: 0 },
        { speaker: "Receptionist", text: "Per a quantes nits?", isUserTurn: false, translation: "For how many nights?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Per a tres nits, si us plau", "Tinc febre", "M'agrada la platja"], correctIndex: 0 },
        { speaker: "Receptionist", text: "Perfecte. Habitació 205. L'entrada és a les 14h.", isUserTurn: false, translation: "Perfect. Room 205. Check-in is at 2pm." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Gràcies! A quina hora és la sortida?", "Adéu", "No entenc"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Quiero reservar una habitació", errorWordIndex: 0, options: ["Quiero", "Voldria", "Quero", "Voldr"], correctIndex: 1, translation: "I would like to book a room", explanation: "'Voldria' means 'I would like' in Catalan. 'Quiero' is Spanish." },
        { sentence: "Per dues nites si us plau", errorWordIndex: 2, options: ["nites", "nits", "noites", "nites"], correctIndex: 1, translation: "For two nights please", explanation: "'Nits' is the correct plural in Catalan" },
        { sentence: "La habitació és molt bonita", errorWordIndex: 0, options: ["La", "L'", "El", "Una"], correctIndex: 1, translation: "The room is very nice", explanation: "Before a vowel, 'La' becomes 'L'' (elision)" },
        { sentence: "A quin hora és l'entrada?", errorWordIndex: 1, options: ["quin", "quina", "cual", "qui"], correctIndex: 1, translation: "What time is check-in?", explanation: "'Hora' is feminine, so it needs 'quina' not 'quin'" }
      ]
    }
  },

  {
    id: 27,
    title: "Culture & Traditions",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Festival", ca: "Festa major", pronunciation: "FEHS-tah mah-ZHOR" },
      { en: "Dance", ca: "Ball", pronunciation: "BAHL" },
      { en: "Castle (human tower)", ca: "Castell", pronunciation: "kahs-TEHL" },
      { en: "Saint", ca: "Sant", pronunciation: "SAHNT" },
      { en: "Tradition", ca: "Tradició", pronunciation: "trah-dee-see-OH" },
      { en: "Music", ca: "Música", pronunciation: "MOO-zee-kah" },
      { en: "To celebrate", ca: "Celebrar", pronunciation: "seh-leh-BRAR" },
      { en: "Fireworks", ca: "Focs artificials", pronunciation: "FOHKS ar-tee-fee-see-AHLS" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "La festa major és al setembre", english: "The main festival is in September", pronunciation: "lah FEHS-tah mah-ZHOR ehs ahl seh-TEM-breh" },
        { catalan: "Els castells són impressionants", english: "The human towers are impressive", pronunciation: "ehls kahs-TEHLS sohn eem-preh-see-oh-NAHNTS" },
        { catalan: "Avui celebrem la diada!", english: "Today we celebrate the national day!", pronunciation: "ah-BOO-ee seh-leh-BREHM lah dee-AH-dah" },
        { catalan: "M'encanta la sardana", english: "I love the sardana (traditional dance)", pronunciation: "men-KAHN-tah lah sar-DAH-nah" },
        { catalan: "Hi haurà focs artificials a les deu", english: "There will be fireworks at ten", pronunciation: "ee ow-RAH FOHKS ar-tee-fee-see-AHLS ah lehs DEH-oo" }
      ],
      miniConversation: [
        { speaker: "Local", text: "Has vist els castells alguna vegada?", isUserTurn: false, translation: "Have you seen the human towers?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["No, és la primera vegada!", "Sí, tinc febre", "M'agrada el formatge"], correctIndex: 0 },
        { speaker: "Local", text: "Són increïbles! La gent fa torres humanes molt altes.", isUserTurn: false, translation: "They're incredible! People make very tall human towers." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sembla impressionant! Quan és la pròxima?", "Quant costa?", "On és el bany?"], correctIndex: 0 },
        { speaker: "Local", text: "A la festa major, al setembre. Hi ha ball, música i focs artificials!", isUserTurn: false, translation: "At the main festival, in September. There's dancing, music and fireworks!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["M'encantaria anar-hi!", "No entenc", "Adéu"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "La festa mayor és molt divertida", errorWordIndex: 1, options: ["mayor", "major", "mejor", "millor"], correctIndex: 1, translation: "The main festival is very fun", explanation: "'Major' is the Catalan word. 'Mayor' is Spanish." },
        { sentence: "Me encanta la tradició catalana", errorWordIndex: 0, options: ["Me", "M'", "Mi", "Ma"], correctIndex: 1, translation: "I love Catalan tradition", explanation: "'Me' contracts to 'm'' before a vowel in Catalan" },
        { sentence: "Els castells son molt impressionants", errorWordIndex: 2, options: ["son", "són", "san", "sin"], correctIndex: 1, translation: "The human towers are very impressive", explanation: "'Són' needs the accent to mean 'are'" },
        { sentence: "Avui celebramos la diada", errorWordIndex: 1, options: ["celebramos", "celebrem", "celebremos", "celebram"], correctIndex: 1, translation: "Today we celebrate the national day", explanation: "'Celebrem' is the Catalan first person plural" }
      ]
    }
  },

  {
    id: 28,
    title: "Nature & Outdoors",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Mountain", ca: "Muntanya", pronunciation: "moon-TAH-nyah" },
      { en: "Sea", ca: "Mar", pronunciation: "MAR" },
      { en: "River", ca: "Riu", pronunciation: "REE-oo" },
      { en: "Tree", ca: "Arbre", pronunciation: "AR-breh" },
      { en: "Path", ca: "Camí", pronunciation: "kah-MEE" },
      { en: "Lake", ca: "Llac", pronunciation: "YAHK" },
      { en: "Forest", ca: "Bosc", pronunciation: "BOHSK" },
      { en: "View", ca: "Vista", pronunciation: "BEES-tah" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "La vista des de la muntanya és preciosa", english: "The view from the mountain is beautiful", pronunciation: "lah BEES-tah dehs deh lah moon-TAH-nyah ehs preh-see-OH-sah" },
        { catalan: "Anem a caminar pel bosc", english: "Let's walk through the forest", pronunciation: "ah-NEHM ah kah-mee-NAR pehl BOHSK" },
        { catalan: "El riu passa pel mig del poble", english: "The river passes through the middle of the village", pronunciation: "ehl REE-oo PAH-sah pehl meetch dehl POH-bleh" },
        { catalan: "Hi ha un llac molt bonic aquí a prop", english: "There is a very nice lake near here", pronunciation: "ee ah oon YAHK mohlt boh-NEEK ah-KEE ah PROHP" },
        { catalan: "M'agrada el mar a l'estiu", english: "I like the sea in summer", pronunciation: "mah-GRAH-dah ehl MAR ah les-TEE-oo" }
      ],
      miniConversation: [
        { speaker: "Guide", text: "Bon dia! Avui farem una ruta per la muntanya.", isUserTurn: false, translation: "Good morning! Today we'll do a mountain route." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Genial! És un camí difícil?", "Voldria un cafè", "On és l'hospital?"], correctIndex: 0 },
        { speaker: "Guide", text: "No, és fàcil. Passarem pel bosc i veurem el llac.", isUserTurn: false, translation: "No, it's easy. We'll pass through the forest and see the lake." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Quina vista tan bonica!", "No m'agrada caminar", "Tinc fred"], correctIndex: 0 },
        { speaker: "Guide", text: "Sí! I si tenim sort, veurem animals al bosc.", isUserTurn: false, translation: "Yes! And if we're lucky, we'll see animals in the forest." },
        { speaker: "You", text: "", isUserTurn: true, options: ["M'encantaria! Anem!", "Quant costa?", "Adéu"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "La montaña és molt alta", errorWordIndex: 1, options: ["montaña", "muntanya", "montanya", "montanha"], correctIndex: 1, translation: "The mountain is very tall", explanation: "'Muntanya' is the Catalan word. 'Montaña' is Spanish." },
        { sentence: "Anem a el bosc", errorWordIndex: 2, options: ["a el", "al", "en el", "pel"], correctIndex: 1, translation: "Let's go to the forest", explanation: "'a + el' contracts to 'al' in Catalan" },
        { sentence: "Hi ha molts arboles al camí", errorWordIndex: 3, options: ["arboles", "arbres", "arbols", "arborés"], correctIndex: 1, translation: "There are many trees on the path", explanation: "'Arbres' is the Catalan plural of 'arbre'" },
        { sentence: "La lago és molt profund", errorWordIndex: 1, options: ["lago", "llac", "llag", "lac"], correctIndex: 1, translation: "The lake is very deep", explanation: "'Llac' is the Catalan word. 'Lago' is Spanish." }
      ]
    }
  },

  {
    id: 29,
    title: "Giving Directions",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Straight ahead", ca: "Tot recte", pronunciation: "toht REK-teh" },
      { en: "Turn", ca: "Gira", pronunciation: "ZHEE-rah" },
      { en: "Corner", ca: "Cantonada", pronunciation: "kahn-toh-NAH-dah" },
      { en: "Crossing", ca: "Encreuament", pronunciation: "en-kreh-oo-ah-MEHN" },
      { en: "Near", ca: "A prop", pronunciation: "ah PROHP" },
      { en: "Far", ca: "Lluny", pronunciation: "YOON-yee" },
      { en: "Next to", ca: "Al costat de", pronunciation: "ahl kos-TAHT deh" },
      { en: "In front of", ca: "Davant de", pronunciation: "dah-BAHN deh" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Gira a l'esquerra a la cantonada", english: "Turn left at the corner", pronunciation: "ZHEE-rah ah les-KEH-rah ah lah kahn-toh-NAH-dah" },
        { catalan: "Segueix tot recte fins al semàfor", english: "Go straight ahead to the traffic light", pronunciation: "seh-GAYSH toht REK-teh feens ahl seh-MAH-for" },
        { catalan: "Està al costat del banc", english: "It's next to the bank", pronunciation: "es-TAH ahl kos-TAHT dehl BAHNK" },
        { catalan: "La farmàcia és davant de l'església", english: "The pharmacy is in front of the church", pronunciation: "lah far-MAH-see-ah ehs dah-BAHN deh lez-GLEH-zee-ah" },
        { catalan: "No és lluny, està a prop", english: "It's not far, it's near", pronunciation: "noh ehs YOON-yee es-TAH ah PROHP" }
      ],
      miniConversation: [
        { speaker: "You", text: "Perdoni, on és la plaça Catalunya?", isUserTurn: false },
        { speaker: "Local", text: "Ah, és fàcil! Segueix tot recte per aquest carrer.", isUserTurn: false, translation: "Ah, it's easy! Go straight ahead on this street." },
        { speaker: "You", text: "", isUserTurn: true, options: ["D'acord, i després?", "No entenc", "M'agrada el formatge"], correctIndex: 0 },
        { speaker: "Local", text: "A la segona cantonada, gira a la dreta.", isUserTurn: false, translation: "At the second corner, turn right." },
        { speaker: "You", text: "", isUserTurn: true, options: ["I és lluny?", "Quant costa?", "Tinc febre"], correctIndex: 0 },
        { speaker: "Local", text: "No, és a prop. Cinc minuts caminant.", isUserTurn: false, translation: "No, it's near. Five minutes walking." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Moltes gràcies!", "Adéu", "No m'agrada"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Sigue todo recto", errorWordIndex: 0, options: ["Sigue", "Segueix", "Sigui", "Seguir"], correctIndex: 1, translation: "Go straight ahead", explanation: "'Segueix' is the imperative in Catalan. 'Sigue' is Spanish." },
        { sentence: "Gira a la drecha", errorWordIndex: 3, options: ["drecha", "dreta", "dretxa", "derecha"], correctIndex: 1, translation: "Turn right", explanation: "'Dreta' is the Catalan word for 'right'. 'Drecha' is not a word." },
        { sentence: "Està molt lejos d'aquí", errorWordIndex: 2, options: ["lejos", "lluny", "llunya", "lejos"], correctIndex: 1, translation: "It's very far from here", explanation: "'Lluny' is 'far' in Catalan. 'Lejos' is Spanish." },
        { sentence: "La botiga és en frente del banc", errorWordIndex: 3, options: ["frente", "davant", "front", "enfront"], correctIndex: 1, translation: "The shop is in front of the bank", explanation: "'Davant de' means 'in front of' in Catalan" }
      ]
    }
  },

  {
    id: 30,
    title: "Catalan vs Spanish",
    module: "Social",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Language", ca: "Llengua", pronunciation: "YEHN-gwah" },
      { en: "To speak", ca: "Parlar", pronunciation: "par-LAR" },
      { en: "To understand", ca: "Entendre", pronunciation: "en-TEN-dreh" },
      { en: "Word", ca: "Paraula", pronunciation: "pah-RAH-oo-lah" },
      { en: "Sentence", ca: "Frase", pronunciation: "FRAH-zeh" },
      { en: "Different", ca: "Diferent", pronunciation: "dee-feh-REHN" },
      { en: "Similar", ca: "Similar", pronunciation: "see-mee-LAR" },
      { en: "To learn", ca: "Aprendre", pronunciation: "ah-PREN-dreh" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Estic aprenent català", english: "I am learning Catalan", pronunciation: "es-TEEK ah-preh-NEHN kah-tah-LAH" },
        { catalan: "El català i el castellà són similars", english: "Catalan and Spanish are similar", pronunciation: "ehl kah-tah-LAH ee ehl kahs-teh-YAH sohn see-mee-LAHRS" },
        { catalan: "Pots parlar més a poc a poc?", english: "Can you speak more slowly?", pronunciation: "pohts par-LAR mehs ah POHK ah POHK" },
        { catalan: "Entenc una mica de català", english: "I understand a little Catalan", pronunciation: "en-TENK OO-nah MEE-kah deh kah-tah-LAH" },
        { catalan: "Quina paraula és aquesta en català?", english: "What word is this in Catalan?", pronunciation: "KEE-nah pah-RAH-oo-lah ehs ah-KES-tah en kah-tah-LAH" }
      ],
      miniConversation: [
        { speaker: "Neighbour", text: "Parles català?", isUserTurn: false, translation: "Do you speak Catalan?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Una mica! Estic aprenent.", "No, sóc de Londres", "Quant costa?"], correctIndex: 0 },
        { speaker: "Neighbour", text: "Molt bé! Com l'estàs aprenent?", isUserTurn: false, translation: "Very good! How are you learning it?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Amb una aplicació que es diu HolaCatalà!", "No entenc", "Adéu"], correctIndex: 0 },
        { speaker: "Neighbour", text: "Genial! Si vols, podem parlar en català de vegades.", isUserTurn: false, translation: "Great! If you want, we can speak in Catalan sometimes." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, m'encantaria practicar!", "No m'agrada", "Tinc febre"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Estoy aprendiendo català", errorWordIndex: 0, options: ["Estoy", "Estic", "Esto", "Sóc"], correctIndex: 1, translation: "I am learning Catalan", explanation: "'Estic' is 'I am' (temporary) in Catalan. 'Estoy' is Spanish." },
        { sentence: "Puedes hablar más lentament?", errorWordIndex: 0, options: ["Puedes", "Pots", "Podes", "Pot"], correctIndex: 1, translation: "Can you speak more slowly?", explanation: "'Pots' is the informal 'you can' in Catalan. 'Puedes' is Spanish." },
        { sentence: "Entendo una mica de català", errorWordIndex: 0, options: ["Entendo", "Entenc", "Entendo", "Entiendo"], correctIndex: 1, translation: "I understand a little Catalan", explanation: "'Entenc' is 'I understand' in Catalan" },
        { sentence: "La idioma catalana és molt bonica", errorWordIndex: 0, options: ["La", "L'", "El", "Les"], correctIndex: 0, translation: "The Catalan language is very beautiful", explanation: "This is actually correct! 'Idioma' is masculine in Catalan but 'llengua' is feminine." }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════
  // MODULE 5: INTERMEDIATE (Lessons 31-40)
  // Format: Mixed — each lesson picks best format for content
  // ═══════════════════════════════════════════════════════════

  {
    id: 31,
    title: "At the Hairdresser",
    module: "Intermediate",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation'],
    words: [
      { en: "Haircut", ca: "Tall de cabell", pronunciation: "TAHL deh kah-BEYL" },
      { en: "Hair", ca: "Cabell", pronunciation: "kah-BEYL" },
      { en: "Short", ca: "Curt", pronunciation: "KOORT" },
      { en: "Long", ca: "Llarg", pronunciation: "YAHRGK" },
      { en: "Wash", ca: "Rentar", pronunciation: "ren-TAR" },
      { en: "Dye/Colour", ca: "Tenyir", pronunciation: "ten-YEER" },
      { en: "Appointment", ca: "Hora", pronunciation: "OH-rah" },
      { en: "Fringe/Bangs", ca: "Serrell", pronunciation: "seh-RREYL" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Voldria un ___ de cabell", blank: "tall", options: ["tall", "llarg", "curt", "rentar"], correctIndex: 0, translation: "I would like a haircut", explanation: "'Tall' = cut. 'Tall de cabell' is the standard phrase for a haircut."},
        { sentence: "No massa ___  si us plau", blank: "curt", options: ["llarg", "curt", "cabell", "tenyir"], correctIndex: 1, translation: "Not too short please", explanation: "'Curt' = short. 'No massa curt' = not too short — a useful phrase!" },
        { sentence: "Vols ___ el cabell també?", blank: "rentar", options: ["tenyir", "tall", "rentar", "llarg"], correctIndex: 2, translation: "Do you want to wash the hair too?", explanation: "'Rentar' = to wash. The hairdresser may ask 'Vols rentar?' before cutting." },
        { sentence: "Tinc ___ a les quatre", blank: "hora", options: ["tall", "hora", "cabell", "serrell"], correctIndex: 1, translation: "I have an appointment at four", explanation: "'Hora' = appointment/time slot. 'Tinc hora' = I have an appointment." }
      ],
      miniConversation: [
        { speaker: "Hairdresser", text: "Bon dia! Què voldries avui?", isUserTurn: false, translation: "Good morning! What would you like today?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Voldria un tall de cabell, si us plau", "Voldria un cafè", "On és el bany?"], correctIndex: 0 },
        { speaker: "Hairdresser", text: "Com el vols? Curt, llarg...?", isUserTurn: false, translation: "How do you want it? Short, long...?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Curt pels costats, una mica més llarg per dalt", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Hairdresser", text: "Perfecte! Vols rentar primer?", isUserTurn: false, translation: "Perfect! Do you want to wash first?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, si us plau", "No m'agrada", "Quant costa?"], correctIndex: 0 }
      ]
    }
  },

  {
    id: 32,
    title: "Driving & Transport",
    module: "Intermediate",
    stages: ['intro', 'flashcards', 'sentenceOrdering', 'errorCorrection'],
    words: [
      { en: "Car", ca: "Cotxe", pronunciation: "KOH-cheh" },
      { en: "Petrol/Gas", ca: "Gasolina", pronunciation: "gah-soh-LEE-nah" },
      { en: "Road", ca: "Carretera", pronunciation: "kah-reh-TEH-rah" },
      { en: "Traffic", ca: "Trànsit", pronunciation: "TRAHN-seet" },
      { en: "Parking", ca: "Aparcament", pronunciation: "ah-par-kah-MEHN" },
      { en: "Speed", ca: "Velocitat", pronunciation: "beh-loh-see-TAHT" },
      { en: "Driver", ca: "Conductor", pronunciation: "kohn-dook-TOR" },
      { en: "Motorway", ca: "Autopista", pronunciation: "ow-toh-PEES-tah" }
    ],
    stageData: {
      sentenceOrdering: [
        { words: ["On", "puc", "aparcar", "el", "cotxe"], correctOrder: "On puc aparcar el cotxe", translation: "Where can I park the car?", grammarNote: "💡 'On puc...?' = Where can I...? Combine 'on' (where) + 'puc' (I can) + verb." },
        { words: ["Hi", "ha", "molt", "de", "trànsit", "avui"], correctOrder: "Hi ha molt de trànsit avui", translation: "There's a lot of traffic today" , grammarNote: "💡 'Hi ha' = there is/are. 'Hi ha molt de trànsit' = there's a lot of traffic." },
        { words: ["Necessito", "posar", "gasolina"], correctOrder: "Necessito posar gasolina", translation: "I need to put in petrol" , grammarNote: "💡 'Necessito' + infinitive = I need to... Necessito posar, Necessito comprar." },
        { words: ["L'autopista", "és", "més", "ràpida"], correctOrder: "L'autopista és més ràpida", translation: "The motorway is faster" , grammarNote: "💡 'Més ràpida' = faster. Comparative: 'més' + adjective + 'que' (than)." },
        { words: ["Condueix", "amb", "cura", "si", "us", "plau"], correctOrder: "Condueix amb cura si us plau", translation: "Drive carefully please" , grammarNote: "💡 'Amb cura' = carefully. 'Condueix' is the imperative (command) form of 'conduir'." }
      ],
      errorCorrection: [
        { sentence: "On puedo aparcar el coche?", errorWordIndex: 1, options: ["puedo", "puc", "puec", "pod"], correctIndex: 1, translation: "Where can I park the car?", explanation: "'Puc' is 'I can' in Catalan. Also 'cotxe' not 'coche'" },
        { sentence: "El cotxe necessita gasolina", errorWordIndex: 0, options: ["El", "El", "El", "El"], correctIndex: 0, translation: "The car needs petrol", explanation: "This sentence is actually correct!" },
        { sentence: "Hi ha mucho trànsit avui", errorWordIndex: 2, options: ["mucho", "molt", "muy", "molte"], correctIndex: 1, translation: "There's a lot of traffic today", explanation: "'Molt' means 'a lot' in Catalan. 'Mucho' is Spanish." },
        { sentence: "La carrettera és molt llarga", errorWordIndex: 1, options: ["carrettera", "carretera", "carettera", "caretera"], correctIndex: 1, translation: "The road is very long", explanation: "'Carretera' has one T, not two" }
      ]
    }
  },

  {
    id: 33,
    title: "Making Appointments",
    module: "Intermediate",
    stages: ['intro', 'listenAndType', 'fillInTheBlank', 'miniConversation'],
    words: [
      { en: "Appointment", ca: "Cita", pronunciation: "SEE-tah" },
      { en: "Free/Available", ca: "Lliure", pronunciation: "YEE-oo-reh" },
      { en: "Busy", ca: "Ocupat", pronunciation: "oh-koo-PAHT" },
      { en: "To cancel", ca: "Cancel·lar", pronunciation: "kahn-seh-LAR" },
      { en: "To change", ca: "Canviar", pronunciation: "kahn-bee-AR" },
      { en: "O'clock", ca: "En punt", pronunciation: "en POONT" },
      { en: "Half past", ca: "I mitja", pronunciation: "ee MEE-jah" },
      { en: "Quarter past", ca: "I quart", pronunciation: "ee KWART" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Voldria demanar una cita", english: "I would like to make an appointment", pronunciation: "bol-DREE-ah deh-mah-NAR OO-nah SEE-tah" },
        { catalan: "Teniu alguna hora lliure?", english: "Do you have a free slot?", pronunciation: "teh-NEE-oo ahl-GOO-nah OH-rah YEE-oo-reh" },
        { catalan: "Puc canviar la cita de demà?", english: "Can I change tomorrow's appointment?", pronunciation: "POOK kahn-bee-AR lah SEE-tah deh deh-MAH" },
        { catalan: "A les tres i mitja va bé?", english: "Is half past three OK?", pronunciation: "ah lehs TREHS ee MEE-jah bah BEH" },
        { catalan: "Ho sento, estic ocupat aquell dia", english: "I'm sorry, I'm busy that day", pronunciation: "oh SEN-toh es-TEEK oh-koo-PAHT ah-KEYL DEE-ah" }
      ],
      fillInTheBlank: [
        { sentence: "Voldria ___ una cita", blank: "demanar", options: ["demanar", "cancel·lar", "canviar", "ocupat"], correctIndex: 0, translation: "I would like to make an appointment", explanation: "'Demanar' = to ask for / to request. 'Demanar una cita' = make an appointment." },
        { sentence: "Estic ___ dimarts", blank: "ocupat", options: ["lliure", "ocupat", "content", "cansat"], correctIndex: 1, translation: "I'm busy on Tuesday" , explanation: "'Ocupat' = busy/occupied. Opposite: 'lliure' (free/available)." },
        { sentence: "Puc ___ la cita?", blank: "canviar", options: ["demanar", "cancel·lar", "canviar", "lliure"], correctIndex: 2, translation: "Can I change the appointment?" , explanation: "'Canviar' = to change. 'Cancel·lar' = to cancel. Know both!" },
        { sentence: "Teniu alguna hora ___?", blank: "lliure", options: ["ocupat", "cita", "lliure", "punt"], correctIndex: 2, translation: "Do you have a free slot?", explanation: "'Lliure' = free (available). Not 'gratis' — that means free of charge." },
        { sentence: "La cita és a les tres i ___", blank: "mitja", options: ["quart", "mitja", "punt", "hora"], correctIndex: 1, translation: "The appointment is at half past three", explanation: "'I mitja' = and a half. 'Les tres i mitja' = 3:30. 'I quart' = quarter past." }
      ],
      miniConversation: [
        { speaker: "Receptionist", text: "Clínica dental, bona tarda!", isUserTurn: false, translation: "Dental clinic, good afternoon!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Bona tarda! Voldria demanar una cita", "Voldria un cafè", "On és el bany?"], correctIndex: 0 },
        { speaker: "Receptionist", text: "Quan li anirà bé?", isUserTurn: false, translation: "When would suit you?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Dimecres a la tarda, si pot ser", "No entenc", "Tinc fred"], correctIndex: 0 },
        { speaker: "Receptionist", text: "Dimecres tinc les tres i mitja lliure. Li va bé?", isUserTurn: false, translation: "Wednesday I have half past three free. Does that work?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Perfecte, moltes gràcies!", "No m'agrada", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  {
    id: 34,
    title: "Neighbours & Community",
    module: "Intermediate",
    stages: ['intro', 'flashcards', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Neighbour", ca: "Veí/Veïna", pronunciation: "beh-EE / beh-EE-nah" },
      { en: "Building", ca: "Edifici", pronunciation: "eh-dee-FEE-see" },
      { en: "Floor/Storey", ca: "Pis", pronunciation: "PEES" },
      { en: "Noise", ca: "Soroll", pronunciation: "soh-ROYL" },
      { en: "Quiet", ca: "Tranquil", pronunciation: "trahn-KEEL" },
      { en: "To share", ca: "Compartir", pronunciation: "kohm-par-TEER" },
      { en: "Community", ca: "Comunitat", pronunciation: "koh-moo-nee-TAHT" },
      { en: "Lift/Elevator", ca: "Ascensor", pronunciation: "ah-sehn-SOR" }
    ],
    stageData: {
      miniConversation: [
        { speaker: "Neighbour", text: "Hola! Ets nou a l'edifici?", isUserTurn: false, translation: "Hi! Are you new in the building?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, acabo de mudar-me! Sóc al tercer pis.", "Voldria un cafè", "On és la platja?"], correctIndex: 0 },
        { speaker: "Neighbour", text: "Benvingut! Jo sóc la Marta, del segon. El barri és molt tranquil.", isUserTurn: false, translation: "Welcome! I'm Marta, from the second floor. The neighbourhood is very quiet." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Encantat! M'agrada que sigui tranquil.", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Neighbour", text: "Si necessites qualsevol cosa, no dubtis a trucar!", isUserTurn: false, translation: "If you need anything, don't hesitate to knock!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Moltes gràcies, Marta! Ets molt amable.", "Adéu", "No m'agrada"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "El mi veí és molt amable", errorWordIndex: 1, options: ["mi", "meu", "mio", "mon"], correctIndex: 1, translation: "My neighbour is very kind", explanation: "'Meu' is 'my' (masculine) in Catalan. 'Mi' is Spanish." },
        { sentence: "Vivim en el tercer pis", errorWordIndex: 1, options: ["en", "al", "a", "en"], correctIndex: 1, translation: "We live on the third floor", explanation: "'Al' (a + el) is the correct preposition for floors" },
        { sentence: "L'edifici és molt ruidos", errorWordIndex: 4, options: ["ruidos", "sorollós", "ruidoso", "sorollos"], correctIndex: 1, translation: "The building is very noisy", explanation: "'Sorollós' is 'noisy' in Catalan. 'Ruidos/ruidoso' is Spanish." },
        { sentence: "La comunitat de vecinos és gran", errorWordIndex: 2, options: ["vecinos", "veïns", "veinos", "vecins"], correctIndex: 1, translation: "The community of neighbours is big", explanation: "'Veïns' is the Catalan plural. 'Vecinos' is Spanish." }
      ]
    }
  },

  {
    id: 35,
    title: "Shopping & Bargains",
    module: "Intermediate",
    stages: ['intro', 'fillInTheBlank', 'sentenceOrdering', 'listenAndType'],
    words: [
      { en: "Sale/Discount", ca: "Rebaixes", pronunciation: "reh-BAH-shehs" },
      { en: "Size", ca: "Talla", pronunciation: "TAH-yah" },
      { en: "To try on", ca: "Emprovar", pronunciation: "em-proh-BAR" },
      { en: "Fitting room", ca: "Provador", pronunciation: "proh-bah-DOR" },
      { en: "Price", ca: "Preu", pronunciation: "PREH-oo" },
      { en: "Cheap", ca: "Barat", pronunciation: "bah-RAHT" },
      { en: "To return", ca: "Tornar", pronunciation: "tor-NAR" },
      { en: "Gift", ca: "Regal", pronunciation: "reh-GAHL" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Puc ___ aquesta camisa?", blank: "emprovar", options: ["emprovar", "tornar", "comprar", "rentar"], correctIndex: 0, translation: "Can I try on this shirt?" , explanation: "'Emprovar' = to try on (clothes). Different from 'provar' (to taste/try food)."},
        { sentence: "Quina ___ necessites?", blank: "talla", options: ["preu", "talla", "regal", "bossa"], correctIndex: 1, translation: "What size do you need?", explanation: "'Talla' = size (clothing). 'Quina talla?' = What size? Essential for shopping."},
        { sentence: "Tenen ___ aquesta setmana", blank: "rebaixes", options: ["regal", "provador", "rebaixes", "preu"], correctIndex: 2, translation: "They have sales this week", explanation: "'Rebaixes' = sales/discounts. Big sales happen in January and July in Catalonia." },
        { sentence: "Vull ___ un regal per la meva mare", blank: "comprar", options: ["tornar", "emprovar", "comprar", "rentar"], correctIndex: 2, translation: "I want to buy a gift for my mother", explanation: "'Comprar' = to buy. 'Regal' = gift. 'Comprar un regal' = buy a gift." },
        { sentence: "El ___ és molt barat", blank: "preu", options: ["talla", "provador", "regal", "preu"], correctIndex: 3, translation: "The price is very cheap", explanation: "'Preu' = price. 'Barat' = cheap. 'Car' = expensive." }
      ],
      sentenceOrdering: [
        { words: ["Puc", "emprovar", "aquesta", "camisa"], correctOrder: "Puc emprovar aquesta camisa", translation: "Can I try on this shirt?", grammarNote: "💡 'Puc + infinitive?' = Can I...? A polite way to ask permission in shops." },
        { words: ["On", "és", "el", "provador"], correctOrder: "On és el provador", translation: "Where is the fitting room?", grammarNote: "💡 'On és...?' = Where is...? Works for any location: el provador, el bany, la sortida." },
        { words: ["Vull", "tornar", "aquesta", "camisa"], correctOrder: "Vull tornar aquesta camisa", translation: "I want to return this shirt", grammarNote: "💡 'Vull tornar' = I want to return. Useful if something doesn't fit or is faulty." },
        { words: ["El", "preu", "és", "molt", "barat"], correctOrder: "El preu és molt barat", translation: "The price is very cheap", grammarNote: "💡 'Molt barat' = very cheap. 'Massa car' = too expensive. 'Massa' = too (much)."}
      ],
      listenAndType: [
        { catalan: "Tenen una talla més gran?", english: "Do you have a bigger size?", pronunciation: "TEH-nehn OO-nah TAH-yah mehs GRAHN" },
        { catalan: "Busco un regal per al meu amic", english: "I'm looking for a gift for my friend", pronunciation: "BOOS-koh oon reh-GAHL pehr ahl MEH-oo ah-MEEK" },
        { catalan: "Puc pagar amb targeta?", english: "Can I pay by card?", pronunciation: "POOK pah-GAR ahm tar-ZHEH-tah" },
        { catalan: "Les rebaixes acaben diumenge", english: "The sales end on Sunday", pronunciation: "lehs reh-BAH-shehs ah-KAH-behn dee-oo-MEN-zheh" }
      ]
    }
  },

  {
    id: 36,
    title: "Eating Out",
    module: "Intermediate",
    stages: ['intro', 'miniConversation', 'fillInTheBlank', 'listenAndType'],
    words: [
      { en: "Starter", ca: "Entrant", pronunciation: "en-TRAHNT" },
      { en: "Main course", ca: "Plat principal", pronunciation: "PLAHT preen-see-PAHL" },
      { en: "Dessert", ca: "Postres", pronunciation: "POHS-trehs" },
      { en: "Spicy", ca: "Picant", pronunciation: "pee-KAHNT" },
      { en: "Sweet", ca: "Dolç", pronunciation: "DOHLS" },
      { en: "Salty", ca: "Salat", pronunciation: "sah-LAHT" },
      { en: "Tip", ca: "Propina", pronunciation: "proh-PEE-nah" },
      { en: "Delicious", ca: "Deliciós", pronunciation: "deh-lee-see-OHS" }
    ],
    stageData: {
      miniConversation: [
        { speaker: "Waiter", text: "Bona nit! Ja sabeu què voleu?", isUserTurn: false, translation: "Good evening! Do you know what you'd like?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí! De primer, l'amanida. De segon, el peix.", "Voldria un cafè", "On és el bany?"], correctIndex: 0 },
        { speaker: "Waiter", text: "Excel·lent! El peix és el plat del dia. I per beure?", isUserTurn: false, translation: "Excellent! The fish is the dish of the day. And to drink?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Un vi negre, si us plau", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Waiter", text: "Perfecte! Vol postres després?", isUserTurn: false, translation: "Perfect! Will you want dessert after?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, què teniu de dolç?", "Adéu", "No m'agrada"], correctIndex: 0 }
      ],
      fillInTheBlank: [
        { sentence: "El peix és molt ___", blank: "deliciós", options: ["salat", "picant", "deliciós", "dolç"], correctIndex: 2, translation: "The fish is very delicious",explanation: "'Deliciós' = delicious. Masculine form. Feminine: 'deliciosa'." },
        { sentence: "De ___ voldria l'amanida", blank: "primer", options: ["primer", "segon", "postres", "propina"], correctIndex: 0, translation: "For starter I'd like the salad", explanation: "'De primer' = for starters. 'De segon' = for main. 'De postres' = for dessert."},
        { sentence: "Això és massa ___!", blank: "picant", options: ["dolç", "salat", "picant", "deliciós"], correctIndex: 2, translation: "This is too spicy!", explanation: "'Picant' = spicy. 'Massa picant' = too spicy. Important for ordering food!" },
        { sentence: "Voleu alguna cosa de ___?", blank: "postres", options: ["entrant", "plat", "postres", "propina"], correctIndex: 2, translation: "Would you like something for dessert?", explanation: "'Postres' = dessert. Always plural in Catalan. 'Voleu postres?' = Want dessert?" },
      ],
      listenAndType: [
        { catalan: "El compte, si us plau", english: "The bill, please", pronunciation: "ehl KOHM-teh see oos PLOW" },
        { catalan: "Tot estava molt deliciós", english: "Everything was very delicious", pronunciation: "toht es-TAH-bah mohlt deh-lee-see-OHS" },
        { catalan: "Puc deixar propina?", english: "Can I leave a tip?", pronunciation: "POOK deh-SHAR proh-PEE-nah" },
        { catalan: "Teniu algun plat sense gluten?", english: "Do you have any gluten-free dish?", pronunciation: "teh-NEE-oo ahl-GOON PLAHT SEN-seh GLOO-tehn" }
      ]
    }
  },

  {
    id: 37,
    title: "Renting a Flat",
    module: "Intermediate",
    stages: ['intro', 'flashcards', 'miniConversation', 'sentenceOrdering'],
    words: [
      { en: "Flat/Apartment", ca: "Pis", pronunciation: "PEES" },
      { en: "Rent", ca: "Lloguer", pronunciation: "yoh-GHEHR" },
      { en: "Deposit", ca: "Fiança", pronunciation: "fee-AHN-sah" },
      { en: "Contract", ca: "Contracte", pronunciation: "kohn-TRAK-teh" },
      { en: "Furnished", ca: "Moblat", pronunciation: "moh-BLAHT" },
      { en: "Unfurnished", ca: "Sense mobles", pronunciation: "SEN-seh MOH-blehs" },
      { en: "To sign", ca: "Signar", pronunciation: "seeg-NAR" },
      { en: "Landlord", ca: "Propietari", pronunciation: "proh-pee-eh-TAH-ree" }
    ],
    stageData: {
      miniConversation: [
        { speaker: "Agent", text: "Bon dia! Busques pis?", isUserTurn: false, translation: "Good morning! Are you looking for a flat?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, busco un pis moblat al centre", "Voldria un cafè", "On és la platja?"], correctIndex: 0 },
        { speaker: "Agent", text: "Tinc un pis de dos habitacions. El lloguer és 800 euros al mes.", isUserTurn: false, translation: "I have a two-bedroom flat. The rent is 800 euros a month." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Inclou les despeses? I quina fiança cal?", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Agent", text: "Les despeses van a part. La fiança és d'un mes.", isUserTurn: false, translation: "Bills are separate. The deposit is one month." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Puc veure'l demà?", "Adéu", "No m'agrada"], correctIndex: 0 }
      ],
      sentenceOrdering: [
        { words: ["Busco", "un", "pis", "moblat"], correctOrder: "Busco un pis moblat", translation: "I'm looking for a furnished flat" , grammarNote: "💡 'Busco' = I'm looking for. 'Moblat' = furnished. 'Sense mobles' = unfurnished." },
        { words: ["Quant", "és", "el", "lloguer", "mensual"], correctOrder: "Quant és el lloguer mensual", translation: "How much is the monthly rent?", grammarNote: "💡 'Quant és...?' = How much is...? 'Mensual' = monthly. Used for recurring costs." },
        { words: ["Cal", "signar", "el", "contracte", "avui"], correctOrder: "Cal signar el contracte avui", translation: "We need to sign the contract today", grammarNote: "💡 'Cal' = it's necessary / we need to. 'Cal signar' = we need to sign." },
        { words: ["El", "pis", "té", "dues", "habitacions"], correctOrder: "El pis té dues habitacions", translation: "The flat has two bedrooms", grammarNote: "💡 'Té' = it has (from 'tenir'). 'El pis té dues habitacions' = The flat has two bedrooms." },
        { words: ["La", "fiança", "és", "d'un", "mes"], correctOrder: "La fiança és d'un mes", translation: "The deposit is one month" , grammarNote: "💡 'D'un mes' = of one month. 'La fiança' = the deposit (rental security deposit)." }
      ]
    }
  },

  {
    id: 38,
    title: "At the Post Office",
    module: "Intermediate",
    stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection'],
    words: [
      { en: "Letter", ca: "Carta", pronunciation: "KAR-tah" },
      { en: "Package", ca: "Paquet", pronunciation: "pah-KEHT" },
      { en: "Stamp", ca: "Segell", pronunciation: "seh-ZHEYL" },
      { en: "To send", ca: "Enviar", pronunciation: "en-bee-AR" },
      { en: "Address", ca: "Adreça", pronunciation: "ah-DREH-sah" },
      { en: "Postcode", ca: "Codi postal", pronunciation: "KOH-dee pohs-TAHL" },
      { en: "Urgent", ca: "Urgent", pronunciation: "oor-ZHEHN" },
      { en: "Tracking", ca: "Seguiment", pronunciation: "seh-ghee-MEHN" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Vull ___ un paquet a Anglaterra", blank: "enviar", options: ["enviar", "rebre", "obrir", "tancar"], correctIndex: 0, translation: "I want to send a package to England" , explanation: "'Enviar' = to send. 'Vull enviar' = I want to send. Works for letters and packages." },
        { sentence: "Necessito un ___ per la carta", blank: "segell", options: ["paquet", "segell", "adreça", "codi"], correctIndex: 1, translation: "I need a stamp for the letter", explanation: "'Segell' = stamp. You need one for any letter. 'Necessito un segell' = I need a stamp." },
        { sentence: "L'___ és incorrecta", blank: "adreça", options: ["segell", "carta", "adreça", "paquet"], correctIndex: 2, translation: "The address is incorrect" ,  explanation: "'Adreça' = address. Don't confuse with Spanish 'dirección'." },
        { sentence: "Es pot enviar com a ___?", blank: "urgent", options: ["carta", "segell", "paquet", "urgent"], correctIndex: 3, translation: "Can it be sent as urgent?", explanation: "'Urgent' = urgent. Same word in English! 'Enviar com a urgent' = send as urgent." }
      ],
      listenAndType: [
        { catalan: "Vull enviar aquest paquet", english: "I want to send this package", pronunciation: "bool en-bee-AR ah-KEST pah-KEHT" },
        { catalan: "Quant costa enviar una carta?", english: "How much does it cost to send a letter?", pronunciation: "kwahnt KOHS-tah en-bee-AR OO-nah KAR-tah" },
        { catalan: "Necessito un segell per Andorra", english: "I need a stamp for Andorra", pronunciation: "neh-seh-SEE-toh oon seh-ZHEYL pehr ahn-DOH-rah" },
        { catalan: "Té número de seguiment?", english: "Does it have a tracking number?", pronunciation: "TEH NOO-meh-roh deh seh-ghee-MEHN" }
      ],
      errorCorrection: [
        { sentence: "Quiero enviar una carta", errorWordIndex: 0, options: ["Quiero", "Vull", "Quero", "Vol"], correctIndex: 1, translation: "I want to send a letter", explanation: "'Vull' is 'I want' in Catalan. 'Quiero' is Spanish." },
        { sentence: "Necesito un sello", errorWordIndex: 2, options: ["sello", "segell", "segl", "stamp"], correctIndex: 1, translation: "I need a stamp", explanation: "'Segell' is the Catalan word. 'Sello' is Spanish." },
        { sentence: "La dirección és incorrecta", errorWordIndex: 1, options: ["dirección", "adreça", "direcció", "adressa"], correctIndex: 1, translation: "The address is incorrect", explanation: "'Adreça' is 'address' in Catalan. 'Dirección' is Spanish." },
        { sentence: "El paquete arriba demà", errorWordIndex: 1, options: ["paquete", "paquet", "paqueta", "pachet"], correctIndex: 1, translation: "The package arrives tomorrow", explanation: "'Paquet' is the Catalan word. 'Paquete' is Spanish." }
      ]
    }
  },

  {
    id: 39,
    title: "Sport & Exercise",
    module: "Intermediate",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Football", ca: "Futbol", pronunciation: "foot-BOHL" },
      { en: "To run", ca: "Córrer", pronunciation: "KOH-rrer" },
      { en: "Gym", ca: "Gimnàs", pronunciation: "zheem-NAHS" },
      { en: "Match/Game", ca: "Partit", pronunciation: "par-TEET" },
      { en: "Team", ca: "Equip", pronunciation: "eh-KEEP" },
      { en: "To win", ca: "Guanyar", pronunciation: "gwah-NYAR" },
      { en: "To lose", ca: "Perdre", pronunciation: "PER-dreh" },
      { en: "Healthy", ca: "Saludable", pronunciation: "sah-loo-DAH-bleh" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Vaig al ___ cada dia", blank: "gimnàs", options: ["futbol", "gimnàs", "partit", "equip"], correctIndex: 1, translation: "I go to the gym every day" , explanation: "'Gimnàs' = gym. 'Vaig al gimnàs' = I go to the gym. 'Cada dia' = every day." },
        { sentence: "El Barça va ___ el partit!", blank: "guanyar", options: ["perdre", "córrer", "guanyar", "jugar"], correctIndex: 2, translation: "Barça won the match!" , explanation: "'Guanyar' = to win. 'Perdre' = to lose. 'Va guanyar' = won (past tense)." },
        { sentence: "M'agrada ___ al matí", blank: "córrer", options: ["guanyar", "perdre", "córrer", "futbol"], correctIndex: 2, translation: "I like running in the morning" , explanation: "'Córrer' = to run. 'Al matí' = in the morning. Running is popular in Barcelona!" },
        { sentence: "Fer esport és molt ___", blank: "saludable", options: ["cansat", "saludable", "dolent", "trist"], correctIndex: 1, translation: "Doing sport is very healthy" , explanation: "'Saludable' = healthy. 'Fer esport' = to do sport (NOT 'jugar esport')." }
      ],
      sentenceOrdering: [
        { words: ["Vaig", "al", "gimnàs", "cada", "dia"], correctOrder: "Vaig al gimnàs cada dia", translation: "I go to the gym every day" , grammarNote: "💡 'Vaig al' = I go to the. 'Cada dia' = every day. A very useful daily phrase." },
        { words: ["El", "partit", "és", "diumenge", "a", "les", "quatre"], correctOrder: "El partit és diumenge a les quatre", translation: "The match is Sunday at four" , grammarNote: "💡 'A les quatre' = at four o'clock. Time goes at the end after 'a les' + hour." },
        { words: ["M'agrada", "córrer", "per", "la", "platja"], correctOrder: "M'agrada córrer per la platja", translation: "I like running on the beach" , grammarNote: "💡 'M'agrada + infinitive' = I like to... M'agrada córrer = I like running." },
        { words: ["El", "meu", "equip", "va", "guanyar"], correctOrder: "El meu equip va guanyar", translation: "My team won" , grammarNote: "💡 'Va guanyar' = won (he/she/it). Past tense: va + infinitive (like vaig but for he/she)." }
      ]
    }
  },

  {
    id: 40,
    title: "Formal Situations",
    module: "Intermediate",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Sir/Madam", ca: "Senyor/Senyora", pronunciation: "seh-NYOR / seh-NYOH-rah" },
      { en: "Please (formal)", ca: "Faci el favor", pronunciation: "FAH-see ehl fah-BOR" },
      { en: "Could you?", ca: "Podria?", pronunciation: "poh-DREE-ah" },
      { en: "Appointment", ca: "Cita prèvia", pronunciation: "SEE-tah PREH-bee-ah" },
      { en: "Form", ca: "Formulari", pronunciation: "for-moo-LAH-ree" },
      { en: "ID card", ca: "Document d'identitat", pronunciation: "doh-koo-MEHN dee-den-tee-TAHT" },
      { en: "To fill in", ca: "Omplir", pronunciation: "ohm-PLEER" },
      { en: "Signature", ca: "Signatura", pronunciation: "seeg-nah-TOO-rah" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Bon dia, tinc cita prèvia", english: "Good morning, I have an appointment", pronunciation: "bon DEE-ah TEENK SEE-tah PREH-bee-ah" },
        { catalan: "Podria omplir aquest formulari?", english: "Could you fill in this form?", pronunciation: "poh-DREE-ah ohm-PLEER ah-KEST for-moo-LAH-ree" },
        { catalan: "Necessito el seu document d'identitat", english: "I need your ID card", pronunciation: "neh-seh-SEE-toh ehl SEH-oo doh-koo-MEHN dee-den-tee-TAHT" },
        { catalan: "Posi la seva signatura aquí", english: "Put your signature here", pronunciation: "POH-see lah SEH-bah seeg-nah-TOO-rah ah-KEE" },
        { catalan: "Gràcies per la seva paciència", english: "Thank you for your patience", pronunciation: "GRAH-see-ehs pehr lah SEH-bah pah-see-EN-see-ah" }
      ],
      miniConversation: [
        { speaker: "Official", text: "Bon dia. Té cita prèvia?", isUserTurn: false, translation: "Good morning. Do you have an appointment?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, tinc cita a les onze", "Voldria un cafè", "On és la platja?"], correctIndex: 0 },
        { speaker: "Official", text: "Molt bé. Necessito el seu document d'identitat i omplir aquest formulari.", isUserTurn: false, translation: "Very good. I need your ID and for you to fill in this form." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Aquí té el meu passaport. On signo?", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Official", text: "Aquí baix, si us plau. Signatura i data.", isUserTurn: false, translation: "Down here, please. Signature and date." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Ja està. Necessita res més?", "Adéu", "No m'agrada"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Tiene cita previa?", errorWordIndex: 0, options: ["Tiene", "Té", "Tien", "Tene"], correctIndex: 1, translation: "Do you have an appointment?", explanation: "'Té' is 'you have' (formal) in Catalan. 'Tiene' is Spanish." },
        { sentence: "Necesito su documento de identitat", errorWordIndex: 1, options: ["su", "el seu", "tu", "vostre"], correctIndex: 1, translation: "I need your ID", explanation: "'El seu' is 'your' (formal) in Catalan. 'Su' is Spanish." },
        { sentence: "Ponga la firma aquí", errorWordIndex: 0, options: ["Ponga", "Posi", "Pongi", "Ponga"], correctIndex: 1, translation: "Put the signature here", explanation: "'Posi' is the formal imperative in Catalan. 'Ponga' is Spanish." },
        { sentence: "Gracias per la seva paciència", errorWordIndex: 0, options: ["Gracias", "Gràcies", "Gracias", "Gracis"], correctIndex: 1, translation: "Thank you for your patience", explanation: "'Gràcies' is 'thank you' in Catalan. 'Gracias' is Spanish." }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════
  // MODULE 6: ADVANCED (Lessons 41-50)
  // Format: Mixed — more production-based, less scaffolding
  // ═══════════════════════════════════════════════════════════

  {
    id: 41,
    title: "Job Interviews",
    module: "Advanced",
    stages: ['intro', 'listenAndType', 'miniConversation', 'sentenceOrdering'],
    words: [
      { en: "Experience", ca: "Experiència", pronunciation: "eks-peh-ree-EN-see-ah" },
      { en: "Skills", ca: "Habilitats", pronunciation: "ah-bee-lee-TAHTS" },
      { en: "Salary", ca: "Sou", pronunciation: "SOH-oo" },
      { en: "Schedule", ca: "Horari", pronunciation: "oh-RAH-ree" },
      { en: "CV/Resume", ca: "Currículum", pronunciation: "koo-RREE-koo-loom" },
      { en: "Strength", ca: "Punt fort", pronunciation: "poont FORT" },
      { en: "To apply", ca: "Sol·licitar", pronunciation: "sohl-lee-see-TAR" },
      { en: "Position", ca: "Lloc de treball", pronunciation: "YOHK deh treh-BAHL" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Tinc cinc anys d'experiència", english: "I have five years of experience", pronunciation: "TEENK SEENK AHNYS deks-peh-ree-EN-see-ah" },
        { catalan: "Quin és l'horari de treball?", english: "What is the work schedule?", pronunciation: "keen ehs loh-RAH-ree deh treh-BAHL" },
        { catalan: "He sol·licitat el lloc de treball", english: "I have applied for the position", pronunciation: "eh sohl-lee-see-TAHT ehl YOHK deh treh-BAHL" },
        { catalan: "El meu punt fort és treballar en equip", english: "My strength is working in a team", pronunciation: "ehl MEH-oo poont FORT ehs treh-bah-YAR en eh-KEEP" }
      ],
      miniConversation: [
        { speaker: "Interviewer", text: "Bon dia! Per què vol treballar amb nosaltres?", isUserTurn: false, translation: "Good morning! Why do you want to work with us?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["M'interessa molt l'empresa i tinc experiència en el sector", "Voldria un cafè", "M'agrada la platja"], correctIndex: 0 },
        { speaker: "Interviewer", text: "Quins són els seus punts forts?", isUserTurn: false, translation: "What are your strengths?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sóc organitzat i treballo bé en equip", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Interviewer", text: "Perfecte. L'horari seria de 9 a 17h. Li interessa?", isUserTurn: false, translation: "Perfect. The schedule would be 9 to 5. Are you interested?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, molt! Quan podria començar?", "Adéu", "No m'agrada"], correctIndex: 0 }
      ],
      sentenceOrdering: [
        { words: ["Tinc", "experiència", "en", "aquest", "sector"], correctOrder: "Tinc experiència en aquest sector", translation: "I have experience in this sector" , grammarNote: "💡 'Tinc experiència en...' = I have experience in... Essential for job interviews." },
        { words: ["Quin", "és", "el", "sou", "mensual"], correctOrder: "Quin és el sou mensual", translation: "What is the monthly salary?" , grammarNote: "💡 'Quin és...?' = What is...? 'El sou mensual' = the monthly salary." },
        { words: ["He", "enviat", "el", "meu", "currículum"], correctOrder: "He enviat el meu currículum", translation: "I have sent my CV" , grammarNote: "💡 'He enviat' = I have sent. Present perfect: he + past participle (enviat, fet, dit)." },
        { words: ["Puc", "començar", "la", "setmana", "vinent"], correctOrder: "Puc començar la setmana vinent", translation: "I can start next week" , grammarNote: "💡 'La setmana vinent' = next week. 'Vinent' = coming/next. 'Passada' = last." }
      ]
    }
  },

  {
    id: 42,
    title: "Housing & Repairs",
    module: "Advanced",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation'],
    words: [
      { en: "Broken", ca: "Trencat", pronunciation: "tren-KAHT" },
      { en: "Leak", ca: "Gotera", pronunciation: "goh-TEH-rah" },
      { en: "To fix", ca: "Arreglar", pronunciation: "ah-rreh-GLAR" },
      { en: "Plumber", ca: "Llauner", pronunciation: "yow-NER" },
      { en: "Electrician", ca: "Electricista", pronunciation: "eh-lek-tree-SEES-tah" },
      { en: "Heating", ca: "Calefacció", pronunciation: "kah-leh-fahk-see-OH" },
      { en: "Pipe", ca: "Canonada", pronunciation: "kah-noh-NAH-dah" },
      { en: "Urgent", ca: "Urgent", pronunciation: "oor-ZHEHN" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "La calefacció està ___", blank: "trencada", options: ["trencada", "arreglada", "nova", "urgent"], correctIndex: 0, translation: "The heating is broken" , explanation: "'Trencada' = broken (feminine). Matches 'la calefacció'. Masculine: 'trencat'." },
        { sentence: "Necessitem un ___ urgent", blank: "llauner", options: ["electricista", "llauner", "metge", "cambrer"], correctIndex: 1, translation: "We need a plumber urgently" , explanation: "'Llauner' = plumber. A key person when you have leaks ('gotera')!" },
        { sentence: "Pot ___ la gotera?", blank: "arreglar", options: ["trencar", "arreglar", "pintar", "obrir"], correctIndex: 1, translation: "Can you fix the leak?", explanation: "'Arreglar' = to fix/repair. 'Pot arreglar...?' = Can you fix...?" },
        { sentence: "Hi ha una ___ al bany", blank: "gotera", options: ["porta", "finestra", "gotera", "canonada"], correctIndex: 2, translation: "There is a leak in the bathroom" , explanation: "'Gotera' = leak (water dripping). 'Hi ha una gotera' = there's a leak." }
      ],
      miniConversation: [
        { speaker: "You", text: "Hola! Truco perquè tinc un problema al pis.", isUserTurn: false },
        { speaker: "Landlord", text: "Què ha passat?", isUserTurn: false, translation: "What happened?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Hi ha una gotera al bany i la calefacció no funciona", "M'agrada el pis", "Quant costa el lloguer?"], correctIndex: 0 },
        { speaker: "Landlord", text: "Oh! Enviaré el llauner avui. La calefacció la miro demà.", isUserTurn: false, translation: "Oh! I'll send the plumber today. I'll look at the heating tomorrow." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Gràcies! És urgent perquè fa molt de fred", "No entenc", "Adéu"], correctIndex: 0 },
        { speaker: "Landlord", text: "Ho entenc. El llauner vindrà entre les 2 i les 4.", isUserTurn: false, translation: "I understand. The plumber will come between 2 and 4." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Perfecte, estaré a casa. Gràcies!", "No m'agrada", "Tinc febre"], correctIndex: 0 }
      ]
    }
  },

  {
    id: 43,
    title: "Travel & Holidays",
    module: "Advanced",
    stages: ['intro', 'sentenceOrdering', 'listenAndType', 'errorCorrection'],
    words: [
      { en: "Suitcase", ca: "Maleta", pronunciation: "mah-LEH-tah" },
      { en: "Flight", ca: "Vol", pronunciation: "BOHL" },
      { en: "Passport", ca: "Passaport", pronunciation: "pah-sah-PORT" },
      { en: "Boarding pass", ca: "Targeta d'embarcament", pronunciation: "tar-ZHEH-tah dem-bar-kah-MEHN" },
      { en: "Delay", ca: "Retard", pronunciation: "reh-TART" },
      { en: "Gate", ca: "Porta d'embarcament", pronunciation: "POR-tah dem-bar-kah-MEHN" },
      { en: "To arrive", ca: "Arribar", pronunciation: "ah-rree-BAR" },
      { en: "To depart", ca: "Sortir", pronunciation: "sor-TEER" }
    ],
    stageData: {
      sentenceOrdering: [
        { words: ["El", "vol", "surt", "a", "les", "set", "del", "matí"], correctOrder: "El vol surt a les set del matí", translation: "The flight departs at seven in the morning" , grammarNote: "💡 'Surt' = departs/leaves. 'A les set del matí' = at seven in the morning." },
        { words: ["On", "puc", "recollir", "la", "maleta"], correctOrder: "On puc recollir la maleta", translation: "Where can I collect the suitcase?" , grammarNote: "💡 'On puc...?' = Where can I...? 'Recollir' = to collect/pick up." },
        { words: ["El", "vol", "té", "un", "retard", "d'una", "hora"], correctOrder: "El vol té un retard d'una hora", translation: "The flight has a one-hour delay" , grammarNote: "💡 'Té un retard de...' = has a delay of... Useful at airports and train stations." },
        { words: ["Necessito", "veure", "el", "seu", "passaport"], correctOrder: "Necessito veure el seu passaport", translation: "I need to see your passport" , grammarNote: "💡 'Necessito veure' = I need to see. 'El seu' = your (formal). Polite request." },
        { words: ["Ja", "hem", "arribat", "a", "Barcelona"], correctOrder: "Ja hem arribat a Barcelona", translation: "We have already arrived in Barcelona" , grammarNote: "💡 'Ja' = already. 'Hem arribat' = we have arrived. 'Ja hem arribat' = we've already arrived." }
      ],
      listenAndType: [
        { catalan: "A quina porta embarquem?", english: "Which gate do we board at?", pronunciation: "ah KEE-nah POR-tah em-bar-KEHM" },
        { catalan: "El meu vol té retard", english: "My flight is delayed", pronunciation: "ehl MEH-oo BOHL teh reh-TART" },
        { catalan: "Quant de temps falta per arribar?", english: "How much time until we arrive?", pronunciation: "kwahnt deh TEHMS FAHL-tah pehr ah-rree-BAR" },
        { catalan: "He perdut la meva maleta", english: "I've lost my suitcase", pronunciation: "eh per-DOOT lah MEH-bah mah-LEH-tah" }
      ],
      errorCorrection: [
        { sentence: "El vuelo sale a las siete", errorWordIndex: 1, options: ["vuelo", "vol", "vuel", "volat"], correctIndex: 1, translation: "The flight departs at seven", explanation: "'Vol' is 'flight' in Catalan. 'Vuelo' is Spanish." },
        { sentence: "He perdut el meu maleta", errorWordIndex: 3, options: ["meu", "meva", "mi", "meus"], correctIndex: 1, translation: "I've lost my suitcase", explanation: "'Maleta' is feminine, so it needs 'meva' not 'meu'" },
        { sentence: "Quant tarda el avión?", errorWordIndex: 3, options: ["avión", "avió", "vol", "vuelo"], correctIndex: 1, translation: "How long does the plane take?", explanation: "'Avió' is 'plane' in Catalan (though 'vol' for 'flight' is more common)" },
        { sentence: "Necessitem el passaporte", errorWordIndex: 3, options: ["passaporte", "passaport", "pasaport", "pasaporte"], correctIndex: 1, translation: "We need the passport", explanation: "'Passaport' doesn't have an 'e' at the end in Catalan" }
      ]
    }
  },

  {
    id: 44,
    title: "Complaints & Problems",
    module: "Advanced",
    stages: ['intro', 'miniConversation', 'fillInTheBlank', 'listenAndType'],
    words: [
      { en: "Complaint", ca: "Queixa", pronunciation: "KAY-shah" },
      { en: "Problem", ca: "Problema", pronunciation: "proh-BLEH-mah" },
      { en: "To complain", ca: "Queixar-se", pronunciation: "kay-SHAR-seh" },
      { en: "Refund", ca: "Reemborsament", pronunciation: "reh-em-bor-sah-MEHN" },
      { en: "Unacceptable", ca: "Inacceptable", pronunciation: "een-ahk-sep-TAH-bleh" },
      { en: "To solve", ca: "Resoldre", pronunciation: "reh-SOHL-dreh" },
      { en: "Manager", ca: "Encarregat", pronunciation: "en-kah-rreh-GAHT" },
      { en: "To fix", ca: "Solucionar", pronunciation: "soh-loo-see-oh-NAR" }
    ],
    stageData: {
      miniConversation: [
        { speaker: "You", text: "Perdoni, tinc una queixa.", isUserTurn: false },
        { speaker: "Staff", text: "Ho sento. Quin és el problema?", isUserTurn: false, translation: "I'm sorry. What's the problem?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["L'habitació estava bruta i el Wi-Fi no funciona", "M'agrada l'hotel", "Quant costa?"], correctIndex: 0 },
        { speaker: "Staff", text: "Disculpi! Puc canviar-lo d'habitació immediatament.", isUserTurn: false, translation: "Apologies! I can change your room immediately." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Gràcies. I podria parlar amb l'encarregat?", "Adéu", "No entenc"], correctIndex: 0 },
        { speaker: "Staff", text: "Per descomptat. Vindrà en cinc minuts.", isUserTurn: false, translation: "Of course. They'll come in five minutes." },
        { speaker: "You", text: "", isUserTurn: true, options: ["D'acord, gràcies per solucionar-ho", "Tinc febre", "No m'agrada"], correctIndex: 0 }
      ],
      fillInTheBlank: [
        { sentence: "Voldria posar una ___", blank: "queixa", options: ["queixa", "problema", "carta", "pregunta"], correctIndex: 0, translation: "I would like to make a complaint" , explanation: "'Queixa' = complaint. 'Posar una queixa' = to make a complaint." },
        { sentence: "Això és ___!", blank: "inacceptable", options: ["perfecte", "bonic", "inacceptable", "interessant"], correctIndex: 2, translation: "This is unacceptable!" , explanation: "'Inacceptable' = unacceptable. A strong word for serious complaints." },
        { sentence: "Vull parlar amb l'___", blank: "encarregat", options: ["electricista", "encarregat", "amic", "professor"], correctIndex: 1, translation: "I want to speak with the manager" , explanation: "'Encarregat' = manager (person in charge). 'Vull parlar amb l'encarregat' = powerful phrase." },
        { sentence: "Podeu ___ aquest problema?", blank: "solucionar", options: ["crear", "enviar", "solucionar", "perdre"], correctIndex: 2, translation: "Can you solve this problem?" , explanation: "'Solucionar' = to solve/fix. 'Resoldre' also works. Both are useful for complaints." }
      ],
      listenAndType: [
        { catalan: "No estic satisfet amb el servei", english: "I'm not satisfied with the service", pronunciation: "noh es-TEEK sah-tees-FEHT ahm ehl ser-BAY" },
        { catalan: "Voldria un reemborsament si us plau", english: "I would like a refund please", pronunciation: "bol-DREE-ah oon reh-em-bor-sah-MEHN see oos PLOW" },
        { catalan: "Quan podeu resoldre el problema?", english: "When can you solve the problem?", pronunciation: "kwahn poh-DEH-oo reh-SOHL-dreh ehl proh-BLEH-mah" },
        { catalan: "Disculpin les molèsties", english: "Sorry for the inconvenience", pronunciation: "dees-KOOL-peen lehs moh-LES-tee-ehs" }
      ]
    }
  },

  {
    id: 45,
    title: "Celebrations & Events",
    module: "Advanced",
    stages: ['intro', 'flashcards', 'miniConversation', 'sentenceOrdering'],
    words: [
      { en: "Birthday", ca: "Aniversari", pronunciation: "ah-nee-ber-SAH-ree" },
      { en: "Wedding", ca: "Casament", pronunciation: "kah-sah-MEHN" },
      { en: "Congratulations", ca: "Felicitats", pronunciation: "feh-lee-see-TAHTS" },
      { en: "Present/Gift", ca: "Regal", pronunciation: "reh-GAHL" },
      { en: "To celebrate", ca: "Celebrar", pronunciation: "seh-leh-BRAR" },
      { en: "Christmas", ca: "Nadal", pronunciation: "nah-DAHL" },
      { en: "New Year", ca: "Cap d'Any", pronunciation: "KAHP DAHN-yee" },
      { en: "Cheers!", ca: "Salut!", pronunciation: "sah-LOOT" }
    ],
    stageData: {
      miniConversation: [
        { speaker: "Friend", text: "Felicitats pel teu aniversari! 🎂", isUserTurn: false, translation: "Happy birthday! 🎂" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Gràcies! Celebrem avui a casa meva!", "Quant costa?", "Tinc febre"], correctIndex: 0 },
        { speaker: "Friend", text: "Genial! T'he portat un regal. Obre'l!", isUserTurn: false, translation: "Great! I've brought you a gift. Open it!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Oh, que bonic! M'encanta, gràcies!", "No entenc", "Adéu"], correctIndex: 0 },
        { speaker: "Friend", text: "Salut! Per molts anys!", isUserTurn: false, translation: "Cheers! Many happy returns!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Salut! Per molts anys a tots!", "No m'agrada", "On és el bany?"], correctIndex: 0 }
      ],
      sentenceOrdering: [
        { words: ["Felicitats", "pel", "teu", "aniversari!"], correctOrder: "Felicitats pel teu aniversari!", translation: "Congratulations on your birthday!" , grammarNote: "💡 'Felicitats!' = Congratulations! 'Pel' = per + el (for the). 'Pel teu aniversari' = for your birthday." },
        { words: ["Celebrem", "el", "Nadal", "en", "família"], correctOrder: "Celebrem el Nadal en família", translation: "We celebrate Christmas as a family" , grammarNote: "💡 'En família' = as a family/with family. 'Celebrem' = we celebrate." },
        { words: ["Salut", "i", "bon", "any", "nou!"], correctOrder: "Salut i bon any nou!", translation: "Cheers and happy new year!" , grammarNote: "💡 'Bon any nou!' = Happy new year! 'Salut' = Cheers! Used for toasts." },
        { words: ["T'he", "portat", "un", "regal", "molt", "especial"], correctOrder: "T'he portat un regal molt especial", translation: "I've brought you a very special gift" , grammarNote: "💡 'T'he portat' = I've brought you. 'T'' = to you. 'He portat' = I have brought." },
        { words: ["El", "casament", "és", "al", "juny"], correctOrder: "El casament és al juny", translation: "The wedding is in June" , grammarNote: "💡 'Al juny' = in June. 'Al' + month for when things happen." }
      ]
    }
  },

  {
    id: 46,
    title: "News & Current Events",
    module: "Advanced",
    stages: ['intro', 'listenAndType', 'fillInTheBlank', 'errorCorrection'],
    words: [
      { en: "News", ca: "Notícies", pronunciation: "noh-TEE-see-ehs" },
      { en: "Newspaper", ca: "Diari", pronunciation: "dee-AH-ree" },
      { en: "Government", ca: "Govern", pronunciation: "goh-BERN" },
      { en: "Elections", ca: "Eleccions", pronunciation: "eh-lehk-see-OHNS" },
      { en: "Economy", ca: "Economia", pronunciation: "eh-koh-noh-MEE-ah" },
      { en: "Environment", ca: "Medi ambient", pronunciation: "MEH-dee ahm-bee-EHN" },
      { en: "According to", ca: "Segons", pronunciation: "seh-GOHNS" },
      { en: "Important", ca: "Important", pronunciation: "eem-por-TAHNT" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Has llegit les notícies d'avui?", english: "Have you read today's news?", pronunciation: "ahz yeh-ZHEET lehs noh-TEE-see-ehs dah-BOO-ee" },
        { catalan: "Segons el diari, les eleccions són al març", english: "According to the newspaper, elections are in March", pronunciation: "seh-GOHNS ehl dee-AH-ree lehs eh-lehk-see-OHNS sohn ahl MARS" },
        { catalan: "El medi ambient és molt important", english: "The environment is very important", pronunciation: "ehl MEH-dee ahm-bee-EHN ehs mohlt eem-por-TAHNT" },
        { catalan: "L'economia catalana va bé", english: "The Catalan economy is doing well", pronunciation: "leh-koh-noh-MEE-ah kah-tah-LAH-nah bah BEH" }
      ],
      fillInTheBlank: [
        { sentence: "Has llegit les ___ d'avui?", blank: "notícies", options: ["notícies", "diaris", "cartes", "paraules"], correctIndex: 0, translation: "Have you read today's news?" , explanation: "'Notícies' = news. Always plural. 'Has llegit les notícies?' = Have you read the news?" },
        { sentence: "___ el govern, l'economia millora", blank: "Segons", options: ["Segons", "Perquè", "Encara", "Sempre"], correctIndex: 0, translation: "According to the government, the economy is improving" , explanation: "'Segons' = according to. 'Segons el govern' = according to the government."},
        { sentence: "Les ___ són el mes vinent", blank: "eleccions", options: ["vacances", "festes", "eleccions", "notícies"], correctIndex: 2, translation: "The elections are next month" , explanation: "'Eleccions' = elections. 'El mes vinent' = next month." },
        { sentence: "El ___ ambient necessita protecció", blank: "medi", options: ["gran", "medi", "bon", "nou"], correctIndex: 1, translation: "The environment needs protection" , explanation: "'Medi ambient' = environment. Two words! 'Medi' = medium/environment." }
      ],
      errorCorrection: [
        { sentence: "Has leído las notícies?", errorWordIndex: 1, options: ["leído", "llegit", "leido", "legit"], correctIndex: 1, translation: "Have you read the news?", explanation: "'Llegit' is the past participle of 'llegir' in Catalan" },
        { sentence: "El gobierno català treballa bé", errorWordIndex: 1, options: ["gobierno", "govern", "gobern", "govern"], correctIndex: 1, translation: "The Catalan government works well", explanation: "'Govern' is the Catalan word. 'Gobierno' is Spanish." },
        { sentence: "Les elecsions són importants", errorWordIndex: 1, options: ["elecsions", "eleccions", "electiones", "eleccions"], correctIndex: 1, translation: "The elections are important", explanation: "'Eleccions' has two C's" },
        { sentence: "El medio ambient necessita atenció", errorWordIndex: 1, options: ["medio", "medi", "midi", "mediu"], correctIndex: 1, translation: "The environment needs attention", explanation: "'Medi ambient' is the Catalan term. 'Medio' is Spanish." }
      ]
    }
  },

  {
    id: 47,
    title: "Feelings & Emotions",
    module: "Advanced",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'listenAndType'],
    words: [
      { en: "Excited", ca: "Emocionat", pronunciation: "eh-moh-see-oh-NAHT" },
      { en: "Worried", ca: "Preocupat", pronunciation: "preh-oh-koo-PAHT" },
      { en: "Angry", ca: "Enfadat", pronunciation: "en-fah-DAHT" },
      { en: "Surprised", ca: "Sorprès", pronunciation: "sor-PREHS" },
      { en: "Proud", ca: "Orgullós", pronunciation: "or-goo-YOHS" },
      { en: "Lonely", ca: "Sol", pronunciation: "SOHL" },
      { en: "Grateful", ca: "Agraït", pronunciation: "ah-grah-EET" },
      { en: "Nervous", ca: "Nerviós", pronunciation: "ner-bee-OHS" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Estic molt ___ per la festa!", blank: "emocionat", options: ["enfadat", "emocionat", "preocupat", "sol"], correctIndex: 1, translation: "I'm very excited about the party!" , explanation: "'Emocionat' = excited. 'Estic molt emocionat' = I'm very excited." },
        { sentence: "Estic ___ perquè tinc un examen", blank: "nerviós", options: ["orgullós", "agraït", "nerviós", "sorprès"], correctIndex: 2, translation: "I'm nervous because I have an exam" , explanation: "'Nerviós' = nervous. 'Examen' = exam. Common reason to be nervous!" },
        { sentence: "Em sento ___ per tot el que fas", blank: "agraït", options: ["enfadat", "sol", "sorprès", "agraït"], correctIndex: 3, translation: "I feel grateful for everything you do" , explanation: "'Agraït' = grateful. 'Em sento agraït' = I feel grateful." },
        { sentence: "No estiguis ___!", blank: "preocupat", options: ["orgullós", "preocupat", "emocionat", "agraït"], correctIndex: 1, translation: "Don't be worried!" , explanation: "'Preocupat' = worried. 'No estiguis preocupat' = Don't be worried (informal)." },
        { sentence: "Estic molt ___ dels meus fills", blank: "orgullós", options: ["nerviós", "enfadat", "orgullós", "sol"], correctIndex: 2, translation: "I'm very proud of my children" , explanation: "'Orgullós' = proud. 'Dels meus fills' = of my children." }
      ],
      listenAndType: [
        { catalan: "Estic molt emocionat!", english: "I'm very excited!", pronunciation: "es-TEEK mohlt eh-moh-see-oh-NAHT" },
        { catalan: "No estiguis preocupat", english: "Don't be worried", pronunciation: "noh es-TEE-gees preh-oh-koo-PAHT" },
        { catalan: "Em sento sol de vegades", english: "I feel lonely sometimes", pronunciation: "em SEN-toh SOHL deh beh-GAH-dehs" },
        { catalan: "Estic molt orgullós de tu", english: "I'm very proud of you", pronunciation: "es-TEEK mohlt or-goo-YOHS deh TOO" },
        { catalan: "Quina sorpresa! Estic sorprès!", english: "What a surprise! I'm surprised!", pronunciation: "KEE-nah sor-PREH-sah es-TEEK sor-PREHS" }
      ]
    }
  },

  {
    id: 48,
    title: "Health & Wellness",
    module: "Advanced",
    stages: ['intro', 'miniConversation', 'errorCorrection', 'sentenceOrdering'],
    words: [
      { en: "Diet", ca: "Dieta", pronunciation: "dee-EH-tah" },
      { en: "Exercise", ca: "Exercici", pronunciation: "ek-ser-SEE-see" },
      { en: "Weight", ca: "Pes", pronunciation: "PEHS" },
      { en: "To breathe", ca: "Respirar", pronunciation: "res-pee-RAR" },
      { en: "Stress", ca: "Estrès", pronunciation: "es-TREHS" },
      { en: "To relax", ca: "Relaxar-se", pronunciation: "reh-lah-SHAR-seh" },
      { en: "Well-being", ca: "Benestar", pronunciation: "beh-nes-TAR" },
      { en: "Habit", ca: "Hàbit", pronunciation: "AH-beet" }
    ],
    stageData: {
      miniConversation: [
        { speaker: "Doctor", text: "Com es troba? Algun problema de salut?", isUserTurn: false, translation: "How are you feeling? Any health problems?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Estic una mica estressat i cansat últimament", "Molt bé, gràcies", "Voldria un cafè"], correctIndex: 0 },
        { speaker: "Doctor", text: "Entenc. Fa exercici regularment?", isUserTurn: false, translation: "I see. Do you exercise regularly?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["No gaire, hauria de fer-ne més", "Cada dia corro", "No entenc"], correctIndex: 0 },
        { speaker: "Doctor", text: "Li recomano caminar 30 minuts al dia i millorar la dieta.", isUserTurn: false, translation: "I recommend walking 30 minutes a day and improving your diet." },
        { speaker: "You", text: "", isUserTurn: true, options: ["D'acord, intentaré tenir millors hàbits", "No m'agrada caminar", "Adéu"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Necesito hacer más ejercicio", errorWordIndex: 0, options: ["Necesito", "Necessito", "Necesit", "Necesitar"], correctIndex: 1, translation: "I need to do more exercise", explanation: "'Necessito fer' is Catalan. 'Necesito hacer' is Spanish." },
        { sentence: "La dieta saludable és importante", errorWordIndex: 4, options: ["importante", "important", "importanta", "importants"], correctIndex: 1, translation: "A healthy diet is important", explanation: "'Important' doesn't have an 'e' at the end in Catalan" },
        { sentence: "Tinc molto d'estrès", errorWordIndex: 1, options: ["molto", "molt", "mucho", "molte"], correctIndex: 1, translation: "I have a lot of stress", explanation: "'Molt' is the Catalan word. 'Molto' is Italian!" },
        { sentence: "Necessito relaxarme", errorWordIndex: 1, options: ["relaxarme", "relaxar-me", "relajarme", "relaxar"], correctIndex: 1, translation: "I need to relax", explanation: "In Catalan, reflexive pronouns use a hyphen: 'relaxar-me'" }
      ],
      sentenceOrdering: [
        { words: ["Hauria", "de", "fer", "més", "exercici"], correctOrder: "Hauria de fer més exercici", translation: "I should do more exercise" , grammarNote: "💡 'Hauria de' = I should. 'Hauria de fer' = I should do. Polite suggestion form." },
        { words: ["Respira", "profundament", "i", "relaxa't"], correctOrder: "Respira profundament i relaxa't", translation: "Breathe deeply and relax" , grammarNote: "💡 'Relaxa't' = relax (yourself). The apostrophe replaces 'te'. Imperative reflexive." },
        { words: ["Els", "bons", "hàbits", "milloren", "el", "benestar"], correctOrder: "Els bons hàbits milloren el benestar", translation: "Good habits improve well-being" , grammarNote: "💡 'Els bons hàbits' = good habits. 'Milloren' = improve (they). Third person plural." },
        { words: ["L'estrès", "no", "és", "bo", "per", "la", "salut"], correctOrder: "L'estrès no és bo per la salut", translation: "Stress is not good for health" , grammarNote: "💡 'No és bo per...' = it's not good for... 'La salut' = health." }
      ]
    }
  },

  {
    id: 49,
    title: "Future Plans",
    module: "Advanced",
    stages: ['intro', 'fillInTheBlank', 'listenAndType', 'sentenceOrdering'],
    words: [
      { en: "Future", ca: "Futur", pronunciation: "foo-TOOR" },
      { en: "Dream", ca: "Somni", pronunciation: "SOHM-nee" },
      { en: "Goal", ca: "Objectiu", pronunciation: "ohb-zhek-TEE-oo" },
      { en: "To plan", ca: "Planificar", pronunciation: "plah-nee-fee-KAR" },
      { en: "Hope", ca: "Esperança", pronunciation: "es-peh-RAHN-sah" },
      { en: "Success", ca: "Èxit", pronunciation: "EK-seet" },
      { en: "To achieve", ca: "Aconseguir", pronunciation: "ah-kohn-seh-GEER" },
      { en: "To improve", ca: "Millorar", pronunciation: "mee-yoh-RAR" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El meu ___ és parlar català perfectament", blank: "objectiu", options: ["somni", "objectiu", "futur", "èxit"], correctIndex: 1, translation: "My goal is to speak Catalan perfectly" , explanation: "'Objectiu' = goal/objective. 'El meu objectiu' = my goal." },
        { sentence: "Vull ___ el meu català", blank: "millorar", options: ["perdre", "millorar", "oblidar", "tancar"], correctIndex: 1, translation: "I want to improve my Catalan" , explanation: "'Millorar' = to improve. 'Vull millorar' = I want to improve." },
        { sentence: "Espero ___ els meus somnis", blank: "aconseguir", options: ["perdre", "oblidar", "aconseguir", "tancar"], correctIndex: 2, translation: "I hope to achieve my dreams" , explanation: "'Aconseguir' = to achieve. 'Espero aconseguir' = I hope to achieve." },
        { sentence: "El ___ és ple d'esperança", blank: "futur", options: ["passat", "futur", "present", "somni"], correctIndex: 1, translation: "The future is full of hope" , explanation: "'Futur' = future. 'Ple de' = full of. 'Esperança' = hope." }
      ],
      listenAndType: [
        { catalan: "Quin és el teu somni?", english: "What is your dream?", pronunciation: "keen ehs ehl TEH-oo SOHM-nee" },
        { catalan: "Vull millorar el meu català", english: "I want to improve my Catalan", pronunciation: "bool mee-yoh-RAR ehl MEH-oo kah-tah-LAH" },
        { catalan: "Tinc molts objectius per aquest any", english: "I have many goals for this year", pronunciation: "TEENK mohlts ohb-zhek-TEE-oos pehr ah-KEST AH-nyee" },
        { catalan: "L'esperança és el que em mou", english: "Hope is what drives me", pronunciation: "les-peh-RAHN-sah ehs ehl keh em MOH-oo" }
      ],
      sentenceOrdering: [
        { words: ["El", "meu", "somni", "és", "viure", "a", "Barcelona"], correctOrder: "El meu somni és viure a Barcelona", translation: "My dream is to live in Barcelona" },
        { words: ["Vull", "aconseguir", "l'èxit", "professional"], correctOrder: "Vull aconseguir l'èxit professional", translation: "I want to achieve professional success" },
        { words: ["Planifiquem", "el", "nostre", "futur", "junts"], correctOrder: "Planifiquem el nostre futur junts", translation: "Let's plan our future together" },
        { words: ["Espero", "millorar", "cada", "dia"], correctOrder: "Espero millorar cada dia", translation: "I hope to improve every day" }
      ]
    }
  },

  {
    id: 50,
    title: "Living in Catalonia",
    module: "Advanced",
    stages: ['intro', 'miniConversation', 'listenAndType', 'sentenceOrdering'],
    words: [
      { en: "Home", ca: "Llar", pronunciation: "YAHR" },
      { en: "Culture", ca: "Cultura", pronunciation: "kool-TOO-rah" },
      { en: "To belong", ca: "Pertànyer", pronunciation: "per-TAHN-yer" },
      { en: "Identity", ca: "Identitat", pronunciation: "ee-den-tee-TAHT" },
      { en: "To integrate", ca: "Integrar-se", pronunciation: "in-teh-GRAR-seh" },
      { en: "Citizenship", ca: "Ciutadania", pronunciation: "see-oo-tah-dah-NEE-ah" },
      { en: "Welcome", ca: "Benvingut", pronunciation: "ben-been-GOOT" },
      { en: "Forever", ca: "Per sempre", pronunciation: "per SEM-preh" }
    ],
    stageData: {
      miniConversation: [
        { speaker: "Local", text: "Quan de temps fa que vius aquí?", isUserTurn: false, translation: "How long have you been living here?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Fa un any. M'encanta viure aquí!", "Sóc de Londres", "Quant costa?"], correctIndex: 0 },
        { speaker: "Local", text: "I ja et sents com a casa?", isUserTurn: false, translation: "And do you already feel at home?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí! La gent m'ha fet sentir molt benvingut", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Local", text: "Això és fantàstic! El català t'ha ajudat a integrar-te?", isUserTurn: false, translation: "That's fantastic! Has Catalan helped you integrate?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Molt! Aprendre la llengua m'ha obert moltes portes", "No m'agrada", "Adéu"], correctIndex: 0 },
        { speaker: "Local", text: "Ets benvingut per sempre! Aquesta és casa teva.", isUserTurn: false, translation: "You're welcome forever! This is your home." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Gràcies! Catalunya és la meva llar ara.", "Quant costa?", "On és el bany?"], correctIndex: 0 }
      ],
      listenAndType: [
        { catalan: "Catalunya és la meva llar", english: "Catalonia is my home", pronunciation: "kah-tah-LOO-nyah ehs lah MEH-bah YAHR" },
        { catalan: "M'encanta la cultura catalana", english: "I love Catalan culture", pronunciation: "men-KAHN-tah lah kool-TOO-rah kah-tah-LAH-nah" },
        { catalan: "Aprendre català m'ha ajudat a integrar-me", english: "Learning Catalan has helped me integrate", pronunciation: "ah-PREN-dreh kah-tah-LAH mah ah-zhoo-DAHT ah in-teh-GRAR-meh" },
        { catalan: "Em sento benvingut aquí", english: "I feel welcome here", pronunciation: "em SEN-toh ben-been-GOOT ah-KEE" },
        { catalan: "Per sempre serà casa meva", english: "It will be my home forever", pronunciation: "per SEM-preh seh-RAH KAH-sah MEH-bah" }
      ],
      sentenceOrdering: [
        { words: ["Catalunya", "és", "la", "meva", "llar"], correctOrder: "Catalunya és la meva llar", translation: "Catalonia is my home" , grammarNote: "💡 'La meva llar' = my home. 'Llar' is more emotional than 'casa' — it means 'home' not just 'house'." },
        { words: ["Aprendre", "la", "llengua", "és", "important"], correctOrder: "Aprendre la llengua és important", translation: "Learning the language is important" , grammarNote: "💡 'Aprendre' = to learn. 'La llengua' = the language. 'Aprendre la llengua' = to learn the language." },
        { words: ["Em", "sento", "part", "d'aquesta", "cultura"], correctOrder: "Em sento part d'aquesta cultura", translation: "I feel part of this culture" ,grammarNote: "💡 'Em sento part de...' = I feel part of... 'D'aquesta' = of this (feminine)." },
        { words: ["Gràcies", "per", "fer-me", "sentir", "benvingut"], correctOrder: "Gràcies per fer-me sentir benvingut", translation: "Thank you for making me feel welcome" , grammarNote: "💡 'Fer-me sentir' = to make me feel. 'Benvingut' = welcome. A beautiful final sentence!" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════
// PART 1: NEW LESSONS
// ═══════════════════════════════════════════════════════════


// ─── LESSON 53: Numbers 11-20 ────────────────────────────
// CRITICAL GAP: L2 teaches 1-10, nothing teaches 11-20
// Position: Insert right after lesson 50 in array
// ─────────────────────────────────────────────────────────


// ─── LESSON 55: Months & Calendar ───────────────────────

  {
    id: 55,
    title: "Months & Calendar",
    module: "Foundations",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "January", ca: "Gener", pronunciation: "zheh-NER" },
      { en: "February", ca: "Febrer", pronunciation: "feh-BRER" },
      { en: "March", ca: "Març", pronunciation: "MARS" },
      { en: "April", ca: "Abril", pronunciation: "ah-BREEL" },
      { en: "May", ca: "Maig", pronunciation: "MAHCH" },
      { en: "June", ca: "Juny", pronunciation: "ZHOO-nyee" },
      { en: "July", ca: "Juliol", pronunciation: "zhoo-lee-OHL" },
      { en: "August", ca: "Agost", pronunciation: "ah-GOST" },
      { en: "September", ca: "Setembre", pronunciation: "seh-TEM-breh" },
      { en: "October", ca: "Octubre", pronunciation: "ook-TOO-breh" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El meu aniversari és al ___", blank: "març", options: ["gener", "març", "juliol", "octubre"], correctIndex: 1, translation: "My birthday is in March", explanation: "'Març' = March. In Catalan, months are NOT capitalised." },
        { sentence: "Fa molta calor al ___", blank: "juliol", options: ["gener", "abril", "juliol", "octubre"], correctIndex: 2, translation: "It's very hot in July", explanation: "'Juliol' = July. The hottest month in Catalonia!" },
        { sentence: "La festa major és al ___", blank: "setembre", options: ["febrer", "maig", "setembre", "gener"], correctIndex: 2, translation: "The main festival is in September", explanation: "'Setembre' = September. La Mercè in Barcelona is late September." },
        { sentence: "La neu arriba al ___", blank: "gener", options: ["gener", "juny", "agost", "maig"], correctIndex: 0, translation: "The snow arrives in January", explanation: "'Gener' = January. The coldest month in the Pyrenees." },
        { sentence: "Les classes comencen al ___", blank: "setembre", options: ["juliol", "agost", "setembre", "juny"], correctIndex: 2, translation: "Classes start in September", explanation: "'Setembre' = September. The school year begins then." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Al' + month: 'al gener' (in January), 'al juny' (in June). Months are lowercase in Catalan.", words: ["El", "casament", "és", "al", "juny"], correctOrder: "El casament és al juny", translation: "The wedding is in June" },
        { grammarNote: "💡 'De...a...' for date ranges: 'de juny a setembre' = from June to September.", words: ["De", "juny", "a", "setembre", "fa", "calor"], correctOrder: "De juny a setembre fa calor", translation: "From June to September it's hot" },
        { grammarNote: "💡 'Estem a...' = We are in... (current month). 'Quin mes és?' = What month is it?", words: ["Estem", "a", "febrer"], correctOrder: "Estem a febrer", translation: "We are in February" },
        { grammarNote: "💡 'El primer de...' = The first of... Used for dates: 'el primer de gener' = January 1st.", words: ["El", "primer", "d'abril", "és", "demà"], correctOrder: "El primer d'abril és demà", translation: "The first of April is tomorrow" }
      ]
    }
  },


// ─── LESSON 56: Telling the Time ────────────────────────

  {
    id: 56,
    title: "Telling the Time",
    module: "Foundations",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'listenAndType'],
    words: [
      { en: "What time is it?", ca: "Quina hora és?", pronunciation: "KEE-nah OH-rah EHS" },
      { en: "It's one o'clock", ca: "És la una", pronunciation: "EHS lah OO-nah" },
      { en: "It's two o'clock", ca: "Són les dues", pronunciation: "SOHN lehs DOO-ehs" },
      { en: "Half past", ca: "I mitja", pronunciation: "ee MEE-jah" },
      { en: "Quarter past", ca: "I quart", pronunciation: "ee KWART" },
      { en: "Quarter to", ca: "Menys quart", pronunciation: "MEHNYS KWART" },
      { en: "In the morning", ca: "Del matí", pronunciation: "dehl mah-TEE" },
      { en: "In the afternoon", ca: "De la tarda", pronunciation: "deh lah TAR-dah" },
      { en: "At night", ca: "De la nit", pronunciation: "deh lah NEET" },
      { en: "Midday", ca: "Migdia", pronunciation: "meetch-DEE-ah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Quina ___ és?", blank: "hora", options: ["hora", "dia", "nit", "tarda"], correctIndex: 0, translation: "What time is it?", explanation: "'Quina hora és?' is the standard way to ask the time in Catalan." },
        { sentence: "Són les tres i ___", blank: "mitja", options: ["quart", "mitja", "hora", "punt"], correctIndex: 1, translation: "It's half past three", explanation: "'I mitja' = and a half. Són les tres i mitja = 3:30." },
        { sentence: "La reunió és a les cinc ___ quart", blank: "menys", options: ["i", "menys", "de", "amb"], correctIndex: 1, translation: "The meeting is at quarter to five", explanation: "'Menys quart' = minus a quarter = quarter to. 4:45." },
        { sentence: "El tren surt a les vuit del ___", blank: "matí", options: ["matí", "tarda", "nit", "migdia"], correctIndex: 0, translation: "The train leaves at eight in the morning", explanation: "'Del matí' = in the morning. 'De la tarda' = in the afternoon." },
        { sentence: "___ la una en punt", blank: "És", options: ["És", "Són", "Fa", "Tinc"], correctIndex: 0, translation: "It's exactly one o'clock", explanation: "'És' for 1 o'clock (singular). 'Són' for 2+ (plural). Key rule!" }
      ],
      listenAndType: [
        { catalan: "Són les dues de la tarda", english: "It's two in the afternoon", pronunciation: "SOHN lehs DOO-ehs deh lah TAR-dah" },
        { catalan: "El tren surt a les set i mitja", english: "The train leaves at half past seven", pronunciation: "ehl TREHN soort ah lehs SEHT ee MEE-jah" },
        { catalan: "Quina hora és? Són les quatre", english: "What time is it? It's four o'clock", pronunciation: "KEE-nah OH-rah EHS SOHN lehs KWAH-treh" },
        { catalan: "Dinem a la una del migdia", english: "We eat lunch at one", pronunciation: "dee-NEHM ah lah OO-nah dehl meetch-DEE-ah" }
      ]
    }
  },


// ─── LESSON 57: Talking About the Past ──────────────────

  {
    id: 57,
    title: "Talking About the Past",
    module: "Grammar",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "Yesterday", ca: "Ahir", pronunciation: "ah-EER" },
      { en: "Last week", ca: "La setmana passada", pronunciation: "lah seh-MAH-nah pah-SAH-dah" },
      { en: "Last year", ca: "L'any passat", pronunciation: "LAHN-yee pah-SAHT" },
      { en: "I went", ca: "Vaig anar", pronunciation: "bahch ah-NAR" },
      { en: "I ate", ca: "Vaig menjar", pronunciation: "bahch men-ZHAR" },
      { en: "I saw", ca: "Vaig veure", pronunciation: "bahch BEH-oo-reh" },
      { en: "I bought", ca: "Vaig comprar", pronunciation: "bahch kohm-PRAR" },
      { en: "I did/made", ca: "Vaig fer", pronunciation: "bahch FER" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Ahir ___ anar al mercat", blank: "vaig", options: ["vaig", "vull", "puc", "tinc"], correctIndex: 0, translation: "Yesterday I went to the market", explanation: "'Vaig + infinitive' is the past tense in Catalan. 'Vaig anar' = I went." },
        { sentence: "Vaig ___ una paella deliciosa", blank: "menjar", options: ["anar", "menjar", "comprar", "veure"], correctIndex: 1, translation: "I ate a delicious paella", explanation: "'Vaig menjar' = I ate. The verb after 'vaig' stays in its base form." },
        { sentence: "La setmana passada vaig ___ un cotxe", blank: "comprar", options: ["menjar", "veure", "comprar", "anar"], correctIndex: 2, translation: "Last week I bought a car", explanation: "'Vaig comprar' = I bought. 'La setmana passada' = last week." },
        { sentence: "___ vaig veure el meu amic", blank: "Ahir", options: ["Demà", "Ahir", "Avui", "Sempre"], correctIndex: 1, translation: "Yesterday I saw my friend", explanation: "'Ahir' = yesterday. Time words usually go at the start or end." },
        { sentence: "L'any passat vaig ___ un viatge a Andorra", blank: "fer", options: ["anar", "fer", "menjar", "veure"], correctIndex: 1, translation: "Last year I did a trip to Andorra", explanation: "'Vaig fer' = I did/made. 'Fer un viatge' = to take a trip." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 Past tense: 'vaig' + infinitive. Vaig anar (I went), vaig menjar (I ate), vaig fer (I did).", words: ["Ahir", "vaig", "anar", "al", "cinema"], correctOrder: "Ahir vaig anar al cinema", translation: "Yesterday I went to the cinema" },
        { grammarNote: "💡 'La setmana passada' = last week. Time phrases go at start or end of sentence.", words: ["Vaig", "comprar", "pa", "al", "mercat"], correctOrder: "Vaig comprar pa al mercat", translation: "I bought bread at the market" },
        { grammarNote: "💡 All persons: vaig (I), vas (you), va (he/she), vam (we), vau (you pl.), van (they).", words: ["Vam", "anar", "a", "la", "platja", "junts"], correctOrder: "Vam anar a la platja junts", translation: "We went to the beach together" },
        { grammarNote: "💡 The second verb NEVER changes form. Always infinitive: vaig FER, vaig ANAR, vaig VEURE.", words: ["L'any", "passat", "vaig", "fer", "un", "viatge"], correctOrder: "L'any passat vaig fer un viatge", translation: "Last year I did a trip" }
      ]
    }
  },


// ─── LESSON 58: Talking About the Future ────────────────

  {
    id: 58,
    title: "Talking About the Future",
    module: "Grammar",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'listenAndType'],
    words: [
      { en: "I will go", ca: "Aniré", pronunciation: "ah-nee-REH" },
      { en: "I will eat", ca: "Menjaré", pronunciation: "men-zhah-REH" },
      { en: "I will do", ca: "Faré", pronunciation: "fah-REH" },
      { en: "I will be", ca: "Seré", pronunciation: "seh-REH" },
      { en: "I will have", ca: "Tindré", pronunciation: "teen-DREH" },
      { en: "Next week", ca: "La setmana vinent", pronunciation: "lah seh-MAH-nah bee-NEHN" },
      { en: "Next year", ca: "L'any vinent", pronunciation: "LAHN-yee bee-NEHN" },
      { en: "Soon", ca: "Aviat", pronunciation: "ah-bee-AHT" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Demà ___ a Barcelona", blank: "aniré", options: ["aniré", "vaig anar", "anar", "anava"], correctIndex: 0, translation: "Tomorrow I will go to Barcelona", explanation: "'Aniré' = I will go. Future = verb stem + -é. Anar → aniré." },
        { sentence: "La setmana vinent ___ un pastís", blank: "faré", options: ["faig", "faré", "fer", "vaig fer"], correctIndex: 1, translation: "Next week I will make a cake", explanation: "'Faré' = I will do/make. Fer → faré. The -é ending = 'I will'." },
        { sentence: "Aviat ___ més català!", blank: "parlaré", options: ["parlo", "parlar", "parlaré", "parlava"], correctIndex: 2, translation: "Soon I will speak more Catalan!", explanation: "'Parlaré' = I will speak. Parlar → parlaré. Regular -ar verbs add -é." },
        { sentence: "L'any vinent ___ a Andorra", blank: "seré", options: ["sóc", "seré", "era", "ser"], correctIndex: 1, translation: "Next year I will be in Andorra", explanation: "'Seré' = I will be. Ser → seré." },
        { sentence: "___ un cotxe nou aviat", blank: "Tindré", options: ["Tinc", "Tindré", "Tenir", "Tenia"], correctIndex: 1, translation: "I will have a new car soon", explanation: "'Tindré' = I will have. Tenir → tindré (irregular stem)." }
      ],
      listenAndType: [
        { catalan: "Demà aniré al mercat", english: "Tomorrow I will go to the market", pronunciation: "deh-MAH ah-nee-REH ahl mer-KAHT" },
        { catalan: "La setmana vinent faré una festa", english: "Next week I will have a party", pronunciation: "lah seh-MAH-nah bee-NEHN fah-REH OO-nah FEHS-tah" },
        { catalan: "Aviat parlaré català perfectament!", english: "Soon I will speak Catalan perfectly!", pronunciation: "ah-bee-AHT par-lah-REH kah-tah-LAH per-fek-tah-MEHN" },
        { catalan: "Seré molt content a Catalunya", english: "I will be very happy in Catalonia", pronunciation: "seh-REH mohlt kohn-TEHN ah kah-tah-LOO-nyah" }
      ]
    }
  },


// ─── LESSON 59: Comparisons ─────────────────────────────

  {
    id: 59,
    title: "Comparisons",
    module: "Grammar",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "More...than", ca: "Més...que", pronunciation: "MEHS...keh" },
      { en: "Less...than", ca: "Menys...que", pronunciation: "MEHNYS...keh" },
      { en: "As...as", ca: "Tan...com", pronunciation: "TAHN...kohm" },
      { en: "The best", ca: "El millor", pronunciation: "ehl mee-YOR" },
      { en: "The worst", ca: "El pitjor", pronunciation: "ehl pee-JZHOR" },
      { en: "Bigger", ca: "Més gran", pronunciation: "mehs GRAHN" },
      { en: "Smaller", ca: "Més petit", pronunciation: "mehs peh-TEET" },
      { en: "The same", ca: "Igual", pronunciation: "ee-GWAHL" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Barcelona és ___ gran que Girona", blank: "més", options: ["més", "menys", "tan", "igual"], correctIndex: 0, translation: "Barcelona is bigger than Girona", explanation: "'Més...que' = more...than. 'Més gran que' = bigger than." },
        { sentence: "El metro és ___ ràpid que l'autobús", blank: "més", options: ["menys", "tan", "més", "igual"], correctIndex: 2, translation: "The metro is faster than the bus", explanation: "'Més ràpid que' = faster than. Adjective between 'més' and 'que'." },
        { sentence: "El cafè és ___ bo com el te", blank: "tan", options: ["més", "menys", "tan", "molt"], correctIndex: 2, translation: "Coffee is as good as tea", explanation: "'Tan...com' = as...as. 'Tan bo com' = as good as." },
        { sentence: "Aquesta és la ___ paella del món", blank: "millor", options: ["millor", "pitjor", "més", "menys"], correctIndex: 0, translation: "This is the best paella in the world", explanation: "'Millor' = best/better. Irregular: bo → millor (NOT 'més bo')." },
        { sentence: "Avui fa ___ fred que ahir", blank: "menys", options: ["més", "menys", "tan", "molt"], correctIndex: 1, translation: "Today it's less cold than yesterday", explanation: "'Menys...que' = less...than. Less common but important." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Més...que' = more than. Adjective between: 'més gran que' (bigger than), 'més alt que' (taller than).", words: ["Barcelona", "és", "més", "gran", "que", "Girona"], correctOrder: "Barcelona és més gran que Girona", translation: "Barcelona is bigger than Girona" },
        { grammarNote: "💡 'Tan...com' = as...as. For equal comparisons: tan bonic com, tan ràpid com.", words: ["El", "català", "és", "tan", "bonic", "com", "l'italià"], correctOrder: "El català és tan bonic com l'italià", translation: "Catalan is as beautiful as Italian" },
        { grammarNote: "💡 'Millor' = better/best. 'Pitjor' = worse/worst. Never say 'més bo' or 'més dolent'.", words: ["Aquesta", "és", "la", "millor", "pizza"], correctOrder: "Aquesta és la millor pizza", translation: "This is the best pizza" },
        { grammarNote: "💡 'Menys...que' = less...than. 'Avui fa menys calor que ahir' = Today it's less hot than yesterday.", words: ["Avui", "fa", "menys", "fred", "que", "ahir"], correctOrder: "Avui fa menys fred que ahir", translation: "Today it's less cold than yesterday" }
      ]
    }
  },


// ─── LESSON 60: Asking Questions ────────────────────────

  {
    id: 60,
    title: "Asking Questions",
    module: "Grammar",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation'],
    words: [
      { en: "What?", ca: "Què?", pronunciation: "KEH" },
      { en: "Who?", ca: "Qui?", pronunciation: "KEE" },
      { en: "When?", ca: "Quan?", pronunciation: "KWAHN" },
      { en: "Why?", ca: "Per què?", pronunciation: "per KEH" },
      { en: "How?", ca: "Com?", pronunciation: "KOHM" },
      { en: "Which?", ca: "Quin / Quina?", pronunciation: "KEEN / KEE-nah" },
      { en: "How many?", ca: "Quants / Quantes?", pronunciation: "KWANTS / KWAHN-tehs" },
      { en: "Because", ca: "Perquè", pronunciation: "per-KEH" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "___ fas aquí?", blank: "Què", options: ["Què", "Qui", "Quan", "Com"], correctIndex: 0, translation: "What are you doing here?", explanation: "'Què?' = What? Used for things and actions." },
        { sentence: "___ és aquest senyor?", blank: "Qui", options: ["Què", "Qui", "Quan", "Com"], correctIndex: 1, translation: "Who is this man?", explanation: "'Qui?' = Who? Used for people." },
        { sentence: "___ arribes?", blank: "Quan", options: ["Què", "Com", "Quan", "Per què"], correctIndex: 2, translation: "When do you arrive?", explanation: "'Quan?' = When? Used for time." },
        { sentence: "___ estudies català?", blank: "Per què", options: ["Què", "Qui", "Com", "Per què"], correctIndex: 3, translation: "Why do you study Catalan?", explanation: "'Per què?' (2 words) = Why? 'Perquè' (1 word) = Because." },
        { sentence: "___ persones hi ha?", blank: "Quantes", options: ["Quantes", "Quins", "Quan", "Com"], correctIndex: 0, translation: "How many people are there?", explanation: "'Quantes' = how many (feminine). 'Persones' is feminine." }
      ],
      miniConversation: [
        { speaker: "New friend", text: "Hola! D'on ets?", isUserTurn: false, translation: "Hi! Where are you from?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sóc d'Anglaterra. I tu, d'on ets?", "No entenc", "Quant costa?"], correctIndex: 0 },
        { speaker: "New friend", text: "De Girona! Quan vas arribar a Catalunya?", isUserTurn: false, translation: "From Girona! When did you arrive in Catalonia?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Fa un any. Per què em preguntes?", "Tinc febre", "Adéu"], correctIndex: 0 },
        { speaker: "New friend", text: "Perquè parles molt bé el català! Com l'has après?", isUserTurn: false, translation: "Because you speak Catalan very well! How did you learn it?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Amb HolaCatalà i parlant amb gent com tu!", "No m'agrada", "On és el bany?"], correctIndex: 0 }
      ]
    }
  },


// ─── LESSON 61: Shopping for Groceries ──────────────────

  {
    id: 61,
    title: "Shopping for Groceries",
    module: "Practical Life",
    stages: ['intro', 'listenAndType', 'miniConversation', 'errorCorrection'],
    words: [
      { en: "Olive oil", ca: "Oli d'oliva", pronunciation: "OH-lee DOH-lee-bah" },
      { en: "Tomato", ca: "Tomàquet", pronunciation: "toh-MAH-keht" },
      { en: "Onion", ca: "Ceba", pronunciation: "SEH-bah" },
      { en: "Potato", ca: "Patata", pronunciation: "pah-TAH-tah" },
      { en: "Apple", ca: "Poma", pronunciation: "POH-mah" },
      { en: "Orange", ca: "Taronja", pronunciation: "tah-ROHN-zhah" },
      { en: "Tin/Can", ca: "Llauna", pronunciation: "YOW-nah" },
      { en: "Shopping list", ca: "Llista de la compra", pronunciation: "YEES-tah deh lah KOHM-prah" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Voldria mig quilo de tomàquets", english: "I would like half a kilo of tomatoes", pronunciation: "bol-DREE-ah meetch KEE-loh deh toh-MAH-kehts" },
        { catalan: "On és l'oli d'oliva?", english: "Where is the olive oil?", pronunciation: "ohn EHS LOH-lee DOH-lee-bah" },
        { catalan: "Necessito cebes i patates", english: "I need onions and potatoes", pronunciation: "neh-seh-SEE-toh SEH-behs ee pah-TAH-tehs" },
        { catalan: "Les pomes estan de temporada", english: "The apples are in season", pronunciation: "lehs POH-mehs es-TAHN deh tem-poh-RAH-dah" }
      ],
      miniConversation: [
        { speaker: "Shopkeeper", text: "Bon dia! Què voldria?", isUserTurn: false, translation: "Good morning! What would you like?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Voldria un quilo de tomàquets i mig de cebes", "Un cafè si us plau", "On és el bany?"], correctIndex: 0 },
        { speaker: "Shopkeeper", text: "Molt bé. Alguna cosa més?", isUserTurn: false, translation: "Very good. Anything else?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, un quilo de pomes i taronges", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Shopkeeper", text: "Perfecte! Són set euros amb cinquanta.", isUserTurn: false, translation: "Perfect! It's seven euros fifty." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Aquí té. Moltes gràcies!", "És massa car", "Adéu"], correctIndex: 0 }
      ],
      errorCorrection: [
        { sentence: "Necesito comprar tomates", errorWordIndex: 2, options: ["tomates", "tomàquets", "tomatas", "tomaques"], correctIndex: 1, translation: "I need to buy tomatoes", explanation: "'Tomàquets' is the Catalan word. 'Tomates' is Spanish." },
        { sentence: "On és el aceite de oliva?", errorWordIndex: 2, options: ["aceite", "oli", "oile", "oliu"], correctIndex: 1, translation: "Where is the olive oil?", explanation: "'Oli' is 'oil' in Catalan. 'Aceite' is Spanish." },
        { sentence: "Voldria un kilo de cebollas", errorWordIndex: 4, options: ["cebollas", "cebes", "ceboles", "cebas"], correctIndex: 1, translation: "I would like a kilo of onions", explanation: "'Cebes' is Catalan for onions. 'Cebollas' is Spanish." },
        { sentence: "Les manzanas són bones", errorWordIndex: 1, options: ["manzanas", "pomes", "mançanes", "pommes"], correctIndex: 1, translation: "The apples are good", explanation: "'Pomes' is 'apples' in Catalan. 'Manzanas' is Spanish." }
      ]
    }
  },


// ─── LESSON 62: At the Airport ──────────────────────────

  {
    id: 62,
    title: "At the Airport",
    module: "Practical Life",
    stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation'],
    words: [
      { en: "Airport", ca: "Aeroport", pronunciation: "ah-eh-roh-PORT" },
      { en: "Departure", ca: "Sortida", pronunciation: "sor-TEE-dah" },
      { en: "Arrival", ca: "Arribada", pronunciation: "ah-ree-BAH-dah" },
      { en: "Luggage", ca: "Equipatge", pronunciation: "eh-kee-PAH-jeh" },
      { en: "Security", ca: "Seguretat", pronunciation: "seh-goo-reh-TAHT" },
      { en: "Terminal", ca: "Terminal", pronunciation: "ter-mee-NAHL" },
      { en: "To check in", ca: "Facturar", pronunciation: "fahk-too-RAR" },
      { en: "Seat", ca: "Seient", pronunciation: "seh-ee-EHN" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "On és la terminal dos?", english: "Where is terminal two?", pronunciation: "ohn EHS lah ter-mee-NAHL DOHS" },
        { catalan: "Necessito facturar l'equipatge", english: "I need to check in the luggage", pronunciation: "neh-seh-SEE-toh fahk-too-RAR leh-kee-PAH-jeh" },
        { catalan: "El vol té un retard de dues hores", english: "The flight has a two-hour delay", pronunciation: "ehl BOHL teh oon reh-TART deh DOO-ehs OH-rehs" },
        { catalan: "Puc triar el seient?", english: "Can I choose the seat?", pronunciation: "POOK tree-AR ehl seh-ee-EHN" }
      ],
      miniConversation: [
        { speaker: "Agent", text: "Bon dia! El passaport i la targeta d'embarcament, si us plau.", isUserTurn: false, translation: "Good morning! Passport and boarding pass, please." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Aquí té. Puc triar un seient de finestra?", "Voldria un cafè", "On és la platja?"], correctIndex: 0 },
        { speaker: "Agent", text: "Sí, fila 15, seient A. Vol facturar equipatge?", isUserTurn: false, translation: "Yes, row 15, seat A. Do you want to check luggage?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, una maleta, si us plau", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Agent", text: "Perfecte. Porta d'embarcament B22. Bon viatge!", isUserTurn: false, translation: "Perfect. Boarding gate B22. Have a good trip!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Moltes gràcies! A quina hora embarquem?", "Adéu", "No m'agrada"], correctIndex: 0 }
      ]
    }
  },


// ─── LESSON 63: Daily Routine ───────────────────────────

  {
    id: 63,
    title: "Daily Routine",
    module: "Practical Life",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering'],
    words: [
      { en: "To wake up", ca: "Despertar-se", pronunciation: "des-per-TAR-seh" },
      { en: "To get up", ca: "Llevar-se", pronunciation: "yeh-BAR-seh" },
      { en: "To shower", ca: "Dutxar-se", pronunciation: "doo-CHAR-seh" },
      { en: "To get dressed", ca: "Vestir-se", pronunciation: "bes-TEER-seh" },
      { en: "To have breakfast", ca: "Esmorzar", pronunciation: "ez-mor-SAR" },
      { en: "To have lunch", ca: "Dinar", pronunciation: "dee-NAR" },
      { en: "To have dinner", ca: "Sopar", pronunciation: "soh-PAR" },
      { en: "To go to bed", ca: "Anar a dormir", pronunciation: "ah-NAR ah door-MEER" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Em ___ a les set del matí", blank: "desperto", options: ["desperto", "dutxo", "vesteixo", "llevo"], correctIndex: 0, translation: "I wake up at seven in the morning", explanation: "'Em desperto' = I wake up. Reflexive: 'em' (myself) + verb." },
        { sentence: "Després de dutxar-me, em ___", blank: "vesteixo", options: ["desperto", "dutxo", "vesteixo", "llevo"], correctIndex: 2, translation: "After showering, I get dressed", explanation: "'Em vesteixo' = I get dressed. Vestir-se → em vesteixo." },
        { sentence: "___ a les vuit amb la família", blank: "Esmorzo", options: ["Dino", "Sopo", "Esmorzo", "Dormo"], correctIndex: 2, translation: "I have breakfast at eight with the family", explanation: "'Esmorzo' = I have breakfast. 'Esmorzar' = breakfast (noun & verb)." },
        { sentence: "___ a les dues de la tarda", blank: "Dino", options: ["Esmorzo", "Dino", "Sopo", "Dormo"], correctIndex: 1, translation: "I have lunch at two in the afternoon", explanation: "'Dino' = I have lunch. Catalans eat lunch around 2pm!" },
        { sentence: "Anem a ___ a les onze de la nit", blank: "dormir", options: ["esmorzar", "dinar", "sopar", "dormir"], correctIndex: 3, translation: "We go to bed at eleven at night", explanation: "'Anar a dormir' = to go to bed. Literally 'go to sleep'." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 Reflexive verbs: 'em' (myself) before the verb. Em desperto, em dutxo, em vesteixo.", words: ["Em", "desperto", "a", "les", "set"], correctOrder: "Em desperto a les set", translation: "I wake up at seven" },
        { grammarNote: "💡 'Després de' = after. Use infinitive: 'després d'esmorzar' = after breakfast.", words: ["Després", "d'esmorzar", "vaig", "a", "la", "feina"], correctOrder: "Després d'esmorzar vaig a la feina", translation: "After breakfast I go to work" },
        { grammarNote: "💡 Meals: esmorzar (~8am), dinar (~2pm), sopar (~9pm). Very different schedule to UK!", words: ["Dinem", "a", "les", "dues", "de", "la", "tarda"], correctOrder: "Dinem a les dues de la tarda", translation: "We have lunch at two in the afternoon" },
        { grammarNote: "💡 'Cada dia' = every day. Goes at start or end: 'Cada dia em dutxo' or 'Em dutxo cada dia'.", words: ["Cada", "dia", "em", "dutxo", "al", "matí"], correctOrder: "Cada dia em dutxo al matí", translation: "Every day I shower in the morning" }
      ]
    }
  },


// ─── LESSON 64: Andorra & the Pyrenees ──────────────────

  {
    id: 64,
    title: "Andorra & the Pyrenees",
    module: "Practical Life",
    stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation'],
    words: [
      { en: "Ski", ca: "Esquiar", pronunciation: "es-kee-AR" },
      { en: "Ski resort", ca: "Estació d'esquí", pronunciation: "es-tah-see-OH des-KEE" },
      { en: "Valley", ca: "Vall", pronunciation: "BAHL" },
      { en: "Mountain pass", ca: "Coll", pronunciation: "KOHL" },
      { en: "Hiking", ca: "Senderisme", pronunciation: "sen-deh-REES-meh" },
      { en: "Refuge/Hut", ca: "Refugi", pronunciation: "reh-FOO-zhee" },
      { en: "Border", ca: "Frontera", pronunciation: "fron-TEH-rah" },
      { en: "Landscape", ca: "Paisatge", pronunciation: "pah-ee-SAH-jeh" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Anem a esquiar a Grandvalira", english: "Let's go skiing at Grandvalira", pronunciation: "ah-NEHM ah es-kee-AR ah grahn-bah-LEE-rah" },
        { catalan: "El paisatge dels Pirineus és increïble", english: "The Pyrenees landscape is incredible", pronunciation: "ehl pah-ee-SAH-jeh dehls pee-ree-NEH-oos ehs een-kreh-EE-bleh" },
        { catalan: "M'agrada fer senderisme a la muntanya", english: "I like hiking in the mountains", pronunciation: "mah-GRAH-dah fer sen-deh-REES-meh ah lah moon-TAH-nyah" },
        { catalan: "La frontera amb França és a prop", english: "The border with France is nearby", pronunciation: "lah fron-TEH-rah ahm FRAHN-sah ehs ah PROHP" }
      ],
      miniConversation: [
        { speaker: "Friend", text: "Vols venir a esquiar aquest cap de setmana?", isUserTurn: false, translation: "Do you want to come skiing this weekend?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, m'encantaria! A quina estació anem?", "No m'agrada la neu", "Quant costa?"], correctIndex: 0 },
        { speaker: "Friend", text: "Grandvalira! Hi ha molta neu. Portes l'equipament?", isUserTurn: false, translation: "Grandvalira! There's a lot of snow. Do you have your gear?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, tinc esquís i botes. Sortim d'hora?", "No entenc", "Tinc febre"], correctIndex: 0 },
        { speaker: "Friend", text: "A les vuit del matí. Després d'esquiar podem sopar a un refugi!", isUserTurn: false, translation: "At eight in the morning. After skiing we can eat dinner at a mountain hut!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Genial! El paisatge dels Pirineus és increïble!", "Adéu", "No m'agrada"], correctIndex: 0 }
      ]
    }
  },


// ─── LESSON 65: Catalan Idioms & Expressions ────────────

  {
    id: 65,
    title: "Catalan Expressions",
    module: "Practical Life",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation'],
    words: [
      { en: "No worries!", ca: "No passa res!", pronunciation: "noh PAH-sah REHS" },
      { en: "I agree", ca: "D'acord", pronunciation: "dah-KORD" },
      { en: "Of course!", ca: "És clar!", pronunciation: "ehs KLAHR" },
      { en: "It doesn't matter", ca: "Tant se val", pronunciation: "tahnt seh BAHL" },
      { en: "Well done!", ca: "Molt bé!", pronunciation: "mohlt BEH" },
      { en: "No idea", ca: "Ni idea", pronunciation: "nee ee-DEH-ah" },
      { en: "Be careful!", ca: "Vés amb compte!", pronunciation: "BEHS ahm KOHM-teh" },
      { en: "What a shame!", ca: "Quina llàstima!", pronunciation: "KEE-nah YAHS-tee-mah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "He trencat un got! — ___!", blank: "No passa res", options: ["Molt bé", "No passa res", "Quina llàstima", "Vés amb compte"], correctIndex: 1, translation: "I broke a glass! — No worries!", explanation: "'No passa res' = No worries / It's nothing. The go-to reassuring phrase." },
        { sentence: "Quedem a les cinc? — ___!", blank: "D'acord", options: ["Ni idea", "Tant se val", "D'acord", "Quina llàstima"], correctIndex: 2, translation: "Shall we meet at five? — OK!", explanation: "'D'acord' = OK / I agree. Used constantly in daily conversation." },
        { sentence: "Saps on és el mercat? — ___", blank: "Ni idea", options: ["Molt bé", "D'acord", "És clar", "Ni idea"], correctIndex: 3, translation: "Do you know where the market is? — No idea", explanation: "'Ni idea' = Not a clue / No idea. Informal and very common." },
        { sentence: "No poden venir a la festa. ___!", blank: "Quina llàstima", options: ["Molt bé", "D'acord", "No passa res", "Quina llàstima"], correctIndex: 3, translation: "They can't come to the party. What a shame!", explanation: "'Quina llàstima!' = What a shame! Express disappointment." },
        { sentence: "Has aprovat l'examen? ___!", blank: "És clar", options: ["Ni idea", "És clar", "Tant se val", "Vés amb compte"], correctIndex: 1, translation: "Did you pass the exam? Of course!", explanation: "'És clar!' = Of course! / Obviously! Shows confidence." }
      ],
      miniConversation: [
        { speaker: "Friend", text: "Ei! He suspès l'examen de conduir...", isUserTurn: false, translation: "Hey! I failed my driving test..." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Quina llàstima! Però no passa res, ho tornaràs a intentar", "Molt bé!", "D'acord"], correctIndex: 0 },
        { speaker: "Friend", text: "Sí, tens raó. Potser el mes vinent.", isUserTurn: false, translation: "Yes, you're right. Maybe next month." },
        { speaker: "You", text: "", isUserTurn: true, options: ["És clar! Segur que ho aconseguiràs!", "Ni idea", "Tant se val"], correctIndex: 0 },
        { speaker: "Friend", text: "Gràcies! Ets un bon amic. Quedem dissabte?", isUserTurn: false, translation: "Thanks! You're a good friend. Shall we meet Saturday?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["D'acord! A les onze del matí?", "Quina llàstima", "Vés amb compte"], correctIndex: 0 }
      ]
    }
  },


];