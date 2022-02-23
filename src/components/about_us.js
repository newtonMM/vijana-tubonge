import React from "react";
import health from "../assets/imgs/events/health.jpg";

const data = [
  {
    title: "TALENT AND INNOVATION PILLAR",
    content:
      "Under Director Julius Mutugi Talent and innovation as a pillar in vijana tubonge organisation gives the youth a chance to think outside the box and allows them to develop new ideas that are in line with the current era of technological  advancement",
    btn_link: "intagram.com",
    btn_caption: "Learn More",
    image_url:
      "https://images.unsplash.com/photo-1605677725437-74dafaa1272d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80",
  },
  {
    title: " CHARITY PILLAR  ",
    content:
      "Our charity pillar under Director Carol Wamuyu serves the most vulnerable in the society and ensures that peoples’ human rights and needs are met. We have distributed sanitary towels to the less privileged in different villages in Tebere ward and recently through the Nilishe Charity Event, we have fed street kids and given them Christmas gift hampers. We have the chapter pillar under Director Cynthia Wambui that aids in expanding the Vijana Tubonge family in other constituencies, counties, and with future plans of going international. Indeed the future is so bright, It blinds my eyes ~Oprah Winfrey",
    btn_link: "",
    btn_caption: " Learn More",
    image_url:
      "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "MENTORSHIP PILLAR",
    content: "",
    btn_link:
      "Under his leadership Director Kevin Gitimu, aims at touching three aspects of the human life which are; the social, economic and the civil aspect. It will attain this by holding mentorship talks in schools both primary and secondary, organizing seminars on savings and financial literacy, and also civic education on human rights, the constitution, leadership among other vital information. This pillar works hand in hand with the health pillar, environment and charity",
    btn_caption: "Learn More",
    image_url:
      "https://images.unsplash.com/photo-1644132246573-bc75ce0a2946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1lbnRvcnNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "THE HEALTH PILLAR",
    content:
      "Headed by Director Mary Mwangi aims at promoting the overall well-being and healthy living through early detection and prevention of diseases like cancer and HIV, treatment of patients and vaccinations of covid 19, issuing of PREP and PEP, distribution of sanitary towels as well as sanitary packets for boys and sparking uncomfortable conversations surrounding mental health, sexual reproductive health and gender-based violence. ",
    btn_link: "",
    btn_caption: "Learn More",
    image_url: health,
  },
  {
    title: "THE ENVRONMENT PILLAR.",
    content:
      "Under her leadership Director Prudence Gichuki. The pillar’s major focus is on creating awareness about nature and making the environment greener and cleaner. So far, in the month of December 2021, when the pillars were created, the environment pillar had planted 40 trees at the river bank of River Thiba, and a further 60 trees in S.Ngariama, totaling to 100 trees. Plans are underway for creation of carbon sinks, rehabilitation of forests and water catchment areas, promoting greener and cleaner sources of energy and general greening of the earth",
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
      <div className="lg:text-center lg:px-10 sm:items-center sm:mx-3">
        <h1 className="text-4xl text-teal-600 font-bold tracking-wide uppercase text-center">
          About us
        </h1>
        <p className="mt-2 text-3xl text-center text-teal-600 leading-6 font-sm tracking-normal sm:text-4xl">
          Vijana Tubonge! Vijana Tubonge is a Community Based Organization,
          registered under the Kenyan Law. The Organization is based in
          Kirinyaga County. We are a great team of youths who by the help of our
          six pillars engage in issues affecting the youths and the society at
          large. The organization is headed by the President Charles Karuga
          Kamau deputized by Keziah Kamau, The Chief Director Operation Benson
          Gachoki Mukono and the Chief Finance Officer Vincent Kariuki Muriithi.
          We are committed in Practicing Community Social Responsibility through
          the help of our six pillars
        </p>
      </div>
      <div className="grid gap-4 place-items-center lg:grid-cols-3 ">
        {cards}
      </div>
    </div>
  );
};

export default AboutUs;
