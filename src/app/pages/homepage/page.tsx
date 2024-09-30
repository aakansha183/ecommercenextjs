import DressStyleComponent from "./components/browsedressstyle";
import NewArrivals from "./components/newarrivals";
import Testimonials from "./components/testimonials";
import TopSelling from "./components/topselling";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Product Store</h1>
     <NewArrivals/>
      <TopSelling/>
      <DressStyleComponent/>
      <Testimonials/>
    </div>
  );
}
