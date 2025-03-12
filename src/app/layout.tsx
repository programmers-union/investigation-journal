import { Playfair_Display } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/global.css'
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
import Header from "@/components/header";


export default function RootLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={`${playfairDisplay.className}`}>
          <div>
            
          </div>
          <Header/>
          {children}
          <footer/>
        </body>
      </html>
    );
  }