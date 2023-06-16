import "./styles.css";
import React from "react";

function TeamMemberCard({ admin }) {
  return (
    <>
      <div className="col">
        <img src="/src/assets/icons/user-0.png" alt="User Avatar" className="img-team-member" />
        <h4 className="mt-4">{admin.name}</h4>
        <p>Full Stack Developer Jr.</p>
      </div>
    </>
  );
}

export default TeamMemberCard;
