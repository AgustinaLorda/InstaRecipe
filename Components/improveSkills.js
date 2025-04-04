import { Link } from "react-router-dom";

export default function ImproveSkills() {
  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Explore Special Diets",
    "Know nutrition facts",
    "Get cooking tips",
    "Share your recipes"
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>{item}</p>
        ))}
        <Link to="/signup" className="btn signup-btn">Sign Up Now</Link>
      </div>
    </div>
  );
}
