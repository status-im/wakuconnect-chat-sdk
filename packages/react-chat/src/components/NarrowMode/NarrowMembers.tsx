import React from "react";
import styled from "styled-components";

import { MembersList } from "../Members/MembersList";

import { NarrowTopbar } from "./NarrowTopbar";

interface NarrowMembersProps {
  setShowChannels: (val: boolean) => void;
  setShowMembersList: (val: boolean) => void;
  setMembersList: any;
}

export function NarrowMembers({
  setShowChannels,
  setShowMembersList,
  setMembersList,
}: NarrowMembersProps) {
  return (
    <ListWrapper>
      <NarrowTopbar list="Community members" />
      <MembersList
        setShowChannels={setShowChannels}
        setShowMembers={setShowMembersList}
        setMembersList={setMembersList}
      />
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  padding: 0px 18px 18px;
  background: ${({ theme }) => theme.bodyBackgroundColor};
  overflow: auto;
`;
