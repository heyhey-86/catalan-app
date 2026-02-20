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
        { catalan: "Aquesta nit", english: "Tonight", pronunciation: "ah-KES-tah NEET" },
        { catalan: "Cap de setmana", english: "Weekend", pronunciation: "kahp deh seh-MAH-nah" },
        { catalan: "Festa", english: "Party", pronunciation: "FEHS-tah" },
        { catalan: "Cinema", english: "Cinema", pronunciation: "SEE-neh-mah" },
        { catalan: "Convidar", english: "To invite", pronunciation: "kohn-bee-DAR" },
        { catalan: "Enviar", english: "To send", pronunciation: "en-bee-AR" },
        { catalan: "Junts", english: "Together", pronunciation: "ZHOONTS" },
        { catalan: "Diversió", english: "Fun", pronunciation: "dee-ber-see-OH" }
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
        { catalan: "M'agrada", english: "I like", pronunciation: "mah-GRAH-dah" },
        { catalan: "M'encanta", english: "I love", pronunciation: "men-KAHN-tah" },
        { catalan: "Prefereixo", english: "I prefer", pronunciation: "preh-feh-RAY-shoh" },
        { catalan: "Penso", english: "I think", pronunciation: "PEN-soh" },
        { catalan: "Millor", english: "Better", pronunciation: "mee-YOR" },
        { catalan: "Pitjor", english: "Worse", pronunciation: "pee-JZHOR" },
        { catalan: "Interessant", english: "Interesting", pronunciation: "in-teh-reh-SAHNT" },
        { catalan: "Avorrit", english: "Boring", pronunciation: "ah-boh-RREET" }
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
        { catalan: "Diners", english: "Money", pronunciation: "dee-NEHS" },
        { catalan: "Compte", english: "Account", pronunciation: "KOHM-teh" },
        { catalan: "Targeta", english: "Card", pronunciation: "tar-ZHEH-tah" },
        { catalan: "Efectiu", english: "Cash", pronunciation: "eh-fehk-TEE-oo" },
        { catalan: "Pagar", english: "To pay", pronunciation: "pah-GAR" },
        { catalan: "Treure", english: "To withdraw", pronunciation: "TREH-oo-reh" },
        { catalan: "Transferència", english: "Transfer", pronunciation: "trans-feh-REN-see-ah" },
        { catalan: "Rebut", english: "Receipt", pronunciation: "reh-BOOT" }
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
        { catalan: "Telèfon", english: "Phone", pronunciation: "teh-LEH-fohn" },
        { catalan: "Missatge", english: "Message", pronunciation: "mee-SAH-jeh" },
        { catalan: "Trucar", english: "To call", pronunciation: "troo-KAR" },
        { catalan: "Internet", english: "Internet", pronunciation: "een-ter-NEHT" },
        { catalan: "Contrasenya", english: "Password", pronunciation: "kohn-trah-SEH-nyah" },
        { catalan: "Pantalla", english: "Screen", pronunciation: "pahn-TAH-yah" },
        { catalan: "Carregar", english: "To charge", pronunciation: "kah-reh-GAR" },
        { catalan: "Wi-Fi", english: "Wi-Fi", pronunciation: "WEE-fee" }
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
        { catalan: "Emergència", english: "Emergency", pronunciation: "eh-mer-ZHEN-see-ah" },
        { catalan: "Policia", english: "Police", pronunciation: "poh-lee-SEE-ah" },
        { catalan: "Foc", english: "Fire", pronunciation: "FOHK" },
        { catalan: "Ambulància", english: "Ambulance", pronunciation: "ahm-boo-LAHN-see-ah" },
        { catalan: "Perill", english: "Danger", pronunciation: "peh-REEL" },
        { catalan: "Perdut", english: "Lost", pronunciation: "per-DOOT" },
        { catalan: "Robat", english: "Stolen", pronunciation: "roh-BAHT" },
        { catalan: "Socors!", english: "Help!", pronunciation: "soh-KOHRS" }
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
        { catalan: "Reservar", english: "To book", pronunciation: "reh-ser-BAR" },
        { catalan: "Habitació", english: "Room", pronunciation: "ah-bee-tah-see-OH" },
        { catalan: "Nit", english: "Night", pronunciation: "NEET" },
        { catalan: "Clau", english: "Key", pronunciation: "KLOW" },
        { catalan: "Disponible", english: "Available", pronunciation: "dees-poh-NEE-bleh" },
        { catalan: "Ple", english: "Full", pronunciation: "PLEH" },
        { catalan: "Entrada", english: "Check-in", pronunciation: "en-TRAH-dah" },
        { catalan: "Sortida", english: "Check-out", pronunciation: "sor-TEE-dah" }
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
        { catalan: "Festa major", english: "Festival", pronunciation: "FEHS-tah mah-ZHOR" },
        { catalan: "Ball", english: "Dance", pronunciation: "BAHL" },
        { catalan: "Castell", english: "Castle (human tower)", pronunciation: "kahs-TEHL" },
        { catalan: "Sant", english: "Saint", pronunciation: "SAHNT" },
        { catalan: "Tradició", english: "Tradition", pronunciation: "trah-dee-see-OH" },
        { catalan: "Música", english: "Music", pronunciation: "MOO-zee-kah" },
        { catalan: "Celebrar", english: "To celebrate", pronunciation: "seh-leh-BRAR" },
        { catalan: "Focs artificials", english: "Fireworks", pronunciation: "FOHKS ar-tee-fee-see-AHLS" }
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
        { catalan: "Muntanya", english: "Mountain", pronunciation: "moon-TAH-nyah" },
        { catalan: "Mar", english: "Sea", pronunciation: "MAR" },
        { catalan: "Riu", english: "River", pronunciation: "REE-oo" },
        { catalan: "Arbre", english: "Tree", pronunciation: "AR-breh" },
        { catalan: "Camí", english: "Path", pronunciation: "kah-MEE" },
        { catalan: "Llac", english: "Lake", pronunciation: "YAHK" },
        { catalan: "Bosc", english: "Forest", pronunciation: "BOHSK" },
        { catalan: "Vista", english: "View", pronunciation: "BEES-tah" }
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
        { catalan: "Tot recte", english: "Straight ahead", pronunciation: "toht REK-teh" },
        { catalan: "Gira", english: "Turn", pronunciation: "ZHEE-rah" },
        { catalan: "Cantonada", english: "Corner", pronunciation: "kahn-toh-NAH-dah" },
        { catalan: "Encreuament", english: "Crossing", pronunciation: "en-kreh-oo-ah-MEHN" },
        { catalan: "A prop", english: "Near", pronunciation: "ah PROHP" },
        { catalan: "Lluny", english: "Far", pronunciation: "YOON-yee" },
        { catalan: "Al costat de", english: "Next to", pronunciation: "ahl kos-TAHT deh" },
        { catalan: "Davant de", english: "In front of", pronunciation: "dah-BAHN deh" }
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
        { catalan: "Llengua", english: "Language", pronunciation: "YEHN-gwah" },
        { catalan: "Parlar", english: "To speak", pronunciation: "par-LAR" },
        { catalan: "Entendre", english: "To understand", pronunciation: "en-TEN-dreh" },
        { catalan: "Paraula", english: "Word", pronunciation: "pah-RAH-oo-lah" },
        { catalan: "Frase", english: "Sentence", pronunciation: "FRAH-zeh" },
        { catalan: "Diferent", english: "Different", pronunciation: "dee-feh-REHN" },
        { catalan: "Similar", english: "Similar", pronunciation: "see-mee-LAR" },
        { catalan: "Aprendre", english: "To learn", pronunciation: "ah-PREN-dreh" },
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
        { sentence: "La idioma catalana és molt bonica", errorWordIndex: 0, options: ["La", "L'", "El", "Les"], correctIndex: 1, translation: "The Catalan language is very beautiful", explanation: "This is actually correct! 'Idioma' is masculine in Catalan but 'llengua' is feminine." }
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
        { catalan: "Cita", english: "Appointment", pronunciation: "SEE-tah" },
        { catalan: "Lliure", english: "Free/Available", pronunciation: "YEE-oo-reh" },
        { catalan: "Ocupat", english: "Busy", pronunciation: "oh-koo-PAHT" },
        { catalan: "Cancel·lar", english: "To cancel", pronunciation: "kahn-seh-LAR" },
        { catalan: "Canviar", english: "To change", pronunciation: "kahn-bee-AR" },
        { catalan: "En punt", english: "O'clock", pronunciation: "en POONT" },
        { catalan: "I mitja", english: "Half past", pronunciation: "ee MEE-jah" },
        { catalan: "I quart", english: "Quarter past", pronunciation: "ee KWART" },
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
        { catalan: "Rebaixes", english: "Sale/Discount", pronunciation: "reh-BAH-shehs" },
        { catalan: "Talla", english: "Size", pronunciation: "TAH-yah" },
        { catalan: "Emprovar", english: "To try on", pronunciation: "em-proh-BAR" },
        { catalan: "Provador", english: "Fitting room", pronunciation: "proh-bah-DOR" },
        { catalan: "Preu", english: "Price", pronunciation: "PREH-oo" },
        { catalan: "Barat", english: "Cheap", pronunciation: "bah-RAHT" },
        { catalan: "Tornar", english: "To return", pronunciation: "tor-NAR" },
        { catalan: "Regal", english: "Gift", pronunciation: "reh-GAHL" },
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
        { catalan: "Entrant", english: "Starter", pronunciation: "en-TRAHNT" },
        { catalan: "Plat principal", english: "Main course", pronunciation: "PLAHT preen-see-PAHL" },
        { catalan: "Postres", english: "Dessert", pronunciation: "POHS-trehs" },
        { catalan: "Picant", english: "Spicy", pronunciation: "pee-KAHNT" },
        { catalan: "Dolç", english: "Sweet", pronunciation: "DOHLS" },
        { catalan: "Salat", english: "Salty", pronunciation: "sah-LAHT" },
        { catalan: "Propina", english: "Tip", pronunciation: "proh-PEE-nah" },
        { catalan: "Deliciós", english: "Delicious", pronunciation: "deh-lee-see-OHS" },
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
        { catalan: "Carta", english: "Letter", pronunciation: "KAR-tah" },
        { catalan: "Paquet", english: "Package", pronunciation: "pah-KEHT" },
        { catalan: "Segell", english: "Stamp", pronunciation: "seh-ZHEYL" },
        { catalan: "Enviar", english: "To send", pronunciation: "en-bee-AR" },
        { catalan: "Adreça", english: "Address", pronunciation: "ah-DREH-sah" },
        { catalan: "Codi postal", english: "Postcode", pronunciation: "KOH-dee pohs-TAHL" },
        { catalan: "Urgent", english: "Urgent", pronunciation: "oor-ZHEHN" },
        { catalan: "Seguiment", english: "Tracking", pronunciation: "seh-ghee-MEHN" },
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
        { catalan: "Senyor/Senyora", english: "Sir/Madam", pronunciation: "seh-NYOR / seh-NYOH-rah" },
        { catalan: "Faci el favor", english: "Please (formal)", pronunciation: "FAH-see ehl fah-BOR" },
        { catalan: "Podria?", english: "Could you?", pronunciation: "poh-DREE-ah" },
        { catalan: "Cita prèvia", english: "Appointment", pronunciation: "SEE-tah PREH-bee-ah" },
        { catalan: "Formulari", english: "Form", pronunciation: "for-moo-LAH-ree" },
        { catalan: "Document d'identitat", english: "ID card", pronunciation: "doh-koo-MEHN dee-den-tee-TAHT" },
        { catalan: "Omplir", english: "To fill in", pronunciation: "ohm-PLEER" },
        { catalan: "Signatura", english: "Signature", pronunciation: "seeg-nah-TOO-rah" },
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
        { catalan: "Tinc experiència", english: "I have experience", pronunciation: "TEENK eks-peh-ree-EN-see-ah" },
        { catalan: "Horari de treball", english: "Work schedule", pronunciation: "oh-RAH-ree deh treh-BAHL" },
        { catalan: "Lloc de treball", english: "Position/Workplace", pronunciation: "YOHK deh treh-BAHL" },
        { catalan: "Punt fort", english: "Strength", pronunciation: "poont FORT" },
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
        { catalan: "El meu vol", english: "My flight", pronunciation: "ehl MEH-oo BOHL" },
        { catalan: "Vol té retard", english: "Flight is delayed", pronunciation: "BOHL teh reh-TART" },
        { catalan: "La maleta", english: "The suitcase", pronunciation: "lah mah-LEH-tah" },
        { catalan: "Porta d'embarcament", english: "Boarding gate", pronunciation: "POR-tah dem-bar-kah-MEHN" },
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
        { catalan: "Una queixa", english: "A complaint", pronunciation: "OO-nah KAY-shah" },
        { catalan: "Resoldre el problema", english: "Solve the problem", pronunciation: "reh-SOHL-dreh ehl proh-BLEH-mah" },
        { catalan: "L'encarregat", english: "The manager", pronunciation: "len-kah-rreh-GAHT" },
        { catalan: "Un reemborsament", english: "A refund", pronunciation: "oon reh-em-bor-sah-MEHN" },
        { catalan: "No estic satisfet amb el servei", english: "I'm not satisfied with the service", pronunciation: "noh es-TEEK sah-tees-FEHT ahm ehl ser-BAY" },
        { catalan: "Voldria un reemborsament si us plau", english: "I would like a refund please", pronunciation: "bol-DREE-ah oon reh-em-bor-sah-MEHN see oos PLOW" },
        { catalan: "Quan podeu resoldre el problema?", english: "When can you solve the problem?", pronunciation: "kwahn poh-DEH-oo reh-SOHL-dreh ehl proh-BLEH-mah" },
        { catalan: "Disculpin les molèsties", english: "Sorry for the inconvenience", pronunciation: "dees-KOOL-peen lehs moh-LES-tee-ehs" }
      ],
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
        { catalan: "Les notícies", english: "The news", pronunciation: "lehs noh-TEE-see-ehs" },
        { catalan: "El medi ambient", english: "The environment", pronunciation: "ehl MEH-dee ahm-bee-EHN" },
        { catalan: "Les eleccions", english: "The elections", pronunciation: "lehs eh-lehk-see-OHNS" },
        { catalan: "L'economia catalana", english: "The Catalan economy", pronunciation: "leh-koh-noh-MEE-ah kah-tah-LAH-nah" },
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
        { catalan: "Molt emocionat", english: "Very excited", pronunciation: "mohlt eh-moh-see-oh-NAHT" },
        { catalan: "Estic preocupat", english: "I'm worried", pronunciation: "es-TEEK preh-oh-koo-PAHT" },
        { catalan: "Em sento sol", english: "I feel lonely", pronunciation: "em SEN-toh SOHL" },
        { catalan: "Molt orgullós", english: "Very proud", pronunciation: "mohlt or-goo-YOHS" },
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
        { catalan: "El meu somni", english: "My dream", pronunciation: "ehl MEH-oo SOHM-nee" },
        { catalan: "El meu objectiu", english: "My goal", pronunciation: "ehl MEH-oo ohb-zhek-TEE-oo" },
        { catalan: "Millorar el català", english: "Improve the Catalan", pronunciation: "mee-yoh-RAR ehl kah-tah-LAH" },
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
        { catalan: "La meva llar", english: "My home", pronunciation: "lah MEH-bah YAHR" },
        { catalan: "La cultura catalana", english: "Catalan culture", pronunciation: "lah kool-TOO-rah kah-tah-LAH-nah" },
        { catalan: "Em sento benvingut", english: "I feel welcome", pronunciation: "em SEN-toh ben-been-GOOT" },
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
        { catalan: "Quina hora és?", english: "What time is it?", pronunciation: "KEE-nah OH-rah EHS" },
        { catalan: "Són les dues", english: "It's two o'clock", pronunciation: "SOHN lehs DOO-ehs" },
        { catalan: "I mitja", english: "Half past", pronunciation: "ee MEE-jah" },
        { catalan: "Del matí", english: "In the morning", pronunciation: "dehl mah-TEE" },
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
        { catalan: "Demà aniré", english: "Tomorrow I will go", pronunciation: "deh-MAH ah-nee-REH" },
        { catalan: "La setmana vinent", english: "Next week", pronunciation: "lah seh-MAH-nah bee-NEHN" },
        { catalan: "Aviat parlaré", english: "Soon I will speak", pronunciation: "ah-bee-AHT par-lah-REH" },
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

  // ─── LESSON 66: At the Pharmacy ────────────────────────────

{
  id: 66,
  title: "At the Pharmacy",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Pharmacy", ca: "Farmàcia", pronunciation: "far-MAH-see-ah" },
    { en: "Medicine", ca: "Medicament", pronunciation: "meh-dee-kah-MEHN" },
    { en: "Prescription", ca: "Recepta", pronunciation: "reh-SEH-ptah" },
    { en: "Pain", ca: "Dolor", pronunciation: "doh-LOR" },
    { en: "Headache", ca: "Mal de cap", pronunciation: "mahl deh KAHP" },
    { en: "Fever", ca: "Febre", pronunciation: "FEH-breh" },
    { en: "Cough", ca: "Tos", pronunciation: "TOHS" },
    { en: "Allergy", ca: "Al·lèrgia", pronunciation: "ah-LEHR-jee-ah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Necessito un ___ per la tos", blank: "medicament", options: ["medicament", "recepta", "dolor", "febre"], correctIndex: 0, translation: "I need medicine for the cough", explanation: "'Medicament' = medicine. 'Necessito un medicament' = I need a medicine." },
      { sentence: "Tinc ___ des d'ahir", blank: "febre", options: ["tos", "febre", "dolor", "farmàcia"], correctIndex: 1, translation: "I've had a fever since yesterday", explanation: "'Febre' = fever. 'Tinc febre' = I have a fever. 'Des d'ahir' = since yesterday." },
      { sentence: "Em fa ___ el cap", blank: "mal", options: ["mal", "bé", "tos", "febre"], correctIndex: 0, translation: "My head hurts", explanation: "'Em fa mal el cap' = My head hurts (literally: it makes me pain the head). Common phrase for headache." },
      { sentence: "Té ___?", blank: "recepta", options: ["recepta", "dolor", "tos", "cap"], correctIndex: 0, translation: "Do you have a prescription?", explanation: "'Recepta' = prescription. Pharmacists ask 'Té recepta?' before dispensing certain medicines." }
    ],
    listenAndType: [
      { catalan: "On és la farmàcia més propera?", english: "Where is the nearest pharmacy?", pronunciation: "ohn ehs lah far-MAH-see-ah mehs proh-PEH-rah" },
      { catalan: "Tinc mal de cap i febre", english: "I have a headache and fever", pronunciation: "TEEN-k mahl deh KAHP ee FEH-breh" },
      { catalan: "Necessito alguna cosa per la tos", english: "I need something for the cough", pronunciation: "neh-seh-SEE-toh ahl-GOO-nah KOH-sah pehr lah TOHS" },
      { catalan: "Sóc al·lèrgic a la penicil·lina", english: "I'm allergic to penicillin", pronunciation: "SOHK ah-LEHR-jeek ah lah peh-nee-see-LEE-nah" }
    ],
    errorCorrection: [
      { sentence: "Necesito medicina para el dolor", errorWordIndex: 0, options: ["Necesito", "Necessito", "Necesit", "Need"], correctIndex: 1, translation: "I need medicine for the pain", explanation: "'Necessito' is Catalan. 'Necesito' is Spanish." },
      { sentence: "Tengo fiebre desde ayer", errorWordIndex: 1, options: ["fiebre", "febre", "febra", "fever"], correctIndex: 1, translation: "I've had a fever since yesterday", explanation: "'Febre' is Catalan. 'Fiebre' is Spanish." },
      { sentence: "Me duele la cabeza", errorWordIndex: 0, options: ["Me", "Em", "M'", "Me"], correctIndex: 1, translation: "My head hurts", explanation: "'Em fa mal' is Catalan. 'Me duele' is Spanish." },
      { sentence: "Tienes receta?", errorWordIndex: 1, options: ["receta", "recepta", "recete", "receipt"], correctIndex: 1, translation: "Do you have a prescription?", explanation: "'Recepta' is Catalan. 'Receta' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Em fa mal' = it hurts me. Pattern: Em fa mal el/la + body part. Em fa mal l'esquena = my back hurts.", words: ["Em", "fa", "mal", "el", "cap"], correctOrder: "Em fa mal el cap", translation: "My head hurts" },
      { grammarNote: "💡 'Tinc' + symptom is used for temporary conditions. Tinc febre, tinc tos, tinc fred (I'm cold).", words: ["Tinc", "tos", "i", "mal", "de", "coll"], correctOrder: "Tinc tos i mal de coll", translation: "I have a cough and sore throat" },
      { grammarNote: "💡 'Sóc al·lèrgic/a' = I'm allergic. Add 'a' before allergen: Sóc al·lèrgic a la penicil·lina.", words: ["Sóc", "al·lèrgic", "als", "fruits", "secs"], correctOrder: "Sóc al·lèrgic als fruits secs", translation: "I'm allergic to nuts" }
    ]
  }
},

// ─── LESSON 67: At the Bank ────────────────────────────────

{
  id: 67,
  title: "At the Bank",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Bank", ca: "Banc", pronunciation: "BAHNK" },
    { en: "Account", ca: "Compte", pronunciation: "KOHM-teh" },
    { en: "Card", ca: "Targeta", pronunciation: "tar-JEH-tah" },
    { en: "Cash", ca: "Efectiu", pronunciation: "eh-fehk-TEE-oo" },
    { en: "Transfer", ca: "Transferència", pronunciation: "trahns-feh-REHN-see-ah" },
    { en: "ATM", ca: "Caixer automàtic", pronunciation: "kah-SHEH ow-toh-MAH-teek" },
    { en: "PIN", ca: "Codi PIN", pronunciation: "KOH-dee PEEN" },
    { en: "Balance", ca: "Saldo", pronunciation: "SAHL-doh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Vull obrir un ___", blank: "compte", options: ["compte", "banc", "targeta", "efectiu"], correctIndex: 0, translation: "I want to open an account", explanation: "'Compte' = account. 'Obrir un compte' = open an account." },
      { sentence: "Puc pagar amb ___?", blank: "targeta", options: ["efectiu", "targeta", "compte", "saldo"], correctIndex: 1, translation: "Can I pay with card?", explanation: "'Targeta' = card. 'Puc pagar amb targeta?' = Can I pay by card?" },
      { sentence: "On hi ha un ___?", blank: "caixer automàtic", options: ["banc", "compte", "caixer automàtic", "saldo"], correctIndex: 2, translation: "Where is an ATM?", explanation: "'Caixer automàtic' = ATM (literally: automatic cashier)." },
      { sentence: "Quin és el meu ___?", blank: "saldo", options: ["codi", "saldo", "banc", "efectiu"], correctIndex: 1, translation: "What is my balance?", explanation: "'Saldo' = balance. 'Quin és el meu saldo?' = What's my balance?" }
    ],
    listenAndType: [
      { catalan: "Vull fer una transferència", english: "I want to make a transfer", pronunciation: "BOOL fehr OO-nah trahns-feh-REHN-see-ah" },
      { catalan: "He oblidat el codi PIN", english: "I've forgotten the PIN code", pronunciation: "eh oh-blee-DAHT ehl KOH-dee PEEN" },
      { catalan: "Necessito treure diners", english: "I need to withdraw money", pronunciation: "neh-seh-SEE-toh TREH-oo-reh dee-NEHRS" },
      { catalan: "Quin és el saldo del meu compte?", english: "What is my account balance?", pronunciation: "KEEN ehs ehl SAHL-doh dehl MEH-oo KOHM-teh" }
    ],
    errorCorrection: [
      { sentence: "Quiero abrir una cuenta", errorWordIndex: 0, options: ["Quiero", "Vull", "Vullo", "Want"], correctIndex: 1, translation: "I want to open an account", explanation: "'Vull' is Catalan (I want). 'Quiero' is Spanish." },
      { sentence: "Puedo pagar con tarjeta?", errorWordIndex: 3, options: ["tarjeta", "targeta", "tarjet", "card"], correctIndex: 1, translation: "Can I pay with card?", explanation: "'Targeta' is Catalan. 'Tarjeta' is Spanish." },
      { sentence: "Dónde está el cajero?", errorWordIndex: 0, options: ["Dónde", "On", "Donde", "Where"], correctIndex: 1, translation: "Where is the ATM?", explanation: "'On' is Catalan (where). 'Dónde' is Spanish." },
      { sentence: "Necesito sacar dinero", errorWordIndex: 1, options: ["sacar", "treure", "sacar", "take"], correctIndex: 1, translation: "I need to withdraw money", explanation: "'Treure' is Catalan. 'Sacar' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Obrir' = to open. 'Vull obrir un compte' = I want to open an account. 'Tancar' = to close.", words: ["Vull", "obrir", "un", "compte", "bancari"], correctOrder: "Vull obrir un compte bancari", translation: "I want to open a bank account" },
      { grammarNote: "💡 'Fer una transferència' = make a transfer. 'Fer un pagament' = make a payment.", words: ["Puc", "fer", "una", "transferència", "internacional"], correctOrder: "Puc fer una transferència internacional", translation: "Can I make an international transfer" },
      { grammarNote: "💡 'Treure diners' = withdraw money (literally: take out money). 'Ingressar diners' = deposit money.", words: ["On", "puc", "treure", "diners"], correctOrder: "On puc treure diners", translation: "Where can I withdraw money" }
    ]
  }
},

// ─── LESSON 68: Emergencies ────────────────────────────────

{
  id: 68,
  title: "Emergencies",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Help!", ca: "Ajuda!", pronunciation: "ah-JOO-dah" },
    { en: "Emergency", ca: "Emergència", pronunciation: "eh-mehr-JEHN-see-ah" },
    { en: "Police", ca: "Policia", pronunciation: "poh-lee-SEE-ah" },
    { en: "Ambulance", ca: "Ambulància", pronunciation: "ahm-boo-LAHN-see-ah" },
    { en: "Fire", ca: "Foc", pronunciation: "FOHK" },
    { en: "Accident", ca: "Accident", pronunciation: "ahk-see-DEHN" },
    { en: "Hospital", ca: "Hospital", pronunciation: "ohs-pee-TAHL" },
    { en: "Danger", ca: "Perill", pronunciation: "peh-REEL" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Truqueu a la ___!", blank: "policia", options: ["policia", "ambulància", "hospital", "emergència"], correctIndex: 0, translation: "Call the police!", explanation: "'Policia' = police. 'Truqueu a...' = call... (formal/plural)." },
      { sentence: "Hi ha un ___!", blank: "accident", options: ["foc", "accident", "perill", "hospital"], correctIndex: 1, translation: "There's an accident!", explanation: "'Accident' = accident. 'Hi ha un accident' = there's an accident." },
      { sentence: "Necessito una ___!", blank: "ambulància", options: ["policia", "ambulància", "emergència", "hospital"], correctIndex: 1, translation: "I need an ambulance!", explanation: "'Ambulància' = ambulance. Emergency number in Catalonia: 112." },
      { sentence: "On és l'___ més proper?", blank: "hospital", options: ["accident", "hospital", "policia", "perill"], correctIndex: 1, translation: "Where is the nearest hospital?", explanation: "'Hospital' = hospital. 'Més proper' = nearest/closest." }
    ],
    listenAndType: [
      { catalan: "Ajuda! Hi ha un foc!", english: "Help! There's a fire!", pronunciation: "ah-JOO-dah! ee hah oon FOHK!" },
      { catalan: "Necessito un metge urgent", english: "I need a doctor urgently", pronunciation: "neh-seh-SEE-toh oon MEHT-jeh oor-JEHN" },
      { catalan: "Hi ha hagut un accident", english: "There has been an accident", pronunciation: "ee hah ah-GOOT oon ahk-see-DEHN" },
      { catalan: "Truqueu al cent dotze", english: "Call one-one-two", pronunciation: "troo-KEH-oo ahl SEHN DOH-tzeh" }
    ],
    errorCorrection: [
      { sentence: "Ayuda! Hay un incendio!", errorWordIndex: 0, options: ["Ayuda", "Ajuda", "Ayud", "Help"], correctIndex: 1, translation: "Help! There's a fire!", explanation: "'Ajuda' is Catalan. 'Ayuda' is Spanish." },
      { sentence: "Llama a la ambulancia", errorWordIndex: 0, options: ["Llama", "Truqueu", "Truca", "Call"], correctIndex: 2, translation: "Call the ambulance", explanation: "'Truca' is Catalan (informal). 'Llama' is Spanish." },
      { sentence: "Dónde está el hospital?", errorWordIndex: 0, options: ["Dónde", "On", "Donde", "Where"], correctIndex: 1, translation: "Where is the hospital?", explanation: "'On' is Catalan. 'Dónde' is Spanish." },
      { sentence: "Necesito un doctor", errorWordIndex: 0, options: ["Necesito", "Necessito", "Necesit", "Need"], correctIndex: 1, translation: "I need a doctor", explanation: "'Necessito' is Catalan. 'Necesito' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Emergency number in Catalonia: 112 (cent dotze). Works for police, ambulance, fire.", words: ["Truqueu", "al", "cent", "dotze"], correctOrder: "Truqueu al cent dotze", translation: "Call one-one-two" },
      { grammarNote: "💡 'Hi ha hagut' = there has been (past). 'Hi ha' = there is (present).", words: ["Hi", "ha", "hagut", "un", "accident", "de", "trànsit"], correctOrder: "Hi ha hagut un accident de trànsit", translation: "There has been a traffic accident" },
      { grammarNote: "💡 'Urgent' = urgent. 'Necessito ajuda urgent' = I need urgent help.", words: ["Em", "trobo", "malament", "necessito", "ajuda"], correctOrder: "Em trobo malament necessito ajuda", translation: "I feel unwell I need help" }
    ]
  }
},

// ─── LESSON 69: Shopping for Clothes ────────────────────────

{
  id: 69,
  title: "Shopping for Clothes",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Clothes", ca: "Roba", pronunciation: "ROH-bah" },
    { en: "Size", ca: "Talla", pronunciation: "TAH-yah" },
    { en: "Color", ca: "Color", pronunciation: "koh-LOR" },
    { en: "To try on", ca: "Provar", pronunciation: "proh-BAR" },
    { en: "Fitting room", ca: "Provador", pronunciation: "proh-bah-DOR" },
    { en: "Expensive", ca: "Car", pronunciation: "KAR" },
    { en: "Cheap", ca: "Barat", pronunciation: "bah-RAHT" },
    { en: "Discount", ca: "Descompte", pronunciation: "dehs-KOHM-teh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Quina ___ portes?", blank: "talla", options: ["talla", "color", "roba", "descompte"], correctIndex: 0, translation: "What size do you wear?", explanation: "'Talla' = size (for clothes). 'Quina talla portes?' = What size do you wear?" },
      { sentence: "Puc ___ això?", blank: "provar", options: ["provar", "comprar", "portar", "vendre"], correctIndex: 0, translation: "Can I try this on?", explanation: "'Provar' = to try on. 'Puc provar?' = Can I try it on?" },
      { sentence: "On és el ___?", blank: "provador", options: ["descompte", "provador", "color", "talla"], correctIndex: 1, translation: "Where is the fitting room?", explanation: "'Provador' = fitting room (from 'provar' = to try on)." },
      { sentence: "És massa ___", blank: "car", options: ["barat", "car", "gran", "petit"], correctIndex: 1, translation: "It's too expensive", explanation: "'Car' = expensive. 'Barat' = cheap. 'És massa car' = It's too expensive." }
    ],
    listenAndType: [
      { catalan: "Tinc això en talla petita?", english: "Do you have this in a small size?", pronunciation: "TEEN-k ah-SHOH ehn TAH-yah peh-TEE-tah" },
      { catalan: "M'agrada aquest color", english: "I like this color", pronunciation: "mah-GRAH-dah ah-KESHT koh-LOR" },
      { catalan: "Hi ha descompte?", english: "Is there a discount?", pronunciation: "ee hah dehs-KOHM-teh" },
      { catalan: "Això em va bé", english: "This fits me well", pronunciation: "ah-SHOH ehm bah BEH" }
    ],
    errorCorrection: [
      { sentence: "Qué talla llevas?", errorWordIndex: 0, options: ["Qué", "Quina", "Que", "What"], correctIndex: 1, translation: "What size do you wear?", explanation: "'Quina' is Catalan. 'Qué' is Spanish." },
      { sentence: "Puedo probarme esto?", errorWordIndex: 1, options: ["probarme", "provar", "provar-me", "try"], correctIndex: 1, translation: "Can I try this on?", explanation: "'Puc provar això?' is Catalan. 'Puedo probarme' is Spanish." },
      { sentence: "Dónde está el probador?", errorWordIndex: 0, options: ["Dónde", "On", "Donde", "Where"], correctIndex: 1, translation: "Where is the fitting room?", explanation: "'On' is Catalan. 'Dónde' is Spanish." },
      { sentence: "Es muy caro", errorWordIndex: 1, options: ["muy", "massa", "molt", "very"], correctIndex: 1, translation: "It's very expensive", explanation: "'Massa' = too. 'Molt' = very. 'Muy' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Quina talla?' = What size? Sizes: petita (S), mitjana (M), gran (L), extragrande (XL).", words: ["Tinc", "això", "en", "talla", "gran"], correctOrder: "Tinc això en talla gran", translation: "Do you have this in a large size" },
      { grammarNote: "💡 'Em va bé' = it fits me well. 'Em va petit/gran' = it's too small/big for me.", words: ["Això", "em", "va", "una", "mica", "gran"], correctOrder: "Això em va una mica gran", translation: "This is a bit big for me" },
      { grammarNote: "💡 'M'agrada' = I like. Color options: negre (black), blanc (white), vermell (red), blau (blue), verd (green).", words: ["M'agrada", "en", "color", "blau"], correctOrder: "M'agrada en color blau", translation: "I like it in blue" }
    ]
  }
},

// ─── LESSON 70: Weather & Seasons ──────────────────────────

{
  id: 70,
  title: "Weather & Seasons",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Weather", ca: "Temps", pronunciation: "TEHMS" },
    { en: "Sun", ca: "Sol", pronunciation: "SOHL" },
    { en: "Rain", ca: "Pluja", pronunciation: "PLOO-jah" },
    { en: "Wind", ca: "Vent", pronunciation: "BEHN" },
    { en: "Cold", ca: "Fred", pronunciation: "FREHT" },
    { en: "Hot", ca: "Calor", pronunciation: "kah-LOR" },
    { en: "Spring", ca: "Primavera", pronunciation: "pree-mah-BEH-rah" },
    { en: "Summer", ca: "Estiu", pronunciation: "ehs-tee-OO" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Quin ___ fa avui?", blank: "temps", options: ["temps", "sol", "fred", "calor"], correctIndex: 0, translation: "What's the weather like today?", explanation: "'Temps' = weather/time. 'Quin temps fa?' = What's the weather like?" },
      { sentence: "Fa molt ___", blank: "fred", options: ["sol", "fred", "vent", "pluja"], correctIndex: 1, translation: "It's very cold", explanation: "'Fred' = cold. 'Fa fred' = it's cold (literally: it makes cold)." },
      { sentence: "Està ___", blank: "plovent", options: ["plovent", "nevada", "soleada", "ventosa"], correctIndex: 0, translation: "It's raining", explanation: "'Plovent' = raining. 'Està plovent' = it's raining. 'Plou' also means it rains." },
      { sentence: "A l'___ fa calor", blank: "estiu", options: ["hivern", "primavera", "estiu", "tardor"], correctIndex: 2, translation: "In summer it's hot", explanation: "'Estiu' = summer. Seasons: primavera, estiu, tardor (autumn), hivern (winter)." }
    ],
    listenAndType: [
      { catalan: "Avui fa bon temps", english: "Today the weather is nice", pronunciation: "ah-BOO-ee fah bohn TEHMS" },
      { catalan: "Plou molt a Barcelona?", english: "Does it rain a lot in Barcelona?", pronunciation: "PLOH-oo MOHLT ah bar-seh-LOH-nah" },
      { catalan: "M'agrada la primavera", english: "I like spring", pronunciation: "mah-GRAH-dah lah pree-mah-BEH-rah" },
      { catalan: "Fa vent i fa fred", english: "It's windy and cold", pronunciation: "fah BEHN ee fah FREHT" }
    ],
    errorCorrection: [
      { sentence: "Qué tiempo hace?", errorWordIndex: 1, options: ["tiempo", "temps", "tiempo", "weather"], correctIndex: 1, translation: "What's the weather like?", explanation: "'Temps' is Catalan. 'Tiempo' is Spanish." },
      { sentence: "Hace mucho calor", errorWordIndex: 0, options: ["Hace", "Fa", "Fai", "Makes"], correctIndex: 1, translation: "It's very hot", explanation: "'Fa calor' is Catalan. 'Hace calor' is Spanish." },
      { sentence: "Está lloviendo", errorWordIndex: 0, options: ["Está", "Està", "Esta", "Is"], correctIndex: 1, translation: "It's raining", explanation: "'Està plovent' is Catalan. 'Está lloviendo' is Spanish." },
      { sentence: "Me gusta el verano", errorWordIndex: 2, options: ["verano", "estiu", "veran", "summer"], correctIndex: 1, translation: "I like summer", explanation: "'Estiu' is Catalan. 'Verano' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Weather verbs: 'Fa' + condition (fa fred, fa calor, fa vent, fa sol, fa mal temps).", words: ["Avui", "fa", "molt", "bon", "temps"], correctOrder: "Avui fa molt bon temps", translation: "Today the weather is very nice" },
      { grammarNote: "💡 'Plou' = it rains. 'Neva' = it snows. 'Està plovent/nevant' = it's raining/snowing (progressive).", words: ["A", "l'hivern", "neva", "a", "la", "muntanya"], correctOrder: "A l'hivern neva a la muntanya", translation: "In winter it snows in the mountains" },
      { grammarNote: "💡 Seasons with article: la primavera, l'estiu, la tardor, l'hivern. 'A la primavera' = in spring.", words: ["A", "la", "tardor", "els", "arbres", "perden", "les", "fulles"], correctOrder: "A la tardor els arbres perden les fulles", translation: "In autumn the trees lose their leaves" }
    ]
  }
},

// ─── LESSON 71: Sports & Exercise ──────────────────────────

{
  id: 71,
  title: "Sports & Exercise",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Sport", ca: "Esport", pronunciation: "ehs-PORT" },
    { en: "Football", ca: "Futbol", pronunciation: "FOOT-bohl" },
    { en: "To run", ca: "Córrer", pronunciation: "KOH-rehr" },
    { en: "To swim", ca: "Nedar", pronunciation: "neh-DAR" },
    { en: "Gym", ca: "Gimnàs", pronunciation: "jeem-NAHS" },
    { en: "Team", ca: "Equip", pronunciation: "eh-KEEP" },
    { en: "Match", ca: "Partit", pronunciation: "par-TEET" },
    { en: "To win", ca: "Guanyar", pronunciation: "gwahn-YAR" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "M'agrada jugar a ___", blank: "futbol", options: ["futbol", "bàsquet", "tennis", "natació"], correctIndex: 0, translation: "I like playing football", explanation: "'Futbol' = football/soccer. 'Jugar a futbol' = play football." },
      { sentence: "Vaig al ___ cada dia", blank: "gimnàs", options: ["partit", "equip", "gimnàs", "esport"], correctIndex: 2, translation: "I go to the gym every day", explanation: "'Gimnàs' = gym. 'Vaig al gimnàs' = I go to the gym." },
      { sentence: "El Barça va ___ el partit", blank: "guanyar", options: ["perdre", "guanyar", "jugar", "córrer"], correctIndex: 1, translation: "Barça won the match", explanation: "'Guanyar' = to win. 'Perdre' = to lose. 'Va guanyar' = won (past tense)." },
      { sentence: "M'agrada ___ al parc", blank: "córrer", options: ["nedar", "córrer", "jugar", "guanyar"], correctIndex: 1, translation: "I like running in the park", explanation: "'Córrer' = to run. 'Nedar' = to swim." }
    ],
    listenAndType: [
      { catalan: "Jugo a bàsquet cada dissabte", english: "I play basketball every Saturday", pronunciation: "JOO-goh ah BAHS-keht KAH-dah dee-SAH-teh" },
      { catalan: "El partit és a les vuit", english: "The match is at eight o'clock", pronunciation: "ehl par-TEET ehs ah lehs BWEET" },
      { catalan: "Faig exercici tres cops per setmana", english: "I exercise three times a week", pronunciation: "FAYCH eh-sehr-SEE-see TREHS KOHPS pehr seht-MAH-nah" },
      { catalan: "Quin és el teu esport preferit?", english: "What's your favorite sport?", pronunciation: "KEEN ehs ehl TEH-oo ehs-PORT preh-feh-REET" }
    ],
    errorCorrection: [
      { sentence: "Me gusta jugar al fútbol", errorWordIndex: 0, options: ["Me", "M'", "Ma", "I"], correctIndex: 1, translation: "I like playing football", explanation: "'M'agrada' is Catalan. 'Me gusta' is Spanish." },
      { sentence: "Voy al gimnasio", errorWordIndex: 0, options: ["Voy", "Vaig", "Vo", "Go"], correctIndex: 1, translation: "I go to the gym", explanation: "'Vaig' is Catalan (I go). 'Voy' is Spanish." },
      { sentence: "El equipo ganó el partido", errorWordIndex: 1, options: ["equipo", "equip", "equipe", "team"], correctIndex: 1, translation: "The team won the match", explanation: "'Equip' is Catalan. 'Equipo' is Spanish." },
      { sentence: "Hago ejercicio cada día", errorWordIndex: 0, options: ["Hago", "Faig", "Fago", "Do"], correctIndex: 1, translation: "I exercise every day", explanation: "'Faig' is Catalan. 'Hago' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Sports use 'jugar a': jugar a futbol, jugar a bàsquet, jugar a tennis.", words: ["M'agrada", "jugar", "a", "tennis"], correctOrder: "M'agrada jugar a tennis", translation: "I like playing tennis" },
      { grammarNote: "💡 'Fer esport' = to do sport. 'Fer exercici' = to exercise. Both use 'fer' (to do/make).", words: ["Faig", "esport", "cada", "matí"], correctOrder: "Faig esport cada matí", translation: "I do sport every morning" },
      { grammarNote: "💡 'Copa' = cup/trophy. 'Campionat' = championship. 'Lliga' = league.", words: ["El", "Barça", "ha", "guanyat", "la", "lliga"], correctOrder: "El Barça ha guanyat la lliga", translation: "Barça has won the league" }
    ]
  }
},

// ─── LESSON 72: Technology & Internet ───────────────────────

{
  id: 72,
  title: "Technology & Internet",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Computer", ca: "Ordinador", pronunciation: "or-dee-nah-DOR" },
    { en: "Internet", ca: "Internet", pronunciation: "een-tehr-NEHT" },
    { en: "WiFi", ca: "WiFi", pronunciation: "WEE-fee" },
    { en: "Password", ca: "Contrasenya", pronunciation: "kohn-trah-SEH-nyah" },
    { en: "Email", ca: "Correu electrònic", pronunciation: "koh-REH-oo eh-lehk-TROH-neek" },
    { en: "App", ca: "Aplicació", pronunciation: "ah-plee-kah-see-OH" },
    { en: "To download", ca: "Descarregar", pronunciation: "dehs-kah-reh-GAR" },
    { en: "Screen", ca: "Pantalla", pronunciation: "pahn-TAH-yah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Quin és el codi del ___?", blank: "WiFi", options: ["WiFi", "correu", "ordinador", "internet"], correctIndex: 0, translation: "What's the WiFi code?", explanation: "'WiFi' same in Catalan. 'Codi del WiFi' = WiFi password/code." },
      { sentence: "He oblidat la ___", blank: "contrasenya", options: ["pantalla", "contrasenya", "aplicació", "internet"], correctIndex: 1, translation: "I've forgotten the password", explanation: "'Contrasenya' = password. 'He oblidat' = I've forgotten." },
      { sentence: "Puc ___ aquesta aplicació?", blank: "descarregar", options: ["enviar", "descarregar", "obrir", "tancar"], correctIndex: 1, translation: "Can I download this app?", explanation: "'Descarregar' = to download. 'Pujar' = to upload." },
      { sentence: "L'___ no funciona", blank: "ordinador", options: ["ordinador", "internet", "WiFi", "pantalla"], correctIndex: 0, translation: "The computer doesn't work", explanation: "'Ordinador' = computer. 'No funciona' = doesn't work." }
    ],
    listenAndType: [
      { catalan: "Tens WiFi aquí?", english: "Do you have WiFi here?", pronunciation: "TEHNS WEE-fee ah-KEE" },
      { catalan: "Quina és la teva adreça electrònica?", english: "What's your email address?", pronunciation: "KEE-nah ehs lah TEH-bah ah-DREH-sah eh-lehk-TROH-nee-kah" },
      { catalan: "No puc connectar-me", english: "I can't connect", pronunciation: "noh POOK koh-nehk-TAR-meh" },
      { catalan: "La bateria està baixa", english: "The battery is low", pronunciation: "lah bah-teh-REE-ah ehs-TAH BAH-ee-shah" }
    ],
    errorCorrection: [
      { sentence: "Cuál es la contraseña del WiFi?", errorWordIndex: 0, options: ["Cuál", "Quin", "Cual", "What"], correctIndex: 1, translation: "What's the WiFi password?", explanation: "'Quin' is Catalan. 'Cuál' is Spanish." },
      { sentence: "Puedo descargar esta app?", errorWordIndex: 0, options: ["Puedo", "Puc", "Pued", "Can"], correctIndex: 1, translation: "Can I download this app?", explanation: "'Puc' is Catalan. 'Puedo' is Spanish." },
      { sentence: "El ordenador no funciona", errorWordIndex: 1, options: ["ordenador", "ordinador", "ordenador", "computer"], correctIndex: 1, translation: "The computer doesn't work", explanation: "'Ordinador' is Catalan. 'Ordenador' is Spanish." },
      { sentence: "Mi correo es...", errorWordIndex: 1, options: ["correo", "correu", "corre", "email"], correctIndex: 1, translation: "My email is...", explanation: "'Correu' is Catalan. 'Correo' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Connectar-se' = to connect (reflexive). 'No puc connectar-me' = I can't connect.", words: ["No", "puc", "connectar-me", "a", "internet"], correctOrder: "No puc connectar-me a internet", translation: "I can't connect to the internet" },
      { grammarNote: "💡 'Adreça electrònica' = email address. 'Correu electrònic' = email (the message).", words: ["Quina", "és", "la", "teva", "adreça", "electrònica"], correctOrder: "Quina és la teva adreça electrònica", translation: "What's your email address" },
      { grammarNote: "💡 'Càrrega' = charge/battery. 'Carregar' = to charge. 'La bateria s'està carregant' = battery is charging.", words: ["He", "de", "carregar", "el", "mòbil"], correctOrder: "He de carregar el mòbil", translation: "I have to charge my phone" }
    ]
  }
},

// ─── LESSON 73: Housing & Apartments ────────────────────────

{
  id: 73,
  title: "Housing & Apartments",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Apartment", ca: "Pis", pronunciation: "PEES" },
    { en: "Rent", ca: "Lloguer", pronunciation: "yoh-GEHR" },
    { en: "Landlord", ca: "Propietari", pronunciation: "proh-pee-eh-TAH-ree" },
    { en: "Furnished", ca: "Moblat", pronunciation: "moh-BLAHT" },
    { en: "Neighborhood", ca: "Barri", pronunciation: "BAH-ree" },
    { en: "Bedroom", ca: "Habitació", pronunciation: "ah-bee-tah-see-OH" },
    { en: "Kitchen", ca: "Cuina", pronunciation: "KWE-nah" },
    { en: "Bathroom", ca: "Bany", pronunciation: "BAHN-yee" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Busco un ___ a Barcelona", blank: "pis", options: ["pis", "casa", "barri", "lloguer"], correctIndex: 0, translation: "I'm looking for an apartment in Barcelona", explanation: "'Pis' = apartment/flat. 'Casa' = house." },
      { sentence: "Quant és el ___?", blank: "lloguer", options: ["pis", "lloguer", "barri", "propietari"], correctIndex: 1, translation: "How much is the rent?", explanation: "'Lloguer' = rent. 'Quant és el lloguer?' = How much is the rent?" },
      { sentence: "El pis està ___?", blank: "moblat", options: ["moblat", "buit", "ocupat", "lliure"], correctIndex: 0, translation: "Is the apartment furnished?", explanation: "'Moblat' = furnished. 'Sense mobles' or 'buit' = unfurnished/empty." },
      { sentence: "Quantes ___ té?", blank: "habitacions", options: ["cuines", "banys", "habitacions", "finestres"], correctIndex: 2, translation: "How many bedrooms does it have?", explanation: "'Habitacions' = bedrooms/rooms. Apartments described as: 1 habitació, 2 habitacions, etc." }
    ],
    listenAndType: [
      { catalan: "El pis té dues habitacions", english: "The apartment has two bedrooms", pronunciation: "ehl PEES teh DOO-ehs ah-bee-tah-see-OHNS" },
      { catalan: "M'agrada aquest barri", english: "I like this neighborhood", pronunciation: "mah-GRAH-dah ah-KESHT BAH-ree" },
      { catalan: "Quan puc veure el pis?", english: "When can I see the apartment?", pronunciation: "KWAHN POOK BEH-oo-reh ehl PEES" },
      { catalan: "Inclou els subministraments?", english: "Does it include utilities?", pronunciation: "een-KLOH-oo ehls soo-mee-nees-trah-MEHNS" }
    ],
    errorCorrection: [
      { sentence: "Busco un piso en Barcelona", errorWordIndex: 2, options: ["piso", "pis", "piso", "apartment"], correctIndex: 1, translation: "I'm looking for an apartment in Barcelona", explanation: "'Pis' is Catalan. 'Piso' is Spanish." },
      { sentence: "Cuánto es el alquiler?", errorWordIndex: 0, options: ["Cuánto", "Quant", "Cuanto", "How much"], correctIndex: 1, translation: "How much is the rent?", explanation: "'Quant' is Catalan. 'Cuánto' is Spanish." },
      { sentence: "El piso está amueblado?", errorWordIndex: 2, options: ["amueblado", "moblat", "amueblat", "furnished"], correctIndex: 1, translation: "Is the apartment furnished?", explanation: "'Moblat' is Catalan. 'Amueblado' is Spanish." },
      { sentence: "Tiene dos dormitorios", errorWordIndex: 2, options: ["dormitorios", "habitacions", "dormitoris", "bedrooms"], correctIndex: 1, translation: "It has two bedrooms", explanation: "'Habitacions' is Catalan. 'Dormitorios' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Llogar' = to rent. 'Llogar un pis' = rent an apartment. 'Lloguer' = rent (the noun).", words: ["Vull", "llogar", "un", "pis", "moblat"], correctOrder: "Vull llogar un pis moblat", translation: "I want to rent a furnished apartment" },
      { grammarNote: "💡 Apartment features: 'amb terrassa' (with terrace), 'exterior' (facing street), 'interior' (facing courtyard).", words: ["El", "pis", "té", "balcó", "i", "ascensor"], correctOrder: "El pis té balcó i ascensor", translation: "The apartment has a balcony and elevator" },
      { grammarNote: "💡 'Subministraments' = utilities (water, electricity, gas). 'Inclou' = it includes.", words: ["El", "lloguer", "inclou", "els", "subministraments"], correctOrder: "El lloguer inclou els subministraments", translation: "The rent includes utilities" }
    ]
  }
},

// ─── LESSON 74: Work & Office ──────────────────────────────

{
  id: 74,
  title: "Work & Office",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Work", ca: "Feina", pronunciation: "FEH-ee-nah" },
    { en: "Office", ca: "Oficina", pronunciation: "oh-fee-SEE-nah" },
    { en: "Meeting", ca: "Reunió", pronunciation: "reh-oo-nee-OH" },
    { en: "Boss", ca: "Cap", pronunciation: "KAHP" },
    { en: "Colleague", ca: "Company", pronunciation: "kohm-PAHN-yee" },
    { en: "Deadline", ca: "Data límit", pronunciation: "DAH-tah LEE-meet" },
    { en: "Project", ca: "Projecte", pronunciation: "proh-JEHK-teh" },
    { en: "Schedule", ca: "Horari", pronunciation: "oh-RAH-ree" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Tinc una ___ a les deu", blank: "reunió", options: ["feina", "reunió", "oficina", "projecte"], correctIndex: 1, translation: "I have a meeting at ten", explanation: "'Reunió' = meeting. 'Tinc una reunió' = I have a meeting." },
      { sentence: "Quin és el teu ___?", blank: "horari", options: ["projecte", "horari", "cap", "company"], correctIndex: 1, translation: "What's your schedule?", explanation: "'Horari' = schedule/timetable. 'Horari de feina' = work schedule." },
      { sentence: "El ___ és demà", blank: "projecte", options: ["horari", "projecte", "data límit", "reunió"], correctIndex: 1, translation: "The project is tomorrow", explanation: "'Projecte' = project. 'Data límit' = deadline." },
      { sentence: "La meva ___ és a l'Eixample", blank: "oficina", options: ["feina", "oficina", "reunió", "cap"], correctIndex: 1, translation: "My office is in Eixample", explanation: "'Oficina' = office. L'Eixample is a Barcelona neighborhood." }
    ],
    listenAndType: [
      { catalan: "Treballo en una empresa catalana", english: "I work at a Catalan company", pronunciation: "treh-BAH-yoh ehn OO-nah ehm-PREH-sah kah-tah-LAH-nah" },
      { catalan: "El meu company és molt simpàtic", english: "My colleague is very nice", pronunciation: "ehl MEH-oo kohm-PAHN-yee ehs MOHLT seem-PAH-teek" },
      { catalan: "Hem de lliurar el projecte divendres", english: "We have to deliver the project Friday", pronunciation: "EHM deh yee-oo-RAR ehl proh-JEHK-teh dee-BEHN-drehs" },
      { catalan: "Quin horari tens?", english: "What schedule do you have?", pronunciation: "KEEN oh-RAH-ree TEHNS" }
    ],
    errorCorrection: [
      { sentence: "Tengo una reunión", errorWordIndex: 0, options: ["Tengo", "Tinc", "Tenc", "Have"], correctIndex: 1, translation: "I have a meeting", explanation: "'Tinc' is Catalan. 'Tengo' is Spanish." },
      { sentence: "Trabajo en una oficina", errorWordIndex: 0, options: ["Trabajo", "Treballo", "Traballo", "Work"], correctIndex: 1, translation: "I work in an office", explanation: "'Treballo' is Catalan. 'Trabajo' is Spanish." },
      { sentence: "Mi jefe es muy bueno", errorWordIndex: 1, options: ["jefe", "cap", "jefe", "boss"], correctIndex: 1, translation: "My boss is very good", explanation: "'Cap' is Catalan (boss/head). 'Jefe' is Spanish." },
      { sentence: "El proyecto es para mañana", errorWordIndex: 1, options: ["proyecto", "projecte", "proyecto", "project"], correctIndex: 1, translation: "The project is for tomorrow", explanation: "'Projecte' is Catalan. 'Proyecto' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Treballar' = to work. 'Treballo a...' = I work at... 'Treballo de...' = I work as...", words: ["Treballo", "de", "nou", "a", "cinc"], correctOrder: "Treballo de nou a cinc", translation: "I work from nine to five" },
      { grammarNote: "💡 'Empresa' = company. 'Feina' = work/job. 'Lloc de feina' = workplace.", words: ["He", "de", "parlar", "amb", "el", "meu", "cap"], correctOrder: "He de parlar amb el meu cap", translation: "I have to speak with my boss" },
      { grammarNote: "💡 'Lliurar' = to deliver/submit. 'Data límit' = deadline. 'A temps' = on time.", words: ["Hem", "acabat", "el", "projecte", "a", "temps"], correctOrder: "Hem acabat el projecte a temps", translation: "We finished the project on time" }
    ]
  }
},

// ─── LESSON 75: Travel & Transportation ─────────────────────

{
  id: 75,
  title: "Travel & Transportation",
  module: "Intermediate",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Trip", ca: "Viatge", pronunciation: "bee-AH-jeh" },
    { en: "Train", ca: "Tren", pronunciation: "TREHN" },
    { en: "Bus", ca: "Autobús", pronunciation: "ow-toh-BOOS" },
    { en: "Metro", ca: "Metro", pronunciation: "MEH-troh" },
    { en: "Ticket", ca: "Bitllet", pronunciation: "beet-YEH" },
    { en: "Station", ca: "Estació", pronunciation: "ehs-tah-see-OH" },
    { en: "Platform", ca: "Andana", pronunciation: "ahn-DAH-nah" },
    { en: "Luggage", ca: "Equipatge", pronunciation: "eh-kee-PAH-jeh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "On puc comprar un ___?", blank: "bitllet", options: ["tren", "bitllet", "metro", "viatge"], correctIndex: 1, translation: "Where can I buy a ticket?", explanation: "'Bitllet' = ticket. 'Comprar un bitllet' = buy a ticket." },
      { sentence: "Quin ___ va a l'aeroport?", blank: "autobús", options: ["tren", "metro", "autobús", "taxi"], correctIndex: 2, translation: "Which bus goes to the airport?", explanation: "'Autobús' = bus. Aeroport = airport. Barcelona airport bus: Aerobús." },
      { sentence: "On és l'___?", blank: "estació", options: ["andana", "estació", "equipatge", "bitllet"], correctIndex: 1, translation: "Where is the station?", explanation: "'Estació' = station. 'Estació de tren' = train station." },
      { sentence: "De quina ___ surt el tren?", blank: "andana", options: ["estació", "andana", "línia", "metro"], correctIndex: 1, translation: "From which platform does the train leave?", explanation: "'Andana' = platform. 'Sortir' = to leave/depart." }
    ],
    listenAndType: [
      { catalan: "A quina hora surt el tren?", english: "What time does the train leave?", pronunciation: "ah KEE-nah OH-rah SORT ehl TREHN" },
      { catalan: "Vull un bitllet d'anada i tornada", english: "I want a return ticket", pronunciation: "BOOL oon beet-YEH dah-NAH-dah ee tor-NAH-dah" },
      { catalan: "Hem de fer transbord?", english: "Do we have to change?", pronunciation: "EHM deh FEHR trahns-BORD" },
      { catalan: "Quant triga el viatge?", english: "How long does the journey take?", pronunciation: "KWAHN TREE-gah ehl bee-AH-jeh" }
    ],
    errorCorrection: [
      { sentence: "Dónde puedo comprar un billete?", errorWordIndex: 0, options: ["Dónde", "On", "Donde", "Where"], correctIndex: 1, translation: "Where can I buy a ticket?", explanation: "'On' is Catalan. 'Dónde' is Spanish." },
      { sentence: "Qué autobús va al aeropuerto?", errorWordIndex: 0, options: ["Qué", "Quin", "Que", "Which"], correctIndex: 1, translation: "Which bus goes to the airport?", explanation: "'Quin' is Catalan. 'Qué' is Spanish." },
      { sentence: "A qué hora sale el tren?", errorWordIndex: 3, options: ["sale", "surt", "sal", "leaves"], correctIndex: 1, translation: "What time does the train leave?", explanation: "'Surt' is Catalan. 'Sale' is Spanish." },
      { sentence: "Tenemos que hacer transbordo?", errorWordIndex: 0, options: ["Tenemos", "Hem", "Tenim", "Have"], correctIndex: 1, translation: "Do we have to change?", explanation: "'Hem' is Catalan (we have). 'Tenemos' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Ticket types: 'anada' = one-way. 'anada i tornada' = return. 'Abonament' = pass/subscription.", words: ["Vull", "un", "bitllet", "d'anada", "i", "tornada"], correctOrder: "Vull un bitllet d'anada i tornada", translation: "I want a return ticket" },
      { grammarNote: "💡 'Fer transbord' = to change (trains/buses). 'Transbord a...' = change at...", words: ["Has", "de", "fer", "transbord", "a", "Sants"], correctOrder: "Has de fer transbord a Sants", translation: "You have to change at Sants" },
      { grammarNote: "💡 'Trigar' = to take time. 'Quant triga?' = How long does it take? 'Triga 20 minuts' = It takes 20 minutes.", words: ["El", "metro", "triga", "deu", "minuts"], correctOrder: "El metro triga deu minuts", translation: "The metro takes ten minutes" }
    ]
  }
},

// ─── LESSON 76: Past Tenses (Preterite vs Imperfect) ────────

{
  id: 76,
  title: "Past Tenses",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "I was (temporary)", ca: "Estava", pronunciation: "ehs-TAH-bah" },
    { en: "I was (permanent)", ca: "Era", pronunciation: "EH-rah" },
    { en: "I went", ca: "Vaig anar", pronunciation: "BAYCH ah-NAR" },
    { en: "I used to go", ca: "Anava", pronunciation: "ah-NAH-bah" },
    { en: "I did", ca: "Vaig fer", pronunciation: "BAYCH FEHR" },
    { en: "I used to do", ca: "Feia", pronunciation: "feh-EE-ah" },
    { en: "Yesterday", ca: "Ahir", pronunciation: "ah-EER" },
    { en: "Before", ca: "Abans", pronunciation: "ah-BAHNS" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ a Barcelona ahir", blank: "Vaig anar", options: ["Anava", "Vaig anar", "Aniré", "Vaig"], correctIndex: 1, translation: "I went to Barcelona yesterday", explanation: "'Vaig anar' = I went (completed action). Use for specific past events. 'Anava' = I used to go/was going." },
      { sentence: "Quan ___ petit, jugava molt", blank: "era", options: ["estava", "era", "vaig ser", "sóc"], correctIndex: 1, translation: "When I was little, I used to play a lot", explanation: "'Era' = I was (permanent state). Use for descriptions in the past. 'Estava' = I was (temporary)." },
      { sentence: "___ cansada després del viatge", blank: "Estava", options: ["Era", "Estava", "Vaig estar", "Sóc"], correctIndex: 1, translation: "I was tired after the trip", explanation: "'Estava' = I was (temporary condition). Tiredness is temporary, so use imperfect." },
      { sentence: "___ els deures ahir al vespre", blank: "Vaig fer", options: ["Feia", "Vaig fer", "Faré", "Faig"], correctIndex: 1, translation: "I did homework yesterday evening", explanation: "'Vaig fer' = I did (completed). Specific time (ahir) = use preterite." }
    ],
    listenAndType: [
      { catalan: "Abans vivia a Madrid", english: "I used to live in Madrid before", pronunciation: "ah-BAHNS bee-BEE-ah ah mah-DREED" },
      { catalan: "Ahir vaig veure una pel·lícula", english: "Yesterday I saw a movie", pronunciation: "ah-EER BAYCH BEH-oo-reh OO-nah peh-LEE-koo-lah" },
      { catalan: "Quan era jove, anava al gimnàs cada dia", english: "When I was young, I used to go to the gym every day", pronunciation: "KWAHN EH-rah JOH-beh ah-NAH-bah ahl jeem-NAHS KAH-dah DEE-ah" },
      { catalan: "Estava plovent quan vaig sortir", english: "It was raining when I left", pronunciation: "ehs-TAH-bah ploh-BEHN KWAHN BAYCH sor-TEER" }
    ],
    errorCorrection: [
      { sentence: "Ayer fui a Barcelona", errorWordIndex: 0, options: ["Ayer", "Ahir", "Ayer", "Yesterday"], correctIndex: 1, translation: "Yesterday I went to Barcelona", explanation: "'Ahir' is Catalan. 'Ayer' is Spanish." },
      { sentence: "Cuando era pequeño jugaba mucho", errorWordIndex: 0, options: ["Cuando", "Quan", "Cuand", "When"], correctIndex: 1, translation: "When I was little I used to play a lot", explanation: "'Quan' is Catalan. 'Cuando' is Spanish." },
      { sentence: "Estaba cansada después del viaje", errorWordIndex: 0, options: ["Estaba", "Estava", "Estab", "Was"], correctIndex: 1, translation: "I was tired after the trip", explanation: "'Estava' is Catalan. 'Estaba' is Spanish." },
      { sentence: "Hice los deberes ayer", errorWordIndex: 0, options: ["Hice", "Vaig fer", "Feia", "Did"], correctIndex: 1, translation: "I did homework yesterday", explanation: "'Vaig fer' is Catalan preterite. 'Hice' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Preterite (specific completed actions): 'vaig' + infinitive. Vaig menjar = I ate, vaig veure = I saw.", words: ["Ahir", "vaig", "menjar", "al", "restaurant"], correctOrder: "Ahir vaig menjar al restaurant", translation: "Yesterday I ate at the restaurant" },
      { grammarNote: "💡 Imperfect (habits, descriptions, ongoing): -ava/-ia endings. Menjava = I used to eat, vivia = I used to live.", words: ["Abans", "anava", "a", "l'escola", "caminant"], correctOrder: "Abans anava a l'escola caminant", translation: "I used to walk to school before" },
      { grammarNote: "💡 Combined: Imperfect for background + Preterite for action. 'Estava' (background) + 'vaig' (action).", words: ["Estava", "estudiant", "quan", "em", "vas", "trucar"], correctOrder: "Estava estudiant quan em vas trucar", translation: "I was studying when you called me" }
    ]
  }
},

// ─── LESSON 77: Future Tense ───────────────────────────────

{
  id: 77,
  title: "Future Tense",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "I will go", ca: "Aniré", pronunciation: "ah-nee-REH" },
    { en: "I will do", ca: "Faré", pronunciation: "fah-REH" },
    { en: "I will be", ca: "Seré", pronunciation: "seh-REH" },
    { en: "I will have", ca: "Tindré", pronunciation: "teen-DREH" },
    { en: "Tomorrow", ca: "Demà", pronunciation: "deh-MAH" },
    { en: "Next week", ca: "La setmana que ve", pronunciation: "lah seht-MAH-nah keh BEH" },
    { en: "Soon", ca: "Aviat", pronunciation: "ah-bee-AHT" },
    { en: "Later", ca: "Més tard", pronunciation: "MEHS TARD" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Demà ___ a la platja", blank: "aniré", options: ["aniré", "vaig anar", "anava", "vaig"], correctIndex: 0, translation: "Tomorrow I will go to the beach", explanation: "'Aniré' = I will go. Future tense: infinitive + é/às/à/em/eu/an." },
      { sentence: "___ els deures més tard", blank: "Faré", options: ["Feia", "Vaig fer", "Faré", "Faig"], correctIndex: 2, translation: "I will do homework later", explanation: "'Faré' = I will do. Regular future: fer → faré, parlar → parlaré." },
      { sentence: "L'any que ve ___ vint anys", blank: "tindré", options: ["tinc", "tenia", "tindré", "vaig tenir"], correctIndex: 2, translation: "Next year I will be twenty", explanation: "'Tindré' = I will have. 'Tenir X anys' = to be X years old." },
      { sentence: "Aviat ___ metge", blank: "seré", options: ["sóc", "era", "seré", "vaig ser"], correctIndex: 2, translation: "Soon I will be a doctor", explanation: "'Seré' = I will be. 'Ser' in future: seré, seràs, serà..." }
    ],
    listenAndType: [
      { catalan: "Demà aniré al metge", english: "Tomorrow I will go to the doctor", pronunciation: "deh-MAH ah-nee-REH ahl MEHT-jeh" },
      { catalan: "La setmana que ve començaré la feina nova", english: "Next week I will start the new job", pronunciation: "lah seht-MAH-nah keh BEH koh-mehn-sah-REH lah FEH-nah NOH-bah" },
      { catalan: "Quan tindràs les vacances?", english: "When will you have vacation?", pronunciation: "KWAHN teen-DRAHS lehs bah-KAHN-sehs" },
      { catalan: "Els estudiants faran l'examen divendres", english: "The students will take the exam Friday", pronunciation: "ehls ehs-too-dee-AHNS fah-RAHN lehk-SAH-mehn dee-BEHN-drehs" }
    ],
    errorCorrection: [
      { sentence: "Mañana iré a la playa", errorWordIndex: 0, options: ["Mañana", "Demà", "Mañan", "Tomorrow"], correctIndex: 1, translation: "Tomorrow I will go to the beach", explanation: "'Demà' is Catalan. 'Mañana' is Spanish." },
      { sentence: "Haré los deberes más tarde", errorWordIndex: 0, options: ["Haré", "Faré", "Fare", "Will do"], correctIndex: 1, translation: "I will do homework later", explanation: "'Faré' is Catalan. 'Haré' is Spanish." },
      { sentence: "El año que viene tendré veinte años", errorWordIndex: 1, options: ["año", "any", "anyo", "year"], correctIndex: 1, translation: "Next year I will be twenty", explanation: "'Any' is Catalan. 'Año' is Spanish." },
      { sentence: "Pronto seré médico", errorWordIndex: 0, options: ["Pronto", "Aviat", "Pront", "Soon"], correctIndex: 1, translation: "Soon I will be a doctor", explanation: "'Aviat' is Catalan. 'Pronto' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Future formation: infinitive + é/às/à/em/eu/an. Parlar → parlaré, menjar → menjaré, viure → viuré.", words: ["Demà", "estudiaré", "per", "l'examen"], correctOrder: "Demà estudiaré per l'examen", translation: "Tomorrow I will study for the exam" },
      { grammarNote: "💡 Irregular futures: fer→faré, tenir→tindré, ser→seré, poder→podré, venir→vindré, dir→diré.", words: ["No", "podré", "venir", "a", "la", "festa"], correctOrder: "No podré venir a la festa", translation: "I won't be able to come to the party" },
      { grammarNote: "💡 'Anar a' + infinitive also expresses near future. 'Vaig a estudiar' = I'm going to study.", words: ["Quant", "temps", "trigarà", "el", "viatge"], correctOrder: "Quant temps trigarà el viatge", translation: "How long will the journey take" }
    ]
  }
},

// ─── LESSON 78: Conditional Tense ──────────────────────────

{
  id: 78,
  title: "Conditional Tense",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "I would go", ca: "Aniria", pronunciation: "ah-nee-REE-ah" },
    { en: "I would like", ca: "M'agradaria", pronunciation: "mah-grah-dah-REE-ah" },
    { en: "I would do", ca: "Faria", pronunciation: "fah-REE-ah" },
    { en: "I would have", ca: "Tindria", pronunciation: "teen-DREE-ah" },
    { en: "If I could", ca: "Si pogués", pronunciation: "see poh-GEHS" },
    { en: "Maybe", ca: "Potser", pronunciation: "poht-SEHR" },
    { en: "It would be", ca: "Seria", pronunciation: "seh-REE-ah" },
    { en: "I should", ca: "Hauria de", pronunciation: "ow-REE-ah deh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ viatjar pel món", blank: "M'agradaria", options: ["M'agrada", "M'agradaria", "M'agradarà", "M'agradava"], correctIndex: 1, translation: "I would like to travel the world", explanation: "'M'agradaria' = I would like. Polite way to express desires. Conditional: -ia/-ies/-ia/-íem/-íeu/-ien." },
      { sentence: "Si pogués, ___ al concert", blank: "aniria", options: ["vaig", "anava", "aniré", "aniria"], correctIndex: 3, translation: "If I could, I would go to the concert", explanation: "'Aniria' = I would go. Conditional for hypothetical situations." },
      { sentence: "___ més feina si tingués temps", blank: "Faria", options: ["Faig", "Feia", "Faré", "Faria"], correctIndex: 3, translation: "I would do more work if I had time", explanation: "'Faria' = I would do. 'Si tingués' = if I had (subjunctive)." },
      { sentence: "___ estudiar més", blank: "Hauria de", options: ["He de", "Vaig", "Hauré de", "Hauria de"], correctIndex: 3, translation: "I should study more", explanation: "'Hauria de' = I should (conditional of 'haver de'). Softer than 'he de' (I have to)." }
    ],
    listenAndType: [
      { catalan: "Seria genial anar a Andorra", english: "It would be great to go to Andorra", pronunciation: "seh-REE-ah jeh-nee-AHL ah-NAR ah ahn-DOH-rah" },
      { catalan: "Potser podríem quedar demà", english: "Maybe we could meet tomorrow", pronunciation: "poht-SEHR poh-DREE-ehm keh-DAR deh-MAH" },
      { catalan: "Què faries si guanyessis la loteria?", english: "What would you do if you won the lottery?", pronunciation: "KEH fah-REE-ehs see gwahn-YEH-sees lah loh-teh-REE-ah" },
      { catalan: "M'agradaria aprendre més idiomes", english: "I would like to learn more languages", pronunciation: "mah-grah-dah-REE-ah ah-PREHN-dreh MEHS ee-dee-OH-mehs" }
    ],
    errorCorrection: [
      { sentence: "Me gustaría viajar por el mundo", errorWordIndex: 1, options: ["gustaría", "agradaria", "gustari", "would like"], correctIndex: 1, translation: "I would like to travel the world", explanation: "'M'agradaria' is Catalan. 'Me gustaría' is Spanish." },
      { sentence: "Si pudiera iría al concierto", errorWordIndex: 1, options: ["pudiera", "pogués", "pudier", "could"], correctIndex: 1, translation: "If I could I would go to the concert", explanation: "'Pogués' is Catalan subjunctive. 'Pudiera' is Spanish." },
      { sentence: "Haría más trabajo si tuviera tiempo", errorWordIndex: 0, options: ["Haría", "Faria", "Hari", "Would do"], correctIndex: 1, translation: "I would do more work if I had time", explanation: "'Faria' is Catalan. 'Haría' is Spanish." },
      { sentence: "Debería estudiar más", errorWordIndex: 0, options: ["Debería", "Hauria de", "Deberi", "Should"], correctIndex: 1, translation: "I should study more", explanation: "'Hauria de' is Catalan. 'Debería' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Conditional formation: infinitive + ia/ies/ia/íem/íeu/ien. Parlar → parlaria, menjar → menjaria.", words: ["M'agradaria", "viure", "a", "Barcelona"], correctOrder: "M'agradaria viure a Barcelona", translation: "I would like to live in Barcelona" },
      { grammarNote: "💡 'Si' + imperfect subjunctive + conditional. Si tingués diners, compraria un pis (If I had money, I would buy an apartment).", words: ["Què", "faries", "si", "fossis", "ric"], correctOrder: "Què faries si fossis ric", translation: "What would you do if you were rich" },
      { grammarNote: "💡 'Hauria de' = should (ought to). Softer advice than 'has de' (you have to). 'Podria' = could.", words: ["Hauria", "de", "trucar", "la", "meva", "mare"], correctOrder: "Hauria de trucar la meva mare", translation: "I should call my mother" }
    ]
  }
},

// ─── LESSON 79: Subjunctive Mood (Present) ──────────────────

{
  id: 79,
  title: "Subjunctive Mood",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "I hope that", ca: "Espero que", pronunciation: "ehs-PEH-roh keh" },
    { en: "I want you to", ca: "Vull que", pronunciation: "BOOL keh" },
    { en: "It's important that", ca: "És important que", pronunciation: "ehs eem-por-TAHN keh" },
    { en: "I doubt that", ca: "Dubto que", pronunciation: "DOOB-toh keh" },
    { en: "It's possible that", ca: "És possible que", pronunciation: "ehs poh-SEE-bleh keh" },
    { en: "Maybe", ca: "Potser", pronunciation: "poht-SEHR" },
    { en: "Although", ca: "Tot i que", pronunciation: "toht ee keh" },
    { en: "Unless", ca: "Tret que", pronunciation: "TREHT keh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Espero que ___ bé", blank: "vagis", options: ["vas", "anaves", "vagis", "aniràs"], correctIndex: 2, translation: "I hope you're doing well", explanation: "'Vagis' = you go (subjunctive). After 'espero que' use subjunctive. Indicative 'vas' won't work." },
      { sentence: "Vull que em ___", blank: "truquis", options: ["truques", "trucaràs", "truquis", "trucaves"], correctIndex: 2, translation: "I want you to call me", explanation: "'Truquis' = you call (subjunctive). After 'vull que' (I want that) use subjunctive." },
      { sentence: "És important que ___ català", blank: "parlis", options: ["parles", "parlaves", "parlis", "parlaràs"], correctIndex: 2, translation: "It's important that you speak Catalan", explanation: "'Parlis' = you speak (subjunctive). Expressions of importance trigger subjunctive." },
      { sentence: "Dubto que ___ demà", blank: "vingui", options: ["ve", "venia", "vingui", "vindrà"], correctIndex: 2, translation: "I doubt that he'll come tomorrow", explanation: "'Vingui' = he comes (subjunctive). Expressions of doubt use subjunctive." }
    ],
    listenAndType: [
      { catalan: "Espero que tinguis un bon dia", english: "I hope you have a good day", pronunciation: "ehs-PEH-roh keh TEEN-gees oon bohn DEE-ah" },
      { catalan: "És possible que plogui demà", english: "It's possible it will rain tomorrow", pronunciation: "ehs poh-SEE-bleh keh PLOH-ghee deh-MAH" },
      { catalan: "No crec que sigui veritat", english: "I don't think it's true", pronunciation: "noh KREHK keh SEE-ghee beh-ree-TAHT" },
      { catalan: "Vull que estudiem junts", english: "I want us to study together", pronunciation: "BOOL keh ehs-too-dee-EHM JOONTS" }
    ],
    errorCorrection: [
      { sentence: "Espero que vas bien", errorWordIndex: 2, options: ["vas", "vagis", "va", "go"], correctIndex: 1, translation: "I hope you're doing well", explanation: "After 'espero que' need subjunctive 'vagis', not indicative 'vas'." },
      { sentence: "Quiero que me llamas", errorWordIndex: 3, options: ["llamas", "truquis", "llames", "call"], correctIndex: 1, translation: "I want you to call me", explanation: "'Truquis' is Catalan subjunctive. 'Llamas' is Spanish indicative (wrong mood)." },
      { sentence: "Es importante que hablas catalán", errorWordIndex: 3, options: ["hablas", "parlis", "hables", "speak"], correctIndex: 1, translation: "It's important that you speak Catalan", explanation: "'Parlis' is Catalan subjunctive. 'Hablas' is Spanish indicative." },
      { sentence: "Dudo que viene mañana", errorWordIndex: 2, options: ["viene", "vingui", "venga", "comes"], correctIndex: 1, translation: "I doubt he'll come tomorrow", explanation: "'Vingui' is Catalan subjunctive. 'Viene' is Spanish indicative." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Subjunctive after: espero que, vull que, dubto que, és possible que, no crec que, abans que.", words: ["Espero", "que", "ho", "passis", "bé"], correctOrder: "Espero que ho passis bé", translation: "I hope you have a good time" },
      { grammarNote: "💡 Present subjunctive: parli, parlis, parli, parlem, parleu, parlin. From 1st person present: parlo → parli.", words: ["Vull", "que", "vinguis", "a", "la", "festa"], correctOrder: "Vull que vinguis a la festa", translation: "I want you to come to the party" },
      { grammarNote: "💡 'Tot i que' + subjunctive = even though (uncertainty). 'Tot i que' + indicative = although (certainty).", words: ["No", "crec", "que", "sigui", "una", "bona", "idea"], correctOrder: "No crec que sigui una bona idea", translation: "I don't think it's a good idea" }
    ]
  }
},

// ─── LESSON 80: Perfect Tenses ─────────────────────────────

{
  id: 80,
  title: "Perfect Tenses",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "I have done", ca: "He fet", pronunciation: "eh FEHT" },
    { en: "I have been", ca: "He estat", pronunciation: "eh ehs-TAHT" },
    { en: "I have gone", ca: "He anat", pronunciation: "eh ah-NAHT" },
    { en: "I have seen", ca: "He vist", pronunciation: "eh BEEST" },
    { en: "Already", ca: "Ja", pronunciation: "JAH" },
    { en: "Not yet", ca: "Encara no", pronunciation: "ehn-KAH-rah noh" },
    { en: "Ever", ca: "Mai", pronunciation: "MAHY" },
    { en: "Never", ca: "Mai", pronunciation: "MAHY" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ els deures", blank: "He fet", options: ["Vaig fer", "He fet", "Feia", "Faré"], correctIndex: 1, translation: "I have done homework", explanation: "'He fet' = I have done. Perfect tense: 'haver' + past participle. Use for recent past with present relevance." },
      { sentence: "No ___ a Andorra", blank: "he anat", options: ["vaig anar", "he anat", "anava", "aniré"], correctIndex: 1, translation: "I haven't been to Andorra", explanation: "'He anat' = I have gone/been. Mai = ever/never. 'Mai he anat' = I've never been." },
      { sentence: "Ja ___ aquesta pel·lícula", blank: "he vist", options: ["vaig veure", "he vist", "veia", "veuré"], correctIndex: 1, translation: "I've already seen this movie", explanation: "'He vist' = I have seen. 'Ja' = already. Perfect for experiences up to now." },
      { sentence: "___ estat a Barcelona?", blank: "Has", options: ["Vas", "Has", "Ets", "Anaves"], correctIndex: 1, translation: "Have you been to Barcelona?", explanation: "'Has estat' = you have been. Question: 'Has' + past participle + subject?" }
    ],
    listenAndType: [
      { catalan: "He viscut a Barcelona durant cinc anys", english: "I have lived in Barcelona for five years", pronunciation: "eh bees-KOOT ah bar-seh-LOH-nah doo-RAHNT SEEN-k AHN-yees" },
      { catalan: "Encara no he acabat la feina", english: "I haven't finished work yet", pronunciation: "ehn-KAH-rah noh eh ah-kah-BAHT lah FEH-nah" },
      { catalan: "Mai he menjat cargols", english: "I've never eaten snails", pronunciation: "MAHY eh mehn-JAHT kar-GOHLS" },
      { catalan: "Ja has estat a la Sagrada Família?", english: "Have you been to the Sagrada Família yet?", pronunciation: "JAH ahs ehs-TAHT ah lah sah-GRAH-dah fah-MEE-lee-ah" }
    ],
    errorCorrection: [
      { sentence: "He hecho los deberes", errorWordIndex: 1, options: ["hecho", "fet", "hech", "done"], correctIndex: 1, translation: "I have done homework", explanation: "'Fet' is Catalan past participle. 'Hecho' is Spanish." },
      { sentence: "No he ido a Andorra", errorWordIndex: 2, options: ["ido", "anat", "id", "gone"], correctIndex: 1, translation: "I haven't been to Andorra", explanation: "'Anat' is Catalan past participle of 'anar'. 'Ido' is Spanish." },
      { sentence: "Ya he visto esta película", errorWordIndex: 0, options: ["Ya", "Ja", "Ya", "Already"], correctIndex: 1, translation: "I've already seen this movie", explanation: "'Ja' is Catalan. 'Ya' is Spanish." },
      { sentence: "Has estado en Barcelona?", errorWordIndex: 1, options: ["estado", "estat", "estad", "been"], correctIndex: 1, translation: "Have you been to Barcelona?", explanation: "'Estat' is Catalan past participle. 'Estado' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Perfect tense: haver (he/has/ha/hem/heu/han) + past participle (-at, -ut, -it). He parlat, has menjat, ha viscut.", words: ["He", "viscut", "aquí", "tota", "la", "vida"], correctOrder: "He viscut aquí tota la vida", translation: "I have lived here all my life" },
      { grammarNote: "💡 Irregular participles: fer→fet, veure→vist, dir→dit, posar→post, escriure→escrit, obrir→obert.", words: ["Han", "obert", "un", "nou", "restaurant"], correctOrder: "Han obert un nou restaurant", translation: "They have opened a new restaurant" },
      { grammarNote: "💡 'Ja' = already. 'Encara no' = not yet. 'Mai' = ever/never (with 'no' = never, without = ever in questions).", words: ["Encara", "no", "hem", "dinat"], correctOrder: "Encara no hem dinat", translation: "We haven't had lunch yet" }
    ]
  }
},

// ─── LESSON 81: Passive Voice ──────────────────────────────

{
  id: 81,
  title: "Passive Voice",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "It is said", ca: "Es diu", pronunciation: "ehs DEE-oo" },
    { en: "It is done", ca: "Es fa", pronunciation: "ehs FAH" },
    { en: "It is known", ca: "Es coneix", pronunciation: "ehs koh-NAYSH" },
    { en: "It was built", ca: "Va ser construït", pronunciation: "bah SEHR kohns-troo-EET" },
    { en: "By", ca: "Per", pronunciation: "PEHR" },
    { en: "It is believed", ca: "Es creu", pronunciation: "ehs KREH-oo" },
    { en: "One can", ca: "Es pot", pronunciation: "ehs POHT" },
    { en: "One must", ca: "S'ha de", pronunciation: "sah deh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Aquí ___ català", blank: "es parla", options: ["es parla", "parlen", "parla", "parlant"], correctIndex: 0, translation: "Catalan is spoken here", explanation: "'Es parla' = it is spoken. Passive 'es' + 3rd person verb. Most common passive in Catalan." },
      { sentence: "La casa ___ construïda el 1900", blank: "va ser", options: ["va ser", "és", "estava", "ha estat"], correctIndex: 0, translation: "The house was built in 1900", explanation: "'Va ser construïda' = was built. 'Ser' + past participle for passive (formal)." },
      { sentence: "___ que plourà demà", blank: "Es diu", options: ["Diu", "Es diu", "Diuen", "Està dit"], correctIndex: 1, translation: "It is said it will rain tomorrow", explanation: "'Es diu' = it is said (literally: one says). Impersonal passive." },
      { sentence: "El llibre fou escrit ___ Mercè Rodoreda", blank: "per", options: ["de", "per", "amb", "sense"], correctIndex: 1, translation: "The book was written by Mercè Rodoreda", explanation: "'Per' = by (agent in passive). Use after passive constructions." }
    ],
    listenAndType: [
      { catalan: "Es ven aquest pis", english: "This apartment is for sale", pronunciation: "ehs BEHN ah-KESHT PEES" },
      { catalan: "La Sagrada Família va ser dissenyada per Gaudí", english: "The Sagrada Família was designed by Gaudí", pronunciation: "lah sah-GRAH-dah fah-MEE-lee-ah bah SEHR dee-sehn-YAH-dah pehr gow-DEE" },
      { catalan: "Es pot aparcar aquí?", english: "Can one park here?", pronunciation: "ehs POHT ah-par-KAR ah-KEE" },
      { catalan: "S'ha de pagar abans d'entrar", english: "One must pay before entering", pronunciation: "sah deh pah-GAR ah-BAHNS dehn-TRAR" }
    ],
    errorCorrection: [
      { sentence: "Aquí se habla catalán", errorWordIndex: 1, options: ["se", "es", "se", "one"], correctIndex: 1, translation: "Catalan is spoken here", explanation: "'Es parla' is Catalan impersonal. 'Se habla' is Spanish." },
      { sentence: "La casa fue construida en 1900", errorWordIndex: 1, options: ["fue", "va ser", "fou", "was"], correctIndex: 1, translation: "The house was built in 1900", explanation: "'Va ser' is Catalan passive. 'Fue' is Spanish." },
      { sentence: "Se dice que lloverá mañana", errorWordIndex: 0, options: ["Se", "Es", "Se", "It"], correctIndex: 1, translation: "It is said it will rain tomorrow", explanation: "'Es diu' is Catalan. 'Se dice' is Spanish." },
      { sentence: "El libro fue escrito por Mercè Rodoreda", errorWordIndex: 1, options: ["fue", "va ser", "fou", "was"], correctIndex: 1, translation: "The book was written by Mercè Rodoreda", explanation: "'Va ser escrit' is Catalan. 'Fue escrito' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Impersonal 'es' + verb (most common passive): es parla, es fa, es pot, es diu, es creu, es ven.", words: ["Aquí", "es", "menja", "molt", "bé"], correctOrder: "Aquí es menja molt bé", translation: "One eats very well here" },
      { grammarNote: "💡 'Ser' passive (formal): ser + past participle. El castell va ser construït, la carta fou escrita.", words: ["El", "monument", "va", "ser", "inaugurat", "ahir"], correctOrder: "El monument va ser inaugurat ahir", translation: "The monument was inaugurated yesterday" },
      { grammarNote: "💡 'Es pot' = one can. 'S'ha de' = one must. 'Es diu' = it is said. 'Es creu' = it is believed.", words: ["No", "es", "pot", "fumar", "aquí"], correctOrder: "No es pot fumar aquí", translation: "One cannot smoke here" }
    ]
  }
},

// ─── LESSON 82: Comparatives & Superlatives ─────────────────

{
  id: 82,
  title: "Comparatives & Superlatives",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "More than", ca: "Més que", pronunciation: "MEHS keh" },
    { en: "Less than", ca: "Menys que", pronunciation: "MEHN-yees keh" },
    { en: "As... as", ca: "Tan... com", pronunciation: "TAHN... KOHM" },
    { en: "Better", ca: "Millor", pronunciation: "mee-YOR" },
    { en: "Worse", ca: "Pitjor", pronunciation: "pee-JHOR" },
    { en: "The best", ca: "El millor", pronunciation: "ehl mee-YOR" },
    { en: "The worst", ca: "El pitjor", pronunciation: "ehl pee-JHOR" },
    { en: "The most", ca: "El més", pronunciation: "ehl MEHS" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Barcelona és ___ gran que Girona", blank: "més", options: ["més", "menys", "tan", "el més"], correctIndex: 0, translation: "Barcelona is bigger than Girona", explanation: "'Més... que' = more... than. 'Més gran que' = bigger than." },
      { sentence: "Aquest restaurant és ___ bo de la ciutat", blank: "el millor", options: ["millor", "el millor", "més bo", "el més bo"], correctIndex: 1, translation: "This restaurant is the best in the city", explanation: "'El millor' = the best (superlative). Don't use 'el més bo'." },
      { sentence: "Sóc ___ alt com tu", blank: "tan", options: ["més", "menys", "tan", "el més"], correctIndex: 2, translation: "I'm as tall as you", explanation: "'Tan... com' = as... as (equality). 'Tan alt com' = as tall as." },
      { sentence: "Avui fa ___ fred que ahir", blank: "menys", options: ["més", "menys", "tan", "el menys"], correctIndex: 1, translation: "Today it's less cold than yesterday", explanation: "'Menys... que' = less... than. 'Menys fred que' = less cold than." }
    ],
    listenAndType: [
      { catalan: "El Barça és el millor equip del món", english: "Barça is the best team in the world", pronunciation: "ehl BAR-sah ehs ehl mee-YOR eh-KEEP dehl MOHN" },
      { catalan: "Aquesta casa és més cara que l'altra", english: "This house is more expensive than the other", pronunciation: "ah-KEHS-tah KAH-sah ehs MEHS KAH-rah keh LAHL-trah" },
      { catalan: "No sóc tan jove com abans", english: "I'm not as young as before", pronunciation: "noh SOHK tahn JOH-beh kohm ah-BAHNS" },
      { catalan: "Aquest és el dia més llarg de l'any", english: "This is the longest day of the year", pronunciation: "ah-KESHT ehs ehl DEE-ah MEHS YARK deh LAHN-yee" }
    ],
    errorCorrection: [
      { sentence: "Barcelona es más grande que Girona", errorWordIndex: 2, options: ["más", "més", "mas", "more"], correctIndex: 1, translation: "Barcelona is bigger than Girona", explanation: "'Més' is Catalan. 'Más' is Spanish." },
      { sentence: "Este restaurante es el mejor de la ciudad", errorWordIndex: 3, options: ["mejor", "millor", "mejo", "best"], correctIndex: 1, translation: "This restaurant is the best in the city", explanation: "'Millor' is Catalan. 'Mejor' is Spanish." },
      { sentence: "Soy tan alto como tú", errorWordIndex: 0, options: ["Soy", "Sóc", "So", "Am"], correctIndex: 1, translation: "I'm as tall as you", explanation: "'Sóc' is Catalan. 'Soy' is Spanish." },
      { sentence: "Hoy hace menos frío que ayer", errorWordIndex: 2, options: ["menos", "menys", "meno", "less"], correctIndex: 1, translation: "Today it's less cold than yesterday", explanation: "'Menys' is Catalan. 'Menos' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Comparative: més/menys + adjective + que. Barcelona és més gran que Tarragona.", words: ["Aquest", "llibre", "és", "més", "interessant", "que", "l'altre"], correctOrder: "Aquest llibre és més interessant que l'altre", translation: "This book is more interesting than the other" },
      { grammarNote: "💡 Superlative: el/la + més/menys + adjective + de. La casa més gran de la ciutat = the biggest house in the city.", words: ["És", "la", "platja", "més", "bonica", "de", "Catalunya"], correctOrder: "És la platja més bonica de Catalunya", translation: "It's the most beautiful beach in Catalonia" },
      { grammarNote: "💡 Irregular: bon→millor (better), mal→pitjor (worse), gran→major (older/bigger), petit→menor (younger/smaller).", words: ["Aquest", "vi", "és", "pitjor", "que", "l'altre"], correctOrder: "Aquest vi és pitjor que l'altre", translation: "This wine is worse than the other" }
    ]
  }
},

// ─── LESSON 83: Reported Speech ────────────────────────────

{
  id: 83,
  title: "Reported Speech",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "He said that", ca: "Va dir que", pronunciation: "bah DEER keh" },
    { en: "She told me", ca: "Em va dir", pronunciation: "ehm bah DEER" },
    { en: "They asked if", ca: "Van preguntar si", pronunciation: "bahn preh-goon-TAR see" },
    { en: "He explained that", ca: "Va explicar que", pronunciation: "bah ehks-plee-KAR keh" },
    { en: "She replied that", ca: "Va respondre que", pronunciation: "bah rehs-POHN-dreh keh" },
    { en: "According to", ca: "Segons", pronunciation: "seh-GOHNS" },
    { en: "It seems that", ca: "Sembla que", pronunciation: "SEHM-blah keh" },
    { en: "I heard that", ca: "He sentit que", pronunciation: "eh sehn-TEET keh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Em ___ que vindria", blank: "va dir", options: ["diu", "va dir", "dirà", "diria"], correctIndex: 1, translation: "He told me he would come", explanation: "'Va dir' = said/told (past). In reported speech, tense shifts back: 'vindré' → 'vindria'." },
      { sentence: "Van ___ si volia anar", blank: "preguntar", options: ["dir", "preguntar", "respondre", "explicar"], correctIndex: 1, translation: "They asked if I wanted to go", explanation: "'Preguntar si' = to ask if/whether. For reported questions." },
      { sentence: "___ la professora, l'examen és difícil", blank: "Segons", options: ["Diu", "Segons", "Per", "Amb"], correctIndex: 1, translation: "According to the teacher, the exam is difficult", explanation: "'Segons' = according to. Use to report information from a source." },
      { sentence: "___ que plourà", blank: "Sembla", options: ["Diu", "Dir", "Sembla", "Segons"], correctIndex: 2, translation: "It seems it will rain", explanation: "'Sembla que' = it seems that. For reporting impressions/appearance." }
    ],
    listenAndType: [
      { catalan: "Va dir que estava cansat", english: "He said he was tired", pronunciation: "bah DEER keh ehs-TAH-bah kahn-SAHT" },
      { catalan: "Em van preguntar d'on era", english: "They asked me where I was from", pronunciation: "ehm bahn preh-goon-TAR DOHN EH-rah" },
      { catalan: "Va explicar que no podia venir", english: "He explained that he couldn't come", pronunciation: "bah ehks-plee-KAR keh noh poh-DEE-ah beh-NEER" },
      { catalan: "He sentit que han obert una botiga nova", english: "I heard they've opened a new shop", pronunciation: "eh sehn-TEET keh ahn oh-BEHRT OO-nah boh-TEE-gah NOH-bah" }
    ],
    errorCorrection: [
      { sentence: "Me dijo que vendría", errorWordIndex: 0, options: ["Me", "Em", "Ma", "Me"], correctIndex: 1, translation: "He told me he would come", explanation: "'Em va dir' is Catalan. 'Me dijo' is Spanish." },
      { sentence: "Preguntaron si quería ir", errorWordIndex: 0, options: ["Preguntaron", "Van preguntar", "Preguntaren", "Asked"], correctIndex: 1, translation: "They asked if I wanted to go", explanation: "'Van preguntar' is Catalan. 'Preguntaron' is Spanish." },
      { sentence: "Según la profesora el examen es difícil", errorWordIndex: 0, options: ["Según", "Segons", "Segun", "According"], correctIndex: 1, translation: "According to the teacher the exam is difficult", explanation: "'Segons' is Catalan. 'Según' is Spanish." },
      { sentence: "Parece que lloverá", errorWordIndex: 0, options: ["Parece", "Sembla", "Pareix", "Seems"], correctIndex: 1, translation: "It seems it will rain", explanation: "'Sembla' is Catalan. 'Parece' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Reported statements: 'Va dir que' + shift tense back. 'Vinc' → 'Va dir que venia'. 'Vindré' → 'Va dir que vindria'.", words: ["Va", "dir", "que", "estava", "ocupat"], correctOrder: "Va dir que estava ocupat", translation: "He said he was busy" },
      { grammarNote: "💡 Reported questions: 'Va preguntar' + question word + statement order. Què fas? → Va preguntar què feia.", words: ["Em", "van", "preguntar", "com", "em", "deia"], correctOrder: "Em van preguntar com em deia", translation: "They asked me what my name was" },
      { grammarNote: "💡 Yes/no questions use 'si': Vindràs? → Va preguntar si vindria. Commands: 'Va dir que' + subjunctive.", words: ["Va", "preguntar", "si", "tenia", "gana"], correctOrder: "Va preguntar si tenia gana", translation: "He asked if I was hungry" }
    ]
  }
},

// ─── LESSON 84: Idiomatic Expressions ──────────────────────

{
  id: 84,
  title: "Idiomatic Expressions",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "It's raining cats and dogs", ca: "Plou a bots i barrals", pronunciation: "PLOH-oo ah BOHTS ee bah-RAHLS" },
    { en: "To cost an arm and a leg", ca: "Costar un ull de la cara", pronunciation: "kohs-TAR oon OOY deh lah KAH-rah" },
    { en: "To be on cloud nine", ca: "Estar al cel", pronunciation: "ehs-TAR ahl SEHL" },
    { en: "To pull someone's leg", ca: "Prendre el pèl", pronunciation: "PREHN-dreh ehl PEHL" },
    { en: "Piece of cake", ca: "Bufar i fer ampolles", pronunciation: "boo-FAR ee fehr ahm-POH-yehs" },
    { en: "To be broke", ca: "No tenir ni cinc", pronunciation: "noh teh-NEER nee SEEN-k" },
    { en: "To be fed up", ca: "Estar tip", pronunciation: "ehs-TAR TEEP" },
    { en: "To get nervous", ca: "Posar-se nerviós", pronunciation: "poh-SAR-seh nehr-bee-OHS" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Avui plou ___", blank: "a bots i barrals", options: ["molt", "a bots i barrals", "força", "una mica"], correctIndex: 1, translation: "Today it's raining cats and dogs", explanation: "'Plou a bots i barrals' = it's raining heavily (literally: buckets and barrels)." },
      { sentence: "Aquest cotxe costa ___", blank: "un ull de la cara", options: ["molt", "car", "un ull de la cara", "poc"], correctIndex: 2, translation: "This car costs an arm and a leg", explanation: "'Costar un ull de la cara' = very expensive (literally: cost an eye from the face)." },
      { sentence: "Em prens ___?", blank: "el pèl", options: ["el peu", "el pèl", "la mà", "el cap"], correctIndex: 1, translation: "Are you pulling my leg?", explanation: "'Prendre el pèl' = to pull someone's leg/tease (literally: take the hair)." },
      { sentence: "Estic ___ d'aquesta situació", blank: "tip", options: ["content", "tip", "cansat", "ocupat"], correctIndex: 1, translation: "I'm fed up with this situation", explanation: "'Estar tip' = to be fed up/had enough." }
    ],
    listenAndType: [
      { catalan: "Això és bufar i fer ampolles", english: "That's a piece of cake", pronunciation: "ah-SHOH ehs boo-FAR ee fehr ahm-POH-yehs" },
      { catalan: "Estic al cel amb aquesta notícia", english: "I'm over the moon with this news", pronunciation: "ehs-TEEK ahl SEHL ahm ah-KEHS-tah noh-TEE-see-ah" },
      { catalan: "No tinc ni cinc aquests dies", english: "I'm completely broke these days", pronunciation: "noh TEEN-k nee SEEN-k ah-KESTS DEE-ehs" },
      { catalan: "Em poso nerviós abans dels exàmens", english: "I get nervous before exams", pronunciation: "ehm POH-zoh nehr-bee-OHS ah-BAHNS dehls ehk-SAH-mehns" }
    ],
    errorCorrection: [
      { sentence: "Hoy llueve a cántaros", errorWordIndex: 2, options: ["cántaros", "bots i barrals", "cantaros", "buckets"], correctIndex: 1, translation: "Today it's raining cats and dogs", explanation: "'Plou a bots i barrals' is Catalan idiom. 'Llueve a cántaros' is Spanish." },
      { sentence: "Este coche cuesta un ojo de la cara", errorWordIndex: 3, options: ["ojo", "ull", "oj", "eye"], correctIndex: 1, translation: "This car costs an arm and a leg", explanation: "'Un ull de la cara' is Catalan. 'Un ojo de la cara' is Spanish." },
      { sentence: "Me tomas el pelo?", errorWordIndex: 2, options: ["pelo", "pèl", "pel", "hair"], correctIndex: 1, translation: "Are you pulling my leg?", explanation: "'Prendre el pèl' is Catalan. 'Tomar el pelo' is Spanish." },
      { sentence: "Estoy harto de esta situación", errorWordIndex: 1, options: ["harto", "tip", "hart", "fed up"], correctIndex: 1, translation: "I'm fed up with this situation", explanation: "'Estar tip' is Catalan. 'Estar harto' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Weather idioms: 'Plou a bots i barrals' = pouring rain. 'Fa un fred que pela' = freezing cold.", words: ["Plou", "tant", "que", "no", "es", "veu", "res"], correctOrder: "Plou tant que no es veu res", translation: "It's raining so much you can't see anything" },
      { grammarNote: "💡 Money idioms: 'No tenir ni cinc' = broke. 'Costar un ull de la cara' = very expensive. 'Tirar la casa per la finestra' = spare no expense.", words: ["Aquest", "restaurant", "costa", "un", "ull", "de", "la", "cara"], correctOrder: "Aquest restaurant costa un ull de la cara", translation: "This restaurant costs an arm and a leg" },
      { grammarNote: "💡 Emotion idioms: 'Estar al cel' = ecstatic. 'Estar tip' = fed up. 'Prendre el pèl' = tease/joke.", words: ["No", "em", "prenguis", "el", "pèl"], correctOrder: "No em prenguis el pèl", translation: "Don't pull my leg" }
    ]
  }
},

// ─── LESSON 85: Formal vs Informal Register ─────────────────

{
  id: 85,
  title: "Formal vs Informal",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "You (formal)", ca: "Vostè", pronunciation: "bohs-TEH" },
    { en: "You (plural formal)", ca: "Vostès", pronunciation: "bohs-TEHS" },
    { en: "Could you (formal)", ca: "Podria", pronunciation: "poh-DREE-ah" },
    { en: "Would you like", ca: "Li agradaria", pronunciation: "lee ah-grah-dah-REE-ah" },
    { en: "Please (formal)", ca: "Si us plau", pronunciation: "see OOS PLOW" },
    { en: "Excuse me (formal)", ca: "Perdoni", pronunciation: "pehr-DOH-nee" },
    { en: "Thank you (formal)", ca: "Moltes gràcies", pronunciation: "MOHL-tehs GRAH-see-ehs" },
    { en: "Sir/Madam", ca: "Senyor/Senyora", pronunciation: "sehn-YOR/sehn-YOH-rah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ m'ajudar?", blank: "Podria", options: ["Pots", "Podria", "Podies", "Puguis"], correctIndex: 1, translation: "Could you help me? (formal)", explanation: "'Podria' = could you (formal, conditional). Use with 'vostè' for formal situations." },
      { sentence: "___, on és el banc?", blank: "Perdoni", options: ["Perdona", "Perdoni", "Perdo", "Disculpa"], correctIndex: 1, translation: "Excuse me, where is the bank? (formal)", explanation: "'Perdoni' = excuse me (formal). 'Perdona' = informal. Use formal with strangers/elderly." },
      { sentence: "Li ___ un cafè?", blank: "agradaria", options: ["agrada", "agradaria", "agradarà", "agradava"], correctIndex: 1, translation: "Would you like a coffee? (formal)", explanation: "'Li agradaria' = would you like (formal). 'T'agradaria' = informal." },
      { sentence: "___ molt amable", blank: "És", options: ["Ets", "És", "Eres", "Està"], correctIndex: 1, translation: "You're very kind (formal)", explanation: "'És' goes with 'vostè'. 'Ets' goes with 'tu' (informal)." }
    ],
    listenAndType: [
      { catalan: "Bon dia, senyor Martí", english: "Good morning, Mr. Martí", pronunciation: "bohn DEE-ah sehn-YOR mar-TEE" },
      { catalan: "Vostè parla català molt bé", english: "You speak Catalan very well (formal)", pronunciation: "bohs-TEH PAR-lah kah-tah-LAH mohlt BEH" },
      { catalan: "Podria repetir-ho si us plau?", english: "Could you repeat that please? (formal)", pronunciation: "poh-DREE-ah reh-peh-TEER-oh see OOS PLOW" },
      { catalan: "Li puc oferir alguna cosa més?", english: "Can I offer you anything else? (formal)", pronunciation: "lee POOK oh-feh-REER ahl-GOO-nah KOH-sah MEHS" }
    ],
    errorCorrection: [
      { sentence: "Tú hablas catalán muy bien", errorWordIndex: 0, options: ["Tú", "Vostè", "Tu", "You"], correctIndex: 1, translation: "You speak Catalan very well (formal)", explanation: "'Vostè parla' is formal Catalan. 'Tú hablas' is Spanish informal." },
      { sentence: "Podrías ayudarme?", errorWordIndex: 0, options: ["Podrías", "Podria", "Podries", "Could"], correctIndex: 1, translation: "Could you help me? (formal)", explanation: "'Podria' is Catalan formal. 'Podrías' is Spanish informal." },
      { sentence: "Disculpa dónde está el banco?", errorWordIndex: 0, options: ["Disculpa", "Perdoni", "Disculp", "Excuse"], correctIndex: 1, translation: "Excuse me where is the bank? (formal)", explanation: "'Perdoni' is Catalan formal. 'Disculpa' is Spanish informal." },
      { sentence: "Te gustaría un café?", errorWordIndex: 0, options: ["Te", "Li", "T'", "You"], correctIndex: 1, translation: "Would you like a coffee? (formal)", explanation: "'Li agradaria' is Catalan formal. 'Te gustaría' is Spanish informal." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Vostè' (formal singular) + 3rd person verb. 'Tu' (informal) + 2nd person verb. Vostè parla vs Tu parles.", words: ["Vostè", "podria", "signar", "aquí", "si", "us", "plau"], correctOrder: "Vostè podria signar aquí si us plau", translation: "Could you sign here please (formal)" },
      { grammarNote: "💡 Formal pronouns: li (to you), el/la (you, direct object), vostè (you, subject). Use in business, with strangers, elderly.", words: ["Li", "puc", "ajudar", "en", "alguna", "cosa"], correctOrder: "Li puc ajudar en alguna cosa", translation: "Can I help you with something (formal)" },
      { grammarNote: "💡 Formal phrases: 'Perdoni' (excuse me), 'Moltes gràcies' (thank you), 'De res' (you're welcome), 'Bon dia, senyor/senyora'.", words: ["Moltes", "gràcies", "per", "la", "seva", "ajuda"], correctOrder: "Moltes gràcies per la seva ajuda", translation: "Thank you very much for your help (formal)" }
    ]
  }
},

// ─── LESSON 86: Business Meetings ───────────────────────────

{
  id: 86,
  title: "Business Meetings",
  module: "Professional",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Agenda", ca: "Ordre del dia", pronunciation: "OR-dreh dehl DEE-ah" },
    { en: "To present", ca: "Presentar", pronunciation: "preh-zehn-TAR" },
    { en: "Proposal", ca: "Proposta", pronunciation: "proh-POHS-tah" },
    { en: "To agree", ca: "Estar d'acord", pronunciation: "ehs-TAR dah-KORD" },
    { en: "Deadline", ca: "Data límit", pronunciation: "DAH-tah LEE-meet" },
    { en: "Budget", ca: "Pressupost", pronunciation: "preh-soo-POHST" },
    { en: "To postpone", ca: "Ajornar", pronunciation: "ah-jor-NAR" },
    { en: "Minutes", ca: "Acta", pronunciation: "AHK-tah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Quin és l'___ de la reunió?", blank: "ordre del dia", options: ["acta", "ordre del dia", "pressupost", "proposta"], correctIndex: 1, translation: "What's the meeting agenda?", explanation: "'Ordre del dia' = agenda (literally: order of the day). Essential for organized meetings." },
      { sentence: "Hem de ___ la proposta", blank: "presentar", options: ["ajornar", "presentar", "estar", "fer"], correctIndex: 1, translation: "We have to present the proposal", explanation: "'Presentar' = to present. 'Presentar una proposta' = present a proposal." },
      { sentence: "Estic ___ amb aquesta idea", blank: "d'acord", options: ["segur", "d'acord", "content", "ocupat"], correctIndex: 1, translation: "I agree with this idea", explanation: "'Estar d'acord' = to agree. 'No estic d'acord' = I disagree." },
      { sentence: "Quin és el ___?", blank: "pressupost", options: ["cost", "pressupost", "preu", "import"], correctIndex: 1, translation: "What's the budget?", explanation: "'Pressupost' = budget. Important for project planning." }
    ],
    listenAndType: [
      { catalan: "La reunió comença a les nou en punt", english: "The meeting starts at nine o'clock sharp", pronunciation: "lah reh-oo-nee-OH koh-MEHN-sah ah lehs NOH-oo ehn POONT" },
      { catalan: "Qui prendrà l'acta de la reunió?", english: "Who will take the meeting minutes?", pronunciation: "kee prehn-DRAH LAHK-tah deh lah reh-oo-nee-OH" },
      { catalan: "Hem d'ajornar la reunió fins divendres", english: "We have to postpone the meeting until Friday", pronunciation: "EHM dah-jor-NAR lah reh-oo-nee-OH feens dee-BEHN-drehs" },
      { catalan: "La data límit és el 30 de març", english: "The deadline is March 30th", pronunciation: "lah DAH-tah LEE-meet ehs ehl TREHN-tah deh MARS" }
    ],
    errorCorrection: [
      { sentence: "Cuál es el orden del día?", errorWordIndex: 2, options: ["orden", "ordre", "orde", "agenda"], correctIndex: 1, translation: "What's the agenda?", explanation: "'Ordre del dia' is Catalan. 'Orden del día' is Spanish." },
      { sentence: "Tenemos que presentar la propuesta", errorWordIndex: 0, options: ["Tenemos", "Hem", "Tenim", "Have"], correctIndex: 1, translation: "We have to present the proposal", explanation: "'Hem de' is Catalan. 'Tenemos que' is Spanish." },
      { sentence: "Estoy de acuerdo con esta idea", errorWordIndex: 1, options: ["de", "d'", "de", "of"], correctIndex: 1, translation: "I agree with this idea", explanation: "'Estic d'acord' is Catalan. 'Estoy de acuerdo' is Spanish." },
      { sentence: "Cuál es el presupuesto?", errorWordIndex: 0, options: ["Cuál", "Quin", "Cual", "What"], correctIndex: 1, translation: "What's the budget?", explanation: "'Quin' is Catalan. 'Cuál' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Ordre del dia' = agenda. 'Punts a tractar' = items to discuss. 'Acta' = minutes (written record).", words: ["Passem", "al", "següent", "punt", "de", "l'ordre", "del", "dia"], correctOrder: "Passem al següent punt de l'ordre del dia", translation: "Let's move to the next agenda item" },
      { grammarNote: "💡 'Estar d'acord' = agree. 'No estar d'acord' = disagree. 'Arribar a un acord' = reach an agreement.", words: ["Tots", "estem", "d'acord", "amb", "la", "proposta"], correctOrder: "Tots estem d'acord amb la proposta", translation: "We all agree with the proposal" },
      { grammarNote: "💡 'Ajornar' = postpone. 'Avançar' = bring forward. 'Cancel·lar' = cancel.", words: ["Hem", "d'ajornar", "la", "reunió", "per", "motius", "personals"], correctOrder: "Hem d'ajornar la reunió per motius personals", translation: "We have to postpone the meeting for personal reasons" }
    ]
  }
},

// ─── LESSON 87: Email Writing ──────────────────────────────

{
  id: 87,
  title: "Email Writing",
  module: "Professional",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Subject line", ca: "Assumpte", pronunciation: "ah-SOOM-teh" },
    { en: "Attached", ca: "Adjunt", pronunciation: "ahd-JOONT" },
    { en: "To forward", ca: "Reenviar", pronunciation: "reh-ehn-bee-AR" },
    { en: "To reply", ca: "Respondre", pronunciation: "rehs-POHN-dreh" },
    { en: "Dear Sir/Madam", ca: "Benvolgut/da", pronunciation: "behn-bohl-GOOT/GOOT-dah" },
    { en: "Best regards", ca: "Atentament", pronunciation: "ah-tehn-tah-MEHN" },
    { en: "Urgent", ca: "Urgent", pronunciation: "oor-JEHN" },
    { en: "Cordially", ca: "Cordialment", pronunciation: "kor-dee-ahl-MEHN" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Us envio el document ___", blank: "adjunt", options: ["urgent", "adjunt", "reenviat", "respondre"], correctIndex: 1, translation: "I'm sending you the attached document", explanation: "'Adjunt' = attached. 'Document adjunt' = attached document." },
      { sentence: "Benvolgut senyor Martí, ___ la seva carta", blank: "en resposta a", options: ["per enviar", "en resposta a", "adjunt amb", "reenviar"], correctIndex: 1, translation: "Dear Mr. Martí, in response to your letter", explanation: "'En resposta a' = in response to. Common email opening." },
      { sentence: "Puc ___ aquest correu?", blank: "reenviar", options: ["adjuntar", "reenviar", "respondre", "tancar"], correctIndex: 1, translation: "Can I forward this email?", explanation: "'Reenviar' = to forward. 'Reenviament' = forwarding." },
      { sentence: "Salutacions cordials, ___", blank: "Atentament", options: ["Hola", "Adéu", "Atentament", "Gràcies"], correctIndex: 2, translation: "Kind regards, Sincerely", explanation: "'Atentament' = sincerely/best regards. Standard formal email closing." }
    ],
    listenAndType: [
      { catalan: "Trobareu el fitxer adjunt", english: "You will find the attached file", pronunciation: "troh-bah-REH-oo ehl fee-TSHEHR ahd-JOONT" },
      { catalan: "Quedo a l'espera de la vostra resposta", english: "I await your response", pronunciation: "KEH-doh ah lehs-PEH-rah deh lah BOHS-trah rehs-POHS-tah" },
      { catalan: "Us agrairia una resposta ràpida", english: "I would appreciate a quick response", pronunciation: "oos ah-grah-ee-REE-ah OO-nah rehs-POHS-tah RAH-pee-dah" },
      { catalan: "Necessito reenviar aquest correu urgent", english: "I need to forward this urgent email", pronunciation: "neh-seh-SEE-toh reh-ehn-bee-AR ah-KESHT koh-REH-oo oor-JEHN" }
    ],
    errorCorrection: [
      { sentence: "Os envío el documento adjunto", errorWordIndex: 0, options: ["Os", "Us", "Vos", "You"], correctIndex: 1, translation: "I'm sending you the attached document", explanation: "'Us envio' is Catalan. 'Os envío' is Spanish." },
      { sentence: "Estimado señor Martí", errorWordIndex: 0, options: ["Estimado", "Benvolgut", "Estimat", "Dear"], correctIndex: 1, translation: "Dear Mr. Martí", explanation: "'Benvolgut' is Catalan formal. 'Estimado' is Spanish." },
      { sentence: "Puedo reenviar este correo?", errorWordIndex: 0, options: ["Puedo", "Puc", "Pued", "Can"], correctIndex: 1, translation: "Can I forward this email?", explanation: "'Puc' is Catalan. 'Puedo' is Spanish." },
      { sentence: "Atentamente", errorWordIndex: 0, options: ["Atentamente", "Atentament", "Atentament", "Sincerely"], correctIndex: 1, translation: "Sincerely", explanation: "'Atentament' is Catalan. 'Atentamente' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Email openings: 'Benvolgut/da' (Dear), 'Hola + name' (informal), 'Bon dia' (Good morning).", words: ["Benvolguda", "senyora", "García", "en", "resposta", "a", "la", "seva", "consulta"], correctOrder: "Benvolguda senyora García en resposta a la seva consulta", translation: "Dear Mrs. García in response to your inquiry" },
      { grammarNote: "💡 Email closings: 'Atentament' (formal), 'Cordialment' (cordially), 'Salutacions' (regards), 'Ben cordialment' (very cordially).", words: ["Quedo", "a", "l'espera", "de", "la", "vostra", "resposta"], correctOrder: "Quedo a l'espera de la vostra resposta", translation: "I await your response" },
      { grammarNote: "💡 'Adjuntar' = attach. 'Reenviar' = forward. 'CC' = amb còpia. 'CCO' = còpia oculta (BCC).", words: ["Us", "adjunto", "el", "document", "sol·licitat"], correctOrder: "Us adjunto el document sol·licitat", translation: "I attach the requested document" }
    ]
  }
},

// ─── LESSON 88: Negotiations ────────────────────────────────

{
  id: 88,
  title: "Negotiations",
  module: "Professional",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "To negotiate", ca: "Negociar", pronunciation: "neh-goh-see-AR" },
    { en: "Offer", ca: "Oferta", pronunciation: "oh-FEHR-tah" },
    { en: "Contract", ca: "Contracte", pronunciation: "kohn-TRAHK-teh" },
    { en: "Terms", ca: "Condicions", pronunciation: "kohn-dee-see-OHNS" },
    { en: "Discount", ca: "Descompte", pronunciation: "dehs-KOHM-teh" },
    { en: "To accept", ca: "Acceptar", pronunciation: "ahk-sehp-TAR" },
    { en: "To reject", ca: "Rebutjar", pronunciation: "reh-boo-JAR" },
    { en: "Compromise", ca: "Acord", pronunciation: "ah-KORD" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Quines són les ___ del contracte?", blank: "condicions", options: ["ofertes", "condicions", "descomptes", "acords"], correctIndex: 1, translation: "What are the contract terms?", explanation: "'Condicions' = terms/conditions. 'Condicions del contracte' = contract terms." },
      { sentence: "Puc oferir un ___ del 10%", blank: "descompte", options: ["preu", "descompte", "contracte", "pagament"], correctIndex: 1, translation: "I can offer a 10% discount", explanation: "'Descompte' = discount. 'Fer un descompte' = give a discount." },
      { sentence: "Vostès ___ la nostra proposta?", blank: "accepten", options: ["negocien", "accepten", "rebutgen", "ofereixen"], correctIndex: 1, translation: "Do you accept our proposal?", explanation: "'Acceptar' = to accept. 'Rebutjar' = to reject." },
      { sentence: "Hem arribat a un ___", blank: "acord", options: ["contracte", "oferta", "acord", "preu"], correctIndex: 2, translation: "We've reached an agreement", explanation: "'Arribar a un acord' = reach an agreement/compromise." }
    ],
    listenAndType: [
      { catalan: "Aquesta és la nostra millor oferta", english: "This is our best offer", pronunciation: "ah-KEHS-tah ehs lah NOHS-trah mee-YOR oh-FEHR-tah" },
      { catalan: "Hem de revisar els termes del contracte", english: "We need to review the contract terms", pronunciation: "EHM deh reh-bee-ZAR ehls TEHR-mehs dehl kohn-TRAHK-teh" },
      { catalan: "No podem acceptar aquestes condicions", english: "We cannot accept these conditions", pronunciation: "noh poh-DEHM ahk-sehp-TAR ah-KEHS-tehs kohn-dee-see-OHNS" },
      { catalan: "Estem disposats a negociar el preu", english: "We are willing to negotiate the price", pronunciation: "ehs-TEHM dees-poh-ZAHTS ah neh-goh-see-AR ehl PREH-oo" }
    ],
    errorCorrection: [
      { sentence: "Cuáles son las condiciones del contrato?", errorWordIndex: 0, options: ["Cuáles", "Quines", "Cuales", "What"], correctIndex: 1, translation: "What are the contract terms?", explanation: "'Quines' is Catalan. 'Cuáles' is Spanish." },
      { sentence: "Puedo ofrecer un descuento del 10%", errorWordIndex: 3, options: ["descuento", "descompte", "descuent", "discount"], correctIndex: 1, translation: "I can offer a 10% discount", explanation: "'Descompte' is Catalan. 'Descuento' is Spanish." },
      { sentence: "Ustedes aceptan nuestra propuesta?", errorWordIndex: 0, options: ["Ustedes", "Vostès", "Ustede", "You"], correctIndex: 1, translation: "Do you accept our proposal?", explanation: "'Vostès' is Catalan. 'Ustedes' is Spanish." },
      { sentence: "Hemos llegado a un acuerdo", errorWordIndex: 1, options: ["llegado", "arribat", "llegad", "reached"], correctIndex: 1, translation: "We've reached an agreement", explanation: "'Hem arribat' is Catalan. 'Hemos llegado' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Negociar' = negotiate. 'Arribar a un acord' = reach agreement. 'Trencar les negociacions' = break off negotiations.", words: ["Estem", "negociant", "els", "termes", "del", "contracte"], correctOrder: "Estem negociant els termes del contracte", translation: "We are negotiating the contract terms" },
      { grammarNote: "💡 'Acceptar' = accept. 'Rebutjar' = reject. 'Considerar' = consider. 'Contraoferta' = counteroffer.", words: ["No", "podem", "acceptar", "aquesta", "oferta"], correctOrder: "No podem acceptar aquesta oferta", translation: "We cannot accept this offer" },
      { grammarNote: "💡 'Descompte' = discount. 'Preu final' = final price. 'Condicions de pagament' = payment terms.", words: ["Fem", "un", "descompte", "del", "quinze", "per", "cent"], correctOrder: "Fem un descompte del quinze per cent", translation: "We give a fifteen percent discount" }
    ]
  }
},

// ─── LESSON 89: Catalan Culture & Traditions ────────────────

{
  id: 89,
  title: "Catalan Culture",
  module: "Cultural",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Castellers (human towers)", ca: "Castellers", pronunciation: "kahs-teh-YEHRS" },
    { en: "Sant Jordi (St. George's Day)", ca: "Sant Jordi", pronunciation: "sahnt JOR-dee" },
    { en: "La Diada (National Day)", ca: "La Diada", pronunciation: "lah dee-AH-dah" },
    { en: "Calçots", ca: "Calçots", pronunciation: "kahl-SOHTS" },
    { en: "Sardana (traditional dance)", ca: "Sardana", pronunciation: "sar-DAH-nah" },
    { en: "Caga Tió", ca: "Caga Tió", pronunciation: "KAH-gah tee-OH" },
    { en: "Tradition", ca: "Tradició", pronunciation: "trah-dee-see-OH" },
    { en: "Festival", ca: "Festa", pronunciation: "FEHS-tah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Els ___ fan torres humanes", blank: "castellers", options: ["sardanes", "castellers", "calçots", "festives"], correctIndex: 1, translation: "The castellers make human towers", explanation: "'Castellers' = human tower builders. UNESCO World Heritage tradition from Catalonia." },
      { sentence: "El 23 d'abril és ___", blank: "Sant Jordi", options: ["La Diada", "Sant Jordi", "Nadal", "Cap d'Any"], correctIndex: 1, translation: "April 23rd is Sant Jordi", explanation: "'Sant Jordi' = St. George's Day. Day of books and roses in Catalonia." },
      { sentence: "Els ___ es mengen amb romesco", blank: "calçots", options: ["castellers", "calçots", "sardanes", "tradicions"], correctIndex: 1, translation: "Calçots are eaten with romesco sauce", explanation: "'Calçots' = spring onions. Traditional Catalan food, grilled and eaten in winter." },
      { sentence: "La ___ és una dansa tradicional", blank: "sardana", options: ["festa", "sardana", "tradició", "diada"], correctIndex: 1, translation: "The sardana is a traditional dance", explanation: "'Sardana' = traditional Catalan circle dance, usually to live music." }
    ],
    listenAndType: [
      { catalan: "La Diada és l'11 de setembre", english: "La Diada is September 11th", pronunciation: "lah dee-AH-dah ehs lohn-zeh deh seh-TEHM-breh" },
      { catalan: "Per Sant Jordi es regalen roses i llibres", english: "For Sant Jordi roses and books are given", pronunciation: "pehr sahnt JOR-dee ehs reh-GAH-lehn ROH-zehs ee LYEE-brehs" },
      { catalan: "Els castells poden tenir nou pisos", english: "The castells can be nine stories high", pronunciation: "ehls kahs-TEHYS POH-dehn teh-NEER NOH-oo PEE-sohs" },
      { catalan: "El Caga Tió és una tradició de Nadal", english: "The Caga Tió is a Christmas tradition", pronunciation: "ehl KAH-gah tee-OH ehs OO-nah trah-dee-see-OH deh nah-DAHL" }
    ],
    errorCorrection: [
      { sentence: "Los castellers hacen torres humanas", errorWordIndex: 0, options: ["Los", "Els", "Les", "The"], correctIndex: 1, translation: "The castellers make human towers", explanation: "'Els' is Catalan. 'Los' is Spanish." },
      { sentence: "El 23 de abril es San Jorge", errorWordIndex: 4, options: ["San", "Sant", "San", "Saint"], correctIndex: 1, translation: "April 23rd is Sant Jordi", explanation: "'Sant Jordi' is Catalan. 'San Jorge' is Spanish." },
      { sentence: "Los calçots se comen con romesco", errorWordIndex: 0, options: ["Los", "Els", "Les", "The"], correctIndex: 1, translation: "Calçots are eaten with romesco", explanation: "'Els calçots' is Catalan. 'Los calçots' is Spanish." },
      { sentence: "La sardana es un baile tradicional", errorWordIndex: 3, options: ["baile", "dansa", "bail", "dance"], correctIndex: 1, translation: "The sardana is a traditional dance", explanation: "'Dansa' is Catalan. 'Baile' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Sant Jordi (April 23): Day of books and roses. Men give roses, women give books (traditionally).", words: ["Per", "Sant", "Jordi", "les", "Rambles", "es", "plen", "de", "parades"], correctOrder: "Per Sant Jordi les Rambles es plen de parades", translation: "For Sant Jordi the Ramblas fill with stalls" },
      { grammarNote: "💡 Castellers: Human towers. 'Pinya' = base, 'Enxaneta' = child at top. From Tarragona region.", words: ["Els", "castells", "són", "Patrimoni", "de", "la", "Humanitat"], correctOrder: "Els castells són Patrimoni de la Humanitat", translation: "The castells are World Heritage" },
      { grammarNote: "💡 La Diada (Sept 11): Catalan National Day. Commemorates loss of Barcelona in 1714.", words: ["L'onze", "de", "setembre", "és", "la", "Diada", "Nacional", "de", "Catalunya"], correctOrder: "L'onze de setembre és la Diada Nacional de Catalunya", translation: "September 11th is the National Day of Catalonia" }
    ]
  }
},

// ─── LESSON 90: Catalan Cuisine ────────────────────────────

{
  id: 90,
  title: "Catalan Cuisine",
  module: "Cultural",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Pa amb tomàquet", ca: "Pa amb tomàquet", pronunciation: "pah ahm toh-MAH-keht" },
    { en: "Crema catalana", ca: "Crema catalana", pronunciation: "KREH-mah kah-tah-LAH-nah" },
    { en: "Escudella", ca: "Escudella", pronunciation: "ehs-koo-DEH-yah" },
    { en: "Butifarra", ca: "Butifarra", pronunciation: "boo-tee-FAH-rah" },
    { en: "Suquet de peix", ca: "Suquet de peix", pronunciation: "soo-KEHT deh PAYSH" },
    { en: "Fricandó", ca: "Fricandó", pronunciation: "free-kahn-DOH" },
    { en: "Mel i mató", ca: "Mel i mató", pronunciation: "MEHL ee mah-TOH" },
    { en: "Cava", ca: "Cava", pronunciation: "KAH-bah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "El ___ és pa amb tomàquet i oli", blank: "pa amb tomàquet", options: ["cava", "pa amb tomàquet", "fricandó", "suquet"], correctIndex: 1, translation: "Pa amb tomàquet is bread with tomato and oil", explanation: "'Pa amb tomàquet' = bread with tomato. Essential Catalan dish, served with most meals." },
      { sentence: "La ___ és un postres tradicional", blank: "crema catalana", options: ["butifarra", "escudella", "crema catalana", "mel i mató"], correctIndex: 2, translation: "Crema catalana is a traditional dessert", explanation: "'Crema catalana' = Catalan cream. Similar to crème brûlée but with different flavor." },
      { sentence: "El ___ és vi escumós català", blank: "cava", options: ["vi", "cava", "licor", "cervesa"], correctIndex: 1, translation: "Cava is Catalan sparkling wine", explanation: "'Cava' = Catalan champagne-style wine. Mainly from Penedès region." },
      { sentence: "La ___ és una salsitxa catalana", blank: "butifarra", options: ["butifarra", "escudella", "fricandó", "suquet"], correctIndex: 0, translation: "Butifarra is a Catalan sausage", explanation: "'Butifarra' = traditional Catalan sausage. Often grilled or in stews." }
    ],
    listenAndType: [
      { catalan: "L'escudella és un plat d'hivern", english: "Escudella is a winter dish", pronunciation: "lehs-koo-DEH-yah ehs oon PLAHT dee-BEHRN" },
      { catalan: "El suquet de peix és típic de la costa", english: "Suquet de peix is typical of the coast", pronunciation: "ehl soo-KEHT deh PAYSH ehs TEE-peek deh lah KOHS-tah" },
      { catalan: "Mel i mató és un postres senzill i bo", english: "Mel i mató is a simple and good dessert", pronunciation: "MEHL ee mah-TOH ehs oon POHS-trehs sehn-ZEEL ee BOH" },
      { catalan: "El fricandó es fa amb carn i bolets", english: "Fricandó is made with meat and mushrooms", pronunciation: "ehl free-kahn-DOH ehs FAH ahm KARN ee boh-LEHTS" }
    ],
    errorCorrection: [
      { sentence: "El pan con tomate es muy bueno", errorWordIndex: 1, options: ["pan", "pa", "pan", "bread"], correctIndex: 1, translation: "Pa amb tomàquet is very good", explanation: "'Pa amb tomàquet' is Catalan. 'Pan con tomate' is Spanish." },
      { sentence: "La crema catalana es un postre tradicional", errorWordIndex: 4, options: ["postre", "postres", "postre", "dessert"], correctIndex: 1, translation: "Crema catalana is a traditional dessert", explanation: "'Postres' is Catalan. 'Postre' is Spanish." },
      { sentence: "El cava es vino espumoso catalán", errorWordIndex: 2, options: ["es", "és", "es", "is"], correctIndex: 1, translation: "Cava is Catalan sparkling wine", explanation: "'És' is Catalan. 'Es' is Spanish." },
      { sentence: "La butifarra es una salchicha catalana", errorWordIndex: 3, options: ["salchicha", "salsitxa", "salchich", "sausage"], correctIndex: 1, translation: "Butifarra is a Catalan sausage", explanation: "'Salsitxa' is Catalan. 'Salchicha' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Pa amb tomàquet' is eaten with almost every meal in Catalonia. Rub tomato on toasted bread, add olive oil and salt.", words: ["El", "pa", "amb", "tomàquet", "és", "essencial", "a", "taula"], correctOrder: "El pa amb tomàquet és essencial a taula", translation: "Pa amb tomàquet is essential at the table" },
      { grammarNote: "💡 Traditional dishes: escudella i carn d'olla (stew), suquet (fish stew), fricandó (veal with mushrooms).", words: ["L'escudella", "es", "menja", "per", "Nadal"], correctOrder: "L'escudella es menja per Nadal", translation: "Escudella is eaten at Christmas" },
      { grammarNote: "💡 Desserts: crema catalana, mel i mató (honey with fresh cheese), panellets (All Saints' Day sweets).", words: ["La", "crema", "catalana", "es", "crema", "amb", "sucre"], correctOrder: "La crema catalana es crema amb sucre", translation: "Crema catalana is caramelized with sugar" }
    ]
  }
},

// ─── LESSON 91: Barcelona Neighborhoods ─────────────────────

{
  id: 91,
  title: "Barcelona Neighborhoods",
  module: "Cultural",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Eixample", ca: "L'Eixample", pronunciation: "lay-SHAHM-pleh" },
    { en: "Gràcia", ca: "Gràcia", pronunciation: "GRAH-see-ah" },
    { en: "El Born", ca: "El Born", pronunciation: "ehl BORN" },
    { en: "Sarrià", ca: "Sarrià", pronunciation: "sah-ree-AH" },
    { en: "Poble Sec", ca: "Poble Sec", pronunciation: "POH-bleh SEHK" },
    { en: "Barceloneta", ca: "La Barceloneta", pronunciation: "lah bar-seh-loh-NEH-tah" },
    { en: "Sant Antoni", ca: "Sant Antoni", pronunciation: "sahnt ahn-TOH-nee" },
    { en: "Les Corts", ca: "Les Corts", pronunciation: "lehs KORTS" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ és el barri de Gaudí", blank: "L'Eixample", options: ["Gràcia", "L'Eixample", "El Born", "Sarrià"], correctIndex: 1, translation: "Eixample is Gaudí's neighborhood", explanation: "'L'Eixample' = The Extension. 19th century planned district, grid pattern, Gaudí's Sagrada Família." },
      { sentence: "___ és un barri bohemi", blank: "Gràcia", options: ["L'Eixample", "Gràcia", "Les Corts", "Sarrià"], correctIndex: 1, translation: "Gràcia is a bohemian neighborhood", explanation: "'Gràcia' = bohemian district, narrow streets, plazas, local feel, Festa Major in August." },
      { sentence: "___ és al costat de la platja", blank: "La Barceloneta", options: ["El Born", "Sarrià", "La Barceloneta", "Poble Sec"], correctIndex: 2, translation: "Barceloneta is next to the beach", explanation: "'La Barceloneta' = fishing district, beach access, seafood restaurants." },
      { sentence: "___ és un barri medieval", blank: "El Born", options: ["L'Eixample", "Les Corts", "El Born", "Sant Antoni"], correctIndex: 2, translation: "El Born is a medieval neighborhood", explanation: "'El Born' = medieval quarter, narrow streets, Picasso Museum, Santa Maria del Mar church." }
    ],
    listenAndType: [
      { catalan: "Visc a Sarrià, és un barri tranquil", english: "I live in Sarrià, it's a quiet neighborhood", pronunciation: "BEESK ah sah-ree-AH ehs oon BAH-ree trahn-KEEL" },
      { catalan: "Sant Antoni té un mercat modernista", english: "Sant Antoni has a modernist market", pronunciation: "sahnt ahn-TOH-nee TEH oon mehr-KAHT moh-dehr-NEES-tah" },
      { catalan: "Poble Sec està sota Montjuïc", english: "Poble Sec is below Montjuïc", pronunciation: "POH-bleh SEHK ehs-TAH SOH-tah mohn-joo-EEK" },
      { catalan: "Les Corts és on hi ha el Camp Nou", english: "Les Corts is where Camp Nou is", pronunciation: "lehs KORTS ehs ohn ee hah ehl KAHMP NOH-oo" }
    ],
    errorCorrection: [
      { sentence: "El Ensanche es el barrio de Gaudí", errorWordIndex: 1, options: ["Ensanche", "Eixample", "Ensanch", "Extension"], correctIndex: 1, translation: "Eixample is Gaudí's neighborhood", explanation: "'Eixample' is Catalan. 'Ensanche' is Spanish." },
      { sentence: "Gracia es un barrio bohemio", errorWordIndex: 0, options: ["Gracia", "Gràcia", "Graci", "Gracia"], correctIndex: 1, translation: "Gràcia is a bohemian neighborhood", explanation: "'Gràcia' is Catalan spelling." },
      { sentence: "La Barceloneta está al lado de la playa", errorWordIndex: 2, options: ["está", "és", "esta", "is"], correctIndex: 1, translation: "Barceloneta is next to the beach", explanation: "'És' is Catalan. 'Está' is Spanish." },
      { sentence: "El Born es un barrio medieval", errorWordIndex: 3, options: ["barrio", "barri", "bario", "neighborhood"], correctIndex: 1, translation: "El Born is a medieval neighborhood", explanation: "'Barri' is Catalan. 'Barrio' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 L'Eixample: Planned 19th century district, grid pattern, chamfered corners (xamfrans), Gaudí buildings.", words: ["L'Eixample", "té", "les", "millors", "obres", "modernistes"], correctOrder: "L'Eixample té les millors obres modernistes", translation: "Eixample has the best modernist works" },
      { grammarNote: "💡 Gràcia: Former independent town, absorbed 1897. Narrow streets, squares, local atmosphere, Festa Major.", words: ["Gràcia", "era", "un", "poble", "independent"], correctOrder: "Gràcia era un poble independent", translation: "Gràcia was an independent town" },
      { grammarNote: "💡 El Born: Medieval center, artisan quarter, trendy bars, cultural center, Santa Maria del Mar basilica.", words: ["El", "Born", "és", "un", "barri", "de", "moda"], correctOrder: "El Born és un barri de moda", translation: "El Born is a trendy neighborhood" }
    ]
  }
},

// ─── LESSON 92: Catalan History ────────────────────────────

{
  id: 92,
  title: "Catalan History",
  module: "Cultural",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Middle Ages", ca: "Edat Mitjana", pronunciation: "eh-DAHT mee-JAH-nah" },
    { en: "Crown of Aragon", ca: "Corona d'Aragó", pronunciation: "koh-ROH-nah dah-rah-GOH" },
    { en: "War of Succession", ca: "Guerra de Successió", pronunciation: "GEH-rah deh sook-sehs-see-OH" },
    { en: "Renaixença", ca: "Renaixença", pronunciation: "reh-nay-SHEHN-sah" },
    { en: "Modernisme", ca: "Modernisme", pronunciation: "moh-dehr-NEES-meh" },
    { en: "Autonomy", ca: "Autonomia", pronunciation: "ow-toh-noh-MEE-ah" },
    { en: "Statute", ca: "Estatut", pronunciation: "ehs-tah-TOOT" },
    { en: "Democracy", ca: "Democràcia", pronunciation: "deh-moh-KRAH-see-ah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "La ___ va ser un període important", blank: "Corona d'Aragó", options: ["Corona d'Aragó", "Renaixença", "Edat Mitjana", "Guerra"], correctIndex: 0, translation: "The Crown of Aragon was an important period", explanation: "'Corona d'Aragó' = medieval confederation including Catalonia, Aragon, Valencia, Balearics, Naples, Sicily." },
      { sentence: "La ___ va començar al segle XIX", blank: "Renaixença", options: ["Guerra", "Renaixença", "Autonomia", "Democràcia"], correctIndex: 1, translation: "The Renaixença began in the 19th century", explanation: "'Renaixença' = cultural/linguistic renaissance of Catalan culture in 1800s." },
      { sentence: "El ___ va ser aprovat el 2006", blank: "Estatut", options: ["Modernisme", "Estatut", "Guerra", "Corona"], correctIndex: 1, translation: "The Statute was approved in 2006", explanation: "'Estatut d'Autonomia' = Statute of Autonomy. Legal framework for self-government." },
      { sentence: "El ___ és un moviment arquitectònic", blank: "Modernisme", options: ["Renaixença", "Modernisme", "Estatut", "Corona"], correctIndex: 1, translation: "Modernisme is an architectural movement", explanation: "'Modernisme' = Catalan Art Nouveau. Gaudí, Domènech i Montaner, Puig i Cadafalch." }
    ],
    listenAndType: [
      { catalan: "El 1714 Barcelona va perdre la guerra", english: "In 1714 Barcelona lost the war", pronunciation: "ehl MEEL seh-TEHNS kah-TOR-zeh bar-seh-LOH-nah bah PEHR-dreh lah GEH-rah" },
      { catalan: "L'Estatut dona autonomia a Catalunya", english: "The Statute gives autonomy to Catalonia", pronunciation: "lehs-tah-TOOT DOH-nah ow-toh-noh-MEE-ah ah kah-tah-LOON-yah" },
      { catalan: "La Renaixença va recuperar el català", english: "The Renaixença recovered Catalan", pronunciation: "lah reh-nay-SHEHN-sah bah reh-koo-peh-RAR ehl kah-tah-LAH" },
      { catalan: "Gaudí és el màxim exponent del Modernisme", english: "Gaudí is the maximum exponent of Modernisme", pronunciation: "gow-DEE ehs ehl MAH-kseem ehks-poh-NEHN dehl moh-dehr-NEES-meh" }
    ],
    errorCorrection: [
      { sentence: "La Corona de Aragón fue importante", errorWordIndex: 2, options: ["Aragón", "Aragó", "Aragon", "Aragon"], correctIndex: 1, translation: "The Crown of Aragon was important", explanation: "'Aragó' is Catalan. 'Aragón' is Spanish." },
      { sentence: "La Renacimiento comenzó en el siglo XIX", errorWordIndex: 1, options: ["Renacimiento", "Renaixença", "Renaciment", "Renaissance"], correctIndex: 1, translation: "The Renaixença began in the 19th century", explanation: "'Renaixença' is Catalan. 'Renacimiento' is Spanish." },
      { sentence: "El Estatuto fue aprobado en 2006", errorWordIndex: 1, options: ["Estatuto", "Estatut", "Estatut", "Statute"], correctIndex: 1, translation: "The Statute was approved in 2006", explanation: "'Estatut' is Catalan. 'Estatuto' is Spanish." },
      { sentence: "El Modernismo es un movimiento arquitectónico", errorWordIndex: 1, options: ["Modernismo", "Modernisme", "Modernism", "Modernism"], correctIndex: 1, translation: "Modernisme is an architectural movement", explanation: "'Modernisme' is Catalan. 'Modernismo' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 1714: Barcelona falls to Bourbon forces. End of Catalan institutions. September 11th now national day (La Diada).", words: ["El", "1714", "Catalunya", "va", "perdre", "la", "independència"], correctOrder: "El 1714 Catalunya va perdre la independència", translation: "In 1714 Catalonia lost independence" },
      { grammarNote: "💡 Renaixença (1800s): Cultural renaissance. Recovery of Catalan language and literature. Jacint Verdaguer, Àngel Guimerà.", words: ["La", "Renaixença", "va", "revitalitzar", "la", "llengua", "catalana"], correctOrder: "La Renaixença va revitalitzar la llengua catalana", translation: "The Renaixença revitalized the Catalan language" },
      { grammarNote: "💡 Modernisme (1890-1910): Catalan Art Nouveau. Gaudí's Sagrada Família, Casa Batlló. Unique to Catalonia.", words: ["El", "Modernisme", "català", "és", "únic", "al", "món"], correctOrder: "El Modernisme català és únic al món", translation: "Catalan Modernisme is unique in the world" }
    ]
  }
},

// ─── LESSON 93: Expressing Opinions ─────────────────────────

{
  id: 93,
  title: "Expressing Opinions",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "I think that", ca: "Crec que", pronunciation: "KREHK keh" },
    { en: "In my opinion", ca: "Al meu parer", pronunciation: "ahl MEH-oo pah-REHR" },
    { en: "I'm convinced", ca: "Estic convençut", pronunciation: "ehs-TEEK kohn-behn-SOOT" },
    { en: "I disagree", ca: "No estic d'acord", pronunciation: "noh ehs-TEEK dah-KORD" },
    { en: "It seems to me", ca: "Em sembla", pronunciation: "ehm SEHM-blah" },
    { en: "Honestly", ca: "Sincerament", pronunciation: "seen-seh-rah-MEHN" },
    { en: "Frankly", ca: "Francament", pronunciation: "frahn-kah-MEHN" },
    { en: "Perhaps", ca: "Potser", pronunciation: "poht-SEHR" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ això és correcte", blank: "Crec que", options: ["Crec que", "Sé que", "Veig que", "Faig que"], correctIndex: 0, translation: "I think this is correct", explanation: "'Crec que' = I think that. Most common way to express opinion." },
      { sentence: "___, hauríem d'esperar", blank: "Al meu parer", options: ["Crec", "Al meu parer", "Penso", "Sembla"], correctIndex: 1, translation: "In my opinion, we should wait", explanation: "'Al meu parer' = in my opinion (more formal than 'crec que')." },
      { sentence: "___ aquesta és la millor opció", blank: "Em sembla", options: ["M'agrada", "Em sembla", "Em fa", "Em diu"], correctIndex: 1, translation: "It seems to me this is the best option", explanation: "'Em sembla' = it seems to me. Softer opinion than 'crec'." },
      { sentence: "___, no tinc raó", blank: "Potser", options: ["Segur", "Potser", "Sempre", "Mai"], correctIndex: 1, translation: "Perhaps I'm wrong", explanation: "'Potser' = perhaps/maybe. Shows uncertainty or openness." }
    ],
    listenAndType: [
      { catalan: "Al meu parer és massa car", english: "In my opinion it's too expensive", pronunciation: "ahl MEH-oo pah-REHR ehs MAH-sah KAR" },
      { catalan: "Sincerament no m'agrada gens", english: "Honestly I don't like it at all", pronunciation: "seen-seh-rah-MEHN noh mah-GRAH-dah JEHNS" },
      { catalan: "Estic totalment d'acord amb tu", english: "I totally agree with you", pronunciation: "ehs-TEEK toh-tahl-MEHN dah-KORD ahm TOO" },
      { catalan: "Francament crec que t'equivoques", english: "Frankly I think you're wrong", pronunciation: "frahn-kah-MEHN KREHK keh teh-kee-BOH-kehs" }
    ],
    errorCorrection: [
      { sentence: "Creo que esto es correcto", errorWordIndex: 0, options: ["Creo", "Crec", "Cre", "Think"], correctIndex: 1, translation: "I think this is correct", explanation: "'Crec' is Catalan. 'Creo' is Spanish." },
      { sentence: "A mi parecer deberíamos esperar", errorWordIndex: 0, options: ["A", "Al", "A", "To"], correctIndex: 1, translation: "In my opinion we should wait", explanation: "'Al meu parer' is Catalan. 'A mi parecer' is Spanish." },
      { sentence: "Me parece que esta es la mejor opción", errorWordIndex: 0, options: ["Me", "Em", "M'", "To me"], correctIndex: 1, translation: "It seems to me this is the best option", explanation: "'Em sembla' is Catalan. 'Me parece' is Spanish." },
      { sentence: "Quizás no tengo razón", errorWordIndex: 0, options: ["Quizás", "Potser", "Quiza", "Perhaps"], correctIndex: 1, translation: "Perhaps I'm wrong", explanation: "'Potser' is Catalan. 'Quizás' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Crec que' = I think. 'Penso que' = I think (synonym). 'Opino que' = I believe. All + indicative.", words: ["Crec", "que", "tens", "tota", "la", "raó"], correctOrder: "Crec que tens tota la raó", translation: "I think you're absolutely right" },
      { grammarNote: "💡 Disagreeing: 'No estic d'acord' = I disagree. 'No ho veig així' = I don't see it that way. 'M'equivoco?' = Am I wrong?", words: ["No", "estic", "d'acord", "amb", "aquesta", "proposta"], correctOrder: "No estic d'acord amb aquesta proposta", translation: "I don't agree with this proposal" },
      { grammarNote: "💡 Strong opinions: 'Estic convençut' = I'm convinced. 'És evident' = it's evident. 'Està clar' = it's clear.", words: ["Estic", "convençut", "que", "és", "la", "millor", "solució"], correctOrder: "Estic convençut que és la millor solució", translation: "I'm convinced it's the best solution" }
    ]
  }
},

// ─── LESSON 94: Giving Advice ──────────────────────────────

{
  id: 94,
  title: "Giving Advice",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "You should", ca: "Hauries de", pronunciation: "ow-REE-ehs deh" },
    { en: "I recommend", ca: "Et recomano", pronunciation: "eht reh-koh-MAH-noh" },
    { en: "It would be better", ca: "Seria millor", pronunciation: "seh-REE-ah mee-YOR" },
    { en: "I suggest", ca: "Suggereixo", pronunciation: "soo-jeh-RAY-shoh" },
    { en: "If I were you", ca: "Si jo fos tu", pronunciation: "see JOH fohs TOO" },
    { en: "Why don't you", ca: "Per què no", pronunciation: "pehr KEH noh" },
    { en: "You could", ca: "Podries", pronunciation: "poh-DREE-ehs" },
    { en: "It's important that", ca: "És important que", pronunciation: "ehs eem-por-TAHN keh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ anar al metge", blank: "Hauries de", options: ["Has de", "Hauries de", "Vols", "Pots"], correctIndex: 1, translation: "You should go to the doctor", explanation: "'Hauries de' = you should (softer advice). 'Has de' = you must (stronger)." },
      { sentence: "___ visitar la Sagrada Família", blank: "Et recomano", options: ["Et dic", "Et recomano", "Et faig", "Et dono"], correctIndex: 1, translation: "I recommend you visit the Sagrada Família", explanation: "'Recomanar' = to recommend. Common for giving suggestions." },
      { sentence: "___, parlaria amb ella", blank: "Si jo fos tu", options: ["Si vols", "Si pots", "Si jo fos tu", "Si tens"], correctIndex: 2, translation: "If I were you, I would talk to her", explanation: "'Si jo fos tu' = if I were you. Hypothetical advice." },
      { sentence: "___ estudies més?", blank: "Per què no", options: ["Quan", "On", "Per què no", "Com"], correctIndex: 2, translation: "Why don't you study more?", explanation: "'Per què no' + verb = why don't you. Gentle suggestion." }
    ],
    listenAndType: [
      { catalan: "Seria millor sortir ara mateix", english: "It would be better to leave right now", pronunciation: "seh-REE-ah mee-YOR sor-TEER AH-rah mah-TEYSH" },
      { catalan: "Suggereixo que parlis amb el teu cap", english: "I suggest you talk with your boss", pronunciation: "soo-jeh-RAY-shoh keh PAR-lees ahm ehl TEH-oo KAHP" },
      { catalan: "Podries provar una altra opció", english: "You could try another option", pronunciation: "poh-DREE-ehs proh-BAR OO-nah AHL-trah ohp-see-OH" },
      { catalan: "És important que descensis bé", english: "It's important that you rest well", pronunciation: "ehs eem-por-TAHN keh dehs-kahn-SEES BEH" }
    ],
    errorCorrection: [
      { sentence: "Deberías ir al médico", errorWordIndex: 0, options: ["Deberías", "Hauries", "Deberias", "Should"], correctIndex: 1, translation: "You should go to the doctor", explanation: "'Hauries de' is Catalan. 'Deberías' is Spanish." },
      { sentence: "Te recomiendo visitar la Sagrada Familia", errorWordIndex: 0, options: ["Te", "Et", "T'", "You"], correctIndex: 1, translation: "I recommend you visit the Sagrada Família", explanation: "'Et recomano' is Catalan. 'Te recomiendo' is Spanish." },
      { sentence: "Si yo fuera tú hablaría con ella", errorWordIndex: 2, options: ["fuera", "fos", "fuer", "were"], correctIndex: 1, translation: "If I were you I would talk to her", explanation: "'Si jo fos tu' is Catalan. 'Si yo fuera tú' is Spanish." },
      { sentence: "Por qué no estudias más?", errorWordIndex: 0, options: ["Por", "Per", "Por", "Why"], correctIndex: 1, translation: "Why don't you study more?", explanation: "'Per què no' is Catalan. 'Por qué no' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Hauries de' = you should (conditional). Softer than 'has de' (you have to). For gentle advice.", words: ["Hauries", "de", "descansar", "una", "mica"], correctOrder: "Hauries de descansar una mica", translation: "You should rest a bit" },
      { grammarNote: "💡 'Recomanar' = recommend. 'Aconsellar' = advise. 'Suggerir' = suggest. All similar meanings.", words: ["Et", "recomano", "que", "llegeixis", "aquest", "llibre"], correctOrder: "Et recomano que llegeixis aquest llibre", translation: "I recommend you read this book" },
      { grammarNote: "💡 'Podries' = you could. 'Per què no' = why don't you. Both for suggestions without pressure.", words: ["Per", "què", "no", "preguntes", "al", "professor"], correctOrder: "Per què no preguntes al professor", translation: "Why don't you ask the teacher" }
    ]
  }
},

// ─── LESSON 95: Apologizing & Excusing ──────────────────────

{
  id: 95,
  title: "Apologizing & Excusing",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "I'm sorry", ca: "Ho sento", pronunciation: "oh SEHN-toh" },
    { en: "Excuse me", ca: "Perdoni", pronunciation: "pehr-DOH-nee" },
    { en: "My apologies", ca: "Les meves disculpes", pronunciation: "lehs MEH-behs dees-KOOL-pehs" },
    { en: "It's my fault", ca: "És culpa meva", pronunciation: "ehs KOOL-pah MEH-bah" },
    { en: "I didn't mean to", ca: "No era la meva intenció", pronunciation: "noh EH-rah lah MEH-bah een-tehn-see-OH" },
    { en: "I apologize", ca: "Em disculpo", pronunciation: "ehm dees-KOOL-poh" },
    { en: "Forgive me", ca: "Perdona'm", pronunciation: "pehr-DOH-nahm" },
    { en: "It won't happen again", ca: "No tornarà a passar", pronunciation: "noh tor-nah-RAH ah pah-SAR" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___ arribar tard", blank: "Ho sento", options: ["Perdó", "Ho sento", "Disculpa", "Estic"], correctIndex: 1, translation: "I'm sorry for arriving late", explanation: "'Ho sento' = I'm sorry (literally: I feel it). Most common apology." },
      { sentence: "___, és culpa meva", blank: "Em disculpo", options: ["Ho sento", "Em disculpo", "Perdona", "Estic"], correctIndex: 1, translation: "I apologize, it's my fault", explanation: "'Em disculpo' = I apologize. More formal than 'ho sento'." },
      { sentence: "___ per haver-te fet esperar", blank: "Perdona'm", options: ["Perdó", "Perdona'm", "Ho sento", "Disculpa"], correctIndex: 1, translation: "Forgive me for making you wait", explanation: "'Perdona'm' = forgive me (informal). 'Perdoni'm' = formal." },
      { sentence: "___ fer-ho", blank: "No era la meva intenció", options: ["Volia", "Pensava", "No era la meva intenció", "Vaig voler"], correctIndex: 2, translation: "I didn't mean to do it", explanation: "'No era la meva intenció' = it wasn't my intention. Shows lack of intent." }
    ],
    listenAndType: [
      { catalan: "Ho sento molt per l'error", english: "I'm very sorry for the mistake", pronunciation: "oh SEHN-toh MOHLT pehr leh-ROHR" },
      { catalan: "Les meves disculpes pel retard", english: "My apologies for the delay", pronunciation: "lehs MEH-behs dees-KOOL-pehs pehl reh-TARD" },
      { catalan: "No tornarà a passar mai més", english: "It will never happen again", pronunciation: "noh tor-nah-RAH ah pah-SAR MAHY MEHS" },
      { catalan: "És totalment culpa meva", english: "It's totally my fault", pronunciation: "ehs toh-tahl-MEHN KOOL-pah MEH-bah" }
    ],
    errorCorrection: [
      { sentence: "Lo siento llegar tarde", errorWordIndex: 0, options: ["Lo", "Ho", "La", "It"], correctIndex: 1, translation: "I'm sorry for arriving late", explanation: "'Ho sento' is Catalan. 'Lo siento' is Spanish." },
      { sentence: "Me disculpo es culpa mía", errorWordIndex: 0, options: ["Me", "Em", "M'", "Myself"], correctIndex: 1, translation: "I apologize it's my fault", explanation: "'Em disculpo' is Catalan. 'Me disculpo' is Spanish." },
      { sentence: "Perdóname por haberte hecho esperar", errorWordIndex: 0, options: ["Perdóname", "Perdona'm", "Perdonam", "Forgive"], correctIndex: 1, translation: "Forgive me for making you wait", explanation: "'Perdona'm' is Catalan. 'Perdóname' is Spanish." },
      { sentence: "No era mi intención hacerlo", errorWordIndex: 2, options: ["mi", "meva", "mi", "my"], correctIndex: 1, translation: "I didn't mean to do it", explanation: "'La meva intenció' is Catalan. 'Mi intención' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Ho sento' = I'm sorry (empathy). 'Perdona/perdoni' = forgive me/excuse me. 'Em disculpo' = I apologize (formal).", words: ["Ho", "sento", "molt", "per", "haver-te", "molestat"], correctOrder: "Ho sento molt per haver-te molestat", translation: "I'm very sorry for having bothered you" },
      { grammarNote: "💡 Taking responsibility: 'És culpa meva' = it's my fault. 'Tinc la culpa' = I'm to blame. Accept mistake directly.", words: ["Reconec", "que", "m'he", "equivocat"], correctOrder: "Reconec que m'he equivocat", translation: "I recognize that I was wrong" },
      { grammarNote: "💡 'No era la meva intenció' = I didn't mean to. Shows lack of malicious intent. 'No ho volia fer' = I didn't want to do it.", words: ["No", "tornarà", "a", "passar", "mai", "més"], correctOrder: "No tornarà a passar mai més", translation: "It will never happen again" }
    ]
  }
},

// CONTINUING WITH FINAL 5 LESSONS (96-100)...

// ─── LESSON 96: Making Complaints ──────────────────────────

{
  id: 96,
  title: "Making Complaints",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Complaint", ca: "Queixa", pronunciation: "KAY-shah" },
    { en: "I'm not satisfied", ca: "No estic satisfet", pronunciation: "noh ehs-TEEK sah-tees-FEHT" },
    { en: "This doesn't work", ca: "Això no funciona", pronunciation: "ah-SHOH noh foon-see-OH-nah" },
    { en: "I want a refund", ca: "Vull un reemborsament", pronunciation: "BOOL oon reh-ehm-bor-sah-MEHN" },
    { en: "This is unacceptable", ca: "Això és inacceptable", pronunciation: "ah-SHOH ehs ee-nahk-sehp-TAH-bleh" },
    { en: "I expected better", ca: "Esperava millor", pronunciation: "ehs-peh-RAH-bah mee-YOR" },
    { en: "Defective", ca: "Defectuós", pronunciation: "deh-fehk-too-OHS" },
    { en: "Poor quality", ca: "Mala qualitat", pronunciation: "MAH-lah kwah-lee-TAHT" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Vull presentar una ___", blank: "queixa", options: ["pregunta", "queixa", "proposta", "oferta"], correctIndex: 1, translation: "I want to file a complaint", explanation: "'Queixa' = complaint. 'Presentar una queixa' = file a complaint." },
      { sentence: "___ amb el servei", blank: "No estic satisfet", options: ["Estic content", "No estic satisfet", "M'agrada", "Està bé"], correctIndex: 1, translation: "I'm not satisfied with the service", explanation: "'No estic satisfet' = I'm not satisfied. For expressing dissatisfaction." },
      { sentence: "Aquest producte és ___", blank: "defectuós", options: ["bo", "car", "defectuós", "nou"], correctIndex: 2, translation: "This product is defective", explanation: "'Defectuós' = defective/faulty. For broken or poor quality items." },
      { sentence: "___ el que he pagat", blank: "Esperava millor", options: ["M'agrada", "Esperava millor", "Vull comprar", "Tinc"], correctIndex: 1, translation: "I expected better for what I paid", explanation: "'Esperava millor' = I expected better. Shows disappointment." }
    ],
    listenAndType: [
      { catalan: "Això no és el que vaig demanar", english: "This isn't what I ordered", pronunciation: "ah-SHOH noh ehs ehl keh BAYCH deh-mah-NAR" },
      { catalan: "Vull parlar amb el responsable", english: "I want to speak with the manager", pronunciation: "BOOL par-LAR ahm ehl rehs-pohn-SAH-bleh" },
      { catalan: "La qualitat no és acceptable", english: "The quality is not acceptable", pronunciation: "lah kwah-lee-TAHT noh ehs ahk-sehp-TAH-bleh" },
      { catalan: "Això no funciona correctament", english: "This doesn't work properly", pronunciation: "ah-SHOH noh foon-see-OH-nah koh-rehk-tah-MEHN" }
    ],
    errorCorrection: [
      { sentence: "Quiero presentar una queja", errorWordIndex: 0, options: ["Quiero", "Vull", "Quier", "Want"], correctIndex: 1, translation: "I want to file a complaint", explanation: "'Vull' is Catalan. 'Quiero' is Spanish." },
      { sentence: "No estoy satisfecho con el servicio", errorWordIndex: 1, options: ["estoy", "estic", "esto", "am"], correctIndex: 1, translation: "I'm not satisfied with the service", explanation: "'Estic' is Catalan. 'Estoy' is Spanish." },
      { sentence: "Este producto es defectuoso", errorWordIndex: 0, options: ["Este", "Aquest", "Est", "This"], correctIndex: 1, translation: "This product is defective", explanation: "'Aquest' is Catalan. 'Este' is Spanish." },
      { sentence: "Esperaba mejor por lo que he pagado", errorWordIndex: 0, options: ["Esperaba", "Esperava", "Esperab", "Expected"], correctIndex: 1, translation: "I expected better for what I paid", explanation: "'Esperava' is Catalan. 'Esperaba' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Presentar una queixa' = file a complaint. 'Full de reclamacions' = complaints form (required in all businesses).", words: ["Vull", "el", "full", "de", "reclamacions"], correctOrder: "Vull el full de reclamacions", translation: "I want the complaints form" },
      { grammarNote: "💡 'Reemborsament' = refund. 'Canviar' = exchange. 'Reparar' = repair. Consumer rights in Catalonia.", words: ["Tinc", "dret", "a", "un", "reemborsament"], correctOrder: "Tinc dret a un reemborsament", translation: "I have a right to a refund" },
      { grammarNote: "💡 'Això no és acceptable' = this isn't acceptable. 'No compleix les expectatives' = doesn't meet expectations.", words: ["Això", "no", "és", "el", "que", "vaig", "demanar"], correctOrder: "Això no és el que vaig demanar", translation: "This isn't what I ordered" }
    ]
  }
},

// ─── LESSON 97: Time Expressions (Advanced) ─────────────────

{
  id: 97,
  title: "Time Expressions",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Meanwhile", ca: "Mentrestant", pronunciation: "mehn-trehs-TAHN" },
    { en: "Previously", ca: "Prèviament", pronunciation: "PREH-bee-ah-mehn" },
    { en: "Immediately", ca: "Immediatament", pronunciation: "ee-meh-dee-ah-tah-MEHN" },
    { en: "Gradually", ca: "Gradualment", pronunciation: "grah-doo-ahl-MEHN" },
    { en: "Simultaneously", ca: "Simultàniament", pronunciation: "see-mool-TAH-nee-ah-mehn" },
    { en: "Eventually", ca: "Finalment", pronunciation: "fee-nahl-MEHN" },
    { en: "Nowadays", ca: "Avui en dia", pronunciation: "ah-BOO-ee ehn DEE-ah" },
    { en: "In the long run", ca: "A la llarga", pronunciation: "ah lah YAR-gah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "___, les coses canvien", blank: "Gradualment", options: ["Ràpid", "Gradualment", "Ara", "Demà"], correctIndex: 1, translation: "Gradually, things change", explanation: "'Gradualment' = gradually. For slow, continuous change over time." },
      { sentence: "___ vam arribar a un acord", blank: "Finalment", options: ["Primer", "Finalment", "Ara", "Després"], correctIndex: 1, translation: "Eventually we reached an agreement", explanation: "'Finalment' = finally/eventually. After a process or wait." },
      { sentence: "___ la gent treballa des de casa", blank: "Avui en dia", options: ["Abans", "Ara", "Avui en dia", "Demà"], correctIndex: 2, translation: "Nowadays people work from home", explanation: "'Avui en dia' = nowadays/these days. Current time period." },
      { sentence: "___ tot anirà bé", blank: "A la llarga", options: ["Ara", "Aviat", "A la llarga", "Després"], correctIndex: 2, translation: "In the long run everything will be fine", explanation: "'A la llarga' = in the long run. Over extended time." }
    ],
    listenAndType: [
      { catalan: "Mentrestant vaig fer altres coses", english: "Meanwhile I did other things", pronunciation: "mehn-trehs-TAHN BAYCH fehr AHL-trehs KOH-zehs" },
      { catalan: "Immediatament vaig trucar la policia", english: "I immediately called the police", pronunciation: "ee-meh-dee-ah-tah-MEHN BAYCH troo-KAR lah poh-lee-SEE-ah" },
      { catalan: "Prèviament havíem parlat del tema", english: "Previously we had discussed the topic", pronunciation: "PREH-bee-ah-mehn ah-BEE-ehm par-LAHT dehl TEH-mah" },
      { catalan: "Simultàniament van passar dues coses", english: "Simultaneously two things happened", pronunciation: "see-mool-TAH-nee-ah-mehn bahn pah-SAR DOO-ehs KOH-zehs" }
    ],
    errorCorrection: [
      { sentence: "Gradualmente las cosas cambian", errorWordIndex: 0, options: ["Gradualmente", "Gradualment", "Gradual", "Gradually"], correctIndex: 1, translation: "Gradually things change", explanation: "'Gradualment' is Catalan. 'Gradualmente' is Spanish." },
      { sentence: "Finalmente llegamos a un acuerdo", errorWordIndex: 0, options: ["Finalmente", "Finalment", "Final", "Finally"], correctIndex: 1, translation: "Eventually we reached an agreement", explanation: "'Finalment' is Catalan. 'Finalmente' is Spanish." },
      { sentence: "Hoy en día la gente trabaja desde casa", errorWordIndex: 0, options: ["Hoy", "Avui", "Hoi", "Today"], correctIndex: 1, translation: "Nowadays people work from home", explanation: "'Avui en dia' is Catalan. 'Hoy en día' is Spanish." },
      { sentence: "A la larga todo irá bien", errorWordIndex: 0, options: ["A", "A", "A", "To"], correctIndex: 1, translation: "In the long run everything will be fine", explanation: "'A la llarga' is Catalan. 'A la larga' is Spanish (similar but different spelling)." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Mentrestant' = meanwhile/in the meantime. 'Alhora' = at the same time. 'Simultàniament' = simultaneously.", words: ["Mentrestant", "jo", "esperava", "a", "fora"], correctOrder: "Mentrestant jo esperava a fora", translation: "Meanwhile I waited outside" },
      { grammarNote: "💡 'Immediatament' = immediately. 'Instantàniament' = instantly. 'De seguida' = right away.", words: ["Ho", "vaig", "fer", "immediatament"], correctOrder: "Ho vaig fer immediatament", translation: "I did it immediately" },
      { grammarNote: "💡 'A la llarga' = in the long run. 'Amb el temps' = with time. 'Al final' = in the end.", words: ["A", "la", "llarga", "tot", "s'arregla"], correctOrder: "A la llarga tot s'arregla", translation: "In the long run everything works out" }
    ]
  }
},

// ─── LESSON 98: Catalan Dialects & Variants ─────────────────

{
  id: 98,
  title: "Catalan Dialects",
  module: "Cultural",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Central Catalan", ca: "Català central", pronunciation: "kah-tah-LAH sehn-TRAHL" },
    { en: "Valencian", ca: "Valencià", pronunciation: "bah-lehn-see-AH" },
    { en: "Balearic", ca: "Balear", pronunciation: "bah-leh-AR" },
    { en: "Northwestern", ca: "Nord-occidental", pronunciation: "nord-ohk-see-dehn-TAHL" },
    { en: "Accent", ca: "Accent", pronunciation: "ahk-SEHN" },
    { en: "Pronunciation", ca: "Pronunciació", pronunciation: "proh-noon-see-ah-see-OH" },
    { en: "Variety", ca: "Varietat", pronunciation: "bah-ree-eh-TAHT" },
    { en: "Dialect", ca: "Dialecte", pronunciation: "dee-ah-LEHK-teh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "El ___ es parla a Barcelona", blank: "català central", options: ["valencià", "català central", "balear", "dialecte"], correctIndex: 1, translation: "Central Catalan is spoken in Barcelona", explanation: "'Català central' = Central Catalan. Standard variety, spoken in Barcelona and surrounding areas." },
      { sentence: "El ___ és la varietat de les Illes Balears", blank: "balear", options: ["valencià", "central", "balear", "nord-occidental"], correctIndex: 2, translation: "Balearic is the variety of the Balearic Islands", explanation: "'Balear' = Balearic dialect. Spoken in Mallorca, Menorca, Ibiza, Formentera." },
      { sentence: "A València parlen ___", blank: "valencià", options: ["català", "valencià", "balear", "castellà"], correctIndex: 1, translation: "In Valencia they speak Valencian", explanation: "'Valencià' = Valencian. Catalan variety spoken in Valencia region." },
      { sentence: "Cada zona té un ___ diferent", blank: "accent", options: ["idioma", "accent", "valencià", "central"], correctIndex: 1, translation: "Each area has a different accent", explanation: "'Accent' = accent. Regional pronunciation differences within Catalan." }
    ],
    listenAndType: [
      { catalan: "El català té diverses varietats dialectals", english: "Catalan has various dialectal varieties", pronunciation: "ehl kah-tah-LAH teh dee-BEHR-sehs bah-ree-eh-TAHTS dee-ah-lehk-TAHLS" },
      { catalan: "La pronunciació canvia segons la regió", english: "Pronunciation changes according to region", pronunciation: "lah proh-noon-see-ah-see-OH KAHN-bee-ah seh-GOHNS lah reh-jee-OH" },
      { catalan: "Tots els dialectes són igualment vàlids", english: "All dialects are equally valid", pronunciation: "TOHTS ehls dee-ah-LEHK-tehs sohn ee-gwahl-MEHN BAH-leeds" },
      { catalan: "El vocabulari també varia una mica", english: "Vocabulary also varies a bit", pronunciation: "ehl boh-kah-boo-LAH-ree tahm-BEH bah-REE-ah OO-nah MEE-kah" }
    ],
    errorCorrection: [
      { sentence: "El catalán central se habla en Barcelona", errorWordIndex: 1, options: ["catalán", "català", "catala", "Catalan"], correctIndex: 1, translation: "Central Catalan is spoken in Barcelona", explanation: "'Català' is Catalan. 'Catalán' is Spanish." },
      { sentence: "El balear es la variedad de las Islas Baleares", errorWordIndex: 3, options: ["variedad", "varietat", "variet", "variety"], correctIndex: 1, translation: "Balearic is the variety of the Balearic Islands", explanation: "'Varietat' is Catalan. 'Variedad' is Spanish." },
      { sentence: "En Valencia hablan valenciano", errorWordIndex: 0, options: ["En", "A", "En", "In"], correctIndex: 1, translation: "In Valencia they speak Valencian", explanation: "'A València' is Catalan. 'En Valencia' is Spanish." },
      { sentence: "Cada zona tiene un acento diferente", errorWordIndex: 1, options: ["tiene", "té", "tien", "has"], correctIndex: 1, translation: "Each area has a different accent", explanation: "'Té' is Catalan. 'Tiene' is Spanish." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Main dialects: Central (Barcelona), Northwestern (Lleida), Valencian (Valencia), Balearic (Islands). All mutually intelligible.", words: ["El", "català", "central", "és", "la", "varietat", "més", "parlada"], correctOrder: "El català central és la varietat més parlada", translation: "Central Catalan is the most spoken variety" },
      { grammarNote: "💡 Differences: pronunciation (vowel reduction), vocabulary (taronja vs. or ange), grammar (articles: el vs. es).", words: ["La", "pronunciació", "varia", "segons", "el", "dialecte"], correctOrder: "La pronunciació varia segons el dialecte", translation: "Pronunciation varies according to dialect" },
      { grammarNote: "💡 All varieties are official and equal. No 'correct' dialect. Balearic says 'es' for 'the', Central says 'el'.", words: ["Tots", "els", "dialectes", "catalans", "són", "vàlids"], correctOrder: "Tots els dialectes catalans són vàlids", translation: "All Catalan dialects are valid" }
    ]
  }
},

// ─── LESSON 99: False Friends (Catalan-Spanish) ─────────────

{
  id: 99,
  title: "False Friends",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Exit (Catalan: sortida)", ca: "Sortida", pronunciation: "sor-TEE-dah" },
    { en: "Success (Catalan: èxit)", ca: "Èxit", pronunciation: "EHK-seet" },
    { en: "Salida = exit (Spanish, NOT Catalan)", ca: "⚠️ Salida (ESP)", pronunciation: "sah-LEE-dah" },
    { en: "Constipated (Catalan: restrenyit)", ca: "Restrenyit", pronunciation: "rehs-trehn-YEET" },
    { en: "Cold (illness) (Catalan: refredat)", ca: "Refredat", pronunciation: "reh-freh-DAHT" },
    { en: "Embarrassed (Catalan: avergonyit)", ca: "Avergonyit", pronunciation: "ah-behr-goh-NYEET" },
    { en: "Pregnant (Catalan: embarassada)", ca: "Embarassada", pronunciation: "ehm-bah-rah-SAH-dah" },
    { en: "Library (Catalan: biblioteca)", ca: "Biblioteca", pronunciation: "bee-blee-oh-TEH-kah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "On és la ___?", blank: "sortida", options: ["salida", "sortida", "èxit", "entrada"], correctIndex: 1, translation: "Where is the exit?", explanation: "'Sortida' = exit in Catalan. 'Salida' is Spanish. Don't confuse! 'Èxit' = success." },
      { sentence: "Estic ___, tinc el nas tapat", blank: "refredat", options: ["constipat", "refredat", "malalt", "restrenyit"], correctIndex: 1, translation: "I have a cold, my nose is blocked", explanation: "'Refredat' = cold (illness). 'Constipat' is Spanish. DON'T say 'estic constipat' (means constipated!)." },
      { sentence: "La seva dona està ___", blank: "embarassada", options: ["avergonyida", "embarassada", "confosa", "molesta"], correctIndex: 1, translation: "His wife is pregnant", explanation: "'Embarassada' = pregnant. 'Avergonyit' = embarrassed. Major false friend!" },
      { sentence: "Vaig a la ___ a buscar llibres", blank: "biblioteca", options: ["llibreria", "biblioteca", "botiga", "tenda"], correctIndex: 1, translation: "I'm going to the library to look for books", explanation: "'Biblioteca' = library. 'Llibreria' = bookstore. Different meanings!" }
    ],
    listenAndType: [
      { catalan: "El projecte ha estat un èxit", english: "The project has been a success", pronunciation: "ehl proh-JEHK-teh ah ehs-TAHT oon EHK-seet" },
      { catalan: "Estic restrenyit des de fa dies", english: "I've been constipated for days", pronunciation: "ehs-TEEK rehs-trehn-YEET dehs deh FAH DEE-ehs" },
      { catalan: "Em sento avergonyit per l'error", english: "I feel embarrassed about the mistake", pronunciation: "ehm SEHN-toh ah-behr-goh-NYEET pehr leh-ROHR" },
      { catalan: "La sortida d'emergència està al fons", english: "The emergency exit is at the back", pronunciation: "lah sor-TEE-dah deh-mehr-JEHN-see-ah ehs-TAH ahl FOHNS" }
    ],
    errorCorrection: [
      { sentence: "Dónde está la salida?", errorWordIndex: 3, options: ["salida", "sortida", "salid", "exit"], correctIndex: 1, translation: "Where is the exit?", explanation: "'Sortida' is Catalan for exit. 'Salida' is Spanish. Major false friend!" },
      { sentence: "Estoy constipado tengo la nariz tapada", errorWordIndex: 1, options: ["constipado", "refredat", "constipad", "cold"], correctIndex: 1, translation: "I have a cold my nose is blocked", explanation: "'Refredat' = cold in Catalan. 'Constipat' means constipated! Embarrassing mistake." },
      { sentence: "Su mujer está embarazada", errorWordIndex: 3, options: ["embarazada", "embarassada", "embarazad", "pregnant"], correctIndex: 1, translation: "His wife is pregnant", explanation: "'Embarassada' is Catalan for pregnant. Similar spelling to Spanish but Catalan has double 's'." },
      { sentence: "Voy a la librería a buscar libros", errorWordIndex: 3, options: ["librería", "biblioteca", "libreri", "library"], correctIndex: 1, translation: "I'm going to the library to look for books", explanation: "'Biblioteca' = library. 'Llibreria' = bookstore (where you buy books)." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 CRITICAL: 'Refredat' = cold. 'Constipat' = constipated. NEVER say 'estic constipat' if you have a cold!", words: ["Tinc", "un", "refredat", "terrible"], correctOrder: "Tinc un refredat terrible", translation: "I have a terrible cold" },
      { grammarNote: "💡 'Embarassada' = pregnant. 'Avergonyit' = embarrassed. Don't mix these up in conversation!", words: ["Està", "embarassada", "de", "cinc", "mesos"], correctOrder: "Està embarassada de cinc mesos", translation: "She's five months pregnant" },
      { grammarNote: "💡 'Sortida' = exit. 'Èxit' = success. 'Biblioteca' = library. 'Llibreria' = bookstore.", words: ["On", "és", "la", "sortida", "d'emergència"], correctOrder: "On és la sortida d'emergència", translation: "Where is the emergency exit" }
    ]
  }
},

// ─── LESSON 100: Review & Mastery ──────────────────────────

{
  id: 100,
  title: "Catalan Mastery",
  module: "Advanced",
  stages: ['intro', 'fillInTheBlank', 'listenAndType', 'errorCorrection', 'sentenceOrdering'],
  words: [
    { en: "Fluently", ca: "Amb fluïdesa", pronunciation: "ahm floo-ee-DEH-sah" },
    { en: "Native speaker", ca: "Parlant natiu", pronunciation: "par-LAHN nah-TEE-oo" },
    { en: "To master", ca: "Dominar", pronunciation: "doh-mee-NAR" },
    { en: "Bilingual", ca: "Bilingüe", pronunciation: "bee-leen-GWEH" },
    { en: "Proficiency", ca: "Competència", pronunciation: "kohm-peh-TEHN-see-ah" },
    { en: "To improve", ca: "Millorar", pronunciation: "mee-yoh-RAR" },
    { en: "Practice", ca: "Pràctica", pronunciation: "PRAHK-tee-kah" },
    { en: "Congratulations!", ca: "Felicitats!", pronunciation: "feh-lee-see-TAHTS" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Ja parlo català ___", blank: "amb fluïdesa", options: ["bé", "amb fluïdesa", "una mica", "malament"], correctIndex: 1, translation: "I already speak Catalan fluently", explanation: "'Amb fluïdesa' = fluently. You've reached advanced proficiency!" },
      { sentence: "Vull ___ el meu català", blank: "millorar", options: ["parlar", "millorar", "aprendre", "estudiar"], correctIndex: 1, translation: "I want to improve my Catalan", explanation: "'Millorar' = to improve. Learning is continuous!" },
      { sentence: "Tinc una bona ___ en català", blank: "competència", options: ["idea", "competència", "pregunta", "resposta"], correctIndex: 1, translation: "I have good proficiency in Catalan", explanation: "'Competència' = proficiency/competence. Measure of language ability." },
      { sentence: "La ___ fa el mestre", blank: "pràctica", options: ["teoria", "pràctica", "lectura", "gramàtica"], correctIndex: 1, translation: "Practice makes perfect", explanation: "'La pràctica fa el mestre' = practice makes the master (Catalan saying)." }
    ],
    listenAndType: [
      { catalan: "Felicitats per completar tots els nivells!", english: "Congratulations on completing all levels!", pronunciation: "feh-lee-see-TAHTS pehr kohm-pleh-TAR TOHTS ehls nee-BEHLS" },
      { catalan: "Ara pots mantenir converses complexes en català", english: "Now you can maintain complex conversations in Catalan", pronunciation: "AH-rah POHTS mahn-teh-NEER kohn-BEHR-sehs kohm-PLEHK-sehs ehn kah-tah-LAH" },
      { catalan: "Has après des de zero fins a nivell avançat", english: "You've learned from zero to advanced level", pronunciation: "AHS ah-PREHS dehs deh ZEH-roh feens ah nee-BEHL ah-bahn-SAHT" },
      { catalan: "Continua practicant i milloraràs cada dia", english: "Keep practicing and you'll improve every day", pronunciation: "kohn-TEE-noo-ah prahk-tee-KAHN ee mee-yoh-rah-RAHS KAH-dah DEE-ah" }
    ],
    errorCorrection: [
      { sentence: "Ya hablo catalán con fluidez", errorWordIndex: 0, options: ["Ya", "Ja", "Ya", "Already"], correctIndex: 1, translation: "I already speak Catalan fluently", explanation: "'Ja' is Catalan. 'Ya' is Spanish. You know this now!" },
      { sentence: "Quiero mejorar mi catalán", errorWordIndex: 0, options: ["Quiero", "Vull", "Quier", "Want"], correctIndex: 1, translation: "I want to improve my Catalan", explanation: "'Vull' is Catalan. After 100 lessons, this should be automatic!" },
      { sentence: "Tengo buena competencia en catalán", errorWordIndex: 0, options: ["Tengo", "Tinc", "Teng", "Have"], correctIndex: 1, translation: "I have good proficiency in Catalan", explanation: "'Tinc' is Catalan. You've mastered this!" },
      { sentence: "La práctica hace al maestro", errorWordIndex: 1, options: ["práctica", "pràctica", "practic", "practice"], correctIndex: 1, translation: "Practice makes perfect", explanation: "'Pràctica' is Catalan. Keep practicing!" }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 You've completed 100 lessons! From greetings to advanced grammar, culture, business, and idioms. Enhorabona!", words: ["Has", "completat", "cent", "lliçons", "de", "català"], correctOrder: "Has completat cent lliçons de català", translation: "You've completed one hundred Catalan lessons" },
      { grammarNote: "💡 Keep learning: Read Catalan news, watch TV3, listen to Catalunya Ràdio, speak with natives. Immersion is key!", words: ["La", "millor", "manera", "d'aprendre", "és", "practicar"], correctOrder: "La millor manera d'aprendre és practicar", translation: "The best way to learn is to practice" },
      { grammarNote: "💡 You can now: order food, negotiate business, discuss culture, express opinions, handle emergencies. Molt bé!", words: ["Ara", "pots", "viure", "i", "treballar", "en", "català"], correctOrder: "Ara pots viure i treballar en català", translation: "Now you can live and work in Catalan" }
    ]
  }
},

];
