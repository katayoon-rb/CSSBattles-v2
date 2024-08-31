import { Link } from "react-router-dom";

function Card({title, link=title.split(' ').join('')}) {
  return (
    <div className="project">
      <div>
        <h2>{title}</h2>
        <Link to={link}>  
          <button type="button">View the Projects</button>
        </Link> 
      </div>
    </div>
  );
}

export default Card;
