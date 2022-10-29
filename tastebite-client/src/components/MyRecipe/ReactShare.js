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

const ReactShare = () => {
  return (
    <div className="flex gap-6">
      <div>
        <FacebookShareButton
          url="https://www.youtube.com/watch?v=BZy1f0Tl7OM&list=RDScDgJJi5Guc&index=2&ab_channel=Drake"
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
        </FacebookShareButton>
      </div>
      <div>
        <EmailShareButton
          url="https://www.youtube.com/watch?v=BZy1f0Tl7OM&list=RDScDgJJi5Guc&index=2&ab_channel=Drake"
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <EmailIcon logoFillColor="white" round={true}></EmailIcon>
        </EmailShareButton>
      </div>
      <div>
        <WhatsappShareButton
          url="https://www.youtube.com/watch?v=BZy1f0Tl7OM&list=RDScDgJJi5Guc&index=2&ab_channel=Drake"
          quote={"Hey there"}
          hashtag="#awesomerecipes"
        >
          <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
        </WhatsappShareButton>
      </div>
      <div>
        <LinkedinShareButton
          url="https://www.youtube.com/watch?v=BZy1f0Tl7OM&list=RDScDgJJi5Guc&index=2&ab_channel=Drake"
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