import React from 'react';


import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../Components/headers/light.js";
import ContactUsForm from "../Components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Footer from "../Components/footers/MiniCenteredFooter";

const Contact =()=>{
    return (
        <AnimationRevealPage>
        <Header />
        <ContactUsForm />     
        <Footer/>       
      </AnimationRevealPage>
        );
}
export  default Contact;