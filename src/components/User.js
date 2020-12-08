import React from "react";
import { Card } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

import { ProfileData } from "./ProfileData"
import { DateDisplay } from "./DateDisplay"

export const User = (props) => (
    <Card style={{ margin: "1rem 1rem 1rem 1.2rem", overflow: "auto" }}>
        <div className="grid_2columns">
            <div className="grid_1columns">
                <PersonIcon style={{ color: "#FFD700", fontSize: 40 }} />
                <span>{props.user._id}</span>               
            </div>

            <div className="grid_1columns" style={{ textAlign: "right" }}>
                <span>{props.user.source}</span>
                <span>{props.user.comment}</span>
                <DateDisplay date={props.user.createdAt} />
            </div>
        </div>
        <ProfileData profile={props.user.profile} />
    </Card>
)