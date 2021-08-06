import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/noto-sans-jp"; // Defaults to weight 400.
// import { ApolloProvider } from "@apollo/client";
// import { apolloClient } from "../graphql/client";

function MyApp({ Component, pageProps }) {
  return (
    // <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    // </ApolloProvider>
  );
}

export default MyApp;
