import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Props {
  name: string;
  job: string;
  comment: string;
  rating: number;
  image: string;
}

export default function Testimonial(props: Props) {
  const generateStars = () => {
    const stars = [];
    // Calculate the whole and fractional parts of the rating
    const wholePart = Math.floor(props.rating);
    const fractionalPart = props.rating - wholePart;

    for (let i = 0; i < 5; i++) {
      if (i < wholePart) {
        // Display full star if the index is less than the whole part of the rating
        stars.push(
          <li key={i}>
            <FaStar style={{ color: "orange" }} />
          </li>
        );
      } else if (i === wholePart && fractionalPart !== 0) {
        // Display half star if the index equals the whole part and there's a fractional part
        stars.push(
          <li key={i}>
            <FaStarHalfAlt style={{ color: "orange" }} />
          </li>
        );
      } else {
        // Otherwise, display an empty star
        stars.push(
          <li key={i}>
            <FaRegStar style={{ color: "orange" }} />
          </li>
        );
      }
    }
    return stars;
  };

  return (
    <div className="mb-12 md:mb-0">
      <div className="mb-6 flex justify-center">
        <img
          src={props.image}
          className="w-32 rounded-full shadow-lg dark:shadow-black/20"
        />
      </div>
      <h5 className="mb-2 text-lg font-bold">{props.name}</h5>
      <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
        {props.job}
      </h6>
      <p className="mb-4">
        {props.comment}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          className="inline-block w-6"
        >
          <path
            fill="currentColor"
            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
          />
        </svg>
      </p>
      <ul className="mb-0 flex space-x-1 justify-center">{generateStars()}</ul>
    </div>
  );
}
