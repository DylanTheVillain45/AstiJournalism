import React from "react";
const team = [
  {
    name: "Mr. Long",
    blurb: "Dreamer, believer, doer.",
    img: "",
  },
  {
    name: "Mr. Zavala",
    blurb: "Bringing both brains and brawn to Journalism Club. Silla there!",
    img: "",
  },
  {
    name: "Benji",
    blurb:
      "A young boy with a humble dream of a prosperous ASTI Journalism Club.",
    img: "",
  },
  {
    name: "Ava",
    blurb:
      "Journalistic Integrity. Creative Genius. Pottery Skills. It’s all there. She can whip up articles like it’s nobody's business.",
    img: "",
  },
  {
    name: "Roan",
    blurb:
      "Activist by day, journalist by night. Brace yourself- he is going to change the world.",
    img: "",
  },
  {
    name: "Max",
    blurb:
      "Max will impress you with his thoughtfulness and catch you off guard with his lightning-quick wit. But don’t talk to him until he’s had his morning coffee!",
    img: "",
  },
  {
    name: "Elvis",
    blurb:
      "Our board’s most elegant member, Elvis has a killer sense of fashion, a bubbly personality, and a lifelong passion for the art of journalism.",
    img: "",
  },
  {
    name: "Bosco",
    blurb:
      "One of ASTI’s most joyful students. A single conversation with Bosco will remind you all the ways in which life is beautiful.",
    img: "",
  },
  {
    name: "Dylan",
    blurb:
      "Basketball star turned computer genius. But don’t get him wrong- he’ll still cook you on the court, too!",
    img: "",
  },
  {
    name: "Adikkya",
    blurb:
      "He might strike you as a run-of-the-mill jock, but when his hands hit the keyboard, the magic begins.",
    img: "",
  },
];

const About = () => {
  return (
    <div className="min-h-screen text-center px-8 py-20 mx-auto">
      <h1 className="text-4xl underline font-serif mb-12">Meet Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:max-w-[900px] max-w-[600px] mx-auto">
        {team.map((article, index) => (
          <div
            className="max-w-80 mx-auto bg-beige border-2 rounded-xl border-black px-8 py-4"
            key={index}
          >
            <h1 className="underline text-2xl font-serif mb-4">{article.name}</h1>
            <p className="text-xl opacity-60">{article.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
