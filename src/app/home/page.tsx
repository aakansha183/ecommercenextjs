import Testimonials from "@/components/ComponentHome/testimonials";
import TopSelling from "../../components/ComponentHome/topselling";
import Footer from "@/CommonComponents/Footer";
import TopHeader from "@/CommonComponents/TopHeader";
import Header from "@/CommonComponents/Header";
import NewArrivals from "@/components/ComponentHome/newarrivals";
import DressStyleComponent from "@/components/ComponentHome/browsedressstyle";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <NewArrivals />
      <TopSelling />
      <DressStyleComponent />
      <Testimonials />
      <Footer />
    </div>
  );
}
