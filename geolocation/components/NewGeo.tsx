import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import isIpOrDomain from "../helpers/isIpOrDomain";
import { Container, FormHelperText, SxProps, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { geoService } from "../services";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
} as SxProps;

function ipOrDomain(
  this: yup.StringSchema,
  message = "Invalid IP Address or URL"
) {
  return this.test("ipOrDomain", message, isIpOrDomain);
}

yup.addMethod(yup.string, "ipOrDomain", ipOrDomain);

const validationSchema = yup.object({
  ipOrDomain: yup
    .string()
    // @ts-ignore:next-line
    .ipOrDomain()
    .required("IP Address or URL is required"),
});

export default function NewGeo({ geoAdded }): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [error, setError] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      ipOrDomain: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setError(null);
      return geoService
        .create(values.ipOrDomain)
        .then(() => {
          geoAdded();
          handleClose();
        })
        .catch((error) => {
          setError(error);
        });
    },
  });
  return (
    <div style={{ alignSelf: "center", marginLeft: "auto" }}>
      <Button onClick={handleOpen} variant="contained">
        Create New
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Container component="main" maxWidth="xs" sx={style}>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Create a new Geolocation
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="ipOrDomain"
                label="IP Address or URL"
                name="ipOrDomain"
                value={formik.values.ipOrDomain}
                onChange={formik.handleChange}
                error={
                  formik.touched.ipOrDomain && Boolean(formik.errors.ipOrDomain)
                }
                helperText={
                  formik.touched.ipOrDomain && formik.errors.ipOrDomain
                }
              />
              <Button
                disabled={formik.isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
              {error && <FormHelperText error>{error}</FormHelperText>}
            </Box>
          </Box>
        </Container>
      </Modal>
    </div>
  );
}
