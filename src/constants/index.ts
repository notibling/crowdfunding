export const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID || "";
export const paypalAppName = import.meta.env.VITE_PAYPAL_DISPLAY_APP_NAME || "Bling Crowdfunding";

export const screenshots = [
  {
    src: "/images/screenshots/Login.avif",
    alt: "Ingreso y Registro",
    caption: "Zona de Registro y Autenticación",
  },
  {
    src: "/images/screenshots/BlingNews.avif",
    alt: "BlingNews Landing",
    caption: "Dashboard del medio",
  },
  {
    src: "/images/screenshots/BlingPages.avif",
    alt: "BlingPages Landing",
    caption: "Constructor de sitios web",
  },
  {
    src: "/images/screenshots/Post.avif",
    alt: "Post Individual",
    caption: "Página de Noticia Individual",
  },
  {
    src: "/images/screenshots/CrearAnuncio.avif",
    alt: "Crear Anuncio",
    caption: "Formulario de Creación de Anuncios",
  },
  {
    src: "/images/screenshots/Profile.avif",
    alt: "Perfil",
    caption: "Perfil de Usuario",
  },
];

export const collaborators = [
  // { name: "Colaborador 1", photo: "/images/collaborators/1.jpg", link: "https://x.com/colab1" },
];

export const friendVentures = [
  { 
    name: "Bling.uy", 
    logo: "/images/bling_light.avif", 
    link: "https://bling.uy",
    description: "Plataforma de medios independientes."
  },
  { 
    name: "Bling Ads", 
    logo: "/images/Ads.avif", 
    link: "https://bling.uy",
    description: "Servicios creativos digitales."
  },
  { 
    name: "Bling News", 
    logo: "/images/Bling_Periodista.avif", 
    link: "https://bling.uy",
    description: "Periodismo y Comunicación."
  },
  { 
    name: "Bling Data", 
    logo: "/images/Transparency.avif", 
    link: "https://bling.uy",
    description: "Transparencia y Datos."
  },
  { 
    name: "Bling Labs", 
    logo: "/images/Flying.avif", 
    link: "https://bling.uy",
    description: "Innovación y Desarrollo."
  },
];

export const publicDonations = [
  // { donor: "Juan Pérez", amount: "50 USDT", date: "2024-03-20", isAnonymous: false, link: "https://x.com/juan", logo: null },
  // { donor: "Anónimo", amount: "100 USDT", date: "2024-03-18", isAnonymous: true, link: null, logo: null },
];

export const teamMembers = [
  {
    name: 'Yesenia González',
    role: 'Fullstack Developer | AI & Creative Coder',
     photo: '/images/team/YeseniaGonzalez.avif',
    description:
      'Desarrolladora Fullstack enfocada en crear soluciones innovadoras que integran IA y desarrollo web. Con formación en Arte y Música y experiencia construyendo aplicaciones con React, Next.js y Python (FastAPI, OpenCV), aporta una mirada creativa a la ingeniería, donde la lógica se combina con sensibilidad artística. Destaca en automatización avanzada (OCR, YOLOv5), construcción de APIs escalables y despliegues eficientes con Docker, integrando tecnología y creatividad para ofrecer sistemas precisos, funcionales y de alto rendimiento.',
    tech: 'React · Next.js · Node.js · Python · FastAPI · OpenCV · YOLOv5 · Docker · PostgreSQL · MongoDB · Machine Learning · Express.js',
    socials: {
      github: 'https://github.com/yesiviola',
      linkedin: 'https://www.linkedin.com/in/keilaygonzalez/',
      x: 'https://x.com/yeseniagon96248',
      website: 'https://bling.uy/',
    },
  },
  {
    name: 'Nickolás Machado',
    role: 'Fundador de Bling | Especialista en E-commerce y Estrategia Digital',
    photo: '/images/team/NickolasMachado.avif',
    description:
      'Nick es un constructor de soluciones digitales con más de una década transformando ideas en productos concretos. Su trayectoria combina diseño, desarrollo, estrategia comercial y una comprensión precisa del comportamiento del usuario. Ha impulsado proyectos de comercio electrónico, marketing y optimización operativa que destacan por su funcionalidad, capacidad de escalar y enfoque en métricas reales. Su fortaleza principal es la ejecución: identifica oportunidades, diseña el camino y lleva cada iniciativa desde el concepto hasta el rendimiento sostenido. Domina la integración de procesos creativos y tecnológicos, construyendo sistemas estables, eficientes y orientados a impacto. Hoy lidera proyectos de alto potencial con una visión clara: crear productos competitivos, sostenibles y preparados para crecer. Su método es metódico, ambicioso y disciplinado. No especula: ejecuta, mejora y avanza. Nick convierte complejidad en acción y acción en resultados.',
    tech: 'Diseñador Gráfico Sr. · Productor Audiovisual · Programador Frontend • Next.js · Tailwind · C# · Node.js · UX/UI · Ads Meta & Google · Automatización · Estrategia Comercial · Administración Empresarial · Sociología Aplicada · Logística',
    socials: {
      x: 'https://x.com/nickolasliberal',
      linkedin: 'https://www.linkedin.com/in/nickolasmachado/',
      website: 'https://bling.uy/',
    },
  },
];
