import React from "react";
import health from "../assets/imgs/events/health.jpg";

const data = [
  {
    title: "TALENT AND INNOVATION PILLAR",
    content:
      "Talent and innovation as a pillar in vijana tubonge organisation gives the youth a chance to ‘think outside the box’ and allows them to develop new ideas that are in line with the current era of technological  advancement.",
    btn_link: "intagram.com",
    btn_caption: "Learn More",
    image_url:
      "https://images.unsplash.com/photo-1605677725437-74dafaa1272d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80",
  },
  {
    title: " CHARITY PILLAR  ",
    content:
      "To improve the charity’s brand image and engagement with its donors and sponsors",
    btn_link: "",
    btn_caption: " Learn More",
    image_url:
      "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "MENTORSHIP PILLAR",
    content:
      "Mentorship pillar is a subsidiary of the larger Vijana Tubonge ORG based in Wanguru Kirinyaga County. It is therefore vital to have a mentorship pillar which continues this noble work of inspiring a better community,  ",
    btn_link: "",
    btn_caption: "Learn More",
    image_url:
      "https://images.unsplash.com/photo-1644132246573-bc75ce0a2946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1lbnRvcnNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "THE HEALTH PILLAR",
    content:
      "To improve the quality of life through promoting health and wellness of individuals and communities that we are honored to serve. ",
    btn_link: "",
    btn_caption: "Learn More",
    image_url: health,
  },
  {
    title: "THE ENVRONMENT PILLAR.",
    content:
      "Vijana Tubonge Environment pillar is a docket which is determined to deal with climatic conditions and ensure that our environment is conducive to everyone",
    btn_link: "intagram.com",
    btn_caption: "Learn More",
    image_url:
      "https://images.unsplash.com/photo-1562053232-1b9ef8cd1f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHx0cmVlcyUyMGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "CHAPTERS PILLAR",
    content:
      "The Chapters Pillar under Vijana Tubonge will create a safe space where the diversity of life thrives through outreach of the Vijana Tubonge, which promotes Environment, health, charity, mentorship, talent and innovation aspects of life",
    btn_caption: "Learn More",
    image_url:
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRvZ2V0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
];

const AboutUs = () => {
  const cards =
    data &&
    data.map((itms, index) => (
      <div key={index} className="aspect-square mx-8 p-4 mt-5  shadow-lg ">
        <p className="lg:text-2xl text-teal-600 font-bold ">
          {itms.title.toUpperCase()}
        </p>
        <img
          className="h-80 w-72 object-center"
          src={itms.image_url}
          alt="article_image"
        />

        <p className="mt-2 lg:text-xl leading-8  tracking-tight text-gray-900 sm:text-4xl overflow-hidden">
          {itms.content}
        </p>
        <a
          href={itms.btn_link}
          className="mt-5 mb-2  rounded-md shadow lg:w-auto flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-gray-300 md:py-4 md:text-lg md:px-10"
        >
          {itms.btn_caption.toUpperCase()}
        </a>
      </div>
    ));

  return (
    <div className="grid place-items-center lg:py-10 sm:items-center">
      <div className="lg:text-center lg:px-10 sm:items-center">
        <h1 className="text-4xl text-teal-600 font-bold tracking-wide uppercase text-center">
          About us
        </h1>
        <p className="mt-2 text-3xl text-center text-teal-600 leading-8 font-semibold tracking-tight sm:text-4xl">
          Vijana Tubonge is a community based organization registered under the
          Kenyan law. The youth led organization involves itself on the
          following issues; Health, Environment, Mentorship, Charity, Talent and
          Innovation and Chapters
        </p>
      </div>
      <div className="grid gap-4 place-items-center lg:grid-cols-3 ">
        {cards}
      </div>
    </div>
  );
};

export default AboutUs;
