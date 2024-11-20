import './App.css';
import Customer from './component/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const customers =[
  {
    id:1,
    image:'https://picsum.photos/64',
    name:"고길동",
    birthday:"2000.01.01",
    gender:"남자",
    job:"둘리보호자"
  },
  {
    id:2,
    image:'https://picsum.photos/64',
    name:"둘리",
    birthday:"2000.01.01",
    gender:"남자",
    job:"호이호이"
  },
  {
    id:3,
    image:'https://picsum.photos/64',
    name:"또치",
    birthday:"2000.01.01",
    gender:"남자",
    job:"또치또치또또치"
  }
]


function App() {
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
