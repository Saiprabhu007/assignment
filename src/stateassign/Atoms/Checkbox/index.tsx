import { Checkbox } from '@mui/material';
import { SxProps } from '@mui/material';
interface checkProps {
    sx:SxProps;
    size:'small'|'medium';
    checked?:boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
 
const checkboxcomponent: React.FC<checkProps> = ({sx,size,checked,onChange}) => (
       <Checkbox sx={sx} size={size} checked={checked} onChange={onChange}/> 
)
   
export default checkboxcomponent;














