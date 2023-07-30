const LandingPage = () => {
  return (
    <div className="  flex flex-col-reverse md:flex-row justify-center items-center gap-10">
      <div className="md:w-1/2 ">
        <h1 className="text-4xl  lg:text-8xl font-semibold">
          One Step Closer To Your
          <p className="text-purple-500"> Dream Job</p>
        </h1>
        <p className="text-gray-500 my-10 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="lg:w-1/2 ">
        <img src="/public/images/pic-1.jpg" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
