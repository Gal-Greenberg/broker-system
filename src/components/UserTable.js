import React from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { DateDisplay } from "./DateDisplay"

export const UserTable = (props) => (
    <Paper className="table">
        <TableContainer style={{ maxHeight: "-webkit-fill-available" }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Source</TableCell>
                        <TableCell align="left">Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user) => (
                        <TableRow id={user._id} onClick={() => props.onSelected(document.getElementById(user._id), user)}>
                            <TableCell align="left">{user._id}</TableCell>
                            <TableCell align="left" scope="row">{user.source}</TableCell>
                            <TableCell align="left">
                                <DateDisplay date={user.createdAt} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
)