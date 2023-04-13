import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead } from '@mui/material';
import MyCheckbox from '../Checkbox';
import { useState } from 'react';

interface TableProps {
  data: { id: number; [key: string]: any }[];
  columns: { id: string; label: string }[];
}

function Tablecomponent({ data, columns }: TableProps) {
  const [checkAll, setCheckAll] = useState(false);
  const [checkedRows, setCheckedRows] = useState<boolean[]>(Array(data.length).fill(false));

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckAll(event.target.checked);
    setCheckedRows(Array(data.length).fill(event.target.checked));
  };

  const handleRowCheck = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedRows = [...checkedRows];
    newCheckedRows[index] = event.target.checked;
    setCheckedRows(newCheckedRows);
    setCheckAll(newCheckedRows.every(Boolean));
  };

  return (
    <TableContainer component={Paper} sx={{ paddingTop: '10px' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#201F24' }}>
            <TableCell sx={{ backgroundColor: '#201F24', color: '#ffffff' }}>
              <MyCheckbox
                sx={{ height: '50px', width: '30px', color: '#727080', borderRadius: '5px' }}
                checked={checkAll}
                onChange={handleCheckAll}
                size='medium'
              />
            </TableCell>
            {columns.map((column) => (
              <TableCell key={column.id} sx={{ backgroundColor: '#201F24', color: '#ffffff' }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id} sx={{ backgroundColor: '#201F24' }}>
              <TableCell sx={{ backgroundColor: '#201F24', color: '#ffffff' }}>
                <MyCheckbox
                  sx={{ height: '50px', width: '30px', color: '#727080', borderRadius: '5px' }}
                  checked={checkedRows[index]}
                  onChange={handleRowCheck(index)}
                  size='medium'
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ backgroundColor: '#201F24', color: '#ffffff' }}>
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tablecomponent;
