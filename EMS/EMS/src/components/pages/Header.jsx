import React from "react";
import { Button } from "@chakra-ui/react";
import './header.css'

export const Header = ({ setIsAdding }) => {
  return (
    <div className="heading">
      <header>
        <h1 className="main-heading">Employee Management System -- EMS</h1>
        <div className="btn">
          <Button colorScheme='teal' variant='solid' onClick={() => setIsAdding(true)} className="round-button">
            Add Employee
          </Button>
        </div>
      </header>
    </div>
  );
};
