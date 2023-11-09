import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { LandingNavItemType } from "../const/types";
import useScreenWidth from "../utils/useGetScreenWidth";

type Props = {
  nav: LandingNavItemType;
};

export default function LandingNavItem({ nav }: Props) {
  const sw = useScreenWidth();
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

  if (sw < 768) {
    return (
      <Button
        variant={"ghost"}
        borderRadius={8}
        className="btn"
        color={"white"}
        onClick={scrollToSection}
        justifyContent={"flex-start"}
      >
        <HStack w={"100%"} justify={"space-between"}>
          <Text textAlign={"left"}>{nav.name}</Text>
        </HStack>
      </Button>
    );
  }

  return (
    <Button
      variant={"ghost"}
      borderRadius={"0"}
      className="btn"
      onClick={scrollToSection}
      h={"80px"}
    >
      {nav.name}
    </Button>
  );
}
