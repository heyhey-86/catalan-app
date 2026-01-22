import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Lock, Award, Home, User, ArrowRight, RotateCw, BookOpen, Calendar, TrendingUp, MessageCircle, Clock, X, Trophy, Star, Volume2 } from 'lucide-react';
import { getWordsToReview, updateWordReview, initializeWordForReview } from './reviewSystem.js';
import { CONVERSATIONS } from './conversations.js';
import { getTodayChallenge, wasChallengeCompletedToday, getChallengeStreak, getTimeUntilNextChallenge, CHALLENGE_TYPES } from './challenges.js';
import { ACHIEVEMENTS, getUnlockedAchievements, getNewlyUnlocked, getAchievementProgress, getAchievementsByCategory } from './achievements.js';

const LESSONS = [
  { id: 1, title: "Greetings & Basics", module: "Basics", free: true, words: [
    { en: "Hello", ca: "Hola", pronunciation: "OH-lah" },
    { en: "Good morning", ca: "Bon dia", pronunciation: "bone DEE-ah" },
    { en: "Good afternoon", ca: "Bona tarda", pronunciation: "BOH-nah TAR-dah" },
    { en: "Thank you", ca: "Gràcies", pronunciation: "GRAH-see-es" },
    { en: "Please", ca: "Si us plau", pronunciation: "see oos plow" },
    { en: "Yes", ca: "Sí", pronunciation: "see" },
    { en: "No", ca: "No", pronunciation: "noh" }
  ]},
  { id: 2, title: "Numbers 1-10", module: "Basics", free: true, words: [
    { en: "One", ca: "Un", pronunciation: "oon" },
    { en: "Two", ca: "Dos", pronunciation: "dohs" },
    { en: "Three", ca: "Tres", pronunciation: "tres" },
    { en: "Four", ca: "Quatre", pronunciation: "KWAH-treh" },
    { en: "Five", ca: "Cinc", pronunciation: "sink" },
    { en: "Six", ca: "Sis", pronunciation: "sees" },
    { en: "Seven", ca: "Set", pronunciation: "set" },
    { en: "Eight", ca: "Vuit", pronunciation: "vweet" },
    { en: "Nine", ca: "Nou", pronunciation: "noh-oo" },
    { en: "Ten", ca: "Deu", pronunciation: "deh-oo" }
  ]},
  { id: 3, title: "At the Restaurant", module: "Daily Life", free: false, words: [
    { en: "Menu", ca: "Menú", pronunciation: "meh-NOO" },
    { en: "Water", ca: "Aigua", pronunciation: "AY-gwah" },
    { en: "Wine", ca: "Vi", pronunciation: "vee" },
    { en: "Beer", ca: "Cervesa", pronunciation: "ser-VEH-sah" },
    { en: "The bill", ca: "El compte", pronunciation: "el KOM-teh" },
    { en: "I would like", ca: "Voldria", pronunciation: "vol-DREE-ah" },
    { en: "Delicious", ca: "Deliciós", pronunciation: "deh-lee-see-OHS" },
    { en: "Waiter", ca: "Cambrer", pronunciation: "kahm-BRER" }
  ]},
  { id: 4, title: "Shopping & Money", module: "Daily Life", free: false, words: [
    { en: "How much?", ca: "Quan costa?", pronunciation: "kwan KOS-tah" },
    { en: "Expensive", ca: "Car", pronunciation: "kar" },
    { en: "Cheap", ca: "Barat", pronunciation: "bah-RAHT" },
    { en: "Store", ca: "Botiga", pronunciation: "boh-TEE-gah" },
    { en: "Market", ca: "Mercat", pronunciation: "mer-KAHT" },
    { en: "Cash", ca: "Efectiu", pronunciation: "eh-fek-TEE-oo" },
    { en: "Card", ca: "Targeta", pronunciation: "tar-ZHE-tah" },
    { en: "Change (money)", ca: "Canvi", pronunciation: "KAN-vee" }
  ]},
  { id: 5, title: "Directions", module: "Daily Life", free: false, words: [
    { en: "Where is?", ca: "On és?", pronunciation: "ohn es" },
    { en: "Left", ca: "Esquerra", pronunciation: "es-KER-rah" },
    { en: "Right", ca: "Dreta", pronunciation: "DREH-tah" },
    { en: "Straight", ca: "Recte", pronunciation: "REK-teh" },
    { en: "Near", ca: "A prop", pronunciation: "ah prohp" },
    { en: "Far", ca: "Lluny", pronunciation: "yoon-y" },
    { en: "Street", ca: "Carrer", pronunciation: "kah-RER" },
    { en: "Square", ca: "Plaça", pronunciation: "PLAH-sah" }
  ]},
  { id: 6, title: "Transportation", module: "Daily Life", free: false, words: [
    { en: "Bus", ca: "Autobús", pronunciation: "ow-toh-BOOS" },
    { en: "Metro", ca: "Metro", pronunciation: "MEH-troh" },
    { en: "Train", ca: "Tren", pronunciation: "tren" },
    { en: "Taxi", ca: "Taxi", pronunciation: "TAK-see" },
    { en: "Ticket", ca: "Bitllet", pronunciation: "bee-YET" },
    { en: "Station", ca: "Estació", pronunciation: "es-tah-see-OH" },
    { en: "Airport", ca: "Aeroport", pronunciation: "ah-eh-roh-PORT" },
    { en: "Stop", ca: "Parada", pronunciation: "pah-RAH-dah" }
  ]},
  { id: 7, title: "At the Pharmacy", module: "Living", free: false, words: [
    { en: "Pharmacy", ca: "Farmàcia", pronunciation: "far-MAH-see-ah" },
    { en: "Medicine", ca: "Medicina", pronunciation: "meh-dee-SEE-nah" },
    { en: "Pain", ca: "Dolor", pronunciation: "doh-LOR" },
    { en: "Headache", ca: "Mal de cap", pronunciation: "mal deh kap" },
    { en: "Fever", ca: "Febre", pronunciation: "FEH-breh" },
    { en: "Prescription", ca: "Recepta", pronunciation: "reh-SEP-tah" },
    { en: "Pills", ca: "Pastilles", pronunciation: "pas-TEE-yes" },
    { en: "Doctor", ca: "Metge", pronunciation: "MET-zheh" }
  ]},
  { id: 8, title: "Making Friends", module: "Social", free: false, words: [
    { en: "Friend", ca: "Amic", pronunciation: "ah-MEEK" },
    { en: "Nice to meet you", ca: "Encantat", pronunciation: "en-kan-TAT" },
    { en: "What's your name?", ca: "Com et dius?", pronunciation: "kohm et DEE-oos" },
    { en: "Where are you from?", ca: "D'on ets?", pronunciation: "dohn ets" },
    { en: "I'm from...", ca: "Sóc de...", pronunciation: "sohk deh" },
    { en: "Do you live here?", ca: "Vius aquí?", pronunciation: "vee-oos ah-KEE" },
    { en: "See you later", ca: "Fins després", pronunciation: "feens des-PRES" },
    { en: "Goodbye", ca: "Adéu", pronunciation: "ah-DEH-oo" }
  ]},
  { id: 9, title: "Food & Dining", module: "Social", free: false, words: [
    { en: "Breakfast", ca: "Esmorzar", pronunciation: "es-mor-TZAR" },
    { en: "Lunch", ca: "Dinar", pronunciation: "dee-NAR" },
    { en: "Dinner", ca: "Sopar", pronunciation: "soh-PAR" },
    { en: "Hungry", ca: "Tinc gana", pronunciation: "teenk GAH-nah" },
    { en: "Thirsty", ca: "Tinc set", pronunciation: "teenk set" },
    { en: "Tasty", ca: "Saborós", pronunciation: "sah-boh-ROHS" },
    { en: "Hot", ca: "Calent", pronunciation: "kah-LENT" },
    { en: "Cold", ca: "Fred", pronunciation: "fred" }
  ]},
  { id: 10, title: "Emergency Basics", module: "Living", free: false, words: [
    { en: "Help!", ca: "Ajuda!", pronunciation: "ah-ZHOO-dah" },
    { en: "Emergency", ca: "Emergència", pronunciation: "eh-mer-ZHEN-see-ah" },
    { en: "Police", ca: "Policia", pronunciation: "poh-lee-SEE-ah" },
    { en: "Fire", ca: "Foc", pronunciation: "fohk" },
    { en: "Ambulance", ca: "Ambulància", pronunciation: "am-boo-LAN-see-ah" },
    { en: "Accident", ca: "Accident", pronunciation: "ak-see-DENT" },
    { en: "Danger", ca: "Perill", pronunciation: "peh-REEL" },
    { en: "Hospital", ca: "Hospital", pronunciation: "os-pee-TAL" }
  ]},
  { id: 11, title: "At the Bank", module: "Living", free: false, words: [
    { en: "Bank", ca: "Banc", pronunciation: "banhk" },
    { en: "Account", ca: "Compte", pronunciation: "KOM-teh" },
    { en: "Money", ca: "Diners", pronunciation: "dee-NERS" },
    { en: "Withdraw", ca: "Retirar", pronunciation: "reh-tee-RAR" },
    { en: "Deposit", ca: "Ingressar", pronunciation: "een-greh-SAR" },
    { en: "Transfer", ca: "Transferència", pronunciation: "trans-feh-REN-see-ah" },
    { en: "ATM", ca: "Caixer", pronunciation: "kay-SHER" },
    { en: "Balance", ca: "Saldo", pronunciation: "SAL-doh" }
  ]},
  { id: 12, title: "Housing & Home", module: "Living", free: false, words: [
    { en: "Apartment", ca: "Pis", pronunciation: "pees" },
    { en: "Rent", ca: "Lloguer", pronunciation: "yoh-GAIR" },
    { en: "Roommate", ca: "Company de pis", pronunciation: "kohm-PAN-y deh pees" },
    { en: "Kitchen", ca: "Cuina", pronunciation: "koo-EE-nah" },
    { en: "Bedroom", ca: "Habitació", pronunciation: "ah-bee-tah-see-OH" },
    { en: "Bathroom", ca: "Bany", pronunciation: "ban-y" },
    { en: "Living room", ca: "Sala d'estar", pronunciation: "SAH-lah des-TAR" },
    { en: "Furniture", ca: "Mobles", pronunciation: "MOH-bles" }
  ]},
  { id: 13, title: "At the Doctor", module: "Living", free: false, words: [
    { en: "Doctor", ca: "Metge", pronunciation: "MET-zheh" },
    { en: "Appointment", ca: "Cita", pronunciation: "SEE-tah" },
    { en: "I feel sick", ca: "Em trobo malament", pronunciation: "em TROH-boh mah-lah-MENT" },
    { en: "Allergy", ca: "Al·lèrgia", pronunciation: "ah-LER-zhee-ah" },
    { en: "Symptoms", ca: "Símptomes", pronunciation: "SEEM-toh-mes" },
    { en: "Treatment", ca: "Tractament", pronunciation: "trak-tah-MENT" },
    { en: "Nurse", ca: "Infermer", pronunciation: "een-fer-MER" },
    { en: "Test", ca: "Prova", pronunciation: "PROH-vah" }
  ]},
  { id: 14, title: "Weather & Seasons", module: "Social", free: false, words: [
    { en: "It's sunny", ca: "Fa sol", pronunciation: "fah sohl" },
    { en: "It's raining", ca: "Plou", pronunciation: "ploh-oo" },
    { en: "It's cold", ca: "Fa fred", pronunciation: "fah fred" },
    { en: "It's hot", ca: "Fa calor", pronunciation: "fah kah-LOR" },
    { en: "Spring", ca: "Primavera", pronunciation: "pree-mah-VEH-rah" },
    { en: "Summer", ca: "Estiu", pronunciation: "es-tee-OO" },
    { en: "Autumn", ca: "Tardor", pronunciation: "tar-DOR" },
    { en: "Winter", ca: "Hivern", pronunciation: "ee-VERN" }
  ]},
  { id: 15, title: "Family & Relationships", module: "Social", free: false, words: [
    { en: "Mother", ca: "Mare", pronunciation: "MAH-reh" },
    { en: "Father", ca: "Pare", pronunciation: "PAH-reh" },
    { en: "Brother", ca: "Germà", pronunciation: "zher-MAH" },
    { en: "Sister", ca: "Germana", pronunciation: "zher-MAH-nah" },
    { en: "Husband", ca: "Marit", pronunciation: "mah-REET" },
    { en: "Wife", ca: "Muller", pronunciation: "moo-YER" },
    { en: "Son", ca: "Fill", pronunciation: "fee" },
    { en: "Daughter", ca: "Filla", pronunciation: "FEE-yah" }
  ]},
  { id: 16, title: "Work & Office", module: "Living", free: false, words: [
    { en: "Work", ca: "Feina", pronunciation: "FAY-nah" },
    { en: "Job", ca: "Treball", pronunciation: "treh-BAL" },
    { en: "Office", ca: "Oficina", pronunciation: "oh-fee-SEE-nah" },
    { en: "Meeting", ca: "Reunió", pronunciation: "reh-oo-nee-OH" },
    { en: "Boss", ca: "Cap", pronunciation: "kap" },
    { en: "Colleague", ca: "Company", pronunciation: "kohm-PAN-y" },
    { en: "Email", ca: "Correu electrònic", pronunciation: "koh-REH-oo eh-lek-TROH-neek" },
    { en: "Deadline", ca: "Data límit", pronunciation: "DAH-tah LEE-meet" }
  ]},
  { id: 17, title: "Hobbies & Free Time", module: "Social", free: false, words: [
    { en: "I like", ca: "M'agrada", pronunciation: "mah-GRAH-dah" },
    { en: "Reading", ca: "Llegir", pronunciation: "yeh-ZHEER" },
    { en: "Sports", ca: "Esports", pronunciation: "es-PORTS" },
    { en: "Music", ca: "Música", pronunciation: "MOO-see-kah" },
    { en: "Movies", ca: "Pel·lícules", pronunciation: "peh-LEE-koo-les" },
    { en: "Cooking", ca: "Cuinar", pronunciation: "koo-ee-NAR" },
    { en: "Travel", ca: "Viatjar", pronunciation: "vee-at-ZHAR" },
    { en: "Dancing", ca: "Ballar", pronunciation: "bah-YAR" }
  ]},
  { id: 18, title: "Common Verbs", module: "Basics", free: false, words: [
    { en: "To be", ca: "Ser/Estar", pronunciation: "ser/es-TAR" },
    { en: "To have", ca: "Tenir", pronunciation: "teh-NEER" },
    { en: "To go", ca: "Anar", pronunciation: "ah-NAR" },
    { en: "To come", ca: "Venir", pronunciation: "veh-NEER" },
    { en: "To want", ca: "Voler", pronunciation: "voh-LER" },
    { en: "To need", ca: "Necessitar", pronunciation: "neh-seh-see-TAR" },
    { en: "To know", ca: "Saber", pronunciation: "sah-BER" },
    { en: "To speak", ca: "Parlar", pronunciation: "par-LAR" }
  ]},
  { id: 19, title: "Common Adjectives", module: "Basics", free: false, words: [
    { en: "Good", ca: "Bo", pronunciation: "boh" },
    { en: "Bad", ca: "Dolent", pronunciation: "doh-LENT" },
    { en: "Big", ca: "Gran", pronunciation: "gran" },
    { en: "Small", ca: "Petit", pronunciation: "peh-TEET" },
    { en: "New", ca: "Nou", pronunciation: "noh-oo" },
    { en: "Old", ca: "Vell", pronunciation: "vel" },
    { en: "Beautiful", ca: "Bonic", pronunciation: "boh-NEEK" },
    { en: "Difficult", ca: "Difícil", pronunciation: "dee-FEE-seel" }
  ]},
  { id: 20, title: "Time Expressions", module: "Basics", free: false, words: [
    { en: "Now", ca: "Ara", pronunciation: "AH-rah" },
    { en: "Later", ca: "Més tard", pronunciation: "mes tard" },
    { en: "Yesterday", ca: "Ahir", pronunciation: "ah-EER" },
    { en: "Tomorrow", ca: "Demà", pronunciation: "deh-MAH" },
    { en: "Morning", ca: "Matí", pronunciation: "mah-TEE" },
    { en: "Afternoon", ca: "Tarda", pronunciation: "TAR-dah" },
    { en: "Night", ca: "Nit", pronunciation: "neet" },
    { en: "Always", ca: "Sempre", pronunciation: "SEM-preh" }
  ]},
  { id: 21, title: "Post Office & Mail", module: "Living", free: false, words: [
    { en: "Post office", ca: "Correus", pronunciation: "koh-REH-oos" },
    { en: "Letter", ca: "Carta", pronunciation: "KAR-tah" },
    { en: "Package", ca: "Paquet", pronunciation: "pah-KET" },
    { en: "Stamp", ca: "Segell", pronunciation: "seh-ZHEL" },
    { en: "Address", ca: "Adreça", pronunciation: "ah-DREH-sah" },
    { en: "Send", ca: "Enviar", pronunciation: "en-vee-AR" },
    { en: "Receive", ca: "Rebre", pronunciation: "REH-breh" },
    { en: "Mailbox", ca: "Bústia", pronunciation: "BOOS-tee-ah" }
  ]},
  { id: 22, title: "Supermarket & Groceries", module: "Daily Life", free: false, words: [
    { en: "Bread", ca: "Pa", pronunciation: "pah" },
    { en: "Milk", ca: "Llet", pronunciation: "yet" },
    { en: "Eggs", ca: "Ous", pronunciation: "oh-oos" },
    { en: "Fruit", ca: "Fruita", pronunciation: "FROO-ee-tah" },
    { en: "Vegetables", ca: "Verdures", pronunciation: "ver-DOO-res" },
    { en: "Meat", ca: "Carn", pronunciation: "karn" },
    { en: "Fish", ca: "Peix", pronunciation: "pesh" },
    { en: "Cheese", ca: "Formatge", pronunciation: "for-MAT-zheh" }
  ]},
  { id: 23, title: "Celebrations & Events", module: "Social", free: false, words: [
    { en: "Birthday", ca: "Aniversari", pronunciation: "ah-nee-ver-SAH-ree" },
    { en: "Party", ca: "Festa", pronunciation: "FES-tah" },
    { en: "Gift", ca: "Regal", pronunciation: "reh-GAL" },
    { en: "Cake", ca: "Pastís", pronunciation: "pas-TEES" },
    { en: "Happy", ca: "Feliç", pronunciation: "feh-LEES" },
    { en: "Congratulations", ca: "Felicitats", pronunciation: "feh-lee-see-TATS" },
    { en: "Celebrate", ca: "Celebrar", pronunciation: "seh-leh-BRAR" },
    { en: "Invite", ca: "Convidar", pronunciation: "kohn-vee-DAR" }
  ]},
  { id: 24, title: "Body Parts & Health", module: "Living", free: false, words: [
    { en: "Head", ca: "Cap", pronunciation: "kap" },
    { en: "Eyes", ca: "Ulls", pronunciation: "ools" },
    { en: "Nose", ca: "Nas", pronunciation: "nas" },
    { en: "Mouth", ca: "Boca", pronunciation: "BOH-kah" },
    { en: "Hand", ca: "Mà", pronunciation: "mah" },
    { en: "Leg", ca: "Cama", pronunciation: "KAH-mah" },
    { en: "Foot", ca: "Peu", pronunciation: "peh-oo" },
    { en: "Stomach", ca: "Estómac", pronunciation: "es-TOH-mak" }
  ]},
  { id: 25, title: "Clothing & Shopping", module: "Daily Life", free: false, words: [
    { en: "Shirt", ca: "Camisa", pronunciation: "kah-MEE-sah" },
    { en: "Pants", ca: "Pantalons", pronunciation: "pan-tah-LONS" },
    { en: "Shoes", ca: "Sabates", pronunciation: "sah-BAH-tes" },
    { en: "Jacket", ca: "Jaqueta", pronunciation: "zhah-KEH-tah" },
    { en: "Dress", ca: "Vestit", pronunciation: "ves-TEET" },
    { en: "Size", ca: "Talla", pronunciation: "TAH-yah" },
    { en: "Color", ca: "Color", pronunciation: "koh-LOR" },
    { en: "Price", ca: "Preu", pronunciation: "preh-oo" }
  ]},
  { id: 26, title: "Technology & Internet", module: "Living", free: false, words: [
    { en: "Computer", ca: "Ordinador", pronunciation: "or-dee-nah-DOR" },
    { en: "Phone", ca: "Telèfon", pronunciation: "teh-LEH-fohn" },
    { en: "Internet", ca: "Internet", pronunciation: "een-ter-NET" },
    { en: "WiFi", ca: "WiFi", pronunciation: "wee-fee" },
    { en: "Password", ca: "Contrasenya", pronunciation: "kohn-trah-SEN-yah" },
    { en: "Download", ca: "Descarregar", pronunciation: "des-kah-reh-GAR" },
    { en: "Upload", ca: "Carregar", pronunciation: "kah-reh-GAR" },
    { en: "Connect", ca: "Connectar", pronunciation: "koh-nek-TAR" }
  ]},
  { id: 27, title: "Nature & Environment", module: "Social", free: false, words: [
    { en: "Mountain", ca: "Muntanya", pronunciation: "moon-TAN-yah" },
    { en: "River", ca: "Riu", pronunciation: "ree-oo" },
    { en: "Beach", ca: "Platja", pronunciation: "PLAT-zhah" },
    { en: "Forest", ca: "Bosc", pronunciation: "bosk" },
    { en: "Tree", ca: "Arbre", pronunciation: "AR-breh" },
    { en: "Flower", ca: "Flor", pronunciation: "flor" },
    { en: "Animal", ca: "Animal", pronunciation: "ah-nee-MAL" },
    { en: "Bird", ca: "Ocell", pronunciation: "oh-SEL" }
  ]},
  { id: 28, title: "Sports & Activities", module: "Social", free: false, words: [
    { en: "Football", ca: "Futbol", pronunciation: "FOOT-bol" },
    { en: "Basketball", ca: "Bàsquet", pronunciation: "BAS-ket" },
    { en: "Swimming", ca: "Natació", pronunciation: "nah-tah-see-OH" },
    { en: "Running", ca: "Córrer", pronunciation: "KOR-er" },
    { en: "Cycling", ca: "Ciclisme", pronunciation: "see-KLEES-meh" },
    { en: "Gym", ca: "Gimnàs", pronunciation: "zheem-NAS" },
    { en: "Team", ca: "Equip", pronunciation: "eh-KEEP" },
    { en: "Win", ca: "Guanyar", pronunciation: "gwan-YAR" }
  ]},
  { id: 29, title: "At the Hotel", module: "Daily Life", free: false, words: [
    { en: "Hotel", ca: "Hotel", pronunciation: "oh-TEL" },
    { en: "Room", ca: "Habitació", pronunciation: "ah-bee-tah-see-OH" },
    { en: "Reservation", ca: "Reserva", pronunciation: "reh-SER-vah" },
    { en: "Key", ca: "Clau", pronunciation: "kla-oo" },
    { en: "Reception", ca: "Recepció", pronunciation: "reh-sep-see-OH" },
    { en: "Breakfast", ca: "Esmorzar", pronunciation: "es-mor-TZAR" },
    { en: "Check-in", ca: "Registre", pronunciation: "reh-ZHEES-treh" },
    { en: "Check-out", ca: "Sortida", pronunciation: "sor-TEE-dah" }
  ]},
  { id: 30, title: "Mixed Practice", module: "Review", free: false, words: [
    { en: "Problem", ca: "Problema", pronunciation: "proh-BLEH-mah" },
    { en: "Solution", ca: "Solució", pronunciation: "soh-loo-see-OH" },
    { en: "Question", ca: "Pregunta", pronunciation: "preh-GOON-tah" },
    { en: "Answer", ca: "Resposta", pronunciation: "res-POS-tah" },
    { en: "Important", ca: "Important", pronunciation: "eem-por-TANT" },
    { en: "Necessary", ca: "Necessari", pronunciation: "neh-seh-SAH-ree" },
    { en: "Possible", ca: "Possible", pronunciation: "poh-SEE-bleh" },
    { en: "Impossible", ca: "Impossible", pronunciation: "eem-poh-SEE-bleh" }
  ]}
];

function App() {
  const [view, setView] = useState('home');
  const [dashboardTab, setDashboardTab] = useState('lessons');
  const [user, setUser] = useState(null);
  const [premium, setPremium] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lessonStage, setLessonStage] = useState('intro');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [score, setScore] = useState(0);
  const [wordHistory, setWordHistory] = useState([]);
  const [reviewQueue, setReviewQueue] = useState([]);
  const [reviewStreak, setReviewStreak] = useState(0);
  const [lastReviewDate, setLastReviewDate] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [conversationTurnIndex, setConversationTurnIndex] = useState(0);
  const [userSentence, setUserSentence] = useState([]);
  const [conversationFeedback, setConversationFeedback] = useState('');
  const [completedConversations, setCompletedConversations] = useState([]);
  const [challengeHistory, setChallengeHistory] = useState([]);
  const [challengeStreak, setChallengeStreak] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [challengeProgress, setChallengeProgress] = useState(0);
  const [challengeTimeRemaining, setChallengeTimeRemaining] = useState(null);
  const [challengeStartTime, setChallengeStartTime] = useState(null);
  const [challengeItems, setChallengeItems] = useState([]);
  const [challengeCurrentIndex, setChallengeCurrentIndex] = useState(0);
  const [challengeFeedback, setChallengeFeedback] = useState('');
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [challengeFailed, setChallengeFailed] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [challengeSelectedPairs, setChallengeSelectedPairs] = useState([]);
  const [challengeMatchedPairs, setChallengeMatchedPairs] = useState([]);
  const [challengeShuffledCatalan, setChallengeShuffledCatalan] = useState([]);
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [shuffledCatalan, setShuffledCatalan] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState('');
  const [quizOptions, setQuizOptions] = useState([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const timerRef = useRef(null);
  const secretTapsRef = useRef(0);
  const secretTapTimerRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('catalan_progress');
    if (saved) {
      const data = JSON.parse(saved);
      setCompleted(data.completed || []);
      setScore(data.score || 0);
      setPremium(data.premium || false);
      setUser(data.user || null);
      setWordHistory(data.wordHistory || []);
      setReviewStreak(data.reviewStreak || 0);
      setLastReviewDate(data.lastReviewDate || null);
      setCompletedConversations(data.completedConversations || []);
      setChallengeHistory(data.challengeHistory || []);
      setChallengeStreak(getChallengeStreak(data.challengeHistory || []));
      setUnlockedAchievements(getUnlockedAchievements(data));
      if (data.wordHistory) {
        setReviewQueue(getWordsToReview(data.wordHistory));
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      const userData = { completed, score, premium, user, wordHistory, reviewStreak, lastReviewDate, completedConversations, challengeHistory };
      localStorage.setItem('catalan_progress', JSON.stringify(userData));
      setReviewQueue(getWordsToReview(wordHistory));
      
      // Check for new achievements
      const currentUnlocked = getUnlockedAchievements(userData);
      const newlyUnlocked = currentUnlocked.filter(a => !unlockedAchievements.map(u => u.id).includes(a.id));
      
      if (newlyUnlocked.length > 0 && unlockedAchievements.length > 0) {
        // Show notification for first new achievement
        setNewAchievement(newlyUnlocked[0]);
        setTimeout(() => setNewAchievement(null), 4000);
      }
      
      setUnlockedAchievements(currentUnlocked);
    }
  }, [completed, score, premium, user, wordHistory, reviewStreak, lastReviewDate, completedConversations, challengeHistory]);

  useEffect(() => {
    if (view === 'challenge' && currentChallenge && currentChallenge.timeLimit && challengeStartTime && !challengeCompleted && !challengeFailed) {
      timerRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - challengeStartTime) / 1000);
        const remaining = currentChallenge.timeLimit - elapsed;
        if (remaining <= 0) {
          clearInterval(timerRef.current);
          setChallengeTimeRemaining(0);
          // Record the failed attempt
          const newHistory = [...challengeHistory, {
            challengeId: currentChallenge.id,
            date: new Date().toDateString(),
            points: 0,
            completed: false
          }];
          setChallengeHistory(newHistory);
          setChallengeFailed(true);
        } else {
          setChallengeTimeRemaining(remaining);
        }
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [view, currentChallenge, challengeStartTime, challengeCompleted, challengeFailed]);

  const startLesson = (lesson) => {
    setCurrentLesson(lesson);
    setLessonStage('intro');
    setCurrentCardIndex(0);
    setFlipped(false);
    setMatchedPairs([]);
    setSelectedPairs([]);
    setShuffledCatalan([...lesson.words].sort(() => Math.random() - 0.5));
    setView('lesson');
  };

  const startConversation = (conversation) => {
    setCurrentConversation(conversation);
    const firstUserTurn = conversation.turns.findIndex(turn => turn.speaker === 'user');
    setConversationTurnIndex(firstUserTurn);
    setUserSentence([]);
    setConversationFeedback('');
    setView('conversation');
  };

  const startChallenge = () => {
    const challenge = getTodayChallenge();
    setCurrentChallenge(challenge);
    setChallengeProgress(0);
    setChallengeCurrentIndex(0);
    setChallengeFeedback('');
    setChallengeCompleted(false);
    setChallengeFailed(false);
    setUserInput('');
    setChallengeSelectedPairs([]);
    setChallengeMatchedPairs([]);
    
    // Use user's learned words if they have enough, otherwise use challenge defaults
    const userWords = wordHistory.map(w => ({ en: w.en, ca: w.ca }));
    const hasEnoughWords = userWords.length >= challenge.targetCount;
    
    if (challenge.type === CHALLENGE_TYPES.TRANSLATE) {
      if (hasEnoughWords) {
        // Use words the user has learned
        const shuffledUserWords = [...userWords].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount + 5);
        setChallengeItems(shuffledUserWords);
      } else {
        // Fall back to easy sentences from challenge
        setChallengeItems([...challenge.sentences].sort(() => Math.random() - 0.5));
      }
    } else if (challenge.type === CHALLENGE_TYPES.MATCH) {
      if (hasEnoughWords) {
        // Use words the user has learned
        const words = [...userWords].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount);
        setChallengeItems(words);
        setChallengeShuffledCatalan([...words].sort(() => Math.random() - 0.5));
      } else {
        // Fall back to challenge defaults
        const words = [...challenge.words].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount);
        setChallengeItems(words);
        setChallengeShuffledCatalan([...words].sort(() => Math.random() - 0.5));
      }
    }
    if (challenge.timeLimit) {
      setChallengeStartTime(Date.now());
      setChallengeTimeRemaining(challenge.timeLimit);
    } else {
      setChallengeTimeRemaining(null);
    }
    setView('challenge');
  };

  // Helper function to normalize text (remove accents and punctuation for comparison)
  const normalizeText = (text) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')  // Remove accents
      .replace(/[?!.,;:'"¿¡]/g, '')      // Remove punctuation
      .toLowerCase()
      .trim();
  };

  const handleTranslateAnswer = () => {
    const currentItem = challengeItems[challengeCurrentIndex];
    const userAnswer = userInput.trim();
    const correctAnswer = currentItem.ca;
    
    // Normalize both for comparison (removes accents)
    const normalizedUser = normalizeText(userAnswer);
    const normalizedCorrect = normalizeText(correctAnswer);
    
    // Check if answers match (ignoring accents)
    const isMatch = normalizedUser === normalizedCorrect;
    // Check if it was an exact match (with accents)
    const isExactMatch = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    
    if (isMatch) {
      // Correct answer!
      const newProgress = challengeProgress + 1;
      setChallengeProgress(newProgress);
      
      if (isExactMatch) {
        setChallengeFeedback('Correcte! ✓');
      } else {
        // Correct but missing/wrong accents
        setChallengeFeedback(`Correcte! ✓ Amb accents: "${correctAnswer}"`);
      }
      
      setTimeout(() => {
        if (newProgress >= currentChallenge.targetCount) {
          completeChallenge();
        } else {
          setChallengeCurrentIndex(challengeCurrentIndex + 1);
          setUserInput('');
          setChallengeFeedback('');
        }
      }, 2000); // 2 seconds to read feedback
    } else {
      setChallengeFeedback(`Incorrecte. La resposta és: "${correctAnswer}"`);
      setTimeout(() => {
        // Move to next question if there are more
        if (challengeCurrentIndex + 1 < challengeItems.length) {
          setChallengeCurrentIndex(challengeCurrentIndex + 1);
          setUserInput('');
          setChallengeFeedback('');
        } else {
          // No more questions - check if we met the target
          if (challengeProgress < currentChallenge.targetCount) {
            // Record the failed attempt
            const newHistory = [...challengeHistory, {
              challengeId: currentChallenge.id,
              date: new Date().toDateString(),
              points: 0,
              completed: false
            }];
            setChallengeHistory(newHistory);
            setChallengeFailed(true);
          }
        }
      }, 3000); // 3 seconds for incorrect to read the answer
    }
  };

  const handleChallengeMatchClick = (word, type) => {
    const newSelection = { word, type };
    if (challengeSelectedPairs.length === 0) {
      setChallengeSelectedPairs([newSelection]);
    } else if (challengeSelectedPairs.length === 1) {
      const first = challengeSelectedPairs[0];
      if (first.type === type) {
        setChallengeSelectedPairs([newSelection]);
      } else {
        const isMatch = (first.type === 'en' && first.word.ca === newSelection.word.ca) ||
                       (first.type === 'ca' && newSelection.word.ca === first.word.ca);
        if (isMatch) {
          const newMatched = [...challengeMatchedPairs, first.word.ca];
          setChallengeMatchedPairs(newMatched);
          setChallengeSelectedPairs([]);
          const newProgress = challengeProgress + 1;
          setChallengeProgress(newProgress);
          if (newProgress >= currentChallenge.targetCount) {
            setTimeout(() => completeChallenge(), 500);
          }
        } else {
          setTimeout(() => setChallengeSelectedPairs([]), 500);
        }
      }
    }
  };

  const completeChallenge = () => {
    setChallengeCompleted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    const newHistory = [...challengeHistory, {
      challengeId: currentChallenge.id,
      date: new Date().toDateString(),
      points: currentChallenge.points,
      completed: true
    }];
    setChallengeHistory(newHistory);
    setChallengeStreak(getChallengeStreak(newHistory));
    setScore(score + currentChallenge.points);
  };

  // Record failed challenge attempt (locks for the day)
  const failChallenge = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const newHistory = [...challengeHistory, {
      challengeId: currentChallenge.id,
      date: new Date().toDateString(),
      points: 0,
      completed: false
    }];
    setChallengeHistory(newHistory);
    setChallengeFailed(true);
  };

  // Dev helper: Ctrl+Shift+D to reset daily challenge
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        const newHistory = challengeHistory.filter(h => h.date !== new Date().toDateString());
        setChallengeHistory(newHistory);
        console.log('🔄 Daily challenge reset for testing');
        alert('Daily challenge reset!');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [challengeHistory]);

  // Check if challenge was attempted today (completed OR failed)
  const wasChallengeAttemptedToday = () => {
    if (!challengeHistory || challengeHistory.length === 0) return false;
    const today = new Date().toDateString();
    return challengeHistory.some(h => h.date === today);
  };

  const wasChallengeCompletedSuccessfully = () => {
    if (!challengeHistory || challengeHistory.length === 0) return false;
    const today = new Date().toDateString();
    return challengeHistory.some(h => h.date === today && h.completed === true);
  };

  const exitChallenge = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setView('home');
    setCurrentChallenge(null);
  };

  const addWordToSentence = (word) => setUserSentence([...userSentence, word]);
  const removeLastWord = () => setUserSentence(userSentence.slice(0, -1));

  const checkConversationAnswer = () => {
    const currentTurn = currentConversation.turns[conversationTurnIndex];
    const userAnswer = userSentence.join(' ');
    const correctAnswer = currentTurn.correctSentence;
    if (userAnswer === correctAnswer) {
      setConversationFeedback('Correcte! ✓');
      setScore(score + 15);
      const updatedTurns = [...currentConversation.turns];
      updatedTurns[conversationTurnIndex] = { ...currentTurn, userAnswer };
      setCurrentConversation({ ...currentConversation, turns: updatedTurns });
      setTimeout(() => {
        let nextIndex = conversationTurnIndex + 1;
        while (nextIndex < currentConversation.turns.length && currentConversation.turns[nextIndex].speaker !== 'user') {
          nextIndex++;
        }
        if (nextIndex < currentConversation.turns.length) {
          setConversationTurnIndex(nextIndex);
          setUserSentence([]);
          setConversationFeedback('');
        } else {
          if (!completedConversations.includes(currentConversation.id)) {
            setCompletedConversations([...completedConversations, currentConversation.id]);
            setScore(s => s + 50);
          }
          setView('home');
          setCurrentConversation(null);
        }
      }, 1500);
    } else {
      setConversationFeedback(`Try again! The correct answer is: "${correctAnswer}"`);
      setTimeout(() => { setConversationFeedback(''); setUserSentence([]); }, 3000);
    }
  };

  const nextStage = () => {
    if (lessonStage === 'intro') setLessonStage('flashcards');
    else if (lessonStage === 'flashcards') setLessonStage('match');
    else if (lessonStage === 'match') {
      setLessonStage('quiz');
      setQuizIndex(0);
      setQuizFeedback('');
      const correctAnswer = currentLesson.words[0].ca;
      const wrongAnswers = currentLesson.words.filter((_, i) => i !== 0).map(w => w.ca).sort(() => Math.random() - 0.5).slice(0, 2);
      setQuizOptions([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5));
    } else {
      if (!completed.includes(currentLesson.id)) {
        setCompleted([...completed, currentLesson.id]);
        setScore(score + 50);
        const newWords = currentLesson.words.map(word => initializeWordForReview(word, currentLesson.id));
        setWordHistory([...wordHistory, ...newWords]);
      }
      setView('home');
      setCurrentLesson(null);
      setQuizIndex(0);
    }
  };

  const handleMatchClick = (word, type) => {
    const newSelection = { word, type };
    if (selectedPairs.length === 0) {
      setSelectedPairs([newSelection]);
    } else if (selectedPairs.length === 1) {
      const first = selectedPairs[0];
      if (first.type === type) {
        setSelectedPairs([newSelection]);
      } else {
        const isMatch = (first.type === 'en' && first.word.ca === newSelection.word.ca) || (first.type === 'ca' && newSelection.word.ca === first.word.ca);
        if (isMatch) {
          setMatchedPairs([...matchedPairs, first.word.ca]);
          setSelectedPairs([]);
          setScore(score + 10);
        } else {
          setTimeout(() => setSelectedPairs([]), 500);
        }
      }
    }
  };

  const handleQuizAnswer = (answer) => {
    const correct = currentLesson.words[quizIndex];
    if (answer === correct.ca) {
      setQuizFeedback('Correcte! ✓');
      setScore(score + 5);
      setTimeout(() => {
        if (quizIndex < currentLesson.words.length - 1) {
          const nextIndex = quizIndex + 1;
          setQuizIndex(nextIndex);
          setQuizFeedback('');
          const correctAnswer = currentLesson.words[nextIndex].ca;
          const wrongAnswers = currentLesson.words.filter((_, i) => i !== nextIndex).map(w => w.ca).sort(() => Math.random() - 0.5).slice(0, 2);
          setQuizOptions([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5));
        } else {
          nextStage();
        }
      }, 1000);
    } else {
      setQuizFeedback('Try again!');
      setTimeout(() => setQuizFeedback(''), 1000);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ONBOARDING FLOW
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [onboardingName, setOnboardingName] = useState('');
  const [onboardingGoal, setOnboardingGoal] = useState('');
  const [onboardingTime, setOnboardingTime] = useState('');

  const goals = [
    { id: 'moving', label: 'Moving to Barcelona/Catalonia', icon: '🏠' },
    { id: 'andorra', label: 'Living in Andorra', icon: '🏔️' },
    { id: 'family', label: 'Family or relationship', icon: '❤️' },
    { id: 'travel', label: 'Travel and holidays', icon: '✈️' },
    { id: 'curious', label: 'Just curious!', icon: '🤔' }
  ];

  const timeOptions = [
    { id: '5', label: '5 min/day', desc: 'Casual learner', icon: '🌱' },
    { id: '10', label: '10 min/day', desc: 'Regular practice', icon: '🌿' },
    { id: '15', label: '15+ min/day', desc: 'Serious student', icon: '🌳' }
  ];

  // Shuffle array helper
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Text-to-speech for Catalan words
  const speakWord = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ca-ES'; // Catalan
      utterance.rate = 0.8; // Slightly slower for learning
      window.speechSynthesis.speak(utterance);
    }
  };

  const completeOnboarding = () => {
    setUser({ 
      name: onboardingName || 'Learner', 
      goal: onboardingGoal, 
      dailyMinutes: parseInt(onboardingTime) || 10 
    });
    // Start them on lesson 1
    const firstLesson = LESSONS[0];
    startLesson(firstLesson);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-3">
          
          {/* Step 0: Welcome */}
          {onboardingStep === 0 && (
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <h1 className="text-3xl font-bold mb-2">Aprèn Català</h1>
              <p className="text-gray-600 mb-8">Learn Catalan the easy way. Perfect for expats in Barcelona, Catalonia & Andorra.</p>
              <button onClick={() => setOnboardingStep(1)} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Let's Get Started →
              </button>
              <p className="text-xs text-gray-400 mt-4">Join 50+ learners already on the waitlist!</p>
            </div>
          )}

          {/* Step 1: Name */}
          {onboardingStep === 1 && (
            <div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">👋</div>
                <h2 className="text-2xl font-bold">What's your name?</h2>
                <p className="text-gray-600 text-sm">We'll use this to personalize your experience</p>
              </div>
              <input
                type="text"
                value={onboardingName}
                onChange={(e) => setOnboardingName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
              <button onClick={() => setOnboardingStep(2)} className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700">
                Continue →
              </button>
              <button onClick={() => setOnboardingStep(0)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Step 2: Goal */}
          {onboardingStep === 2 && (
            <div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🎯</div>
                <h2 className="text-2xl font-bold">Why learn Catalan?</h2>
                <p className="text-gray-600 text-sm">This helps us tailor your learning</p>
              </div>
              <div className="space-y-3 mb-4">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setOnboardingGoal(goal.id)}
                    className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ${onboardingGoal === goal.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}`}
                  >
                    <span className="text-2xl">{goal.icon}</span>
                    <span className="font-semibold">{goal.label}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => onboardingGoal && setOnboardingStep(3)} disabled={!onboardingGoal} className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Continue →
              </button>
              <button onClick={() => setOnboardingStep(1)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Step 3: Daily Time */}
          {onboardingStep === 3 && (
            <div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">⏰</div>
                <h2 className="text-2xl font-bold">Daily goal?</h2>
                <p className="text-gray-600 text-sm">How much time can you practice?</p>
              </div>
              <div className="space-y-3 mb-4">
                {timeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setOnboardingTime(option.id)}
                    className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ${onboardingTime === option.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-xs text-gray-500">{option.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
              <button onClick={() => onboardingTime && setOnboardingStep(4)} disabled={!onboardingTime} className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Continue →
              </button>
              <button onClick={() => setOnboardingStep(2)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Step 4: Ready! */}
          {onboardingStep === 4 && (
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold mb-2">You're all set, {onboardingName || 'friend'}!</h2>
              <p className="text-gray-600 mb-6">Let's start with your first lesson and learn some basic Catalan greetings.</p>
              <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                <div className="text-sm font-semibold text-blue-800 mb-2">Your first lesson:</div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👋</span>
                  <div>
                    <div className="font-bold">Greetings & Basics</div>
                    <div className="text-xs text-gray-600">7 essential words • 5 min</div>
                  </div>
                </div>
              </div>
              <button onClick={completeOnboarding} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all">
                Start First Lesson! 🎉
              </button>
              <button onClick={() => setOnboardingStep(3)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Progress dots */}
          {onboardingStep > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className={`w-2 h-2 rounded-full transition-all ${onboardingStep >= step ? 'bg-blue-600' : 'bg-gray-300'}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // CHALLENGE VIEW
  if (view === 'challenge' && currentChallenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
        <nav className="bg-white shadow-sm p-3 sm:p-4 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button onClick={exitChallenge} className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base"><X className="w-5 h-5" /> <span className="hidden sm:inline">Exit Challenge</span></button>
            {challengeTimeRemaining !== null && (
              <div className={`flex items-center gap-1 sm:gap-2 font-bold text-lg sm:text-xl ${challengeTimeRemaining <= 30 ? 'text-red-600' : 'text-gray-800'}`}>
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />{formatTime(challengeTimeRemaining)}
              </div>
            )}
          </div>
        </nav>
        <div className="max-w-4xl mx-auto p-3 sm:p-4">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl">{currentChallenge.icon}</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">{currentChallenge.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{currentChallenge.description}</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1"><span>Progress</span><span>{challengeProgress} / {currentChallenge.targetCount}</span></div>
              <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300" style={{ width: `${(challengeProgress / currentChallenge.targetCount) * 100}%` }} />
              </div>
            </div>
          </div>
          {!challengeCompleted && !challengeFailed && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              {currentChallenge.type === CHALLENGE_TYPES.TRANSLATE && challengeItems[challengeCurrentIndex] && (
                <div>
                  <h3 className="text-base sm:text-lg text-gray-600 mb-2">Translate to Catalan:</h3>
                  <div className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center py-4 sm:py-6 bg-blue-50 rounded-xl">{challengeItems[challengeCurrentIndex].en}</div>
                  <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleTranslateAnswer()} placeholder="Type your answer..." className="w-full p-3 sm:p-4 text-base sm:text-xl border-2 border-gray-200 rounded-xl mb-3 sm:mb-4 focus:border-orange-500 focus:outline-none" autoFocus />
                  <button onClick={handleTranslateAnswer} disabled={!userInput.trim()} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-transform disabled:opacity-50">Check Answer</button>
                  {challengeFeedback && <div className={`mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl text-center font-semibold text-sm sm:text-base ${challengeFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{challengeFeedback}</div>}
                </div>
              )}
              {currentChallenge.type === CHALLENGE_TYPES.MATCH && (
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="font-semibold text-gray-600 mb-2 text-sm sm:text-base">English</h3>
                    {challengeItems.map((word, i) => (
                      <button key={i} onClick={() => handleChallengeMatchClick(word, 'en')} disabled={challengeMatchedPairs.includes(word.ca)} className={`w-full p-4 rounded-lg font-semibold transition-all ${challengeMatchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : challengeSelectedPairs.some(p => p.word === word && p.type === 'en') ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>{word.en}</button>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-600 mb-2">Català</h3>
                    {challengeShuffledCatalan.map((word, i) => (
                      <button key={i} onClick={() => handleChallengeMatchClick(word, 'ca')} disabled={challengeMatchedPairs.includes(word.ca)} className={`w-full p-4 rounded-lg font-semibold transition-all ${challengeMatchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : challengeSelectedPairs.some(p => p.word === word && p.type === 'ca') ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>{word.ca}</button>
                    ))}
                  </div>
                </div>
              )}
              {(currentChallenge.type === CHALLENGE_TYPES.CONVERSATIONS || currentChallenge.type === CHALLENGE_TYPES.REVIEW) && (
                <div className="text-center py-8 sm:py-12">
                  <p className="text-base sm:text-xl text-gray-600 mb-4">This challenge requires completing {currentChallenge.targetCount} {currentChallenge.type === CHALLENGE_TYPES.CONVERSATIONS ? 'conversations' : 'reviews'}.</p>
                  <p className="text-gray-500 text-sm sm:text-base">Go to the Practice tab to complete conversations!</p>
                  <button onClick={exitChallenge} className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-gray-200 rounded-lg font-semibold active:bg-gray-300">Back to Dashboard</button>
                </div>
              )}
            </div>
          )}
          {challengeCompleted && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              <div className="text-5xl sm:text-6xl mb-4">🎉</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Challenge Complete!</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">You earned {currentChallenge.points} points!</p>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3"><Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" /><span className="text-xl sm:text-2xl font-bold text-orange-600">+{currentChallenge.points} Points</span></div>
              </div>
              <button onClick={exitChallenge} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-transform">Back to Dashboard</button>
            </div>
          )}
          {challengeFailed && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              <div className="text-5xl sm:text-6xl mb-4">😔</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Time's Up!</h2>
              <p className="text-gray-600 mb-6">You got {challengeProgress} out of {currentChallenge.targetCount}. Try again tomorrow!</p>
              <button onClick={exitChallenge} className="w-full bg-gray-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-700">Back to Dashboard</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // CONVERSATION VIEW
  if (view === 'conversation' && currentConversation) {
    const displayedTurns = currentConversation.turns.slice(0, conversationTurnIndex + 1);
    const currentTurn = currentConversation.turns[conversationTurnIndex];
    const isUserTurn = currentTurn && currentTurn.speaker === 'user';
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
        <nav className="bg-white shadow-sm p-4">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-gray-600"><Home className="w-5 h-5" /> Exit Conversation</button>
        </nav>
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{currentConversation.icon}</span>
              <div><h2 className="text-2xl font-bold">{currentConversation.title}</h2><span className="text-sm text-gray-500">{currentConversation.difficulty}</span></div>
            </div>
            <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
              {displayedTurns.map((turn, i) => (
                <div key={i} className={`flex ${turn.speaker === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md p-4 rounded-2xl ${turn.speaker === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    {turn.speaker === 'user' ? (turn.userAnswer || turn.text) : turn.text}
                  </div>
                </div>
              ))}
            </div>
            {isUserTurn && (
              <>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4"><div className="font-semibold text-blue-900">{currentTurn.prompt}</div></div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-4 min-h-[60px] flex flex-wrap gap-2 items-center">
                  {userSentence.length === 0 ? <span className="text-gray-400">Tap words below to build your sentence...</span> : userSentence.map((word, i) => <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">{word}</span>)}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {shuffleArray(currentTurn.wordBank).map((word, i) => <button key={i} onClick={() => addWordToSentence(word)} className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-semibold transition-all">{word}</button>)}
                </div>
                <div className="flex gap-3">
                  <button onClick={removeLastWord} disabled={userSentence.length === 0} className="px-6 py-2 bg-gray-200 rounded-lg font-semibold disabled:opacity-50">← Remove</button>
                  <button onClick={checkConversationAnswer} disabled={userSentence.length === 0} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50">Check Answer</button>
                </div>
                {conversationFeedback && <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${conversationFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{conversationFeedback}</div>}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // LESSON VIEW
  if (view === 'lesson' && currentLesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <nav className="bg-white shadow-sm p-3 sm:p-4 sticky top-0 z-40">
          <button onClick={() => setView('home')} className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base"><Home className="w-5 h-5" /> <span className="hidden sm:inline">Exit Lesson</span></button>
        </nav>
        <div className="max-w-4xl mx-auto p-3 sm:p-4">
          <div className="bg-white rounded-lg p-3 sm:p-4 mb-4">
            <div className="flex justify-between text-xs sm:text-sm mb-2"><span className="font-semibold truncate mr-2">{currentLesson.title}</span><span className="text-gray-600 flex-shrink-0">{lessonStage === 'intro' ? '1/4' : lessonStage === 'flashcards' ? '2/4' : lessonStage === 'match' ? '3/4' : '4/4'}</span></div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-blue-600 transition-all duration-300" style={{ width: lessonStage === 'intro' ? '25%' : lessonStage === 'flashcards' ? '50%' : lessonStage === 'match' ? '75%' : '100%' }} /></div>
          </div>

          {lessonStage === 'intro' && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Learn These Words</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {currentLesson.words.map((word, i) => (
                  <div key={i} className="border-2 border-blue-200 rounded-lg p-3 sm:p-4 bg-blue-50">
                    <div className="text-base sm:text-lg font-semibold text-gray-800">{word.en}</div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">{word.ca}</div>
                    <div className="text-xs sm:text-sm text-gray-600 italic">{word.pronunciation}</div>
                  </div>
                ))}
              </div>
              <button onClick={nextStage} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">Continue to Practice <ArrowRight className="w-5 h-5" /></button>
            </div>
          )}

          {lessonStage === 'flashcards' && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Practice with Flashcards</h2>
              <div className="max-w-md mx-auto">
                <div onClick={() => setFlipped(!flipped)} className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 sm:p-12 cursor-pointer shadow-lg active:scale-95 transition-all min-h-[220px] sm:min-h-[300px] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl sm:text-4xl font-bold mb-4">{flipped ? currentLesson.words[currentCardIndex].ca : currentLesson.words[currentCardIndex].en}</div>
                    {flipped && <div className="text-base sm:text-lg italic opacity-90">{currentLesson.words[currentCardIndex].pronunciation}</div>}
                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-sm opacity-75"><RotateCw className="w-4 h-4" /> Tap to flip</div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 flex justify-between items-center gap-2">
                  <button onClick={() => { setCurrentCardIndex(Math.max(0, currentCardIndex - 1)); setFlipped(false); }} disabled={currentCardIndex === 0} className="px-3 sm:px-6 py-2 bg-gray-200 rounded-lg font-semibold disabled:opacity-50 text-sm sm:text-base">Prev</button>
                  <span className="text-gray-600 text-sm sm:text-base">{currentCardIndex + 1} / {currentLesson.words.length}</span>
                  {currentCardIndex < currentLesson.words.length - 1 ? (
                    <button onClick={() => { setCurrentCardIndex(currentCardIndex + 1); setFlipped(false); }} className="px-3 sm:px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 text-sm sm:text-base">Next</button>
                  ) : (
                    <button onClick={nextStage} className="px-3 sm:px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 text-sm sm:text-base">Done</button>
                  )}
                </div>
              </div>
            </div>
          )}

          {lessonStage === 'match' && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Match the Pairs</h2>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-2xl mx-auto">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-gray-600 mb-2 text-sm sm:text-base">English</h3>
                  {currentLesson.words.map((word, i) => (
                    <button key={i} onClick={() => handleMatchClick(word, 'en')} disabled={matchedPairs.includes(word.ca)} className={`w-full p-2 sm:p-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${matchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : selectedPairs.some(p => p.word === word && p.type === 'en') ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'}`}>{word.en}</button>
                  ))}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-gray-600 mb-2 text-sm sm:text-base">Català</h3>
                  {shuffledCatalan.map((word, i) => (
                    <button key={i} onClick={() => handleMatchClick(word, 'ca')} disabled={matchedPairs.includes(word.ca)} className={`w-full p-2 sm:p-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${matchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : selectedPairs.some(p => p.word === word && p.type === 'ca') ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'}`}>{word.ca}</button>
                  ))}
                </div>
              </div>
              {matchedPairs.length === currentLesson.words.length && (
                <div className="mt-6 sm:mt-8 text-center">
                  <div className="mb-4 text-green-600 font-bold text-lg sm:text-xl">Perfect! All matched! 🎉</div>
                  <button onClick={nextStage} className="w-full max-w-md mx-auto block bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Continue to Quiz</button>
                </div>
              )}
            </div>
          )}

          {lessonStage === 'quiz' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Final Quiz</h2>
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Question {quizIndex + 1} / {currentLesson.words.length}</div>
                  <h3 className="text-xl font-semibold mb-4">What is "{currentLesson.words[quizIndex].en}" in Catalan?</h3>
                </div>
                <div className="space-y-3">
                  {quizOptions.map((option, i) => (
                    <button key={i} onClick={() => handleQuizAnswer(option)} disabled={quizFeedback !== ''} className="w-full p-4 rounded-lg font-semibold bg-gray-100 hover:bg-blue-100 transition-all text-left disabled:opacity-75">{option}</button>
                  ))}
                </div>
                {quizFeedback && <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${quizFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{quizFeedback}</div>}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // DASHBOARD
  // Secret tap for premium toggle (mobile testing) - tap title 5 times
  const handleSecretTap = () => {
    secretTapsRef.current += 1;
    if (secretTapTimerRef.current) clearTimeout(secretTapTimerRef.current);
    secretTapTimerRef.current = setTimeout(() => {
      if (secretTapsRef.current >= 5) {
        const newPremium = !premium;
        setPremium(newPremium);
        window.alert(newPremium ? '🔓 Premium ENABLED!' : '🔒 Premium DISABLED!');
      }
      secretTapsRef.current = 0;
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex justify-between items-center">
          <h1 onClick={handleSecretTap} className="text-lg sm:text-2xl font-bold text-blue-600 cursor-pointer select-none">Aprèn Català</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="mailto:aprencatalaapp@gmail.com?subject=Beta Feedback" className="text-xs sm:text-sm bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full hover:bg-purple-200 transition-colors">Feedback</a>
            <div className="text-right"><div className="text-xs text-gray-600">Points</div><div className="font-bold text-sm sm:text-lg">{score}</div></div>
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
          </div>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-3 sm:p-4">
        {/* Stats Cards - horizontal scroll on mobile */}
        <div className="flex sm:grid sm:grid-cols-3 gap-3 mb-4 sm:mb-6 overflow-x-auto pb-2 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0">
          <div onClick={() => !wasChallengeAttemptedToday() && startChallenge()} className={`bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg p-4 sm:p-6 text-white min-w-[200px] sm:min-w-0 flex-shrink-0 sm:flex-shrink ${!wasChallengeAttemptedToday() ? 'cursor-pointer active:scale-95 transition-all' : 'opacity-75'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl">{getTodayChallenge().icon}</span>
              {wasChallengeAttemptedToday() ? <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" /> : <Award className="w-6 h-6 sm:w-8 sm:h-8" />}
            </div>
            <div className="text-xs sm:text-sm opacity-90">Daily Challenge</div>
            <div className="text-base sm:text-lg font-bold mt-1">{getTodayChallenge().title}</div>
            {wasChallengeAttemptedToday() ? (
              wasChallengeCompletedSuccessfully() ? 
                <div className="mt-2 sm:mt-3 text-xs bg-white/20 rounded-full px-2 sm:px-3 py-1 inline-block">✓ Done!</div> :
                <div className="mt-2 sm:mt-3 text-xs bg-white/20 rounded-full px-2 sm:px-3 py-1 inline-block">✗ Try tomorrow</div>
            ) : <div className="mt-2 sm:mt-3 text-xs bg-white/20 rounded-full px-2 sm:px-3 py-1 inline-block">+{getTodayChallenge().points} pts →</div>}
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg p-4 sm:p-6 text-white min-w-[140px] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
            <div className="flex items-center justify-between mb-2"><Calendar className="w-6 h-6 sm:w-8 sm:h-8" /><span className="text-2xl sm:text-3xl font-bold">{reviewStreak}</span></div>
            <div className="text-xs sm:text-sm opacity-90">Day Streak</div>
            <div className="mt-2 sm:mt-3 text-xs opacity-75">Keep it up! 🔥</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg p-4 sm:p-6 text-white min-w-[140px] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
            <div className="flex items-center justify-between mb-2"><TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" /><span className="text-2xl sm:text-3xl font-bold">{wordHistory.length}</span></div>
            <div className="text-xs sm:text-sm opacity-90">Words Learned</div>
            <div className="mt-2 sm:mt-3 text-xs opacity-75">{completed.length} lessons</div>
          </div>
        </div>
        {/* Tab Navigation - icon only on mobile */}
        <div className="bg-white rounded-xl shadow-sm mb-4 sm:mb-6 sticky top-12 z-30">
          <div className="flex border-b">
            <button onClick={() => setDashboardTab('lessons')} className={`flex-1 py-3 font-semibold text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center gap-1 ${dashboardTab === 'lessons' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
              <BookOpen className="w-5 h-5" />
              <span className="hidden sm:inline">Lessons</span>
            </button>
            <button onClick={() => setDashboardTab('practice')} className={`flex-1 py-3 font-semibold text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center gap-1 ${dashboardTab === 'practice' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Practice</span>
            </button>
            <button onClick={() => setDashboardTab('progress')} className={`flex-1 py-3 font-semibold text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center gap-1 ${dashboardTab === 'progress' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
              <TrendingUp className="w-5 h-5" />
              <span className="hidden sm:inline">Progress</span>
            </button>
            <button onClick={() => setDashboardTab('achievements')} className={`flex-1 py-3 font-semibold text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center gap-1 ${dashboardTab === 'achievements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
              <Trophy className="w-5 h-5" />
              <span className="hidden sm:inline">Badges</span>
            </button>
          </div>
        </div>
        {dashboardTab === 'lessons' && (
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Lessons</h2>
            <div className="space-y-2 sm:space-y-3">
              {LESSONS.map((lesson) => {
                const locked = !lesson.free && !premium;
                const isComplete = completed.includes(lesson.id);
                return (
                  <div key={lesson.id} onClick={() => !locked && startLesson(lesson)} className={`border-2 rounded-lg p-4 transition-all ${locked ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60' : isComplete ? 'border-green-500 bg-green-50 cursor-pointer hover:bg-green-100' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'}`}>
                    <div className="flex items-center justify-between">
                      <div><div className="text-xs text-gray-500 uppercase mb-1">{lesson.module}</div><div className="font-semibold">{lesson.title}</div></div>
                      {locked ? <Lock className="w-6 h-6 text-gray-400" /> : isComplete ? <CheckCircle className="w-6 h-6 text-green-600" /> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {dashboardTab === 'progress' && (
          <div className="space-y-6">
            {/* Weekly Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">This Week</h2>
              <div className="flex justify-between items-end h-32 mb-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                  const today = new Date().getDay();
                  const adjustedToday = today === 0 ? 6 : today - 1;
                  const isToday = i === adjustedToday;
                  const isPast = i < adjustedToday;
                  const hasActivity = isPast || isToday;
                  const height = hasActivity ? Math.max(20, Math.random() * 80 + 20) : 0;
                  return (
                    <div key={day} className="flex flex-col items-center flex-1">
                      <div className="w-full max-w-[30px] mx-1 rounded-t-lg transition-all" style={{ height: `${height}%`, backgroundColor: isToday ? '#3B82F6' : isPast ? '#93C5FD' : '#E5E7EB' }} />
                      <div className={`text-xs mt-2 ${isToday ? 'font-bold text-blue-600' : 'text-gray-500'}`}>{day}</div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center text-sm text-gray-600 mt-4">
                {reviewStreak > 0 ? `🔥 ${reviewStreak} day streak! Keep it going!` : "Start your streak today!"}
              </div>
            </div>

            {/* Stats Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">{completed.length}</div>
                  <div className="text-sm text-gray-600">Lessons Done</div>
                  <div className="text-xs text-gray-400 mt-1">{Math.round((completed.length / 30) * 100)}% complete</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">{wordHistory.length}</div>
                  <div className="text-sm text-gray-600">Words Learned</div>
                  <div className="text-xs text-gray-400 mt-1">{wordHistory.length >= 100 ? 'Amazing!' : `${100 - wordHistory.length} to 100`}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">{completedConversations.length}</div>
                  <div className="text-sm text-gray-600">Conversations</div>
                  <div className="text-xs text-gray-400 mt-1">{10 - completedConversations.length} remaining</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600">{challengeHistory.filter(h => h.completed).length}</div>
                  <div className="text-sm text-gray-600">Challenges Won</div>
                  <div className="text-xs text-gray-400 mt-1">{challengeHistory.length} attempted</div>
                </div>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="text-4xl">
                  {completed.length === 0 ? '🌱' : completed.length < 10 ? '🌿' : completed.length < 20 ? '🌳' : '🏆'}
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {completed.length === 0 && "Ready to start your Catalan journey?"}
                    {completed.length > 0 && completed.length < 5 && "Great start! You're building a foundation."}
                    {completed.length >= 5 && completed.length < 10 && "You're making real progress!"}
                    {completed.length >= 10 && completed.length < 20 && "Impressive! Keep up the momentum!"}
                    {completed.length >= 20 && completed.length < 30 && "You're almost a Catalan expert!"}
                    {completed.length >= 30 && "🎉 You've completed all lessons!"}
                  </div>
                  <div className="text-sm opacity-90 mt-1">
                    {completed.length === 0 && "Complete your first lesson to begin."}
                    {completed.length > 0 && completed.length < 30 && `${30 - completed.length} lessons to go. You've got this!`}
                    {completed.length >= 30 && "Time to practice conversations and master your skills!"}
                  </div>
                </div>
              </div>
            </div>

            {/* Course Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Course Progress</h2>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall completion</span>
                  <span className="font-bold">{Math.round((completed.length / 30) * 100)}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all" style={{ width: `${(completed.length / 30) * 100}%` }} />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {['Basics', 'Daily Life', 'Living', 'Social', 'Review'].map((module) => {
                  const moduleCount = LESSONS.filter(l => l.module === module).length;
                  const moduleDone = LESSONS.filter(l => l.module === module && completed.includes(l.id)).length;
                  return (
                    <div key={module} className="text-center">
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-bold ${moduleDone === moduleCount ? 'bg-green-500 text-white' : moduleDone > 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                        {moduleDone}/{moduleCount}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{module}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {dashboardTab === 'practice' && (
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Conversation Practice</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Practice real conversations in Catalan. Unlock scenarios by completing lessons!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {CONVERSATIONS.map((conv) => {
                const unlocked = completed.includes(conv.unlockAfterLesson);
                const isComplete = completedConversations.includes(conv.id);
                return (
                  <div key={conv.id} onClick={() => unlocked && startConversation(conv)} className={`border-2 rounded-lg p-3 sm:p-4 transition-all active:scale-98 ${!unlocked ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60' : isComplete ? 'border-green-500 bg-green-50 cursor-pointer hover:bg-green-100' : 'border-gray-200 hover:border-green-400 hover:bg-green-50 cursor-pointer'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl">{conv.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-base truncate">{conv.title}</div>
                        <div className="text-xs text-gray-500">{conv.difficulty}</div>
                        {!unlocked && <div className="text-xs text-gray-500 mt-1">Complete lesson {conv.unlockAfterLesson} to unlock</div>}
                      </div>
                      {!unlocked ? <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" /> : isComplete ? <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" /> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {dashboardTab === 'achievements' && (
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Achievements</h2>
              <div className="text-xs sm:text-sm text-gray-600">{unlockedAchievements.length} / {ACHIEVEMENTS.length} unlocked</div>
            </div>
            {Object.entries(getAchievementsByCategory()).map(([category, achievements]) => (
              <div key={category} className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {achievements.map((achievement) => {
                    const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
                    const progress = getAchievementProgress(achievement, { completed, score, wordHistory, reviewStreak, challengeHistory, completedConversations });
                    return (
                      <div key={achievement.id} className={`border-2 rounded-lg p-3 sm:p-4 transition-all ${isUnlocked ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50 opacity-70'}`}>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className={`text-2xl sm:text-3xl ${isUnlocked ? '' : 'grayscale opacity-50'}`}>{achievement.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm sm:text-base flex items-center gap-1 sm:gap-2">
                              <span className="truncate">{achievement.title}</span>
                              {isUnlocked && <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />}
                            </div>
                            <div className="text-xs text-gray-500 truncate">{achievement.description}</div>
                            {!isUnlocked && (
                              <div className="mt-2">
                                <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-yellow-500 transition-all" style={{ width: `${progress.percentage}%` }} />
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{progress.current} / {progress.target}</div>
                              </div>
                            )}
                          </div>
                          <div className={`text-xs sm:text-sm font-bold flex-shrink-0 ${isUnlocked ? 'text-yellow-600' : 'text-gray-400'}`}>+{achievement.points}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {newAchievement && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-xl shadow-2xl animate-bounce z-50">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{newAchievement.icon}</span>
            <div>
              <div className="text-sm font-semibold opacity-90">Achievement Unlocked!</div>
              <div className="text-lg font-bold">{newAchievement.title}</div>
              <div className="text-xs opacity-90">+{newAchievement.points} points</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
