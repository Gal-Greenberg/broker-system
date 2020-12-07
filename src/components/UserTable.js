import React from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

export const UserTable = (props) => (
    <Paper className="table">
        <TableContainer>
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
                        <TableRow key={user._id}>
                            <TableCell align="left">{user._id}</TableCell>
                            <TableCell align="left" scope="row">{user.source}</TableCell>
                            <TableCell align="left">{user.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
)