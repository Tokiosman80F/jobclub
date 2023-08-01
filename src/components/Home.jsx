import FeaturedJob from "./firstpage/FeaturedJob";
import JobCatagory from "./firstpage/JobCatagory";
import LandingPage from "./firstpage/LandingPage";

const Home = () => {
  return (
    <div >
      <LandingPage></LandingPage>
      <JobCatagory></JobCatagory>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
