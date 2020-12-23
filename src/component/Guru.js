import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// Generate Order Data
function createData(id, username, password, nisn, name, alamat, kelas) {
  return { id, username, password, nisn, name, alamat, kelas };
}

const rows = [
  createData(1, '16 Mar, 2019', 112233, 'Tupelo, MS', 'VISA ⠀•••• 3719', 'jaj' ,312.44),
  createData(2, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574','djkdsks', 866.99),
  createData(3, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(4, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(5, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));
export default function Orders() {
  const classes = useStyles();
  return (
    
    <React.Fragment>
      <Title>Data Siswa</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Nisn</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Alamat</TableCell>
            <TableCell>kelas</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>{row.nisn}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.alamat}</TableCell>
              <TableCell>{row.kelas}</TableCell>
              <TableCell>
                <Button>
                <a href="/EditSiswa"><EditIcon></EditIcon></a>
                <a href="/Customers"><DeleteIcon></DeleteIcon></a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/DataAbsensi" onClick={preventDefault}>
          See more data Siswa
        </Link>
      </div>
    </React.Fragment>
  );
}