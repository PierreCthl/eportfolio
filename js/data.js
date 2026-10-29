/* ==========================================================================
   data.js — ALL THE CONTENT OF YOUR SITE LIVES HERE
   --------------------------------------------------------------------------
   You never need to touch index.html, style.css or main.js to update text.

   • Every text is written as { en: "English", fr: "Français" }.
   • Images: put your files in assets/img/ and change the path
     (e.g. "assets/img/project-1.jpg" or ".webp"). The current .svg files
     are PLACEHOLDERS that say "PLACEHOLDER" on them.
   • Add / remove an entry: copy-paste a whole { ... }, block and edit it.
   • Keep the commas and quotes. If the site goes blank, you probably
     forgot a comma or a quote — open the browser console (F12) to see where.
   ========================================================================== */

window.SITE = {

  /* ======================================================================
     1. PERSONAL INFORMATION
     ====================================================================== */
  name: "Firstname Lastname",                       // PLACEHOLDER
  email: "you@example.com",                         // PLACEHOLDER
  linkedin: "https://www.linkedin.com/in/your-profile",   // PLACEHOLDER
  github: "https://github.com/your-username",             // PLACEHOLDER

  // Put your CV files in the assets/ folder (or change the paths)
  cv: { en: "assets/cv-en.pdf", fr: "assets/cv-fr.pdf" },

  // Portrait shown in the welcome section (portrait format, ~800×1000)
  profilePhoto: "assets/img/profile.svg",
  profileAlt: { en: "Portrait of Firstname Lastname", fr: "Portrait de Prénom Nom" },

  /* Browser tab title + search-engine / social-media description */
  meta: {
    title: {
      en: "Firstname Lastname — Engineering ePortfolio",
      fr: "Prénom Nom — ePortfolio d’ingénieur"
    },
    description: {
      en: "ePortfolio of Firstname Lastname, engineering student: projects, civic engagement, international mobility, career goals and interests.",
      fr: "ePortfolio de Prénom Nom, étudiant ingénieur : projets, engagement citoyen, mobilité internationale, projet professionnel et centres d’intérêt."
    }
  },

  /* ======================================================================
     2. WELCOME (hero)
     ====================================================================== */
  hero: {
    eyebrow: { en: "ePortfolio · 2026", fr: "ePortfolio · 2026" },
    title: {
      en: "Engineering student — aerospace & mobility",
      fr: "Étudiant ingénieur — aéronautique et mobilité"
    },
    intro: {
      en: "I design, test and question things that move. This portfolio gathers the projects, commitments and journeys that shaped my path as a future engineer.",
      fr: "Je conçois, teste et remets en question ce qui se déplace. Ce portfolio rassemble les projets, engagements et voyages qui ont façonné mon parcours de futur ingénieur."
    }
  },

  /* ======================================================================
     3. INTERFACE TEXTS (menus, titles, buttons)
     Change these if you want different section names.
     ====================================================================== */
  ui: {
    skip_link:  { en: "Skip to content", fr: "Aller au contenu" },
    nav_aria:   { en: "Main navigation", fr: "Navigation principale" },
    menu_open:  { en: "Open the menu", fr: "Ouvrir le menu" },
    menu_close: { en: "Close the menu", fr: "Fermer le menu" },
    lang_aria:  { en: "Language", fr: "Langue" },

    nav_welcome:   { en: "Welcome",   fr: "Accueil" },
    nav_courses:   { en: "Courses",   fr: "Cursus" },
    nav_civic:     { en: "Civic",     fr: "Engagement" },
    nav_mobility:  { en: "Mobility",  fr: "Mobilité" },
    nav_careers:   { en: "Careers",   fr: "Carrières" },
    nav_interests: { en: "Interests", fr: "Loisirs" },

    scroll:     { en: "Scroll", fr: "Défiler" },
    hero_fig:   { en: "FIG. 00 — Portrait", fr: "FIG. 00 — Portrait" },
    welcome:    { en: "Welcome", fr: "Accueil" },

    courses_label: { en: "Projects", fr: "Projets" },
    courses_title: { en: "Engineering courses", fr: "Cursus d’ingénieur" },
    courses_lead:  {
      en: "A selection of academic and technical projects, from the first sketch to the final test.",
      fr: "Une sélection de projets académiques et techniques, du premier croquis jusqu’au test final."
    },
    view_details: { en: "View details", fr: "Voir le détail" },
    close:        { en: "Close", fr: "Fermer" },
    ctx:          { en: "Context", fr: "Contexte" },
    role:         { en: "My role", fr: "Mon rôle" },
    year:         { en: "Year", fr: "Année" },
    results:      { en: "Key results", fr: "Résultats clés" },
    tools:        { en: "Tools & skills", fr: "Outils et compétences" },
    read_report:  { en: "Read the report", fr: "Lire le rapport" },

    civic_label: { en: "Civic engagement", fr: "Engagement citoyen" },
    civic_title: { en: "Acting for others", fr: "S’engager pour les autres" },
    civic_lead:  {
      en: "Volunteering, associations and community actions that taught me teamwork and responsibility.",
      fr: "Bénévolat, associations et actions citoyennes qui m’ont appris le travail d’équipe et la responsabilité."
    },

    mobility_label: { en: "Mobility", fr: "Mobilité" },
    mobility_title: { en: "Learning beyond borders", fr: "Apprendre au-delà des frontières" },
    mobility_lead:  {
      en: "Exchanges, internships and trips abroad. Select a marker to read the story.",
      fr: "Échanges, stages et séjours à l’étranger. Sélectionnez un marqueur pour lire le récit."
    },
    map_label:  { en: "World map of my international experiences", fr: "Carte du monde de mes expériences internationales" },
    map_fig:    { en: "FIG. — Destinations", fr: "FIG. — Destinations" },
    locations:  { en: "Destinations", fr: "Destinations" },

    careers_label: { en: "Careers", fr: "Carrières" },
    careers_title: { en: "Building a path", fr: "Construire un parcours" },
    goal_label:    { en: "Career goal", fr: "Projet professionnel" },
    path_label:    { en: "Path", fr: "Parcours" },
    skills_label:  { en: "Skills", fr: "Compétences" },
    cta_title:     { en: "Let’s work together", fr: "Travaillons ensemble" },
    cta_cv:        { en: "Download my CV", fr: "Télécharger mon CV" },
    cta_linkedin:  { en: "LinkedIn", fr: "LinkedIn" },
    cta_email:     { en: "Send an email", fr: "M’écrire" },

    interests_label: { en: "Sports & interests", fr: "Sports et centres d’intérêt" },
    interests_title: { en: "Beyond the classroom", fr: "Au-delà des cours" },
    interests_lead:  {
      en: "What I do when I am not studying: it says a lot about how I work.",
      fr: "Ce que je fais quand je n’étudie pas : cela en dit long sur ma façon de travailler."
    },

    footer_contact: { en: "Contact", fr: "Contact" },
    footer_rights:  { en: "All rights reserved.", fr: "Tous droits réservés." },
    footer_top:     { en: "Back to top", fr: "Retour en haut" }
  },

  /* ======================================================================
     4. ENGINEERING COURSES — PROJECTS
     Copy/paste a block to add a project. Order = display order.
     image: landscape ~1600×1000 · link: report / demo / PDF (or "" to hide)
     ====================================================================== */
  projects: [
    {
      id: "wind-tunnel",
      year: "2025",
      image: "assets/img/project-1.svg",
      title:   { en: "Subsonic wind tunnel", fr: "Soufflerie subsonique" },
      context: { en: "Fluid mechanics · Year 2", fr: "Mécanique des fluides · 2e année" },
      role:    { en: "Test-bench design and data acquisition", fr: "Conception du banc d’essai et acquisition de données" },
      summary: {
        en: "Design and instrumentation of a small wind tunnel used to measure lift and drag on 3D-printed airfoils.",
        fr: "Conception et instrumentation d’une petite soufflerie pour mesurer la portance et la traînée de profils imprimés en 3D."
      },
      details: {
        en: "In a team of four, we designed the contraction, the test section and a force balance with strain gauges. I was in charge of the acquisition chain and of the post-processing scripts used to compare measurements with theory.",
        fr: "En équipe de quatre, nous avons conçu le convergent, la veine d’essai et une balance d’efforts à jauges de contrainte. J’étais responsable de la chaîne d’acquisition et des scripts de post-traitement comparant mesures et théorie."
      },
      results: [
        { en: "Lift coefficient within 4 % of the theoretical value", fr: "Coefficient de portance à moins de 4 % de la valeur théorique" },
        { en: "Flow uniformity better than 2 % in the test section", fr: "Uniformité de l’écoulement meilleure que 2 % dans la veine" },
        { en: "Total budget kept under 400 €", fr: "Budget total maintenu sous 400 €" }
      ],
      tags: ["MATLAB", "SolidWorks", "Arduino", "3D printing"],
      link: "assets/reports/wind-tunnel.pdf"
    },
    {
      id: "quadcopter",
      year: "2025",
      image: "assets/img/project-2.svg",
      title:   { en: "Quadcopter flight controller", fr: "Contrôleur de vol de quadricoptère" },
      context: { en: "Control systems · Year 2", fr: "Automatique · 2e année" },
      role:    { en: "Control law and simulation", fr: "Loi de commande et simulation" },
      summary: {
        en: "A PID-based attitude controller, simulated then flight-tested on a custom-built quadcopter.",
        fr: "Un contrôleur d’attitude de type PID, simulé puis testé en vol sur un quadricoptère construit sur mesure."
      },
      details: {
        en: "I modelled the dynamics of the drone, tuned the PID gains in simulation and implemented the controller on a microcontroller. The project ended with a live demonstration in front of the jury.",
        fr: "J’ai modélisé la dynamique du drone, réglé les gains PID en simulation puis implémenté le contrôleur sur microcontrôleur. Le projet s’est terminé par une démonstration en vol devant le jury."
      },
      results: [
        { en: "Stable hover within ±3° on the three axes", fr: "Vol stationnaire stable à ±3° sur les trois axes" },
        { en: "Control loop running at 500 Hz", fr: "Boucle de commande à 500 Hz" },
        { en: "Best demo of the promotion", fr: "Meilleure démonstration de la promotion" }
      ],
      tags: ["Python", "Simulink", "C++", "PID"],
      link: "assets/reports/quadcopter.pdf"
    },
    {
      id: "landing-gear",
      year: "2024",
      image: "assets/img/project-3.svg",
      title:   { en: "Landing gear bracket analysis", fr: "Analyse d’une ferrure de train d’atterrissage" },
      context: { en: "Structural mechanics · Year 2", fr: "Mécanique des structures · 2e année" },
      role:    { en: "Finite element modelling", fr: "Modélisation par éléments finis" },
      summary: {
        en: "Stress analysis and lightweight redesign of a landing gear bracket under landing loads.",
        fr: "Analyse des contraintes et allègement d’une ferrure de train d’atterrissage soumise aux charges à l’atterrissage."
      },
      details: {
        en: "Starting from a reference geometry, I built the finite element model, checked the mesh convergence and iterated on the topology to reduce mass while respecting the safety factor.",
        fr: "À partir d’une géométrie de référence, j’ai construit le modèle éléments finis, vérifié la convergence du maillage et itéré sur la topologie pour réduire la masse tout en respectant le coefficient de sécurité."
      },
      results: [
        { en: "18 % mass reduction", fr: "18 % de masse en moins" },
        { en: "Safety factor kept above 1.5", fr: "Coefficient de sécurité maintenu au-dessus de 1,5" }
      ],
      tags: ["Abaqus", "CATIA", "Python"],
      link: "assets/reports/landing-gear.pdf"
    },
    {
      id: "cubesat",
      year: "2024",
      image: "assets/img/project-4.svg",
      title:   { en: "CubeSat thermal model", fr: "Modèle thermique d’un CubeSat" },
      context: { en: "Space systems · Year 1", fr: "Systèmes spatiaux · 1re année" },
      role:    { en: "Thermal analysis", fr: "Analyse thermique" },
      summary: {
        en: "A lumped-parameter thermal model predicting the temperature of a nanosatellite over several orbits.",
        fr: "Un modèle thermique à paramètres concentrés prédisant la température d’un nanosatellite sur plusieurs orbites."
      },
      details: {
        en: "I wrote a Python model including solar flux, albedo, Earth infrared and internal dissipation, then compared hot and cold cases to the component temperature limits.",
        fr: "J’ai écrit un modèle Python intégrant flux solaire, albédo, infrarouge terrestre et dissipation interne, puis comparé les cas chaud et froid aux limites en température des composants."
      },
      results: [
        { en: "Hot and cold cases within component limits", fr: "Cas chaud et froid dans les limites des composants" },
        { en: "Open-source script reused by the next class", fr: "Script open source réutilisé par la promotion suivante" }
      ],
      tags: ["Python", "NumPy", "Orbital mechanics"],
      link: ""
    }
  ],

  /* ======================================================================
     5. CIVIC ENGAGEMENT
     value + valueLabel = the big key number. quote is optional ("" to hide).
     ====================================================================== */
  civic: [
    {
      period: "2024 — 2026",
      title: { en: "President of the robotics & aerospace club", fr: "Président du club robotique et aérospatial" },
      org:   { en: "Student association", fr: "Association étudiante" },
      value: "35",
      valueLabel: { en: "members", fr: "membres" },
      text: {
        en: "Leading a team of volunteers, organising workshops and a yearly rocketry day open to local schools.",
        fr: "Animation d’une équipe de bénévoles, organisation d’ateliers et d’une journée fusées annuelle ouverte aux écoles du quartier."
      },
      quote: { en: "", fr: "" }
    },
    {
      period: "2023 — 2025",
      title: { en: "Maths and physics tutoring", fr: "Soutien en maths et physique" },
      org:   { en: "Local community centre", fr: "Centre social local" },
      value: "120 h",
      valueLabel: { en: "of tutoring", fr: "de soutien scolaire" },
      text: {
        en: "Weekly support for high-school students from underprivileged neighbourhoods.",
        fr: "Accompagnement hebdomadaire de lycéens issus de quartiers défavorisés."
      },
      quote: {
        en: "Explaining is the best way to understand.",
        fr: "Expliquer est la meilleure façon de comprendre."
      }
    },
    {
      period: "2022 — 2023",
      title: { en: "Repair café", fr: "Repair café" },
      org:   { en: "Campus sustainability group", fr: "Groupe développement durable du campus" },
      value: "60",
      valueLabel: { en: "devices repaired", fr: "appareils réparés" },
      text: {
        en: "Monthly sessions where students and residents repair small appliances instead of throwing them away.",
        fr: "Sessions mensuelles où étudiants et habitants réparent de petits appareils au lieu de les jeter."
      },
      quote: { en: "", fr: "" }
    }
  ],

  /* ======================================================================
     6. MOBILITY — each entry becomes a marker on the world map
     lat / lon = decimal coordinates (find them on any online map).
     image: landscape ~1200×800
     ====================================================================== */
  mobility: [
    {
      id: "montreal",
      city: { en: "Montréal", fr: "Montréal" },
      country: { en: "Canada", fr: "Canada" },
      lat: 45.50, lon: -73.57,
      type:   { en: "Exchange semester", fr: "Semestre d’échange" },
      period: { en: "Jan — May 2025", fr: "Janv. — mai 2025" },
      image: "assets/img/mobility-1.svg",
      story: {
        en: "Five months of aerospace courses in a new academic culture. I discovered project-based learning at scale and made friends from a dozen countries.",
        fr: "Cinq mois de cours d’aérospatiale dans une autre culture académique. J’y ai découvert l’apprentissage par projet à grande échelle et rencontré des amis d’une dizaine de pays."
      }
    },
    {
      id: "munich",
      city: { en: "Munich", fr: "Munich" },
      country: { en: "Germany", fr: "Allemagne" },
      lat: 48.14, lon: 11.58,
      type:   { en: "Internship", fr: "Stage" },
      period: { en: "Jun — Aug 2024", fr: "Juin — août 2024" },
      image: "assets/img/mobility-2.svg",
      story: {
        en: "Two months in a test engineering team, working in English and German on vibration test campaigns.",
        fr: "Deux mois dans une équipe d’ingénierie d’essais, en anglais et en allemand, sur des campagnes d’essais vibratoires."
      }
    },
    {
      id: "tokyo",
      city: { en: "Tokyo", fr: "Tokyo" },
      country: { en: "Japan", fr: "Japon" },
      lat: 35.68, lon: 139.69,
      type:   { en: "Summer school", fr: "École d’été" },
      period: { en: "Jul 2023", fr: "Juil. 2023" },
      image: "assets/img/mobility-3.svg",
      story: {
        en: "Three weeks on robotics and automation, between laboratory visits and long walks through the city.",
        fr: "Trois semaines consacrées à la robotique et à l’automatisation, entre visites de laboratoires et longues promenades en ville."
      }
    },
    {
      id: "cape-town",
      city: { en: "Cape Town", fr: "Le Cap" },
      country: { en: "South Africa", fr: "Afrique du Sud" },
      lat: -33.92, lon: 18.42,
      type:   { en: "Volunteering", fr: "Mission de bénévolat" },
      period: { en: "Aug 2022", fr: "Août 2022" },
      image: "assets/img/mobility-4.svg",
      story: {
        en: "A solidarity mission building a small solar-powered classroom with a local association.",
        fr: "Une mission solidaire de construction d’une petite salle de classe solaire avec une association locale."
      }
    }
  ],

  /* ======================================================================
     7. CAREERS
     ====================================================================== */
  careersGoal: {
    en: "I want to join the aerospace industry as a systems or test engineer, working on greener and safer ways to fly.",
    fr: "Je souhaite rejoindre l’industrie aéronautique comme ingénieur systèmes ou essais, pour concevoir des avions plus sobres et plus sûrs."
  },

  careers: [
    {
      year: "2022",
      kind:  { en: "Education", fr: "Formation" },
      title: { en: "Preparatory classes", fr: "Classes préparatoires" },
      org:   "[School name]",
      text:  { en: "Intensive maths and physics programme.", fr: "Programme intensif de mathématiques et de physique." }
    },
    {
      year: "2023",
      kind:  { en: "Education", fr: "Formation" },
      title: { en: "Engineering school", fr: "École d’ingénieurs" },
      org:   "[School name]",
      text:  { en: "General cycle, then aerospace specialisation.", fr: "Cycle général, puis spécialisation aérospatiale." }
    },
    {
      year: "2024",
      kind:  { en: "Internship", fr: "Stage" },
      title: { en: "Test engineering intern", fr: "Stagiaire ingénieur essais" },
      org:   "[Company name]",
      text:  { en: "Vibration test campaigns and reporting.", fr: "Campagnes d’essais vibratoires et rédaction des rapports." }
    },
    {
      year: "2025",
      kind:  { en: "Exchange", fr: "Échange" },
      title: { en: "Semester abroad", fr: "Semestre à l’étranger" },
      org:   "[University name]",
      text:  { en: "Aerospace courses and team projects.", fr: "Cours d’aérospatiale et projets en équipe." }
    },
    {
      year: "2026",
      kind:  { en: "Next step", fr: "Prochaine étape" },
      title: { en: "Final-year internship", fr: "Stage de fin d’études" },
      org:   "[Company name]",
      text:  { en: "Looking for a six-month internship in systems engineering.", fr: "Recherche d’un stage de six mois en ingénierie système." }
    }
  ],

  // level: from 0 to 100
  skills: [
    { label: { en: "Aerodynamics & fluid mechanics", fr: "Aérodynamique et mécanique des fluides" }, level: 80 },
    { label: { en: "Structural analysis (FEA)",       fr: "Calcul de structures (éléments finis)" }, level: 75 },
    { label: { en: "Python / MATLAB",                 fr: "Python / MATLAB" },                      level: 85 },
    { label: { en: "CAD (CATIA, SolidWorks)",         fr: "CAO (CATIA, SolidWorks)" },              level: 70 },
    { label: { en: "Embedded systems",                fr: "Systèmes embarqués" },                   level: 60 },
    { label: { en: "Project management",              fr: "Gestion de projet" },                    level: 70 },
    { label: { en: "English",                         fr: "Anglais" },                              level: 85 },
    { label: { en: "German",                          fr: "Allemand" },                             level: 45 }
  ],

  /* ======================================================================
     8. SPORTS AND INTERESTS (photo mosaic)
     size: "big" (2×2) · "tall" · "wide" · "sq" (square)
     The mosaic is designed for 6 items: big, tall, sq, sq, wide, wide.
     ====================================================================== */
  interests: [
    {
      size: "big",
      image: "assets/img/interest-1.svg",
      title:   { en: "Climbing", fr: "Escalade" },
      caption: { en: "Trust and patience, one hold at a time.", fr: "Confiance et patience, une prise après l’autre." }
    },
    {
      size: "tall",
      image: "assets/img/interest-2.svg",
      title:   { en: "Gliding", fr: "Vol à voile" },
      caption: { en: "Where my passion for aerospace began.", fr: "Là où ma passion pour l’aéronautique a commencé." }
    },
    {
      size: "sq",
      image: "assets/img/interest-3.svg",
      title:   { en: "Rugby", fr: "Rugby" },
      caption: { en: "Teamwork and discipline.", fr: "Esprit d’équipe et discipline." }
    },
    {
      size: "sq",
      image: "assets/img/interest-4.svg",
      title:   { en: "Photography", fr: "Photographie" },
      caption: { en: "Curiosity through a lens.", fr: "La curiosité à travers un objectif." }
    },
    {
      size: "wide",
      image: "assets/img/interest-5.svg",
      title:   { en: "Sailing", fr: "Voile" },
      caption: { en: "Reading the wind, adapting the course.", fr: "Lire le vent, adapter la route." }
    },
    {
      size: "wide",
      image: "assets/img/interest-6.svg",
      title:   { en: "Piano", fr: "Piano" },
      caption: { en: "Practice, every single day.", fr: "S’exercer, chaque jour." }
    }
  ]
};
