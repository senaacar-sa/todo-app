function Header(props) {
  return (
    <>
      <h1>✨ {props.title} ✨</h1>
      <p className="subtitle">{props.subtitle}</p>
    </>
  );
}

export default Header;
