window.PORTFOLIO_DATA = {
  en: {
    meta: {
      title: "Lev Levinov | Electronics Engineering Portfolio",
      description:
        "Technical portfolio for Lev Levinov: electronics, embedded systems, CAD, prototyping and digital fabrication.",
    },
    navigation: {
      profile: "Profile",
      experience: "Experience",
      skills: "Skills",
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
      all: "All",
      backToProjects: "Back to projects",
      backToExperience: "Back to experience",
      toBeCompleted: "To be completed",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
    },
    hero: {
      title: "Lev Levinov",
      subtitle: "Electronics engineering student",
      positioning: "Electronics, embedded systems, CAD, prototyping and digital fabrication.",
      description:
        "Technical portfolio focused on electronics, embedded systems, CAD, prototyping and digital fabrication.",
      locationLabel: "Location",
      location: "France — Bordeaux",
      availabilityLabel: "Availability",
      availability: "Available for technical projects and collaborations.",
      cvHref: "#",
      photoSrc: "/public/images/profile-photo.png",
      photoAlt: "Professional portrait of Lev Levinov",
    },
    profile: {
      eyebrow: "PROFILE",
      title: "Technical profile focused on precise and verifiable engineering work.",
      description: [
        "I am building a technical path around electronics, embedded systems, CAD, prototyping and digital fabrication.",
        "My approach is practical: understanding constraints, designing simple solutions, producing prototypes and documenting results.",
        "This portfolio presents only experience, projects and training that can be documented or completed with concrete elements.",
      ],
      qualities: ["Autonomous", "Rigorous", "Solution-oriented"],
    },
    currentPosition: {
      eyebrow: "CURRENT POSITION",
      title: "Current technical orientation",
      description:
        "First-year GEII student at IUT de Bordeaux, mainly oriented toward electronics, embedded systems, CAD, prototyping and digital fabrication.",
      status:
        "I am not actively looking for an internship or a job at the moment, but I remain available for relevant technical projects and collaborations.",
      areas: ["Electronics", "Embedded systems", "CAD", "Prototyping", "Digital fabrication"],
    },
    skills: {
      eyebrow: "SKILLS",
      title: "Skills organized by technical domain.",
      categories: [
        {
          title: "CAD & mechanical design",
          items: [
            "Fusion 360 — highly advanced level",
            "SolidWorks — advanced level",
            "3D modeling",
            "Design of parts for prototyping",
            "Preparation of models for fabrication",
          ],
        },
        {
          title: "Digital fabrication",
          items: [
            "FDM 3D printing — advanced level",
            "Preparation of printable parts",
            "Print parameter adjustment",
            "Functional prototyping",
            "CNC milling — beginner level",
          ],
        },
        {
          title: "Electronics & embedded systems",
          items: [
            "GEII training in progress",
            "Electronics fundamentals",
            "Sensors and measurement systems",
            "Embedded systems",
            "Technical testing and diagnostics",
          ],
        },
        {
          title: "Method & technical documentation",
          items: [
            "Structured documentation",
            "Technical teamwork",
            "Project organization",
            "Constraint analysis",
            "Prototyping workflow",
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
          company: "Mission Sophie — educational contact project with French astronaut Sophie Adenot",
          period: "January 2026 — April 2026",
          location: "Bordeaux, France",
          summary:
            "Technical contribution to the material and mechanical preparation of the project, including cabling, assembly and prototyping tasks.",
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
          title: "CAD & mechanical prototyping lead",
          company: "DU TSS — university project",
          period: "March 2026 — June 2026",
          location: "Bordeaux, France",
          summary: "3D design and mechanical prototyping contribution within a DU TSS university project.",
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
      profile: "Profil",
      experience: "Expérience",
      skills: "Compétences",
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
      all: "Tous",
      backToProjects: "Retour aux projets",
      backToExperience: "Retour à l’expérience",
      toBeCompleted: "À compléter",
      menuOpen: "Ouvrir la navigation",
      menuClose: "Fermer la navigation",
    },
    hero: {
      title: "Lev Levinov",
      subtitle: "Étudiant en ingénierie électronique",
      positioning: "Électronique, systèmes embarqués, CAO, prototypage et fabrication numérique.",
      description:
        "Portfolio technique orienté vers l’électronique, les systèmes embarqués, la CAO, le prototypage et la fabrication numérique.",
      locationLabel: "Localisation",
      location: "France — Bordeaux",
      availabilityLabel: "Disponibilité",
      availability: "Disponible pour des projets techniques et des collaborations.",
      cvHref: "#",
      photoSrc: "/public/images/profile-photo.png",
      photoAlt: "Portrait professionnel de Lev Levinov",
    },
    profile: {
      eyebrow: "PROFIL",
      title: "Profil technique orienté vers un travail d’ingénierie précis et vérifiable.",
      description: [
        "Je construis un parcours technique autour de l’électronique, des systèmes embarqués, de la CAO, du prototypage et de la fabrication numérique.",
        "Mon approche est pratique : comprendre les contraintes, concevoir des solutions simples, fabriquer des prototypes et documenter les résultats.",
        "Ce portfolio présente uniquement des expériences, projets et formations pouvant être documentés ou complétés par des éléments concrets.",
      ],
      qualities: ["Autonome", "Rigoureux", "Orienté solution"],
    },
    currentPosition: {
      eyebrow: "SITUATION ACTUELLE",
      title: "Orientation technique actuelle",
      description:
        "Étudiant en première année de GEII à l’IUT de Bordeaux, avec une orientation principale vers l’électronique, les systèmes embarqués, la CAO, le prototypage et la fabrication numérique.",
      status:
        "Je ne recherche pas activement un stage ou un emploi pour le moment, mais je reste disponible pour des projets techniques et des collaborations pertinentes.",
      areas: ["Électronique", "Systèmes embarqués", "CAO", "Prototypage", "Fabrication numérique"],
    },
    skills: {
      eyebrow: "COMPÉTENCES",
      title: "Compétences organisées par domaine technique.",
      categories: [
        {
          title: "CAO & conception mécanique",
          items: [
            "Fusion 360 — niveau très avancé",
            "SolidWorks — niveau avancé",
            "Modélisation 3D",
            "Conception de pièces pour prototypage",
            "Préparation de modèles pour fabrication",
          ],
        },
        {
          title: "Fabrication numérique",
          items: [
            "Impression 3D FDM — niveau avancé",
            "Préparation de pièces imprimables",
            "Réglage des paramètres d’impression",
            "Prototypage fonctionnel",
            "Fraisage CNC — niveau débutant",
          ],
        },
        {
          title: "Électronique & systèmes embarqués",
          items: [
            "Formation GEII en cours",
            "Bases d’électronique",
            "Capteurs et systèmes de mesure",
            "Systèmes embarqués",
            "Tests et diagnostic technique",
          ],
        },
        {
          title: "Méthode & documentation technique",
          items: [
            "Documentation structurée",
            "Travail en équipe technique",
            "Organisation de projet",
            "Analyse de contraintes",
            "Démarche de prototypage",
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
          company: "Mission Sophie — projet de contact éducatif avec l’astronaute française Sophie Adenot",
          period: "Janvier 2026 — Avril 2026",
          location: "Bordeaux, France",
          summary:
            "Contribution technique à la préparation matérielle et mécanique du projet, avec participation aux tâches de câblage, d’assemblage et de prototypage.",
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
          company: "DU TSS — projet universitaire",
          period: "Mars 2026 — Juin 2026",
          location: "Bordeaux, France",
          summary: "Contribution en conception 3D et prototypage mécanique dans le cadre d’un projet universitaire DU TSS.",
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
    subtitle: "Technical contribution to an educational and scientific project around a radio contact with the ISS.",
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
        { label: "Role", value: "Technical team member" },
        { label: "Period", value: "January 2026 — April 2026" },
        { label: "Location", value: "Bordeaux, France" },
        { label: "Context", value: "GEII Department, IUT de Bordeaux" },
      ],
      heroImage: {
        src: images.p01,
        alt: "Antenna test setup used during Mission Sophie preparation",
      },
      overview: {
        eyebrow: "PROJECT OVERVIEW",
        title: "Project context",
        paragraphs: [
          "As a first-year GEII student, I joined the project’s technical team to contribute to several practical tasks related to the preparation of the radio setup, mechanical assembly and functional prototyping.",
          "My role was not to lead the project, but to provide a technical contribution on specific elements: antenna rotor fixation, preparation of 3D printed supports, participation in cabling, antenna assembly and the design of small equipment intended for radio operators.",
        ],
      },
      contributionsEyebrow: "TECHNICAL CONTRIBUTION",
      contributionsTitle: "Contribution summary",
      contributions: [
        {
          title: "Antenna rotor fixation",
          paragraphs: [
            "The first contribution focused on the design of a fixation system for the antenna rotor. The rotor did not have a sufficiently rigid connection with its support, which could create a mechanical stability issue.",
            "After taking measurements, I designed a fixation part in Fusion 360 and produced a first prototype using 3D printing. After adjustments, the part was installed on the setup to improve the mechanical stability of the assembly.",
          ],
          images: ["Photo 03", "Photo 04", "Photo 05"],
        },
        {
          title: "Antenna and cable preparation",
          paragraphs: [
            "After this first task, I took part in the hardware preparation of the setup with the technical team: assembly of antenna elements, preparation of the working area, cable routing and participation in the outdoor installation.",
          ],
          images: ["Photo 06", "Photo 07", "Photo 08", "Photo 09", "Photo 10"],
        },
        {
          title: "PTT microphone stands",
          paragraphs: [
            "I also designed PTT microphone stands to help organize the operator workstation and make the equipment easier to use during the radio contact. These parts were modeled in Fusion 360 and produced using 3D printing.",
          ],
          images: ["Photo 11"],
        },
        {
          title: "Audio channel router enclosure",
          paragraphs: [
            "Another element developed for the project was an enclosure for audio channel routing. The goal was to provide a cleaner integration of the connections and improve the organization of the audio wiring.",
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
      resultTitle: "Result",
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
    subtitle: "Contribution technique à un projet pédagogique et scientifique autour d’un contact radio avec l’ISS.",
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
        { label: "Rôle", value: "Membre de l’équipe technique" },
        { label: "Période", value: "Janvier 2026 — Avril 2026" },
        { label: "Lieu", value: "Bordeaux, France" },
        { label: "Contexte", value: "Département GEII, IUT de Bordeaux" },
      ],
      heroImage: {
        src: images.p01,
        alt: "Installation d’essai avec antennes pour la préparation de Mission Sophie",
      },
      overview: {
        eyebrow: "CONTEXTE",
        title: "Contexte du projet",
        paragraphs: [
          "En tant qu’étudiant en première année de GEII, j’ai rejoint l’équipe technique du projet pour contribuer à plusieurs tâches concrètes liées à la préparation du dispositif radio, à l’assemblage mécanique et au prototypage de pièces fonctionnelles.",
          "Mon rôle n’était pas de diriger le projet, mais d’apporter une contribution technique sur des éléments précis : fixation du rotor d’antenne, préparation de supports imprimés en 3D, participation au câblage, assemblage d’éléments d’antenne et conception de petits équipements destinés aux opérateurs radio.",
        ],
      },
      contributionsEyebrow: "CONTRIBUTION TECHNIQUE",
      contributionsTitle: "Synthèse des contributions",
      contributions: [
        {
          title: "Fixation du rotor d’antenne",
          paragraphs: [
            "La première contribution a porté sur la conception d’un système de fixation pour le rotor d’antenne. Le rotor ne disposait pas d’une fixation suffisamment rigide avec son support, ce qui pouvait poser un problème de stabilité mécanique.",
            "Après prise de mesures, j’ai conçu une pièce de fixation sous Fusion 360, puis réalisé un premier prototype en impression 3D. Après ajustements, la pièce a été installée sur le dispositif afin d’améliorer la tenue mécanique de l’ensemble.",
          ],
          images: ["Photo 03", "Photo 04", "Photo 05"],
        },
        {
          title: "Préparation des antennes et du câblage",
          paragraphs: [
            "Après cette première réalisation, j’ai participé à la préparation matérielle du dispositif avec l’équipe technique : assemblage d’éléments d’antenne, préparation de la zone de travail, cheminement des câbles et participation à l’installation extérieure.",
          ],
          images: ["Photo 06", "Photo 07", "Photo 08", "Photo 09", "Photo 10"],
        },
        {
          title: "Supports pour microphones PTT",
          paragraphs: [
            "J’ai également conçu des supports pour microphones PTT afin de faciliter l’organisation du poste opérateur et l’utilisation du matériel pendant le contact radio. Ces pièces ont été modélisées sous Fusion 360 puis fabriquées par impression 3D.",
          ],
          images: ["Photo 11"],
        },
        {
          title: "Boîtier pour routeur de canaux audio",
          paragraphs: [
            "Un autre élément réalisé dans le cadre du projet est un boîtier pour le routage des canaux audio. L’objectif était de proposer une intégration plus propre des connexions et de faciliter l’organisation du câblage audio.",
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
      resultTitle: "Résultat",
      resultParagraphs: [
        "Ces contributions ont été intégrées à la préparation technique du projet. Le radiocontact a été mené à terme grâce au travail coordonné de l’équipe, avec une préparation matérielle combinant électronique, radio, mécanique, câblage et prototypage.",
      ],
      backLabel: "Retour au portfolio",
      backHref: "/fr/#experience",
    },
  };
})();
