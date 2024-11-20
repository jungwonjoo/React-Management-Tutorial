import './App.css';
import Customer from './component/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState, useCallback } from 'react';


function App() {
  const [customers, setCustomers] = useState([]); 

  const getCustomerList = useCallback(async () => {
    try {
      const res = await fetch('/api/customers'); // 상대 경로 사용
      const data = await res.json();
      console.log('응답 데이터 확인',data); // 응답 데이터 확인
      setCustomers(data); // 상태 업데이트
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  },[])

  useEffect(()=>{
    getCustomerList()
  },[getCustomerList])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        {customers.map((v)=>{
          return(
            <Customer
              key={v.id}
              id={v.id}
              image={v.image}
              name={v.name}
              birthday={v.birthday}
              gender={v.gender}
              job={v.job}
            />
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>    
  );
}

export default App;
