import React from "react";

export default function TopBar() {
  return (
    <div className="container-fluid    H-top-bar">
      <div className="  T-custom-Items-l   ">
        <div>
          welcome<span className="point">.</span>
        </div>
      </div>

      <div className="  T-custom-Items-r    ">
        <div className="T-custom-Items-txt  H-c " tabIndex="1">
          <i class="far fa-file-word H-c-i"></i>
          <div className="H-c-t">
            {" "}
            <a className="mail-link" href="https://github.com/stanley-E-5025">
              Work
            </a>
          </div>
        </div>
        <div className="T-custom-Items-txt  H-c" tabIndex="1">
          <i class="far fa-address-card H-c-i"></i>
          <div className="H-c-t">
            <a className="mail-link" href="mailto:stanleygordon45@gmail.com">
              contact
            </a>
          </div>
        </div>
        <div className="T-custom-Items-txt  H-c" tabIndex="1">
          <i class="far fa-file H-c-i"></i>
          <div className="H-c-t">
            <a
              className="mail-link"
              href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf"
            >
              resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
