import React from "react";

const Footer = () => {
  return (
    <footer class="uk-flex-inline">
      <div class="footer-text ">
          <h6 class=" brown uk-text-small uk-text-lighter">The Rabbit says:</h6>
          <h5 class="brown uk-text-large">"There are <span id="count2"></span> recalls in this rabbit hole!"</h5>
          <h3 class="brown uk-text-large uk-text-bold">What do you want to do now?</h3>
      </div>
      <img src="./photos/bunny.jpg"alt="picture of rabbit" class="rabbit-2"/>
    </footer>
  );
};

export default Footer;
