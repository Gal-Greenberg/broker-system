import React from "react";
import { Slider } from "@material-ui/core";

function valuetext(value) {
    return `${value}°C`;
}

export const ProfileDataRow = (props) => (
    <div className="grid_3columns">
        <span className="bold_text">{props.label} </span>
        <span>{props.value}</span>
        <Slider defaultValue={props.bid}
            getAriaValueText={valuetext}
            aria-labelledby="disabled-slider"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
            disabled
            track={false}
        />
    </div>
)