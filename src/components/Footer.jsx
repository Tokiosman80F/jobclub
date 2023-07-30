import { FaFacebook, FaTwitter, FaTwitch } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black  text-gray-300 px-40 py-20">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 justify-between items-start  gap-5">
        <div>
          <h1 className="text-2xl font-bold">JobClub</h1>
          <p className="className= my-5">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-5">
            <FaFacebook></FaFacebook>
            <FaTwitch></FaTwitch>
            <FaTwitter></FaTwitter>
          </div>
        </div>
        <div>
          <h1 className="text-xl">Company</h1>
          <ul className="my-5">
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl">Product</h1>
          <ul className="my-5">
            <li>Prototype</li>
            <li>Plan & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl">Support</h1>
          <ul className="my-5">
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Patner</li>
            <li>Developer</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl">Contact</h1>
          <ul className="my-5">
            <li>524 Broadway , NYC </li>
            <li>+1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
