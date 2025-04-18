import { ProfileProps } from "@/components/profile-card";

// Profile data
const profiles: ProfileProps[] = [
  {
    id: "p-cv",
    name: "Paul Macgregor",
    roles: ["Designer"],
    bio: "Designer at Linear, based in UK.",
    website: "https://p.cv",
    image:
      "https://minimal.gallery/wp-content/uploads/2024/12/p.cv_-2048x1138.png",
  },
  {
    id: "andychung-me",
    name: "Andy Chung",
    roles: ["Designer"],
    bio: "Designer in West Berkeley, CA.",
    website: "https://andychung.me/",
    image:
      "https://minimal.gallery/wp-content/uploads/2020/11/49169cb4ea710de6e9bc8380f9ef5cb7fa65ce11.png",
  },

  {
    id: "gracewalker-ca",
    name: "Grace Walker",
    roles: ["Designer"],
    bio: "An independent designer working with companies at the edge of new frontiers.",
    website: "https://www.gracewalker.ca",
    image:
      "https://minimal.gallery/wp-content/uploads/2024/09/www.gracewalker.ca_-900x500.png",
  },
  {
    id: "sidney-me",
    name: "Sidney Alcantara",
    roles: ["Designer"],
    bio: "Design Engineer at Canva based in Sydney.",
    website: "https://sidney.me",
    image:
      "https://minimal.gallery/wp-content/uploads/2023/05/sidney-alcantara-2048x1138.jpg",
  },
  {
    id: "andyrader-com",
    name: "Andy Rader",
    roles: ["Designer", "Developer"],
    bio: "Designer and front-end developer based in Berlin, Germany.",
    website: "https://www.andyrader.com",
    image:
      "https://minimal.gallery/wp-content/uploads/2023/02/andy-rader-2048x1138.jpg",
  },
  {
    id: "tobiasthaden-com",
    name: "Tobias Thaden",
    roles: ["Developer", "Designer"],
    bio: "Tobias Thaden is a software developer and product designer.",
    website: "https://tobiasthaden.com",
    image:
      "https://minimal.gallery/wp-content/uploads/2020/11/tumblr_pgp1u8f8sT1sjvgq8o1_1280-900x500.png",
  },
  {
    id: "matejbaco-eu",
    name: "Matej Bačo",
    roles: ["Developer"],
    bio: "Impact-driven software engineer from Czech Republic in love with everything open source.",
    website: "https://www.matejbaco.eu",
  },
  {
    id: "richbrown-info",
    name: "Rich Brown",
    roles: ["Designer"],
    bio: "Freelance UX/UI designer and art director.",
    website: "https://www.richbrown.info",
  },
  {
    id: "thomas-quigley",
    name: "Thomas Quigley",
    roles: ["Designer"],
    bio: "Designer based in New York City.",
    website: "https://www.quigley.work",
    image:
      "https://minimal.gallery/wp-content/uploads/2023/04/Screenshot-2023-04-25-at-18.47.33-900x500.png",
  },
  {
    id: "sanju-sh",
    name: "Sanju S.",
    roles: ["Designer"],
    bio: "Designer Founder at ThisUX & Google Developer Expert for Android",
    website: "https://www.sanju.sh",
  },
  {
    id: "marcel-apitty-wcopilot-webflow-io",
    name: "Marcel Apitty",
    roles: ["Designer"],
    bio: "Creative UI/UX Designer based in Brazil.",
    website: "https://marcel-apitty-wcopilot.webflow.io",
    image:
      "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/65a8ecabf32a3844480038.png",
  },
  {
    id: "dennissnellenberg-com",
    name: "Dennis Snellenberg",
    roles: ["Designer", "Developer"],
    bio: "Helping brands to stand out in the digital era.",
    website: "https://dennissnellenberg.com",
    video:
      "https://assets.awwwards.com/awards/sites_of_the_day/2022/06/dennissnellenberg-1600x1200-opti.mp4",
  },
  {
    id: "martin-laxenaire-fr",
    name: "Martin Laxenaire",
    roles: ["Developer"],
    bio: "Front-end developer based in Lyon, France",
    website: "https://www.martin-laxenaire.fr",
  },
  {
    id: "emilkowal-ski",
    name: "Emil Kowalski",
    roles: ["Designer"],
    bio: "Design Engineer at Linear.",
    website: "https://emilkowal.ski",
  },
  {
    id: "antfu-me",
    name: "Anthony Fu",
    roles: ["Developer"],
    bio: "Hey, I am Anthony Fu, a fanatical open sourceror, and a design engineer.",
    website: "https://antfu.me",
  },
  {
    id: "jonhargreaves-com",
    name: "Jon Hargreaves",
    roles: ["Designer"],
    bio: "Senior Product Designer at QuickNode and the Founder of Coffee Club.",
    website: "https://www.jonhargreaves.com",
  },
  {
    id: "pedropeguerojr-com",
    name: "Pedro Peguero Jr.",
    roles: ["Designer"],
    bio: "Art Director and Designer living in Brooklyn, NY",
    website: "https://www.pedropeguerojr.com",
  },
  {
    id: "igorstumberger-com",
    name: "Igor Štumberger",
    roles: ["Designer"],
    bio: "Senior Product Designer with a love for code and technology.",
    website: "https://igorstumberger.com",
  },
  {
    id: "nicknoble-works",
    name: "Nick Noble",
    roles: ["Designer"],
    bio: "Building better teams and smaller software @ Miniware.",
    website: "https://nicknoble.works",
  },
  {
    id: "robb-is",
    name: "Robb Böhnke",
    roles: ["Designer", "Developer"],
    bio: "Developer & Designer based in Berlin, Germany.",
    website: "https://robb.is/",
  },
  {
    id: "rauno-me",
    name: "Rauno Freiberg",
    roles: ["Developer"],
    bio: "",
    website: "https://rauno.me",
  },
  {
    id: "david-mendes-com",
    name: "David Mendes",
    roles: ["Designer"],
    bio: "Curious designer, bad skateboarder, frustrated musician.",
    website: "https://www.david-mendes.com",
  },
  {
    id: "cydstumpel-nl",
    name: "Cyd Stumpel",
    roles: ["Developer"],
    bio: "Creative Developer & Teacher from Amsterdam, The Netherlands.",
    website: "https://cydstumpel.nl",
  },
  {
    id: "praveenjuge-com",
    name: "Praveen Juge",
    roles: ["Designer"],
    bio: "What’s up nerds? I’m Praveen Juge, a designer and developer.",
    website: "https://praveenjuge.com",
  },
  {
    id: "ibelick-com",
    name: "Julien Thibeaut",
    roles: ["Designer"],
    bio: "Building software with a focus on design, motion, and detail.",
    website: "https://ibelick.com",
  },
  {
    id: "mitul-ca",
    name: "Mitul Shah",
    roles: ["Designer"],
    bio: "Photographer, design engineer, and a bit more.",
    website: "https://mitul.ca",
  },
  {
    id: "taurean-work",
    name: "Taurean Bryant",
    roles: ["Designer"],
    bio: "Designer-turned-engineer with a deep love of the web.",
    website: "https://taurean.work",
  },
  {
    id: "paco-me",
    name: "Paco Coursey",
    roles: ["Developer"],
    bio: "Crafting interfaces. Building polished software and web experiences.",
    website: "https://paco.me",
  },
];

export default profiles;
