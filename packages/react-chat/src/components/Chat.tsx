import React, { useState } from "react";
import styled from "styled-components";

import { useNarrow } from "../contexts/narrowProvider";

import { Channels } from "./Channels/Channels";
import { ChatBody } from "./Chat/ChatBody";
import { ChatCreation } from "./Chat/ChatCreation";
import { Community } from "./Community";
import { Members } from "./Members/Members";
import { CommunityModal } from "./Modals/CommunityModal";
import { EditModal } from "./Modals/EditModal";
import { ProfileModal } from "./Modals/ProfileModal";

function Modals() {
  return (
    <>
      <CommunityModal subtitle="Public Community" />
      <EditModal />
      <ProfileModal />
    </>
  );
}

export function Chat() {
  const [showMembers, setShowMembers] = useState(true);
  const [createChat, setCreateChat] = useState(false);

  const narrow = useNarrow();

  return (
    <ChatWrapper>
      {!narrow && (
        <ChannelsWrapper>
          <StyledCommunity />
          <Channels setCreateChat={setCreateChat} />
        </ChannelsWrapper>
      )}
      {!createChat && (
        <ChatBody
          onClick={() => setShowMembers(!showMembers)}
          showMembers={showMembers}
          setCreateChat={setCreateChat}
        />
      )}
      {showMembers && !narrow && !createChat && <Members />}
      {createChat && <ChatCreation setCreateChat={setCreateChat} />}
      <Modals />
    </ChatWrapper>
  );
}

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ChannelsWrapper = styled.div`
  width: 21%;
  height: 100%;
  min-width: 196px;
  background-color: ${({ theme }) => theme.sectionBackgroundColor};
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
`;

const StyledCommunity = styled(Community)`
  padding: 0 0 0 8px;
  margin: 0 0 16px;
`;
