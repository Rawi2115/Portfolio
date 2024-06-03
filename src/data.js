const data = [
  {
    projectUrl: "https://microfied.netlify.app",
    projectName: "MicroFied",
    description:
      "Website for purchasing Arduinos,Raspberry pi and othe digital electronics",
    tags: ["React", "React-Router"],
    id: 1,
    projectImg: "/microfied.jpg",
  },
  {
    projectUrl: "https://incandescent-tanuki-abbfef.netlify.app",
    projectName: "Van Life",
    description:
      "website for browsing and renting vans, you can login using the email:b@b.com password:p123 ",
    tags: ["React", "React-Router"],
    id: 2,
    projectImg: "/vanlife.png",
  },
  {
    projectUrl: "https://rawi2115.github.io/Quizzical/",
    projectName: "Quizzical",
    description: "Random Quizes website",
    tags: ["React"],
    id: 3,
    projectImg: "/quizzical.png",
  },
  {
    projectUrl: "https://rawi2115.github.io/Movie-Watchlist/",
    projectName: "Movie Watchlist",
    description: "Search,find and movies to your watchlist",
    tags: ["Vanilla Javascript"],
    id: 4,
    projectImg: "/watchlist.png",
  },
];
export const TabTitle = (newTitle) => {
  return (document.title = `Portfolio | ${newTitle}`);
};
export default data;
