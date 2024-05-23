
interface LinkType {
  id: string;
  shortUrl: string;
  originalUrl: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  clickCount: number;
}

export default LinkType;
