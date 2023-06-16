import "./styles.css";

function TeamMemberCard({ admin }) {
  return (
    <>
      <div className="col">
        <img src="/src/assets/icons/user-0.png" alt="User Avatar" className="img-team-member" />
        <h4 className="mt-4">{admin.name}</h4>
        <p>Full Stack Developer Jr.</p>
        <div>
            <a href="#"><img src="src/assets/icons/icons8-linkedin-48.png" alt="linkedin icon" typeof="png/image"/></a>
            <a href="#"><img src="src/assets/icons/icons8-github-48.png" alt="github icon" typeof="png/image"/></a>
        </div>
      </div>
    </>
  );
}

export default TeamMemberCard;
