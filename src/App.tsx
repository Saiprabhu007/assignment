import React from 'react';
// import MuiTypography from './Components/MuiTypography';
// import MuiButton from './Components/MuiButton';
// import Form from './Components/MuiTextField';
// import MuiSelect from './Components/MuiSelect';
// import MuiRadioButton from './Components/MuiRadioButton';
// import MuiRating from './Components/MuiRating';
// import MuiCheckBox from './Components/MuiCheckBox';
// import MuiSwitch from './Components/MuiSwitch';
// import MuiCard from './Components/MuiCard';
// import MuiAccordion from './Components/MuiAccordion';
// import MuiNavbar from './Components/MuiNavbar';
// import MuiTheming from './Components/MuiTheming';
// import CashAcceleration from './Components/Organism';
// import LoginForm from './components2/Organism';
// import Counter from './components2/Hooks/usestate_demo';
// import Greeting from './components2/Hooks/useeffect_demo';
// import MyComponent from './Components/MuiSlider';
// import GridExample from './Components/GridExample';
// import Navbar from './Components/MuiNavbar2';
// import TypographyWithIcon from './Components/Atoms/Typography';
// import { Edit } from '@mui/icons-material';
// import TypographyWithImage from './stateassign/Atoms/Typography';
// import ButtonWithImage from './stateassign/Atoms/Button';
import { useState } from 'react';
// import MyTable , {TableData} from './Components/MuiTable';
import CashKick from './stateassign/Molecule';
// import TypographyComponent from './components2/Atoms/Typography';




const options = [
  { value: "option 1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const options_checkbox = [
  { value: 'Html', label: ' Html' },
  { value: 'css', label: 'css' },
  { value: 'javascript', label: 'javascript' },
  { value: 'React', label: 'React' },
];

function App() {
  // const [data, setData] = useState<TableData[]>([
  //   { name: 'John Doe', age: 30, country: 'USA' },
  //   { name: 'Jane Doe', age: 25, country: 'Canada' },
  //   { name: 'Bob Smith', age: 40, country: 'UK' },
  // ]);
  return (
    <div className='App' style={{margin:'40px' , textAlign:'center', justifyContent:'center'}}>
      {/* <MuiTypography/> */}
      {/* <MuiTheming/> */}
      {/* <TypographyWithImage variant="h4" img="/seedericon.png">
       seeder
    </TypographyWithImage> */}
      <br/><br/>
      {/* <Counter initialValue={8}/> */}
      <br/>
      <br/>
      {/* <ButtonWithImage image='home.png' imageAlt="My Image Alt" onClick={() => console.log("clicked")}>
        Home
      </ButtonWithImage> */}
      {/* <h1>My Table</h1> */}
      {/* <MyTable data={data} /> */}
      <br/>
      <br/>
      
      {/* <ButtonWithImage image='coin.png' imageAlt="My Image Alt" onClick={() => console.log("clicked")}>
        Cash Acceleration
      </ButtonWithImage> */}
        {/* <TypographyComponent variant="h1">Hello World</TypographyComponent> */}
      {/* <Greeting name='saiprabhu'/> */}
      {/* <MuiTheming/><br/><br/> */}
      {/* <MuiButton/> */}
      {/* <h5>please give the ratings</h5> */}
      {/* <MuiRating/> */}
      {/* <MuiCard/> */}
      {/* <br/><br/> */}
      {/* <MuiAccordion/> */}
      <br/><br/>
      {/* <MyComponent/> */}
      {/* <TypographyWithIcon variant='h4' icon={<Edit />}>hello</TypographyWithIcon> */}
      {/* <MuiNavbar/> */}
      {/* <br/><br/> */}
      {/* <Form/> */}
      {/* <GridExample/> */}
      {/* <LoginForm/> */}
      <br/><br/>
      <CashKick/>
      {/* <TypographyWithImage variant="h6" img="/flash.png">
       watch how to 
    </TypographyWithImage> */}
      {/* <MuiSelect/> */}
      {/* <Navbar/> */}
      {/* <CashAcceleration/> */}
    </div>
  );
}

export default App;
export {}



