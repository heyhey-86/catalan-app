export const lessons100 = [
{
  id: 101,
  title: "Business Vocabulary",
  module: "Advanced",
  stages: ['intro', 'flashcards', 'match', 'fillInTheBlank', 'errorCorrection', 'quickFire'],
  words: [
    { en: "Contract", ca: "Contracte", pronunciation: "kohn-TRAK-teh" },
    { en: "Deadline", ca: "Data límit", pronunciation: "DAH-tah LEE-meet" },
    { en: "Meeting", ca: "Reunió", pronunciation: "reh-oo-nee-OH" },
    { en: "Invoice", ca: "Factura", pronunciation: "fahk-TOO-rah" },
    { en: "Budget", ca: "Pressupost", pronunciation: "preh-soo-POHST" },
    { en: "Proposal", ca: "Proposta", pronunciation: "proh-POHS-tah" },
    { en: "Agreement", ca: "Acord", pronunciation: "ah-KOHRD" },
    { en: "Report", ca: "Informe", pronunciation: "een-FOHR-meh" },
    { en: "Presentation", ca: "Presentació", pronunciation: "preh-zehn-tah-see-OH" },
    { en: "Client", ca: "Client", pronunciation: "klee-EHNT" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Hem de signar el ___ avui", blank: "contracte", options: ["factura", "contracte", "informe", "proposta"], correctIndex: 1, translation: "We need to sign the contract today", explanation: "'Contracte' = contract. Essential business document." },
      { sentence: "La ___ límit és divendres", blank: "data", options: ["hora", "data", "reunió", "acord"], correctIndex: 1, translation: "The deadline is Friday", explanation: "'Data límit' = deadline. 'Data' alone means date." },
      { sentence: "Tinc una ___ a les deu", blank: "reunió", options: ["proposta", "reunió", "factura", "presentació"], correctIndex: 1, translation: "I have a meeting at ten", explanation: "'Reunió' = meeting. Common in professional settings." },
      { sentence: "El ___ total és de mil euros", blank: "pressupost", options: ["client", "acord", "pressupost", "informe"], correctIndex: 2, translation: "The total budget is one thousand euros", explanation: "'Pressupost' = budget. Key financial term." }
    ],
    errorCorrection: [
      { sentence: "Necesito el contrato firmado", errorWordIndex: 0, options: ["Necesito", "Necessito", "Necesit", "Need"], correctIndex: 1, translation: "I need the signed contract", explanation: "'Necessito' is Catalan. Double 's' and no accent on the 'e'." },
      { sentence: "La reunión empieza a las tres", errorWordIndex: 1, options: ["reunión", "reunió", "reunio", "meeting"], correctIndex: 1, translation: "The meeting starts at three", explanation: "'Reunió' is Catalan — accent on the final 'o'." },
      { sentence: "He recibido la factura", errorWordIndex: 1, options: ["recibido", "rebut", "rebuda", "received"], correctIndex: 1, translation: "I have received the invoice", explanation: "'Rebut' is Catalan for received (masculine). 'Rebuda' for feminine." },
      { sentence: "El presupuesto es muy alto", errorWordIndex: 1, options: ["presupuesto", "pressupost", "presuposto", "budget"], correctIndex: 1, translation: "The budget is very high", explanation: "'Pressupost' is Catalan. Note the double 's'." }
    ]
  }
},
{
  id: 102,
  title: "Professional Emails",
  module: "Advanced",
  stages: ['intro', 'flashcards', 'sentenceOrdering', 'miniConversation'],
  words: [
    { en: "Subject", ca: "Assumpte", pronunciation: "ah-SOOM-pteh" },
    { en: "Attachment", ca: "Adjunt", pronunciation: "ahd-ZHOON" },
    { en: "Reply", ca: "Resposta", pronunciation: "rehs-POHS-tah" },
    { en: "Urgent", ca: "Urgent", pronunciation: "oor-ZHEHN" },
    { en: "Regards", ca: "Salutacions", pronunciation: "sah-loo-tah-see-OHNS" },
    { en: "To confirm", ca: "Confirmar", pronunciation: "kohn-feer-MAR" },
    { en: "To schedule", ca: "Programar", pronunciation: "proh-grah-MAR" },
    { en: "Following up", ca: "Seguiment", pronunciation: "seh-ghee-MEHNT" },
    { en: "To forward", ca: "Reenviar", pronunciation: "reh-ehn-bee-AR" },
    { en: "Cordially", ca: "Cordialment", pronunciation: "kohr-dee-ahl-MEHNT" }
  ],
  stageData: {
    sentenceOrdering: [
      { grammarNote: "💡 Formal email opening: 'Benvolgut/da' (Dear) + name. More formal than 'Hola'.", words: ["Benvolgut", "senyor", "García,", "li", "escric", "per", "confirmar"], correctOrder: "Benvolgut senyor García, li escric per confirmar", translation: "Dear Mr García, I am writing to confirm" },
      { grammarNote: "💡 'Adjunto trobarà' = 'attached you will find'. Standard email phrase.", words: ["Adjunt", "trobarà", "el", "document", "signat"], correctOrder: "Adjunt trobarà el document signat", translation: "Attached you will find the signed document" },
      { grammarNote: "💡 Email sign-off: 'Cordialment' or 'Atentament' are both formal and correct.", words: ["Quedo", "a", "la", "seva", "disposició"], correctOrder: "Quedo a la seva disposició", translation: "I remain at your disposal" },
      { grammarNote: "💡 'Em poso en contacte' = 'I am getting in touch'. Natural business Catalan.", words: ["Em", "poso", "en", "contacte", "pel", "tema", "de", "la", "reunió"], correctOrder: "Em poso en contacte pel tema de la reunió", translation: "I am getting in touch regarding the meeting" }
    ],
    miniConversation: [
      { speaker: "Marta", text: "He rebut el seu correu. Ha enviat l'adjunt?", isUserTurn: false, translation: "I received your email. Did you send the attachment?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí, l'he enviat tot seguit.", "No ho sé.", "Potser demà."], correctIndex: 0 },
      { speaker: "Marta", text: "Perfecte. Quan podem confirmar la reunió?", isUserTurn: false, translation: "Perfect. When can we confirm the meeting?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Dimecres a les deu em va bé.", "No sé quan.", "Potser divendres."], correctIndex: 0 },
      { speaker: "Marta", text: "D'acord. Li enviaré la invitació per calendari.", isUserTurn: false, translation: "All right. I will send you the calendar invitation." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Molt bé. Fins dimecres!", "Adéu.", "No ho sé."], correctIndex: 0 }
    ]
  }
},
{
  id: 103,
  title: "Catalan Festivals",
  module: "Culture",
  stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation', 'quiz'],
  words: [
    { en: "Sant Jordi (April 23rd)", ca: "Sant Jordi", pronunciation: "sahn ZHOHR-dee" },
    { en: "National Day of Catalonia", ca: "La Diada", pronunciation: "lah dee-AH-dah" },
    { en: "Human towers", ca: "Castellers", pronunciation: "kahs-teh-LYEHRS" },
    { en: "Fire run", ca: "Correfoc", pronunciation: "koh-reh-FOHK" },
    { en: "Traditional dance", ca: "Sardana", pronunciation: "sar-DAH-nah" },
    { en: "Local festival", ca: "Festa Major", pronunciation: "FEHS-tah mah-ZHOHR" },
    { en: "Midsummer Eve", ca: "Revetlla de Sant Joan", pronunciation: "reh-BEHT-lyah deh sahn ZHOO-ahn" },
    { en: "Christmas", ca: "Nadal", pronunciation: "nah-DAHL" },
    { en: "Three Kings Day", ca: "Els Reis", pronunciation: "ehls RAYS" },
    { en: "Carnival", ca: "Carnestoltes", pronunciation: "kar-nehs-TOHL-tehs" }
  ],
  stageData: {
    listenAndType: [
      { catalan: "El vint-i-tres d'abril és Sant Jordi", english: "April 23rd is Sant Jordi", pronunciation: "ehl beehn-tee-TREHS DAHB-reel EHS sahn ZHOHR-dee" },
      { catalan: "Els castellers fan torres humanes molt altes", english: "The castellers make very tall human towers", pronunciation: "ehls kahs-teh-LYEHRS fahn TOH-rehs oo-MAH-nehs mohlt AHL-tehs" },
      { catalan: "La Diada Nacional és l'onze de setembre", english: "The National Day is September 11th", pronunciation: "lah dee-AH-dah nah-see-oh-NAHL EHS LOHN-zeh deh seh-TEHM-breh" },
      { catalan: "El Correfoc és una tradició molt popular", english: "The Correfoc is a very popular tradition", pronunciation: "ehl koh-reh-FOHK EHS OO-nah trah-dee-see-OH mohlt poh-poo-LAR" }
    ],
    miniConversation: [
      { speaker: "Friend", text: "Que has anat mai a un Correfoc?", isUserTurn: false, translation: "Have you ever been to a Correfoc?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí! És increïble. Hi ha foc per tot arreu.", "No, mai.", "No m'agrada."], correctIndex: 0 },
      { speaker: "Friend", text: "I els castellers? Els has vist mai en persona?", isUserTurn: false, translation: "And the castellers? Have you ever seen them in person?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí, a la Festa Major del poble. Eren espectaculars!", "No ho sé.", "Potser sí."], correctIndex: 0 }
    ]
  }
},
{
  id: 104,
  title: "Cooking & Recipes",
  module: "Daily Life",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'quiz'],
  words: [
    { en: "Recipe", ca: "Recepta", pronunciation: "reh-SEHP-tah" },
    { en: "Ingredient", ca: "Ingredient", pronunciation: "een-greh-dee-EHNT" },
    { en: "To stir", ca: "Remenar", pronunciation: "reh-meh-NAR" },
    { en: "To boil", ca: "Bullir", pronunciation: "boo-LYEER" },
    { en: "To fry", ca: "Fregir", pronunciation: "freh-ZHEER" },
    { en: "To bake", ca: "Enfornar", pronunciation: "ehn-fohr-NAR" },
    { en: "To season", ca: "Amanir", pronunciation: "ah-mah-NEER" },
    { en: "To serve", ca: "Servir", pronunciation: "sehr-BEER" },
    { en: "Oven", ca: "Forn", pronunciation: "FOHRN" },
    { en: "Pan", ca: "Paella", pronunciation: "pah-EH-lyah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Has de ___ la ceba fins que sigui daurada", blank: "fregir", options: ["bullir", "fregir", "enfornar", "remenar"], correctIndex: 1, translation: "You need to fry the onion until it's golden", explanation: "'Fregir' = to fry. Used for stovetop frying." },
      { sentence: "Posa l'arròs a ___ durant vint minuts", blank: "bullir", options: ["fregir", "servir", "bullir", "enfornar"], correctIndex: 2, translation: "Put the rice to boil for twenty minutes", explanation: "'Bullir' = to boil. Essential cooking verb." },
      { sentence: "La ___ diu que cal dues cullerades d'oli", blank: "recepta", options: ["ingredient", "paella", "recepta", "forn"], correctIndex: 2, translation: "The recipe says two tablespoons of oil are needed", explanation: "'Recepta' = recipe (also means prescription in medical context!)." },
      { sentence: "Cal ___ el pastís al forn quaranta minuts", blank: "enfornar", options: ["bullir", "enfornar", "servir", "amanir"], correctIndex: 1, translation: "The cake needs to bake in the oven for forty minutes", explanation: "'Enfornar' = to put in the oven/to bake." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 Cooking instructions use imperative: 'Posa' (put), 'Afegeix' (add), 'Remena' (stir).", words: ["Afegeix", "la", "sal", "i", "remena", "bé"], correctOrder: "Afegeix la sal i remena bé", translation: "Add the salt and stir well" },
      { grammarNote: "💡 'Fins que' = until. 'Fins que sigui' uses subjunctive — covered in L111.", words: ["Fregeix", "fins", "que", "sigui", "daurat"], correctOrder: "Fregeix fins que sigui daurat", translation: "Fry until it is golden" },
      { grammarNote: "💡 'Cal' = it is necessary / one must. Very common in Catalan recipes.", words: ["Cal", "preescalfar", "el", "forn", "a", "dos-cents", "graus"], correctOrder: "Cal preescalfar el forn a dos-cents graus", translation: "You must preheat the oven to two hundred degrees" }
    ]
  }
},
{
  id: 105,
  title: "Health & Medical",
  module: "Daily Life",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire', 'quiz'],
  words: [
    { en: "Prescription", ca: "Recepta mèdica", pronunciation: "reh-SEHP-tah MEH-dee-kah" },
    { en: "Pharmacy", ca: "Farmàcia", pronunciation: "far-MAH-see-ah" },
    { en: "Symptoms", ca: "Símptomes", pronunciation: "SEEM-ptoh-mehs" },
    { en: "Diagnosis", ca: "Diagnòstic", pronunciation: "dee-ahg-NOHS-teek" },
    { en: "Treatment", ca: "Tractament", pronunciation: "trak-tah-MEHNT" },
    { en: "Appointment", ca: "Cita", pronunciation: "SEE-tah" },
    { en: "Specialist", ca: "Especialista", pronunciation: "ehs-peh-see-ah-LEES-tah" },
    { en: "Emergency", ca: "Urgència", pronunciation: "oor-ZHEHN-see-ah" },
    { en: "Recovery", ca: "Recuperació", pronunciation: "reh-koo-peh-rah-see-OH" },
    { en: "Blood test", ca: "Anàlisi de sang", pronunciation: "ah-NAH-lee-zee deh SAHNG" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Necessito una ___ per a l'antibiòtic", blank: "recepta mèdica", options: ["cita", "recepta mèdica", "urgència", "diagnòstic"], correctIndex: 1, translation: "I need a prescription for the antibiotic", explanation: "'Recepta mèdica' = medical prescription. Different from 'recepta' (cooking recipe)." },
      { sentence: "Els meus ___ inclouen febre i tos", blank: "símptomes", options: ["tractaments", "símptomes", "anàlisis", "cites"], correctIndex: 1, translation: "My symptoms include fever and cough", explanation: "'Símptomes' = symptoms. Always plural when listing several." },
      { sentence: "El metge em va donar un ___ per a dues setmanes", blank: "tractament", options: ["diagnòstic", "tractament", "especialista", "recuperació"], correctIndex: 1, translation: "The doctor gave me a treatment for two weeks", explanation: "'Tractament' = treatment/course of treatment." },
      { sentence: "He demanat una ___ amb el especialista", blank: "cita", options: ["urgència", "farmàcia", "cita", "anàlisi"], correctIndex: 2, translation: "I have requested an appointment with the specialist", explanation: "'Cita' = appointment. Also means date (romantic context)!" }
    ],
    miniConversation: [
      { speaker: "Receptionist", text: "Bon dia! Té cita?", isUserTurn: false, translation: "Good morning! Do you have an appointment?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí, tinc una cita amb el doctor Puig.", "No ho sé.", "Necessito ajuda."], correctIndex: 0 },
      { speaker: "Receptionist", text: "Perfecte. Quins símptomes té?", isUserTurn: false, translation: "Perfect. What symptoms do you have?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Tinc febre des de fa tres dies i em fa mal el cap.", "Estic bé.", "No ho sé."], correctIndex: 0 },
      { speaker: "Receptionist", text: "D'acord. El doctor el veurà tot seguit.", isUserTurn: false, translation: "All right. The doctor will see you right away." }
    ]
  }
},
{
  id: 106,
  title: "Politics & Current Events",
  module: "Society",
  stages: ['intro', 'flashcards', 'sentenceOrdering', 'errorCorrection', 'quiz'],
  words: [
    { en: "Government", ca: "Govern", pronunciation: "goh-BEHRN" },
    { en: "Parliament", ca: "Parlament", pronunciation: "par-lah-MEHNT" },
    { en: "Election", ca: "Elecció", pronunciation: "eh-lehk-see-OH" },
    { en: "Vote", ca: "Votar", pronunciation: "boh-TAR" },
    { en: "Policy", ca: "Política", pronunciation: "poh-LEE-tee-kah" },
    { en: "Debate", ca: "Debat", pronunciation: "deh-BAHT" },
    { en: "Law", ca: "Llei", pronunciation: "LYAY" },
    { en: "Rights", ca: "Drets", pronunciation: "DREHS" },
    { en: "Democracy", ca: "Democràcia", pronunciation: "deh-moh-KRAH-see-ah" },
    { en: "Citizenship", ca: "Ciutadania", pronunciation: "see-oo-tah-dah-NEE-ah" }
  ],
  stageData: {
    sentenceOrdering: [
      { grammarNote: "💡 'Anar a votar' = to go and vote. Catalan uses 'anar a + infinitive' for going to do something.", words: ["Demà", "vaig", "a", "votar", "a", "les", "eleccions"], correctOrder: "Demà vaig a votar a les eleccions", translation: "Tomorrow I'm going to vote in the elections" },
      { grammarNote: "💡 'El Parlament de Catalunya' meets in Barcelona. Key political institution.", words: ["El", "Parlament", "ha", "aprovat", "una", "nova", "llei"], correctOrder: "El Parlament ha aprovat una nova llei", translation: "The Parliament has approved a new law" },
      { grammarNote: "💡 'Tenir dret a' = to have the right to. Important civic phrase.", words: ["Tothom", "té", "dret", "a", "vot"], correctOrder: "Tothom té dret a vot", translation: "Everyone has the right to vote" },
      { grammarNote: "💡 'Seguir la política' = to follow politics. 'Seguir' means both to follow and to continue.", words: ["M'interessa", "molt", "la", "política", "catalana"], correctOrder: "M'interessa molt la política catalana", translation: "Catalan politics interests me a lot" }
    ],
    errorCorrection: [
      { sentence: "El gobierno ha aprobado una ley", errorWordIndex: 1, options: ["gobierno", "govern", "gobern", "government"], correctIndex: 1, translation: "The government has approved a law", explanation: "'Govern' is Catalan. No 'i' at the end unlike Spanish 'gobierno'." },
      { sentence: "Voy a votar en las elecciones", errorWordIndex: 0, options: ["Voy", "Vaig", "Vaic", "Go"], correctIndex: 1, translation: "I am going to vote in the elections", explanation: "'Vaig' is the Catalan first-person present of 'anar' (to go)." },
      { sentence: "Tenemos derechos como ciudadanos", errorWordIndex: 1, options: ["derechos", "drets", "dretes", "rights"], correctIndex: 1, translation: "We have rights as citizens", explanation: "'Drets' is Catalan. Short and without the Spanish '-echos' ending." },
      { sentence: "El debate fue muy interesante", errorWordIndex: 0, options: ["debate", "debat", "debatre", "El"], correctIndex: 1, translation: "The debate was very interesting", explanation: "Well spotted — 'debate' looks similar but 'debat' is Catalan (no final 'e')." }
    ]
  }
},
{
  id: 107,
  title: "Environment & Sustainability",
  module: "Society",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quiz'],
  words: [
    { en: "Climate change", ca: "Canvi climàtic", pronunciation: "KAHN-bee klee-MAH-teek" },
    { en: "Pollution", ca: "Contaminació", pronunciation: "kohn-tah-mee-nah-see-OH" },
    { en: "Recycling", ca: "Reciclatge", pronunciation: "reh-see-KLAHZH-eh" },
    { en: "Sustainability", ca: "Sostenibilitat", pronunciation: "sohs-teh-nee-bee-lee-TAHT" },
    { en: "Renewable", ca: "Renovable", pronunciation: "reh-noh-BAH-bleh" },
    { en: "Waste", ca: "Residus", pronunciation: "reh-ZEE-doos" },
    { en: "Conservation", ca: "Conservació", pronunciation: "kohn-sehr-bah-see-OH" },
    { en: "Carbon footprint", ca: "Petjada de carboni", pronunciation: "pehch-ZHAh-dah deh kar-BOH-nee" },
    { en: "Biodiversity", ca: "Biodiversitat", pronunciation: "bee-oh-dee-behr-see-TAHT" },
    { en: "Solar energy", ca: "Energia solar", pronunciation: "eh-nehr-ZHEE-ah soh-LAR" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Cal reduir la nostra ___ de carboni", blank: "petjada", options: ["contaminació", "petjada", "residus", "energia"], correctIndex: 1, translation: "We need to reduce our carbon footprint", explanation: "'Petjada' literally means footprint/footstep. Poetic environmental term." },
      { sentence: "El ___ climàtic afecta tot el planeta", blank: "canvi", options: ["canvi", "reciclatge", "residus", "conservació"], correctIndex: 0, translation: "Climate change affects the whole planet", explanation: "'Canvi climàtic' = climate change. 'Canvi' = change." },
      { sentence: "L'energia ___ és bona per al medi ambient", blank: "renovable", options: ["solar", "renovable", "natural", "bruta"], correctIndex: 1, translation: "Renewable energy is good for the environment", explanation: "'Renovable' = renewable. 'Medi ambient' = environment." },
      { sentence: "Hem de separar els ___ per reciclar", blank: "residus", options: ["residus", "canvi", "biodiversitat", "sostenibilitat"], correctIndex: 0, translation: "We must separate waste for recycling", explanation: "'Residus' = waste/residues. Used specifically for recyclable waste." }
    ],
    miniConversation: [
      { speaker: "Friend", text: "Creus que reciclar marca la diferència?", isUserTurn: false, translation: "Do you think recycling makes a difference?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí, i molt! Però cal canviar el sistema energètic també.", "No ho sé.", "Potser."], correctIndex: 0 },
      { speaker: "Friend", text: "Tens raó. Al meu edifici hem instal·lat plaques solars.", isUserTurn: false, translation: "You're right. In my building we have installed solar panels." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Que bé! És la millor inversió per reduir la petjada de carboni.", "No m'importa.", "Molt car."], correctIndex: 0 }
    ]
  }
},
{
  id: 108,
  title: "Technology & Internet",
  module: "Modern Life",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'quiz'],
  words: [
    { en: "To download", ca: "Descarregar", pronunciation: "dehs-kah-rreh-GAR" },
    { en: "To upload", ca: "Pujar", pronunciation: "poo-ZHAR" },
    { en: "Password", ca: "Contrasenya", pronunciation: "kohn-trah-SEH-nyah" },
    { en: "Application", ca: "Aplicació", pronunciation: "ah-plee-kah-see-OH" },
    { en: "To update", ca: "Actualitzar", pronunciation: "ahk-too-ah-lee-TSAR" },
    { en: "Storage", ca: "Emmagatzematge", pronunciation: "ehm-mah-gahd-zeh-MAHd-zheh" },
    { en: "Cloud", ca: "Núvol", pronunciation: "NOO-bohl" },
    { en: "To stream", ca: "Transmetre en directe", pronunciation: "trahs-MEH-treh ehn dee-REHK-teh" },
    { en: "Wifi", ca: "Wifi", pronunciation: "WEE-fee" },
    { en: "Screen", ca: "Pantalla", pronunciation: "pahn-TAH-lyah" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "He d'___ l'aplicació abans d'usar-la", blank: "actualitzar", options: ["descarregar", "actualitzar", "pujar", "transmetre"], correctIndex: 1, translation: "I need to update the application before using it", explanation: "'Actualitzar' = to update. Important digital vocabulary." },
      { sentence: "La meva ___ és massa curta, no és segura", blank: "contrasenya", options: ["pantalla", "contrasenya", "aplicació", "núvol"], correctIndex: 1, translation: "My password is too short, it's not secure", explanation: "'Contrasenya' = password. Compound of 'contra' + 'senya' (counter-sign)." },
      { sentence: "Tots els meus fitxers estan al ___", blank: "núvol", options: ["wifi", "emmagatzematge", "núvol", "pantalla"], correctIndex: 2, translation: "All my files are in the cloud", explanation: "'Núvol' literally means cloud. Same word used for both meanings." },
      { sentence: "Puc ___ el document des d'aquí", blank: "descarregar", options: ["pujar", "actualitzar", "descarregar", "transmetre"], correctIndex: 2, translation: "I can download the document from here", explanation: "'Descarregar' = to download (literally: to unload)." }
    ],
    errorCorrection: [
      { sentence: "Necesito actualizar mi aplicación", errorWordIndex: 0, options: ["Necesito", "Necessito", "Necesit", "Need"], correctIndex: 1, translation: "I need to update my application", explanation: "'Necessito' is Catalan. Spanish 'necesito' vs Catalan 'necessito'." },
      { sentence: "Mi contraseña es muy segura", errorWordIndex: 1, options: ["contraseña", "contrasenya", "contrasena", "password"], correctIndex: 1, translation: "My password is very secure", explanation: "'Contrasenya' is Catalan. Note 'ny' vs Spanish 'ñ'." },
      { sentence: "Descarga el archivo desde aquí", errorWordIndex: 0, options: ["Descarga", "Descarrega", "Descarrega'l", "Download"], correctIndex: 1, translation: "Download the file from here", explanation: "'Descarrega' is the Catalan imperative. Spanish 'descarga' vs Catalan 'descarrega'." },
      { sentence: "El almacenamiento está lleno", errorWordIndex: 1, options: ["almacenamiento", "emmagatzematge", "emmagatze", "storage"], correctIndex: 1, translation: "The storage is full", explanation: "'Emmagatzematge' is Catalan. One of the longer words in the language!" }
    ]
  }
},
{
  id: 109,
  title: "Banking & Finance",
  module: "Professional",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire', 'quiz'],
  words: [
    { en: "Bank account", ca: "Compte bancari", pronunciation: "KOHM-pteh bahn-KAH-ree" },
    { en: "Transfer", ca: "Transferència", pronunciation: "trahns-feh-REHN-see-ah" },
    { en: "Savings", ca: "Estalvis", pronunciation: "ehs-TAHL-bees" },
    { en: "Loan", ca: "Préstec", pronunciation: "PREHS-tehk" },
    { en: "Interest", ca: "Interès", pronunciation: "een-teh-REHS" },
    { en: "Credit card", ca: "Targeta de crèdit", pronunciation: "tar-ZHEH-tah deh KREH-deet" },
    { en: "Balance", ca: "Saldo", pronunciation: "SAHL-doh" },
    { en: "Transaction", ca: "Transacció", pronunciation: "trahn-sahk-see-OH" },
    { en: "PIN", ca: "PIN", pronunciation: "PEEN" },
    { en: "Receipt", ca: "Rebut", pronunciation: "reh-BOOT" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Vull fer una ___ de cent euros", blank: "transferència", options: ["transacció", "transferència", "préstec", "interès"], correctIndex: 1, translation: "I want to make a transfer of one hundred euros", explanation: "'Transferència' = bank transfer. Used for moving money between accounts." },
      { sentence: "Quin és el ___ del meu compte?", blank: "saldo", options: ["interès", "saldo", "rebut", "PIN"], correctIndex: 1, translation: "What is the balance of my account?", explanation: "'Saldo' = balance. Same word in Spanish too." },
      { sentence: "El banc em cobra un ___ del tres per cent", blank: "interès", options: ["saldo", "estalvis", "interès", "préstec"], correctIndex: 2, translation: "The bank charges me an interest of three percent", explanation: "'Interès' = interest. Accent on the final syllable." },
      { sentence: "He perdut la meva ___ de crèdit", blank: "targeta", options: ["compte", "transferència", "targeta", "transacció"], correctIndex: 2, translation: "I have lost my credit card", explanation: "'Targeta' = card. 'Targeta de crèdit' = credit card." }
    ],
    miniConversation: [
      { speaker: "Bank teller", text: "Bon dia! En què li puc ajudar?", isUserTurn: false, translation: "Good morning! How can I help you?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Voldria obrir un compte d'estalvis.", "Vull diners.", "Hola."], correctIndex: 0 },
      { speaker: "Bank teller", text: "Perfecte. Té el DNI o el passaport?", isUserTurn: false, translation: "Perfect. Do you have your ID or passport?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí, tinc el passaport aquí.", "No tinc res.", "Potser."], correctIndex: 0 },
      { speaker: "Bank teller", text: "Molt bé. Quin és el dipòsit inicial?", isUserTurn: false, translation: "Very good. What is the initial deposit?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Voldria ingressar cinc-cents euros per començar.", "No ho sé.", "Cent euros."], correctIndex: 0 }
    ]
  }
},
{
  id: 110,
  title: "Emotions & Mental Health",
  module: "Personal",
  stages: ['intro', 'flashcards', 'sentenceOrdering', 'miniConversation', 'quiz'],
  words: [
    { en: "Anxiety", ca: "Ansietat", pronunciation: "ahn-see-eh-TAHT" },
    { en: "Stress", ca: "Estrès", pronunciation: "ehs-TREHS" },
    { en: "Motivation", ca: "Motivació", pronunciation: "moh-tee-bah-see-OH" },
    { en: "Frustration", ca: "Frustració", pronunciation: "froos-trah-see-OH" },
    { en: "Confidence", ca: "Confiança", pronunciation: "kohn-fee-AHN-sah" },
    { en: "Therapy", ca: "Teràpia", pronunciation: "teh-RAH-pee-ah" },
    { en: "Mindfulness", ca: "Atenció plena", pronunciation: "ah-tehn-see-OH PLEH-nah" },
    { en: "Self-esteem", ca: "Autoestima", pronunciation: "ow-toh-ehs-TEE-mah" },
    { en: "Resilience", ca: "Resiliència", pronunciation: "reh-zee-lee-EHN-see-ah" },
    { en: "Wellbeing", ca: "Benestar", pronunciation: "beh-nehs-TAR" }
  ],
  stageData: {
    sentenceOrdering: [
      { grammarNote: "💡 'Sentir-se' = to feel (reflexive). 'Em sento' = I feel. Very common in emotional contexts.", words: ["Em", "sento", "molt", "estressat", "per", "la", "feina"], correctOrder: "Em sento molt estressat per la feina", translation: "I feel very stressed about work" },
      { grammarNote: "💡 'Tenir confiança en un mateix' = to have confidence in oneself. A key self-development phrase.", words: ["Cal", "tenir", "confiança", "en", "un", "mateix"], correctOrder: "Cal tenir confiança en un mateix", translation: "One must have confidence in oneself" },
      { grammarNote: "💡 'Anar al psicòleg/terapeuta' = to see a therapist. Seeking help is normalised in Catalan culture.", words: ["Vaig", "a", "teràpia", "un", "cop", "a", "la", "setmana"], correctOrder: "Vaig a teràpia un cop a la setmana", translation: "I go to therapy once a week" },
      { grammarNote: "💡 'Benestar emocional' = emotional wellbeing. Growing vocabulary in modern Catalan.", words: ["El", "benestar", "és", "tan", "important", "com", "la", "salut"], correctOrder: "El benestar és tan important com la salut", translation: "Wellbeing is as important as health" }
    ],
    miniConversation: [
      { speaker: "Friend", text: "Com et trobes últimament? Sembla que estàs cansat.", isUserTurn: false, translation: "How have you been lately? You look tired." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Tinc molt d'estrès a la feina. Em costa dormir.", "Estic bé.", "Tot va bé."], correctIndex: 0 },
      { speaker: "Friend", text: "Has pensat en parlar amb algú? La teràpia m'ha ajudat molt.", isUserTurn: false, translation: "Have you thought about talking to someone? Therapy has helped me a lot." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí, ho estic pensant. Necessito recuperar el benestar.", "No vull.", "No cal."], correctIndex: 0 }
    ]
  }
},
{
  id: 111,
  title: "Subjunctive: Wishes & Desires",
  module: "Grammar Advanced",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'quiz'],
  words: [
    { en: "I want (you) to...", ca: "Vull que...", pronunciation: "BOOL keh" },
    { en: "I hope that...", ca: "Espero que...", pronunciation: "ehs-PEH-roh keh" },
    { en: "I would like (you) to...", ca: "M'agradaria que...", pronunciation: "mah-grah-dah-REE-ah keh" },
    { en: "It's important that...", ca: "És important que...", pronunciation: "EHS eem-por-TAHNT keh" },
    { en: "I need (you) to...", ca: "Necessito que...", pronunciation: "neh-seh-SEE-toh keh" },
    { en: "I prefer that...", ca: "Prefereixo que...", pronunciation: "preh-feh-RAY-shoh keh" },
    { en: "She comes", ca: "Ella vingui", pronunciation: "EH-lyah BEEN-ghee" },
    { en: "He does", ca: "Ell faci", pronunciation: "EHL FAH-see" },
    { en: "They speak", ca: "Ells parlin", pronunciation: "EHLS PAR-leen" },
    { en: "We can", ca: "Poguem", pronunciation: "poh-GHEHM" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Vull que ___ a temps", blank: "vinguis", options: ["véns", "vindràs", "vinguis", "vens"], correctIndex: 2, translation: "I want you to come on time", explanation: "💡 After 'vull que', use the subjunctive. 'Vindràs' is future, 'véns' is present — wrong here. 'Vinguis' = subjunctive of 'venir'." },
      { sentence: "Espero que tot ___ bé", blank: "vagi", options: ["va", "anirà", "vagi", "anem"], correctIndex: 2, translation: "I hope everything goes well", explanation: "💡 'Vagi' = subjunctive of 'anar' (to go). 'Va' would be present indicative — wrong after 'espero que'." },
      { sentence: "És important que ___ la veritat", blank: "diguis", options: ["diràs", "dius", "diguis", "dir"], correctIndex: 2, translation: "It is important that you tell the truth", explanation: "💡 'Diguis' = subjunctive of 'dir' (to say). Triggered by 'és important que'." },
      { sentence: "M'agradaria que ___ amb mi", blank: "vinguessis", options: ["vens", "vindries", "vinguessis", "véns"], correctIndex: 2, translation: "I would like you to come with me", explanation: "💡 Imperfect subjunctive after conditional: 'M'agradaria que vinguessis' = I would like you to come." }
    ],
    errorCorrection: [
      { sentence: "Vull que vendrás conmigo", errorWordIndex: 2, options: ["vendrás", "vinguis", "vindràs", "vens"], correctIndex: 1, translation: "I want you to come with me", explanation: "'Vinguis' is the subjunctive. After 'vull que', Catalan requires subjunctive, not future." },
      { sentence: "Espero que todo va bien", errorWordIndex: 3, options: ["va", "vagi", "anirà", "va"], correctIndex: 1, translation: "I hope everything goes well", explanation: "'Vagi' is subjunctive of 'anar'. After 'espero que' use subjunctive." },
      { sentence: "Es importante que dices la verdad", errorWordIndex: 3, options: ["dices", "diguis", "dius", "dir"], correctIndex: 1, translation: "It's important that you tell the truth", explanation: "'Diguis' — subjunctive of 'dir'. Both Catalan AND Spanish require subjunctive here." },
      { sentence: "Necessito que faràs el treball", errorWordIndex: 3, options: ["faràs", "facis", "fas", "fer"], correctIndex: 1, translation: "I need you to do the work", explanation: "'Facis' is subjunctive of 'fer'. 'Faràs' is future — incorrect after 'necessito que'." }
    ]
  }
},
{
  id: 112,
  title: "Subjunctive: Doubt & Opinion",
  module: "Grammar Advanced",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'quiz'],
  words: [
    { en: "I doubt that...", ca: "Dubto que...", pronunciation: "DOOB-toh keh" },
    { en: "I don't think that...", ca: "No crec que...", pronunciation: "noh KREHK keh" },
    { en: "It's possible that...", ca: "És possible que...", pronunciation: "EHS poh-SEE-bleh keh" },
    { en: "It's unlikely that...", ca: "És poc probable que...", pronunciation: "EHS pohk proh-BAH-bleh keh" },
    { en: "Maybe (+ subjunctive)", ca: "Potser (+ subjunctiu)", pronunciation: "poht-SEHR" },
    { en: "Unless...", ca: "Tret que...", pronunciation: "TREHT keh" },
    { en: "Although...", ca: "Encara que...", pronunciation: "ehn-KAH-rah keh" },
    { en: "So that...", ca: "Perquè (+ subjunctiu)", pronunciation: "pehr-KEH" },
    { en: "It seems that...", ca: "Sembla que...", pronunciation: "SEHM-blah keh" },
    { en: "I'm glad that...", ca: "M'alegra que...", pronunciation: "mah-LEH-grah keh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "No crec que ___ avui", blank: "vingui", options: ["vindrà", "ve", "vingui", "venir"], correctIndex: 2, translation: "I don't think he/she will come today", explanation: "💡 'No crec que' = I don't think that. Triggers subjunctive. 'Vindrà' would be future indicative — wrong here." },
      { sentence: "Dubto que ___ prou temps", blank: "tinguem", options: ["tenim", "tendrem", "tinguem", "tenir"], correctIndex: 2, translation: "I doubt we'll have enough time", explanation: "💡 'Dubto que' = I doubt that. Always triggers subjunctive in Catalan." },
      { sentence: "És possible que ___ demà", blank: "plou", options: ["plourà", "plou", "plogui", "plovia"], correctIndex: 2, translation: "It's possible that it will rain tomorrow", explanation: "💡 'És possible que' triggers subjunctive. 'Plogui' = subjunctive of 'ploure' (to rain)." },
      { sentence: "M'alegra que ___ tan bé", blank: "estiguis", options: ["estàs", "estaràs", "estiguis", "estar"], correctIndex: 2, translation: "I'm glad you are doing so well", explanation: "💡 'M'alegra que' = I'm glad that. Emotional expressions trigger subjunctive." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Tret que' = unless. Used with subjunctive to express exception.", words: ["Vindré", "tret", "que", "plogui"], correctOrder: "Vindré tret que plogui", translation: "I will come unless it rains" },
      { grammarNote: "💡 'Perquè' + subjunctive = so that (purpose). Different from 'perquè' + indicative = because.", words: ["T'ho", "dic", "perquè", "ho", "sàpigues"], correctOrder: "T'ho dic perquè ho sàpigues", translation: "I'm telling you so that you know" },
      { grammarNote: "💡 'Encara que' = although/even though. Takes subjunctive when expressing hypothetical.", words: ["Encara", "que", "faci", "fred,", "sortiré"], correctOrder: "Encara que faci fred, sortiré", translation: "Although it's cold, I will go out" },
      { grammarNote: "💡 'Potser' can take subjunctive or indicative in Catalan — both are acceptable.", words: ["Potser", "vingui", "potser", "no"], correctOrder: "Potser vingui potser no", translation: "Maybe he'll come, maybe not" }
    ]
  }
},
{
  id: 113,
  title: "Advanced Listening",
  module: "Grammar Advanced",
  stages: ['intro', 'flashcards', 'listenAndType', 'quickFire', 'quiz'],
  words: [
    { en: "To understand", ca: "Comprendre", pronunciation: "kohm-PREHN-dreh" },
    { en: "To repeat", ca: "Repetir", pronunciation: "reh-peh-TEER" },
    { en: "More slowly please", ca: "Més a poc a poc si us plau", pronunciation: "MEHS ah pohk ah pohk see oos PLOW" },
    { en: "I didn't catch that", ca: "No ho he entès", pronunciation: "noh oh EH ehn-TEHS" },
    { en: "Can you say it again?", ca: "Ho pots repetir?", pronunciation: "oh POHTS reh-peh-TEER" },
    { en: "What does that mean?", ca: "Què vol dir això?", pronunciation: "KEH bohl DEER ah-EE-shoh" },
    { en: "In other words", ca: "És a dir", pronunciation: "EHS ah DEER" },
    { en: "That is to say", ca: "O sigui", pronunciation: "oh SEE-ghee" },
    { en: "I understand now", ca: "Ara ho entenc", pronunciation: "AH-rah oh ehn-TEHNG" },
    { en: "Could you speak up?", ca: "Podries parlar més alt?", pronunciation: "poh-DREE-ehs par-LAR MEHS AHLT" }
  ],
  stageData: {
    listenAndType: [
      { catalan: "No ho he entès bé. Ho pots repetir més a poc a poc?", english: "I didn't understand well. Can you repeat it more slowly?", pronunciation: "noh oh EH ehn-TEHS beh oh POHTS reh-peh-TEER MEHS ah pohk ah pohk" },
      { catalan: "Sí, clar. Vull dir que hem de sortir a les vuit del vespre.", english: "Yes, of course. I mean that we need to leave at eight in the evening.", pronunciation: "see KLAR bool DEER keh ehm deh sohr-TEER ah lehs bweet dehl BEHS-preh" },
      { catalan: "Ara ho entenc. Gràcies per la paciència.", english: "Now I understand. Thank you for your patience.", pronunciation: "AH-rah oh ehn-TEHNG GRAH-see-ehs pehr lah pah-see-EHN-see-ah" },
      { catalan: "De res. Practicar la comprensió oral és molt important.", english: "You're welcome. Practising oral comprehension is very important.", pronunciation: "deh REHS prahk-tee-KAR lah kohm-prehn-see-OH oh-RAHL EHS mohlt eem-por-TAHNT" },
      { catalan: "Tens raó. Intento escoltar la ràdio en català cada dia.", english: "You're right. I try to listen to the radio in Catalan every day.", pronunciation: "tehns rah-OH een-TEHN-toh ehs-kohl-TAR lah RAH-dee-oh ehn kah-tah-LAH KAH-dah DEE-ah" }
    ]
  }
},
{
  id: 114,
  title: "Speed Conversations",
  module: "Grammar Advanced",
  stages: ['intro', 'flashcards', 'miniConversation', 'quiz'],
  words: [
    { en: "Right away", ca: "Tot seguit", pronunciation: "toht seh-GWEET" },
    { en: "Immediately", ca: "De seguida", pronunciation: "deh seh-GHEE-dah" },
    { en: "In a moment", ca: "En un moment", pronunciation: "ehn oon moh-MEHNT" },
    { en: "Hold on", ca: "Espera un moment", pronunciation: "ehs-PEH-rah oon moh-MEHNT" },
    { en: "I'm in a hurry", ca: "Tinc pressa", pronunciation: "TEENGK PREH-sah" },
    { en: "Quickly", ca: "Ràpidament", pronunciation: "RAH-pee-dah-mehnt" },
    { en: "No time", ca: "No tinc temps", pronunciation: "noh TEENGK TEHMS" },
    { en: "Let's go!", ca: "Anem!", pronunciation: "ah-NEHM" },
    { en: "I'll be right back", ca: "Torno de seguida", pronunciation: "TOHR-noh deh seh-GHEE-dah" },
    { en: "Don't be late", ca: "No arribes tard", pronunciation: "noh ah-RREE-behs TARD" }
  ],
  stageData: {
    miniConversation: [
      { speaker: "Friend", text: "Ja véns? Tenim el tren en cinc minuts!", isUserTurn: false, translation: "Are you coming? We have the train in five minutes!" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí sí, torno de seguida. Tinc les claus aquí.", "Ara no puc.", "Espera molt."], correctIndex: 0 },
      { speaker: "Friend", text: "Ràpid! No podem perdre el tren!", isUserTurn: false, translation: "Quick! We can't miss the train!" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Ja estic llest. Anem!", "No tinc pressa.", "Espera un moment."], correctIndex: 0 },
      { speaker: "Friend", text: "Perfecte! I no arribes tard demà, eh?", isUserTurn: false, translation: "Perfect! And don't be late tomorrow, OK?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Promès! Demà seré a temps.", "No ho sé.", "Potser."], correctIndex: 0 }
    ]
  }
},
{
  id: 115,
  title: "Catalan Idioms",
  module: "Culture",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'quiz'],
  words: [
    { en: "It's raining cats and dogs", ca: "Plou a bots i barrals", pronunciation: "plow ah BOHTS ee bah-RRAHLS" },
    { en: "To cost an arm and a leg", ca: "Costar un ronyó", pronunciation: "kohs-TAR oon roh-NYOH" },
    { en: "To be in a bad mood", ca: "Estar de mala lluna", pronunciation: "ehs-TAR deh MAH-lah LYOO-nah" },
    { en: "Bite the bullet", ca: "Fer de tripas cor", pronunciation: "fehr deh TREE-pahs KOHR" },
    { en: "It takes two to tango", ca: "A cada pregunta, la seva resposta", pronunciation: "ah KAH-dah preh-GOON-tah lah SEH-bah rehs-POHS-tah" },
    { en: "To pull someone's leg", ca: "Prendre el pèl", pronunciation: "PREHN-dreh ehl PEHL" },
    { en: "To turn a blind eye", ca: "Fer la vista grossa", pronunciation: "fehr lah BEES-tah GROH-sah" },
    { en: "Once in a blue moon", ca: "De tant en tant", pronunciation: "deh TAHNT ehn TAHNT" },
    { en: "To be over the moon", ca: "Estar content com un gínjol", pronunciation: "ehs-TAR kohn-TEHNT kohm oon ZHEEN-zhohl" },
    { en: "All that glitters is not gold", ca: "No tot el que lluu és or", pronunciation: "noh toht ehl keh lyoo EHS OHR" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "Avui el meu cap està de mala ___", blank: "lluna", options: ["sort", "lluna", "humor", "dia"], correctIndex: 1, translation: "Today my boss is in a bad mood", explanation: "'Estar de mala lluna' = to be in a bad mood. Literally 'to be of bad moon'." },
      { sentence: "Aquell cotxe costa un ___!", blank: "ronyó", options: ["braç", "ronyó", "peu", "cap"], correctIndex: 1, translation: "That car costs an arm and a leg!", explanation: "'Costar un ronyó' = to cost a kidney. Catalan version of 'arm and a leg'." },
      { sentence: "Plou a bots i ___ avui", blank: "barrals", options: ["gotes", "barrals", "deus", "rius"], correctIndex: 1, translation: "It's raining cats and dogs today", explanation: "'Plou a bots i barrals' = it's raining buckets. Literally 'raining in barrels'." },
      { sentence: "Em prens el ___? No t'ho crec!", blank: "pèl", options: ["cabell", "pèl", "braç", "peu"], correctIndex: 1, translation: "Are you pulling my leg? I don't believe you!", explanation: "'Prendre el pèl' = to pull someone's leg. Literally 'to take the hair'." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Fer la vista grossa' = to turn a blind eye. Literally 'to make the fat look'.", words: ["El", "professor", "va", "fer", "la", "vista", "grossa"], correctOrder: "El professor va fer la vista grossa", translation: "The teacher turned a blind eye" },
      { grammarNote: "💡 'De tant en tant' = from time to time / once in a while.", words: ["De", "tant", "en", "tant", "mengem", "fora"], correctOrder: "De tant en tant mengem fora", translation: "Once in a while we eat out" },
      { grammarNote: "💡 'No tot el que lluu és or' = all that glitters is not gold. A classic Catalan proverb.", words: ["No", "tot", "el", "que", "lluu", "és", "or"], correctOrder: "No tot el que lluu és or", translation: "All that glitters is not gold" }
    ]
  }
},
{
  id: 116,
  title: "Describing People",
  module: "Grammar Advanced",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'quiz'],
  words: [
    { en: "Reliable", ca: "De confiança", pronunciation: "deh kohn-fee-AHN-sah" },
    { en: "Ambitious", ca: "Ambiciós/a", pronunciation: "ahm-bee-see-OHS/oh-sah" },
    { en: "Stubborn", ca: "Tossut/da", pronunciation: "toh-SOOT/dah" },
    { en: "Generous", ca: "Generós/a", pronunciation: "zheh-neh-ROHS/oh-sah" },
    { en: "Thoughtful", ca: "Reflexiu/va", pronunciation: "reh-flehk-SEE-oo/bah" },
    { en: "Outgoing", ca: "Extrovertit/da", pronunciation: "ehs-troh-behr-TEET/dah" },
    { en: "Introverted", ca: "Introvertit/da", pronunciation: "een-troh-behr-TEET/dah" },
    { en: "Hard-working", ca: "Treballador/a", pronunciation: "treh-bah-lyah-DOHR/rah" },
    { en: "Creative", ca: "Creatiu/va", pronunciation: "kreh-ah-TEE-oo/bah" },
    { en: "Impatient", ca: "Impacient", pronunciation: "eem-pah-see-EHNT" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "La meva germana és molt ___", blank: "treballadora", options: ["treballador", "treballadora", "ambiciós", "generosa"], correctIndex: 1, translation: "My sister is very hard-working", explanation: "💡 Adjectives agree with the noun. 'Germana' is feminine, so 'treballadora' not 'treballador'." },
      { sentence: "El director és molt ___ amb la seva equip", blank: "de confiança", options: ["tossut", "de confiança", "impacient", "generós"], correctIndex: 1, translation: "The director is very reliable with his team", explanation: "'De confiança' = reliable/trustworthy. Literally 'of confidence'." },
      { sentence: "Ets massa ___, has d'esperar el teu torn", blank: "impacient", options: ["reflexiu", "creatiu", "impacient", "extrovertit"], correctIndex: 2, translation: "You are too impatient, you must wait your turn", explanation: "'Impacient' = impatient. Same in English and Catalan!" },
      { sentence: "El meu amic és molt ___, sempre fa coses noves", blank: "creatiu", options: ["tossut", "introvertit", "creatiu", "ambiciós"], correctIndex: 2, translation: "My friend is very creative, he always does new things", explanation: "'Creatiu' = creative (masculine). 'Creativa' for feminine." }
    ],
    errorCorrection: [
      { sentence: "Mi hermana es muy trabajadora", errorWordIndex: 1, options: ["hermana", "germana", "sister", "hermano"], correctIndex: 1, translation: "My sister is very hard-working", explanation: "'Germana' is Catalan for sister. Spanish 'hermana' vs Catalan 'germana'." },
      { sentence: "El director es muy ambicioso", errorWordIndex: 3, options: ["ambicioso", "ambiciós", "ambicios", "ambitious"], correctIndex: 1, translation: "The director is very ambitious", explanation: "'Ambiciós' is Catalan. Note the accent and no final 'o'." },
      { sentence: "Eres demasiado impaciente", errorWordIndex: 0, options: ["Eres", "Ets", "Eres", "You're"], correctIndex: 1, translation: "You are too impatient", explanation: "'Ets' is the Catalan second-person present of 'ser' (to be)." },
      { sentence: "Mi amigo es muy creativo", errorWordIndex: 1, options: ["amigo", "amic", "amic", "friend"], correctIndex: 1, translation: "My friend is very creative", explanation: "'Amic' is Catalan for male friend. Spanish 'amigo' vs Catalan 'amic'." }
    ]
  }
},
{
  id: 117,
  title: "Giving Directions (Advanced)",
  module: "Daily Life",
  stages: ['intro', 'flashcards', 'sentenceOrdering', 'miniConversation', 'quickFire', 'quiz'],
  words: [
    { en: "Roundabout", ca: "Rotonda", pronunciation: "roh-TOHN-dah" },
    { en: "Traffic lights", ca: "Semàfor", pronunciation: "seh-MAH-fohr" },
    { en: "Crossroads", ca: "Cruïlla", pronunciation: "kroo-EE-lyah" },
    { en: "Underpass", ca: "Pas subterrani", pronunciation: "PAHS soob-teh-RAH-nee" },
    { en: "One-way street", ca: "Carrer de sentit únic", pronunciation: "kah-RREHR deh sehn-TEET OO-neek" },
    { en: "Keep straight", ca: "Continua recte", pronunciation: "kohn-TEE-noo-ah REHK-teh" },
    { en: "Take the second exit", ca: "Agafa la segona sortida", pronunciation: "ah-GAH-fah lah seh-GOH-nah sohr-TEE-dah" },
    { en: "You've gone too far", ca: "Has passat de llarg", pronunciation: "AHS pah-SAHT deh LYARG" },
    { en: "On the corner", ca: "A la cantonada", pronunciation: "ah lah kahn-toh-NAH-dah" },
    { en: "Opposite", ca: "Davant de", pronunciation: "dah-BAHNT deh" }
  ],
  stageData: {
    sentenceOrdering: [
      { grammarNote: "💡 'Agafa la rotonda i surt per la tercera sortida' = take the roundabout and exit at the third exit.", words: ["Agafa", "la", "rotonda", "i", "surt", "per", "la", "tercera", "sortida"], correctOrder: "Agafa la rotonda i surt per la tercera sortida", translation: "Take the roundabout and exit at the third exit" },
      { grammarNote: "💡 'Quan vegis el semàfor' = when you see the traffic light. Subjunctive 'vegis' after 'quan' (future).", words: ["Quan", "vegis", "el", "semàfor,", "gira", "a", "l'esquerra"], correctOrder: "Quan vegis el semàfor, gira a l'esquerra", translation: "When you see the traffic light, turn left" },
      { grammarNote: "💡 'A la cantonada' = on the corner. Very useful for meeting points.", words: ["La", "farmàcia", "és", "just", "a", "la", "cantonada"], correctOrder: "La farmàcia és just a la cantonada", translation: "The pharmacy is just on the corner" },
      { grammarNote: "💡 'Has passat de llarg' = you've gone too far. Common phrase when someone overshoots.", words: ["Crec", "que", "has", "passat", "de", "llarg"], correctOrder: "Crec que has passat de llarg", translation: "I think you've gone too far" }
    ],
    miniConversation: [
      { speaker: "You", text: "", isUserTurn: true, options: ["Perdona, saps on és l'estació de metro?", "Hola.", "Necessito ajuda."], correctIndex: 0 },
      { speaker: "Passer-by", text: "Sí! Continua recte fins al semàfor, gira a la dreta i és davant de la biblioteca.", isUserTurn: false, translation: "Yes! Go straight to the traffic lights, turn right and it's opposite the library." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Quant de temps es tarda a peu?", "Gràcies.", "On és?"], correctIndex: 0 },
      { speaker: "Passer-by", text: "Uns deu minuts. No és lluny.", isUserTurn: false, translation: "About ten minutes. It's not far." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Perfecte. Moltes gràcies per l'ajuda!", "Adéu.", "Ok."], correctIndex: 0 }
    ]
  }
},
{
  id: 118,
  title: "Housing & Renting",
  module: "Daily Life",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quiz'],
  words: [
    { en: "Lease", ca: "Contracte de lloguer", pronunciation: "kohn-TRAK-teh deh lyoh-GHEHR" },
    { en: "Deposit", ca: "Fiança", pronunciation: "fee-AHN-sah" },
    { en: "Landlord", ca: "Propietari/a", pronunciation: "proh-pee-eh-TAH-ree/ah" },
    { en: "Tenant", ca: "Llogatari/a", pronunciation: "lyoh-gah-TAH-ree/ah" },
    { en: "Utilities", ca: "Subministraments", pronunciation: "soob-mee-nes-trah-MEHNTS" },
    { en: "Furnished", ca: "Moblat/da", pronunciation: "mohb-LAHT/dah" },
    { en: "Square metres", ca: "Metres quadrats", pronunciation: "MEH-trehs kwah-DRAHS" },
    { en: "Community fees", ca: "Quotes de comunitat", pronunciation: "KWOH-tehs deh koh-moo-nee-TAHT" },
    { en: "Notice period", ca: "Preavís", pronunciation: "preh-ah-BEES" },
    { en: "Property", ca: "Immoble", pronunciation: "ee-MOH-bleh" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "He de pagar una ___ equivalent a dos mesos", blank: "fiança", options: ["lloguer", "fiança", "preavís", "quota"], correctIndex: 1, translation: "I have to pay a deposit equivalent to two months", explanation: "'Fiança' = deposit/security deposit. Standard in Catalan rental law." },
      { sentence: "El pis és ___, inclou tots els mobles", blank: "moblat", options: ["gran", "moblat", "nou", "net"], correctIndex: 1, translation: "The flat is furnished, it includes all the furniture", explanation: "'Moblat' = furnished (masculine). 'Moblada' for feminine." },
      { sentence: "Cal donar un ___ de trenta dies per marxar", blank: "preavís", options: ["contracte", "preavís", "fiança", "lloguer"], correctIndex: 1, translation: "You must give thirty days notice to leave", explanation: "'Preavís' = notice period. Important rental term." },
      { sentence: "Els ___ inclouen l'aigua i la llum", blank: "subministraments", options: ["mobles", "subministraments", "quotes", "immobles"], correctIndex: 1, translation: "The utilities include water and electricity", explanation: "'Subministraments' = utilities/supplies. Longer word but essential for renting." }
    ],
    miniConversation: [
      { speaker: "Landlord", text: "Hola! Truca pel pis de lloguer?", isUserTurn: false, translation: "Hello! Are you calling about the rental flat?" },
      { speaker: "You", text: "", isUserTurn: true, options: ["Sí, el que anunciaven al portal. Encara està disponible?", "Sí.", "Vull un pis."], correctIndex: 0 },
      { speaker: "Landlord", text: "Sí! Té 65 metres quadrats, és moblat i el lloguer és de 900 euros al mes.", isUserTurn: false, translation: "Yes! It has 65 square metres, it's furnished and the rent is 900 euros per month." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Les quotes de comunitat estan incloses?", "On és?", "Quin preu?"], correctIndex: 0 },
      { speaker: "Landlord", text: "No, les paga el llogatari. Són uns 60 euros al mes.", isUserTurn: false, translation: "No, the tenant pays them. They are about 60 euros a month." },
      { speaker: "You", text: "", isUserTurn: true, options: ["Podríem visitar el pis aquesta setmana?", "Massa car.", "No gràcies."], correctIndex: 0 }
    ]
  }
},
{
  id: 119,
  title: "Work & Career",
  module: "Professional",
  stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'quiz'],
  words: [
    { en: "To apply for a job", ca: "Sol·licitar una feina", pronunciation: "sohl-lee-see-TAR OO-nah FAY-nah" },
    { en: "CV / Resume", ca: "Currículum", pronunciation: "koo-RREE-koo-loom" },
    { en: "Interview", ca: "Entrevista", pronunciation: "ehn-treh-BEES-tah" },
    { en: "Salary", ca: "Salari", pronunciation: "sah-LAH-ree" },
    { en: "Promotion", ca: "Ascens", pronunciation: "ahs-SEHNS" },
    { en: "Colleague", ca: "Company/a de feina", pronunciation: "kohm-PAH-nyah deh FAY-nah" },
    { en: "To resign", ca: "Dimitir", pronunciation: "dee-mee-TEER" },
    { en: "Redundancy", ca: "Acomiadament", pronunciation: "ah-koh-mee-ah-dah-MEHNT" },
    { en: "Freelance", ca: "Autònom/a", pronunciation: "ow-TOH-nohm/mah" },
    { en: "Remote work", ca: "Teletreball", pronunciation: "teh-leh-treh-BAHL" }
  ],
  stageData: {
    fillInTheBlank: [
      { sentence: "He enviat el meu ___ per a la plaça", blank: "currículum", options: ["entrevista", "currículum", "salari", "ascens"], correctIndex: 1, translation: "I sent my CV for the position", explanation: "'Currículum' = CV. Same word in Catalan and Spanish." },
      { sentence: "Treballo en ___ des de casa", blank: "teletreball", options: ["freelance", "teletreball", "ascens", "dimitir"], correctIndex: 1, translation: "I work remotely from home", explanation: "'Teletreball' = remote work. Very current vocabulary post-2020." },
      { sentence: "M'han ofert un ___ i una pujada de sou", blank: "ascens", options: ["salari", "ascens", "acomiadament", "entrevista"], correctIndex: 1, translation: "They have offered me a promotion and a pay rise", explanation: "'Ascens' = promotion (at work). 'Pujada de sou' = pay rise." },
      { sentence: "Treballo com a ___ i poso els meus propis horaris", blank: "autònom", options: ["autònom", "company", "empleat", "director"], correctIndex: 0, translation: "I work as a freelancer and set my own hours", explanation: "'Autònom/a' = self-employed/freelancer. Legal term in Catalan/Spanish system." }
    ],
    sentenceOrdering: [
      { grammarNote: "💡 'Buscar feina' = to look for work. 'Feina' = work/job (more Catalan than 'treball' in everyday speech).", words: ["Porto", "tres", "mesos", "buscant", "feina"], correctOrder: "Porto tres mesos buscant feina", translation: "I've been looking for work for three months" },
      { grammarNote: "💡 'Tenir una entrevista' = to have an interview. Don't confuse 'entrevista' (interview) with 'entreveure' (to glimpse).", words: ["Demà", "tinc", "una", "entrevista", "per", "a", "una", "empresa", "nova"], correctOrder: "Demà tinc una entrevista per a una empresa nova", translation: "Tomorrow I have an interview for a new company" },
      { grammarNote: "💡 'Demanar un augment de sou' = to ask for a pay rise. 'Augment' = increase.", words: ["Vull", "demanar", "un", "augment", "de", "sou", "al", "meu", "cap"], correctOrder: "Vull demanar un augment de sou al meu cap", translation: "I want to ask my boss for a pay rise" }
    ]
  }
},
{
  id: 120,
  title: "Regional Catalan & Dialects",
  module: "Culture",
  stages: ['intro', 'flashcards', 'listenAndType', 'quiz'],
  words: [
    { en: "Central Catalan (Barcelona)", ca: "Català central", pronunciation: "kah-tah-LAH sehn-TRAHL" },
    { en: "Valencian", ca: "Valencià", pronunciation: "bah-lehn-see-AH" },
    { en: "Balearic", ca: "Balear", pronunciation: "bah-leh-AR" },
    { en: "Andorran Catalan", ca: "Català d'Andorra", pronunciation: "kah-tah-LAH dahn-DOH-rah" },
    { en: "Dialect", ca: "Dialecte", pronunciation: "dee-ah-LEHK-teh" },
    { en: "Accent", ca: "Accent", pronunciation: "ahk-SEHNT" },
    { en: "Pronunciation", ca: "Pronunciació", pronunciation: "proh-noon-see-ah-see-OH" },
    { en: "Slang", ca: "Argot", pronunciation: "ar-GOHT" },
    { en: "Standard", ca: "Estàndard", pronunciation: "ehs-TAHN-dard" },
    { en: "Linguistic variety", ca: "Varietat lingüística", pronunciation: "bah-ree-eh-TAHT leen-GWEES-tee-kah" }
  ],
  stageData: {
    listenAndType: [
      { catalan: "El català té molts dialectes però tots s'entenen", english: "Catalan has many dialects but they all understand each other", pronunciation: "ehl kah-tah-LAH teh MOHLS dee-ah-LEHK-tehs peh-ROH TOHLS sehn-TEH-nehn" },
      { catalan: "El valencià és una varietat del català parlada al País Valencià", english: "Valencian is a variety of Catalan spoken in the Valencian Country", pronunciation: "ehl bah-lehn-see-AH EHS OO-nah bah-ree-eh-TAHT dehl kah-tah-LAH par-LAH-dah ahl pah-EES bah-lehn-see-AH" },
      { catalan: "A les Illes Balears parlen el mallorquí, el menorquí i l'eivissenc", english: "In the Balearic Islands they speak Mallorcan, Minorcan and Ibizan", pronunciation: "ah lehs EE-lyehs bah-leh-ARS par-lehn ehl mah-lyohr-KEE ehl meh-nohr-KEE ee lee-bee-SEHNG" },
      { catalan: "L'accent d'Andorra és molt diferent al de Barcelona", english: "The Andorran accent is very different from the Barcelona one", pronunciation: "lahk-SEHNT dahn-DOH-rah EHS mohlt dee-feh-REHNT ahl deh bahr-seh-LOH-nah" },
      { catalan: "Aprendre el català estàndard t'ajuda a entendre tots els dialectes", english: "Learning standard Catalan helps you understand all the dialects", pronunciation: "ah-PREHN-dreh ehl kah-tah-LAH ehs-TAHN-dard tah-YOO-dah ah ehn-TEHN-dreh TOHLS ehls dee-ah-LEHK-tehs" }
    ]
  }
}
];


