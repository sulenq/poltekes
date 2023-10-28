import React, { useState } from "react";
import FullPageLogo from "../components/FullPageLogo";

type Props = { children: JSX.Element };

export default function AuthJwt({ children }: Props) {
  const [page, setPage] = useState(<FullPageLogo />);

  //TODO chek is JWT exist
  // setPage(children);

  return children;
}
