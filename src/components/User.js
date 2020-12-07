import React from "react";
import { Card } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

import { ProfileData } from "./ProfileData"

export const User = (props) => (
    <Card style={{ margin: "1rem 1rem 1rem 1.2rem", overflow: "auto" }}>
        <div className="grid_2columns">
            <div className="grid_1columns">
                <span>{props.user._id}</span>
                <br />
                <PersonIcon />
                {/* <img className="user_image"
                    src={require("../images/user.png")}>
                </img> */}
            </div>

            <div className="grid_1columns" style={{ textAlign: "right" }}>
                <span>{props.user.source}</span>
                <span>{props.user.comment}</span>
                <span>{props.user.createdAt}</span>
            </div>
        </div>
        <ProfileData profile={props.user.profile} />
    </Card>
)