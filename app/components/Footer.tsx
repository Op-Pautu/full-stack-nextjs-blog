import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import { IconType } from "react-icons";

const links = [FaGithub, FaInstagram, FaLinkedin, FaTwitter];

const IconContainer = (props: { icon: IconType }) => {
  return <props.icon size={25} className="cursor-pointer" />;
};

const Footer = () => {
  return (
    <section className="w-full h-full bg-gray-100">
      <hr className="p-3" />
      <div className="flex flex-col p-20 xs:gap-8 md:gap-6">
        <div className="flex items-center md:flex-row xs:flex-col md:justify-between xs:justify-start">
          <div>
            <Logo />
          </div>
          <div className="flex gap-6 p-2">
            {links.map((item) => (
              <IconContainer icon={item} key={item.toString()} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-center md:text-xl xs:text-md">
            <span>{new Date().getFullYear()}</span>
            <span> © Copyright</span>
            <span className="font-bold"> Blogify</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
