import React from "react";
import PropTypes from 'prop-types';
import { Slider, Tooltip } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function valuetext(value) {
    return `${value}°C`;
}

const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: "#FFD700"
            },
            rail: {
                color: "black"
            }
        }
    }
})

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    )
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

export const ProfileDataRow = (props) => (
    <div className="grid_3columns">
        <span className="bold_text">{props.label} </span>
        <span>{props.value}</span>
        
        <ThemeProvider theme={muiTheme}>
            <Slider style={{ width: "14px !important" }} 
                value={props.bid}
                getAriaValueText={valuetext}
                aria-labelledby="disabled-slider"
                valueLabelDisplay="auto"
                ValueLabelComponent={ValueLabelComponent}
                step={1}
                min={0}
                max={100}
                track={false}
            />
        </ThemeProvider>
    </div>
)