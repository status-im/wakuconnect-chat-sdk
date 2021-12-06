import { ChannelData } from "./ChannelData";
import { ChatMessage } from "./ChatMessage";

export type Activity = {
  id: string;
  type: "mention" | "request" | "reply";
  isRead?: boolean;
  date: Date;
  user: string;
  message?: ChatMessage;
  channel?: ChannelData;
  request?: string;
  status?: "sent" | "accepted" | "declined" | "blocked";
};

export type Activities = {
  [id: string]: Activity;
};
