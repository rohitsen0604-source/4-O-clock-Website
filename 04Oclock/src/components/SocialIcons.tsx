import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { CONTACT_CONFIG } from "../data/contact";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={CONTACT_CONFIG.socials[0].url} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={CONTACT_CONFIG.socials[1].url} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href={CONTACT_CONFIG.socials[2].url} target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href={CONTACT_CONFIG.socials[3].url} target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
