import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              \(^o^)/
            </h1> 
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        <Link href="https://www.biblegateway.com/passage/?search=Matthew+10%3A34-39&version=AMP">
          <a className="underline underline-offset-1" target="_blank" rel="noreferrer">Whoever finds his life [in this world] will [eventually] lose it [through death], and whoever loses his life [in this world] for My sake will find it [that is, life with Me for all eternity]. ~ Matthew 10:39</a>
        </Link>
      </h1> 
    </>
  );
};

export default Footer;
