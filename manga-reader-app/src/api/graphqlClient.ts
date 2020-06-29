import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export const cache = new InMemoryCache();
console.log(process.env.API_SERVICES_URI)
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        credentials: "include",
        uri: "http://localhost:4999/graphql"
    }),
});

export default client;
