import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DetailsButton from "./buttons/DetailsButton";
import UpdateButton from "./buttons/UpdateButton";
import { useNavigate } from "react-router-dom";

export default function PetList(props) {
  const { pets, removeFromDom } = props;
  const navigate = useNavigate();

  const routeToUpdateView = (id) => {
    navigate(`/pets/${id}/edit`);
  };
  const routeToDetailView = (id) => {
    navigate(`/pets/${id}`);
  };
  return (
    <div>
      <TableContainer sx={{ minWidth: 765 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Pet Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {pet.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {pet.type}
                </TableCell>
                <TableCell align="center">
                  <DetailsButton
                    successCallback={() => routeToDetailView(pet._id)}
                  />
                  |
                  <UpdateButton
                    successCallback={() => routeToUpdateView(pet._id)}
                  />
                  {/* <DeleteButton
                    successCallback={() => removeFromDom(pet._id)}
                  /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
