import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-primary-color text-black p-20 w-full ">
        <div className="w-4/5 mx-auto grid items-center justify-items-center grid-cols-3 md:grid-cols-3 md:justify-between">
          <div className="ml">
            <h2>Contact Us</h2>
            <h4>Kenyatta Avenue, 780-31, Nrb</h4>
            <h4>+254733 101 101</h4>
          </div>

          <div className="text-center">
            <h1 className="font-bold text-xl">TASTEBITE</h1>
            <h4 className="text-xs">
              "a unique recipe sharing and discovery platform"
            </h4>
          </div>

          <div className="mr">
            <h1>Follow Us</h1>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          
        </div>
        <p className="text-sm text-center mx-auto mb-2 pt-10">
            2022 Tastebite | All rights reserved.
          </p>
      </div>
    </>
  );
}

export default Footer;
