import "./styles.css";
import React from "react";

function TeamMemberCard({ admin }) {
  return (
    <>
      <div className="col">
        <img src="" alt="" className="img-team-member" />
        <h4>{admin.name}</h4>
        <p>Full Stack Developer Jr.</p>
      </div>
    </>
  );
}

export default TeamMemberCard;
