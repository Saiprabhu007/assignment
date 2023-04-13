// import React, { useState } from 'react';
// import { Slider } from '@mui/material';

// function MySlider() {
//   const [value, setValue] = useState<number>(0);
// const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
//     setValue(newValue as number);
//   };
  
//   return (
//     <Slider
//     style={{ width: '80%' , marginLeft:'60px'}}
//       value={value}
//       onChange={handleChange}
//       min={0}
//       max={100}
//       step={10}
//     />
//   );
// }
// export default MySlider;





import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import TypographyWithImage from "../Typography";

interface MySliderProps {
  selectedAmount: number;
  totalAmount: number;
}

function MySlider(props: MySliderProps) {
  const { selectedAmount, totalAmount } = props;
  const [value, setValue] = useState<number>(selectedAmount);
  const [remainingAmount, setRemainingAmount] = useState<number>(totalAmount - selectedAmount);

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    setValue(newValue as number);
  };
  
  useEffect(() => {
    setRemainingAmount(totalAmount - value);
  }, [value, totalAmount]);

  return (
    <>
      <Slider
        style={{ width: '80%' , marginLeft:'60px'}}
        value={value}
        onChange={handleChange}
        min={0}
        max={totalAmount}
        step={1000}
      />
      <TypographyWithImage variant="h6" sx={{ color: "#ffffff" }}>
        ${value.toFixed(2)} selected of ${totalAmount.toFixed(2)}
      </TypographyWithImage>
      <TypographyWithImage variant="h6" sx={{ color: "#ffffff" }}>
        ${remainingAmount.toFixed(2)} remaining
      </TypographyWithImage>
    </>
  );
}

export default MySlider;
