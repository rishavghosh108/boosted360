import React from "react";
import Image from "next/image";
import { Layouts } from "../Component";
import PseoBanner from "../Component/Widgets/PseoAgency/PseoBanner";
import WeHave from "../Component/Widgets/PseoAgency/WeHave";
import Unlocking from "../Component/Widgets/PseoAgency/Unlocking";
import FeaturedCase from "../Component/Widgets/PseoAgency/FeaturedCase";
import Numbers from "../Component/Widgets/PseoAgency/Numbers";
import Whois from "../Component/Widgets/PseoAgency/Whois";
import DiscoverFeatured from "../Component/Widgets/PseoAgency/DiscoverFeatured";
import LearnMore from "../Component/Widgets/Homepagegreen/LearnMore";
import Questions from "../Component/Widgets/PseoAgency/Questions";
import OurGrowth from "../Component/Widgets/Homepagegreen/OurGrowth";
import Testimonials from "../Component/Widgets/PseoAgency/Testimonials";
import OurCreds from "../Component/Widgets/PseoAgency/OurCreds";
import OurClient from "../Component/Widgets/PseoAgency/OurClient";
import ExploreMore from "../Component/Widgets/PseoAgency/ExploreMore";
import LevelUp from "../Component/Widgets/PseoAgency/LevelUp";
import Growing from "../Component/Widgets/Homepagegreen/Growing";
import Youalso from "../Component/Widgets/PseoAgency/Youalso";

export default function page() {
  return (
    <Layouts>
        <PseoBanner />
        <WeHave />
        <Unlocking />
        <FeaturedCase />
        <Numbers />
        <Whois />
        <DiscoverFeatured />
        <LearnMore />
        <Questions />
        <OurGrowth />
        <Testimonials />
        <OurCreds />
        <OurClient />
        <ExploreMore />
        <LevelUp />
        <Youalso />
        <Growing />
    </Layouts>
  );
}
