export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Urban';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  images: string[]; // Additional images for the dialog
  client?: string;
  location?: string;
  year?: string;
  detailedDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Residency at Batra Colony",
    category: "Residential",
    description: "A sustainable residential development featuring contemporary design and eco-friendly materials",
    image: "https://housing-images.n7net.in/01c16c28/4ed699b1e6f6d5ea574e270985c3f407/v0/large/4_bhk_independent_house-for-sale-suncity_township_i-Rohtak-others.jpg",
    images: [
      "/ProjectImages/BatraColony/Bedroom.webp",
      "/ProjectImages/BatraColony/Bedroom2.webp",
      "/ProjectImages/BatraColony/Bedroom3.webp",
      "/ProjectImages/BatraColony/Bedroom4.webp",
      "/ProjectImages/BatraColony/LivingRoom.webp",
      "/ProjectImages/BatraColony/LivingRoom2.webp",
      "/ProjectImages/BatraColony/DinningRoom.webp",
      "/ProjectImages/BatraColony/Kitchen.webp",
      "/ProjectImages/BatraColony/Kitchen2.webp",
      "/ProjectImages/BatraColony/Mandir.webp",
    ],
    client: "EcoHomes Development",
    year: "2023",
    detailedDescription: "This modern residential complex represents our commitment to sustainable living. Designed with passive solar principles and constructed with locally-sourced materials, the complex features green roofs, rainwater harvesting systems, and community gardens."
  },
  {
    id: 2,
    title: "Residency in Omaxe City",
    category: "Residential",
    description: "Premium and Aesthetic interior Designs",
    image: "https://img.squareyards.com/secondaryPortal/IN_638778351673323687-17032507060767.jpg",
    images: [
      "/ProjectImages/OmaxeCity/LivingRoom.webp",
      "/ProjectImages/OmaxeCity/LivingRoom2.webp",
      "/ProjectImages/OmaxeCity/Bedroom.webp",
      "/ProjectImages/OmaxeCity/Bedroom3.webp",
      "/ProjectImages/OmaxeCity/Kitchen.webp",
      "/ProjectImages/OmaxeCity/Kitchen2.webp",
    ],
    location: "Sonipat",
    year: "2022",
    detailedDescription: "The Urban Park Development project transformed an underutilized industrial area into a vibrant public space. The design incorporates sustainable drainage systems, native plantings, and flexible community spaces for events and gatherings."
  },
  {
    id: 4,
    title: "Farmhouse Farmana",
    category: "Residential",
    description: "A modern office complex designed for flexibility and collaboration",
    image: "/ProjectImages/Bunglow/OutterView.webp",
    images: [
      "/ProjectImages/Bunglow/OutterView.webp",
      "/ProjectImages/Bunglow/LivingRoom.webp",
      "/ProjectImages/Bunglow/LivingRoom2.webp",
      "/ProjectImages/Bunglow/Bedroom.webp",
      "/ProjectImages/Bunglow/Bedroom2.webp",
      "/ProjectImages/Bunglow/Entry.webp",
      "/ProjectImages/Bunglow/Aesthetics.webp",
    ],
    client: "TechInnovate Inc.",
    location: "San Francisco, California",
    year: "2022",
    detailedDescription: "The Corporate Headquarters project reimagines the traditional office environment with a focus on collaboration, flexibility, and employee wellbeing. The design features adaptable workspaces, abundant natural light, biophilic elements, and state-of-the-art technology infrastructure."
  },
  {
    id: 3,
    title: "Luxury Hotel Commercial",
    category: "Commercial",
    description: "Contemporary interior design for a five-star hotel featuring local artisanal elements",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&q=80"
    ],
    client: "Azura Hospitality Group",
    location: "Miami, Florida",
    year: "2023",
    detailedDescription: "This luxury hotel interior project blends contemporary design with local cultural influences. Each space tells a story through carefully curated materials, custom furniture pieces, and artwork commissioned from regional artists."
  },
  {
    id: 5,
    title: "Eco-Friendly Office Tower",
    category: "Residential",
    description: "A skyscraper with innovative energy-efficient features and sustainable materials",
    image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=1200&q=80",
      "/InteriorDesigns/Bedrooms/RM29-1003860.webp",
      "https://images.unsplash.com/photo-1579646528432-11fbe7b9d09c?w=1200&q=80",
      "https://images.unsplash.com/photo-1580745089072-aee9282fe258?w=1200&q=80"
    ],
    client: "GreenFuture Developments",
    location: "Chicago, Illinois",
    year: "2021",
    detailedDescription: "This eco-friendly office tower sets new standards for sustainable high-rise architecture. The building incorporates advanced technologies for energy efficiency, including a double-skin façade, integrated photovoltaic panels, and smart building systems that optimize resource use."
  },
  {
    id: 6,
    title: "Smart City Initiative",
    category: "Urban",
    description: "Integrating technology and infrastructure to create a smarter, more connected urban environment",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
    ],
    client: "Metropolitan Innovation Authority",
    location: "Toronto, Canada",
    year: "2023",
    detailedDescription: "Our Smart City Initiative reimagines urban infrastructure with integrated technology solutions. The project includes intelligent street lighting, environmental monitoring systems, interactive public information displays, and a citywide network that supports autonomous transportation."
  },
  {
    id: 7,
    title: "Luxury Villa Interiors",
    category: "Commercial",
    description: "A high-end villa with a blend of traditional craftsmanship and modern aesthetics",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b923c8e?w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
    ],
    client: "Private Client",
    location: "Amalfi Coast, Italy",
    year: "2022",
    detailedDescription: "This luxury villa interior project blends the client's appreciation for traditional Mediterranean craftsmanship with contemporary design sensibilities. Custom furniture pieces, hand-finished surfaces, and curated art installations create a unique living environment that respects the region's architectural heritage."
  },
  {
    id: 8,
    title: "Sustainable Public Plaza",
    category: "Urban",
    description: "A multifunctional public space designed for environmental and social sustainability",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&q=80",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1200&q=80",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1200&q=80"
    ],
    client: "Vancouver Parks Department",
    location: "Vancouver, Canada",
    year: "2021",
    detailedDescription: "The Sustainable Public Plaza transforms an underutilized urban site into a vibrant community hub. The design incorporates permeable surfaces, rain gardens, native plantings, and flexible gathering spaces that support a wide range of community activities and events throughout the year."
  }
];

export const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Urban'];
