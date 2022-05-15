function Slide(props) {
  const imglink = props.imglink;
  const percentofScreen = props.percentofScreen;
  return (
    <div className="slide" style={{ width: percentofScreen + "%" }}>
      <div className="slideArt">
        <img src={imglink} alt="" />
      </div>
    </div>
  );
}

export default Slide;
