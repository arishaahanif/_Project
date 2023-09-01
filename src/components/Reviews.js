import { Container } from "react-bootstrap";
import { Rocket, RighTick, Star,Rating } from "./SVG";

const Reviews = () => {
  return (
    <Container>
      <div className="hero_section">
        <div className="r_container">
          <div className="r_item">
            <div className="s_container">
              <div className="s_item">{Rocket}</div>
              <div className="s_item">
                <h6 className="reviews mb-0">4.8 {Rating}</h6>
                <p className=" site mb-0">Sitejabber</p>
              </div>
            </div>
          </div>
          <div className="dotted"></div>
          <div className="r_item">
            <div className="s_container">
              <div className="s_item">{RighTick}</div>
              <div className="s_item">
                <h6 className="reviews mb-0">4.9 {Rating}</h6>
                <p className=" site mb-0">ResellerRatings</p>
              </div>
            </div>
          </div>
          <div className="dotted"></div>
         

          <div className="r_item">
            <div className="s_container">
              <div className="s_item">{Star}</div>
              <div className="s_item">
              <h6 className="reviews mb-0">4.8 {Rating}</h6>
                <p className=" site mb-0">Reviews.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Reviews;
