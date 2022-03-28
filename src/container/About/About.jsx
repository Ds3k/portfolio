import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { client } from "../../client";

const About = () => {
  // const [abouts, setAbouts] = useState([]);
  const newAbouts = [
    {
      title: "FrontEnd Development Skills",
      description: {
        a: 'Responsive Designs (Mobile First)',
        b: 'Accessibility Development',
        c: 'Modern Designs and Animation',
        d: 'Quality Factor Development (Speed, Ease of Use)',
      },
    },
    {
      title: "BackEnd Developer Skills",
      description: {
        a: 'Operational Practicality Development',
        b: 'Quality Assurance Procedures',
        c: 'Security and Data Protection Practices',
        d: 'Database Management',
      },
    },
  ];

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

  return (
    <>
      <ReactTypingEffect
        text={[
          "Simple Things Makes Up Great Accomplishment",
          "Great Development Projects Are The Modern Art Form",
          "Three Things : Look Good, Feel Good, Do Good",
        ]}
        cursorRenderer={(cursor) => <h2 className="head-text"></h2>}
        displayTextRenderer={(text) => <h2 className="head-text">{text}</h2>}
      />

      <div className="app__profiles">
        {/* {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.text}</p> 

            <h2 className="bold-tex">{}</h2>
          </motion.div>
        ))} */}

        {Object.keys(newAbouts).map((key) => {
          const about = newAbouts[key];
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + key}
            >
              <h2 className="bold-text">{about.title}</h2>
              {Object.keys(about.description).map((index) => {
                const desc = about.description[index];
                return (
                  <p className="p-text" key={index}>
                    {`* ${desc}`}
                  </p>
                );
              }
              )}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
