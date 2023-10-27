import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { LandingNavItemType } from "../const/types";

type Props = {
  nav: LandingNavItemType;
};

export default function LandingNavItem({ nav }: Props) {
  //   const [navActive, setNavActive] = useState(false);
  const [navRef, setNavRef] = useState<Element | null>(null);
  const [sectionRef, setSectionRef] = useState<Element | null>(null);

  const scrollToSection = () => {
    if (sectionRef && navRef) {
      const navHeight = navRef.clientHeight;
      const faqTop = sectionRef.getBoundingClientRect().top;
      window.scrollTo({
        top: faqTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setNavRef(document.querySelector("#nav"));
    setSectionRef(document.querySelector(`#${nav.name}`));
  }, [nav.name]);

  //   useEffect(() => {
  //     const options = {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.1, // seberapa besar elemen yang terlihat akan trigger intersection
  //     };

  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         console.log(entry);
  //         //@ts-ignore
  //         if (entry.isIntersecting) {
  //           setNavActive(true);
  //         } else {
  //           setNavActive(false);
  //         }
  //       });
  //     }, options);

  //     if (sectionRef) {
  //       observer.observe(sectionRef);
  //     }

  //     return () => {
  //       if (sectionRef) {
  //         observer.unobserve(sectionRef);
  //       }
  //     };
  //   }, [sectionRef]);

  return (
    <Button
      variant={"ghost"}
      borderRadius={"full"}
      className="btn"
      color={"p.500"}
      onClick={scrollToSection}
      //   color={navActive ? "p.500" : ""}
      //   borderBottom={navActive ? "2px solid var(--p500)" : ""}
    >
      {nav.name}
    </Button>
  );
}
