import React from "react";
import { Grid } from "@material-ui/core";
import CustomizedHook from "../textFieldAutocomplete";

export default function ClickComponent({ arrayValue, name, assignValue }) {
  const [showTextfield, setShowTextfield] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        {showTextfield ? (
          <CustomizedHook
            optionsArray={arrayValue}
            value={value}
            assignValue={assignValue}
            onChangeValue={(val) => {
              this.setState({ value: val });
              if (assignValue !== null && assignValue !== undefined) {
                assignValue(val);
              }
            }}
          />
        ) : (
          <div
            style={{ height: 35 }}
            onClick={() => {
              this.setState({
                showTextfield: true,
                value: "",
              });
            }}
          >
            {value === "" ? name ? name : "click to enter" : <div>{value}</div>}
          </div>
        )}
      </Grid>
    </Grid>
  );
}
