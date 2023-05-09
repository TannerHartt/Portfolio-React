import { SiAdobexd } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";

const data = [
    { 
        id: 1, icon: <SiAdobexd />, 
        title: "Web Design", 
        text: "My designs are modern and intuitive. I use industry standard rules to make sure your users have a good experience using your product." 
    },
    { 
        id: 2, icon: <RiReactjsLine />, 
        title: "Drontend Development", 
        text: "Your product will look good and will be easy to use on any device. I use the latest technologies to make sure your product is fast and responsive." 
    },
    { 
        id: 3, icon: <FaServer />, 
        title: "Backend Development", 
        text: "The security of your business.product is taken seriously right from the start. I use the latest technologies to make sure your product is secure and scalable." 
    },
    { 
        id: 4, icon: <AiFillAppstore />, 
        title: "App Development", 
        text: "Unlike other developers in the market, I will build an app that runs on both IOS and Andriod devices without any extra cost." 
    }
];

export default data;