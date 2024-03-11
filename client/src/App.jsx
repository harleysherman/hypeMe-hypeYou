import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

import {setContext} from "@apollo/client/link/context"

import Header from './components/Header';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { Outlet } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
function App() {
 

  return (
    <ApolloProvider client={client}>
      <>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Outlet />
          </div>
        </div>
      </>
    </ApolloProvider>
  );
}

export default App
