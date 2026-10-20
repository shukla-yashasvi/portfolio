import { StaticImageData } from "next/image";
import codeforge from "../assets/codeforge.png";
import ames from "../assets/ames.png";
import resume from "../assets/resume.png";
import mlops from "../assets/mlops.png";
import news from "../assets/news.png";
import docs from "../assets/docs.jpeg";
import quiz from "../assets/quiz.jpeg";
import sps from "../assets/sps.jpeg";
import tick from "../assets/tick.jpeg";
import food from "../assets/food.jpeg";
import gemini from "../assets/gemini.jpeg";
import todo from "../assets/todo.png";

export type Project = {
  name: string;
  href: string;
  image: StaticImageData;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "CodeForge",
    href: "https://codeforge-theta.vercel.app/",
    image: codeforge,
    featured: true,
  },
  {
    name: "ModelForge",
    href: "https://modelforge-five.vercel.app/",
    image: mlops,
    featured: true,
  },
  {
    name: "TalentForge",
    href: "https://talentforge-one.vercel.app/",
    image: resume,
    featured: true,
  },
  {
    name: "Ames House Price Predictor",
    href: "https://ames-house-price-predict.netlify.app/",
    image: ames,
  },
  {
    name: "The Chronicles",
    href: "https://the-chronicles.vercel.app/",
    image: news,
  },
  {
    name: "Kanbanix",
    href: "https://kanbanix.vercel.app/",
    image: todo,
  },
  {
    name: "Probe App",
    href: "https://probe-five.vercel.app/",
    image: quiz,
  },
  {
    name: "Nom Nom Nomad",
    href: "https://nom-nom-nomad.vercel.app/",
    image: food,
  },
  {
    name: "Gemini Clone",
    href: "https://gemini-clone-taupe.vercel.app/",
    image: gemini,
  },
  {
    name: "Rochambeau",
    href: "https://rochambeau-jade.vercel.app/",
    image: sps,
  },
  {
    name: "Docket Docs",
    href: "https://docket-docs.vercel.app/",
    image: docs,
  },
  {
    name: "Noughts and Crosses",
    href: "https://noughts-and-crosses-gilt.vercel.app/",
    image: tick,
  },
];
