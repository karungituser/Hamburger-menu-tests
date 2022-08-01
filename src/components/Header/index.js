import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            testid="hamburgerIconButton"
            className="ham-btn"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-btn"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <ul className="nav-links-list">
              <li>
                <Link to="/" className="nav-link-item" onClick={() => close()}>
                  <AiFillHome size="32" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link-item"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill size="32" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
