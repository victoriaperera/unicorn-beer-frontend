import "./styles.css";

function TeamMemberCard({ admin }) {
  return (
    <>
      <div className="col mb-5">
        <img src="/src/assets/icons/user-0.png" alt="User Avatar" className="img-team-member" />
        <h4 className="mt-4">{admin.name}</h4>
        <p>Full Stack Developer Jr.</p>
        <div>
          <a href="#">
            <img
              src="src/assets/icons/linkedin_logo.png"
              alt="linkedin icon"
              typeof="png/image"
              className="team-member-icon me-2"
            />
          </a>
          <a href="#">
            <img
              src="src/assets/icons/github_black_logo.png"
              alt="github icon"
              typeof="png/image"
              className="team-member-icon"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default TeamMemberCard;
