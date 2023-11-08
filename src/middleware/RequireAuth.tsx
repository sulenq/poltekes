// import React, { useState } from "react";
// import FullPageLogo from "../components/FullPageLogo";

type Props = { children: JSX.Element };

export default function RequireAuth({ children }: Props) {
  // const [page, setPage] = useState(<FullPageLogo />);

  //TODO chek is Auth Token exist
  // setPage(children);

  return children;
}
