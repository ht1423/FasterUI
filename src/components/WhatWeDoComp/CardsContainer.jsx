import React from "react";
import Card from "./Cards";
import Frame from "../../assets/WhatWeDoAsset/Frame.svg"
import Star from "../../assets/WhatWeDoAsset/Star.svg"
import PC from "../../assets/WhatWeDoAsset/PC.svg"
import Bag from "../../assets/WhatWeDoAsset/Bag.svg"
import BlueLogo from "../../assets/WhatWeDoAsset/BlueLogo.svg"
import Block from "../../assets/WhatWeDoAsset/Block.svg"
import look from "../../assets/WhatWeDoAsset/look.svg"
import W from "../../assets/WhatWeDoAsset/W.svg"

const cardsData = [
  {
    icon: Frame,
    title: "Web Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: Star,
    title: "UI/UX Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: PC,
    title: "Responsive Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: Bag,
    title: "E-commerce Solutions",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    downImage: look,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    icon: BlueLogo,
    title: "Webflow",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    rightImage: W,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    icon: Block,
    title: "Custom Development",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    colSpan: 1,
    rowSpan: 1,
  },
];

function CardsContainer() {
  return (
    <div
      className="grid grid-cols-[repeat(4,280px)] auto-rows-[252px] gap-[32px]"
    >
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default CardsContainer;
