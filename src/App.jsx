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
      <div className="min-h-[calc(100vh-500px)] md:px-20 lg:px-48 my-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </JobCircularContext.Provider>
  );
}

export default App;
