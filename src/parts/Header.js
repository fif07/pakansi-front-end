import React from 'react'
import Fade from 'react-reveal/Fade'

import Button from "../elements/Button";
import BrandIcon from "../parts/IconText";

export default function Header(props) {
const getNavLinkClass = (path) => {
  return props.location.pathname === path ? " active" : "";
};

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Pakansi.
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

return (
  <Fade>
    <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Beranda
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/kategori")}`}>
                  <Button className="nav-link" type="link" href="/kategori">
                    Kategori
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/kisah")}`}>
                  <Button className="nav-link" type="link" href="/kisah">
                    Kisah
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agen")}`}>
                  <Button className="nav-link" type="link" href="/agen">
                    Agen
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  )
}
