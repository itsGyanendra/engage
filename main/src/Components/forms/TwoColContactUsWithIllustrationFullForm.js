import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "Components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "Components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-none py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

function feedbacksubmit(){
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx7xmKLO9cTeCexr9_fQwR78Etv5x2EqANhhZ-_8o8waSaQsyh2zTIjk2ZhgfAtEFDD/exec'
  const form = document.forms['google-sheet']
  console.log(form);
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Your Response has successfully submitted. You will be contacted soon"))
    .catch(error => console.error('Error!', error.message))

}

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "Please fill up the form in case you have any query, complaints and feedback for us. We love to hear from you.",
  submitButtonText = "Send",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form method="post" autocomplete="off" name="google-sheet">
              <Input required type="email" name="Email" defaultValue={localStorage.getItem("email")} placeholder="Your Email Address" />
              <Input required type="text" name="Name" defaultValue ={localStorage.getItem("name")} placeholder="Full Name" />
              <Input type="text" name="Subject" placeholder="Subject" />
              <Textarea required name="Message" placeholder="Your Message Here" />
              
            </Form>
            <SubmitButton  onClick={() => feedbacksubmit()} >{submitButtonText}</SubmitButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
