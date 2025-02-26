"use client";
import axios from "axios";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Layouts } from "./Component";
import Banner from "./Component/Widgets/Homepagegreen/Banner";
import Logos from "./Component/Widgets/Homepagegreen/Logos";
import TheAgency from "./Component/Widgets/Homepagegreen/TheAgency";
import LearnMore from "./Component/Widgets/Homepagegreen/LearnMore";
import OurServices from "./Component/Widgets/Homepagegreen/OurServices";
import WeRank from "./Component/Widgets/Homepagegreen/WeRank";
import OurTrusted from "./Component/Widgets/Homepagegreen/OurTrusted";
import OurGrowth from "./Component/Widgets/Homepagegreen/OurGrowth";
import Expertise from "./Component/Widgets/Homepagegreen/Expertise";
import Companies from "./Component/Widgets/Homepagegreen/Companies";
import Join from "./Component/Widgets/Homepagegreen/Join";
import Growing from "./Component/Widgets/Homepagegreen/Growing";

export default function Home() {
  
  
  return (
    <Layouts>
      <Banner/>
      <Logos />
      <TheAgency />
      <LearnMore />
      <OurServices />
      <WeRank />
      <OurTrusted />
      <OurGrowth />
      <Expertise />
      <Companies />
      <Join />
      <Growing />
    </Layouts>
  );
}
