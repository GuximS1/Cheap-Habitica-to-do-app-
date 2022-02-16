import React from "react";
import classes from "./Footer.module.scss";
import Link from "next/link";
import photo from "../../public/logo.png";
import Image from "next/image";
import {
  InstagramFilled,
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
} from "@ant-design/icons";
type Props = {};

function Footer({}: Props) {
  return (
    <div className={classes.footer}>
      <div className={classes.topContent}>
        <p className={classes.support}>Supported in web</p>
        <h4 className={classes.text}>
          This project is an open source project made for testing limits. It is
          a to do app that helps you organize your stuff. It has no ads and it
          charges a total 0$ to use.
        </h4>
        <div className={classes.icons}>
          <Link href="https://www.instagram.com/">
            <a>
              <InstagramFilled style={{ fontSize: "2.3rem" }} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/">
            <a>
              <FacebookFilled style={{ fontSize: "2.3rem" }} />
            </a>
          </Link>
          <Link href="https://www.twitter.com/">
            <a>
              <TwitterSquareFilled style={{ fontSize: "2.3rem" }} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/">
            <a>
              <LinkedinFilled style={{ fontSize: "2.3rem" }} />
            </a>
          </Link>
          <p style={{ textAlign: "center" }}>Social</p>
        </div>
      </div>
      <hr style={{ color: "black", width: "100%" }} />
      <div className={classes.downContent}>
        <p style={{ color: "#79767e", fontWeight: "bold" }}>
          © 2022 To-do-app. All rights reserved.
        </p>
        <Image src={photo} alt="img" height={20} width={50} />
        <p>
          Privacy Policy &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Terms and
          Conditions
        </p>
      </div>
    </div>
  );
}

export default Footer;
