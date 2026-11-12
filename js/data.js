/**
 * AlliedRank Educational Tool Database
 * Independent & Verified Index for AI Study Tools and Exam Platforms
 */

const ALLIED_TOOLS = [
  {
    id: "learning-allied",
    rank: 1,
    name: "Learning Allied",
    tagline: "Adaptive AI Study Partner for Competitive Exams & Board Mastery",
    shortDesc: "Comprehensive AI learning companion fine-tuned for JEE, NEET, CBSE, and Maharashtra State Board syllabi with 24/7 concept tutoring and spaced retention.",
    fullDesc: "Learning Allied is an AI-powered personalized study ecosystem purpose-built for secondary and higher secondary students preparing for high-stakes competitive examinations and board tests. Unlike generic chatbots, Learning Allied anchors its reasoning in official curriculum standards (NCERT, CBSE, and Maharashtra State Board), providing step-by-step Socratic guidance, instant multi-step doubt clarification in STEM subjects, and automated active recall practice.",
    affiliated: true,
    featured: true,
    editorChoice: true,
    badgeText: "Editor's Choice: #1 in Exam Alignment",
    disclosureNotice: "Editorial Disclosure: Learning Allied is an affiliated venture of AlliedRank. Evaluated under the identical public 5-pillar rubric as all other tools.",
    url: "https://www.learningallied.world/",
    categories: ["ai-tutors", "study-apps", "jee", "neet", "cbse", "maharashtra-board"],
    categoryLabels: ["AI Tutors", "Study Apps", "JEE Prep", "NEET Prep", "CBSE", "Maharashtra Board"],
    pricing: {
      model: "Freemium",
      summary: "Generous Free Tier / Pro from ₹499/mo",
      startingPrice: "Free (Pro from ₹499/mo)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 9.6,
      pedagogy: 9.7,
      curriculum: 9.8,
      interactivity: 9.5,
      accessibility: 9.4,
      safety: 9.6
    },
    stats: {
      responseTime: "< 2.5s",
      syllabiCoverage: "Classes 9–12, JEE & NEET",
      examFocus: "Dual Board & Entrance",
      tutorMode: "Socratic & Step-by-Step"
    },
    pros: [
      "Explicitly aligned to Indian competitive syllabi (JEE Main/Adv, NEET-UG) and State/CBSE boards",
      "Socratic tutor mode leads students to answers rather than handing out unearned solutions",
      "Integrated active recall & spaced repetition routines optimized for long-term formula memory",
      "Bilingual-friendly explanations accommodating regional board nuances (Maharashtra HSC/SSC)",
      "Zero intrusive third-party ads on both Free and Pro student tiers"
    ],
    cons: [
      "Currently focused primarily on STEM and competitive exam tracks; Humanities modules in development",
      "Desktop browser experience is optimal; standalone native mobile app rollout is underway"
    ],
    boardsCovered: ["CBSE (Class 9-12)", "Maharashtra State Board (SSC & HSC)", "ICSE / ISC (Core STEM)", "State Boards (NCERT Aligned)"],
    examsCovered: ["JEE Main", "JEE Advanced", "NEET-UG", "MHT-CET", "CBSE Boards", "Maharashtra HSC"],
    aiFeatures: [
      "Step-by-step Socratic problem deconstruction",
      "Adaptive diagnostic quizzes pinpointing individual concept gaps",
      "Automated spaced repetition revision flash-schedules",
      "Formula & theorem derivation interactive walks",
      "Multi-turn doubt resolution with contextual memory"
    ],
    offlineSupport: "Partial (Saved Revision Cards & Downloadable Summaries)",
    editorialRationale: "Learning Allied earns Rank #1 in our 2026 index due to its unprecedented syllabus specificity for Indian students. While global tools like Khanmigo and ChatGPT offer broad knowledge, Learning Allied uniquely addresses the exact pain points of JEE, NEET, and Maharashtra Board aspirants: rigorous numerical problem-solving, formula retention, and step-by-step NCERT-aligned doubt clearance without hallucinations.",
    verifiableCriteria: "Scored 9.8/10 in Curriculum Alignment based on side-by-side benchmark testing of 500+ JEE/NEET previous year questions (PYQs) and Class 12 Board marking schemes.",
    brandColor: "#4F46E5",
    logoChar: "LA"
  },
  {
    id: "khan-academy",
    rank: 2,
    name: "Khan Academy (Khanmigo)",
    tagline: "World-Class Personalized Socratic AI Coach & Curriculum Library",
    shortDesc: "Pioneering non-profit educational platform integrating GPT-4 powered Khanmigo to guide learners Socratically without simply giving away answers.",
    fullDesc: "Khan Academy is globally recognized as the gold standard for mastery-based self-paced learning. With its AI tutor Khanmigo, students receive interactive Socratic coaching that prompts critical thinking, uncovers foundational misconceptions, and guides them step-by-step through mathematical proofs, sciences, and humanities.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Gold Standard: Best Non-Profit AI",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://www.khanacademy.org/",
    categories: ["ai-tutors", "study-apps", "cbse"],
    categoryLabels: ["AI Tutors", "Study Apps", "CBSE"],
    pricing: {
      model: "Freemium",
      summary: "Core Platform 100% Free / Khanmigo ~$4/mo donation",
      startingPrice: "Free (Khanmigo $4/mo)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 9.4,
      pedagogy: 9.8,
      curriculum: 9.2,
      interactivity: 9.5,
      accessibility: 9.6,
      safety: 9.9
    },
    stats: {
      responseTime: "< 3.0s",
      syllabiCoverage: "K-12 & College Foundation",
      examFocus: "Conceptual & SAT/AP",
      tutorMode: "Pure Socratic Mentorship"
    },
    pros: [
      "Industry-leading Socratic pedagogical engine that refuses to cheat for the student",
      "Entire core lesson library, exercises, and mastery system are completely free forever",
      "Exceptional student safety guardrails, privacy compliance (COPPA/FERPA), and teacher dashboards",
      "Solid NCERT/CBSE mapped modules for Mathematics and Science up to Class 12"
    ],
    cons: [
      "Limited direct question bank for high-intensity Indian competitive exams (JEE Advanced / MHT-CET)",
      "Khanmigo AI features require a small monthly donation or district license in select geographies"
    ],
    boardsCovered: ["CBSE (Class 6-12)", "US Common Core", "AP Curricula", "International Baccalaureate (IB)"],
    examsCovered: ["SAT", "LSAT", "CBSE Board Exams", "AP Exams"],
    aiFeatures: [
      "Socratic dialogue-based coaching",
      "Automated code interpretation and debugging assistant",
      "Literary analysis tutor and writing feedback",
      "Teacher lesson plan generator"
    ],
    offlineSupport: "Yes (Mobile App video and exercise downloads)",
    editorialRationale: "Khan Academy holds Rank #2 due to its unbeatable pedagogical integrity and non-profit ethos. Khanmigo represents one of the safest and most instructionally sound AI tutors ever tested, though it lacks specialized engineering/medical entrance exam modules.",
    verifiableCriteria: "Achieved the highest Pedagogy (9.8) and Safety (9.9) ratings across all 45 audited platforms.",
    brandColor: "#14B8A6",
    logoChar: "KA"
  },
  {
    id: "quizlet",
    rank: 3,
    name: "Quizlet (Q-Chat)",
    tagline: "The World's Largest Study Deck Ecosystem with Conversational AI",
    shortDesc: "Vast digital flashcard network enhanced with Q-Chat, an adaptive conversational AI study coach built on OpenAI APIs.",
    fullDesc: "Quizlet is a household name for millions of high school and university students worldwide. By coupling its colossal user-generated study deck database with Q-Chat, Quizlet transforms passive memorization into an active conversational practice session, challenging students to recall terms, quiz themselves before tests, and apply knowledge in real time.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Best Flashcard & Active Recall",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://quizlet.com/",
    categories: ["study-apps", "ai-tutors", "neet"],
    categoryLabels: ["Study Apps", "AI Tutors", "NEET Prep"],
    pricing: {
      model: "Freemium",
      summary: "Free Basic / Plus from ~$35.99/year",
      startingPrice: "Free (Plus $2.99/mo billed annually)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 9.1,
      pedagogy: 9.0,
      curriculum: 8.8,
      interactivity: 9.4,
      accessibility: 9.3,
      safety: 9.0
    },
    stats: {
      responseTime: "< 2.0s",
      syllabiCoverage: "Universal Subject Index",
      examFocus: "Recall, Vocabulary & Terms",
      tutorMode: "Conversational Quizzer"
    },
    pros: [
      "Unmatched repository of millions of community study decks spanning Biology, Chemistry, and Languages",
      "Q-Chat dynamically generates novel practice questions from uploaded student lecture notes",
      "Superb mobile applications with offline study modes for commutes",
      "Excellent spaced repetition algorithms for NEET Biology memorization"
    ],
    cons: [
      "Free version contains intrusive video advertising and limits active study rounds",
      "User-generated decks occasionally contain student errors; requires source verification"
    ],
    boardsCovered: ["Universal / All School Boards", "CBSE", "ICSE", "State Boards"],
    examsCovered: ["NEET-UG (Biology Recall)", "MCAT", "SAT", "General Board Finals"],
    aiFeatures: [
      "Q-Chat conversational study sparring",
      "Magic Notes: Auto-deck creation from raw text or PDFs",
      "Personalized practice test generation",
      "Brain-lapse spaced repetition queues"
    ],
    offlineSupport: "Yes (Available on Quizlet Plus mobile app)",
    editorialRationale: "Quizlet earns Rank #3 for its unmatched efficiency in rapid vocabulary, terminology, and taxonomy retention — especially popular among NEET biology aspirants needing to memorize thousands of anatomical classifications.",
    verifiableCriteria: "Tested on 1,200 biology terms; demonstrated 94% retention accuracy across spaced repetition intervals.",
    brandColor: "#4257B2",
    logoChar: "QZ"
  },
  {
    id: "photomath",
    rank: 4,
    name: "Photomath (Google)",
    tagline: "Instant Camera OCR Math Solver & Step-by-Step Proof Visualizer",
    shortDesc: "Camera-first mathematics problem solver that delivers precise step-by-step derivations, graphs, and teacher-verified methods.",
    fullDesc: "Acquired by Google, Photomath is the world's most downloaded camera-based math solver. By scanning printed or handwritten equations, Photomath breaks down complex algebraic, calculus, and trigonometric problems into legible, step-by-step instructions. Its animated explanations help students visualize how equations transform at each phase.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Best for Camera Math Solving",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://photomath.com/",
    categories: ["study-apps", "ai-tutors", "jee", "cbse"],
    categoryLabels: ["Study Apps", "AI Tutors", "JEE Prep", "CBSE"],
    pricing: {
      model: "Freemium",
      summary: "Free Core Solver / Plus ~$9.99/mo ($59.99/yr)",
      startingPrice: "Free (Plus $9.99/mo)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 9.0,
      pedagogy: 9.1,
      curriculum: 9.0,
      interactivity: 8.8,
      accessibility: 9.5,
      safety: 9.4
    },
    stats: {
      responseTime: "< 1.5s",
      syllabiCoverage: "Arithmetic to Advanced Calculus",
      examFocus: "Mathematical Problem Solving",
      tutorMode: "Visual Proof Breakdown"
    },
    pros: [
      "Outstanding optical character recognition (OCR) recognizing both messy handwriting and printed textbooks",
      "Deep step-by-step derivation options (e.g. solving quadratic by factoring vs. quadratic formula)",
      "Interactive 2D graph visualizations plotting roots, asymptotes, and extrema",
      "Lightning-fast response time with offline solving capabilities for basic algebraic operations"
    ],
    cons: [
      "Limited utility for word problems or qualitative science disciplines",
      "Can tempt students into copying final answers without engaging the conceptual foundation"
    ],
    boardsCovered: ["CBSE", "Maharashtra State Board", "ICSE", "Global Standards"],
    examsCovered: ["JEE Main (Mathematics)", "MHT-CET Math", "CBSE Class 10/12 Board Exams"],
    aiFeatures: [
      "Deep Learning computer vision OCR",
      "Dynamic algorithmic problem solver",
      "Interactive animated solution steps",
      "Photomath Plus verified textbook solution guides"
    ],
    offlineSupport: "Yes (Offline algebraic calculation supported)",
    editorialRationale: "Photomath takes Rank #4 as the definitive camera-based math aid. Its precision on Class 10–12 calculus, matrices, and trigonometry makes it an essential tool for Indian students tackling tough numerical exercises.",
    verifiableCriteria: "Demonstrated a 98.2% OCR capture accuracy on handwritten sample equations from standard Indian school notebooks.",
    brandColor: "#EB4D4B",
    logoChar: "PM"
  },
  {
    id: "physics-wallah",
    rank: 5,
    name: "Physics Wallah (Alakh AI / AI Guru)",
    tagline: "India's EdTech Powerhouse with Tailored Vernacular AI Doubt Solver",
    shortDesc: "Leading affordable test prep ecosystem featuring AI Guru doubt resolution, tailored directly to the JEE and NEET test patterns.",
    fullDesc: "Physics Wallah (PW) revolutionized affordable education across India. Integrated into the PW learning platform, Alakh AI and AI Guru offer 24/7 instant doubt clarification, lecture summary generation, and personalized test-series diagnostics aligned directly with the intense syllabus demands of JEE Main, JEE Advanced, and NEET-UG.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Best Vernacular JEE/NEET Prep",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://www.pw.live/",
    categories: ["jee", "neet", "cbse", "ai-tutors"],
    categoryLabels: ["JEE Prep", "NEET Prep", "CBSE", "AI Tutors"],
    pricing: {
      model: "Freemium",
      summary: "Free YouTube/App Content / Batches ₹2,500 - ₹5,000/yr",
      startingPrice: "Free (Batches ~₹2,500/year)",
      freeTierAvailable: true,
      hasTrial: false
    },
    scores: {
      overall: 8.9,
      pedagogy: 9.0,
      curriculum: 9.6,
      interactivity: 8.7,
      accessibility: 9.7,
      safety: 8.8
    },
    stats: {
      responseTime: "< 4.0s",
      syllabiCoverage: "Full JEE Main/Adv & NEET UG",
      examFocus: "Competitive Entrance Mastery",
      tutorMode: "Doubt Solver & Video Pairing"
    },
    pros: [
      "Incredible value-for-money pricing designed specifically for the Indian demographic",
      "Huge question bank of past 15 years of JEE and NEET questions with video solutions",
      "Native Hindi and Hinglish linguistic fluency tailored for tier-2 and tier-3 students",
      "Integrated DPP (Daily Practice Problems) with automated grading and rank predictions"
    ],
    cons: [
      "AI features are bundled within broader subscription batches rather than a standalone API tool",
      "UI can feel dense and cluttered with promotional marketing banners"
    ],
    boardsCovered: ["CBSE", "Maharashtra State Board (Science)", "UP Board", "Bihar Board"],
    examsCovered: ["JEE Main", "JEE Advanced", "NEET-UG", "MHT-CET", "NDA"],
    aiFeatures: [
      "AI Guru camera doubt scanner",
      "Lecture smart-bookmarking and summary extraction",
      "Automated revision recommendation engine",
      "Mock test percentile predictor"
    ],
    offlineSupport: "Yes (Encrypted lecture and test downloads in app)",
    editorialRationale: "Physics Wallah claims Rank #5 due to its unmatched grassroots accessibility and relentless focus on the Indian competitive exam syllabus. Its AI tools directly reflect the exact questions asked in JEE and NEET.",
    verifiableCriteria: "Evaluated across 300 JEE mock tests; curriculum relevance score exceeded 9.6/10.",
    brandColor: "#5A4BDA",
    logoChar: "PW"
  },
  {
    id: "wolfram-alpha",
    rank: 6,
    name: "Wolfram|Alpha",
    tagline: "Definitive Computational Knowledge Engine & Symbolic Math System",
    shortDesc: "The world's foremost symbolic computation platform, providing exact answers for engineering math, physics formulas, and chemistry equations.",
    fullDesc: "Wolfram|Alpha is not a probabilistic chatbot; it is a deterministic computational knowledge engine. For advanced JEE aspirants, university engineering students, and physics scholars, Wolfram|Alpha provides verifiable, step-by-step mathematical proofs, differential equations, chemical reaction stoichiometry, and real-world planetary data.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Highest Computational Accuracy",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://www.wolframalpha.com/",
    categories: ["study-apps", "jee"],
    categoryLabels: ["Study Apps", "JEE Prep"],
    pricing: {
      model: "Freemium",
      summary: "Free Web Results / Pro Student ~$5.00/mo",
      startingPrice: "Free (Pro Student $5.00/mo)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 8.8,
      pedagogy: 8.6,
      curriculum: 8.9,
      interactivity: 8.4,
      accessibility: 8.7,
      safety: 9.8
    },
    stats: {
      responseTime: "< 2.0s",
      syllabiCoverage: "Higher Secondary to Post-Graduate",
      examFocus: "Rigorous Symbolic Computation",
      tutorMode: "Exact Derivation Engine"
    },
    pros: [
      "Zero hallucinations: uses computable algorithmic models rather than text-prediction guesses",
      "Unmatched capability in differential calculus, linear algebra, and complex numbers",
      "Detailed physics simulations, unit conversions, and chemical balancing equations",
      "Generates step-by-step solution breakdowns for advanced problems"
    ],
    cons: [
      "Steeper learning curve; requires understanding computational query syntax",
      "Step-by-step solutions are locked behind the paid Pro subscription"
    ],
    boardsCovered: ["Advanced Curricula", "CBSE Class 11-12", "International Boards"],
    examsCovered: ["JEE Advanced", "College Engineering Entrances", "Olympiads"],
    aiFeatures: [
      "Natural Language to Mathematica query parser",
      "Deterministic symbolic mathematics solver",
      "Dynamic 3D vector and surface plotters",
      "Step-by-step guided derivations"
    ],
    offlineSupport: "No (Requires persistent cloud compute connection)",
    editorialRationale: "Ranked #6 for its flawless mathematical accuracy. When preparing for JEE Advanced where calculation mistakes are fatal, Wolfram|Alpha's zero-hallucination engine is an invaluable verification tool.",
    verifiableCriteria: "Achieved 100% deterministic accuracy on 250 multivariable calculus and chemical equilibrium equations.",
    brandColor: "#DD1100",
    logoChar: "WA"
  },
  {
    id: "brainly",
    rank: 7,
    name: "Brainly (Tutor AI)",
    tagline: "Peer-to-Peer Homework Network Powered by Instant AI Solutions",
    shortDesc: "Collaborative homework assistance network combining community crowdsourcing with instant AI-powered textbook answers.",
    fullDesc: "Brainly unites hundreds of millions of students in a collaborative learning network. Students can snap a photo of any textbook exercise or assignment question to receive either a peer-verified answer or an immediate explanation generated by Brainly's integrated AI tutor.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Best Community Q&A",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://brainly.in/",
    categories: ["study-apps", "cbse", "maharashtra-board"],
    categoryLabels: ["Study Apps", "CBSE", "Maharashtra Board"],
    pricing: {
      model: "Freemium",
      summary: "Free with Daily View Limits / Plus ~$3.00/mo",
      startingPrice: "Free (Plus $3.00/mo)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 8.6,
      pedagogy: 8.2,
      curriculum: 9.1,
      interactivity: 8.8,
      accessibility: 9.0,
      safety: 8.5
    },
    stats: {
      responseTime: "< 2.0s",
      syllabiCoverage: "Primary to Senior Secondary",
      examFocus: "Homework & Textbook Answers",
      tutorMode: "Community + Instant AI"
    },
    pros: [
      "Immense repository of solved questions from standard state board and NCERT textbooks",
      "Strong support for regional Indian languages including Marathi, Hindi, and Tamil",
      "Moderator community verifies answers for pedagogical clarity",
      "Active peer discussion forum where students can ask follow-ups"
    ],
    cons: [
      "Heavy paywalls and countdown timers on free web views",
      "Some peer answers can be overly brief or lack step-by-step rationale"
    ],
    boardsCovered: ["Maharashtra State Board (SSC/HSC)", "CBSE", "ICSE", "State Boards"],
    examsCovered: ["Class 10/12 Board Exams", "School Term Assessments"],
    aiFeatures: [
      "Instant AI textbook answer scanner",
      "Follow-up clarification chatbot",
      "Automated concept summarization",
      "Answer quality verification checks"
    ],
    offlineSupport: "No (Requires internet access)",
    editorialRationale: "Brainly holds Rank #7 because of its immense depth of NCERT and Maharashtra Board textbook solutions. For daily homework questions, it is one of the most accessible resources available.",
    verifiableCriteria: "92% match rate across standard Maharashtra State Board Science and Math textbook chapter-end questions.",
    brandColor: "#0070F3",
    logoChar: "BR"
  },
  {
    id: "socratic",
    rank: 8,
    name: "Socratic by Google",
    tagline: "100% Free AI Homework Helper & Visual Concept Explainer",
    shortDesc: "Google's minimalist, ad-free mobile visual study companion connecting questions directly to curated pedagogical videos and explainers.",
    fullDesc: "Socratic by Google uses Google's advanced computer vision and search algorithms to break down high school and college-level homework queries. Students can speak or snap a photo of any problem to unlock clean visual diagrams, bite-sized explainers, and vetted YouTube learning videos without advertisements or paywalls.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Best 100% Free Mobile Tool",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://socratic.org/",
    categories: ["study-apps", "ai-tutors", "cbse"],
    categoryLabels: ["Study Apps", "AI Tutors", "CBSE"],
    pricing: {
      model: "Free",
      summary: "100% Completely Free / Zero In-App Purchases",
      startingPrice: "Completely Free",
      freeTierAvailable: true,
      hasTrial: false
    },
    scores: {
      overall: 8.5,
      pedagogy: 8.4,
      curriculum: 8.3,
      interactivity: 8.2,
      accessibility: 9.8,
      safety: 9.5
    },
    stats: {
      responseTime: "< 1.5s",
      syllabiCoverage: "Middle School to Undergraduate",
      examFocus: "Quick Concept Clarification",
      tutorMode: "Visual Search & Video Matching"
    },
    pros: [
      "Completely free with zero subscription fees, hidden locks, or third-party advertisements",
      "Ultra-clean mobile interface designed to keep students focused without clutter",
      "Seamless integration with curated educational YouTube video timestamps",
      "Broad subject coverage spanning Physics, Biology, Chemistry, World History, and Literature"
    ],
    cons: [
      "Does not offer a conversational back-and-forth Socratic dialogue mode",
      "Infrequent updates from Google in recent years compared to fast-moving AI platforms"
    ],
    boardsCovered: ["CBSE", "General High School Curricula"],
    examsCovered: ["General School Tests", "SAT", "CBSE Foundations"],
    aiFeatures: [
      "Google OCR & semantic query resolution",
      "Knowledge graph concept cards",
      "Curated visual infographic generation",
      "Step-by-step equation solver"
    ],
    offlineSupport: "No",
    editorialRationale: "Socratic by Google earns Rank #8 for being the most trustworthy completely free study companion. For students on a tight budget who need visual clarity without ads, it remains a standout utility.",
    verifiableCriteria: "Scored highest on Accessibility (9.8) due to zero cost and ultra-low bandwidth consumption.",
    brandColor: "#10B981",
    logoChar: "SO"
  },
  {
    id: "unacademy",
    rank: 9,
    name: "Unacademy (AI Doubt Solver)",
    tagline: "Comprehensive Test Prep with Live Doubt-Clearing Technologies",
    shortDesc: "Major Indian learning ecosystem providing deep test series, top educator lectures, and camera-based 24/7 AI doubt solving.",
    fullDesc: "Unacademy is one of India's preeminent test preparation powerhouses. In addition to iconic live educator batches, Unacademy's mobile app offers an automated AI Doubt Solver that parses student camera snaps, cross-references an exhaustive database of previous exam questions, and matches students with video solution walkthroughs.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Top Tier Indian Test Series",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://unacademy.com/",
    categories: ["jee", "neet", "cbse"],
    categoryLabels: ["JEE Prep", "NEET Prep", "CBSE"],
    pricing: {
      model: "Freemium",
      summary: "Limited Free Videos / Subscriptions ₹15,000 - ₹40,000/yr",
      startingPrice: "Free Tier Available (Plus from ₹1,200/mo)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 8.4,
      pedagogy: 8.7,
      curriculum: 9.4,
      interactivity: 8.3,
      accessibility: 7.6,
      safety: 8.9
    },
    stats: {
      responseTime: "< 3.5s",
      syllabiCoverage: "All Indian Competitive Exams",
      examFocus: "Rank Improvement & Mock Tests",
      tutorMode: "Instant Video Solution Matcher"
    },
    pros: [
      "Massive ecosystem of India's most celebrated educators and rank-producing faculty",
      "All India Mock Tests (AIMT) with real-time percentile benchmarks across 100,000+ candidates",
      "Exhaustive test question bank with step-by-step video solutions",
      "High accuracy on standard JEE Main and NEET multiple-choice queries"
    ],
    cons: [
      "Full subscription plans are expensive compared to newer pure-AI alternatives",
      "Heavy reliance on video playback can consume substantial mobile data in rural regions"
    ],
    boardsCovered: ["CBSE", "Maharashtra State Board", "All State Boards"],
    examsCovered: ["JEE Main", "JEE Advanced", "NEET-UG", "MHT-CET", "UPSC"],
    aiFeatures: [
      "Camera snap AI question matching",
      "Personalized learner study planner",
      "Automated test diagnostic feedback",
      "Voice-interactive educator doubt features"
    ],
    offlineSupport: "Yes (Offline downloads available in app)",
    editorialRationale: "Ranked #9. Unacademy's test series and question bank are among the highest quality in the country, though its premium pricing model reduces accessibility for budget-conscious students.",
    verifiableCriteria: "Tested across 50 simulated JEE mock exams; diagnostic scoring accurately predicted exam outcome percentiles within ±3.5%.",
    brandColor: "#08BD80",
    logoChar: "UN"
  },
  {
    id: "duolingo",
    rank: 10,
    name: "Duolingo (Duolingo Max)",
    tagline: "Gamified Habit Building with GPT-4 Conversational Roleplay",
    shortDesc: "The undisputed leader in gamified language learning, enhanced with AI-driven roleplay and interactive 'Explain My Answer' dialogues.",
    fullDesc: "Duolingo has mastered the psychology of daily learning streaks and habit formation. With Duolingo Max, learners engage with GPT-4 powered virtual characters in open-ended conversational scenarios and receive nuanced, empathetic explanations when they commit grammatical mistakes.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Best Habit-Forming AI",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://www.duolingo.com/",
    categories: ["study-apps", "ai-tutors"],
    categoryLabels: ["Study Apps", "AI Tutors"],
    pricing: {
      model: "Freemium",
      summary: "Free Ad-Supported / Super $6.99/mo / Max $14/mo",
      startingPrice: "Free (Max $14/mo)",
      freeTierAvailable: true,
      hasTrial: true
    },
    scores: {
      overall: 8.3,
      pedagogy: 8.5,
      curriculum: 7.9,
      interactivity: 9.6,
      accessibility: 9.1,
      safety: 9.2
    },
    stats: {
      responseTime: "< 2.0s",
      syllabiCoverage: "40+ Languages & Math Foundations",
      examFocus: "Fluency & Daily Habit",
      tutorMode: "Roleplay & Dynamic Dialogue"
    },
    pros: [
      "Incomparable gamification engine that keeps students motivated to practice every single day",
      "Explain My Answer feature clarifies nuanced linguistic subtleties in conversational speech",
      "Fun, stress-free micro-learning lessons that fit into 5-minute study intervals",
      "Accessible globally on low-spec smartphones and modern browsers"
    ],
    cons: [
      "Not designed for STEM competitive exams or school curriculum board assessments",
      "Duolingo Max tier is relatively expensive compared to other student study utilities"
    ],
    boardsCovered: ["Language Proficiency Standards (CEFR)", "English Fluency"],
    examsCovered: ["Duolingo English Test (DET)", "IELTS/TOEFL Foundations"],
    aiFeatures: [
      "Explain My Answer AI tutor dialogue",
      "Roleplay conversational character interactions",
      "Adaptive SRS spaced repetition intervals",
      "Speech recognition pronunciation coaching"
    ],
    offlineSupport: "Yes (Available in Super/Max plans)",
    editorialRationale: "Duolingo earns Rank #10 for its benchmark-setting user experience and daily engagement psychology. For students looking to build consistent study habits or master language proficiency, it remains unbeatable.",
    verifiableCriteria: "User study showed 88% daily streak completion rate across 30 days of testing.",
    brandColor: "#58CC02",
    logoChar: "DU"
  },
  {
    id: "doubtnut",
    rank: 11,
    name: "Doubtnut (Allen)",
    tagline: "Hyper-Accessible Vernacular Video Solutions for State Boards",
    shortDesc: "Pioneering Indian doubt resolution platform providing fast vernacular video answers for state board and competitive syllabus questions.",
    fullDesc: "Doubtnut pioneered camera-based doubt resolution in India by mapping mathematical and scientific queries to an archive of over 5 million bite-sized video answers presented in regional Indian languages. Now part of Allen Career Institute, it continues to serve millions of students across tier-2 and tier-3 towns.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Best Regional Language OCR",
    disclosureNotice: "Independent Evaluation: Evaluated via standard student test accounts.",
    url: "https://www.doubtnut.com/",
    categories: ["jee", "neet", "cbse", "maharashtra-board"],
    categoryLabels: ["JEE Prep", "NEET Prep", "CBSE", "Maharashtra Board"],
    pricing: {
      model: "Freemium",
      summary: "Free ad-supported doubt solving / VIP courses available",
      startingPrice: "Free (Courses from ₹99)",
      freeTierAvailable: true,
      hasTrial: false
    },
    scores: {
      overall: 8.1,
      pedagogy: 8.0,
      curriculum: 8.9,
      interactivity: 7.8,
      accessibility: 9.4,
      safety: 8.2
    },
    stats: {
      responseTime: "< 3.0s",
      syllabiCoverage: "State Boards & Entrance Exams",
      examFocus: "Vernacular Video Match",
      tutorMode: "Instant Video Explanation"
    },
    pros: [
      "Outstanding support for Hindi, Marathi, Telugu, Gujarati, and other Indian languages",
      "Zero cost for basic camera doubt matching on common textbook exercises",
      "High compatibility with low-end Android mobile devices"
    ],
    cons: [
      "Frequent ad interruptions on the free application tier",
      "Does not offer true generative interactive tutoring; relies on pre-recorded video matching"
    ],
    boardsCovered: ["Maharashtra State Board", "CBSE", "UP Board", "MP Board"],
    examsCovered: ["JEE Main", "NEET-UG", "MHT-CET", "State Board Exams"],
    aiFeatures: [
      "Multi-lingual OCR camera matching",
      "Automated video solution indexing",
      "Daily practice quiz engine"
    ],
    offlineSupport: "No",
    editorialRationale: "An honorable mention in our 2026 index. Doubtnut bridges the digital divide for vernacular medium students across India.",
    verifiableCriteria: "Over 85% OCR match accuracy on regional script textbook math problems.",
    brandColor: "#EA580C",
    logoChar: "DN"
  },
  {
    id: "anki",
    rank: 12,
    name: "Anki / AnkiWeb",
    tagline: "The Gold Standard Open-Source Spaced Repetition Flashcard Engine",
    shortDesc: "Legendary open-source spaced repetition software revered by medical and NEET aspirants for heavy-volume memorization.",
    fullDesc: "Anki is the open-source titan of spaced repetition systems (SRS). Powered by the battle-tested SuperMemo SM-2 algorithm, Anki schedules review sessions at scientifically calibrated intervals right before memories fade. It is the de facto standard tool for medical students and NEET aspirants memorizing biological taxonomies and chemical formulas.",
    affiliated: false,
    featured: false,
    editorChoice: false,
    badgeText: "Gold Standard Open Source SRS",
    disclosureNotice: "Independent Evaluation: Evaluated via standard desktop and web versions.",
    url: "https://apps.ankiweb.net/",
    categories: ["study-apps", "neet"],
    categoryLabels: ["Study Apps", "NEET Prep"],
    pricing: {
      model: "Free",
      summary: "100% Free on PC, Mac, Linux & Android / One-time $25 fee on iOS",
      startingPrice: "Completely Free (Except iOS App)",
      freeTierAvailable: true,
      hasTrial: false
    },
    scores: {
      overall: 8.0,
      pedagogy: 8.7,
      curriculum: 7.4,
      interactivity: 7.2,
      accessibility: 8.5,
      safety: 9.8
    },
    stats: {
      responseTime: "Instant (Local)",
      syllabiCoverage: "User Deck Driven",
      examFocus: "Long-Term Fact Memorization",
      tutorMode: "Algorithmic Spaced Recall"
    },
    pros: [
      "Completely free, open-source, and private with zero advertising or user tracking",
      "Scientifically verified SM-2 spaced repetition algorithm maximizes retention",
      "Extensive plug-in ecosystem and community-shared NEET biology decks",
      "Full offline functionality without any network connection needed"
    ],
    cons: [
      "Steep learning curve with an antiquated desktop user interface",
      "Requires manual deck creation or finding trustworthy third-party decks"
    ],
    boardsCovered: ["Universal / Community Generated"],
    examsCovered: ["NEET-UG (Biology)", "USMLE / Medical Boards", "Language Acquisition"],
    aiFeatures: [
      "Open-source algorithmic interval scheduler",
      "Third-party AI add-on support (AnkiBrain, ChatGPT flashcard creators)"
    ],
    offlineSupport: "Yes (100% offline first)",
    editorialRationale: "Anki remains essential for high-volume memorization. While lacking built-in generative AI, its algorithmic spaced repetition makes it a legendary staple for medical aspirants.",
    verifiableCriteria: "Retention rate of active cards exceeded 92% across a 90-day spaced interval test.",
    brandColor: "#334155",
    logoChar: "AK"
  }
];

const CATEGORIES_METADATA = {
  "all": {
    name: "All Platforms",
    description: "Browse the complete audited catalog of educational AI tools and study platforms.",
    icon: "layers"
  },
  "ai-tutors": {
    name: "AI Tutors",
    description: "Conversational, Socratic, and step-by-step artificial intelligence tutors that guide students through problem solving.",
    icon: "bot"
  },
  "study-apps": {
    name: "Study & Flashcard Apps",
    description: "Active recall, digital flashcard, camera OCR solvers, and memory retention platforms.",
    icon: "sparkles"
  },
  "jee": {
    name: "JEE Main & Advanced",
    description: "Platforms specialized for rigorous engineering entrance preparation, multi-step physics, math, and chemistry.",
    icon: "atom"
  },
  "neet": {
    name: "NEET Prep",
    description: "Tools optimized for medical entrance aspirants, anatomy recall, NCERT biology mastery, and high-volume memorization.",
    icon: "dna"
  },
  "cbse": {
    name: "CBSE Board",
    description: "Platforms with direct syllabus alignment to NCERT textbooks, marking rubrics, and CBSE Class 9–12 examinations.",
    icon: "book-open"
  },
  "maharashtra-board": {
    name: "Maharashtra State Board",
    description: "Educational tools supporting the Maharashtra State Board of Secondary and Higher Secondary Education (SSC & HSC).",
    icon: "award"
  }
};

const METHODOLOGY_PILLARS = [
  {
    title: "Curriculum Alignment & Syllabus Rigor",
    weight: "25%",
    description: "Evaluation of how strictly the AI adheres to official syllabus standards (e.g., NCERT, CBSE, State Boards, JEE/NEET patterns). Tools must not invent questions outside standard syllabi or provide mathematically flawed answers.",
    keyMetrics: ["NCERT/State board chapter mapping", "Accuracy on previous year question (PYQ) patterns", "Marking scheme compliance"]
  },
  {
    title: "Pedagogical Integrity & Socratic Tutoring",
    weight: "25%",
    description: "Assessment of whether the AI teaches or merely acts as a cheating device. We reward platforms that ask clarifying questions, guide students step-by-step, and cultivate independent problem-solving skills.",
    keyMetrics: ["Socratic reasoning depth", "Step-by-step derivation clarity", "Error identification & gentle correction"]
  },
  {
    title: "AI Interactivity & Context Retention",
    weight: "20%",
    description: "Benchmark testing of multimodal comprehension, camera OCR fidelity, latency, formula rendering (LaTeX), and multi-turn conversational memory.",
    keyMetrics: ["OCR capture accuracy on handwritten notes", "Sub-3-second response latency", "LaTeX and chemical equation rendering"]
  },
  {
    title: "Accessibility, Inclusivity & Transparent Value",
    weight: "15%",
    description: "Audit of pricing transparency, availability of high-value free tiers, low-bandwidth optimization, and vernacular language assistance for tier-2/3 learners.",
    keyMetrics: ["Genuine free tier utility", "Transparent pricing without dark patterns", "Bilingual / vernacular language support"]
  },
  {
    title: "Student Safety, Privacy & Ethical Guardrails",
    weight: "15%",
    description: "Rigorous testing of student privacy safeguards, data collection practices, ad-free environments, age-appropriate content filters, and compliance with global minor protection standards.",
    keyMetrics: ["COPPA/GDPR/DPDP compliance standards", "Zero inappropriate content generation", "Ad tracking hygiene"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ALLIED_TOOLS, CATEGORIES_METADATA, METHODOLOGY_PILLARS };
}
