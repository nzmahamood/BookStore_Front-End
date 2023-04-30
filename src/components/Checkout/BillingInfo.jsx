import React from "react";
import {
  Grid,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
  InputLabel,
  TextField,
} from "@mui/material";
import FormInput from "./FormInput";

const BillingInfo = ({ handleChange, billing, error }) => {
  return (
    <>
      <Grid item xs={12} md={10}>
        <Typography
          variant="h3"
          className="font-inter font-medium tracking-wider text-[19px] text-slate-900"
        >
          Billing Address
        </Typography>
      </Grid>
      <Grid item xs={6} md={5}>
        <TextField
          fullWidth
          value={billing.first_name}
          error={Boolean(error.first_name)}
          helperText={error.first_name}
          onChange={handleChange}
          name="first_name"
          label="First Name"
        />
      </Grid>
      <Grid item xs={6} md={5}>
        <TextField
          fullWidth
          value={billing.last_name}
          error={Boolean(error.last_name)}
          helperText={error.last_name}
          onChange={handleChange}
          name="last_name"
          label="Last Name"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          value={billing.phone}
          error={Boolean(error.phone)}
          helperText={error.phone}
          onChange={handleChange}
          name="phone"
          label="Phone Number"
          className="w-full"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            fullWidth
            name="country"
            value={billing.country}
            error={Boolean(error.country)}
            helperText={error.country}
            label="Country"
            onChange={handleChange}
            defaultValue={""}
          >
            <MenuItem value={"United Kingdom"}>United Kingdom (UK)</MenuItem>
          </Select>
          <FormHelperText>{error.country && error.country}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={5}>
        <TextField
          fullWidth
          value={billing.city}
          error={Boolean(error.city)}
          helperText={error.city}
          onChange={handleChange}
          name="city"
          label="City"
        />
      </Grid>
      <Grid item xs={6} md={5}>
        <TextField
          fullWidth
          value={billing.post_code}
          error={Boolean(error.post_code)}
          helperText={error.post_code}
          onChange={handleChange}
          name="post_code"
          label="Post Code"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          value={billing.street_address}
          error={Boolean(error.street_address)}
          helperText={error.street_address}
          onChange={handleChange}
          name="street_address"
          placeholder="House No: and Street"
          label="Street Address"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          multiline
          value={billing.notes}
          error={Boolean(error.notes)}
          helperText={error.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Special Notes"
          name="notes"
          label="Special Notes (Optional)"
        />
      </Grid>
    </>
  );
};

export default BillingInfo;
