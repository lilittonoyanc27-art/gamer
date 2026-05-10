import { Question } from './types';

export const GRAMMAR_QUESTIONS: Question[] = [
  {
    id: 1,
    sentence: "María es ___ inteligente.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Մարիան շատ խելացի է:",
    explanation: "Use 'muy' before adjectives."
  },
  {
    id: 2,
    sentence: "Tengo ___ trabajo hoy.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "mucho",
    translation: "Ես այսօր շատ աշխատանք ունեմ:",
    explanation: "Use 'mucho' with masculine singular nouns."
  },
  {
    id: 3,
    sentence: "Él es ___ amable.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Նա շատ բարյացակամ է:",
    explanation: "Use 'muy' with adjectives."
  },
  {
    id: 4,
    sentence: "Estoy ___ cansado.",
    options: ["muy", "mucho", "un poco", "pocos"],
    correctAnswer: "un poco",
    translation: "Մի փոքր հոգնած եմ:",
    explanation: "'Un poco' can be used with adjectives to mean 'a bit'."
  },
  {
    id: 5,
    sentence: "Él corre ___ rápido.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Նա շատ արագ է վազում:",
    explanation: "Use 'muy' with adverbs."
  },
  {
    id: 6,
    sentence: "Hay ___ gente en la calle.",
    options: ["muy", "mucha", "mucha", "mucho"],
    correctAnswer: "mucha",
    translation: "Փողոցում շատ մարդիկ կան:",
    explanation: "'Gente' is feminine singular."
  },
  {
    id: 7,
    sentence: "Estudio ___ por las noches.",
    options: ["muy", "mucho", "poca", "un poco"],
    correctAnswer: "mucho",
    translation: "Ես գիշերները շատ եմ սովորում:",
    explanation: "Use 'mucho' after verbs."
  },
  {
    id: 8,
    sentence: "Este libro es ___ interesante.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Այս գիրքը շատ հետաքրքիր է:",
    explanation: "'Muy' before adjectives."
  },
  {
    id: 9,
    sentence: "Tenemos ___ tiempo.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "poco",
    translation: "Մենք քիչ ժամանակ ունենք:",
    explanation: "'Poco' with masculine nouns."
  },
  {
    id: 10,
    sentence: "Él habla ___ español.",
    options: ["muy", "mucho", "un poco de", "poco"],
    correctAnswer: "un poco de",
    translation: "Նա մի փոքր իսպաներեն է խոսում:",
    explanation: "'Un poco de' followed by a noun."
  },
  {
    id: 11,
    sentence: "Ella es ___ simpática.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Նա շատ հմայիչ է:",
  },
  {
    id: 12,
    sentence: "Hay ___ coches aquí.",
    options: ["muy", "muchos", "poco", "muchas"],
    correctAnswer: "muchos",
    translation: "Այստեղ շատ մեքենաներ կան:",
  },
  {
    id: 13,
    sentence: "Leo ___ libros.",
    options: ["muy", "muchos", "poquito", "poco"],
    correctAnswer: "muchos",
    translation: "Շատ գրքեր եմ կարդում:",
  },
  {
    id: 14,
    sentence: "Hace ___ frío.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "mucho",
    translation: "Շատ ցուրտ է:",
  },
  {
    id: 15,
    sentence: "Me gusta ___ cantar.",
    options: ["muy", "mucho", "poca", "un poco"],
    correctAnswer: "mucho",
    translation: "Ես շատ եմ սիրում երգել:",
  },
  {
    id: 16,
    sentence: "Él es ___ alto.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Նա շատ բարձրահասակ է:",
  },
  {
    id: 17,
    sentence: "Tenemos ___ problemas.",
    options: ["muy", "muchos", "poco", "un poco"],
    correctAnswer: "muchos",
    translation: "Մենք շատ խնդիրներ ունենք:",
  },
  {
    id: 18,
    sentence: "Ella habla ___ despacio.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Նա շատ դանդաղ է խոսում:",
  },
  {
    id: 19,
    sentence: "Comemos ___ carne.",
    options: ["muy", "mucha", "poco", "un poco"],
    correctAnswer: "mucha",
    translation: "Մենք շատ միս ենք ուտում:",
  },
  {
    id: 20,
    sentence: "Tengo ___ dinero.",
    options: ["muy", "poco", "muchos", "un poco"],
    correctAnswer: "poco",
    translation: "Քիչ փող ունեմ:",
  },
  {
    id: 21,
    sentence: "La sopa está ___ caliente.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Ապուրը շատ տաք է:",
  },
  {
    id: 22,
    sentence: "Hay ___ flores en el jardín.",
    options: ["muy", "muchas", "poco", "un poco"],
    correctAnswer: "muchas",
    translation: "Այգում շատ ծաղիկներ կան:",
  },
  {
    id: 23,
    sentence: "Trabajas ___.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "mucho",
    translation: "Դու շատ ես աշխատում:",
  },
  {
    id: 24,
    sentence: "Quiero ___ de tarta.",
    options: ["muy", "mucho", "un poco", "poco"],
    correctAnswer: "un poco",
    translation: "Մի քիչ տորթ եմ ուզում:",
  },
  {
    id: 25,
    sentence: "El examen fue ___ difícil.",
    options: ["muy", "mucho", "un poco", "poco"],
    correctAnswer: "muy",
    translation: "Քննությունը շատ դժվար էր:",
  },
  {
    id: 26,
    sentence: "Tengo ___ ganas de verte.",
    options: ["muy", "muchas", "poco", "un poco"],
    correctAnswer: "muchas",
    translation: "Քեզ տեսնելու շատ ցանկություն ունեմ:",
  },
  {
    id: 27,
    sentence: "Él come ___.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "mucho",
    translation: "Նա շատ է ուտում:",
  },
  {
    id: 28,
    sentence: "España es ___ bonita.",
    options: ["muy", "mucho", "poco", "un poco"],
    correctAnswer: "muy",
    translation: "Իսպանիան շատ գեղեցիկ է:",
  },
  {
    id: 29,
    sentence: "Dormimos ___.",
    options: ["muy", "poco", "muchos", "muchas"],
    correctAnswer: "poco",
    translation: "Քիչ ենք քնում:",
  },
  {
    id: 30,
    sentence: "Entiendo ___ español.",
    options: ["muy", "un poco de", "mucho", "poco"],
    correctAnswer: "un poco de",
    translation: "Մի փոքր իսպաներեն հասկանում եմ:",
  }
];
