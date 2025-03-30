import Preloader from "./components/global/preloader";
import Header from "./components/global/header";
import Hero from "./components/page-sections/hero";
import Feature1 from "./components/page-sections/Feature1";
import OurCore from "./components/page-sections/ourCore";
import WhoWeAre from "./components/page-sections/whoWeAre";
import OurVission from "./components/page-sections/ourVission";
import AgencyMarqueeSlider from "./components/global/marqueSlider";
import ApproachSection from "./components/global/approch";
import Testimonials from "./components/global/testimonilas";
import CourseSection from "./components/global/courses";
import TeamSection from "./components/page-sections/teamSection";
import MoreCourse from "./components/global/moreCourse";
import ActionAreaTwo from "./components/global/actionArea";
import Footer from "./components/global/footer";
function App() {
  return (
    <div id="page" className="site">
      <Preloader />
      <Header />
      <Hero />
      <Feature1 />
      <OurCore />
      <WhoWeAre />
      <OurVission />
      <AgencyMarqueeSlider />
      <ApproachSection />
      <Testimonials />
      <CourseSection />
      <TeamSection /> 
      <MoreCourse />
      <ActionAreaTwo />
      <Footer />
    </div>
  );
}

export default App;
