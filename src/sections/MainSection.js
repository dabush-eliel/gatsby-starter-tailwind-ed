import React from "react";
import ProfileImage from "../components/ProfileImage";

function MainSection() {
  return <section className="flex flex-col items-center">
      <ProfileImage/>
      <div className="py-5">
          <div className="font-bold text-lg text-teal-400">Hey, my name is Eliel Dabush</div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi consectetur laudantium ut quis id, dicta aspernatur rerum ipsum quia alias pariatur ex ab provident. Earum sunt sint nesciunt sed.
          </div>
      </div>
  </section>;
}

export default MainSection;
