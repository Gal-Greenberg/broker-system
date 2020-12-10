import { Tooltip } from "@material-ui/core";
import React from "react";

export const DateDisplay = (props) => {
    const date = new Date(props.date)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    const dateOnly = `${da}-${mo}-${ye}`
    // console.log(dateOnly)  // for print
    // console.log(date)      // for hover

    return (
        <Tooltip title={date.toString()}>
            <span>{dateOnly}</span>
        </Tooltip>
    )
}