import { motion } from "framer-motion";
import Card from "./Components/Card";
import Button from "../../components/Button";

// Images
import AboutImg from "../../assets/Images/contactUs-gqZJLZC5.png";

// import { ReactComponent as FrontEndImg } from "../../assets/Images/frontend.svg";
// import { ReactComponent as BackEndImg } from "../../assets/Images/backend.svg";
// import { ReactComponent as ResponsiveImg } from "../../assets/Images/responsive.svg";
// import { ReactComponent as EducationImg } from "../../assets/Images/education.svg";



const cardDetails = [
  {
    // Icon: FrontEndImg,
    title: "Frontend Development",
    desc: "Creating responsive UI with modern frameworks",
  },
  {
    // Icon: BackEndImg,
    title: "Backend Development",
    desc: "Building robust APIs and database structures",
  },
  {
    // Icon: ResponsiveImg,
    title: "Responsive Design",
    desc: "Ensuring applications work on all devices",
  },
  {
    // Icon: EducationImg,
    title: "Continuous Learning",
    desc: "Always exploring new technologies",
  },
];

const About = () => {
  return (
    <div id="about" className="w-full h-full flex flex-col items-center justify-center mt-25 scroll-mt-32">
      <div className="bg-blue-700 w-[15rem] relative flex items-center justify-center ">
        <span className="h-0.5">
          <hr />
        </span>
        <h1 className="absolute text-xl bg-[#F0F6FF] p-4 text-[#1C45E3]">
          About Me
        </h1>{" "}
      </div>

      <div className="mt-7 flex flex-col items-center justify-center  gap-5 ">
        <h1 className="text-5xl font-bold">Who I Am</h1>
        <p className="text-xl text-zinc-500 max-w-[44rem] flex justify-center text-center leading-relaxed">
          A passionate web developer focused on creating beautiful, functional,
          and user-centered digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.35)] shadow-blue-300 max-w-[28rem] flex items-center justify-center mx-auto duration-300 hover:-translate-y-2 overflow-hidden§"
        >
          <img
            src={AboutImg}
            alt={AboutImg}
            className="object-contain h-full w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col p-5 mx-auto gap-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="font-semibold text-2xl"
          >
            Full-Stack Web Developer with a passion for building innovative
            applications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="leading-relaxed"
          >
            Hi there! I'm a dedicated Full-Stack Web Developer with experience
            in building responsive and efficient web applications. I specialize
            in both frontend and backend technologies, with a strong focus on
            creating seamless user experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="leading-relaxed"
          >
            My journey in web development started 1 years ago, and I've been
            passionate about coding ever since. I enjoy solving complex problems
            and turning ideas into reality through elegant interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="grid  md:grid-cols-2 gap-5 mt-5"
          >
            {cardDetails.map((item, index) => (
              <Card
                key={index}
                // Icon={item.Icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="h-[2.6rem] "
          >
            <Button
              className="text-white h-full text-xl bg-gra"
              variant="effects"
            ><a href="#contact">Contact Me</a></Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
