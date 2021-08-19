import React from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface IMain {
  children: React.ReactNode;
}

export const Main: React.FC<IMain> = ({ children }) => {
  const router = useRouter();
  //FIXME: もっといい方法あれば書き直す
  const isWide = router.route.includes("users");

  return (
    <Box
      as="main"
      w={isWide ? { base: "100vw", xl: "90%" } : { base: "100vw", xl: "75%" }}
      pt={12}
      pr={isWide ? { base: "0px", xl: "0px" } : { base: "0px", xl: "48px" }}
    >
      {children}
    </Box>
  );
};
