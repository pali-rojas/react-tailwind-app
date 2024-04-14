//import './App.css';
import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Footer from "./components/Footer";


export default function App() {
  
  return (
    <div className="App place-items-center">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <Header />
        <Input /> 
      </div>   
      <Footer />
    </div>
  );
}
