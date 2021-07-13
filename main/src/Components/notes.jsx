import React from "react";
import { Typography,Button, ButtonGroup} from "@material-ui/core";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import '../css/style.css';

function downloadTxtFile () {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById('input').value],    
              {type: 'text/plain;charset=utf-8'});
  element.href = URL.createObjectURL(file);
  element.download = "notes.txt";
  document.body.appendChild(element);
  element.click();
}


const Input = tw.input`mt-6 first:mt-0  py-0 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`${tw`h-48 w-8/12 flex`}`

const Note= () =>{
 
  return (
    <center>
      <Typography gutterBottom  variant="h4">Minutes of Meeting</Typography>
      <div className ="container-fluid">
        <Textarea id="input" name="Input" style={{padding:"10px"}} placeholder="Enter the Importants Points of Meeting here." />
        <ButtonGroup style={{paddingTop:"20px", paddingBottom:"30px"}}>
          <Button variant="outlined" color="primary" onClick={()=>downloadTxtFile()}>Download</Button>
        </ButtonGroup>
      </div>
    </center>
  );
}
export default Note;