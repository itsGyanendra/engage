import React,{useState} from 'react';
import {Button} from "@material-ui/core";
import {ChatEngine,getOrCreateChat} from 'react-chat-engine';
const ChatUI=()=>{
    const [username, setUsername] = useState('')
  

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div style={{paddingBottom:"10px", paddingTop:"4px"}}>
        
				<input type="text" size="33" style={{padding:"5px"}}
					placeholder='Enter Email ID to start chatting' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<Button variant ="outlined" color="primary" onClick={() => createDirectChat(creds)}>
					Create
				</Button>
			</div>
		)
    }
    return (
        <ChatEngine
        height ="95vh"
        projectID="8a98db44-ffc7-4313-8192-2f42a4bee5f9"
        userName= {localStorage.getItem("email")}
        userSecret="secret123"
        renderNewChatForm={(creds) => renderChatForm(creds)}
       />
    );

}
export default ChatUI;