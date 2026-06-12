window.PORTFOLIO_DATA = {
  en: {
    meta: {
      title: "Lev Levinov | Electronics Engineering Portfolio",
      description:
        "Technical portfolio for Lev Levinov: electronics, embedded systems, CAD, prototyping and digital fabrication.",
    },
    navigation: {
      profile: "About me",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    translations: {
      current: "Current position",
      viewProjects: "View projects",
      contact: "Contact",
      downloadCv: "Download CV",
      viewDetails: "View details",
      learnMore: "Learn more",
      responsibilities: "Key responsibilities",
      skillsUsed: "Skills used",
      tools: "Tools & Technologies",
      status: "Project status",
      context: "Context",
      objective: "Objective",
      technicalApproach: "Technical approach",
      result: "Result",
      skillsDemonstrated: "Skills demonstrated",
      gallery: "Gallery / images area",
      contextCompany: "Context and company",
      technicalTasks: "Technical tasks",
      resultsImpact: "Results and impact",
      contextLabel: "Context",
      periodLabel: "Period",
      locationLabel: "Location",
      roleLabel: "ROLE",
      all: "All",
      backToProjects: "Back to projects",
      backToExperience: "Back to experience",
      toBeCompleted: "To be completed",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
    },
    hero: {
      title: "Lev Levinov",
      subtitle: "",
      positioning: "",
      description: [
        "Hello, I am a student in the Electrical Engineering and Industrial Computing department. My future specialization will be electronics.",
        "In addition, I am training in the field of CAD development. I work on design, applied load studies and simulations, as well as prototyping.",
      ],
      locationLabel: "Location",
      location: "France — Bordeaux",
      currentSituationLabel: "Current situation",
      currentSituation:
        "I am currently a student in the GEII department at IUT de Bordeaux. I remain available to participate in projects and collaborations.",
      availabilityLabel: "Availability",
      availability: "Available for technical projects and collaborations.",
      cvHref: "#",
      photoSrc: "/public/images/profile-photo.png",
      photoAlt: "Professional portrait of Lev Levinov",
    },
    profile: {
      eyebrow: "ABOUT ME",
      title: "Student on the path to becoming an engineer.",
      description: [
        "Being passionate about engineering, especially electronics and CAD design, I started my studies in the field of electronics.",
        "By participating in several university and amateur projects, I acquire new knowledge and develop my skills.",
        "My view of problems is simple and practical: I see the problem, I understand it, I develop the right and simple solution, then I apply it.",
        "I emphasize personal qualities such as pragmatism, resistance to stress and scrupulousness. The rest, I leave for you to see.",
      ],
    },
    currentPosition: {
      eyebrow: "HOBBIES",
      title: "Hobbies",
      description: [
        "When I have free time, I make good use of it:",
        "I play guitar, do design work or build models.",
        "I also practice the following activities: weight training, calisthenics, cycling, dinghy sailing and bivouacking.",
      ],
      status: "Currently, I am focused on my studies and I am also involved in a startup.",
    },
    skills: {
      eyebrow: "SKILLS",
      title: "Skills organized by technical domain.",
      categories: [
        {
          title: "GEII – BUT 1",
          mainItems: ["Design", "Verify", "Manufacture"],
        },
        {
          title: "CAD",
          subcards: [
            {
              title: "SolidWorks",
              items: ["Design", "Simulate", "Aerodynamic study", "Stress analysis"],
            },
            {
              title: "Fusion 360",
              items: ["Design", "Simulate", "Aerodynamic study", "Stress analysis"],
            },
          ],
        },
        {
          title: "Digital fabrication",
          subcards: [
            {
              title: "3D printing",
              items: ["Set parameters", "Manufacture", "Maintain"],
            },
            {
              title: "CNC milling",
              items: ["Set parameters", "Manufacture", "Maintain"],
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "EXPERIENCE",
      title: "Technical experience and documented contributions.",
      items: [
        {
          slug: "technical-experience-placeholder",
          title: "Technical team member",
          projectTitle: "Mission Sophie — university and scientific project",
          company: "Mission Sophie — university and scientific project",
          period: "January 2026 — April 2026",
          location: "Bordeaux, France",
          summary:
            "Technical contribution to the hardware and mechanical preparation of the project, including participation in cabling, assembly and prototyping tasks.",
          role: "Technical team member",
          responsibilities: [
            "Cable routing, organization and fixing",
            "Assembly of antenna elements",
            "3D modeling of technical brackets",
            "Design of a support for push-to-talk microphones",
            "Preparation of parts for 3D printing",
          ],
          skills: ["Fusion 360", "3D printing", "Hand tools", "Technical assembly"],
          details: {
            context:
              "Mission Sophie is an educational contact project with French astronaut Sophie Adenot. Lev contributed as a technical member within the team, without being presented as the central person of the project.",
            technicalTasks: [
              "Cable routing, organization and fixing",
              "Assembly of antenna elements",
              "3D modeling of technical brackets",
              "Design of a support for push-to-talk microphones",
              "Preparation of parts for 3D printing",
            ],
            results: ["Contribution integrated into a project completed with a positive outcome."],
          },
        },
        {
          slug: "cad-mechanical-prototyping-du-tss",
          title: "CAD & mechanical prototyping responsible",
          projectTitle: "HEALTH SEA project — university project",
          context: "As part of the DU TSS programme",
          company: "HEALTH SEA project — university project",
          period: "March 2026 — June 2026",
          location: "Bordeaux, France",
          summary: "3D design and preparation of a prototype related to a sensor-based monitoring system.",
          role: "CAD and mechanical design lead",
          responsibilities: [
            "Development of the 3D design",
            "Preparation of the model for 3D printing",
            "Mechanical prototyping",
            "Adaptation of the design to project constraints",
          ],
          skills: ["Fusion 360", "3D printing", "Prototyping"],
          details: {
            context:
              "DU TSS is a university project context. Lev contributed to CAD design and mechanical prototyping for a prototype involving sensor-based monitoring.",
            technicalTasks: [
              "Development of the 3D design",
              "Preparation of the model for 3D printing",
              "Mechanical prototyping",
              "Adaptation of the design to project constraints",
            ],
            results: ["Project currently in progress."],
          },
        },
      ],
    },
    projects: {
      eyebrow: "PROJECTS",
      title: "Technical projects",
      note: "Detailed projects will be added progressively with their dedicated files.",
      filters: [
        { key: "all", label: "All" },
        { key: "electronics", label: "Electronics" },
        { key: "drones", label: "Drones" },
        { key: "cad", label: "CAD" },
        { key: "cnc", label: "CNC" },
        { key: "3d-printing", label: "3D Printing" },
        { key: "personal-rd", label: "Personal R&D" },
      ],
      items: [
        {
          slug: "embedded-electronics-prototype",
          title: "Embedded electronics prototype",
          category: "Electronics",
          filter: "electronics",
          summary: "Detailed description to be completed with context, objectives, tools used and technical results.",
          tools: ["To be completed"],
          status: "To be completed",
          subtitle: "Technical project file to be completed",
          details: {
            context: "Detailed description to be completed with context, objectives, tools used and technical results.",
            objective: "To be completed.",
            approach: "To be completed.",
            result: "To be completed.",
            skills: ["To be completed"],
          },
        },
        {
          slug: "cad-digital-fabrication-study",
          title: "CAD and digital fabrication study",
          category: "CAD",
          filter: "cad",
          summary: "Detailed description to be completed with context, objectives, tools used and technical results.",
          tools: ["To be completed"],
          status: "To be completed",
          subtitle: "Technical project file to be completed",
          details: {
            context: "Detailed description to be completed with context, objectives, tools used and technical results.",
            objective: "To be completed.",
            approach: "To be completed.",
            result: "To be completed.",
            skills: ["To be completed"],
          },
        },
      ],
    },
    education: {
      eyebrow: "EDUCATION",
      title: "Education, certifications and attestations",
      labels: {
        organization: "Organization",
        period: "Period",
        date: "Date",
        location: "Location",
        status: "Status",
        competencies: "Key skills",
      },
      groups: [
        {
          title: "Education",
          items: [
            {
              name: "GEII student — Electrical Engineering and Industrial Computing",
              organization: "IUT de Bordeaux",
              year: "2026",
              location: "Bordeaux, France",
              status: "In progress",
              competencies:
                "Electronics, embedded systems, industrial computing, measurements and automation.",
            },
            {
              name: "ENIC-NARIC comparability statement",
              description:
                "Level comparable to the French general baccalaureate, based on Ukrainian secondary education.",
              organization: "",
              year: "2010 — 2022",
              location: "",
              competencies: "General secondary education.",
            },
          ],
        },
        {
          title: "Certifications",
          items: [
            {
              name: "DELF B2",
              organization: "Official French language certification",
              year: "Date: 26/11/2024",
              location: "",
              competencies: "B2 level in French.",
            },
            {
              name: "Remote pilot certificate — Open categories A1/A3",
              organization: "",
              year: "Date: 17/01/2026",
              location: "",
              competencies: "Regulatory fundamentals for drone operations in open categories A1/A3.",
            },
          ],
        },
        {
          title: "Attestations",
          items: [
            {
              name: "Amateur radio operator certificate",
              organization: "",
              year: "Date: 06/05/2026",
              location: "",
              competencies: "Regulatory and technical fundamentals of amateur radio communications.",
            },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Contact",
      availability: "Available for technical projects and collaborations.",
      labels: {
        location: "Location",
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
        github: "GitHub",
        website: "Website",
      },
      location: "France — Bordeaux",
      email: "levinovlev.fr@gmail.com",
      phone: "+33 7 85 14 78 53",
      linkedin: "To be completed",
      github: "",
      websites: ["To be completed"],
    },
    footer: {
      label: "Electronics, embedded systems, CAD and digital fabrication",
      copyright: "Copyright 2026 Lev Levinov",
    },
  },
  fr: {
    meta: {
      title: "Lev Levinov | Portfolio d’ingénierie électronique",
      description:
        "Portfolio technique de Lev Levinov : électronique, systèmes embarqués, CAO, prototypage et fabrication numérique.",
    },
    navigation: {
      profile: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },
    translations: {
      current: "Situation actuelle",
      viewProjects: "Voir les projets",
      contact: "Me contacter",
      downloadCv: "Télécharger le CV",
      viewDetails: "Voir détails",
      learnMore: "En savoir plus",
      responsibilities: "Principales responsabilités",
      skillsUsed: "Compétences utilisées",
      tools: "Outils et technologies",
      status: "Statut du projet",
      context: "Contexte",
      objective: "Objectif",
      technicalApproach: "Approche technique",
      result: "Résultat",
      skillsDemonstrated: "Compétences démontrées",
      gallery: "Galerie / zone images",
      contextCompany: "Contexte et entreprise",
      technicalTasks: "Tâches techniques",
      resultsImpact: "Résultats et impact",
      contextLabel: "Contexte",
      periodLabel: "Période",
      locationLabel: "Localisation",
      roleLabel: "RÔLE OCCUPÉ",
      all: "Tous",
      backToProjects: "Retour aux projets",
      backToExperience: "Retour à l’expérience",
      toBeCompleted: "À compléter",
      menuOpen: "Ouvrir la navigation",
      menuClose: "Fermer la navigation",
    },
    hero: {
      title: "Lev Levinov",
      subtitle: "",
      positioning: "",
      description: [
        "Bonjour, je suis étudiant au département Génie électrique et informatique industrielle. Ma future spécialisation sera l’électronique.",
        "En plus, je me forme dans le domaine du développement CAO. Je fais de la conception, des études des charges appliquées et des simulations, ainsi que du prototypage.",
      ],
      locationLabel: "Localisation",
      location: "France — Bordeaux",
      currentSituationLabel: "Situation actuelle",
      currentSituation:
        "Actuellement, je suis étudiant dans le département GEII de l’IUT de Bordeaux. Je reste disponible pour participer à des projets et collaborations.",
      availabilityLabel: "Disponibilité",
      availability: "Disponible pour des projets techniques et des collaborations.",
      cvHref: "#",
      photoSrc: "/public/images/profile-photo.png",
      photoAlt: "Portrait professionnel de Lev Levinov",
    },
    profile: {
      eyebrow: "À PROPOS DE MOI",
      title: "Étudiant sur le chemin d’ingénieur.",
      description: [
        "Étant passionné par l’ingénierie, surtout par l’électronique et la conception CAO, j’ai commencé mes études dans le domaine de l’électronique.",
        "En participant à plusieurs projets universitaires et amateurs, j’acquiers de nouvelles connaissances et je développe mes compétences.",
        "Ma vision des problèmes est simple et pratique : je vois le problème, je le comprends, je développe la solution juste et simple, puis je l’applique.",
        "Je souligne mes qualités personnelles telles que le pragmatisme, la résistance au stress et la scrupulosité. Le reste, je vous laisse le voir.",
      ],
    },
    currentPosition: {
      eyebrow: "HOBBIES",
      title: "Hobbies",
      description: [
        "Quand j’ai du temps libre, j’en profite :",
        "Je joue de la guitare, je fais du design ou du modélisme.",
        "Je pratique également les activités suivantes : la musculation, la calisthénie, le vélo, la navigation en dériveur et le bivouac.",
      ],
      status: "Actuellement, je suis occupé par mes études et je suis également intégré dans une startup.",
    },
    skills: {
      eyebrow: "COMPÉTENCES",
      title: "Compétences organisées par domaine technique.",
      categories: [
        {
          title: "GEII – BUT 1",
          mainItems: ["Concevoir", "Vérifier", "Fabriquer"],
        },
        {
          title: "CAO",
          subcards: [
            {
              title: "SolidWorks",
              items: ["Concevoir", "Simuler", "Étude aérodynamique", "Étude des contraintes"],
            },
            {
              title: "Fusion 360",
              items: ["Concevoir", "Simuler", "Étude aérodynamique", "Étude des contraintes"],
            },
          ],
        },
        {
          title: "Fabrication numérique",
          subcards: [
            {
              title: "Impression 3D",
              items: ["Régler les paramètres", "Fabriquer", "Entretenir"],
            },
            {
              title: "Fraisage CNC",
              items: ["Régler les paramètres", "Fabriquer", "Entretenir"],
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "EXPÉRIENCE",
      title: "Expériences techniques et contributions documentées.",
      items: [
        {
          slug: "technical-experience-placeholder",
          title: "Membre de l’équipe technique",
          projectTitle: "Mission Sophie — projet universitaire et scientifique",
          company: "Mission Sophie — projet universitaire et scientifique",
          period: "Janvier 2026 — Avril 2026",
          location: "Bordeaux, France",
          summary:
            "Contribution technique à la préparation matérielle et mécanique du projet, avec participation aux tâches de câblage, d’assemblage et de prototypage.",
          role: "Équipier technique",
          responsibilities: [
            "Cheminement, organisation et fixation de câbles",
            "Assemblage d’éléments d’antenne",
            "Modélisation 3D de supports techniques",
            "Conception d’un support pour microphones push-to-talk",
            "Préparation de pièces destinées à l’impression 3D",
          ],
          skills: ["Fusion 360", "Impression 3D", "Outils manuels", "Assemblage technique"],
          details: {
            context:
              "Mission Sophie est un projet de contact éducatif avec l’astronaute française Sophie Adenot. Lev y contribue comme membre technique au sein de l’équipe, sans être présenté comme la personne centrale du projet.",
            technicalTasks: [
              "Cheminement, organisation et fixation de câbles",
              "Assemblage d’éléments d’antenne",
              "Modélisation 3D de supports techniques",
              "Conception d’un support pour microphones push-to-talk",
              "Préparation de pièces destinées à l’impression 3D",
            ],
            results: ["Contribution intégrée à un projet mené à terme avec un résultat positif."],
          },
        },
        {
          slug: "cad-mechanical-prototyping-du-tss",
          title: "Responsable CAO & prototypage mécanique",
          projectTitle: "Projet HEALTH SEA — projet universitaire",
          context: "Dans le cadre du DU TSS",
          company: "Projet HEALTH SEA — projet universitaire",
          period: "Mars 2026 — Juin 2026",
          location: "Bordeaux, France",
          summary: "Conception 3D et préparation d’un prototype lié à un système de monitoring basé sur des capteurs.",
          role: "Responsable CAO et mécanique",
          responsibilities: [
            "Développement de la conception 3D",
            "Préparation du modèle pour impression 3D",
            "Prototypage mécanique",
            "Adaptation de la conception aux contraintes du projet",
          ],
          skills: ["Fusion 360", "Impression 3D", "Prototypage"],
          details: {
            context:
              "DU TSS est un contexte de projet universitaire. Lev y contribue à la conception CAO et au prototypage mécanique d’un prototype impliquant un monitoring basé sur des capteurs.",
            technicalTasks: [
              "Développement de la conception 3D",
              "Préparation du modèle pour impression 3D",
              "Prototypage mécanique",
              "Adaptation de la conception aux contraintes du projet",
            ],
            results: ["Projet en cours de réalisation."],
          },
        },
      ],
    },
    projects: {
      eyebrow: "PROJETS",
      title: "Projets techniques",
      note: "Les projets détaillés seront ajoutés progressivement avec leurs fichiers dédiés.",
      filters: [
        { key: "all", label: "Tous" },
        { key: "electronics", label: "Électronique" },
        { key: "drones", label: "Drones" },
        { key: "cad", label: "CAO" },
        { key: "cnc", label: "Fraisage CNC" },
        { key: "3d-printing", label: "Impression 3D" },
        { key: "personal-rd", label: "R&D personnelle" },
      ],
      items: [
        {
          slug: "embedded-electronics-prototype",
          title: "Prototype électronique embarqué",
          category: "Électronique",
          filter: "electronics",
          summary:
            "Description détaillée à compléter avec le contexte, les objectifs, les outils utilisés et les résultats techniques.",
          tools: ["À compléter"],
          status: "À compléter",
          subtitle: "Fiche projet technique à compléter",
          details: {
            context:
              "Description détaillée à compléter avec le contexte, les objectifs, les outils utilisés et les résultats techniques.",
            objective: "À compléter.",
            approach: "À compléter.",
            result: "À compléter.",
            skills: ["À compléter"],
          },
        },
        {
          slug: "cad-digital-fabrication-study",
          title: "Étude CAO et fabrication numérique",
          category: "CAO",
          filter: "cad",
          summary:
            "Description détaillée à compléter avec le contexte, les objectifs, les outils utilisés et les résultats techniques.",
          tools: ["À compléter"],
          status: "À compléter",
          subtitle: "Fiche projet technique à compléter",
          details: {
            context:
              "Description détaillée à compléter avec le contexte, les objectifs, les outils utilisés et les résultats techniques.",
            objective: "À compléter.",
            approach: "À compléter.",
            result: "À compléter.",
            skills: ["À compléter"],
          },
        },
      ],
    },
    education: {
      eyebrow: "FORMATION",
      title: "Formation, certifications et attestations",
      labels: {
        organization: "Organisation",
        period: "Période",
        date: "Date",
        location: "Localisation",
        status: "Statut",
        competencies: "Compétences clés",
      },
      groups: [
        {
          title: "Formation",
          items: [
            {
              name: "Étudiant en GEII — Génie électrique et informatique industrielle",
              organization: "IUT de Bordeaux",
              year: "2026",
              location: "Bordeaux, France",
              status: "En cours",
              competencies:
                "Électronique, systèmes embarqués, informatique industrielle, mesures et automatisation.",
            },
            {
              name: "Attestation de comparabilité ENIC-NARIC",
              description:
                "Niveau comparable au baccalauréat général français, basé sur le parcours d’enseignement secondaire ukrainien.",
              organization: "",
              year: "2010 — 2022",
              location: "",
              competencies: "Formation générale secondaire.",
            },
          ],
        },
        {
          title: "Certifications",
          items: [
            {
              name: "DELF B2",
              organization: "Certification officielle de langue française",
              year: "Date : 26/11/2024",
              location: "",
              competencies: "Niveau B2 en français.",
            },
            {
              name: "Attestation de télépilote — catégories ouvertes A1/A3",
              organization: "",
              year: "Date : 17/01/2026",
              location: "",
              competencies:
                "Bases réglementaires pour l’exploitation de drones en catégorie ouverte A1/A3.",
            },
          ],
        },
        {
          title: "Attestations",
          items: [
            {
              name: "Certificat d’opérateur des services d’amateur",
              organization: "",
              year: "Date : 06/05/2026",
              location: "",
              competencies:
                "Bases réglementaires et techniques des communications radioamateur.",
            },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Contact",
      availability: "Disponible pour des projets techniques et des collaborations.",
      labels: {
        location: "Localisation",
        email: "Email",
        phone: "Téléphone",
        linkedin: "LinkedIn",
        github: "GitHub",
        website: "Site web",
      },
      location: "France — Bordeaux",
      email: "levinovlev.fr@gmail.com",
      phone: "+33 7 85 14 78 53",
      linkedin: "À compléter",
      github: "",
      websites: ["À compléter"],
    },
    footer: {
      label: "Électronique, systèmes embarqués, CAO et fabrication numérique",
      copyright: "Copyright 2026 Lev Levinov",
    },
  },
};

(() => {
  const base = "/public/images/mission-sophie/";
  const imageSrc = (file) => `${base}${file}`;

  const images = {
    p01: imageSrc("mission-sophie-01-antenna-test-setup.jpg"),
    p02: imageSrc("mission-sophie-02-final-mast.jpg"),
    p03: imageSrc("mission-sophie-03-rotor-before-fixation.jpg"),
    p04: imageSrc("mission-sophie-04-rotor-fixation-installed.jpg"),
    p05: imageSrc("mission-sophie-05-printed-fixation-parts.jpg"),
    p06: imageSrc("mission-sophie-06-cable-routing.jpg"),
    p07: imageSrc("mission-sophie-07-antenna-assembly-indoor.jpg"),
    p08: imageSrc("mission-sophie-08-workshop-preparation.jpg"),
    p09: imageSrc("mission-sophie-09-outdoor-antenna-setup.jpg"),
    p10: imageSrc("mission-sophie-10-mast-installation.jpg"),
    p11: imageSrc("mission-sophie-11-ptt-microphone-stands.jpg"),
    p12: imageSrc("mission-sophie-12-audio-router-exterior.jpg"),
    p13: imageSrc("mission-sophie-13-audio-router-interior.jpg"),
  };

  window.PORTFOLIO_DATA.en.experience.items[0].detailHref = "/en/projects/mission-sophie";
  window.PORTFOLIO_DATA.fr.experience.items[0].detailHref = "/fr/projects/mission-sophie";

  window.PORTFOLIO_DATA.en.projects.items[0] = {
    slug: "mission-sophie",
    title: "Mission Sophie",
    category: "Electronics / Radio / Prototyping",
    filter: "electronics",
    summary:
      "Technical contribution to the preparation of a radio setup and several mechanical prototypes as part of the Mission Sophie project.",
    tools: ["Fusion 360", "3D printing", "Cabling", "Technical assembly"],
    status: "Completed",
    subtitle: "",
    detailType: "mission-sophie",
    details: {
      context:
        "Mission Sophie is an educational and scientific project led by the GEII department of IUT de Bordeaux and the University of Bordeaux.",
      objective:
        "Contribute to the preparation of the radio setup, mechanical assembly and functional prototyping tasks.",
      approach:
        "CAD design, 3D printed parts, cabling preparation, antenna assembly and technical teamwork.",
      result:
        "The contributions were integrated into the technical preparation of the project.",
      skills: [
        "Fusion 360",
        "FDM 3D printing",
        "Mechanical design",
        "Functional prototyping",
        "Technical assembly",
      ],
    },
    missionDetail: {
      eyebrow: "TECHNICAL PROJECT",
      summary:
        "Mission Sophie is an educational and scientific project led by the GEII department of IUT de Bordeaux and the University of Bordeaux. The project aims to introduce students to science, electronics, radio communications and space exploration, including a radio contact component within the ARISS program.",
      meta: [
        { label: "Role", value: "Team member" },
        { label: "Period", value: "January 2026 — April 2026" },
        { label: "Location", value: "Bordeaux, France" },
        { label: "Context", value: "GEII Department, IUT de Bordeaux" },
      ],
      heroImage: {
        src: images.p01,
        alt: "Antenna test setup used during Mission Sophie preparation",
      },
      externalLink: {
        label: "Link",
        href: "https://www.iut.u-bordeaux.fr/projet-mission-sophie/",
      },
      overview: {
        eyebrow: "PROJECT OVERVIEW",
        title: "Project context",
        paragraphs: [
          "Being invited and interested in participating, I joined the project’s technical team to contribute to the preparation of the radio setup, mechanical assembly and prototyping of functional parts.",
          "My role was to provide a technical contribution on specific elements: antenna rotor fixation, preparation of 3D printed supports, participation in cabling, assembly of antenna elements and design of small equipment intended for radio operators.",
        ],
      },
      contributionsEyebrow: "TECHNICAL CONTRIBUTION",
      contributionsTitle: "Contribution summary",
      contributions: [
        {
          title: "Antenna rotor fixation",
          paragraphs: [
            "During the testing period, the Radio Club only had a small antenna setup available. This setup had one issue: the rotor did not have a sufficiently rigid fixation with its support, which could create a mechanical stability problem.",
            "After taking measurements, I designed a fixation part in Fusion 360 and then produced a first prototype using 3D printing. After adjustments, the part was installed on the setup to improve the mechanical stability of the assembly.",
          ],
          images: ["Photo 03", "Photo 04", "Photo 05"],
        },
        {
          title: "Antenna and cable preparation",
          paragraphs: [
            "As an enthusiast, I wanted to help move this project forward as much as possible.",
            "At the beginning, I started with the assembly of the two directional antennas.",
            "Then, I participated in the preparation of the coaxial cables: connector installation, cable routing and installation of the antenna assembly outdoors.",
            "In this technical part, I applied my ability to work manually.",
          ],
          images: ["Photo 06", "Photo 07", "Photo 08", "Photo 09", "Photo 10"],
        },
        {
          title: "PTT microphone stands",
          paragraphs: [
            "Following a request from my colleague, I designed PTT (Push to talk) microphone stands to make the operator workstation easier to organize and the equipment easier to use during the radio contact. These parts were modeled in Fusion 360 and then produced using 3D printing.",
          ],
          images: ["Photo 11"],
        },
        {
          title: "Audio channel router enclosure",
          paragraphs: [
            "Another element produced as part of the project is an enclosure for audio channel routing. The goal was to provide a cleaner integration of the connections and make the audio wiring easier to organize.",
            "This enclosure was designed in Fusion 360 and then 3D printed.",
          ],
          images: ["Photo 12", "Photo 13"],
        },
      ],
      galleryTitle: "Structured image gallery",
      galleryGroups: [
        {
          title: "Radio setup and antennas",
          images: [
            {
              number: "Photo 01",
              caption: "Antenna test setup",
              phase: "Radio setup",
              src: images.p01,
              alt: "Antenna test setup with Mission Sophie team members",
              layout: "is-wide",
            },
            {
              number: "Photo 02",
              caption: "Final mast with antennas",
              phase: "Radio setup",
              src: images.p02,
              alt: "Final mast with antenna setup",
              layout: "is-portrait",
            },
            {
              number: "Photo 09",
              caption: "Outdoor antenna setup",
              phase: "Installation",
              src: images.p09,
              alt: "Outdoor antenna setup on the IUT site",
              layout: "is-standard",
            },
            {
              number: "Photo 10",
              caption: "Mast installation",
              phase: "Installation",
              src: images.p10,
              alt: "Mast and antenna installation",
              layout: "is-portrait",
            },
          ],
        },
        {
          title: "Rotor fixation",
          images: [
            {
              number: "Photo 03",
              caption: "Rotor before rigid fixation",
              phase: "Mechanical fixation",
              src: images.p03,
              alt: "Rotor before rigid fixation",
              layout: "is-portrait",
            },
            {
              number: "Photo 04",
              caption: "Installed fixation",
              phase: "Mechanical fixation",
              src: images.p04,
              alt: "Installed orange rotor fixation",
              layout: "is-wide",
            },
            {
              number: "Photo 05",
              caption: "3D printed fixation parts",
              phase: "Prototype parts",
              src: images.p05,
              alt: "3D printed orange fixation parts",
              layout: "is-standard",
            },
          ],
        },
        {
          title: "Preparation, cabling and assembly",
          images: [
            {
              number: "Photo 06",
              caption: "Cable routing",
              phase: "Cabling",
              src: images.p06,
              alt: "Cable routing and preparation",
              layout: "is-portrait",
            },
            {
              number: "Photo 07",
              caption: "Antenna element assembly",
              phase: "Assembly",
              src: images.p07,
              alt: "Antenna assembly preparation indoors",
              layout: "is-wide",
            },
            {
              number: "Photo 08",
              caption: "Indoor preparation",
              phase: "Workshop",
              src: images.p08,
              alt: "Preparation room and workshop environment",
              layout: "is-wide",
            },
          ],
        },
        {
          title: "Operator equipment",
          images: [
            {
              number: "Photo 11",
              caption: "PTT microphone stands",
              phase: "Operator equipment",
              src: images.p11,
              alt: "PTT microphone stands",
              layout: "is-wide",
            },
            {
              number: "Photo 12",
              caption: "Audio router, exterior view",
              phase: "Audio routing",
              src: images.p12,
              alt: "Exterior view of the audio channel router",
              layout: "is-standard",
            },
            {
              number: "Photo 13",
              caption: "Audio router, interior view",
              phase: "Audio routing",
              src: images.p13,
              alt: "Interior view of the audio channel router",
              layout: "is-standard",
            },
          ],
        },
      ],
      skillsTitle: "Tools and skills used",
      skills: [
        "Fusion 360",
        "FDM 3D printing",
        "Mechanical design",
        "Functional prototyping",
        "Technical assembly",
        "Cable preparation",
        "Technical teamwork",
        "Project documentation",
      ],
      resultTitle: "Conclusion",
      resultParagraphs: [
        "These contributions were integrated into the technical preparation of the project. The radio contact was completed through coordinated teamwork, with hardware preparation combining electronics, radio, mechanics, cabling and prototyping.",
      ],
      backLabel: "Back to portfolio",
      backHref: "/en/#experience",
    },
  };

  window.PORTFOLIO_DATA.fr.projects.items[0] = {
    slug: "mission-sophie",
    title: "Mission Sophie",
    category: "Électronique / Radio / Prototypage",
    filter: "electronics",
    summary:
      "Contribution technique à la préparation d’un dispositif radio et de plusieurs prototypes mécaniques dans le cadre du projet Mission Sophie.",
    tools: ["Fusion 360", "Impression 3D", "Câblage", "Assemblage technique"],
    status: "Réalisé",
    subtitle: "",
    detailType: "mission-sophie",
    details: {
      context:
        "Mission Sophie est un projet pédagogique et scientifique porté par le département GEII de l’IUT de Bordeaux et l’Université de Bordeaux.",
      objective:
        "Contribuer à la préparation du dispositif radio, à l’assemblage mécanique et au prototypage de pièces fonctionnelles.",
      approach:
        "Conception CAO, pièces imprimées en 3D, préparation de câblage, assemblage d’antennes et travail en équipe technique.",
      result:
        "Les contributions ont été intégrées à la préparation technique du projet.",
      skills: [
        "Fusion 360",
        "Impression 3D FDM",
        "Conception mécanique",
        "Prototypage fonctionnel",
        "Assemblage technique",
      ],
    },
    missionDetail: {
      eyebrow: "PROJET TECHNIQUE",
      summary:
        "Mission Sophie est un projet pédagogique et scientifique porté par le département GEII de l’IUT de Bordeaux et l’Université de Bordeaux. Le projet s’inscrit dans une démarche de découverte des sciences, de l’électronique, des communications radio et de l’exploration spatiale, avec un volet de contact radio dans le cadre du programme ARISS.",
      meta: [
        { label: "Rôle", value: "Équipier" },
        { label: "Période", value: "Janvier 2026 — Avril 2026" },
        { label: "Lieu", value: "Bordeaux, France" },
        { label: "Contexte", value: "Département GEII, IUT de Bordeaux" },
      ],
      heroImage: {
        src: images.p01,
        alt: "Installation d’essai avec antennes pour la préparation de Mission Sophie",
      },
      externalLink: {
        label: "Link",
        href: "https://www.iut.u-bordeaux.fr/projet-mission-sophie/",
      },
      overview: {
        eyebrow: "CONTEXTE",
        title: "Contexte du projet",
        paragraphs: [
          "Étant invité et intéressé à participer, j’ai rejoint l’équipe technique du projet pour contribuer à la préparation du dispositif radio, à l’assemblage mécanique et au prototypage de pièces fonctionnelles.",
          "Mon rôle était d’apporter une contribution technique sur des éléments précis : fixation du rotor d’antenne, préparation de supports imprimés en 3D, participation au câblage, assemblage d’éléments d’antenne et conception de petits équipements destinés aux opérateurs radio.",
        ],
      },
      contributionsEyebrow: "CONTRIBUTION TECHNIQUE",
      contributionsTitle: "Synthèse des contributions",
      contributions: [
        {
          title: "Fixation du rotor d’antenne",
          paragraphs: [
            "Pendant la période des essais, le Radio Club ne disposait que d’une petite installation avec des antennes. Cette installation présentait un problème : le rotor ne disposait pas d’une fixation suffisamment rigide avec son support, ce qui pouvait poser un problème de stabilité mécanique.",
            "Après prise de mesures, j’ai conçu une pièce de fixation sous Fusion 360, puis réalisé un premier prototype en impression 3D. Après ajustements, la pièce a été installée sur le dispositif afin d’améliorer la tenue mécanique de l’ensemble.",
          ],
          images: ["Photo 03", "Photo 04", "Photo 05"],
        },
        {
          title: "Préparation des antennes et du câblage",
          paragraphs: [
            "En tant qu’enthousiaste, je voulais aider à faire avancer ce projet au maximum.",
            "Au départ, j’ai commencé par l’assemblage des deux antennes directives.",
            "Ensuite, j’ai participé à la préparation des câbles coaxiaux : montage des connecteurs, cheminement des câbles et installation de l’ensemble des antennes à l’extérieur.",
            "Dans cette partie technique, j’ai appliqué ma capacité à travailler manuellement.",
          ],
          images: ["Photo 06", "Photo 07", "Photo 08", "Photo 09", "Photo 10"],
        },
        {
          title: "Supports pour microphones PTT",
          paragraphs: [
            "À la suite d’une demande de mon collègue, j’ai conçu des supports pour microphones PTT (Push to talk) afin de faciliter l’organisation du poste opérateur et l’utilisation du matériel pendant le contact radio. Ces pièces ont été modélisées sous Fusion 360, puis fabriquées par impression 3D.",
          ],
          images: ["Photo 11"],
        },
        {
          title: "Boîtier pour routeur de canaux audio",
          paragraphs: [
            "Un autre élément réalisé dans le cadre du projet est un boîtier pour le routage des canaux audio. L’objectif était de proposer une intégration plus propre des connexions et de faciliter l’organisation du câblage audio.",
            "Ce boîtier a été conçu sous Fusion 360, puis imprimé en 3D.",
          ],
          images: ["Photo 12", "Photo 13"],
        },
      ],
      galleryTitle: "Galerie structurée",
      galleryGroups: [
        {
          title: "Dispositif radio et antennes",
          images: [
            {
              number: "Photo 01",
              caption: "Installation d’essai avec antennes",
              phase: "Dispositif radio",
              src: images.p01,
              alt: "Installation d’essai avec antennes et membres de l’équipe Mission Sophie",
              layout: "is-wide",
            },
            {
              number: "Photo 02",
              caption: "Mât final avec antennes",
              phase: "Dispositif radio",
              src: images.p02,
              alt: "Mât final avec antennes",
              layout: "is-portrait",
            },
            {
              number: "Photo 09",
              caption: "Installation extérieure",
              phase: "Installation",
              src: images.p09,
              alt: "Installation extérieure des antennes sur le site de l’IUT",
              layout: "is-standard",
            },
            {
              number: "Photo 10",
              caption: "Installation du mât",
              phase: "Installation",
              src: images.p10,
              alt: "Installation du mât et des antennes",
              layout: "is-portrait",
            },
          ],
        },
        {
          title: "Fixation du rotor",
          images: [
            {
              number: "Photo 03",
              caption: "Rotor avant fixation rigide",
              phase: "Fixation mécanique",
              src: images.p03,
              alt: "Rotor avant fixation rigide",
              layout: "is-portrait",
            },
            {
              number: "Photo 04",
              caption: "Fixation installée",
              phase: "Fixation mécanique",
              src: images.p04,
              alt: "Fixation orange installée sur le rotor",
              layout: "is-wide",
            },
            {
              number: "Photo 05",
              caption: "Pièces imprimées en 3D",
              phase: "Pièces prototype",
              src: images.p05,
              alt: "Pièces de fixation imprimées en 3D",
              layout: "is-standard",
            },
          ],
        },
        {
          title: "Préparation, câblage et assemblage",
          images: [
            {
              number: "Photo 06",
              caption: "Cheminement des câbles",
              phase: "Câblage",
              src: images.p06,
              alt: "Cheminement des câbles",
              layout: "is-portrait",
            },
            {
              number: "Photo 07",
              caption: "Assemblage d’éléments d’antenne",
              phase: "Assemblage",
              src: images.p07,
              alt: "Préparation de l’assemblage d’éléments d’antenne en salle",
              layout: "is-wide",
            },
            {
              number: "Photo 08",
              caption: "Préparation en salle",
              phase: "Atelier",
              src: images.p08,
              alt: "Salle de préparation et environnement de travail",
              layout: "is-wide",
            },
          ],
        },
        {
          title: "Équipements opérateur",
          images: [
            {
              number: "Photo 11",
              caption: "Supports pour microphones PTT",
              phase: "Équipement opérateur",
              src: images.p11,
              alt: "Supports pour microphones PTT",
              layout: "is-wide",
            },
            {
              number: "Photo 12",
              caption: "Boîtier audio, vue extérieure",
              phase: "Routage audio",
              src: images.p12,
              alt: "Boîtier de routeur audio en vue extérieure",
              layout: "is-standard",
            },
            {
              number: "Photo 13",
              caption: "Boîtier audio, vue intérieure",
              phase: "Routage audio",
              src: images.p13,
              alt: "Boîtier de routeur audio en vue intérieure",
              layout: "is-standard",
            },
          ],
        },
      ],
      skillsTitle: "Outils et compétences mobilisés",
      skills: [
        "Fusion 360",
        "Impression 3D FDM",
        "Conception mécanique",
        "Prototypage fonctionnel",
        "Assemblage technique",
        "Préparation de câblage",
        "Travail en équipe technique",
        "Documentation de projet",
      ],
      resultTitle: "Conclusion",
      resultParagraphs: [
        "Ces contributions ont été intégrées à la préparation technique du projet. Le radiocontact a été mené à terme grâce au travail coordonné de l’équipe, avec une préparation matérielle combinant électronique, radio, mécanique, câblage et prototypage.",
      ],
      backLabel: "Retour au portfolio",
      backHref: "/fr/#experience",
    },
  };

  const monSaeProjects = {
    en: {
      slug: "mon-sae",
      title: "My SAE — Remote-controlled propeller kart",
      category: "GEII SAE",
      filter: "cad",
      summary:
        "Technical design and verification of a remote-controlled propeller kart prototype as part of a GEII SAE project.",
      tools: ["GEII", "Electronic design", "NEC protocol", "PWM", "Testing and measurement", "Technical documentation"],
      status: "Documented project",
      subtitle:
        "Technical design and verification of a remote-controlled propeller kart prototype as part of a GEII SAE project.",
      detailType: "structured-placeholder",
      details: {
        context:
          "As part of a first-year GEII SAE project, the work focused on the development of a remote-controlled propeller kart intended for indoor use.",
        objective:
          "Contribute to documented design and verification tasks for the receiver section, signal processing and PWM control.",
        approach:
          "Requirements analysis, electronic design documentation, NEC protocol handling, test preparation and compliance documentation.",
        result:
          "The project strengthened a complete design and verification workflow, from specifications analysis to documented testing.",
        skills: ["GEII", "Electronic design", "NEC protocol", "PWM signal", "Testing and measurement"],
      },
      structuredDetail: {
        eyebrow: "TECHNICAL PROJECT",
        meta: [
          { label: "Project", value: "GEII SAE" },
          { label: "Role", value: "Technical contributor" },
          { label: "Period", value: "January 2026 — June 2026" },
          { label: "Location", value: "Bordeaux, France" },
        ],
        overview: {
          eyebrow: "PROJECT OVERVIEW",
          title: "Project context",
          paragraphs: [
            "As part of a first-year GEII SAE project, the work focused on the development of a remote-controlled propeller kart intended for indoor use.",
            "The system combined a transmitter section, a receiver section, an infrared link based on the NEC protocol and a control chain for propulsion, steering and user functions.",
            "My work focused on documented design and verification tasks from the DDC and DDV, particularly on the receiver section, signal processing, PWM control and functional validation through testing.",
          ],
        },
        contributionsEyebrow: "TECHNICAL CONTRIBUTION",
        contributionsTitle: "Structured contributions",
        visualPlaceholder: "Visuals to be completed",
        contributions: [
          {
            title: "Functional design and system architecture",
            paragraphs: [
              "I participated in structuring the project technically based on the requirements from the specifications document. The work consisted of transforming functional needs into usable technical choices for the next stages of the design.",
              "This part included feasibility analysis, organization of the main system functions and preparation of clear documentation for design and verification.",
            ],
          },
          {
            title: "Receiver section design",
            paragraphs: [
              "I worked on several functions related to the kart receiver: infrared reception, motor safety, motor control, steering control, indicator lights and horn function.",
              "The objective was to propose a solution consistent with the requirements, taking into account signal processing, PWM control and component integration into the system.",
            ],
          },
          {
            title: "Data processing and NEC protocol",
            paragraphs: [
              "I participated in defining the data processing logic for the transmitter and the receiver. The system had to acquire user inputs, convert them, build a frame compliant with the NEC protocol and transmit the useful data to the kart.",
              "The work also covered frame handling, transmission repetition and safety logic in case of missing or invalid signal.",
            ],
          },
          {
            title: "Verification and compliance testing",
            paragraphs: [
              "I participated in preparing and documenting several verification tests. These tests were used to compare the actual behavior of the prototype with the requirements defined in the specifications document.",
              "The verifications covered dimensions, power supply, user interfaces, infrared transmission, control signals and several receiver functions.",
            ],
          },
        ],
        skillsTitle: "Tools and skills used",
        skills: [
          "GEII",
          "Requirements analysis",
          "Electronic design",
          "NEC protocol",
          "PWM signal",
          "Microcontroller",
          "Testing and measurement",
          "Oscilloscope",
          "Technical documentation",
          "DDC / DDV",
        ],
        resultTitle: "Conclusion",
        resultParagraphs: [
          "This project allowed me to work through a complete design and verification process: specifications analysis, technical choices, documentation, testing and compliance checking.",
          "It strengthened my ability to structure technical reasoning, verify obtained results and document decisions in a clear and usable way.",
        ],
        backLabel: "Back to portfolio",
        backHref: "/en/#experience",
      },
    },
    fr: {
      slug: "mon-sae",
      title: "Mon SAE — Kart à Hélice télécommandé",
      category: "SAE GEII",
      filter: "cad",
      summary:
        "Conception et vérification technique d’un prototype de kart à hélice télécommandé dans le cadre d’une SAE GEII.",
      tools: ["GEII", "Conception électronique", "Protocole NEC", "PWM", "Tests et mesures", "Documentation technique"],
      status: "Projet documenté",
      subtitle:
        "Conception et vérification technique d’un prototype de kart à hélice télécommandé dans le cadre d’une SAE GEII.",
      detailType: "structured-placeholder",
      details: {
        context:
          "Dans le cadre d’une SAE de première année en GEII, le projet portait sur le développement d’un kart à hélice télécommandé destiné à fonctionner en intérieur.",
        objective:
          "Contribuer aux tâches de conception et de vérification documentées pour la partie récepteur, le traitement des signaux et le pilotage PWM.",
        approach:
          "Analyse d’exigences, documentation de conception électronique, traitement du protocole NEC, préparation des essais et documentation de conformité.",
        result:
          "Le projet a renforcé une démarche complète de conception et de vérification, depuis l’analyse du cahier des charges jusqu’aux essais documentés.",
        skills: ["GEII", "Conception électronique", "Protocole NEC", "Signal PWM", "Tests et mesures"],
      },
      structuredDetail: {
        eyebrow: "PROJET TECHNIQUE",
        meta: [
          { label: "Projet", value: "SAE GEII" },
          { label: "Rôle", value: "Contributeur technique" },
          { label: "Période", value: "Janvier 2026 — Juin 2026" },
          { label: "Localisation", value: "Bordeaux, France" },
        ],
        overview: {
          eyebrow: "CONTEXTE",
          title: "Contexte du projet",
          paragraphs: [
            "Dans le cadre d’une SAE de première année en GEII, le projet portait sur le développement d’un kart à hélice télécommandé destiné à fonctionner en intérieur.",
            "Le système associait une partie émetteur, une partie récepteur, une liaison infrarouge basée sur le protocole NEC et une chaîne de commande pour la propulsion, la direction et les fonctions utilisateur.",
            "Mon travail s’est concentré sur des parties de conception et de vérification documentées dans le DDC et le DDV, en particulier sur la partie récepteur, le traitement des signaux, le pilotage PWM et la validation du fonctionnement par essais.",
          ],
        },
        contributionsEyebrow: "CONTRIBUTION TECHNIQUE",
        contributionsTitle: "Contributions structurées",
        visualPlaceholder: "Visuels à compléter",
        contributions: [
          {
            title: "Conception fonctionnelle et architecture du système",
            paragraphs: [
              "J’ai participé à la structuration technique du projet à partir des exigences du cahier des charges. Le travail consistait à transformer les besoins fonctionnels en choix techniques exploitables pour la suite de la conception.",
              "Cette partie comprenait l’analyse de la faisabilité, l’organisation des fonctions principales du système et la préparation d’une documentation claire pour la conception et la vérification.",
            ],
          },
          {
            title: "Conception de la partie récepteur",
            paragraphs: [
              "J’ai travaillé sur plusieurs fonctions liées au récepteur du kart : réception infrarouge, sécurité moteur, commande du moteur, commande de direction, indicateurs lumineux et fonction klaxon.",
              "L’objectif était de proposer une solution cohérente avec les exigences, en tenant compte du traitement des signaux, du pilotage par PWM et de l’intégration des composants dans le système.",
            ],
          },
          {
            title: "Traitement des données et protocole NEC",
            paragraphs: [
              "J’ai participé à la définition de la logique de traitement des données pour l’émetteur et le récepteur. Le système devait acquérir les informations utilisateur, les convertir, former une trame conforme au protocole NEC et transmettre les données utiles au kart.",
              "Le travail portait aussi sur la gestion des trames, la répétitivité d’émission et la logique de sécurité en cas de signal absent ou invalide.",
            ],
          },
          {
            title: "Vérification et essais de conformité",
            paragraphs: [
              "J’ai participé à la préparation et à la documentation de plusieurs essais de vérification. Ces essais servaient à comparer le fonctionnement réel du prototype avec les exigences prévues dans le cahier des charges.",
              "Les vérifications concernaient notamment les dimensions, l’alimentation, les interfaces utilisateur, la transmission infrarouge, les signaux de commande et certaines fonctions du récepteur.",
            ],
          },
        ],
        skillsTitle: "Outils et compétences mobilisés",
        skills: [
          "GEII",
          "Analyse d’exigences",
          "Conception électronique",
          "Protocole NEC",
          "Signal PWM",
          "Microcontrôleur",
          "Tests et mesures",
          "Oscilloscope",
          "Documentation technique",
          "DDC / DDV",
        ],
        resultTitle: "Conclusion",
        resultParagraphs: [
          "Ce projet m’a permis de travailler sur une démarche complète de conception et de vérification : analyse du cahier des charges, choix techniques, documentation, essais et contrôle de conformité.",
          "Il a renforcé ma capacité à structurer un raisonnement technique, à vérifier les résultats obtenus et à documenter les décisions de manière claire et exploitable.",
        ],
        backLabel: "Retour au portfolio",
        backHref: "/fr/#experience",
      },
    },
  };

  const monSaeExperience = {
    en: {
      slug: "mon-sae",
      title: "My SAE — Remote-controlled propeller kart",
      projectTitle: "My SAE — Remote-controlled propeller kart",
      context: "GEII SAE project — technical design and verification",
      company: "GEII SAE project — technical design and verification",
      period: "January 2026 — June 2026",
      location: "Bordeaux, France",
      summary:
        "Technical contribution to the design and verification of a remote-controlled propeller kart, with work on the receiver section, signal processing, PWM control and compliance documentation.",
      role: "Technical contributor",
      responsibilities: [
        "Analysis of technical project requirements",
        "Contribution to the design documentation",
        "Work on the receiver section and control functions",
        "Participation in verification and test documentation",
      ],
      skills: ["GEII", "Electronic design", "NEC protocol", "PWM", "Testing and measurement", "Technical documentation"],
      detailHref: "/en/projects/mon-sae",
      details: {
        context:
          "GEII SAE project focused on the design and verification of a remote-controlled propeller kart.",
        technicalTasks: [
          "Analysis of technical project requirements",
          "Contribution to the design documentation",
          "Work on the receiver section and control functions",
          "Participation in verification and test documentation",
        ],
        results: ["Documented contribution to design and verification tasks."],
      },
    },
    fr: {
      slug: "mon-sae",
      title: "Mon SAE — Kart à Hélice télécommandé",
      projectTitle: "Mon SAE — Kart à Hélice télécommandé",
      context: "Projet SAE GEII — conception et vérification technique",
      company: "Projet SAE GEII — conception et vérification technique",
      period: "Janvier 2026 — Juin 2026",
      location: "Bordeaux, France",
      summary:
        "Contribution technique à la conception et à la vérification d’un kart à hélice télécommandé, avec travail sur la partie récepteur, le traitement des signaux, le pilotage PWM et la documentation de conformité.",
      role: "Contributeur technique",
      responsibilities: [
        "Analyse des exigences techniques du projet",
        "Contribution au dossier de conception",
        "Travail sur la partie récepteur et les fonctions de commande",
        "Participation à la vérification et à la documentation des essais",
      ],
      skills: ["GEII", "Conception électronique", "Protocole NEC", "PWM", "Tests et mesures", "Documentation technique"],
      detailHref: "/fr/projects/mon-sae",
      details: {
        context:
          "Projet SAE GEII portant sur la conception et la vérification d’un kart à hélice télécommandé.",
        technicalTasks: [
          "Analyse des exigences techniques du projet",
          "Contribution au dossier de conception",
          "Travail sur la partie récepteur et les fonctions de commande",
          "Participation à la vérification et à la documentation des essais",
        ],
        results: ["Contribution documentée aux tâches de conception et de vérification."],
      },
    },
  };

  window.PORTFOLIO_DATA.en.projectDetails = [monSaeProjects.en];
  window.PORTFOLIO_DATA.fr.projectDetails = [monSaeProjects.fr];
  window.PORTFOLIO_DATA.en.experience.items.unshift(monSaeExperience.en);
  window.PORTFOLIO_DATA.fr.experience.items.unshift(monSaeExperience.fr);
})();
