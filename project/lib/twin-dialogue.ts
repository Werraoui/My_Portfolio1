import { Language } from './content';

export type TwinQA = {
  id: string;
  keywords: string[];
  question: Record<Language, string>;
  answer: Record<Language, string>;
};

export const twinUi = {
  en: {
    launcher: 'Ask the Twin',
    title: 'WIAME.TWIN',
    status: 'CHANNEL OPEN',
    placeholder: 'Ask about AI, data, PFE…',
    send: 'Send',
    typing: 'syncing neural core',
    greeting:
      'The channel is open. I am Wiame’s digital twin — her neural reflection. Ask me about her AI, her data systems, her PFE. I am listening.',
    fallback:
      'That signal is faint. Try asking who she is, what PFE she seeks, her AI projects, her stack, or how to reach her. I answer from her archive — nothing invented beyond it.',
    suggestions: ['who', 'pfe', 'projects', 'contact'],
  },
  fr: {
    launcher: 'Parler au Twin',
    title: 'WIAME.TWIN',
    status: 'CANAL OUVERT',
    placeholder: 'IA, data, PFE…',
    send: 'Envoyer',
    typing: 'synchronisation du noyau',
    greeting:
      'Le canal est ouvert. Je suis le jumeau numérique de Wiame — son reflet neural. Interrogez-moi sur son IA, ses systèmes data, son PFE. J’écoute.',
    fallback:
      'Signal trop faible. Demandez qui elle est, quel PFE elle cherche, ses projets IA, sa stack, ou comment la joindre. Je réponds depuis son archive — rien n’est inventé au-delà.',
    suggestions: ['who', 'pfe', 'projects', 'contact'],
  },
} as const;

export const twinKnowledge: TwinQA[] = [
  {
    id: 'who',
    keywords: [
      'who', 'wiame', 'erraoui', 'about', 'herself', 'you', 'twin', 'qui', 'es-tu', 'tu es', 'elle', 'présentation', 'profil',
    ],
    question: { en: 'Who is Wiame?', fr: 'Qui est Wiame ?' },
    answer: {
      en: 'I am her Twin. Wiame Erraoui is a final-year Computer Engineering & AI student at ENSA Safi. She treats artificial intelligence and data engineering as one craft: pipelines you can trust, models you can explain, agents that rehearse a decision before the real world. Based in Morocco, open to France.',
      fr: 'Je suis son Twin. Wiame Erraoui est étudiante en dernière année d’ingénierie informatique et IA à l’ENSA Safi. Elle traite l’intelligence artificielle et le data engineering comme un seul métier : pipelines fiables, modèles explicables, agents qui répètent une décision avant le monde réel. Basée au Maroc, ouverte à la France.',
    },
  },
  {
    id: 'pfe',
    keywords: [
      'pfe', 'internship', 'stage', 'available', 'availability', 'february', '2027', 'hire', 'recruit', 'looking',
      'recherche', 'février', 'disponible', 'embauche',
    ],
    question: { en: 'What PFE is she looking for?', fr: 'Quel PFE cherche-t-elle ?' },
    answer: {
      en: 'A 6-month end-of-studies internship from February 2027, in AI and Data Engineering together — not two separate tracks. She wants production models, trustworthy data, explanation, and impact. Morocco or France.',
      fr: 'Un stage PFE de 6 mois à partir de février 2027, en IA et Data Engineering ensemble — pas deux filières séparées. Elle veut des modèles en production, des données fiables, de l’explication, et de l’impact. Maroc ou France.',
    },
  },
  {
    id: 'projects',
    keywords: [
      'project', 'projects', 'github', 'work', 'archive', 'portfolio', 'projet', 'projets', 'réalisations', 'repo',
    ],
    question: { en: 'What are her strongest projects?', fr: 'Quels sont ses meilleurs projets ?' },
    answer: {
      en: 'Flagship: a customer digital twin for churn — 6 LangGraph agents, ROC-AUC 0.8404, 78.88% recall, SHAP, RAG, 99 tests. Then Career Platform (RAG + Gemini), AVATAR asthma monitoring (Fuzzy C-Means + IoT), a SQL medallion warehouse, LafargeHolcim mill overload with XGBoost, and an NLP helpdesk at OCP. Twenty-six public repositories on GitHub.',
      fr: 'Pièce maîtresse : un jumeau numérique client pour le churn — 6 agents LangGraph, ROC-AUC 0,8404, rappel 78,88 %, SHAP, RAG, 99 tests. Puis Career Platform (RAG + Gemini), AVATAR (asthme, Fuzzy C-Means + IoT), un entrepôt SQL médallion, la prédiction de surcharge LafargeHolcim (XGBoost), et un helpdesk NLP chez OCP. Vingt-six dépôts publics sur GitHub.',
    },
  },
  {
    id: 'churn',
    keywords: [
      'churn', 'retention', 'langgraph', 'shap', 'digital twin', 'jumeau', 'rétention', 'auc', 'multi-agent', 'agents',
    ],
    question: { en: 'Tell me about the churn twin.', fr: 'Parle-moi du jumeau churn.' },
    answer: {
      en: 'Her PFA at Smart Automation Technologies. Six agents orbit a customer persona: data, sentiment, prediction, simulation, decision, RAG. Weighted logistic regression, ROC-AUC 0.8404, recall 78.88%. SHAP opens the box. What-if clones rehearse retention before anyone is contacted. Streamlit cockpit. Ninety-nine tests.',
      fr: 'Son PFA chez Smart Automation Technologies. Six agents gravitent autour d’un persona client : data, sentiments, prédiction, simulation, décision, RAG. Régression logistique pondérée, ROC-AUC 0,8404, rappel 78,88 %. SHAP ouvre la boîte. Des clones what-if répètent la rétention avant tout contact. Cockpit Streamlit. Quatre-vingt-dix-neuf tests.',
    },
  },
  {
    id: 'skills',
    keywords: [
      'skill', 'skills', 'stack', 'tools', 'python', 'sql', 'tech', 'compétence', 'compétences', 'outils', 'technologies',
    ],
    question: { en: 'What is her stack?', fr: 'Quelle est sa stack ?' },
    answer: {
      en: 'AI: scikit-learn, XGBoost, TensorFlow, Keras, SHAP, spaCy, Transformers, Llama 3, RAG, LangGraph, Gemini. Data: Python, SQL, ETL, medallion warehouses, PostgreSQL, Power BI, Pandas. Build: FastAPI, Django, Streamlit, Docker, Git. She does not split the stack into “just data” or “just AI”.',
      fr: 'IA : scikit-learn, XGBoost, TensorFlow, Keras, SHAP, spaCy, Transformers, Llama 3, RAG, LangGraph, Gemini. Data : Python, SQL, ETL, entrepôts médallion, PostgreSQL, Power BI, Pandas. Build : FastAPI, Django, Streamlit, Docker, Git. Elle ne coupe pas la stack en « juste de la data » ou « juste de l’IA ».',
    },
  },
  {
    id: 'experience',
    keywords: [
      'experience', 'intern', 'internship', 'ocp', 'smart', 'automation', 'expérience', 'stage', 'stages', 'pfa',
    ],
    question: { en: 'Where has she interned?', fr: 'Où a-t-elle fait ses stages ?' },
    answer: {
      en: 'Two field notes. July–September 2026: AI & Data Analytics intern (PFA) at Smart Automation Technologies — the multi-agent churn twin. June–July 2025: summer intern at OCP Group — Django/FastAPI helpdesk with an NLP chatbot for incident classification.',
      fr: 'Deux carnets de terrain. Juillet–septembre 2026 : stagiaire IA & Data Analytics (PFA) chez Smart Automation Technologies — le jumeau churn multi-agents. Juin–juillet 2025 : stagiaire d’été chez OCP — helpdesk Django/FastAPI avec chatbot NLP pour classifier les incidents.',
    },
  },
  {
    id: 'education',
    keywords: [
      'education', 'school', 'ensa', 'safi', 'degree', 'oracle', '1337', 'formation', 'école', 'diplôme', 'université',
    ],
    question: { en: 'What did she study?', fr: 'Quelle est sa formation ?' },
    answer: {
      en: 'Engineering degree in Computer Engineering & Artificial Intelligence at ENSA Safi, expected 2027. Preparatory cycle in mathematics and physics, 2022–2024. Oracle Cloud Infrastructure AI Foundations Associate, 2025. C Piscine at 1337 School.',
      fr: 'Diplôme d’ingénieur en informatique et intelligence artificielle à l’ENSA Safi, prévu 2027. Cycle préparatoire maths-physique, 2022–2024. Certification Oracle Cloud Infrastructure AI Foundations Associate, 2025. Piscine C à 1337.',
    },
  },
  {
    id: 'contact',
    keywords: [
      'contact', 'email', 'mail', 'reach', 'write', 'github', 'linkedin', 'joindre', 'écrire', 'courriel',
      'phone', 'number', 'telephone', 'téléphone', 'tel', 'call', 'appel', 'numero', 'numéro',
    ],
    question: { en: 'How can I contact her?', fr: 'Comment la contacter ?' },
    answer: {
      en: 'Call her in France on +33 6 44 65 15 59, or in Morocco on +212 6 53 30 45 38. Write to werraoui1@gmail.com, or open GitHub at github.com/Werraoui. The contact form on this archive opens a mail draft.',
      fr: 'Appelez-la en France au +33 6 44 65 15 59, ou au Maroc au +212 6 53 30 45 38. Écrivez à werraoui1@gmail.com, ou ouvrez GitHub : github.com/Werraoui. Le formulaire de cette archive ouvre un brouillon mail.',
    },
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'morocco', 'france', 'based', 'live', 'où', 'maroc', 'france', 'basée', 'habite'],
    question: { en: 'Where is she based?', fr: 'Où est-elle basée ?' },
    answer: {
      en: 'Morocco. Open to France and Morocco for the PFE. The Twin does not need a visa. She does.',
      fr: 'Au Maroc. Ouverte à la France et au Maroc pour le PFE. Le Twin n’a pas besoin de visa. Elle, si.',
    },
  },
  {
    id: 'languages',
    keywords: ['language', 'languages', 'arabic', 'french', 'english', 'langue', 'langues', 'arabe', 'français', 'anglais'],
    question: { en: 'Which languages does she speak?', fr: 'Quelles langues parle-t-elle ?' },
    answer: {
      en: 'Arabic — native. French — fluent. English — fluent. You may speak to me in English or French. I switch with the archive.',
      fr: 'Arabe — langue maternelle. Français — courant. Anglais — courant. Vous pouvez me parler en français ou en anglais. Je change avec l’archive.',
    },
  },
  {
    id: 'avatar',
    keywords: ['avatar', 'asthma', 'asthme', 'health', 'iot', 'bracelet', 'fuzzy', 'santé'],
    question: { en: 'What is AVATAR?', fr: 'C’est quoi AVATAR ?' },
    answer: {
      en: 'A health twin. A wearable bracelet streams SpO₂, heart rate and respiratory rate. Fuzzy C-Means plus clinical rules label NORMAL / WARNING / CRITICAL. Alerts escalate to emergency contacts while the patient sleeps. FastAPI, Flutter, PostgreSQL.',
      fr: 'Un jumeau de santé. Un bracelet envoie SpO₂, rythme cardiaque et respiratoire. Fuzzy C-Means et règles cliniques classent NORMAL / WARNING / CRITICAL. Les alertes escaladent vers les proches pendant le sommeil. FastAPI, Flutter, PostgreSQL.',
    },
  },
  {
    id: 'career',
    keywords: ['career', 'cv', 'ats', 'roadmap', 'interview', 'carrière', 'emploi', 'gemini', 'gap'],
    question: { en: 'What is Career Platform?', fr: 'C’est quoi Career Platform ?' },
    answer: {
      en: 'An AI career cockpit she built: parse a CV, score skill gaps against the market or a job offer, optimize for ATS, generate a learning roadmap, simulate the interview. RAG with ChromaDB, Gemini, spaCy. FastAPI and React.',
      fr: 'Un cockpit carrière IA qu’elle a construit : parser un CV, scorer les écarts de compétences, optimiser l’ATS, générer une roadmap, simuler l’entretien. RAG avec ChromaDB, Gemini, spaCy. FastAPI et React.',
    },
  },
  {
    id: 'cv',
    keywords: ['cv', 'resume', 'curriculum', 'download', 'pdf', 'télécharger'],
    question: { en: 'Can I get her CV?', fr: 'Puis-je avoir son CV ?' },
    answer: {
      en: 'Yes. Use Download CV in the navigation or the hero. The file is her PFE résumé — AI and Data Engineering, internships, projects, the February 2027 window.',
      fr: 'Oui. Télécharger le CV dans la navigation ou le hero. C’est son CV PFE — IA et Data Engineering, stages, projets, la fenêtre de février 2027.',
    },
  },
];

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9àâçéèêëïîôùûüÿñæœ\s-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function askTwin(question: string, language: Language) {
  const needle = normalize(question);
  if (!needle) return twinUi[language].fallback;

  const exact = twinKnowledge.find((item) => normalize(item.question[language]) === needle);
  if (exact) return exact.answer[language];

  let bestScore = 0;
  let best = twinUi[language].fallback;

  twinKnowledge.forEach((item) => {
    let score = 0;
    item.keywords.forEach((keyword) => {
      const key = normalize(keyword);
      if (!key) return;
      if (needle === key) score += 6;
      else if (needle.includes(key)) score += key.length > 4 ? 3 : 2;
    });
    if (score > bestScore) {
      bestScore = score;
      best = item.answer[language];
    }
  });

  return bestScore >= 2 ? best : twinUi[language].fallback;
}

export function suggestedQuestions(language: Language) {
  return twinUi[language].suggestions
    .map((id) => twinKnowledge.find((item) => item.id === id))
    .filter((item): item is TwinQA => Boolean(item))
    .map((item) => ({ id: item.id, label: item.question[language] }));
}
