import React from "react";
import Gallery from "react-grid-gallery";

import image1 from "../assets/imgs/events/karuga.jpg";
import image2 from "../assets/imgs/events/deno.jpg";
import image3 from "../assets/imgs/events/soni.jpg";
import image4 from "../assets/imgs/events/selfie.jpg";
import image5 from "../assets/imgs/events/warembo.jpg";

const IMAGES = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 272,
    thumbnailHeight: "28vh",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 272,
    thumbnailHeight: "28vh",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 272,
    thumbnailHeight: "28vh",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 272,
    thumbnailHeight: "28vh",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 272,
    thumbnailHeight: "28vh",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

function gallery() {
  return (
    <div className="container overflow-hidden h-80">
      {/* <h1 className=" py-2 font-bold  uppercase text-center text-teal-600 text-xl place-self-center">
        Pictures
      </h1> */}
      <Gallery images={IMAGES} maxRows={4} rowHeight="28vh" />
    </div>
  );
}

export default gallery;
