import React from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const ReactShareFavourites = ({favouriteVideo}) => {


  return (
    <div className="flex sm:scale-50  md:scale-75 lg:scale-100  gap-6">
      <div>
        <FacebookShareButton
          url={favouriteVideo}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
        </FacebookShareButton>
      </div>
      <div>
        <EmailShareButton
          url={favouriteVideo}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <EmailIcon logoFillColor="white" round={true}></EmailIcon>
        </EmailShareButton>
      </div>
      <div>
        <WhatsappShareButton
          url={favouriteVideo}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
        </WhatsappShareButton>
      </div>
      <div>
        <LinkedinShareButton
          url={favouriteVideo}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default ReactShareFavourites;