import React, { useEffect } from "react";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import Hero from "../../components/sections/Hero";
import Metrics from "../../components/sections/Metrics";
import ProblemCards from "../../components/sections/ProblemCards";
import FeatureGrid from "../../components/sections/FeatureGrid";

import ResultsTeaser from "../../components/sections/ResultsTeaser";
import Timeline from "../../components/sections/Timeline";
import CTA from "../../components/sections/CTA";
import Features from "../Features/Features";
import Architecture from "../Architecture/Architecture";
import About from "../About/About";

export default function Home() {
  useEffect(() => {
    setSEO(siteContent.home.seo, siteContent.brand.shortTitle);
  }, []);

  return (
    <>
      <Hero content={siteContent.home.hero} />
      <Features />
      <Metrics content={siteContent.home.metrics} />
      <ProblemCards content={siteContent.home.problems} />
      <FeatureGrid content={siteContent.home.featuresPreview} />
      <Architecture content={siteContent.home.architecturePreview} />
      <About content={siteContent.home.aboutPreview} />
      <ResultsTeaser content={siteContent.home.resultsTeaser} />
      <Timeline content={siteContent.home.timeline} />
      <CTA content={siteContent.home.ctaBanner} />
    </>
  );
}                         