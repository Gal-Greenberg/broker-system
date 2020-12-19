import React from "react";
import { ProfileDataRow } from "./ProfileDataRow";

export const ProfileData = (props) => {
    var i = 0

    return (
        <div>
            <ProfileDataRow label={"gender"} value={props.profile.gender.value} bid={props.profile.gender.bid} />
            <ProfileDataRow label={"age"} value={props.profile.age.value} bid={props.profile.age.bid} />
            <ProfileDataRow label={"marital"} value={props.profile.marital.value} bid={props.profile.marital.bid} />
            <ProfileDataRow label={"children"} value={props.profile.children.value} bid={props.profile.children.bid} />
            <ProfileDataRow label={"education"} value={props.profile.education.value} bid={props.profile.education.bid} />
            {props.profile.interests.map(data => {
                i++
                return i === 1 ? 
                    <ProfileDataRow key={i} label={"interests"} value={data.value} bid={data.bid} />
                :
                    <ProfileDataRow key={i} label={""} value={data.value} bid={data.bid} />
            })}
        </div>
    )
}