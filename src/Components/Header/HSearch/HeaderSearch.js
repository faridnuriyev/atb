import { Container} from "react-bootstrap";
import "./headerSearch.css";

function HeaderSearch({test, onChangeTest}) {

  return (
    <>
          <div className={test ? "headerSearch" : "headerSearch minusMargin"}>
            <Container>
              <div className="headerSearchForm">
                <form className="headerInput">
                  <input
                    className="searchInput"
                    placeholder="Sayt üzrə axtarış"
                    type={"text"}
                  />
                  <button className="searchIcon"></button>
                </form>
                <button onClick={() => onChangeTest(false)} type="button" className="closeIcon btn-close" ></button>
              </div>
            </Container>
          </div>
    </>
  );
}

export default HeaderSearch;


