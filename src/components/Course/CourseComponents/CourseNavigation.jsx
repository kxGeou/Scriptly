import React, { useState } from "react";
import CompanyLogo from "../../assets/logoo.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { lessons } from "../lessonConfig";

function Navigation() {
  const [visible, setVisible] = useState(false);

  const onVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex relative justify-between items-center">
      <img src={CompanyLogo} className="h-[2rem]" alt="Company Logo" />

      <div className="relative">
        <IoMenuSharp
          fontSize="3rem"
          fill="var(--primary)"
          onClick={onVisible}
          className="cursor-pointer"
        />
      </div>

      <div
        className={`fixed inset-0 bg-primary bg-opacity-95 transition-all duration-300 ${
          visible ? "opacity-100 translate-x-0 z-50" : "opacity-0 translate-x-[100%] pointer-events-none"
        } flex flex-col items-end p-[1.5rem]`}
      >
        <IoMdClose
          fontSize="3rem"
          fill="var(--secondary)"
          className="cursor-pointer mb-7"
          onClick={onVisible}
        />

        <p className="mb-4 text-[20px] text-white opacity-70">Spis Lekcji:</p>

        <ul className="w-full max-h-[80vh] overflow-y-auto flex flex-col gap-6 pr-4">
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className="flex flex-col gap-2 bg-primaryDarker p-5 rounded-[12px] hover:bg-primaryLighter transition-colors"
            >
              <Link
                to={`/lesson/${lesson.id}`}
                className="text-[20px] font-semibold text-white"
              >
                {lesson.title}
              </Link>
              <p className="opacity-[75%]">{lesson.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
