// ============================================================
// HOLACATALÀ — LESSONS 121-140
// Add to src/lessons120.js
// Export as: export const lessons120 = [ ... ];
// Then in App.jsx add to LESSONS array:
// import { lessons120 } from './lessons120.js';
// const LESSONS = [...lessons50, ...lessons100, ...lessons120];
// Also add LESSON_TIERS entries (see bottom of file)
// ============================================================

export const lessons120 = [

  // ─── LESSON 121: Legal & Administrative ───────────────────
  {
    id: 121,
    title: "Legal & Administrative",
    module: "Professional",
stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire'],    words: [
      { en: "Residence permit", ca: "Permís de residència", pronunciation: "per-MEES deh reh-see-DEN-syah" },
      { en: "Contract", ca: "Contracte", pronunciation: "con-TRAC-teh" },
      { en: "Notary", ca: "Notari", pronunciation: "noh-TAH-ree" },
      { en: "Signature", ca: "Signatura", pronunciation: "sig-nah-TOO-rah" },
      { en: "Document", ca: "Document", pronunciation: "doh-coo-MENT" },
      { en: "Certificate", ca: "Certificat", pronunciation: "ser-tee-fee-CAT" },
      { en: "Register", ca: "Registre", pronunciation: "reh-ZHEES-treh" },
      { en: "Authority", ca: "Autoritat", pronunciation: "ow-toh-ree-TAT" },
      { en: "Application", ca: "Sol·licitud", pronunciation: "sol-lee-see-TOOD" },
      { en: "Deadline", ca: "Termini", pronunciation: "ter-MEE-nee" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Necessito renovar el meu ___ de residència", blank: "permís", options: ["permís", "contracte", "registre", "document"], correctIndex: 0, translation: "I need to renew my residence permit", explanation: "'Permís' = permit/permission. 'Permís de residència' is essential vocabulary for expats." },
        { sentence: "El ___ ha de signar el document", blank: "notari", options: ["client", "notari", "registre", "termini"], correctIndex: 1, translation: "The notary must sign the document", explanation: "'Notari' = notary. In Catalonia, notaries are essential for property and legal transactions." },
        { sentence: "La ___ és al final del document", blank: "signatura", options: ["sol·licitud", "autoritat", "signatura", "certificat"], correctIndex: 2, translation: "The signature is at the end of the document", explanation: "'Signatura' = signature. 'Firmar' = to sign." },
        { sentence: "El ___ acaba demà", blank: "termini", options: ["registre", "notari", "document", "termini"], correctIndex: 3, translation: "The deadline is tomorrow", explanation: "'Termini' = deadline/term. 'El termini és avui' = The deadline is today." },
        { sentence: "He presentat la ___ al registre", blank: "sol·licitud", options: ["signatura", "sol·licitud", "autoritat", "certificat"], correctIndex: 1, translation: "I have submitted the application to the registry", explanation: "'Sol·licitud' = application/request. 'Presentar' = to submit/present." }
      ],
      miniConversation: [
        { speaker: "Official", text: "Bon dia! En què puc ajudar-lo?", isUserTurn: false, translation: "Good morning! How can I help you?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Vull renovar el meu permís de residència", "Vull un cafè", "On és el bany?"], correctIndex: 0 },
        { speaker: "Official", text: "Necessita el passaport i dos fotografies.", isUserTurn: false, translation: "You need the passport and two photographs." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Aquí té el passaport i les fotos", "No entenc", "Fins aviat"], correctIndex: 0 },
        { speaker: "Official", text: "Perfecte. El termini és de dues setmanes.", isUserTurn: false, translation: "Perfect. The deadline is two weeks." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Gràcies, quan haig de tornar?", "No m'agrada", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 122: Medical Specialists ──────────────────────
  {
    id: 122,
    title: "Medical Specialists",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation', 'quickFire'],
    words: [
      { en: "Cardiologist", ca: "Cardiòleg", pronunciation: "car-dee-OH-lehg" },
      { en: "Dermatologist", ca: "Dermatòleg", pronunciation: "der-mah-TOH-lehg" },
      { en: "Physiotherapist", ca: "Fisioterapeuta", pronunciation: "fee-syoh-teh-rah-PEH-oo-tah" },
      { en: "Surgeon", ca: "Cirurgià", pronunciation: "see-roor-ZHYAH" },
      { en: "Gynaecologist", ca: "Ginecòleg", pronunciation: "zhee-neh-COH-lehg" },
      { en: "Neurologist", ca: "Neuròleg", pronunciation: "neh-oo-ROH-lehg" },
      { en: "Paediatrician", ca: "Pediatre", pronunciation: "peh-dee-AH-treh" },
      { en: "Psychiatrist", ca: "Psiquiatre", pronunciation: "psee-kee-AH-treh" },
      { en: "Blood test", ca: "Anàlisi de sang", pronunciation: "ah-NAH-lee-see deh SANG" },
      { en: "X-ray", ca: "Radiografia", pronunciation: "rah-dyoh-grah-FEE-ah" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Necessito veure un cardiòleg", english: "I need to see a cardiologist", pronunciation: "neh-seh-SEE-toh VEH-oo-reh oon car-dee-OH-lehg" },
        { catalan: "El metge m'ha demanat una anàlisi de sang", english: "The doctor asked me for a blood test", pronunciation: "el MET-zheh mah deh-mah-NAT OO-nah ah-NAH-lee-see deh SANG" },
        { catalan: "Tinc una cita amb el fisioterapeuta", english: "I have an appointment with the physiotherapist", pronunciation: "TING OO-nah SEE-tah amb el fee-syoh-teh-rah-PEH-oo-tah" },
        { catalan: "El cirurgià ha dit que tot ha anat bé", english: "The surgeon said everything went well", pronunciation: "el see-roor-ZHYAH ah DEET keh TOT ah ah-NAT BEH" }
      ],
      miniConversation: [
        { speaker: "Doctor", text: "Com es troba avui?", isUserTurn: false, translation: "How are you feeling today?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Tinc dolor aquí i necessito una radiografia", "Molt bé, gràcies", "Vull menjar"], correctIndex: 0 },
        { speaker: "Doctor", text: "D'acord. Li faré una derivació al neuròleg.", isUserTurn: false, translation: "OK. I'll give you a referral to the neurologist." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Quan puc demanar la cita?", "No vull anar", "Tinc gana"], correctIndex: 0 },
        { speaker: "Doctor", text: "Pot trucar al 93 272 00 00 per demanar hora.", isUserTurn: false, translation: "You can call 93 272 00 00 to book an appointment." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Moltes gràcies, ho faré avui", "No entenc", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 123: Real Estate ───────────────────────────────
  {
    id: 123,
    title: "Buying & Renting Property",
    module: "Daily Life",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'quickFire'],
    words: [
      { en: "Mortgage", ca: "Hipoteca", pronunciation: "ee-poh-TEH-cah" },
      { en: "Estate agent", ca: "Agent immobiliari", pronunciation: "ah-ZHENT ee-moh-bee-lee-AH-ree" },
      { en: "Square metres", ca: "Metres quadrats", pronunciation: "MEH-trehs cwah-DRATS" },
      { en: "Community fees", ca: "Comunitat", pronunciation: "coh-moo-nee-TAT" },
      { en: "Owner", ca: "Propietari", pronunciation: "proh-pee-eh-TAH-ree" },
      { en: "Tenant", ca: "Inquilí", pronunciation: "een-kee-LEE" },
      { en: "Deposit", ca: "Fiança", pronunciation: "fee-AN-sah" },
      { en: "Utilities", ca: "Subministraments", pronunciation: "soob-mee-nis-trah-MENTS" },
      { en: "Ground floor", ca: "Planta baixa", pronunciation: "PLAN-tah BAH-ee-shah" },
      { en: "Top floor", ca: "Àtic", pronunciation: "AH-teek" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El pis té 85 ___ quadrats", blank: "metres", options: ["pisos", "metres", "euros", "anys"], correctIndex: 1, translation: "The flat has 85 square metres", explanation: "'Metres quadrats' = square metres. Essential for property searches." },
        { sentence: "La ___ és de dos mesos de lloguer", blank: "fiança", options: ["hipoteca", "fiança", "comunitat", "àtic"], correctIndex: 1, translation: "The deposit is two months' rent", explanation: "'Fiança' = deposit. Standard in Catalonia is 1-2 months." },
        { sentence: "L'___ immobiliari ha ensenyat tres pisos", blank: "agent", options: ["inquilí", "àtic", "agent", "propietari"], correctIndex: 2, translation: "The estate agent showed three flats", explanation: "'Agent immobiliari' = estate agent. Also called 'immobiliari' informally." },
        { sentence: "El ___ paga la hipoteca cada mes", blank: "propietari", options: ["inquilí", "propietari", "agent", "àtic"], correctIndex: 1, translation: "The owner pays the mortgage every month", explanation: "'Propietari' = owner. 'Inquilí' = tenant. Know both!" }
      ],
      errorCorrection: [
        { sentence: "Vull comprar un piso gran", errorWordIndex: 4, options: ["piso", "pis", "pisso", "pises"], correctIndex: 1, translation: "I want to buy a big flat", explanation: "'Pis' is Catalan. 'Piso' is Spanish. Don't mix them!" },
        { sentence: "La fianza és de tres mesos", errorWordIndex: 1, options: ["fianza", "fiança", "fianса", "fianse"], correctIndex: 1, translation: "The deposit is three months", explanation: "'Fiança' is Catalan (with ç). 'Fianza' is Spanish." },
        { sentence: "Necessito parlar amb el propietario", errorWordIndex: 5, options: ["propietario", "propietari", "proprietari", "propietàri"], correctIndex: 1, translation: "I need to speak with the owner", explanation: "'Propietari' is Catalan. 'Propietario' is Spanish." },
        { sentence: "El pis está a la planta baixa", errorWordIndex: 3, options: ["está", "és", "esta", "es"], correctIndex: 1, translation: "The flat is on the ground floor", explanation: "'Está' is Spanish. In Catalan it's 'és' (to be permanently) or 'està' (temporary location)." }
      ]
    }
  },

  // ─── LESSON 124: Education System ─────────────────────────
  {
    id: 124,
    title: "Education System",
    module: "Society",
    stages: ['intro', 'flashcards', 'sentenceOrdering', 'miniConversation', 'quickFire'],
    words: [
      { en: "Nursery school", ca: "Guarderia", pronunciation: "gwar-deh-REE-ah" },
      { en: "Primary school", ca: "Escola primària", pronunciation: "es-COH-lah pree-MAH-ryah" },
      { en: "Secondary school", ca: "Institut", pronunciation: "een-stee-TOOT" },
      { en: "University", ca: "Universitat", pronunciation: "oo-nee-ver-see-TAT" },
      { en: "Degree", ca: "Grau", pronunciation: "GRAW" },
      { en: "Masters", ca: "Màster", pronunciation: "MAS-ter" },
      { en: "Scholarship", ca: "Beca", pronunciation: "BEH-cah" },
      { en: "Timetable", ca: "Horari", pronunciation: "oh-RAH-ree" },
      { en: "Exam", ca: "Examen", pronunciation: "ec-SAH-men" },
      { en: "Homework", ca: "Deures", pronunciation: "DEH-oo-rehs" }
    ],
    stageData: {
      sentenceOrdering: [
        { grammarNote: "💡 'Anar a' + place: 'va a l'escola' = goes to school. Very common structure.", words: ["La", "nena", "va", "a", "l'escola", "primària"], correctOrder: "La nena va a l'escola primària", translation: "The girl goes to primary school" },
        { grammarNote: "💡 'Fer els deures' = to do homework. 'Fer' is used for many activities: fer esport, fer la compra.", words: ["Ha", "de", "fer", "els", "deures", "avui"], correctOrder: "Ha de fer els deures avui", translation: "She has to do homework today" },
        { grammarNote: "💡 'Tenir un examen' = to have an exam. 'Aprovar' = to pass. 'Suspendre' = to fail.", words: ["Demà", "tinc", "un", "examen", "important"], correctOrder: "Demà tinc un examen important", translation: "Tomorrow I have an important exam" },
        { grammarNote: "💡 'Grau' = bachelor's degree. 'Màster' = master's. 'Doctorat' = PhD.", words: ["Estudio", "un", "grau", "a", "la", "universitat"], correctOrder: "Estudio un grau a la universitat", translation: "I study a degree at university" }
      ],
      miniConversation: [
        { speaker: "Parent", text: "On va el teu fill a l'escola?", isUserTurn: false, translation: "Where does your son go to school?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Va a l'escola primària del barri", "No tinc fills", "No sé"], correctIndex: 0 },
        { speaker: "Parent", text: "I en quina llengua ensenyen?", isUserTurn: false, translation: "And in what language do they teach?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["En català principalment, però també castellà", "En anglès", "No ho sé"], correctIndex: 0 },
        { speaker: "Parent", text: "Molt bé! El català és molt important aquí.", isUserTurn: false, translation: "Very good! Catalan is very important here." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, per això el meu fill l'apren a l'escola", "No estic d'acord", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 125: Sports & Fitness ─────────────────────────
  {
    id: 125,
    title: "Sports & Fitness",
    module: "Leisure",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'quickFire'],
    words: [
      { en: "Match", ca: "Partit", pronunciation: "par-TEET" },
      { en: "Championship", ca: "Campionat", pronunciation: "cam-pee-oh-NAT" },
      { en: "Training", ca: "Entrenament", pronunciation: "en-treh-nah-MENT" },
      { en: "Coach", ca: "Entrenador", pronunciation: "en-treh-nah-DOR" },
      { en: "Team", ca: "Equip", pronunciation: "eh-KEEP" },
      { en: "Goal", ca: "Gol", pronunciation: "GOL" },
      { en: "Referee", ca: "Àrbitre", pronunciation: "AR-bee-treh" },
      { en: "Stadium", ca: "Estadi", pronunciation: "es-TAH-dee" },
      { en: "Score", ca: "Marcador", pronunciation: "mar-cah-DOR" },
      { en: "Season", ca: "Temporada", pronunciation: "tem-poh-RAH-dah" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El Barça ha guanyat el ___", blank: "campionat", options: ["partit", "gol", "campionat", "àrbitre"], correctIndex: 2, translation: "Barça has won the championship", explanation: "'Campionat' = championship. FC Barcelona is always called 'el Barça' informally." },
        { sentence: "L'___ ha xiulat una falta", blank: "àrbitre", options: ["entrenador", "àrbitre", "equip", "estadi"], correctIndex: 1, translation: "The referee whistled a foul", explanation: "'Àrbitre' = referee. 'Xiular' = to whistle." },
        { sentence: "El ___ ha marcat tres gols", blank: "equip", options: ["marcador", "estadi", "equip", "temporada"], correctIndex: 2, translation: "The team scored three goals", explanation: "'Equip' = team. 'Marcar un gol' = to score a goal." },
        { sentence: "L'entrenament és cada dimarts a l'___", blank: "estadi", options: ["gol", "àrbitre", "temporada", "estadi"], correctIndex: 3, translation: "Training is every Tuesday at the stadium", explanation: "'Estadi' = stadium. Camp Nou is the most famous estadi in Catalonia." }
      ],
      errorCorrection: [
        { sentence: "El equipo ha jugat molt bé", errorWordIndex: 1, options: ["equipo", "equip", "equippo", "equipa"], correctIndex: 1, translation: "The team played very well", explanation: "'Equip' is Catalan. 'Equipo' is Spanish." },
        { sentence: "Han marcat un goal increïble", errorWordIndex: 3, options: ["goal", "gol", "goall", "gole"], correctIndex: 1, translation: "They scored an incredible goal", explanation: "'Gol' is Catalan (and Spanish). 'Goal' is English — don't use it in Catalan!" },
        { sentence: "El partido comença a les vuit", errorWordIndex: 1, options: ["partido", "partit", "partide", "partid"], correctIndex: 1, translation: "The match starts at eight", explanation: "'Partit' is Catalan. 'Partido' is Spanish." }
      ]
    }
  },

  // ─── LESSON 126: Arts & Culture ───────────────────────────
  {
    id: 126,
    title: "Arts & Culture",
    module: "Culture",
    stages: ['intro', 'flashcards', 'sentenceOrdering', 'miniConversation', 'quickFire'],
    words: [
      { en: "Exhibition", ca: "Exposició", pronunciation: "ec-spoh-see-SYOH" },
      { en: "Museum", ca: "Museu", pronunciation: "moo-ZEH-oo" },
      { en: "Painting", ca: "Quadre", pronunciation: "CWAH-dreh" },
      { en: "Sculpture", ca: "Escultura", pronunciation: "es-cool-TOO-rah" },
      { en: "Artist", ca: "Artista", pronunciation: "ar-TEES-tah" },
      { en: "Gallery", ca: "Galeria", pronunciation: "gah-leh-REE-ah" },
      { en: "Masterpiece", ca: "Obra mestra", pronunciation: "OH-brah MES-trah" },
      { en: "Performance", ca: "Actuació", pronunciation: "ac-too-ah-SYOH" },
      { en: "Ticket", ca: "Entrada", pronunciation: "en-TRAH-dah" },
      { en: "Review", ca: "Crítica", pronunciation: "CREE-tee-cah" }
    ],
    stageData: {
      sentenceOrdering: [
        { grammarNote: "💡 'Anar al museu' = to go to the museum. 'Al' = a + el (contraction). Always use contractions in Catalan.", words: ["Vull", "anar", "al", "museu", "demà"], correctOrder: "Vull anar al museu demà", translation: "I want to go to the museum tomorrow" },
        { grammarNote: "💡 'Estar exposat' = to be exhibited. Passive constructions with 'estar' are common in cultural contexts.", words: ["El", "quadre", "està", "exposat", "a", "la", "galeria"], correctOrder: "El quadre està exposat a la galeria", translation: "The painting is exhibited at the gallery" },
        { grammarNote: "💡 'Dues entrades' = two tickets. 'Dues' is the feminine form of 'dos'. 'Entrada' is feminine.", words: ["Voldria", "dues", "entrades", "per", "a", "l'exposició"], correctOrder: "Voldria dues entrades per a l'exposició", translation: "I would like two tickets for the exhibition" },
        { grammarNote: "💡 'Sembla' = it seems/looks like. Useful for expressing opinions about art.", words: ["Aquesta", "obra", "mestra", "sembla", "increïble"], correctOrder: "Aquesta obra mestra sembla increïble", translation: "This masterpiece looks incredible" }
      ],
      miniConversation: [
        { speaker: "Friend", text: "Has vist l'exposició de Miró al MACBA?", isUserTurn: false, translation: "Have you seen the Miró exhibition at MACBA?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí! Les escultures m'han semblat increïbles", "No m'agrada l'art", "Quin és el MACBA?"], correctIndex: 0 },
        { speaker: "Friend", text: "A mi m'han agradat més els quadres. Quina crítica ha tingut?", isUserTurn: false, translation: "I liked the paintings more. What kind of review has it had?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Molt bona, tothom parla molt bé de l'exposició", "No ho sé", "No m'interessa"], correctIndex: 0 },
        { speaker: "Friend", text: "Potser tornem? Voldria veure-la un altre cop.", isUserTurn: false, translation: "Maybe we go back? I'd like to see it again." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí! Comprem les entrades ara en línia", "No tinc temps", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 127: Music & Entertainment ────────────────────
  {
    id: 127,
    title: "Music & Entertainment",
    module: "Culture",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire'],
    words: [
      { en: "Concert", ca: "Concert", pronunciation: "con-SERT" },
      { en: "Singer", ca: "Cantant", pronunciation: "can-TANT" },
      { en: "Band", ca: "Grup", pronunciation: "GROOP" },
      { en: "Festival", ca: "Festival", pronunciation: "fes-tee-VAL" },
      { en: "Stage", ca: "Escenari", pronunciation: "es-seh-NAH-ree" },
      { en: "Lyrics", ca: "Lletra", pronunciation: "LYEH-trah" },
      { en: "Rehearsal", ca: "Assaig", pronunciation: "as-SAHCH" },
      { en: "Record label", ca: "Discogràfica", pronunciation: "dis-coh-GRAH-fee-cah" },
      { en: "Album", ca: "Àlbum", pronunciation: "AL-boom" },
      { en: "Applause", ca: "Aplaudiments", pronunciation: "ah-plow-dee-MENTS" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El ___ ha actuat davant de 50,000 persones", blank: "cantant", options: ["àlbum", "cantant", "assaig", "lletra"], correctIndex: 1, translation: "The singer performed in front of 50,000 people", explanation: "'Cantant' = singer. 'Actuar' = to perform." },
        { sentence: "El nou ___ del grup és fantàstic", blank: "àlbum", options: ["festival", "escenari", "àlbum", "concert"], correctIndex: 2, translation: "The band's new album is fantastic", explanation: "'Àlbum' = album. Stress on the first syllable." },
        { sentence: "El ___ Primavera Sound és molt famós", blank: "festival", options: ["grup", "festival", "assaig", "cantant"], correctIndex: 1, translation: "The Primavera Sound festival is very famous", explanation: "'Festival' = festival. Primavera Sound in Barcelona is one of Europe's biggest music festivals." },
        { sentence: "Els ___ han durat cinc minuts", blank: "aplaudiments", options: ["assaigs", "lletres", "aplaudiments", "concerts"], correctIndex: 2, translation: "The applause lasted five minutes", explanation: "'Aplaudiments' = applause (always plural). 'Aplaudir' = to applaud/clap." }
      ],
      miniConversation: [
        { speaker: "Friend", text: "Vas al concert del Sopa de Cabra dissabte?", isUserTurn: false, translation: "Are you going to the Sopa de Cabra concert on Saturday?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí! Ja tinc l'entrada comprada", "No, no m'agrada la música", "Qui és?"], correctIndex: 0 },
        { speaker: "Friend", text: "Genial! M'encanta la seva lletra, és molt catalana.", isUserTurn: false, translation: "Great! I love their lyrics, they're very Catalan." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, canten tot en català, m'agrada molt", "Prefereixo el jazz", "No entenc"], correctIndex: 0 },
        { speaker: "Friend", text: "On quedems? A l'entrada de l'escenari principal?", isUserTurn: false, translation: "Where shall we meet? At the entrance of the main stage?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Perfecte, ens veiem a les vuit davant de l'escenari", "No sé on és", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 128: Travel & Tourism ─────────────────────────
  {
    id: 128,
    title: "Travel & Tourism",
    module: "Leisure",
    stages: ['intro', 'flashcards', 'listenAndType', 'errorCorrection', 'quickFire'],
    words: [
      { en: "Tourist", ca: "Turista", pronunciation: "too-REES-tah" },
      { en: "Guide", ca: "Guia", pronunciation: "GEE-ah" },
      { en: "Itinerary", ca: "Itinerari", pronunciation: "ee-tee-neh-RAH-ree" },
      { en: "Excursion", ca: "Excursió", pronunciation: "ex-coor-SYOH" },
      { en: "Return ticket", ca: "Bitllet d'anada i tornada", pronunciation: "beet-LYET dah-NAH-dah ee tor-NAH-dah" },
      { en: "Sunscreen", ca: "Crema solar", pronunciation: "CREH-mah soh-LAR" },
      { en: "Sightseeing", ca: "Visita turística", pronunciation: "vee-SEE-tah too-REES-tee-cah" },
      { en: "Souvenir", ca: "Record", pronunciation: "reh-COR" },
      { en: "Currency", ca: "Divisa", pronunciation: "dee-VEE-sah" },
      { en: "Border", ca: "Frontera", pronunciation: "fron-TEH-rah" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "Vull comprar un bitllet d'anada i tornada", english: "I want to buy a return ticket", pronunciation: "vool com-PRAR oon beet-LYET dah-NAH-dah ee tor-NAH-dah" },
        { catalan: "La visita turística comença a les deu", english: "The tourist visit starts at ten", pronunciation: "lah vee-SEE-tah too-REES-tee-cah co-MEN-sah ah lehs DEH-oo" },
        { catalan: "Hem de passar per la frontera", english: "We have to cross the border", pronunciation: "em deh pah-SAR per lah fron-TEH-rah" },
        { catalan: "El guia ens portarà a llocs especials", english: "The guide will take us to special places", pronunciation: "el GEE-ah ens por-tah-RAH ah lyoks es-peh-SYALS" }
      ],
      errorCorrection: [
        { sentence: "Soc turisto i vull visitar Barcelona", errorWordIndex: 1, options: ["turisto", "turista", "tourista", "turistа"], correctIndex: 1, translation: "I am a tourist and want to visit Barcelona", explanation: "'Turista' is both masculine and feminine in Catalan. No gender change needed." },
        { sentence: "El guia nos ha portat al museu", errorWordIndex: 3, options: ["nos", "ens", "nous", "nos"], correctIndex: 1, translation: "The guide took us to the museum", explanation: "'Ens' = us (object pronoun). 'Nos' is Spanish. In Catalan it's always 'ens'." },
        { sentence: "Necessito comprar un recuerdo per a la família", errorWordIndex: 4, options: ["recuerdo", "record", "recórd", "recordo"], correctIndex: 1, translation: "I need to buy a souvenir for the family", explanation: "'Record' = souvenir/memory in Catalan. 'Recuerdo' is Spanish." }
      ]
    }
  },

  // ─── LESSON 129: Architecture & Design ────────────────────
  {
    id: 129,
    title: "Architecture & Gaudí",
    module: "Culture",
    stages: ['intro', 'flashcards', 'storyMode', 'fillInTheBlank', 'miniConversation', 'quickFire'],
    words: [
      { en: "Architect", ca: "Arquitecte", pronunciation: "ar-kee-TEC-teh" },
      { en: "Facade", ca: "Façana", pronunciation: "fah-SAH-nah" },
      { en: "Tower", ca: "Torre", pronunciation: "TOH-rreh" },
      { en: "Cathedral", ca: "Catedral", pronunciation: "cah-teh-DRAL" },
      { en: "Style", ca: "Estil", pronunciation: "es-TEEL" },
      { en: "Mosaic", ca: "Mosaic", pronunciation: "moh-zah-EEK" },
      { en: "Column", ca: "Columna", pronunciation: "coh-LOOM-nah" },
      { en: "Heritage", ca: "Patrimoni", pronunciation: "pah-tree-MOH-nee" },
      { en: "Modernisme", ca: "Modernisme", pronunciation: "moh-der-NEES-meh" },
      { en: "Stained glass", ca: "Vitrall", pronunciation: "vee-TRAHL" }
    ],
    stageData: {
      storyMode: {
      story: "Antoni Gaudí era un [BLANK] genial. La seva obra més famosa és la [BLANK] de la Sagrada Família. Les [BLANK] de la façana exterior són plenes de simbolisme. Al Parc Güell, els [BLANK] de colors creen un efecte màgic. L'[BLANK] català, el Modernisme, va influir tota Europa.",
      translation: "Antoni Gaudí was a brilliant architect. His most famous work is the cathedral of the Sagrada Família. The towers of the exterior facade are full of symbolism. At Park Güell, the coloured mosaics create a magical effect. The Catalan style, Modernisme, influenced all of Europe.",
      blanks: [
        { word: "arquitecte", options: ["arquitecte", "músic", "pintor", "escriptor"] },
        { word: "catedral", options: ["catedral", "torre", "columna", "mosaic"] },
        { word: "torres", options: ["torres", "façanes", "columnes", "vitralls"] },
        { word: "mosaics", options: ["mosaics", "vitralls", "columnes", "estils"] },
        { word: "estil", options: ["estil", "mosaic", "patrimoni", "llegat"] }
      ]
    },
    fillInTheBlank: [
        { sentence: "La Sagrada Família és una ___ impressionant", blank: "catedral", options: ["torre", "façana", "catedral", "columna"], correctIndex: 2, translation: "The Sagrada Família is an impressive cathedral", explanation: "'Catedral' = cathedral. The Sagrada Família is Gaudí's most famous work, still under construction." },
        { sentence: "El ___ de la Casa Batlló és únic al món", blank: "mosaic", options: ["patrimoni", "vitrall", "mosaic", "estil"], correctIndex: 2, translation: "The mosaic of Casa Batlló is unique in the world", explanation: "'Mosaic' = mosaic. Gaudí used colourful mosaics extensively in his works." },
        { sentence: "El Modernisme és un ___ arquitectònic català", blank: "estil", options: ["arquitecte", "columna", "torre", "estil"], correctIndex: 3, translation: "Modernisme is a Catalan architectural style", explanation: "'Modernisme' = Catalan Art Nouveau. Distinct from Spanish modernism — very specifically Catalan." },
        { sentence: "La ___ de la Pedrera és ondulada", blank: "façana", options: ["torre", "façana", "catedral", "columna"], correctIndex: 1, translation: "The facade of La Pedrera is wavy", explanation: "'Façana' = facade. La Pedrera's wavy stone facade is one of Gaudí's most recognisable works." }
      ],
      miniConversation: [
        { speaker: "Tourist", text: "Quin és el teu edifici de Gaudí preferit?", isUserTurn: false, translation: "Which is your favourite Gaudí building?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["La Sagrada Família, els vitralls són extraordinaris", "No m'agrada Gaudí", "No sé qui és"], correctIndex: 0 },
        { speaker: "Tourist", text: "A mi m'encanta el Parc Güell. El mosaic és increïble!", isUserTurn: false, translation: "I love Park Güell. The mosaic is incredible!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, és un patrimoni de la humanitat de la UNESCO", "És massa turístic", "No hi he anat"], correctIndex: 0 },
        { speaker: "Tourist", text: "Saps quan acabaran la Sagrada Família?", isUserTurn: false, translation: "Do you know when they'll finish the Sagrada Família?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Diuen que cap al 2026, però fa 140 anys que la construeixen", "No ho sé", "Mai"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 130: Wine & Gastronomy ────────────────────────
  {
    id: 130,
    title: "Wine & Gastronomy",
    module: "Culture",
    stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation', 'quickFire'],
    words: [
      { en: "Wine region", ca: "Denominació d'origen", pronunciation: "deh-noh-mee-nah-SYOH doh-REE-zhen" },
      { en: "Winery", ca: "Celler", pronunciation: "seh-LYEH" },
      { en: "Vintage", ca: "Anyada", pronunciation: "an-YAH-dah" },
      { en: "Tasting", ca: "Tast", pronunciation: "TAST" },
      { en: "Pairing", ca: "Maridatge", pronunciation: "mah-ree-DAH-jeh" },
      { en: "Appetiser", ca: "Aperitiu", pronunciation: "ah-peh-ree-TEE-oo" },
      { en: "Starter", ca: "Primer plat", pronunciation: "pree-MEH PLAT" },
      { en: "Main course", ca: "Segon plat", pronunciation: "seh-GON PLAT" },
      { en: "Dessert wine", ca: "Vi de postres", pronunciation: "VEE deh POS-trehs" },
      { en: "Sommelier", ca: "Sommelier", pronunciation: "soh-meh-LYEH" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "El Penedès és una denominació d'origen molt famosa", english: "Penedès is a very famous wine region", pronunciation: "el peh-neh-DES es OO-nah deh-noh-mee-nah-SYOH doh-REE-zhen molt fah-MOH-sah" },
        { catalan: "Voldria fer un tast de vins del Priorat", english: "I would like to do a Priorat wine tasting", pronunciation: "bol-DREE-ah fer oon TAST deh veens del pree-oh-RAT" },
        { catalan: "El sommelier ens recomana el maridatge amb formatge", english: "The sommelier recommends the pairing with cheese", pronunciation: "el soh-meh-LYEH ens reh-coh-MAH-nah el mah-ree-DAH-jeh amb for-MAH-jeh" },
        { catalan: "L'anyada del 2019 va ser excel·lent", english: "The 2019 vintage was excellent", pronunciation: "lan-YAH-dah del doh-meel noh-VANTS des-ah-NOO vah ser ec-seh-LYENT" }
      ],
      miniConversation: [
        { speaker: "Sommelier", text: "Benvinguts al celler! Avui farem un tast de cinc vins.", isUserTurn: false, translation: "Welcome to the winery! Today we'll do a tasting of five wines." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Meravellós! Quin és el vi de la millor anyada?", "No bec alcohol", "Ja conec tots els vins"], correctIndex: 0 },
        { speaker: "Sommelier", text: "El 2018 va ser una anyada excepcional al Penedès.", isUserTurn: false, translation: "2018 was an exceptional vintage in Penedès." },
        { speaker: "You", text: "", isUserTurn: true, options: ["I quin maridatge recomana per al segon plat?", "No m'agrada el Penedès", "Prefereixo la cervesa"], correctIndex: 0 },
        { speaker: "Sommelier", text: "Per al segon plat, un negre del Priorat és perfecte.", isUserTurn: false, translation: "For the main course, a Priorat red is perfect." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Fantàstic, el Priorat és el meu preferit", "No m'agrada el vi negre", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 131: Catalan History (Ancient-Medieval) ───────
  {
    id: 131,
    title: "Catalan History: Origins",
    module: "Culture",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'storyMode', 'sentenceOrdering', 'quickFire'],
    words: [
      { en: "County", ca: "Comtat", pronunciation: "com-TAT" },
      { en: "Count", ca: "Comte", pronunciation: "COM-teh" },
      { en: "Kingdom", ca: "Regne", pronunciation: "REHG-neh" },
      { en: "Crown", ca: "Corona", pronunciation: "coh-ROH-nah" },
      { en: "Medieval", ca: "Medieval", pronunciation: "meh-dyeh-VAL" },
      { en: "Dynasty", ca: "Dinastia", pronunciation: "dee-nas-TEE-ah" },
      { en: "Constitution", ca: "Constitució", pronunciation: "cons-tee-too-SYOH" },
      { en: "Independence", ca: "Independència", pronunciation: "een-deh-pen-DEN-syah" },
      { en: "Territory", ca: "Territori", pronunciation: "teh-rree-TOH-ree" },
      { en: "Heritage", ca: "Llegat", pronunciation: "lyeh-GAT" }
    ],
    stageData: {
      storyMode: {
      story: "Al segle IX, Guifré el Pilós va unir els [BLANK] catalans. Barcelona va ser la capital del seu [BLANK]. Més tard, la [BLANK] d'Aragó va unir Catalunya amb Aragó. Junts, van crear un gran [BLANK] mediterrani. Aquest és el [BLANK] de la Catalunya moderna.",
      translation: "In the 9th century, Wilfred the Hairy united the Catalan counties. Barcelona was the capital of his county. Later, the Crown of Aragon united Catalonia with Aragon. Together, they created a great Mediterranean kingdom. This is the legacy of modern Catalonia.",
      blanks: [
        { word: "comtats", options: ["comtats", "regnes", "territoris", "dinasties"] },
        { word: "comtat", options: ["comtat", "regne", "corona", "llegat"] },
        { word: "Corona", options: ["Corona", "Dinastia", "Constitució", "Independència"] },
        { word: "regne", options: ["regne", "comtat", "territori", "llegat"] },
        { word: "llegat", options: ["llegat", "territori", "medieval", "corona"] }
      ]
    },
    fillInTheBlank: [
        { sentence: "Barcelona era la capital del ___ de Barcelona", blank: "comtat", options: ["regne", "comtat", "territori", "llegat"], correctIndex: 1, translation: "Barcelona was the capital of the County of Barcelona", explanation: "'Comtat' = county. The County of Barcelona was the origin of Catalonia in the 9th century." },
        { sentence: "La ___ d'Aragó va unir Catalunya i Aragó", blank: "Corona", options: ["Dinastia", "Constitució", "Corona", "Independència"], correctIndex: 2, translation: "The Crown of Aragon united Catalonia and Aragon", explanation: "'Corona d'Aragó' = Crown of Aragon. A medieval federation of territories across the Mediterranean." },
        { sentence: "Les Corts Catalanes van crear la primera ___ d'Europa", blank: "Constitució", options: ["Dinastia", "Constitució", "Corona", "Comtat"], correctIndex: 1, translation: "The Catalan Courts created the first Constitution in Europe", explanation: "Fascinating fact — Catalonia had one of the world's earliest constitutional systems." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'L'any' + number for years. 'L'any 988' = in the year 988.", words: ["Guifré", "el", "Pilós", "va", "unir", "els", "comtats", "catalans"], correctOrder: "Guifré el Pilós va unir els comtats catalans", translation: "Wilfred the Hairy united the Catalan counties" },
        { grammarNote: "💡 'Va ser' = was (past tense, third person singular). Key for talking about history.", words: ["La", "Corona", "d'Aragó", "va", "ser", "molt", "poderosa"], correctOrder: "La Corona d'Aragó va ser molt poderosa", translation: "The Crown of Aragon was very powerful" },
        { grammarNote: "💡 'Durant' = during. 'Durant l'Edat Mitjana' = during the Middle Ages.", words: ["Durant", "l'Edat", "Mitjana", "Catalunya", "va", "créixer", "molt"], correctOrder: "Durant l'Edat Mitjana Catalunya va créixer molt", translation: "During the Middle Ages Catalonia grew a lot" }
      ]
    }
  },

  // ─── LESSON 132: Modern Catalan History ───────────────────
  {
    id: 132,
    title: "Modern Catalan History",
    module: "Culture",
    stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation', 'quickFire'],
    words: [
      { en: "Civil war", ca: "Guerra civil", pronunciation: "GHER-rah see-VEL" },
      { en: "Dictatorship", ca: "Dictadura", pronunciation: "dic-tah-DOO-rah" },
      { en: "Democracy", ca: "Democràcia", pronunciation: "deh-moh-CRAH-syah" },
      { en: "Autonomy", ca: "Autonomia", pronunciation: "ow-toh-noh-MEE-ah" },
      { en: "Statute", ca: "Estatut", pronunciation: "es-tah-TOOT" },
      { en: "Generalitat", ca: "Generalitat", pronunciation: "zheh-neh-rah-lee-TAT" },
      { en: "Transition", ca: "Transició", pronunciation: "tran-see-SYOH" },
      { en: "Repression", ca: "Repressió", pronunciation: "reh-preh-SYOH" },
      { en: "Resistance", ca: "Resistència", pronunciation: "reh-sees-TEN-syah" },
      { en: "Restoration", ca: "Restauració", pronunciation: "res-tow-rah-SYOH" }
    ],
    stageData: {
      listenAndType: [
        { catalan: "La guerra civil va acabar l'any 1939", english: "The civil war ended in 1939", pronunciation: "lah GHER-rah see-VEL vah ah-cah-BAR lah-NY meel noh-SENS TREN-tah noh" },
        { catalan: "Durant la dictadura el català estava prohibit", english: "During the dictatorship Catalan was forbidden", pronunciation: "doo-RANT lah dic-tah-DOO-rah el cah-tah-LAH es-TAH-vah proh-ee-BEET" },
        { catalan: "La Generalitat va ser restaurada l'any 1977", english: "The Generalitat was restored in 1977", pronunciation: "lah zheh-neh-rah-lee-TAT vah ser res-tow-RAH-dah lah-NY meel noh-SENS seh-TAN-tah SEH-teh" },
        { catalan: "L'Estatut d'Autonomia reconeix la llengua catalana", english: "The Statute of Autonomy recognises the Catalan language", pronunciation: "les-tah-TOOT dow-toh-noh-MEE-ah reh-coh-NEHCH lah LYEN-gwah cah-tah-LAH-nah" }
      ],
      miniConversation: [
        { speaker: "Local", text: "Saps per què el català és tan important per a nosaltres?", isUserTurn: false, translation: "Do you know why Catalan is so important to us?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, estava prohibit durant la dictadura de Franco", "No, no ho sé", "Per la turisme?"], correctIndex: 0 },
        { speaker: "Local", text: "Exacte. Per això lluitem per mantenir la llengua viva.", isUserTurn: false, translation: "Exactly. That's why we fight to keep the language alive." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Per això és tan valuós que jo aprengui català", "No entenc la política", "M'és igual"], correctIndex: 0 },
        { speaker: "Local", text: "M'alegra molt sentir-ho! Parla'ns sempre en català.", isUserTurn: false, translation: "I'm very glad to hear it! Always speak to us in Catalan." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Ho intentaré cada dia, gràcies per la paciència!", "Ho trobo difícil", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 133: Geography of Catalonia ───────────────────
  {
    id: 133,
    title: "Geography of Catalonia",
    module: "Culture",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'errorCorrection', 'quickFire'],
    words: [
      { en: "Pyrenees", ca: "Pirineus", pronunciation: "pee-ree-NEH-oos" },
      { en: "Coast", ca: "Costa", pronunciation: "COS-tah" },
      { en: "River", ca: "Riu", pronunciation: "REE-oo" },
      { en: "Valley", ca: "Vall", pronunciation: "BAHL" },
      { en: "Plain", ca: "Plana", pronunciation: "PLAH-nah" },
      { en: "Region", ca: "Comarca", pronunciation: "coh-MAR-cah" },
      { en: "Province", ca: "Província", pronunciation: "proh-VIN-syah" },
      { en: "Capital", ca: "Capital", pronunciation: "cah-pee-TAL" },
      { en: "Ebro", ca: "Ebre", pronunciation: "EH-breh" },
      { en: "Mediterranean", ca: "Mediterrani", pronunciation: "meh-dee-teh-RAH-nyee" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "Els ___ separen Catalunya de França", blank: "Pirineus", options: ["Pirineus", "Rius", "Valls", "Costes"], correctIndex: 0, translation: "The Pyrenees separate Catalonia from France", explanation: "'Pirineus' = Pyrenees. This mountain range forms the natural border between Catalonia and France." },
        { sentence: "L'___ és el riu més important de Cataluny", blank: "Ebre", options: ["Vall", "Ebre", "Comarca", "Costa"], correctIndex: 1, translation: "The Ebro is the most important river in Catalonia", explanation: "'Ebre' = Ebro. The Ebro delta is one of Catalonia's most important natural areas." },
        { sentence: "La Costa Brava és una ___ molt bella", blank: "costa", options: ["plana", "comarca", "capital", "costa"], correctIndex: 3, translation: "The Costa Brava is a very beautiful coast", explanation: "'Costa Brava' = Wild Coast. Famous tourist destination north of Barcelona." },
        { sentence: "Cataluny té quatre ___ principals", blank: "províncies", options: ["capitals", "rius", "províncies", "valls"], correctIndex: 2, translation: "Catalonia has four main provinces", explanation: "The four provinces are: Barcelona, Girona, Lleida, and Tarragona." }
      ],
      errorCorrection: [
        { sentence: "El Pirineo és molt alt i bonic", errorWordIndex: 1, options: ["Pirineo", "Pirineu", "Pirineou", "Pirinèu"], correctIndex: 1, translation: "The Pyrenees is very high and beautiful", explanation: "'Pirineu' (singular) or 'Pirineus' (plural) in Catalan. 'Pirineo' is Spanish." },
        { sentence: "Visc a prop del Mar Mediterráneo", errorWordIndex: 5, options: ["Mediterráneo", "Mediterrani", "Meditarrani", "Mediterraneu"], correctIndex: 1, translation: "I live near the Mediterranean Sea", explanation: "'Mediterrani' is Catalan. 'Mediterráneo' is Spanish." }
      ]
    }
  },

  // ─── LESSON 134: Andorra ──────────────────────────────────
  {
    id: 134,
    title: "Andorra",
    module: "Culture",
    stages: ['intro', 'flashcards', 'storyMode', 'listenAndType', 'miniConversation', 'quickFire'],
    words: [
      { en: "Co-prince", ca: "Copríncep", pronunciation: "coh-PREEN-sep" },
      { en: "Parish", ca: "Parròquia", pronunciation: "pah-ROH-kee-ah" },
      { en: "Duty-free", ca: "Lliure d'impostos", pronunciation: "LYEE-oo-reh deem-POS-tos" },
      { en: "Ski resort", ca: "Estació d'esquí", pronunciation: "es-tah-SYOH des-KEE" },
      { en: "Grandvalira", ca: "Grandvalira", pronunciation: "gran-vah-LEE-rah" },
      { en: "Escaldes", ca: "Escaldes", pronunciation: "es-CAL-dehs" },
      { en: "Andorra la Vella", ca: "Andorra la Vella", pronunciation: "an-DOH-rah lah VEH-lyah" },
      { en: "Principality", ca: "Principat", pronunciation: "preen-see-PAT" },
      { en: "Tax haven", ca: "Paradís fiscal", pronunciation: "pah-rah-DEES fees-CAL" },
      { en: "Thermal baths", ca: "Caldea", pronunciation: "cal-DEH-ah" }
    ],
    stageData: {
      storyMode: {
      story: "Andorra és un petit [BLANK] als Pirineus. Té dos [BLANK]: el bisbe d'Urgell i el president de França. El país es divideix en set [BLANK]. Molts turistes venen perquè és [BLANK] d'impostos. La gran estació d'esquí de [BLANK] és molt popular a l'hivern.",
      translation: "Andorra is a small principality in the Pyrenees. It has two co-princes: the Bishop of Urgell and the President of France. The country is divided into seven parishes. Many tourists come because it is tax-free. The great ski resort of Grandvalira is very popular in winter.",
      blanks: [
        { word: "principat", options: ["principat", "país", "comtat", "regne"] },
        { word: "co-prínceps", options: ["co-prínceps", "reis", "presidents", "bisbes"] },
        { word: "parròquies", options: ["parròquies", "ciutats", "regions", "valls"] },
        { word: "lliure", options: ["lliure", "cara", "petita", "gran"] },
        { word: "Grandvalira", options: ["Grandvalira", "Andorra la Vella", "Escaldes", "Sant Julià"] }
      ]
    },
    listenAndType: [
        { catalan: "Andorra és un principat entre França i Espanya", english: "Andorra is a principality between France and Spain", pronunciation: "an-DOH-rah es oon preen-see-PAT EN-treh FRAN-sah ee es-PAH-nyah" },
        { catalan: "El català és la llengua oficial d'Andorra", english: "Catalan is the official language of Andorra", pronunciation: "el cah-tah-LAH es lah LYEN-gwah oh-fee-SYAL dan-DOH-rah" },
        { catalan: "Grandvalira és una de les estacions d'esquí més grans d'Europa", english: "Grandvalira is one of the largest ski resorts in Europe", pronunciation: "gran-vah-LEE-rah es OO-nah de lehs es-tah-SYONS des-KEE mes GRANS deh-oo-ROH-pah" },
        { catalan: "Molts turistes venen a Andorra per les compres lliures d'impostos", english: "Many tourists come to Andorra for duty-free shopping", pronunciation: "molts too-REES-tehs VEH-nen ah an-DOH-rah per lehs COM-brehs LYEE-oo-rehs deem-POS-tos" }
      ],
      miniConversation: [
        { speaker: "Tourist", text: "D'on ets tu? Sembla que coneixes molt bé Andorra.", isUserTurn: false, translation: "Where are you from? It seems you know Andorra very well." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Visc a Escaldes, és la parròquia més gran", "Soc de Barcelona", "Soc turista com tu"], correctIndex: 0 },
        { speaker: "Tourist", text: "I quin és el millor lloc per esquiar?", isUserTurn: false, translation: "And what is the best place to ski?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Grandvalira és l'estació més gran i millor equipada", "No m'agrada esquiar", "No ho sé"], correctIndex: 0 },
        { speaker: "Tourist", text: "I les compres? Realment és tan barat?", isUserTurn: false, translation: "And shopping? Is it really so cheap?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, lliure d'impostos, sobretot per tabac i alcohol", "No, és igual que a tot arreu", "Depèn"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 135: Nature & Environment ─────────────────────
  {
    id: 135,
    title: "Nature & Environment",
    module: "Society",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'quickFire'],
    words: [
      { en: "National park", ca: "Parc nacional", pronunciation: "PARC nah-syoh-NAL" },
      { en: "Wildlife", ca: "Fauna silvestre", pronunciation: "FAW-nah sil-VES-treh" },
      { en: "Hiking", ca: "Senderisme", pronunciation: "sen-deh-REES-meh" },
      { en: "Trail", ca: "Sender", pronunciation: "SEN-der" },
      { en: "Waterfall", ca: "Cascada", pronunciation: "cas-CAH-dah" },
      { en: "Forest", ca: "Bosc", pronunciation: "BOSC" },
      { en: "Peak", ca: "Cim", pronunciation: "SEEM" },
      { en: "Lake", ca: "Llac", pronunciation: "LYAC" },
      { en: "Protected", ca: "Protegit", pronunciation: "proh-teh-ZHIT" },
      { en: "Endangered", ca: "En perill d'extinció", pronunciation: "en peh-REEL dec-steen-SYOH" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El ___ del Delta de l'Ebre és únic a Catalunya", blank: "parc nacional", options: ["sender", "bosc", "parc nacional", "llac"], correctIndex: 2, translation: "The National Park of the Ebro Delta is unique in Catalonia", explanation: "'Parc nacional' = national park. The Ebro Delta is home to hundreds of bird species." },
        { sentence: "M'encanta fer ___ pels Pirineus", blank: "senderisme", options: ["cascades", "senderisme", "boscos", "llacs"], correctIndex: 1, translation: "I love hiking through the Pyrenees", explanation: "'Senderisme' = hiking. 'Fer senderisme' = to go hiking." },
        { sentence: "El ___ de Montserrat és molt sagrat", blank: "bosc", options: ["cim", "sender", "llac", "bosc"], correctIndex: 3, translation: "The forest of Montserrat is very sacred", explanation: "'Bosc' = forest/wood. Montserrat is both a natural park and a sacred mountain." },
        { sentence: "Al ___ de Banyoles es pot fer rem", blank: "llac", options: ["cim", "sender", "llac", "cascada"], correctIndex: 2, translation: "At the lake of Banyoles you can row", explanation: "'Llac de Banyoles' = Lake Banyoles. Used for rowing at the 1992 Olympics." }
      ],
      sentenceOrdering: [
        { grammarNote: "💡 'Es pot' + infinitive = one can / you can. Impersonal construction used a lot in signage and recommendations.", words: ["Al", "bosc", "es", "poden", "veure", "molts", "animals"], correctOrder: "Al bosc es poden veure molts animals", translation: "In the forest you can see many animals" },
        { grammarNote: "💡 'Cal protegir' = it is necessary to protect. 'Cal' + infinitive = must/need to.", words: ["Cal", "protegir", "la", "fauna", "silvestre", "catalana"], correctOrder: "Cal protegir la fauna silvestre catalana", translation: "We must protect Catalan wildlife" }
      ]
    }
  },

  // ─── LESSON 136: Catalan Media & News ─────────────────────
  {
    id: 136,
    title: "Media & Current Affairs",
    module: "Society",
    stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire'],
    words: [
      { en: "Newspaper", ca: "Diari", pronunciation: "dee-AH-ree" },
      { en: "Journalist", ca: "Periodista", pronunciation: "peh-ryoh-DEES-tah" },
      { en: "Headline", ca: "Titular", pronunciation: "tee-too-LAR" },
      { en: "Breaking news", ca: "Notícia d'última hora", pronunciation: "noh-TEE-syah DOL-tee-mah OH-rah" },
      { en: "Report", ca: "Reportatge", pronunciation: "reh-por-TAH-jeh" },
      { en: "Interview", ca: "Entrevista", pronunciation: "en-treh-VEES-tah" },
      { en: "Press conference", ca: "Roda de premsa", pronunciation: "ROH-dah deh PREM-sah" },
      { en: "Social media", ca: "Xarxes socials", pronunciation: "SHAR-shehs soh-SYALS" },
      { en: "Fake news", ca: "Notícia falsa", pronunciation: "noh-TEE-syah FAL-sah" },
      { en: "Editorial", ca: "Editorial", pronunciation: "eh-dee-toh-RYAHL" }
    ],
    stageData: {
      fillInTheBlank: [
        { sentence: "El ___ d'avui parla de les eleccions", blank: "diari", options: ["reportatge", "diari", "titular", "editorial"], correctIndex: 1, translation: "Today's newspaper talks about the elections", explanation: "'Diari' = newspaper. Major Catalan newspapers: Ara, El Punt Avui, La Vanguardia (Catalan edition)." },
        { sentence: "La ___ de premsa és a les dotze del migdia", blank: "roda", options: ["notícia", "entrevista", "roda", "xarxa"], correctIndex: 2, translation: "The press conference is at twelve noon", explanation: "'Roda de premsa' = press conference. Literally 'press round'." },
        { sentence: "Les ___ socials difonen les notícies ràpidament", blank: "xarxes", options: ["entrevistes", "xarxes", "robles", "titulars"], correctIndex: 1, translation: "Social media spreads news quickly", explanation: "'Xarxes socials' = social media/social networks. 'Xarxa' = network." }
      ],
      miniConversation: [
        { speaker: "Colleague", text: "Has vist les últimes notícies al diari?", isUserTurn: false, translation: "Have you seen the latest news in the newspaper?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, el titular d'avui és molt important", "No llegeixo el diari", "Quin diari?"], correctIndex: 0 },
        { speaker: "Colleague", text: "I tu, a quines xarxes socials segueixes les notícies?", isUserTurn: false, translation: "And you, on which social media do you follow the news?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Prefereixo llegir el diari, hi ha menys notícies falses", "No uso les xarxes", "A totes"], correctIndex: 0 },
        { speaker: "Colleague", text: "Tens raó, cal anar amb compte amb les notícies falses.", isUserTurn: false, translation: "You're right, we need to be careful with fake news." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sempre comprovo la font abans de compartir res", "Comparteixo tot el que veig", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 137: Catalan Cuisine ──────────────────────────
  {
    id: 137,
    title: "Catalan Cuisine",
    module: "Culture",
    stages: ['intro', 'flashcards', 'storyMode', 'listenAndType', 'errorCorrection', 'quickFire'],
    words: [
      { en: "Pa amb tomàquet", ca: "Pa amb tomàquet", pronunciation: "PAH amb toh-MAH-keht" },
      { en: "Escalivada", ca: "Escalivada", pronunciation: "es-cah-lee-VAH-dah" },
      { en: "Crema catalana", ca: "Crema catalana", pronunciation: "CREH-mah cah-tah-LAH-nah" },
      { en: "Calçotada", ca: "Calçotada", pronunciation: "cal-soh-TAH-dah" },
      { en: "Fideuà", ca: "Fideuà", pronunciation: "fee-deh-WAH" },
      { en: "Botifarra", ca: "Botifarra", pronunciation: "boh-tee-FAH-rah" },
      { en: "Romesco", ca: "Romesco", pronunciation: "roh-MES-coh" },
      { en: "Cava", ca: "Cava", pronunciation: "CAH-vah" },
      { en: "Bread with oil", ca: "Pa amb oli", pronunciation: "PAH amb OH-lee" },
      { en: "Suquet", ca: "Suquet", pronunciation: "soo-KEHT" }
    ],
    stageData: {
      storyMode: {
      story: "El plat més senzill de Catalunya és el [BLANK], pa amb tomàquet fregat i un bon raig d'oli. Per a les festes, la [BLANK] reuneix amics per menjar calçots amb salsa [BLANK]. De segon, la [BLANK] amb mongetes és un clàssic català. Per acabar, la [BLANK] amb sucre cremat és el dolç tradicional.",
      translation: "The simplest dish in Catalonia is pa amb tomàquet, bread rubbed with tomato and a good drizzle of oil. For celebrations, the calçotada brings friends together to eat calçots with romesco sauce. For the main course, botifarra with beans is a Catalan classic. To finish, crema catalana with burnt sugar is the traditional sweet.",
      blanks: [
        { word: "pa amb tomàquet", options: ["pa amb tomàquet", "fideuà", "escalivada", "romesco"] },
        { word: "calçotada", options: ["calçotada", "fideuà", "crema catalana", "escalivada"] },
        { word: "romesco", options: ["romesco", "escalivada", "cava", "botifarra"] },
        { word: "botifarra", options: ["botifarra", "fideuà", "crema catalana", "romesco"] },
        { word: "crema catalana", options: ["crema catalana", "cava", "pa amb tomàquet", "escalivada"] }
      ]
    },
    listenAndType: [
        { catalan: "El pa amb tomàquet és el plat més típic de Catalunya", english: "Pa amb tomàquet is the most typical dish of Catalonia", pronunciation: "el PAH amb toh-MAH-keht es el PLAT mes tee-PEEK deh cah-tah-LOO-nyah" },
        { catalan: "La crema catalana és anterior a la crème brûlée", english: "Crema catalana predates crème brûlée", pronunciation: "lah CREH-mah cah-tah-LAH-nah es an-teh-RYOH ah lah CREM broo-LAY" },
        { catalan: "La calçotada és una tradició de l'hivern a Catalunya", english: "The calçotada is a winter tradition in Catalonia", pronunciation: "lah cal-soh-TAH-dah es OO-nah trah-dee-SYOH de lee-VERN ah cah-tah-LOO-nyah" },
        { catalan: "El cava és el vi escumós català per excel·lència", english: "Cava is the quintessential Catalan sparkling wine", pronunciation: "el CAH-vah es el VEE es-coo-MOS cah-tah-LAH per ec-seh-LYEN-syah" }
      ],
      errorCorrection: [
        { sentence: "Vull menjar paella, és molt català", errorWordIndex: 2, options: ["paella", "fideuà", "pella", "paela"], correctIndex: 1, translation: "I want to eat fideuà, it's very Catalan", explanation: "'Fideuà' is the Catalan equivalent — noodles instead of rice. Paella is Valencian, not specifically Catalan!" },
        { sentence: "El cava és igual que el champán", errorWordIndex: 4, options: ["champán", "cava", "champagne", "vino"], correctIndex: 1, translation: "Cava is similar to champagne but is Catalan", explanation: "Cava is made in Catalonia (mainly Penedès) and is a distinct product from champagne." }
      ]
    }
  },

  // ─── LESSON 138: Festivals Deep Dive ──────────────────────
  {
    id: 138,
    title: "Catalan Festivals",
    module: "Culture",
    stages: ['intro', 'flashcards', 'storyMode', 'fillInTheBlank', 'miniConversation', 'quickFire'],
    words: [
      { en: "Human tower", ca: "Castell", pronunciation: "cas-TELL" },
      { en: "Fire run", ca: "Correfoc", pronunciation: "coh-rreh-FOC" },
      { en: "Sardana", ca: "Sardana", pronunciation: "sar-DAH-nah" },
      { en: "Giants", ca: "Gegants", pronunciation: "zheh-GANTS" },
      { en: "Fireworks", ca: "Focs artificials", pronunciation: "FOCS ar-tee-fee-SYALS" },
      { en: "Eve", ca: "Revetlla", pronunciation: "reh-VET-lyah" },
      { en: "Bonfire", ca: "Foguera", pronunciation: "foh-GHEH-rah" },
      { en: "Procession", ca: "Cercavila", pronunciation: "ser-cah-VEE-lah" },
      { en: "Local festival", ca: "Festa major", pronunciation: "FES-tah mah-ZHOH" },
      { en: "Patron saint", ca: "Sant patró", pronunciation: "SANT pah-TROH" }
    ],
    stageData: {
      storyMode: {
      story: "Les festes catalanes són úniques al món. Als [BLANK] humans, els castellers s'enfilen fins a deu pisos d'alçada. Al [BLANK], la gent corre pels carrers amb diables i foc. La [BLANK] és la dansa nacional on tothom agafa les mans en cercle. La nit de Sant Joan, la [BLANK] creua tota la ciutat. Totes les festes acaben amb [BLANK] artificials al cel.",
      translation: "Catalan festivals are unique in the world. At the human castles, the castellers climb up to ten floors high. At the correfoc, people run through the streets with devils and fire. The sardana is the national dance where everyone holds hands in a circle. On Sant Joan night, the fire run crosses the whole city. All festivals end with fireworks in the sky.",
      blanks: [
        { word: "castells", options: ["castells", "gegants", "sardanes", "correfocs"] },
        { word: "correfoc", options: ["correfoc", "castell", "sardana", "revetlla"] },
        { word: "sardana", options: ["sardana", "correfoc", "revetlla", "foguera"] },
        { word: "revetlla", options: ["revetlla", "sardana", "foguera", "correfoc"] },
        { word: "focs", options: ["focs", "diables", "gegants", "bastoners"] }
      ]
    },
    fillInTheBlank: [
        { sentence: "El ___ és un espectacle humà únic al món", blank: "castell", options: ["correfoc", "castell", "gegant", "sardana"], correctIndex: 1, translation: "The human tower is a unique human spectacle in the world", explanation: "'Castell' = human tower. Castellers are teams who build towers of people, up to 10 storeys high. UNESCO Heritage." },
        { sentence: "La Revetlla de Sant Joan és la nit de les ___", blank: "fogueres", options: ["gegants", "sardanes", "fogueres", "cercaviles"], correctIndex: 2, translation: "The Eve of Sant Joan is the night of the bonfires", explanation: "'Revetlla de Sant Joan' = Midsummer's Eve. The night of June 23rd, celebrated with bonfires and fireworks." },
        { sentence: "El ___ és un ball tradicional català que es balla en cercle", blank: "sardana", options: ["correfoc", "castell", "sardana", "gegant"], correctIndex: 2, translation: "The sardana is a traditional Catalan dance danced in a circle", explanation: "'Sardana' = Catalonia's national dance. Danced in circles, often in squares on Sundays." }
      ],
      miniConversation: [
        { speaker: "Neighbour", text: "Vens a la festa major del barri dissabte?", isUserTurn: false, translation: "Are you coming to the neighbourhood festival on Saturday?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí! Hi haurà castell i correfoc?", "No puc anar", "Quina festa?"], correctIndex: 0 },
        { speaker: "Neighbour", text: "Sí! I els gegants surten a les sis de la tarda.", isUserTurn: false, translation: "Yes! And the giants come out at six in the afternoon." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Meravellós! M'encanta veure els gegants amb els nens", "No m'agraden els gegants", "A quina hora?"], correctIndex: 0 },
        { speaker: "Neighbour", text: "La cercavila comença a la plaça. Ens veiem allà?", isUserTurn: false, translation: "The procession starts at the square. Shall we meet there?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Perfecte, ens veiem a la plaça a les cinc i mitja", "No sé on és la plaça", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 139: Daily Expressions & Slang ────────────────
  {
    id: 139,
    title: "Everyday Expressions",
    module: "Language",
    stages: ['intro', 'flashcards', 'storyMode', 'listenAndType', 'miniConversation', 'quickFire'],
    words: [
      { en: "Of course!", ca: "És clar!", pronunciation: "es CLAR" },
      { en: "No problem", ca: "No passa res", pronunciation: "noh PAH-sah RESS" },
      { en: "Come on!", ca: "Au va!", pronunciation: "ow VAH" },
      { en: "Really?", ca: "De debò?", pronunciation: "deh deh-BOH" },
      { en: "What a shame!", ca: "Quina llàstima!", pronunciation: "KEE-nah LYAS-tee-mah" },
      { en: "Well done!", ca: "Molt bé!", pronunciation: "molt BEH" },
      { en: "Careful!", ca: "Compte!", pronunciation: "COM-teh" },
      { en: "It doesn't matter", ca: "No importa", pronunciation: "noh eem-POR-tah" },
      { en: "How strange!", ca: "Quin curiós!", pronunciation: "keen coo-ree-OS" },
      { en: "Let's go!", ca: "Anem!", pronunciation: "ah-NEM" }
    ],
    stageData: {
      storyMode: {
      story: "En Joan arriba tard a casa. La seva mare diu: '[BLANK]!' Joan respon tranquil: 'No [BLANK], tenia el bus tard'. Ella pregunta: 'De [BLANK]? El bus?' Ell confirma: 'És [BLANK], s'ha espatllat'. Ella somriu i diu: 'Quina [BLANK]! [BLANK], sopem!'",
      translation: "Joan arrives home late. His mother says: 'Watch out!' Joan responds calmly: 'No worries, the bus was late.' She asks: 'Really? The bus?' He confirms: 'Of course, it broke down.' She smiles and says: 'What a shame! Come on, let's have dinner!'",
      blanks: [
        { word: "Compte", options: ["Compte", "Ostres", "Au va", "Ep"] },
        { word: "passa res", options: ["passa res", "problema", "entenc", "vull"] },
        { word: "debò", options: ["debò", "ver", "cert", "iguals"] },
        { word: "clar", options: ["clar", "cert", "bo", "gran"] },
        { word: "llàstima", options: ["llàstima", "vergonya", "por", "sort"] },
        { word: "Vinga", options: ["Vinga", "Adéu", "Ostres", "Ep"] }
      ]
    },
    listenAndType: [
        { catalan: "No passa res, tranquil·la!", english: "No problem, don't worry!", pronunciation: "noh PAH-sah RESS, tran-KWEEL-lah" },
        { catalan: "De debò? No m'ho puc creure!", english: "Really? I can't believe it!", pronunciation: "deh deh-BOH noh moh POOC CREH-oo-reh" },
        { catalan: "Quina llàstima que no puguis venir!", english: "What a shame you can't come!", pronunciation: "KEE-nah LYAS-tee-mah keh no POO-zhees veh-NEER" },
        { catalan: "Compte amb el graó!", english: "Watch out for the step!", pronunciation: "COM-teh amb el grah-OH" }
      ],
      miniConversation: [
        { speaker: "Friend", text: "Ostres, he perdut les claus!", isUserTurn: false, translation: "Oh no, I've lost my keys!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["De debò? Quina llàstima! Les necessites ara?", "No importa", "Au va!"], correctIndex: 0 },
        { speaker: "Friend", text: "Sí! Tinc la reunió en deu minuts!", isUserTurn: false, translation: "Yes! I have the meeting in ten minutes!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Anem a buscar-les junts, recordes on les has deixades?", "No passa res", "Quina llàstima!"], correctIndex: 0 },
        { speaker: "Friend", text: "Potser a la cafeteria... Au va, anem!", isUserTurn: false, translation: "Maybe at the café... Come on, let's go!" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Anem! Segur que hi són!", "No tinc temps", "Adéu"], correctIndex: 0 }
      ]
    }
  },

  // ─── LESSON 140: Advanced Social Situations ───────────────
  {
    id: 140,
    title: "Advanced Social Situations",
    module: "Social",
    stages: ['intro', 'flashcards', 'sentenceOrdering', 'miniConversation', 'quickFire'],
    words: [
      { en: "To congratulate", ca: "Felicitar", pronunciation: "feh-lee-see-TAR" },
      { en: "To apologise", ca: "Disculpar-se", pronunciation: "dis-cool-PAR-seh" },
      { en: "To complain", ca: "Queixar-se", pronunciation: "keh-SHAR-seh" },
      { en: "To insist", ca: "Insistir", pronunciation: "een-sis-TEER" },
      { en: "To persuade", ca: "Convèncer", pronunciation: "con-VEN-ser" },
      { en: "To negotiate", ca: "Negociar", pronunciation: "neh-goh-SYAR" },
      { en: "To refuse", ca: "Refusar", pronunciation: "reh-foo-ZAR" },
      { en: "To agree", ca: "Estar d'acord", pronunciation: "es-TAR dah-COR" },
      { en: "To hesitate", ca: "Dubtar", pronunciation: "doob-TAR" },
      { en: "Misunderstanding", ca: "Malentès", pronunciation: "mah-len-TES" }
    ],
    stageData: {
      sentenceOrdering: [
        { grammarNote: "💡 'Vull disculpar-me' = I want to apologise. Reflexive verbs with 'vull': vull disculpar-me, vull queixar-me.", words: ["Em", "vull", "disculpar", "per", "l'error", "d'ahir"], correctOrder: "Em vull disculpar per l'error d'ahir", translation: "I want to apologise for yesterday's mistake" },
        { grammarNote: "💡 'Estic d'acord amb' = I agree with. Very useful in meetings and debates.", words: ["Estic", "d'acord", "amb", "la", "teva", "proposta"], correctOrder: "Estic d'acord amb la teva proposta", translation: "I agree with your proposal" },
        { grammarNote: "💡 'M'he de queixar' = I have to complain. Modal + reflexive verb.", words: ["M'he", "de", "queixar", "del", "servei", "d'aquest", "restaurant"], correctOrder: "M'he de queixar del servei d'aquest restaurant", translation: "I have to complain about this restaurant's service" },
        { grammarNote: "💡 'Va ser un malentès' = it was a misunderstanding. Useful for resolving conflicts.", words: ["Ha", "estat", "un", "malentès,", "ho", "sento", "molt"], correctOrder: "Ha estat un malentès, ho sento molt", translation: "It was a misunderstanding, I'm very sorry" }
      ],
      miniConversation: [
        { speaker: "Manager", text: "M'han dit que vols parlar amb mi sobre la teva feina.", isUserTurn: false, translation: "I've been told you want to speak with me about your work." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Sí, vull negociar el meu sou si és possible", "No és important", "Disculpi, és un malentès"], correctIndex: 0 },
        { speaker: "Manager", text: "D'acord. Quin augment tens en ment?", isUserTurn: false, translation: "OK. What increase do you have in mind?" },
        { speaker: "You", text: "", isUserTurn: true, options: ["Estic pensant en un deu per cent, però estic obert a parlar-ne", "El màxim possible", "No ho sé"], correctIndex: 0 },
        { speaker: "Manager", text: "Dubto que puguem arribar al deu, però podem parlar del cinc.", isUserTurn: false, translation: "I doubt we can reach ten, but we can talk about five." },
        { speaker: "You", text: "", isUserTurn: true, options: ["Entenc. Podem revisar-ho en tres mesos si el meu rendiment és bo?", "No estic d'acord", "Refuso la oferta"], correctIndex: 0 }
      ]
    }
  }

];

// ============================================================
// LESSON TIERS — Add these to LESSON_TIERS array in App.jsx
// Find the last tier (currently tier 41 for L120)
// and add these after it:
// ============================================================
//
// { tier: 42, lessons: [121, 122, 123] },
// { tier: 43, lessons: [124, 125, 126] },
// { tier: 44, lessons: [127, 128, 129] },
// { tier: 45, lessons: [130, 131, 132] },
// { tier: 46, lessons: [133, 134, 135] },
// { tier: 47, lessons: [136, 137, 138] },
// { tier: 48, lessons: [139, 140] },
//
// ============================================================
