import React from "react";
import SkillItem from "./SkillItem";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-28 max-w-[800px] w-[90%] mb-28 sm:mb-60"
    >
      <SectionHeading>My Skills</SectionHeading>
      <SkillItem />
    </section>
  );
};

export default Skills;
