import styles from "../App.module.scss";
function Slide(props) {
  const imglink = props.imglink;
  const percentofScreen = props.percentofScreen;
  return (
    <div className={styles.slide} style={{ width: percentofScreen + "%" }}>
      <div className={styles.slideArt}>
        <img src={imglink} alt="" />
      </div>
    </div>
  );
}

export default Slide;
