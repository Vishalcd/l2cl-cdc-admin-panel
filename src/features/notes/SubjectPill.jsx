import { useState } from "react";

function SubjectPill({ subject }) {
  const [currentSubject, setCurrentSubject] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  function handleClick(sub) {
    setSelectedSubjects((subject) => [...subject, sub]);
    setCurrentSubject((selected) => !selected);
  }

  return (
    <li
      onClick={handleClick}
      className={`${currentSubject ? "bg-green-300" : "bg-zinc-300"} ${
        currentSubject ? "text-green-700" : "text-zinc-700"
      } ${
        currentSubject ? "hover:bg-green-400" : "hover:bg-zinc-400"
      } cursor-pointer transition-all focus:outline-1 font-semibold text-sm leading-none py-1.5 px-3 rounded-full  text-zinc-600 selection:bg-transparent`}>
      {subject}
    </li>
  );
}

export default SubjectPill;
