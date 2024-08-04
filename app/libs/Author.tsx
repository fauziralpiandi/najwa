interface Author {
  name: string;
  fullName: string;
  greetings: string;
  headLine: string;
  links: {
    github: string;
    instagram: string;
  };
}

export const author: Author = {
  name: "Zira",
  fullName: "Fauzira Alpiandi",
  greetings: "Fauzira Alpiandi",
  headLine: "An enthusiastic frontend developer with a deep passion for crafting engaging user experience.",
  links: {
    github: "fauziralpiandi",
    instagram: "fauziralpiandi",
  },
};
