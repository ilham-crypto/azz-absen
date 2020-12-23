import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate DataAbsensi Data
function createData(id, name, absensi) {
  return { id, name, absensi };
}

const rows = [
  createData(1, '16 Mar, 2019', 123467,),
  createData(2, '16 Mar, 2019', 'Paul McCartney'),
  createData(3, '16 Mar, 2019', 'Tom Scholz'),
  createData(4, '16 Mar, 2019', 'Michael Jackson'),
  createData(5, '15 Mar, 2019', 'Bruce Springsteen'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function DataAbsensi() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>ABSEN</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Absensi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.absensi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Absen
        </Link>
      </div>
    </React.Fragment>
  );
}