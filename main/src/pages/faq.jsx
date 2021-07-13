import React from 'react';

import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../Components/headers/light.js";
import Footer from "../Components/footers/MiniCenteredFooter";
import FAQ from "../Components/faqs/SingleCol.js";


const Faq =()=>{
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  return (
    <AnimationRevealPage>
    <Header roundedHeaderButton="true" />
    <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Can we chat with friends, family and Colleague during meeting ?",
            answer:
              "Yes, you can chat 24/7 with your friends, family and colleagues during meet. We also provide pre-meeting and post-meeting chat conversation so that you always get connected with them. "
            },
          {
            question: "How to start new meeting ?",
            answer:
              "To start new meeting, you first need to login through google and once you login , then go to the meet page (Link is present in header of website). Here you can see the option to start meeting. Click on that option. Then Copy invitation button get displayed. Copy the invitation and send it to your peer by email, whatsapp or our chat service and ask them to enter the code in meet page so that you both can connect."
            },
          {
            question: "How to join meeting ?",
            answer:
              "To join meeting, you first need to login through google and once you login , then go to the meet page (Link is present in header of website). Here you can see the option to enter code and Join meeting option. Enter the code provided to you and click on join meeting. You will be connected once the host will let you in the meeting"
            },
          {
            question: "How to record meeting ?",
            answer:
              "Once the participants join, you can see on the left topmost corner start. Clicking on the button you will asked to tell which screen of your computer you want to record. Select Screen and recording will start. You can pause and resume the recording too. Once you click on stop recording you will get the button to download the recording in your local computer."
          },
          {
            question: "Can more than two people connect over video call ?",
            answer:
              "Currently we are providing only two people two connect over call. "
          },
          {
            question: "Still have a question ?",
            answer:
              "If you still have questions, then please contact us. We would be happy to answer the same."
          }
        ]}
      />
      <Footer/>
    </AnimationRevealPage>
    );
}
export default Faq;