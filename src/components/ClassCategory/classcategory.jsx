import React from 'react';
import CategoryComponent from "./CategoryComponent";
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';



const ClassCategory = (props) => {
      return (
    <>
        <Navbar  />
        <CategoryComponent/>
        <Footer/>
    </>
  )
}

export default ClassCategory;
