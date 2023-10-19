import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = ( props ) => {
    const chatProps = useMultiChatLogic(
        '69f9ae03-e581-4b22-a17f-15bb5e9295ec', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: "100vh" }}>
            <MultiChatSocket { ...chatProps } style={{ fontFamily: "Poppins" }} />
            <MultiChatWindow { ...chatProps } style={{ height: "100%", fontFamily: "Poppins" }} />
        </div>
    )
};
export default ChatsPage;