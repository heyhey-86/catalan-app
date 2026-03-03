"""
patch_lessons.py
Run from project root: python patch_lessons.py
Adds quickFire to all 20 lessons and storyMode to 6 lessons in src/lessons120.js
"""

import re

with open('src/lessons120.js', 'r', encoding='utf-8') as f:
    content = f.read()

# ─────────────────────────────────────────────────────────────
# STEP 1: Add 'quickFire' to all stages arrays
# ─────────────────────────────────────────────────────────────

def add_quickfire(m):
    arr = m.group(0)
    if 'quickFire' in arr:
        return arr
    return arr[:-1] + ", 'quickFire']"

content = re.sub(r"stages: \['intro'[^\]]+\]", add_quickfire, content)

# ─────────────────────────────────────────────────────────────
# STEP 2: Add storyMode stage + stageData to 6 lessons
# ─────────────────────────────────────────────────────────────

STORY_DATA = {

  129: {
    "stages_old": "stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire']",
    "stages_new": "stages: ['intro', 'flashcards', 'fillInTheBlank', 'storyMode', 'miniConversation', 'quickFire']",
    "anchor": "fillInTheBlank: [",
    "insert": """storyMode: {
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
    """,
  },

  131: {
    "stages_old": "stages: ['intro', 'flashcards', 'fillInTheBlank', 'sentenceOrdering', 'quickFire']",
    "stages_new": "stages: ['intro', 'flashcards', 'fillInTheBlank', 'storyMode', 'sentenceOrdering', 'quickFire']",
    "anchor": "fillInTheBlank: [",
    "insert": """storyMode: {
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
    """,
  },

  134: {
    "stages_old": "stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation', 'quickFire']",
    "stages_new": "stages: ['intro', 'flashcards', 'listenAndType', 'storyMode', 'miniConversation', 'quickFire']",
    "anchor": "listenAndType: [",
    "insert": """storyMode: {
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
    """,
  },

  137: {
    "stages_old": "stages: ['intro', 'flashcards', 'listenAndType', 'errorCorrection', 'quickFire']",
    "stages_new": "stages: ['intro', 'flashcards', 'listenAndType', 'storyMode', 'errorCorrection', 'quickFire']",
    "anchor": "listenAndType: [",
    "insert": """storyMode: {
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
    """,
  },

  138: {
    "stages_old": "stages: ['intro', 'flashcards', 'fillInTheBlank', 'miniConversation', 'quickFire']",
    "stages_new": "stages: ['intro', 'flashcards', 'fillInTheBlank', 'storyMode', 'miniConversation', 'quickFire']",
    "anchor": "fillInTheBlank: [",
    "insert": """storyMode: {
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
    """,
  },

  139: {
    "stages_old": "stages: ['intro', 'flashcards', 'listenAndType', 'miniConversation', 'quickFire']",
    "stages_new": "stages: ['intro', 'flashcards', 'listenAndType', 'storyMode', 'miniConversation', 'quickFire']",
    "anchor": "listenAndType: [",
    "insert": """storyMode: {
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
    """,
  },

}

for lesson_id, data in STORY_DATA.items():
    # Update stages line
    content = content.replace(data["stages_old"], data["stages_new"], 1)

    # Insert storyMode stageData before the anchor, within the correct lesson
    lesson_marker = f"id: {lesson_id},"
    pos_lesson = content.find(lesson_marker)
    if pos_lesson == -1:
        print(f"WARNING: Could not find lesson {lesson_id}")
        continue

    pos_anchor = content.find(data["anchor"], pos_lesson)
    if pos_anchor == -1:
        print(f"WARNING: Could not find anchor for lesson {lesson_id}")
        continue

    content = content[:pos_anchor] + data["insert"] + content[pos_anchor:]
    print(f"OK Lesson {lesson_id}: storyMode added")

with open('src/lessons120.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\nDone! lessons120.js updated.")
print("quickFire: all 20 lessons")
print("storyMode: L129, L131, L134, L137, L138, L139")
print("\nNext: npm run build")
