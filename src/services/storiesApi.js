/*
  services/storiesApi.js
  - API simulée (données statiques).
  - Les images utilisent picsum.photos avec seed pour produire des images stables/variées.
  - En production, remplacez ces fonctions par des appels fetch/axios vers votre backend (Firebase, Supabase, etc.).
*/

const STORIES = [
  {
    id: 1,
    name: "Boubaker Siala",
    role: "Entrepreneur / Investisseur",
    excerpt: "CEO of BAKOU Motors ",
    bio:
      "Boubaker Siala est un entrepreneur visionnaire tunisien dont le parcours inspire toute une génération. Parti de rien, il a su construire un groupe d'entreprises diversifiées qui emploient aujourd'hui des milliers de personnes. Sa philosophie d'affaires repose sur l'innovation constante, le respect des valeurs tunisiennes et l'engagement envers la communauté. Il est reconnu pour son approche avant-gardiste du commerce et son dévouement au développement économique de la Tunisie. Son histoire démontre qu'avec détermination et travail acharné, les obstacles peuvent devenir des tremplins vers le succès.",
    highlights: [
      "Fondateur de plusieurs entreprises prospères",
      "Créateur d'emplois pour des milliers de Tunisiens",
      "Ambassadeur de l'entrepreneuriat tunisien à l'international",
      "Philanthrope engagé dans l'éducation"
    ],
    coverImage: "https://www.entreprises-magazine.com/wp-content/uploads/2022/09/Bako-Motors-tunisie.jpg",
    avatarImage: "https://iraset.org/icegc2023/images/siala.png",
    youtube:"https://www.youtube.com/watch?v=GtD_gad0TYI"
  },
  {
    id: 2,
    name: "Karim Bguir",
    role: "Entrepreneur",
    excerpt: "CEO of InstaDeep",
    bio:
      "Karim Bguir est un pionnier de la technologie en Tunisie, reconnu pour sa capacité à transformer des idées en solutions technologiques révolutionnaires. Diplômé des meilleures écoles d'ingénierie, il a consacré sa carrière à développer l'écosystème tech tunisien. Son expertise couvre l'intelligence artificielle, le développement logiciel et la transformation digitale des entreprises. Il est à l'origine de plusieurs startups technologiques qui ont acquis une renommée internationale. Son engagement envers la formation des jeunes talents tunisiens fait de lui un mentor respecté dans la communauté tech.",
    highlights: ["Fondateur de startups technologiques innovantes",
                "Expert reconnu en intelligence artificielle",
                "Mentor pour les jeunes entrepreneurs tech",
                "Conférencier international sur l'innovation"],
    coverImage: "https://instadeep.com/wp-content/uploads/2024/02/instadeep-website-social.png",
    avatarImage: "https://cdn.unitycms.io/images/6GInVfmjqTP9c6f2-Db55O.jpg?op=ocroped&val=1200,800,1000,1000,0,0&sum=pMCp6Gc5lto",
    youtube: "https://www.youtube.com/watch?v=XYOTAeiMsUw"
  },
  {
    id: 3,
    name: "Asma Ben Hmida",
    role: "CEO Enda Inter-Arabe et Inda-Tamweel",
    excerpt: "Cofondatrice de l'ONG Enda Inter-arabe et de l'institution de microfinance Enda Tamweel.",
    bio:
      "Essma Ben Hamida est la cofondatrice de l'ONG Enda Inter-arabe et de l'institution de microfinance Enda Tamweel. Entrepreneuse sociale et militante pour le développement, Essma a été la première à introduire la microfinance en Tunisie, permettant aux personnes à faible revenu d'améliorer leurs conditions de vie.",
    highlights: ["Entrepreneuse sociale", "Militante pour le développement", "La première à introduire la microfinance en Tunisie et dans la zone MENA"],
    coverImage: "https://www.endatamweel.tn/wp-content/uploads/2015/12/transition-v3.png",
    avatarImage: "https://www.endatamweel.tn/wp-content/uploads/2019/05/Essma-Ben-Hamida.png",
    youtube:"https://www.youtube.com/watch?v=sAhgI8QYXJU"
  },
  {
    id: 4,
    name: "Ameny Mansouri",
    role: "CEO of DABCHY",
    excerpt: "Passionnée de mode",
    bio:
      "Ingénieure biomédicale de formation et passionnée de mode dans l'âme, Amani a fait un saut audacieux du laboratoire au monde des startups avec un objectif clair : construire un avenir plus intelligent et plus durable. Aujourd'hui, elle est cofondatrice et PDG de Dabchy, une plateforme de mode circulaire qui permet à des milliers de personnes en Tunisie et en Égypte d'acheter, de vendre et de se connecter de manière durable.",
    highlights: ["Ameni was selected as CEO of Dabchy, an online fashion marketplace.", "Présence dans la zone MENA et dans le nord afrique"],
    coverImage: "https://media.licdn.com/dms/image/v2/D4D3DAQF7rqbK-r7nSg/image-scale_191_1128/B4DZTvH2XAHIAk-/0/1739178602513/dabchy_cover?e=1765566000&v=beta&t=CHztJUAD_9OELx0N9u35l1Fw-hT2u3n7R8_w85dCaw4",
    avatarImage: "https://tse2.mm.bing.net/th/id/OIP.VwgIWCsN2gvzAv3gL3FoPAHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    youtube:"https://www.youtube.com/watch?v=QvEwmqXYn2I"
  },
  {
    id: 5,
    name: "Anis Kallel",
    role: "Product Manager / Leader",
    excerpt: "From America to Tunisia a successful story in Fintech domain",
    bio:
      "Anis Kallel est le cofondateur et directeur technique (CTO) de Flouci (par Kaoun), une startup fintech basée en Tunisie qui travaille sur l’eKYC, les paiements et les crédits dans la région. Kallel a étudié l’informatique et le commerce à l’université...",
    highlights: ["Stratégie produit", "Leadership", "Conception de produit"],
    coverImage: "https://www.leaders.com.tn/uploads/FCK_files/Flouci.jpg",
    avatarImage: "https://media.licdn.com/dms/image/v2/D4D03AQEwhpc28phj6w/profile-displayphoto-shrink_200_200/B4DZU4CC0tHkAc-/0/1740401815648?e=2147483647&v=beta&t=_7YBM7t6DPzysOgcxhFPYD5u6zib5Bw84ctM0Hl5OOc",
    youtube:"https://www.youtube.com/watch?v=BKtJilfdDFo"
  },
  {
    id: 6,
    name: "Azzam Soualmia",
    role: "Founder / Chief Executive Officer at Swiver",
    excerpt: "Passioné par l'entrepreneuriat ",
    bio:
      "Azzam Soualmia, est un autodidacte, un «self-made-man» atypique et touche-à-tout. À 18 ans, en 2008, il revient s’installer en Tunisie avec pour tout bagage un bac, des expériences comme ouvrier, employé dans la restauration, commercial. Il commence à travailler comme agent spécialisé dans la vente des voyages organisés, puis se tourne vers la promotion immobilière. En 2013, il crée un atelier de fabrication artisanale de charbon de bois. Ses activités se sont développées, il cherche une solution de planification des ressources de l’entreprise. Il crée en 2016 la Startup Swiver avec un développeur, Khalil Hamdi.",
    highlights: ["Commercial", "Co-Fondateur of Swiver"],
    coverImage: "https://web.swiver.io/media/logos/logo_landing.png",
    avatarImage: "https://tse3.mm.bing.net/th/id/OIP.uWuQmaUacSUM5S0TGXafcAAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    youtube:"https://www.youtube.com/watch?v=qBUsdLzl780"
  }
];

/*
  Simuler un délai réseau puis retourner toutes les histoires.
  En cas d'erreur réseau réel, on devrait propager l'exception.
*/
export async function fetchStories() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(STORIES), 600);
  });
}

/*
  Récupérer une histoire par id. Retourne null si introuvable.
*/
export async function fetchStoryById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const s = STORIES.find((x) => x.id === id) || null;
      resolve(s);
    }, 400);
  });
}
export async function submitSuggestion(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.suggestedName && data.suggestedName.toLowerCase().includes("error")) {
        return reject(new Error("Donnée invalide (simulation)."));
      }
      console.log("Suggestion reçue (simulée) :", data);
      resolve({ ok: true, id: Date.now().toString() });
    }, 900);
  });
}

/* Exemple (commenté) d'une fonction qui peut rejeter pour tester la gestion d'erreur:
export async function fetchStoriesWithPossibleError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Erreur réseau simulée"));
      else resolve(STORIES);
    }, 700);
  });
}
*/
// ... votre contenu existant ...

/*
  submitSuggestion(data)
  - simule l'envoi d'une suggestion côté serveur.
  - En développement, nous simulons latence et succès.
  - Plus tard, remplacez l'implémentation par un appel à Firebase / endpoint réel.
*/
