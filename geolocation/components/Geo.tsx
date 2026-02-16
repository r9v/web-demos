import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useInfiniteQuery } from "react-query";
import { geoService } from "../services";
import { styled } from "@mui/material/styles";
import {
  CircularProgress,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import NewGeo from "./NewGeo";
import useInfiniteScroll from "react-infinite-scroll-hook";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Geo = () => {
  const {
    data,
    isError,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(
    ["geo"],
    async ({ pageParam = 1 }) => await geoService.get(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.hasNextPage) return lastPage.nextPage;
      },
    }
  );

  const [sentryRef] = useInfiniteScroll({
    loading: isFetching,
    hasNextPage: hasNextPage ?? false,
    onLoadMore: fetchNextPage,
    disabled: isError,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
      }}
    >
      <NewGeo geoAdded={refetch} />
      <TableContainer component={Paper} sx={{ p: 2, m: 2 }}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>IP Adddress</StyledTableCell>
              <StyledTableCell align="right">Continent</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Latitude</StyledTableCell>
              <StyledTableCell align="right">Longitude</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.pages?.map((page) =>
              page.docs?.map((geo) => (
                <StyledTableRow key={geo._id}>
                  <StyledTableCell component="th" scope="row">
                    {geo.ip}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {geo.continent_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {geo.country_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{geo.city}</StyledTableCell>
                  <StyledTableCell align="right">
                    {geo.latitude}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {geo.longitude}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {(isFetching || hasNextPage) && (
        <CircularProgress ref={sentryRef} color="secondary" />
      )}
    </Container>
  );
};

export default Geo;
