import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import "./list.css";

const List = ({ emp, handleEdit, handleDelete }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="grey" className="tablelist">
        <TableCaption>Employees Complete Data</TableCaption>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>First Name</Th>
            <Th>Age</Th>
            <Th>Department</Th>
            <Th>bloodgroup</Th>
            <Th>Address</Th>
            <Th>Contact </Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {emp.length > 0 ? (
            emp.map((employee, i) => (
              <tr key={employee.id}>
                <td style={{ paddingLeft: "30px" }}>{i + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.department}</td>
                <td>{employee.bloodgroup} </td>
                <td className="add">{employee.address} </td>
                <td>{employee.contact} </td>
                <td className="text-right">
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button red-btn"
                  >
                    Delete
                  </Button>
                </td>
                {/* <td className="text-left">
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </Button>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Emp</td>
            </tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default List;
