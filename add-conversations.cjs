const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'conversations.js');
let content = fs.readFileSync(filePath, 'utf8');

const newConversations = `
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
}`;

// Find the closing of the array and insert before it
const closingPattern = /\}\s*\n\];/;
if (!closingPattern.test(content)) {
  console.log('ERROR: Could not find end of conversations array.');
  process.exit(1);
}

content = content.replace(closingPattern, `}${newConversations}\n];`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: C56-C60 conversations appended to conversations.js');
