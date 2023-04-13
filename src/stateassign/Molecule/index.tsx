import React from "react";
import {
  Paper,
  Stack,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  Box,
  Toolbar,
  AppBar,
  Divider,
} from "@mui/material";
import TypographyWithImage from "../Atoms/Typography";
import ButtonWithImage from "../Atoms/Button";
import Navbar from "../Atoms/Navbar";
import { useState } from "react";
import Tablecomponent from "../Atoms/Table";
import MySlider from "../Atoms/slider";
const columns = [
  { id: "name", label: "Name" },
  { id: "type", label: "Type" },
  { id: "payment", label: "Per Payment" },
  { id: "term", label: "Term Length" },
];

const data = [
  {
    id: 1,
    name: "Contact 1",
    type: "Monthly",
    payment: "$90025.99",
    term: "1 month",
  },
  {
    id: 2,
    name: "Contact 2",
    type: "Monthly",
    payment: "$192545.99",
    term: "3 months",
  },
  {
    id: 3,
    name: "Contact 3",
    type: "Monthly",
    payment: "$29145.99",
    term: "6 months",
  },
  {
    id: 3,
    name: "Contact 4",
    type: "Monthly",
    payment: "$29428.99",
    term: "6 months",
  },
  {
    id: 3,
    name: "Contact 5",
    type: "Monthly",
    payment: "$291458.99",
    term: "6 months",
  },
];

const CashKick: React.FC<{}> = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAllClick = (event: any) => {
    setSelectAll(event.target.checked);
  };
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const totalAmount = 880000;

  const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    setSelectedAmount(newValue as number);
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{ border: "2px solid black", bgcolor: "#201F24", height: "95vh" }}
      >
        <Stack
          direction="column"
          alignItems="flex-start"
          spacing={75}
          sx={{
            width: "17vw",
            padding: "20px",

            height: "80vh",
          }}
        >
          <Stack spacing={8}>
            <Stack
              direction="column"
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <TypographyWithImage
                variant="h4"
                img="/seedericon.png"
                sx={{ color: "white" }}
                imgPosition="left"
              >
                seeder
              </TypographyWithImage>
            </Stack>
            <Stack direction="column" spacing={3}>
              <ButtonWithImage
                image="home.png"
                imageAlt="My Image Alt"
                onClick={() => handleButtonClick("home")}
                active={activeButton === "home"}
                sx={{
                  backgroundColor: "#2D2D30",
                  color: "white",
                  border: "1px solid white",
                }}
              >
                Home
              </ButtonWithImage>
              <ButtonWithImage
                image="coin.png"
                imageAlt="My Image Alt"
                onClick={() => handleButtonClick("cash")}
                active={activeButton === "cash"}
                sx={{
                  backgroundColor: "#2D2D30",
                  color: "white",
                  border: "1px solid white",
                }}
              >
                Cash Acceleration
              </ButtonWithImage>
            </Stack>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <TypographyWithImage
              variant="h6"
              img="/flash.png"
              imgPosition="left"
              sx={{ color: "white" }}
            >
              watch how to
            </TypographyWithImage>
          </Stack>
        </Stack>

        <Stack
          display="flex"
          direction="column"
          spacing={1}
          sx={{
            marginLeft: "20px",
            borderLeft: "2px solid white",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          {activeButton === "home" && (
            <>
              <Stack
                display="flex"
                direction="column"
                marginLeft="50px"
                marginBottom="250px"
                spacing={0}
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Stack
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  marginTop="0px"
                >
                  <TypographyWithImage variant="h4" sx={{ color: "white" }}>
                    Good Morning 🖐️
                  </TypographyWithImage>
                </Stack>
                <Stack
                  direction="column"
                  display="flex"
                  alignItems="flex-start"
                >
                  <TypographyWithImage variant="h6" sx={{ color: "white" }}>
                    {new Date().toLocaleString("default", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TypographyWithImage>
                  <TypographyWithImage variant="body1" sx={{ color: "white" }}>
                    {new Date().toLocaleTimeString()}
                  </TypographyWithImage>
                </Stack>
                <Stack
                  direction="row"
                  spacing={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src="/homepage.png" alt="Home Image" height="250px" />
                  <img
                    src="/Business.png"
                    alt="business iamge"
                    height="400px"
                  />
                </Stack>
                <Box height="350px" width="1300px" border="1px solid white">
                  <Stack direction="column" display="flex">
                    <Stack>
                      <TypographyWithImage
                        variant="h6"
                        img="/info-circle.png"
                        imgPosition="right"
                        sx={{
                          color: "white",
                          justifyContent: "flex-start",
                          display: "flex",
                          margin: "10px",
                        }}
                      >
                        Your's payments
                      </TypographyWithImage>
                    </Stack>
                    <Stack>
                      <AppBar
                        position="static"
                        sx={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                      >
                        <Toolbar>
                          <TypographyWithImage
                            variant="h6"
                            sx={{ flexGrow: 1, color: "#ffffff" }}
                          >
                            Due Date
                          </TypographyWithImage>
                          <TypographyWithImage
                            variant="h6"
                            sx={{ flexGrow: 1, color: "#ffffff" }}
                          >
                            Status
                          </TypographyWithImage>
                          <TypographyWithImage
                            variant="h6"
                            sx={{ flexGrow: 1, color: "#ffffff" }}
                          >
                            Expected Amount
                          </TypographyWithImage>
                          <TypographyWithImage
                            variant="h6"
                            sx={{ flexGrow: 1, color: "#ffffff" }}
                          >
                            Outstanding
                          </TypographyWithImage>
                        </Toolbar>
                      </AppBar>
                    </Stack>
                    <Stack
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img src="/Cheque.png" alt="cheque image" width="300px" />
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </>
          )}
          {activeButton === "cash" && (
            <>
              <Stack
                display="flex"
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                margin="30px"
                spacing={4}
              >
                <Stack
                  spacing={1}
                  display="flex"
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  margin="30px"
                >
                  <TypographyWithImage
                    variant="h4"
                    sx={{ flexGrow: 1, color: "#ffffff" }}
                  >
                    New Cash Kick
                  </TypographyWithImage>
                  <TypographyWithImage
                    variant="h6"
                    sx={{ flexGrow: 1, color: "#A5A5A6" }}
                  >
                    Let's Setup a new cash kick to power your Saas
                  </TypographyWithImage>
                  <Stack>
                    <ButtonWithImage
                      image="/arrow-left.png"
                      imageAlt="My Image Alt"
                      onClick={() => handleButtonClick("home")}
                      sx={{
                        width: "150px",
                        backgroundColor: "#2D2D30",
                        color: "white",
                        border: "1px solid white",
                      }}
                    >
                      Back
                    </ButtonWithImage>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Stack spacing={2}>
                    <Box
                      height="600px"
                      border="1px solid white"
                      width="45vw"
                      borderRadius="10px"
                    >
                      <TypographyWithImage
                        variant="h6"
                        img="/info-circle.png"
                        imgPosition="right"
                        sx={{
                          color: "white",
                          justifyContent: "flex-start",
                          display: "flex",
                          margin: "30px",
                        }}
                      >
                        Your's Contacts
                      </TypographyWithImage>
                      <Stack sx={{ display: "flex" }}>
                        <Tablecomponent data={data} columns={columns} />
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack spacing={3}>
                    <Box
                      height="600px"
                      border="1px solid white"
                      width="25vw"
                      borderRadius="10px"
                    >
                      <Stack direction="column" spacing={3}>
                        <TypographyWithImage
                          variant="h6"
                          img="/info-circle.png"
                          imgPosition="right"
                          sx={{
                            color: "white",
                            justifyContent: "flex-start",
                            display: "flex",
                            margin: "30px",
                          }}
                        >
                          Summary
                        </TypographyWithImage>
                      </Stack>

                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        marginLeft="50px"
                        marginRight="50px"
                        spacing={2}
                      >
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          Term
                        </TypographyWithImage>
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          12 months
                        </TypographyWithImage>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        marginLeft="50px"
                        marginRight="50px"
                      >
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          Selected Contracts
                        </TypographyWithImage>
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          0
                        </TypographyWithImage>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        marginLeft="50px"
                        marginRight="50px"
                      >
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          Slide to autoselect
                        </TypographyWithImage>
                        <ButtonWithImage
                          sx={{
                            width: "100px",
                            backgroundColor: "#2D2D30",
                            color: "white",
                            border: "1px solid white",
                            height: "37px",
                          }}
                        >
                          Reset
                        </ButtonWithImage>
                      </Stack>
                      <Stack>
                      <MySlider selectedAmount={selectedAmount} totalAmount={totalAmount} />
                      </Stack>
                     
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        marginLeft="50px"
                        marginRight="50px"
                        spacing={2}
                      >
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          Pack back amount
                        </TypographyWithImage>
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          $0.00
                        </TypographyWithImage>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        marginLeft="50px"
                        marginRight="50px"
                        spacing={2}
                      >
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          Rate %
                        </TypographyWithImage>
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          ($0.00)$00.00
                        </TypographyWithImage>
                      </Stack>
                      <hr />
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        marginLeft="50px"
                        marginRight="50px"
                        spacing={2}
                      >
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          Total Payable
                        </TypographyWithImage>
                        <TypographyWithImage
                          variant="h6"
                          sx={{ color: "#ffffff" }}
                        >
                          $00.00
                        </TypographyWithImage>
                      </Stack>
                      <Stack>
                        <ButtonWithImage
                          variant="contained"
                          sx={{
                            display: "flex",
                            width: "350px",
                            backgroundColor: "#3f51b5",
                            borderRadius: "10px",
                            color: "black",
                            border: "1px solid white",
                            height: "100px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "50px",
                            marginTop: "50px",
                          }}
                        >
                          Review Your Credit
                        </ButtonWithImage>
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default CashKick;
export {};
