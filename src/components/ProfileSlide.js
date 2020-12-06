import React from "react";
import { Slider } from "@material-ui/core";

function valuetext(value) {
    return `${value}°C`;
}

export const ProfileSlide = (props) => (
    <Slider defaultValue={props.defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="disabled-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={100}
        disabled
    />
)