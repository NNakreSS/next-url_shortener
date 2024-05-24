import { Click } from "@prisma/client";

interface LinkType {
  id: string;
  shortUrl: string;
  originalUrl: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  clickCount: number;
  Click: Click[];
}

export default LinkType;
