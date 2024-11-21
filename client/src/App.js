import './App.css';
import Customer from './component/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState, useCallback } from 'react';


function App() {
  const [customers, setCustomers] = useState([]); 
  const [completed, setCompleted] = useState(0)

  const getCustomerList = useCallback(async () => {
    try {
      const res = await fetch('/api/customers'); 
      const data = await res.json();
      setCustomers(data); 
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  },[])

  useEffect(()=>{
    getCustomerList()
  },[getCustomerList])

  const progress = () => {
    setCompleted((prev)=>(prev >=100 ? 0 : prev +1))
    return completed
  }

  useEffect(()=>{
    const timer = setInterval(progress, 100); //100ms마다 업데이트
    return ()=>clearInterval(timer); //컴포넌트 언마운트시 함수지움
  },[])

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
         
        {customers.length > 0 ? (
          customers.map((v) => (
            <Customer
              key={v.id}
              id={v.id}
              image={v.image}
              name={v.name}
              birthday={v.birthday}
              gender={v.gender}
              job={v.job}
            />
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} align="center">
              {/* <CircularProgress variant="determinate" value={completed} /> */}
              <CircularProgress/>
            </TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>    
  );
}

export default App;
