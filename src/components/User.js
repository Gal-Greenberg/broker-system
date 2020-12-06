import React from "react";
import { Card } from "@material-ui/core";
import { ProfileData } from "./ProfileData"

export const User = (props) => (
    <Card className="card">
        <div className="grid_2columns">
            <div className="grid_rows">
                <span>{props.user.id}</span>
                <br />
                <img className="user_image"
                    src={require("../images/user.png")}>
                </img>
            </div>

            <div className="grid_rows">
                <span>{props.user.source}</span>
                <span>{props.user.comment}</span>
                <span>{props.user.createdAt}</span>
            </div>
        </div>
        <ProfileData profile={props.user.profile} />
    </Card>
)