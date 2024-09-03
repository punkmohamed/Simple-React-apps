import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    return () => {
    };
  }, [navigate]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="mx-4">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">React.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
