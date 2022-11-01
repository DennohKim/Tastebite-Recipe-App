import React from "react";
import { useLocation } from "react-router-dom";
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

const ReactShare = ({videoLink}) => {

  const { recipeUrl } = useLocation();
  const url = recipeUrl
  return (
    <div className="flex sm:scale-50  md:scale-75 lg:scale-100  gap-6">
      <div>
        <FacebookShareButton
          url={videoLink}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
        </FacebookShareButton>
      </div>
      <div>
        <EmailShareButton
          url={videoLink}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <EmailIcon logoFillColor="white" round={true}></EmailIcon>
        </EmailShareButton>
      </div>
      <div>
        <WhatsappShareButton
          url={videoLink}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
        </WhatsappShareButton>
      </div>
      <div>
        <LinkedinShareButton
          url={videoLink}
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default ReactShare;