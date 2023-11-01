import Footer from "@/layouts/Footer";
import Nav from "@/layouts/Nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="relative">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
