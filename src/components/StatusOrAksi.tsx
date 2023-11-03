import { Badge, Button } from "@chakra-ui/react";
import React from "react";

export default function StatusOrAksi(props: any) {
  const data = props.data;

  if (data.type === "status") {
    return (
      <Badge colorScheme={data.color} className="badge">
        {data.name}
      </Badge>
    );
  }

  return (
    <Button colorScheme={data.color} className="lg-clicky">
      {data.name}
    </Button>
  );
}
