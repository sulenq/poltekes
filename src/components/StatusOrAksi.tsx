import { Badge, Button, Text } from "@chakra-ui/react";
import React from "react";
import BayarTagihanModal from "./BayarTagihanModal";

export default function StatusOrAksi(props: any) {
  const data = props.data;
  const noreg = props.noreg;

  if (data.type === "status") {
    return (
      <Badge colorScheme={data.color} className="badge">
        {data.name}
      </Badge>
    );
  } else {
    if (data.name === "Bayar Tagihan") {
      return <BayarTagihanModal noreg={noreg} />;
    } else if (data.name === "Unggah Berkas") {
      return (
        <Button colorScheme={data.color} className="lg-clicky">
          Unggah Berkas
        </Button>
      );
    } else {
      return <Text>-</Text>;
    }
  }
}
