export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "currently building a song lyrics website",
    description: "lyurics!!",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "can we build something today?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with yuri was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. yuri's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, yuri is the ideal partner.",
    name: "teste da silva",
    title: "um funcionário com sobrenome comum",
  },
  {
    quote:
      "o yuri é uma pessoa muito legal. tem seus altos e baixos, seus problemas, pensa muito em desistir mas nunca deixa de tentar. foi muito gratificante poder fazer parte de um pouquinho da longa jornada que ele tem pela frente. desejo todo o sucesso do mundo!",
    name: "for whom the bell tolls dos santos",
    title: "não é uma música do metallica",
  },
  {
    quote:
      "trabalhei em grupo com o yuri numa empresa há alguns anos e digo que a capacidade dele de transformar seus códigos em arte é surreal. realmente é uma pessoa que ama o que faz.",
    name: "jesse pinkman fresno",
    title: "um talvez morador da cidade de fresno",
  },
  {
    quote:
      "ter o yuri como liderado é tudo que um gestor gostaria de ter. ele é proativo, muito ágil, bastante tímido mas aos poucos se solta e sempre vai estar ouvidos para o que você tem a ensinar. às vezes parecia que eu estava conversando com um anjo.",
    name: "juliane fernandes",
    title: "líder do yuri por um tempinho",
  },
  {
    quote:
      "ele é bem gente boa. gostei bastante de tê-lo como programador freelancer para o que eu precisava. deus abençoe",
    name: "el chavo del 8",
    title: "saiu do barril e ficou bem sucedido",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "assistente de TI",
    desc: "auxílio voltado ao front-end nas plataformas de CRM da empresa.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "um pouquinho de PHP",
    desc: "usado durante um trabalho no curso tecnólogo do SENAC. deu pra ter uma base.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];