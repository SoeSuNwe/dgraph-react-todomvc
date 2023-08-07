import './App.css';

import { gql, useQuery } from '@apollo/client'

const query = gql`
query MyQuery {
  queryCustomer {
    age
    gender
    username
  }
}
`
function App() {
  const { loading, data, error } = useQuery(query)
  console.log(data)
  return (
    <div className="App">
      <button>getCustomer</button>
    </div>
  );
}

export default App;
