import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialLink(props) {
  return (
    <span className="p-2">
      <SocialIcon
        bgColor="#eeeeee"
        style={{ height: 30, width: 30 }}
        target="_blank"
        {...props}
      />
    </span>
  );
}

function SocialLinks() {
  return (
    <div>
      <SocialLink url="mailto:eliel.dabush@gmail.com" />
      <SocialLink url="https://github.com/dabush-eliel" />
      <SocialLink url="https://www.linkedin.com/in/eliel-dabush/" />
    </div>
  );
}

export default SocialLinks;
