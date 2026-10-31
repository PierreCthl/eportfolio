/* =====================================================================
   CONTENT FILE — the only file you need to edit to personalise the site.

   Structure
   - SITE.shared : things that do NOT change with the language
                   (name, links, images, years, tags, map coordinates).
   - SITE.en / SITE.fr : all the text, in English and in French.
   Lists (projects, civic, mobility, careers, sports) must keep the SAME
   ORDER and the SAME NUMBER of items in `shared`, `en` and `fr`.
   ===================================================================== */

window.SITE = {

  /* ------------------------- SHARED (both languages) ------------------------- */
  shared: {
    name: "Pierre Cathelain",                       // PLACEHOLDER
    email: "p.cathelain@icloud.com",          // PLACEHOLDER
    linkedin: "https://www.linkedin.com/in/pierre-cathelain-444313428",
    github: "https://github.com/PierreCthl",
    cv: { en: "assets/cv-en.pdf", fr: "assets/cv.pdf" },
    siteUrl: "https://your-domain.example",    // used for Open Graph tags
    heroImage: "assets/img/hero-bg.svg",
    profileImage: "assets/img/photo-identité.jpeg",     // portrait, ratio 3:4 works best
    videoUrl: "assets/video/presentation1.mp4",

    // One entry per project. `link` = the PDF of your work (put the PDF files in assets/pdf/).
    projects: [
      { id: "p1", year: "2025", tags: ["Flight mechanics", "Modelling", "Mathematics"], image: "assets/img/looping.png", link: "assets/pdf/diapo_final.pdf" },
      { id: "p2", year: "2026", tags: ["Fluid mechanics", "Experiments", "Data analysis"], image: "assets/img/ressaut.jpg", link: "assets/pdf/tp_ressaut.pdf" }
    ],

    // One entry per commitment: a period and a photo.
    civic: [
      { period: "2022", image: "assets/img/restosducoeur.jpg" },
      { period: "2026", image: "assets/img/proces.png" },
      { period: "2026", image: "assets/img/fresque.jpg" },
      { period: "2026", image: "assets/img/cleanwalk.jpg" },
      { period: "2026", image: "assets/img/futurproche.jpg" }     // PLACEHOLDER: replace with your own photo
    ],

    /* Mobility. `status`: "now" = where I am today, "wish" = hoped-for exchange.
       coords = [longitude, latitude].
       nudge  = [dx, dy] in pixels: shifts the marker so two places in the same
                city (ENSEEIHT and ISAE-SUPAERO) do not overlap on the map.
       side   = "l" or "r": on which side of the marker the name is written.
       images = photos of the place (PLACEHOLDERS: replace with your own). */
    mobility: [
      { id: "enseeiht", status: "now",  coords: [1.4668, 43.6027], side: "l", images: ["assets/img/mob-toulouse-1.svg", "assets/img/mob-toulouse-2.svg"] },
      { id: "upm",      status: "wish", coords: [-3.73, 40.44],    side: "l", images: ["assets/img/mob-madrid-1.svg", "assets/img/mob-madrid-2.svg"] },
      { id: "polimi",   status: "wish", coords: [9.23, 45.48],     side: "r", images: ["assets/img/mob-milan-1.svg", "assets/img/mob-milan-2.svg"] },
      { id: "delft",    status: "wish", coords: [4.37, 52.0],      side: "r", images: ["assets/img/mob-delft-1.svg", "assets/img/mob-delft-2.svg"] },
      { id: "isae",     status: "wish", coords: [1.474, 43.565],   side: "r", nudge: [26, 24], images: ["assets/img/mob-isae-1.svg", "assets/img/mob-isae-2.svg"] }
    ],

    careers: [
      { period: "2029" }, { period: "2026" }, { period: "2025" }, { period: "2023" }, { period: "2021" }
    ],
    skills: [
      { level: 90 }, { level: 80 }, { level: 75 }, { level: 70 }, { level: 85 }
    ],

    // size: "tall" | "wide" | "std" controls the tile shape in the mosaic.
    // On desktop the grid has 4 columns: keep the total of cells
    // (tall = 2, wide = 2, std = 1) a multiple of 4 to avoid gaps.
    // Order: travel, football, climbing, aeronautics, space, then extra photos.
    // PLACEHOLDERS: replace each image with your own photo.
    sports: [
      { image: "assets/img/voyage.jpeg", size: "tall" },
      { image: "assets/img/foot.png", size: "wide" },
      { image: "assets/img/escalade.jpg", size: "tall" },
      { image: "assets/img/avion.jpg", size: "std" },
      { image: "assets/img/espace.jpg", size: "std" },
      { image: "assets/img/sport-6.svg", size: "wide" },
      { image: "assets/img/sport-7.svg", size: "std" },
      { image: "assets/img/sport-8.svg", size: "std" }
    ]
  },

  /* ------------------------------- ENGLISH ------------------------------- */
  en: {
    meta: {
      title: "Pierre Cathelain — Engineering eportfolio",
      description: "Engineering student in aerospace and mobility. Projects, civic engagement, international experience and career goals."
    },
    ui: {
      skip: "Skip to content",
      menu: "Menu", close: "Close", scroll: "Scroll",
      nav: { welcome: "Welcome", projects: "Engineering courses", civic: "Civic engagement", mobility: "Mobility", careers: "Careers", sports: "Sports and interests" },
      year: "Year", context: "Context", role: "My role", results: "Key results", openProject: "View project", openLink: "Open the report",
      period: "Period", where: "Place", mapLabel: "Map of Europe: my school and the universities I hope to join",
      now: "Current school", wish: "Exchange wish", legendNow: "Where I study today", legendWish: "Exchange I hope for",
      downloadCv: "Download my CV", linkedin: "Connect on LinkedIn", skills: "Skills",
      contact: "Contact", rights: "All rights reserved.", fig: "FIG.",
      video: "Watch my video"
    },
    hero: {
      kicker: "Portfolio 2026",
      title: "Engineering student at ENSEEIHT, specialising in fluid mechanics",
      intro: "I would love to work in the aeronautics sector, which fascinates and inspires me so much. This portfolio gathers my engineering projects, my commitments and the experiences that shaped my path.",
      portraitCaption: "Portrait"
    },
    projects: {
      title: "Engineering courses",
      intro: "What I know how to do, and what I have built with it.",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      skills: [
        { title: "Programming languages", items: ["Python", "C", "OCaml", "Fortran"] },
        { title: "Data processing", items: ["NumPy and SciPy", "Matplotlib", "Spreadsheets", "Experimental data analysis"] },
        { title: "Tools and systems", items: ["Linux", "Git", "LaTeX", "Windows"] },
        { title: "Soft skills", items: ["Teamwork", "Rigour", "Clear communication", "Motivation"] }
      ],
      items: [
        {
          title: "TIPE: theoretical study of an aircraft loop",
          context: "Preparatory class (CPGE), TIPE project",
          role: "Modelling and writing the report",
          desc: "A theoretical study of the loop manoeuvre: the forces involved, the trajectory, and the limits an aircraft must respect to complete it.",
          long: "Modelling of the trajectory of an aircraft flying a vertical loop, from the forces acting on it (weight, lift, thrust and drag). The study looks at how speed, load factor and radius vary along the manoeuvre.",
          results: [],
          linkLabel: "Read the PDF", caption: "Trajectory of an aircraft in a loop"
        },
        {
          title: "Hydraulic jumps",
          context: "Fluid mechanics lab, engineering school, 2026",
          role: "Measurements, data analysis and report",
          desc: "An experimental study of the hydraulic jump in an open channel.",
          long: "Measurement of water depths upstream and downstream of a hydraulic jump in a channel, compared with the theoretical relations (conservation of mass and momentum). Study of the flow velocity.",
          results: [],
          linkLabel: "Read the PDF", caption: "Hydraulic jump in an open channel"
        }
      ]
    },
    civic: {
      title: "Civic engagement",
      intro: "Engineering is also a way to be useful to others. These commitments taught me to listen, organise and lead.",
      items: [
        { title: "Restos du Cœur", org: "Organisation", text: "For 10 days, I discovered the world of voluntary work and helped people in precarious situations. I received goods, sorted them and handed them out to the people we supported." },
        { title: "The King Kong Trial", org: "Organisation", text: "This play features three actors and a judge. The actors perform three different scenes in which we can observe harassment and/or sexist and sexual violence. We had to spot these behaviours and discuss them with the judge, who explained the possible consequences in each of the three cases. I found it really interesting, because it raises awareness of sexual and sexist violence in a playful and more engaging way." },
        { title: "Climate Fresk", org: "Organisation", text: "At the start of my first year in engineering school, I took part in a Climate Fresk, surrounded by classmates and a specialist. We worked out the links between causes and effects and learned more about one of the greatest challenges of our generation." },
        { title: "Clean walk", org: "Organisation", text: "I took part in a clean walk in the centre of Toulouse. We collected a large amount of litter." },
        { title: "Festival “Futur Proche”", org: "Organisation", text: "One afternoon, I had the opportunity to reflect as part of a group and ask myself questions about engineering ethics." }
      ]
    },
    mobility: {
      title: "Mobility",
      intro: "Toulouse is where I study today. The four universities below are the exchanges I hope to join. Select a place on the map to read more.",
      items: [
        { place: "Toulouse", country: "France", title: "ENSEEIHT", period: "Since 2026", text: "I am currently studying at ENSEEIHT, an engineering school in Toulouse, in the heart of the European aerospace industry. This is where I am specialising in fluid mechanics and where I carry out my projects." },
        { place: "Madrid", country: "Spain", title: "Universidad Politécnica de Madrid", text: "One of the exchange universities I would love to join. It would let me study engineering in a new country, with a new academic culture and a new language." },
        { place: "Milan", country: "Italy", title: "Politecnico di Milano", text: "A major technical university with a well-known aerospace engineering department. An exchange there would be a chance to deepen my knowledge of aeronautics in Italy." },
        { place: "Delft", country: "Netherlands", title: "Delft University of Technology (TU Delft)", text: "A leading technical university with a renowned Faculty of Aerospace Engineering. It is one of the places I dream of studying aerodynamics and fluid mechanics." },
        { place: "ISAE-SUPAERO", country: "France", title: "Institut supérieur de l’aéronautique et de l’espace", text: "A French reference in aerospace engineering, in the same city as my current school. It would be a way to go further into aeronautics and space." }
      ]
    },
    careers: {
      title: "Careers",
      intro: "Where I am heading, and what I have done to get there.",
      goal: "I want to work on the next generation of aircraft and sustainable mobility, in a team that mixes design, testing and curiosity.",
      timelineTitle: "Path",
      items: [
        { title: "Final-year internship (target)", org: "Aerospace company", text: "Six months in aerodynamics or structures. Looking for opportunities." },
        { title: "Junior enterprise", org: "N7 Consulting", text: "Soon" },
        { title: "Summer job", org: "Temporary agency work", text: "Unloading goods and handling parcels." },
        { title: "Preparatory classes, then engineering school", org: "Lille / Toulouse", text: "Mathematics, physics and computer science first, then specialisation in aeronautics." },
        { title: "BIA", org: "Aeronautical initiation certificate (Brevet d’initiation à l’aéronautique)", text: "Diploma obtained with distinction (mention très bien)." }
      ],
      skills: [
        { name: "Punctuality" }, { name: "Organisation" }, { name: "Python" }, { name: "Good interpersonal skills" }, { name: "Teamwork and project management" }
      ],
      cta: "Let’s talk about an internship or a first job."
    },
    sports: {
      title: "Sports and interests",
      intro: "What I do off-screen keeps me sharp: discipline, teamwork and curiosity.",
      items: [
        { title: "Travel", caption: "Discovering other places and other ways of living." },
        { title: "Football", caption: "A team sport: communication, effort and trust." },
        { title: "Climbing", caption: "Reading a route is solving a problem with your whole body." },
        { title: "Aeronautics", caption: "The passion behind my studies: how and why things fly." },
        { title: "Space", caption: "Rockets, orbits and the questions that come with them." }
      ]
    }
  },

  /* ------------------------------- FRANÇAIS ------------------------------- */
  fr: {
    meta: {
      title: "Pierre Cathelain — ePortfolio d’ingénieur",
      description: "Étudiant ingénieur en aéronautique et mobilité. Projets, engagement citoyen, expériences internationales et projet professionnel."
    },
    ui: {
      skip: "Aller au contenu",
      menu: "Menu", close: "Fermer", scroll: "Défiler",
      nav: { welcome: "Accueil", projects: "Cours d’ingénierie", civic: "Engagement citoyen", mobility: "Mobilité", careers: "Carrières", sports: "Sports et centres d’intérêt" },
      year: "Année", context: "Contexte", role: "Mon rôle", results: "Résultats clés", openProject: "Voir le projet", openLink: "Ouvrir le rapport",
      period: "Période", where: "Lieu", mapLabel: "Carte de l’Europe : mon école et les universités que j’aimerais rejoindre",
      now: "École actuelle", wish: "Souhait d’échange", legendNow: "Là où j’étudie aujourd’hui", legendWish: "Échange souhaité",
      downloadCv: "Télécharger mon CV", linkedin: "Me retrouver sur LinkedIn", skills: "Compétences",
      contact: "Contact", rights: "Tous droits réservés.", fig: "FIG.",
      video: "Voir ma vidéo de présentation"
    },
    hero: {
      kicker: "Portfolio 2026",
      title: "Étudiant ingénieur à l’ENSEEIHT, spécialisé en mécanique des fluides",
      intro: "J’adorerais travailler dans le secteur de l’aéronautique, qui me passionne et m’inspire tant. Ce portfolio rassemble mes projets d’ingénierie, mes engagements et les expériences qui ont construit mon parcours.",
      portraitCaption: "Portrait"
    },
    projects: {
      title: "Cours d’ingénierie",
      intro: "Ce que je sais faire, et ce que j’ai construit avec.",
      skillsTitle: "Compétences",
      projectsTitle: "Projets",
      skills: [
        { title: "Langages", items: ["Python", "C", "OCaml", "Fortran"] },
        { title: "Traitement de données", items: ["NumPy et SciPy", "Matplotlib", "Tableurs", "Analyse de données expérimentales"] },
        { title: "Outils et systèmes", items: ["Linux", "Git", "LaTeX", "Windows"] },
        { title: "Soft skills", items: ["Travail en équipe", "Rigueur", "Communication claire", "Motivation"] }
      ],
      items: [
        {
          title: "TIPE : étude théorique d’un looping d’avion",
          context: "Classe préparatoire, projet de TIPE",
          role: "Modélisation et rédaction du rapport",
          desc: "Une étude théorique de la manœuvre du looping : les forces en jeu, la trajectoire et les limites que l’avion doit respecter pour la réaliser.",
          long: "Modélisation de la trajectoire d’un avion qui effectue un looping vertical, à partir des forces qui s’exercent sur lui (poids, portance, poussée et traînée). L’étude montre comment la vitesse, le facteur de charge et le rayon varient au cours de la manœuvre.",
          results: [],
          linkLabel: "Lire le PDF", caption: "Trajectoire d’un avion dans un looping"
        },
        {
          title: "Ressauts hydrauliques",
          context: "TP de mécanique des fluides, école d’ingénieurs, 2026",
          role: "Mesures, analyse des données et rapport",
          desc: "Une étude expérimentale du ressaut hydraulique dans un canal à surface libre.",
          long: "Mesure des hauteurs d’eau en amont et en aval d’un ressaut hydraulique dans un canal, comparées aux relations théoriques (conservation de la masse et de la quantité de mouvement). Étude de la vitesse d’écoulement.",
          results: [],
          linkLabel: "Lire le PDF", caption: "Ressaut hydraulique dans un canal"
        }
      ]
    },
    civic: {
      title: "Engagement citoyen",
      intro: "L’ingénierie, c’est aussi une façon d’être utile aux autres. Ces engagements m’ont appris à écouter, organiser et animer.",
      items: [
        { title: "Restos du Cœur", org: "Organisation", text: "Pendant 10 jours, j’ai découvert le monde associatif et j’ai aidé des personnes en situation de précarité. J’ai réceptionné de la marchandise, je l’ai triée et je l’ai distribuée aux bénéficiaires." },
        { title: "Procès King-Kong", org: "Organisation", text: "Le concept de cette pièce repose sur la présence de trois comédiens et d’un juge. Les trois comédiens jouent dans trois scènes différentes où l’on peut observer des comportements de harcèlement et/ou de violence sexiste et sexuelle. Nous devions les repérer et en discuter avec le juge, qui nous a expliqué les différentes conséquences possibles dans ces trois cas. J’ai trouvé cela vraiment intéressant, car cela permet de sensibiliser aux violences à caractère sexuel et sexiste, mais d’une manière ludique et plus accrocheuse." },
        { title: "Fresque du Climat", org: "Organisation", text: "Au début de ma première année en école d’ingénieurs, j’ai réalisé une Fresque du Climat, entouré de camarades et d’un spécialiste. Nous avons relié les causes à leurs effets et nous en avons appris davantage sur l’un des plus grands enjeux de notre génération." },
        { title: "Clean walk", org: "Organisation", text: "J’ai participé à une clean walk dans le centre-ville de Toulouse. Nous avons ramassé de nombreux déchets." },
        { title: "Festival « Futur Proche »", org: "Organisation", text: "Lors d'une aprèm-midi j'ai pu réflechir en groupe et me poser des questions sur les éthiques de l'ingenieur." }
      ]
    },
    mobility: {
      title: "Mobilité",
      intro: "Toulouse est là où j’étudie aujourd’hui. Les quatre universités ci-dessous sont les échanges que j’espère rejoindre. Sélectionnez un lieu sur la carte pour en savoir plus.",
      items: [
        { place: "Toulouse", country: "France", title: "ENSEEIHT", period: "Depuis 2026", text: "J’étudie actuellement à l’ENSEEIHT, école d’ingénieurs située à Toulouse, au cœur de l’industrie aéronautique européenne. C’est ici que je me spécialise en mécanique des fluides et que je réalise mes projets." },
        { place: "Madrid", country: "Espagne", title: "Universidad Politécnica de Madrid", text: "L’une des universités d’échange que j’aimerais rejoindre. Elle me permettrait d’étudier l’ingénierie dans un nouveau pays, avec une autre culture académique et une nouvelle langue." },
        { place: "Milan", country: "Italie", title: "Politecnico di Milano", text: "Une grande université technique, reconnue pour son département d’ingénierie aérospatiale. Un échange là-bas serait l’occasion d’approfondir l’aéronautique en Italie." },
        { place: "Delft", country: "Pays-Bas", title: "Delft University of Technology (TU Delft)", text: "Une université technique de premier plan, avec une faculté d’ingénierie aérospatiale réputée. C’est l’un des endroits où je rêve d’étudier l’aérodynamique et la mécanique des fluides." },
        { place: "ISAE-SUPAERO", country: "France", title: "Institut supérieur de l’aéronautique et de l’espace", text: "Une référence française de l’ingénierie aérospatiale, dans la même ville que mon école actuelle. Ce serait une façon d’aller plus loin en aéronautique et dans le domaine spatial." }
      ]
    },
    careers: {
      title: "Carrières",
      intro: "Où je vais, et ce que j’ai fait pour y arriver.",
      goal: "Je veux travailler sur la prochaine génération d’avions et sur la mobilité durable, dans une équipe qui mêle conception, essais et curiosité.",
      timelineTitle: "Parcours",
      items: [
        { title: "Stage de fin d’études (objectif)", org: "Entreprise aéronautique", text: "Six mois en aérodynamique ou en structures. Je cherche des opportunités." },
        { title: "Junior-entreprise", org: "N7 Consulting", text: "bientot" },
        { title: "Job d’été", org: "Travail en intérim", text: "Déchargement de marchandises et gestion de colis." },
        { title: "Classes préparatoires, puis école d’ingénieurs", org: "Lille / Toulouse", text: "D’abord les mathématiques, la physique et l’informatique, puis la spécialisation en aéronautique." },
        { title: "BIA", org: "Brevet d’initiation à l’aéronautique", text: "Diplôme obtenu avec la mention très bien." }
      ],
      skills: [
        { name: "Ponctualité" }, { name: "Organisation" }, { name: "Python" }, { name: "Bon relationnel" }, { name: "Travail en équipe et gestion de projet" }
      ],
      cta: "Parlons d’un stage ou d’un premier emploi."
    },
    sports: {
      title: "Sports et centres d’intérêt",
      intro: "Ce que je fais loin des écrans me garde affûté : discipline, esprit d’équipe et curiosité.",
      items: [
        { title: "Voyage", caption: "Découvrir d’autres lieux et d’autres façons de vivre." },
        { title: "Football", caption: "Un sport d’équipe : communication, effort et confiance." },
        { title: "Escalade", caption: "Lire une voie, c’est résoudre un problème avec tout son corps." },
        { title: "Aéronautique", caption: "La passion derrière mes études : comment et pourquoi ça vole." },
        { title: "Espace", caption: "Fusées, orbites et les questions qui vont avec." }
      ]
    }
  }
};
