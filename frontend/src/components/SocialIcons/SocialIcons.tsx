import "./SocialIcons.scss";

const SocialIcons = () => {
  return (
    <ul className="social-icons d-flex gap-2">
      <li>
        <a href="https://facebook.com" target="_blank">
          <img src="/assets/images/Facebook.svg" alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="_blank">
          <img src="/assets/images/Insta.svg" alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://youtube.com" target="_blank">
          <img src="/assets/images/youtube.svg" alt="facebook" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
