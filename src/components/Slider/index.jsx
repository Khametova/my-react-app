import { Component } from "react";
import styles from "./Slider.module.css";
import defaultSpaceImage from "../image/defaultSpaceImage.jpg";

/*function Slider({ slides }) {
  const currentIndex = 0;
  return (
    <div>
      <img
        src={slides[currentIndex].src || defaultSpaceImage}
        alt={slides[currentIndex].title}
      />
    </div>
  );
}
*/

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }
  handleNext = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  handleBack = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) {
      this.setState({ currentIndex: 1 });
    } else {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className={styles.slideContainer}>
        <img
          className={styles.slideImage}
          src={slides[currentIndex].src ?? defaultSpaceImage}
          alt={slides[currentIndex].title}
        />
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>

        <button onClick={this.handleNext}>{"NEXT"}</button>
        <button onClick={this.handleBack}>{"BACK"}</button>
      </div>
    );
  }
}

export default Slider;
