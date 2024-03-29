import { useState } from "react";
import { Box } from "@chakra-ui/layout";
import ChatState  from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
// import Chatbox from "../components/Chatbox";
// import MyChats from "../components/MyChats";
// import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="90vh" p="10px">
        {/* {user && <MyChats fetchAgain={fetchAgain} />} */}
        {/* {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )} */}
      </Box>
    </div>
  );
};

export default Chatpage;
