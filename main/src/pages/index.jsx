import React from 'react';

import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../Components/hero/TwoColumnWithInput.js";

import Features from "../Components/features/ThreeColWithSideImage.js";

import FeatureWithSteps from "../Components/features/TwoColWithSteps.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import '../css/style.css';
import Footer from "../Components/footers/MiniCenteredFooter";




const Loginpage =()=> {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  return (
    <AnimationRevealPage>
    <Hero roundedHeaderButton={true} />
    <Features 
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Features.</HighlightedText>
          </>
        }
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
  <Footer/>
  </AnimationRevealPage>
  );

}

export default Loginpage;