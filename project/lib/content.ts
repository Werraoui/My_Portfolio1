export type Language = 'en' | 'fr';

export type Project = {
  id: string;
  accent: 'cyan' | 'blue' | 'violet' | 'amber';
  categories: string[];
  tags: string[];
  repo?: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  detail: Record<Language, string>;
  result: Record<Language, string>;
};

export const projectCategories = ['All', 'Machine Learning', 'Generative AI', 'Data Engineering', 'Data Analytics'] as const;

export const projects: Project[] = [
  {
    id: 'churn',
    accent: 'cyan',
    categories: ['Machine Learning', 'Generative AI'],
    tags: ['LangGraph', 'SHAP', 'Streamlit', 'RAG'],
    repo: 'https://github.com/Werraoui/digital-twin-churn',
    title: {
      en: 'Customer Digital Twin & Churn Retention',
      fr: 'Jumeau numérique client & rétention',
    },
    category: { en: 'Machine Learning · GenAI', fr: 'Machine Learning · IA générative' },
    description: {
      en: 'A six-agent decision system that predicts churn, explains it, and rehearses retention before anyone is contacted.',
      fr: 'Un système à six agents qui prédit le churn, l’explique, et simule la rétention avant tout contact.',
    },
    detail: {
      en: 'LangGraph orchestrates data, sentiment, prediction, simulation, decision and RAG agents around a shared customer persona. Weighted logistic regression reaches ROC-AUC 0.8404 and 78.88% recall. SHAP opens the black box. A Streamlit cockpit runs what-if clones and ROI-aware offers, backed by 99 tests.',
      fr: 'LangGraph orchestre six agents autour d’un persona client. La régression logistique pondérée atteint un ROC-AUC de 0,8404 et un rappel de 78,88 %. SHAP ouvre la boîte noire. Un cockpit Streamlit simule des clones what-if et des offres orientées ROI, avec 99 tests.',
    },
    result: { en: 'ROC-AUC 0.8404 · Recall 78.88% · 99 tests', fr: 'ROC-AUC 0,8404 · Rappel 78,88 % · 99 tests' },
  },
  {
    id: 'career-platform',
    accent: 'violet',
    categories: ['Generative AI'],
    tags: ['FastAPI', 'React', 'RAG', 'Gemini'],
    repo: 'https://github.com/Werraoui/Carrer-Plateform',
    title: {
      en: 'Career Platform',
      fr: 'Career Platform',
    },
    category: { en: 'Generative AI · Product', fr: 'IA générative · Produit' },
    description: {
      en: 'An AI career cockpit: CV parsing, skill-gap scoring, ATS optimization, learning roadmaps and interview simulation.',
      fr: 'Un cockpit carrière IA : parsing de CV, écart de compétences, optimisation ATS, roadmaps et simulation d’entretien.',
    },
    detail: {
      en: 'Hybrid RAG with ChromaDB, SentenceTransformers and Gemini. Gap analysis against the market or a pasted offer. ATS scoring with spaCy. Weekly roadmaps with recursive prerequisites. Interview chatbot anchored to the real job. FastAPI + React + PostgreSQL/Supabase.',
      fr: 'RAG hybride avec ChromaDB, SentenceTransformers et Gemini. Analyse d’écart marché ou offre. Scoring ATS avec spaCy. Roadmaps hebdomadaires. Chatbot d’entretien ancré à l’offre. FastAPI + React + PostgreSQL/Supabase.',
    },
    result: { en: 'CV → gaps → roadmap → interview', fr: 'CV → écarts → roadmap → entretien' },
  },
  {
    id: 'avatar',
    accent: 'blue',
    categories: ['Machine Learning'],
    tags: ['FastAPI', 'Fuzzy C-Means', 'IoT', 'Flutter'],
    repo: 'https://github.com/Werraoui/Ashme_bracelet_Avatar',
    title: {
      en: 'AVATAR — Asthma Monitoring Twin',
      fr: 'AVATAR — Jumeau d’asthme',
    },
    category: { en: 'Health AI · IoT', fr: 'IA santé · IoT' },
    description: {
      en: 'A wearable twin that classifies respiratory risk in real time and escalates alerts while the patient sleeps.',
      fr: 'Un jumeau wearable qui classe le risque respiratoire en temps réel et escalade les alertes pendant le sommeil.',
    },
    detail: {
      en: 'A bracelet streams SpO₂, heart rate and respiratory rate to FastAPI. Fuzzy C-Means plus clinical rules label NORMAL / WARNING / CRITICAL. A three-stage alert cascade reaches emergency contacts by email and SMS until acknowledged. Flutter app, PostgreSQL, Docker.',
      fr: 'Un bracelet envoie SpO₂, rythme cardiaque et respiratoire vers FastAPI. Fuzzy C-Means et règles cliniques classent NORMAL / WARNING / CRITICAL. Une alerte en trois étages contacte les proches par email et SMS jusqu’à accusé. App Flutter, PostgreSQL, Docker.',
    },
    result: { en: 'Vitals → risk → escalating alert', fr: 'Signaux vitaux → risque → alerte' },
  },
  {
    id: 'warehouse',
    accent: 'blue',
    categories: ['Data Engineering'],
    tags: ['SQL Server', 'ETL', 'Medallion', 'Analytics'],
    repo: 'https://github.com/Werraoui/SQL-Data-Warehouse-Project',
    title: {
      en: 'Modern Data Warehouse & ETL',
      fr: 'Entrepôt de données moderne & ETL',
    },
    category: { en: 'Data Engineering', fr: 'Data Engineering' },
    description: {
      en: 'A medallion warehouse — the data backbone that makes analytics and downstream AI possible.',
      fr: 'Un entrepôt médallion — l’épine dorsale data qui rend l’analytics et l’IA aval possibles.',
    },
    detail: {
      en: 'SQL Server warehouse with Bronze / Silver / Gold layers: ingestion, cleaning, modeling and analytics. Built as a reusable, trustworthy data layer — the kind of foundation models actually need, not a one-off script.',
      fr: 'Entrepôt SQL Server en couches Bronze / Silver / Gold : ingestion, nettoyage, modélisation et analytics. Une couche data réutilisable et fiable — le type de fondation dont les modèles ont réellement besoin.',
    },
    result: { en: 'Bronze → Silver → Gold', fr: 'Bronze → Silver → Gold' },
  },
  {
    id: 'mill',
    accent: 'amber',
    categories: ['Machine Learning'],
    tags: ['XGBoost', 'Python', 'Feature Engineering'],
    repo: 'https://github.com/Werraoui/Broyeur_LaFargeHolcim',
    title: {
      en: 'LafargeHolcim Mill Overload Prediction',
      fr: 'Prédiction de surcharge — LafargeHolcim',
    },
    category: { en: 'Industrial AI', fr: 'IA industrielle' },
    description: {
      en: 'Predictive monitoring for a cement grinding mill, using process dynamics rather than a single snapshot.',
      fr: 'Supervision prédictive d’un broyeur ciment, fondée sur la dynamique du procédé plutôt que sur un instantané.',
    },
    detail: {
      en: 'Industrial mill data is cleaned, then engineered with pressure, gas-flow and feed deltas plus rolling means. An XGBoost classifier learns overload conditions from operational thresholds — a foundation for early-warning in grinding operations.',
      fr: 'Données industrielles nettoyées, puis enrichies (variations de pression, débit gazeux, alimentation, moyennes glissantes). Un classifieur XGBoost apprend les conditions de surcharge — une base d’alerte précoce pour le broyage.',
    },
    result: { en: 'Process signals → overload risk', fr: 'Signaux process → risque de surcharge' },
  },
  {
    id: 'rag',
    accent: 'cyan',
    categories: ['Generative AI'],
    tags: ['RAG', 'ChromaDB', 'Llama 3', 'Groq'],
    repo: 'https://github.com/Werraoui/Data_Extraction_from_docs_using_RAG_system',
    title: {
      en: 'Grounded RAG Question Answering',
      fr: 'Question-réponse RAG ancrée',
    },
    category: { en: 'Generative AI', fr: 'IA générative' },
    description: {
      en: 'A retrieval pipeline that answers from PDFs instead of inventing them.',
      fr: 'Un pipeline de retrieval qui répond à partir de PDF, sans inventer.',
    },
    detail: {
      en: 'PDF ingestion, chunking, Hugging Face embeddings, ChromaDB retrieval and Llama 3 generation via Groq. Built so answers stay tied to source documents.',
      fr: 'Ingestion PDF, chunking, embeddings Hugging Face, retrieval ChromaDB et génération Llama 3 via Groq. Les réponses restent liées aux documents sources.',
    },
    result: { en: 'Documents → grounded answers', fr: 'Documents → réponses ancrées' },
  },
  {
    id: 'pizza',
    accent: 'amber',
    categories: ['Data Analytics'],
    tags: ['SQL Server', 'Power BI', 'KPIs', 'EDA'],
    repo: 'https://github.com/Werraoui/Pizza_Sales_analysis-Power_Bi-',
    title: {
      en: 'Pizza Sales Intelligence',
      fr: 'Intelligence des ventes pizza',
    },
    category: { en: 'Data Analytics', fr: 'Data Analytics' },
    description: {
      en: 'From a restaurant database to a living Power BI cockpit of sales, mix and demand.',
      fr: 'D’une base restaurant à un cockpit Power BI vivant : ventes, mix, demande.',
    },
    detail: {
      en: 'SQL Server cleaning and transformation, KPI design, trend exploration and a Power BI dashboard for a real restaurant dataset — the path from raw tickets to decisions.',
      fr: 'Nettoyage SQL Server, conception de KPI, exploration des tendances et dashboard Power BI sur une vraie base restaurant — le chemin du ticket brut à la décision.',
    },
    result: { en: 'Tickets → KPIs → decisions', fr: 'Tickets → KPI → décisions' },
  },
  {
    id: 'helpdesk',
    accent: 'violet',
    categories: ['Data Analytics', 'Generative AI'],
    tags: ['Django', 'FastAPI', 'NLP', 'SQLite'],
    repo: 'https://github.com/Werraoui/OCP_HELPDESK',
    title: {
      en: 'OCP Helpdesk',
      fr: 'OCP Helpdesk',
    },
    category: { en: 'Full-stack · NLP', fr: 'Full-stack · NLP' },
    description: {
      en: 'An incident desk that classifies tickets with NLP instead of leaving them in a queue.',
      fr: 'Un helpdesk qui classifie les tickets par NLP plutôt que de les laisser en file.',
    },
    detail: {
      en: 'Django + FastAPI + SQLite incident platform built at OCP Group. An NLP chatbot supports classification and ticket creation so support work starts closer to the signal.',
      fr: 'Plateforme d’incidents Django + FastAPI + SQLite réalisée chez OCP. Un chatbot NLP aide à classer et ouvrir les tickets pour agir plus près du signal.',
    },
    result: { en: 'Incident → class → action', fr: 'Incident → classe → action' },
  },
  {
    id: 'career-gap',
    accent: 'blue',
    categories: ['Generative AI'],
    tags: ['NLP', 'Embeddings', 'LLM', 'ATS'],
    repo: 'https://github.com/Werraoui/CarrerGap_project',
    title: {
      en: 'Career Gap Analyzer',
      fr: 'Analyseur d’écart de carrière',
    },
    category: { en: 'Generative AI · Research', fr: 'IA générative · Recherche' },
    description: {
      en: 'The research kernel behind the career platform: parse a CV, compare it to the market, guide the next skill.',
      fr: 'Le noyau de recherche derrière la plateforme carrière : parser un CV, le comparer au marché, guider la suite.',
    },
    detail: {
      en: 'Document parsing, semantic embeddings and LLM guidance for learning paths, ATS-oriented rewriting and interview rehearsal. The experimental origin of Career Platform.',
      fr: 'Parsing documentaire, embeddings sémantiques et guidage LLM pour les parcours, la réécriture ATS et la répétition d’entretien. L’origine expérimentale de Career Platform.',
    },
    result: { en: 'CV → skills → learning path', fr: 'CV → compétences → parcours' },
  },
];

export const content = {
  en: {
    nav: ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'],
    hero: {
      eyebrow: 'Digital twin online · Neural core synced',
      title: 'Wiame Erraoui',
      statement: 'From data foundations to intelligent systems.',
      roles: ['AI Engineer', 'Data Engineer', 'ML Engineer', 'GenAI builder'],
      sub: 'Artificial Intelligence · Data Engineering · Machine Learning · Generative AI',
      copy: 'I build at the intersection of AI and data: reliable pipelines, explainable models, and agentic systems that rehearse a decision before it reaches the real world.',
      availability: 'Seeking a 6-month PFE in AI & Data Engineering · February 2027',
      primary: 'Enter the archive',
      secondary: 'Download CV',
      contact: 'Open a channel',
      twinLabel: 'WIAME.TWIN',
      twinStatus: 'ALIVE',
    },
    about: {
      label: '01 / Origin',
      title: 'Curiosity, engineered in the dark.',
      copy: 'Final-year Computer Engineering & Artificial Intelligence student at ENSA Safi. I treat AI and data as one craft: warehouses and ETL that can feed models, and models — from XGBoost to RAG agents — that stay grounded in those data systems.',
      note: 'Based in Morocco · Open to France & Morocco',
      twinTitle: 'The Twin',
      twinCopy: 'She is not decoration. She is a visual persona of the work: neural circuits over a data core. Hover her. She watches back.',
      cards: [
        ['02', 'Internships', 'Smart Automation Technologies · OCP Group'],
        ['09', 'Selected systems', 'From warehouses to generative agents'],
        ['26', 'Public repositories', 'A trail of experiments on GitHub'],
        ['FEB 27', 'PFE window', 'Six months to build something that lasts'],
      ],
    },
    experience: {
      label: '02 / Field notes',
      title: 'Built under real constraints.',
      items: [
        {
          date: 'JUL — SEP 2026',
          role: 'AI & Data Analytics Intern · PFA',
          company: 'Smart Automation Technologies',
          title: 'Intelligent multi-agent system for churn prediction and retention',
          body: 'Designed a customer digital twin at the AI–data seam: supervised learning, SHAP explainability, counterfactual simulation and generative agents, fed by a structured customer persona. The cockpit diagnoses a client, rehearses retention offers, and recommends the action with the best risk-to-cost ratio.',
          bullets: ['ROC-AUC 0.8404', 'Recall 78.88%', '6 LangGraph agents', '99 tests'],
        },
        {
          date: 'JUN — JUL 2025',
          role: 'Summer Intern',
          company: 'OCP Group',
          title: 'IT incident management platform',
          body: 'Shipped a helpdesk with Django, FastAPI and SQLite, then added an NLP chatbot so incidents could be classified by AI and opened without getting lost in the noise.',
          bullets: ['Django', 'FastAPI', 'SQLite', 'NLP chatbot'],
        },
      ],
    },
    projects: {
      label: '03 / Archive',
      title: 'Systems with a point of view.',
      intro: 'Selected work from GitHub — AI models, generative agents, data warehouses and products where intelligence stays tied to the data that feeds it.',
      filters: ['All', 'AI / ML', 'Generative AI', 'Data Engineering', 'Analytics'],
      githubCta: 'All 26 repositories',
    },
    skills: {
      label: '04 / Arsenal',
      title: 'A toolkit for AI and data, end to end.',
      groups: [
        { name: 'Programming', items: ['Python', 'SQL', 'PL/SQL', 'C', 'MATLAB', 'JavaScript', 'HTML', 'CSS'] },
        { name: 'Machine learning', items: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras', 'CNN', 'SHAP', 'Fuzzy C-Means'] },
        { name: 'NLP & GenAI', items: ['spaCy', 'Transformers', 'Hugging Face', 'Llama 3', 'RAG', 'LangGraph', 'Gemini'] },
        { name: 'Data engineering', items: ['ETL', 'Medallion warehouse', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'SQLite'] },
        { name: 'Data analytics', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'EDA', 'Statistics'] },
        { name: 'Build & ops', items: ['FastAPI', 'Django', 'REST', 'Streamlit', 'Docker', 'Git', 'Linux', 'Jira'] },
      ],
    },
    education: {
      label: '05 / Formation',
      title: 'Foundations that stay in motion.',
      entries: [
        ['2024 — 2027', 'Engineering degree in Computer Engineering & Artificial Intelligence', 'ENSA Safi · Expected'],
        ['2022 — 2024', 'Integrated preparatory cycle in Mathematics & Physics', 'ENSA Safi'],
        ['2025', 'Oracle Cloud Infrastructure AI Foundations Associate', 'Certification'],
        ['1337 School', 'C Piscine', 'Intensive algorithmic thinking & C'],
      ],
      languagesLabel: 'Languages',
      languages: [
        ['Arabic', 'Native'],
        ['French', 'Fluent'],
        ['English', 'Fluent'],
      ],
    },
    contact: {
      label: '06 / Channel',
      title: 'If the problem is still in the dark, write.',
      copy: 'I am looking for a PFE where AI and Data Engineering are one problem, not two tracks — production models, trustworthy data, explanation, and impact. The Twin is listening.',
      send: 'Transmit',
      name: 'Your name',
      email: 'Your email',
      message: 'The challenge',
      note: 'This opens your mail app with a draft — a quiet, reliable channel.',
      success: 'Draft ready in your mail app.',
    },
  },
  fr: {
    nav: ['Accueil', 'À propos', 'Expérience', 'Projets', 'Compétences', 'Formation', 'Contact'],
    hero: {
      eyebrow: 'Jumeau numérique en ligne · Noyau neural synchronisé',
      title: 'Wiame Erraoui',
      statement: 'Des fondations data aux systèmes intelligents.',
      roles: ['Ingénieure IA', 'Data Engineer', 'Ingénieure ML', 'IA générative'],
      sub: 'Intelligence artificielle · Data Engineering · Machine Learning · IA générative',
      copy: 'Je construis à l’intersection de l’IA et de la data : des pipelines fiables, des modèles explicables, et des systèmes agentiques qui répètent une décision avant le monde réel.',
      availability: 'À la recherche d’un stage PFE IA & Data Engineering · Février 2027',
      primary: 'Entrer dans l’archive',
      secondary: 'Télécharger le CV',
      contact: 'Ouvrir un canal',
      twinLabel: 'WIAME.TWIN',
      twinStatus: 'VIVANTE',
    },
    about: {
      label: '01 / Origine',
      title: 'La curiosité, forgée dans l’ombre.',
      copy: 'Étudiante en dernière année d’ingénierie informatique et intelligence artificielle à l’ENSA Safi. Je traite l’IA et la data comme un seul métier : des entrepôts et de l’ETL capables d’alimenter des modèles, et des modèles — d’XGBoost aux agents RAG — ancrés dans ces systèmes de données.',
      note: 'Basée au Maroc · Ouverte à la France et au Maroc',
      twinTitle: 'Le Twin',
      twinCopy: 'Elle n’est pas une décoration. C’est une persona visuelle du travail : circuits neuraux sur un noyau data. Survolez-la. Elle vous observe.',
      cards: [
        ['02', 'Stages', 'Smart Automation Technologies · OCP Group'],
        ['09', 'Systèmes choisis', 'Des entrepôts aux agents génératifs'],
        ['26', 'Dépôts publics', 'Une trace d’expériences sur GitHub'],
        ['FÉV 27', 'Fenêtre PFE', 'Six mois pour construire quelque chose qui dure'],
      ],
    },
    experience: {
      label: '02 / Carnets de terrain',
      title: 'Construit sous de vraies contraintes.',
      items: [
        {
          date: 'JUIL — SEPT 2026',
          role: 'Stagiaire IA & Data Analytics · PFA',
          company: 'Smart Automation Technologies',
          title: 'Système multi-agents intelligent pour la prédiction et la rétention du churn',
          body: 'Conception d’un jumeau numérique client à la jointure IA–data : apprentissage supervisé, explicabilité SHAP, simulation contrefactuelle et agents génératifs, alimentés par un persona client structuré. Le cockpit diagnostique, répète les offres de rétention et recommande l’action au meilleur ratio risque/coût.',
          bullets: ['ROC-AUC 0,8404', 'Rappel 78,88 %', '6 agents LangGraph', '99 tests'],
        },
        {
          date: 'JUIN — JUIL 2025',
          role: 'Stagiaire d’été',
          company: 'OCP Group',
          title: 'Plateforme de gestion des incidents IT',
          body: 'Helpdesk Django, FastAPI et SQLite, enrichi d’un chatbot NLP pour classer les incidents par IA et les ouvrir sans les laisser se perdre dans le bruit.',
          bullets: ['Django', 'FastAPI', 'SQLite', 'Chatbot NLP'],
        },
      ],
    },
    projects: {
      label: '03 / Archive',
      title: 'Des systèmes avec une vision.',
      intro: 'Une sélection depuis GitHub — modèles d’IA, agents génératifs, entrepôts de données et produits où l’intelligence reste liée aux données qui l’alimentent.',
      filters: ['Tous', 'IA / ML', 'IA générative', 'Data Engineering', 'Analytics'],
      githubCta: 'Les 26 dépôts',
    },
    skills: {
      label: '04 / Arsenal',
      title: 'Un toolkit pour l’IA et la data, de bout en bout.',
      groups: [
        { name: 'Programmation', items: ['Python', 'SQL', 'PL/SQL', 'C', 'MATLAB', 'JavaScript', 'HTML', 'CSS'] },
        { name: 'Machine learning', items: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras', 'CNN', 'SHAP', 'Fuzzy C-Means'] },
        { name: 'NLP & IA générative', items: ['spaCy', 'Transformers', 'Hugging Face', 'Llama 3', 'RAG', 'LangGraph', 'Gemini'] },
        { name: 'Data engineering', items: ['ETL', 'Entrepôt médallion', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'SQLite'] },
        { name: 'Data analytics', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'EDA', 'Statistiques'] },
        { name: 'Build & ops', items: ['FastAPI', 'Django', 'REST', 'Streamlit', 'Docker', 'Git', 'Linux', 'Jira'] },
      ],
    },
    education: {
      label: '05 / Formation',
      title: 'Des bases solides, toujours en mouvement.',
      entries: [
        ['2024 — 2027', 'Diplôme d’ingénieur en informatique & intelligence artificielle', 'ENSA Safi · Prévu'],
        ['2022 — 2024', 'Cycle préparatoire intégré en mathématiques & physique', 'ENSA Safi'],
        ['2025', 'Oracle Cloud Infrastructure AI Foundations Associate', 'Certification'],
        ['1337 School', 'C Piscine', 'Algorithmique intensive & programmation C'],
      ],
      languagesLabel: 'Langues',
      languages: [
        ['Arabe', 'Langue maternelle'],
        ['Français', 'Courant'],
        ['Anglais', 'Courant'],
      ],
    },
    contact: {
      label: '06 / Canal',
      title: 'Si le problème est encore dans l’ombre, écrivez.',
      copy: 'Je cherche un PFE où l’IA et le Data Engineering sont un seul problème, pas deux filières — des modèles en production, des données fiables, de l’explication, et de l’impact. Le Twin écoute.',
      send: 'Transmettre',
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Le challenge',
      note: 'Ceci ouvre votre application mail avec un brouillon — un canal calme et fiable.',
      success: 'Brouillon prêt dans votre application mail.',
    },
  },
} as const;
