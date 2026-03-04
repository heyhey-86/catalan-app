// ============================================================
// HOLACATALÀ — LESSONS 141-150
// File: src/lessons140.js
// Export: lessons140
// Add to App.jsx:
//   import { lessons140 } from './lessons140.js'
//   const LESSONS = [...lessons50, ...lessons100, ...lessons120, ...lessons140]
// Add LESSON_TIERS entries (tiers 49-52) after tier 48:
//   { tier: 49, lessons: [141, 142, 143] },
//   { tier: 50, lessons: [144, 145, 146] },
//   { tier: 51, lessons: [147, 148, 149] },
//   { tier: 52, lessons: [150] }
// After deploying: run node generate-audio.cjs
// Add src/lessons140.js to generate-audio.cjs file list
// ============================================================

export const lessons140 = [

  // ─── LESSON 141: Advanced Idioms & Proverbs ─────────────────────────────────
  {
    id: 141,
    title: "Idioms & Proverbs",
    module: "Advanced Expression",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'storyMode', 'quickFire'],
    words: [
      { en: "To cost an arm and a leg", ca: "Costar un ull de la cara", pronunciation: "kos-TAR oon OOL deh lah KAH-rah" },
      { en: "It's raining cats and dogs", ca: "Plou a bots i barrals", pronunciation: "PLOW ah BOTS ee bah-RALS" },
      { en: "To beat around the bush", ca: "Anar amb rodeos", pronunciation: "ah-NAR amb roh-DEH-os" },
      { en: "Every cloud has a silver lining", ca: "No hi ha mal que per bé no vingui", pronunciation: "noh ee ah MAL keh per BEH noh VEEN-ghee" },
      { en: "To bite the bullet", ca: "Aguantar el tipus", pronunciation: "ah-gwan-TAR ehl TEE-poos" },
      { en: "Better late than never", ca: "Més val tard que mai", pronunciation: "MEHS val TARD keh MY" },
      { en: "To be in hot water", ca: "Estar en un bon embolic", pronunciation: "ehs-TAR ehn oon bon em-boh-LEEK" },
      { en: "To pull someone's leg", ca: "Prendre el pèl a algú", pronunciation: "PREN-dreh ehl PEL ah al-GOO" },
      { en: "Once in a blue moon", ca: "De Pasqua a Ramos", pronunciation: "deh PAS-kwah ah RAH-mos" },
      { en: "The early bird catches the worm", ca: "A qui madruga, Déu l'ajuda", pronunciation: "ah kee mah-DROO-gah DEH-oo lah-ZHOO-dah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Aquell cotxe nou li ha costat ___ de la cara", blank: "un ull", options: ["un ull", "un braç", "una cama", "un dit"], correctIndex: 0, translation: "That new car cost him an arm and a leg", explanation: "'Costar un ull de la cara' literally means 'to cost an eye of the face' — used for anything very expensive." },
        { sentence: "Avui plou a bots i ___ — millor quedar-se a casa", blank: "barrals", options: ["barrals", "gotes", "rius", "mars"], correctIndex: 0, translation: "Today it's raining cats and dogs — better to stay home", explanation: "'Plou a bots i barrals' means it's pouring heavily. 'Barrals' are large barrels." },
        { sentence: "No ___ el pèl — és veritat!", blank: "et prenc", options: ["et prenc", "et dono", "et trec", "et poso"], correctIndex: 0, translation: "I'm not pulling your leg — it's true!", explanation: "'Prendre el pèl' = to pull someone's leg / to tease. 'No et prenc el pèl' = I'm being serious." },
        { sentence: "Més val ___ que mai — has acabat el curs!", blank: "tard", options: ["tard", "aviat", "poc", "molt"], correctIndex: 0, translation: "Better late than never — you finished the course!", explanation: "This proverb is identical in meaning to English. 'Val' here comes from 'valer' (to be worth)." },
        { sentence: "Venim aquí de Pasqua a ___", blank: "Ramos", options: ["Ramos", "Nadal", "l'estiu", "sempre"], correctIndex: 0, translation: "We come here once in a blue moon", explanation: "'De Pasqua a Ramos' = from Easter to Palm Sunday — they're a week apart, but the phrase means very rarely." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'No hi ha mal que per bé no vingui' — literally 'there is no bad that doesn't come for good'. Subjunctive 'vingui' makes this an advanced structure.", words: ["No", "hi", "ha", "mal", "que", "per", "bé", "no", "vingui"], correctOrder: "No hi ha mal que per bé no vingui", translation: "Every cloud has a silver lining" },
        { grammarNote: "💡 'A qui madruga, Déu l'ajuda' — 'madruga' = gets up early (from 'madrugar'). Formal proverb structure with dative pronoun 'l'ajuda'.", words: ["A", "qui", "madruga,", "Déu", "l'ajuda"], correctOrder: "A qui madruga, Déu l'ajuda", translation: "The early bird catches the worm" },
        { grammarNote: "💡 'Anar amb rodeos' = to go in circles/beat around the bush. Used to tell someone to get to the point.", words: ["No", "vagis", "amb", "rodeos", "i", "digues", "la", "veritat"], correctOrder: "No vagis amb rodeos i digues la veritat", translation: "Stop beating around the bush and tell the truth" },
        { grammarNote: "💡 'Aguantar el tipus' = to hold it together / grin and bear it. Often used when someone is managing a difficult situation stoically.", words: ["Estava", "malament", "però", "va", "aguantar", "el", "tipus"], correctOrder: "Estava malament però va aguantar el tipus", translation: "She was struggling but she bit the bullet" }
      ],
      storyMode: {
        story: "La Maria ha comprat un pis nou que li ha costat [BLANK] de la cara. El seu germà li diu que va pagar massa, però ella li respon que no li [BLANK] el pèl — el pis val cada euro. Ara viu allà de Pasqua a [BLANK]: gairebé mai la veiem. Però quan ve, sempre diu que és millor tard que [BLANK].",
        translation: "Maria has bought a new flat that cost her an arm and a leg. Her brother tells her she overpaid, but she replies that she is not pulling his leg — the flat is worth every euro. Now she lives there once in a blue moon: we barely see her. But when she comes, she always says better late than never.",
        blanks: [
          { word: "un ull", options: ["un ull", "un braç", "molt", "tot"] },
          { word: "prenc", options: ["prenc", "dono", "trec", "dic"] },
          { word: "Ramos", options: ["Ramos", "sovint", "Nadal", "sempre"] },
          { word: "mai", options: ["mai", "aviat", "poc", "malament"] }
        ]
      }
    }
  },

  // ─── LESSON 142: Catalan Literature & Poetry ────────────────────────────────
  {
    id: 142,
    title: "Literature & Poetry",
    module: "Catalan Culture",
    stages: ['intro', 'flashcards', 'listenAndType', 'errorCorrection', 'storyMode', 'quickFire'],
    words: [
      { en: "Novel", ca: "Novel·la", pronunciation: "noh-VEL-lah" },
      { en: "Poetry", ca: "Poesia", pronunciation: "poh-eh-ZEE-ah" },
      { en: "Author", ca: "Autor/a", pronunciation: "ow-TOR / ow-TOH-rah" },
      { en: "Chapter", ca: "Capítol", pronunciation: "kah-PEE-tol" },
      { en: "Character", ca: "Personatge", pronunciation: "per-soh-NAH-zheh" },
      { en: "Plot", ca: "Argument", pronunciation: "ar-goo-MENT" },
      { en: "Publisher", ca: "Editorial", pronunciation: "eh-dee-toh-ree-AL" },
      { en: "Verse", ca: "Vers", pronunciation: "BEHRS" },
      { en: "Rhyme", ca: "Rima", pronunciation: "REE-mah" },
      { en: "Narrative", ca: "Narració", pronunciation: "nah-rah-see-OH" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Mercè Rodoreda és la gran novel·lista catalana del segle vint", english: "Mercè Rodoreda is the great Catalan novelist of the twentieth century", pronunciation: "mer-SEH roh-doh-REH-dah EHS lah gran noh-vel-LIS-tah kah-tah-LAH-nah dehl SEH-gleh BINT" },
        { catalan: "La plaça del Diamant és considerada una obra mestra", english: "La plaça del Diamant is considered a masterpiece", pronunciation: "lah PLAH-sah dehl dee-ah-MANT EHS kon-see-deh-RAH-dah OO-nah OH-brah MES-trah" },
        { catalan: "El primer capítol del llibre m'ha enganxat completament", english: "The first chapter of the book has completely hooked me", pronunciation: "ehl pree-MER kah-PEE-tol dehl YLEE-breh mah en-gan-CHAT kom-pleh-tah-MENT" },
        { catalan: "La poesia de Salvador Espriu és molt difícil de traduir", english: "Salvador Espriu's poetry is very difficult to translate", pronunciation: "lah poh-eh-ZEE-ah deh sal-vah-DOR es-PREE-oo EHS molt dee-FEE-seel deh trah-DWEER" }
      ],
      errorCorrection: [
        { sentence: "La autora va escriure una novel·la molt emotiva", errorWordIndex: 1, options: ["La", "L'autora", "autora", "Aquesta autora"], correctIndex: 1, translation: "The author wrote a very emotional novel", explanation: "Before a vowel sound, 'la' contracts to 'l''. 'La autora' → 'L'autora'. Same rule as 'l'home', 'l'escola'." },
        { sentence: "He llegit tots els capítuls del llibre", errorWordIndex: 4, options: ["capítuls", "capítol", "capítols", "capítoles"], correctIndex: 2, translation: "I have read all the chapters of the book", explanation: "'Capítol' → plural 'capítols'. Words ending in -ol take -s in the plural. 'Capítuls' is a common mistake." },
        { sentence: "El personatge principal és un home molt fort", errorWordIndex: 0, options: ["El", "La", "Un", "Aquest"], correctIndex: 0, translation: "The main character is a very strong man", explanation: "This sentence is actually correct. 'El personatge' is masculine — 'personatge' is always masculine in Catalan regardless of the character's gender." },
        { sentence: "Aquesta editorial publica llibres en català i castellà", errorWordIndex: 0, options: ["Aquesta", "Aquest", "Aquell", "Aquella"], correctIndex: 0, translation: "This publisher publishes books in Catalan and Spanish", explanation: "Correct — 'editorial' is feminine in Catalan ('la editorial'). 'Aquesta' is the right feminine demonstrative." }
      ],
      storyMode: {
        story: "La Joana és una gran lectora. La seva [BLANK] preferida és Mercè Rodoreda, la gran [BLANK] catalana del segle vint. Cada setmana llegeix un [BLANK] nou. Li agrada especialment el primer [BLANK] — diu que si no t'enganxa al principi, no val la pena continuar. La seva [BLANK] preferida és 'La plaça del Diamant'.",
        translation: "Joana is an avid reader. Her favourite author is Mercè Rodoreda, the great Catalan novelist of the twentieth century. Every week she reads a new novel. She especially likes the first chapter — she says if it does not hook you at the start, it is not worth continuing. Her favourite novel is 'La plaça del Diamant'.",
        blanks: [
          { word: "autora", options: ["autora", "novel·la", "poesia", "editorial"] },
          { word: "novel·lista", options: ["novel·lista", "poetessa", "autora", "escriptora"] },
          { word: "llibre", options: ["llibre", "vers", "capítol", "rima"] },
          { word: "capítol", options: ["capítol", "vers", "argument", "personatge"] },
          { word: "novel·la", options: ["novel·la", "poesia", "narració", "editorial"] }
        ]
      }
    }
  },

  // ─── LESSON 143: Formal Writing & Letters ───────────────────────────────────
  {
    id: 143,
    title: "Formal Writing",
    module: "Professional",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire'],
    words: [
      { en: "Formal letter", ca: "Carta formal", pronunciation: "KAR-tah for-MAL" },
      { en: "Dear Sir/Madam", ca: "Benvolgut/da senyor/a", pronunciation: "ben-vol-GOOT seh-NYOR" },
      { en: "I am writing to...", ca: "Em dirigeixo a vostè per...", pronunciation: "em dee-ree-ZHAY-sho ah vos-TEH per" },
      { en: "With regard to", ca: "Pel que fa a", pronunciation: "pehl keh FAH ah" },
      { en: "I would be grateful if", ca: "Li agrairia que", pronunciation: "lee ah-grah-ee-REE-ah keh" },
      { en: "Please find enclosed", ca: "Adjunto trobarà", pronunciation: "ahd-ZHOON-toh troh-bah-RAH" },
      { en: "Yours faithfully", ca: "Atentament", pronunciation: "ah-ten-tah-MENT" },
      { en: "Yours sincerely", ca: "Cordialment", pronunciation: "kor-dee-al-MENT" },
      { en: "To whom it may concern", ca: "A qui correspongui", pronunciation: "ah kee kor-ehs-PON-ghee" },
      { en: "Looking forward to hearing from you", ca: "En espera de les seves notícies", pronunciation: "en ehs-PEH-rah deh lehs SEH-vehs noh-TEE-see-ehs" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Em dirigeixo a vostè ___ sol·licitar més informació", blank: "per", options: ["per", "amb", "de", "a"], correctIndex: 0, translation: "I am writing to you to request more information", explanation: "'Em dirigeixo a vostè per...' is the standard formal opening. 'Per' introduces the purpose of writing." },
        { sentence: "___ trobarà els documents sol·licitats", blank: "Adjunt", options: ["Adjunt", "Aquí", "Dins", "Sobre"], correctIndex: 0, translation: "Please find enclosed the requested documents", explanation: "'Adjunt/a trobarà' = attached/enclosed you will find. Essential for formal correspondence." },
        { sentence: "Li ___ que em confirmés la data de la reunió", blank: "agrairia", options: ["agrairia", "agradaria", "voldria", "demanaria"], correctIndex: 0, translation: "I would be grateful if you could confirm the meeting date", explanation: "'Li agrairia que' + subjunctive is a polite formal request. More formal than 'voldria'." },
        { sentence: "En espera de les seves ___, el saludo atentament", blank: "notícies", options: ["notícies", "cartes", "respostes", "paraules"], correctIndex: 0, translation: "Looking forward to hearing from you, yours faithfully", explanation: "'En espera de les seves notícies' is the standard formal closing phrase before the sign-off." },
        { sentence: "Pel que fa a la seva ___, li responc el següent", blank: "consulta", options: ["consulta", "pregunta", "dubte", "problema"], correctIndex: 0, translation: "With regard to your enquiry, I respond as follows", explanation: "'Pel que fa a' = regarding / with regard to. Formal connective for introducing the subject." }
      ],
      miniConversation: {
        scenario: "You're writing a formal email to a local council office about a noise complaint.",
        turns: [
          { speaker: "Ajuntament", text: "Benvingut al servei d'atenció ciutadana. En que podem ajudar-lo?", isUserTurn: false, translation: "Welcome to the citizen services department. How can we help you?" },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Say you are writing regarding a noise problem in your street", correctSentence: "Em dirigeixo a vostès pel que fa a un problema de soroll al meu carrer", wordBank: ["Em", "dirigeixo", "a", "vostès", "pel", "que", "fa", "a", "un", "problema", "de", "soroll", "al", "meu", "carrer"] },
          { speaker: "Ajuntament", text: "Entès. Podria especificar l'adreça i l'horari del soroll?", isUserTurn: false, translation: "Understood. Could you specify the address and the timing of the noise?" },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Say you would be grateful if they could investigate the matter", correctSentence: "Li agrairia que investigués l'assumpte el més aviat possible", wordBank: ["Li", "agrairia", "que", "investigués", "l'assumpte", "el", "més", "aviat", "possible"] },
          { speaker: "Ajuntament", text: "D'acord. Li enviarem una resposta formal en un termini de deu dies hàbils.", isUserTurn: false, translation: "Very well. We will send you a formal response within ten working days." },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Thank them and say you look forward to hearing from them", correctSentence: "Moltes gràcies. En espera de les seves notícies, els saludo atentament", wordBank: ["Moltes", "gràcies.", "En", "espera", "de", "les", "seves", "notícies,", "els", "saludo", "atentament"] }
        ]
      }
    }
  },

  // ─── LESSON 144: Politics & Current Affairs (Advanced) ──────────────────────
  {
    id: 144,
    title: "Politics & Society",
    module: "Society",
    stages: ['intro', 'flashcards', 'sentenceOrdering', 'listenAndType', 'storyMode', 'quickFire'],
    words: [
      { en: "Independence", ca: "Independència", pronunciation: "een-deh-pen-DEN-see-ah" },
      { en: "Referendum", ca: "Referèndum", pronunciation: "reh-feh-REN-doom" },
      { en: "Self-determination", ca: "Autodeterminació", pronunciation: "ow-toh-deh-ter-mee-nah-see-OH" },
      { en: "Coalition", ca: "Coalició", pronunciation: "koh-ah-lee-see-OH" },
      { en: "Manifesto", ca: "Manifest", pronunciation: "mah-nee-FEST" },
      { en: "Constitution", ca: "Constitució", pronunciation: "kon-stee-too-see-OH" },
      { en: "Protest", ca: "Manifestació", pronunciation: "mah-nee-fes-tah-see-OH" },
      { en: "Strike", ca: "Vaga", pronunciation: "VAH-gah" },
      { en: "Civil society", ca: "Societat civil", pronunciation: "soh-see-eh-TAT see-BEEL" },
      { en: "Sovereignty", ca: "Sobirania", pronunciation: "soh-bee-rah-NEE-ah" }
    ],
    stageData: {
      sentenceOrdering: [
        { grammarNote: "💡 'El dret a l'autodeterminació' = the right to self-determination. 'Dret a' + noun is a key political phrase structure.", words: ["El", "dret", "a", "l'autodeterminació", "és", "reconegut", "internacionalment"], correctOrder: "El dret a l'autodeterminació és reconegut internacionalment", translation: "The right to self-determination is internationally recognised" },
        { grammarNote: "💡 'Convocar una vaga' = to call a strike. 'Convocar' is the key verb for officially calling/summoning events, elections, strikes.", words: ["Els", "sindicats", "han", "convocat", "una", "vaga", "general"], correctOrder: "Els sindicats han convocat una vaga general", translation: "The unions have called a general strike" },
        { grammarNote: "💡 'Fer una manifestació' = to hold a protest. In Catalan news, 'manifestació' refers to a peaceful public demonstration.", words: ["Milers", "de", "persones", "han", "sortit", "al", "carrer"], correctOrder: "Milers de persones han sortit al carrer", translation: "Thousands of people have taken to the streets" },
        { grammarNote: "💡 'Coalició de govern' = governing coalition. Catalan politics frequently involves multiparty agreements ('pactes de govern').", words: ["Els", "partits", "han", "format", "una", "coalició", "de", "govern"], correctOrder: "Els partits han format una coalició de govern", translation: "The parties have formed a governing coalition" }
      ],
      listenAndType: [
        { catalan: "La qüestió de la independència divideix l'opinió pública", english: "The issue of independence divides public opinion", pronunciation: "lah kwehs-tee-OH deh lah een-deh-pen-DEN-see-ah dee-BEE-dehks loh-pee-nee-OH POO-blee-kah" },
        { catalan: "El govern ha anunciat eleccions anticipades per al mes vinent", english: "The government has announced early elections for next month", pronunciation: "ehl goh-BERN ah ah-noon-see-AT eh-lek-see-ONS ahn-tee-see-PAH-dehs per al mehs BEE-nent" },
        { catalan: "La societat civil juga un paper fonamental en la democràcia", english: "Civil society plays a fundamental role in democracy", pronunciation: "lah soh-see-eh-TAT see-BEEL ZHOO-gah oon pah-PER foh-nah-men-TAL en lah deh-moh-KRAH-see-ah" }
      ],
      storyMode: {
        story: "El País de la Llibertat celebra eleccions. Dos partits han format una [BLANK] de govern. L'oposició ha convocat una gran [BLANK] al centre de la ciutat. Milers de persones han sortit al [BLANK] per defensar els seus drets. El govern diu que respectarà la [BLANK] civil. Al final, tots esperen arribar a un [BLANK].",
        translation: "The Land of Freedom is holding elections. Two parties have formed a governing coalition. The opposition has called a major protest in the city centre. Thousands of people have taken to the streets to defend their rights. The government says it will respect civil society. In the end, everyone hopes to reach an agreement.",
        blanks: [
          { word: "coalició", options: ["coalició", "manifestació", "vaga", "constitució"] },
          { word: "manifestació", options: ["manifestació", "coalició", "vaga", "sobirania"] },
          { word: "carrer", options: ["carrer", "parlament", "govern", "manifest"] },
          { word: "societat", options: ["societat", "constitució", "sobirania", "coalició"] },
          { word: "acord", options: ["acord", "referèndum", "manifest", "vaga"] }
        ]
      }
    }
  },

  // ─── LESSON 145: Catalan Diaspora & Identity ────────────────────────────────
  {
    id: 145,
    title: "Diaspora & Identity",
    module: "Catalan Culture",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'storyMode', 'quickFire'],
    words: [
      { en: "Diaspora", ca: "Diàspora", pronunciation: "dee-AHS-poh-rah" },
      { en: "Heritage", ca: "Patrimoni", pronunciation: "pah-tree-MOH-nee" },
      { en: "Identity", ca: "Identitat", pronunciation: "ee-den-tee-TAT" },
      { en: "Exile", ca: "Exili", pronunciation: "ehk-SEE-lee" },
      { en: "Homeland", ca: "Pàtria", pronunciation: "PAH-tree-ah" },
      { en: "Community abroad", ca: "Comunitat a l'exterior", pronunciation: "koh-moo-nee-TAT ah lehks-teh-ree-OR" },
      { en: "To emigrate", ca: "Emigrar", pronunciation: "eh-mee-GRAR" },
      { en: "Roots", ca: "Arrels", pronunciation: "ah-RELS" },
      { en: "To feel Catalan", ca: "Sentir-se català/ana", pronunciation: "sen-TEER-seh kah-tah-LAH" },
      { en: "Cultural transmission", ca: "Transmissió cultural", pronunciation: "trans-mees-see-OH kool-too-RAL" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Molts catalans van haver d'anar a l'___ durant la Guerra Civil", blank: "exili", options: ["exili", "exterior", "estranger", "altra banda"], correctIndex: 0, translation: "Many Catalans had to go into exile during the Civil War", explanation: "'Exili' = exile. After the Civil War, thousands fled to France and Mexico. A defining chapter of Catalan history." },
        { sentence: "Les seves ___ familiars vénen de Girona", blank: "arrels", options: ["arrels", "orígens", "famílies", "cases"], correctIndex: 0, translation: "His family roots come from Girona", explanation: "'Arrels' = roots (literally the roots of a plant). Used metaphorically for cultural or family origins." },
        { sentence: "La ___ del català a l'exterior és vital per la llengua", blank: "transmissió cultural", options: ["transmissió cultural", "difusió", "presència", "promoció"], correctIndex: 0, translation: "The cultural transmission of Catalan abroad is vital for the language", explanation: "'Transmissió cultural' = passing culture on to new generations. Key concept in minority language survival." },
        { sentence: "Em ___ catalana tot i haver nascut a Anglaterra", blank: "sento", options: ["sento", "sóc", "estic", "tinc"], correctIndex: 0, translation: "I feel Catalan even though I was born in England", explanation: "'Sentir-se + nationality' = to feel [identity]. 'Em sento catalana' is different from 'Sóc catalana' (I am Catalan by birth)." },
        { sentence: "El nostre ___ cultural inclou la llengua, la música i la gastronomia", blank: "patrimoni", options: ["patrimoni", "herència", "llegat", "tradició"], correctIndex: 0, translation: "Our cultural heritage includes the language, music and gastronomy", explanation: "'Patrimoni cultural' = cultural heritage. Used officially and informally for what a culture passes down." }
      ],
      errorCorrection: [
        { sentence: "La diàspora catalana és molt gran a Mèxic i França", errorWordIndex: 0, options: ["La", "El", "Una", "Aquesta"], correctIndex: 0, translation: "The Catalan diaspora is very large in Mexico and France", explanation: "Correct — 'diàspora' is feminine, 'la diàspora' is right. After the Civil War, Mexico and France hosted the largest Catalan exile communities." },
        { sentence: "Molts emigrats van mantenir el català viu a l'estranger", errorWordIndex: 1, options: ["emigrats", "emigrants", "exiliats", "fugits"], correctIndex: 1, translation: "Many emigrants kept Catalan alive abroad", explanation: "'Emigrat/da' = someone who has emigrated (past, settled). 'Emigrant' = someone currently emigrating. Here 'emigrants' is more natural as a noun group." },
        { sentence: "La identitat catalana no depèn sols de on has nascut", errorWordIndex: 5, options: ["sols", "només", "tant sols", "solament"], correctIndex: 1, translation: "Catalan identity does not depend only on where you were born", explanation: "'Sols' and 'només' both mean 'only' — both are correct. 'Sols' is more literary/formal; 'només' is more common in speech. Accept both." }
      ],
      storyMode: {
        story: "L'avi Joan va haver d'anar a l'[BLANK] l'any 1939. Va emigrar a Mèxic, però mai va oblidar les seves [BLANK] catalanes. Va ensenyar la llengua als seus fills per garantir la [BLANK] cultural. Avui, la seva néta es [BLANK] catalana tot i haver nascut a Mèxic. Les arrels i el [BLANK] familiar la connecten amb Catalunya.",
        translation: "Grandfather Joan had to go into exile in 1939. He emigrated to Mexico, but never forgot his Catalan roots. He taught the language to his children to ensure cultural transmission. Today, his granddaughter feels Catalan even though she was born in Mexico. Her roots and family heritage connect her to Catalonia.",
        blanks: [
          { word: "exili", options: ["exili", "exterior", "estranger", "diàspora"] },
          { word: "arrels", options: ["arrels", "orígens", "tradicions", "costums"] },
          { word: "transmissió", options: ["transmissió", "preservació", "difusió", "protecció"] },
          { word: "sent", options: ["sent", "sap", "és", "viu"] },
          { word: "patrimoni", options: ["patrimoni", "llegat", "record", "identitat"] }
        ]
      }
    }
  },

  // ─── LESSON 146: Advanced Technology ────────────────────────────────────────
  {
    id: 146,
    title: "Technology (Advanced)",
    module: "Modern Life",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'quickFire'],
    words: [
      { en: "Artificial intelligence", ca: "Intel·ligència artificial", pronunciation: "een-tel-lee-ZHEN-see-ah ar-tee-fee-see-AL" },
      { en: "Algorithm", ca: "Algorisme", pronunciation: "al-goh-REEZ-meh" },
      { en: "Data privacy", ca: "Privadesa de dades", pronunciation: "pree-vah-DEH-sah deh DAH-dehs" },
      { en: "Cybersecurity", ca: "Ciberseguretat", pronunciation: "see-ber-seh-goo-reh-TAT" },
      { en: "Open source", ca: "Codi obert", pronunciation: "KOH-dee oh-BERT" },
      { en: "Startup", ca: "Empresa emergent", pronunciation: "em-PREH-sah eh-mer-ZHENT" },
      { en: "Digital transformation", ca: "Transformació digital", pronunciation: "trans-for-mah-see-OH dee-zhee-TAL" },
      { en: "Blockchain", ca: "Cadena de blocs", pronunciation: "kah-DEH-nah deh BLOKS" },
      { en: "Machine learning", ca: "Aprenentatge automàtic", pronunciation: "ah-preh-nen-TAH-zheh ow-toh-MAH-teek" },
      { en: "Virtual reality", ca: "Realitat virtual", pronunciation: "reh-ah-lee-TAT beer-too-AL" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "La ___ de dades és una prioritat per a les empreses tecnològiques", blank: "privadesa", options: ["privadesa", "seguretat", "protecció", "gestió"], correctIndex: 0, translation: "Data privacy is a priority for technology companies", explanation: "'Privadesa de dades' = data privacy. 'Privadesa' is the Catalan word (not 'privacitat', which is a Castilianism to avoid)." },
        { sentence: "Aquesta empresa ha iniciat una transformació ___ completa", blank: "digital", options: ["digital", "tecnològica", "informàtica", "virtual"], correctIndex: 0, translation: "This company has begun a complete digital transformation", explanation: "'Transformació digital' is the standard term. 'Digital' follows the noun in Catalan, unlike English." },
        { sentence: "L'___ artificial canviarà moltes professions en els propers anys", blank: "intel·ligència", options: ["intel·ligència", "automatització", "innovació", "enginyeria"], correctIndex: 0, translation: "Artificial intelligence will change many professions in the coming years", explanation: "'Intel·ligència artificial' = AI. Note the double-l (·l) in 'intel·ligència' — this geminate L is specific to Catalan." },
        { sentence: "La ___ de blocs permet transaccions segures sense intermediaris", blank: "cadena", options: ["cadena", "xarxa", "plataforma", "base"], correctIndex: 0, translation: "Blockchain allows secure transactions without intermediaries", explanation: "'Cadena de blocs' is the Catalan term for blockchain. 'Cadena' = chain, 'bloc' = block." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Empresa emergent' is the recommended Catalan term for 'startup'. Some use the English word, but 'emergent' is preferred in formal contexts.", words: ["Han", "fundat", "una", "empresa", "emergent", "d'intel·ligència", "artificial"], correctOrder: "Han fundat una empresa emergent d'intel·ligència artificial", translation: "They have founded an artificial intelligence startup" },
        { grammarNote: "💡 'Codi obert' = open source. 'Codi' = code (in the software sense). A tech term directly translated into Catalan.", words: ["El", "programa", "és", "de", "codi", "obert", "i", "gratuït"], correctOrder: "El programa és de codi obert i gratuït", translation: "The programme is open source and free" },
        { grammarNote: "💡 'Ciberseguretat' is a single compound word in Catalan. Cyber-threats are 'ciberatacs' (cyberattacks), 'cibercriminals', etc.", words: ["La", "ciberseguretat", "és", "un", "repte", "creixent", "per", "a", "tots"], correctOrder: "La ciberseguretat és un repte creixent per a tots", translation: "Cybersecurity is a growing challenge for everyone" }
      ]
    }
  },

  // ─── LESSON 147: Business Negotiation (Advanced) ─────────────────────────────
  {
    id: 147,
    title: "Business Negotiation",
    module: "Professional",
    stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation', 'quickFire'],
    words: [
      { en: "To negotiate", ca: "Negociar", pronunciation: "neh-goh-see-AR" },
      { en: "Counteroffer", ca: "Contraoferta", pronunciation: "kon-trah-oh-FER-tah" },
      { en: "Compromise", ca: "Acord mutu", pronunciation: "ah-KOR MOO-too" },
      { en: "Deadline", ca: "Termini", pronunciation: "ter-MEE-nee" },
      { en: "Terms and conditions", ca: "Termes i condicions", pronunciation: "TER-mehs ee kon-dee-see-ONS" },
      { en: "To reach an agreement", ca: "Arribar a un acord", pronunciation: "ah-ree-BAR ah oon ah-KOR" },
      { en: "Non-negotiable", ca: "Innegociable", pronunciation: "ee-neh-goh-see-AH-bleh" },
      { en: "Mutual benefit", ca: "Benefici mutu", pronunciation: "beh-neh-FEE-see MOO-too" },
      { en: "To make a concession", ca: "Fer una concessió", pronunciation: "fer OO-nah kon-seh-see-OH" },
      { en: "Bottom line", ca: "Límit màxim", pronunciation: "LEE-meet MAK-seem" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Estem disposats a fer una concessió si vostès fan el mateix", english: "We are prepared to make a concession if you do the same", pronunciation: "ehs-TEM dees-poh-ZATS ah fer OO-nah kon-seh-see-OH see vos-TEHS fan ehl mah-TESH" },
        { catalan: "El termini per signar el contracte és divendres que ve", english: "The deadline to sign the contract is next Friday", pronunciation: "ehl ter-MEE-nee per seeg-NAR ehl kon-TRAK-teh EHS dee-VEN-drehs keh veh" },
        { catalan: "Creiem que podem arribar a un acord beneficiós per a totes dues parts", english: "We believe we can reach an agreement beneficial to both parties", pronunciation: "kreh-EEM keh poh-DEM ah-ree-BAR ah oon ah-KOR beh-neh-fee-see-OS per ah TOH-tehs DOO-ehs PARTS" },
        { catalan: "El preu és innegociable però podem ser flexibles amb el termini", english: "The price is non-negotiable but we can be flexible with the timeline", pronunciation: "ehl PREW EHS ee-neh-goh-see-AH-bleh PERO poh-DEM ser flek-SEE-blehs amb ehl ter-MEE-nee" }
      ],
      miniConversation: {
        scenario: "You are negotiating the terms of a supplier contract.",
        turns: [
          { speaker: "Proveïdor", text: "Hem revisat la seva proposta i voldríem discutir alguns termes.", isUserTurn: false, translation: "We have reviewed your proposal and would like to discuss some terms." },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Say you are open to negotiating and ask what they would like to change", correctSentence: "Estem oberts a negociar. Quin terme voldrien canviar?", wordBank: ["Estem", "oberts", "a", "negociar.", "Quin", "terme", "voldrien", "canviar?"] },
          { speaker: "Proveïdor", text: "El termini de pagament de trenta dies és massa curt per a nosaltres.", isUserTurn: false, translation: "The thirty-day payment term is too short for us." },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Say you can make a concession on the payment term but the price is non-negotiable", correctSentence: "Podem fer una concessió amb el termini de pagament però el preu és innegociable", wordBank: ["Podem", "fer", "una", "concessió", "amb", "el", "termini", "de", "pagament", "però", "el", "preu", "és", "innegociable"] },
          { speaker: "Proveïdor", text: "D'acord. Quaranta-cinc dies seria acceptable. Podríem signar divendres?", isUserTurn: false, translation: "Very well. Forty-five days would be acceptable. Could we sign on Friday?" },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Say you believe you can reach an agreement and confirm Friday works", correctSentence: "Crec que podem arribar a un acord. Divendres ens va bé", wordBank: ["Crec", "que", "podem", "arribar", "a", "un", "acord.", "Divendres", "ens", "va", "bé"] }
        ]
      }
    }
  },

  // ─── LESSON 148: Environment & Sustainability (Advanced) ─────────────────────
  {
    id: 148,
    title: "Environment & Sustainability",
    module: "Society",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'storyMode', 'quickFire'],
    words: [
      { en: "Carbon footprint", ca: "Petjada de carboni", pronunciation: "peh-ZHAH-dah deh kar-BOH-nee" },
      { en: "Renewable energy", ca: "Energia renovable", pronunciation: "eh-ner-ZHEE-ah reh-noh-VAH-bleh" },
      { en: "Deforestation", ca: "Deforestació", pronunciation: "deh-for-ehs-tah-see-OH" },
      { en: "Biodiversity", ca: "Biodiversitat", pronunciation: "bee-oh-dee-ver-see-TAT" },
      { en: "Greenhouse effect", ca: "Efecte hivernacle", pronunciation: "eh-FEK-teh ee-ver-NAH-kleh" },
      { en: "Circular economy", ca: "Economia circular", pronunciation: "eh-koh-noh-MEE-ah seer-koo-LAR" },
      { en: "Carbon neutral", ca: "Neutre en carboni", pronunciation: "NEH-oo-treh en kar-BOH-nee" },
      { en: "Ecosystem", ca: "Ecosistema", pronunciation: "eh-koh-sees-TEH-mah" },
      { en: "Climate change", ca: "Canvi climàtic", pronunciation: "KAN-vee klee-MAH-teek" },
      { en: "Sustainable development", ca: "Desenvolupament sostenible", pronunciation: "deh-zen-voh-luh-pah-MENT sos-teh-NEE-bleh" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Cal reduir la nostra ___ de carboni urgentment", blank: "petjada", options: ["petjada", "marca", "empremta", "impacte"], correctIndex: 0, translation: "We must urgently reduce our carbon footprint", explanation: "'Petjada' literally means footprint (from 'petjar', to tread). 'Petjada de carboni' is the standard Catalan ecological term." },
        { sentence: "L'energia ___ és clau per combatre el canvi climàtic", blank: "renovable", options: ["renovable", "neta", "verda", "sostenible"], correctIndex: 0, translation: "Renewable energy is key to combating climate change", explanation: "'Energia renovable' = renewable energy. Includes solar ('solar'), wind ('eòlica'), and hydro ('hidràulica')." },
        { sentence: "El model d'economia ___ redueix residus i maximitza recursos", blank: "circular", options: ["circular", "verda", "neta", "local"], correctIndex: 0, translation: "The circular economy model reduces waste and maximises resources", explanation: "'Economia circular' = an economic system where waste is minimised by reusing and recycling materials." },
        { sentence: "La pèrdua de ___ és una de les grans crisis del segle XXI", blank: "biodiversitat", options: ["biodiversitat", "natura", "espècies", "animals"], correctIndex: 0, translation: "The loss of biodiversity is one of the great crises of the 21st century", explanation: "'Biodiversitat' = biodiversity. Refers to the variety of life forms in an ecosystem or on Earth." },
        { sentence: "L'efecte ___ és causat per l'acumulació de gasos a l'atmosfera", blank: "hivernacle", options: ["hivernacle", "calor", "solar", "climàtic"], correctIndex: 0, translation: "The greenhouse effect is caused by the accumulation of gases in the atmosphere", explanation: "'Hivernacle' = greenhouse (a glass building for plants). The metaphor: gases trap heat like glass walls." }
      ],
      errorCorrection: [
        { sentence: "La deforestació destrueix els ecosistemes tropicals", errorWordIndex: 1, options: ["destrueix", "destrueïx", "destrossa", "destrueix-"], correctIndex: 0, translation: "Deforestation destroys tropical ecosystems", explanation: "Correct — 'destrueix' is the right 3rd person present form of 'destruir'. Common error: writing 'destrueïx' (wrong spelling)." },
        { sentence: "L'empresa vol ser neutre en carboni per al 2030", errorWordIndex: 3, options: ["neutre", "neutral", "neta", "zero"], correctIndex: 0, translation: "The company wants to be carbon neutral by 2030", explanation: "'Neutre en carboni' is the standard term. 'Neutral' would be a false cognate error. 'Neutre' is correct Catalan." },
        { sentence: "El desenvolupament sostenibles requereix cooperació global", errorWordIndex: 2, options: ["sostenibles", "sostenible", "sosteniblement", "sostingut"], correctIndex: 1, translation: "Sustainable development requires global cooperation", explanation: "'Desenvolupament' is masculine singular, so the adjective must be 'sostenible' (singular), not 'sostenibles' (plural)." }
      ],
      storyMode: {
        story: "La ciutat de Verdalia ha decidit reduir la seva [BLANK] de carboni. Han instal·lat panells d'[BLANK] renovable a tots els edificis públics. L'alcaldessa diu que volen ser [BLANK] en carboni per al 2040. Han prohibit els cotxes al centre per protegir la [BLANK] dels ciutadans. El [BLANK] climàtic és una prioritat per a tothom.",
        translation: "The city of Verdalia has decided to reduce its carbon footprint. They have installed renewable energy panels on all public buildings. The mayor says they want to be carbon neutral by 2040. They have banned cars from the centre to protect citizens' biodiversity. Climate change is a priority for everyone.",
        blanks: [
          { word: "petjada", options: ["petjada", "impacte", "marca", "empremta"] },
          { word: "energia", options: ["energia", "electricitat", "tecnologia", "il·luminació"] },
          { word: "neutres", options: ["neutres", "nets", "verds", "sostenibles"] },
          { word: "biodiversitat", options: ["biodiversitat", "salut", "qualitat de vida", "seguretat"] },
          { word: "canvi", options: ["canvi", "problema", "repte", "crisi"] }
        ]
      }
    }
  },

  // ─── LESSON 149: Healthcare System ───────────────────────────────────────────
  {
    id: 149,
    title: "Healthcare Navigation",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire'],
    words: [
      { en: "GP / Family doctor", ca: "Metge de capçalera", pronunciation: "MET-zheh deh kap-sah-LEH-rah" },
      { en: "Waiting list", ca: "Llista d'espera", pronunciation: "YEES-tah dehs-PEH-rah" },
      { en: "Referral", ca: "Derivació", pronunciation: "deh-ree-vah-see-OH" },
      { en: "Prescription", ca: "Recepta mèdica", pronunciation: "reh-SEP-tah MEH-dee-kah" },
      { en: "Health insurance", ca: "Assegurança mèdica", pronunciation: "ah-seh-goo-RAN-sah MEH-dee-kah" },
      { en: "Specialist", ca: "Especialista", pronunciation: "ehs-peh-see-ah-LEES-tah" },
      { en: "Blood test", ca: "Anàlisi de sang", pronunciation: "ah-NAH-lee-see deh SANG" },
      { en: "Medical records", ca: "Historial mèdic", pronunciation: "ees-toh-ree-AL MEH-deek" },
      { en: "Emergency department", ca: "Servei d'urgències", pronunciation: "ser-BEY door-ZHEN-see-ehs" },
      { en: "To be discharged", ca: "Rebre l'alta", pronunciation: "REH-breh LAL-tah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "He de demanar cita amb el meu metge de ___", blank: "capçalera", options: ["capçalera", "família", "general", "guàrdia"], correctIndex: 0, translation: "I need to make an appointment with my GP", explanation: "'Metge de capçalera' = the first point of contact in the Catalan health system (CatSalut). Like a GP or primary care doctor." },
        { sentence: "El metge m'ha fet una ___ per veure un especialista", blank: "derivació", options: ["derivació", "cita", "consulta", "transferència"], correctIndex: 0, translation: "The doctor has referred me to see a specialist", explanation: "'Derivació' = referral from one doctor to another. 'M'ha derivat a un especialista' is the common verb form." },
        { sentence: "Necessito renovar la meva recepta ___ a la farmàcia", blank: "mèdica", options: ["mèdica", "sanitària", "oficial", "digital"], correctIndex: 0, translation: "I need to renew my prescription at the pharmacy", explanation: "'Recepta mèdica' = medical prescription. Without 'mèdica', 'recepta' alone means a cooking recipe." },
        { sentence: "L'han ingressat a urgències però espero que rebi l'alta aviat", blank: "alta", options: ["alta", "sortida", "llicència", "baixa"], correctIndex: 0, translation: "He's been admitted to A&E but I hope he gets discharged soon", explanation: "'Rebre l'alta' = to be discharged from hospital. 'Estar de baixa' = to be on sick leave. Two very different 'alta/baixa' uses in medical Catalan." }
      ],
      miniConversation: {
        scenario: "You are calling the health centre to make an appointment.",
        turns: [
          { speaker: "CAP Receptionist", text: "Bon dia, Centre d'Atenció Primària de Sarrià. En què li puc ajudar?", isUserTurn: false, translation: "Good morning, Sarrià Primary Health Centre. How can I help you?" },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Say you need to make an appointment with your GP", correctSentence: "Necessito demanar cita amb el meu metge de capçalera", wordBank: ["Necessito", "demanar", "cita", "amb", "el", "meu", "metge", "de", "capçalera"] },
          { speaker: "CAP Receptionist", text: "D'acord. El seu metge és el doctor Puig. Té alguna preferència d'horari?", isUserTurn: false, translation: "Of course. Your doctor is Dr Puig. Do you have any time preference?" },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Say mornings are better for you and ask what slots are available", correctSentence: "Els matins em van millor. Quines hores hi ha disponibles?", wordBank: ["Els", "matins", "em", "van", "millor.", "Quines", "hores", "hi", "ha", "disponibles?"] },
          { speaker: "CAP Receptionist", text: "Dimecres a les deu del matí li va bé?", isUserTurn: false, translation: "Does Wednesday at ten in the morning suit you?" },
          { speaker: "user", text: "", isUserTurn: true, prompt: "Confirm Wednesday at ten is perfect and thank them", correctSentence: "Sí, dimecres a les deu em va perfecte. Moltes gràcies", wordBank: ["Sí,", "dimecres", "a", "les", "deu", "em", "va", "perfecte.", "Moltes", "gràcies"] }
        ]
      }
    }
  },

  // ─── LESSON 150: Family Life & Parenting ─────────────────────────────────────
  {
    id: 150,
    title: "Family Life & Parenting",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'storyMode', 'quickFire'],
    words: [
      { en: "To raise children", ca: "Criar fills", pronunciation: "kree-AR FEEILS" },
      { en: "Nursery / daycare", ca: "Llar d'infants", pronunciation: "YLAR deen-FANTS" },
      { en: "School run", ca: "Portar els nens a l'escola", pronunciation: "por-TAR ehlz nenz ah lehs-KOH-lah" },
      { en: "Parental leave", ca: "Baixa per maternitat/paternitat", pronunciation: "BY-shah per mah-ter-nee-TAT" },
      { en: "Bedtime routine", ca: "Rutina de nit", pronunciation: "roo-TEE-nah deh NEET" },
      { en: "Pocket money", ca: "Paga setmanal", pronunciation: "PAH-gah set-mah-NAL" },
      { en: "Sibling", ca: "Germà/Germana", pronunciation: "zher-MAH / zher-MAH-nah" },
      { en: "Grandparents", ca: "Avis", pronunciation: "AH-bees" },
      { en: "Family gathering", ca: "Reunió familiar", pronunciation: "reh-oo-nee-OH fah-mee-lee-AR" },
      { en: "Work-life balance", ca: "Conciliació laboral i familiar", pronunciation: "kon-see-lee-ah-see-OH lah-boh-RAL ee fah-mee-lee-AR" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Portem els nens a la ___ d'infants des de les vuit del matí", blank: "llar", options: ["llar", "guarderia", "escola", "sala"], correctIndex: 0, translation: "We take the children to nursery from eight in the morning", explanation: "'Llar d'infants' = nursery/daycare for children under 3. 'Guarderia' is also used informally. From 3 upwards it becomes 'escola bressol' or 'parvulari'." },
        { sentence: "La ___ laboral i familiar és difícil quan els dos pares treballen", blank: "conciliació", options: ["conciliació", "compatibilitat", "coordinació", "gestió"], correctIndex: 0, translation: "Work-life balance is difficult when both parents work", explanation: "'Conciliació laboral i familiar' is the official term used in Catalan labour law and social policy discussions." },
        { sentence: "Els ___ cuiden els nens quan nosaltres treballem", blank: "avis", options: ["avis", "oncles", "veïns", "amics"], correctIndex: 0, translation: "The grandparents look after the children when we work", explanation: "'Avis' = grandparents (plural of 'avi' grandfather / 'àvia' grandmother). 'Els meus avis' = my grandparents." },
        { sentence: "Cada diumenge tenim una ___ familiar amb tota la família", blank: "reunió", options: ["reunió", "festa", "celebració", "sopar"], correctIndex: 0, translation: "Every Sunday we have a family gathering with the whole family", explanation: "'Reunió familiar' = family gathering. More neutral than 'celebració' (celebration) — can be a regular meal or event." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Crear una rutina de nit' = to establish a bedtime routine. 'Rutina' is used exactly as in English for regular habits and procedures.", words: ["Hem", "creat", "una", "rutina", "de", "nit", "per", "als", "nens"], correctOrder: "Hem creat una rutina de nit per als nens", translation: "We have created a bedtime routine for the children" },
        { grammarNote: "💡 'Estar de baixa per maternitat' = to be on maternity leave. 'Baixa' (low/down) is used for any kind of official leave or sick note.", words: ["Està", "de", "baixa", "per", "maternitat", "fins", "al", "setembre"], correctOrder: "Està de baixa per maternitat fins al setembre", translation: "She is on maternity leave until September" },
        { grammarNote: "💡 'Cridar fills' = raising children. 'Criar' means to raise/bring up. Different from 'criar animals' (to breed animals) — context makes it clear.", words: ["Criar", "fills", "és", "la", "feina", "més", "important", "del", "món"], correctOrder: "Criar fills és la feina més important del món", translation: "Raising children is the most important job in the world" }
      ],
      storyMode: {
        story: "La família Puig viu a [BLANK] des de fa cinc anys. Cada matí, la mare [BLANK] els nens a la llar d'infants abans d'anar a treballar. El pare [BLANK] de baixa per paternitat durant dos mesos. Els [BLANK] venen cada cap de setmana a ajudar. La conciliació [BLANK] no és fàcil, però la família ho porta bé junts.",
        translation: "The Puig family has lived in Barcelona for five years. Every morning, the mother takes the children to nursery before going to work. The father was on paternity leave for two months. The grandparents come every weekend to help. Work-life balance is not easy, but the family manages well together.",
        blanks: [
          { word: "Barcelona", options: ["Barcelona", "Madrid", "Girona", "Tarragona"] },
          { word: "porta", options: ["porta", "deixa", "envia", "acompanya"] },
          { word: "va estar", options: ["va estar", "és", "estava", "serà"] },
          { word: "avis", options: ["avis", "amics", "veïns", "oncles"] },
          { word: "laboral i familiar", options: ["laboral i familiar", "personal i social", "professional i privada", "diària i setmanal"] }
        ]
      }
    }
  }

];
