import React from "react";
import { Input } from "@chakra-ui/react";

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Input
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value || undefined)}
      placeholder="Search..."
      mb={4}
    />
  );
}

export default GlobalFilter;
