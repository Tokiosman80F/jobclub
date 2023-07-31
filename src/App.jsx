import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext } from "react";

export const JobCircularContext = createContext([]);

function App() {
  const jobCircularData = useLoaderData();

  // console.log(jobCircularData);

  return (
    <JobCircularContext.Provider value={jobCircularData}>
      <Header></Header>
      <div className="min-h-[calc(100vh)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </JobCircularContext.Provider>
  );
}

export default App;
