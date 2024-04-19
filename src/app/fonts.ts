import { Inter, Kanit } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["900", "800", "700", "600", "500", "400", "300"],
});

export { inter, kanit };
