import React from "react"
import Container from "./components/Container";
import Header from "./components/Header";
import Table from "./components/Table";


import './App.css';

const employees = [
  {
      'id': '0',
      'first': 'Ela',
      'last': 'Olivas',
      'phone': '123-123-1234',
      'email': 'olivas@olivas.com'
  },
  {
      'id': '1',
      'first': 'David',
      'last': 'Opal',
      'phone': '999-999-9999',
      'email': 'opal@opal.com'
  },
  {
      'id': '2',
      'first': 'Kim',
      'last': 'Possible',
      'phone': '777-777-7777',
      'email': 'kim@kim.com'
  }
];


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
         <Table data={employees} />
      </Container>
    </div>
  );
}
export default App;
