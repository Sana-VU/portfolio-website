import { Outlet } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

export default function Root() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Muhammad Shahid Imtiaz · Portfolio</title>
        <meta
          name="description"
          content="GovTech programmer building ERP/e-Office systems and modern web apps."
        />
        <link rel="canonical" href="/" />
        <meta
          property="og:title"
          content="Muhammad Shahid Imtiaz · Portfolio"
        />
        <meta
          property="og:description"
          content="GovTech programmer building ERP/e-Office systems and modern web apps."
        />
        <meta property="og:image" content="/og.png" />
      </Helmet>
      <Navbar />
      <main id="main" className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
