import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

export const Add = ({ emp, setEmployees, setIsAdding }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dept, setDept] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !age || !dept || !bloodgroup || !address || !contact) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const newEmployee = {
      id,
      name,
      age,
      dept,
      bloodgroup,
      address,
      contact,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500, //
    });
  };

  return (
    <div className="small-container">
      <Flex
        onSubmit={handleAdd}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          {/* <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </Stack>
          </FormControl> */}
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              placeholder="age here"
              _placeholder={{ color: "gray.500" }}
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>
          <FormControl id="dept" isRequired>
            <FormLabel>Dept</FormLabel>
            <Input
              placeholder="department"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
          </FormControl>
          <FormControl id="blood" isRequired>
            <FormLabel>Blood Grpup</FormLabel>
            <Input
              placeholder="blood grp"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={bloodgroup}
              onChange={(e) => setBloodgroup(e.target.value)}
            />
          </FormControl>
          <FormControl id="contact" isRequired>
            <FormLabel>Contact</FormLabel>
            <Input
              placeholder="contact"
              _placeholder={{ color: "gray.500" }}
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="address"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>

          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              value="Cancel"
              onClick={() => setIsEditing(false)}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

