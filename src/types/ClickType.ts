import { Link } from "@prisma/client";

export default interface ClickType {
  id: string;
  linkId: string;
  userId: string;
  timestamp: Date;
  device: string;
  link: Link;
}
