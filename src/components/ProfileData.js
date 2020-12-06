import React from "react";
import { ProfileSlide } from "./ProfileSlide";

export const ProfileData = (props) => {

    const interests = () => {
        var res
        // const profileData = document.getElementById("profile")
        // console.log(profileData)
    
        props.profile.interests.map(data => (
            res += <span>{data.value}</span>,
            res += <ProfileSlide defaultValue={data.bid}/>
        ))
        return res
    }

    return (
        <div id="profile" className="grid_3columns">
            <span className="bold_text" >age </span>
            <span>{props.profile.age.value}</span>
            <ProfileSlide defaultValue={props.profile.age.bid}/>

            <span className="bold_text">children </span>
            <span>{props.profile.children.value}</span>
            <ProfileSlide defaultValue={props.profile.children.bid}/>

            <span className="bold_text">education </span>
            <span>{props.profile.education.value}</span>
            <ProfileSlide defaultValue={props.profile.education.bid}/>

            <span className="bold_text">marital </span>
            <span>{props.profile.marital.value}</span>
            <ProfileSlide defaultValue={props.profile.marital.bid}/>

            <span className="bold_text">gender </span>
            <span>{props.profile.gender.value}</span>
            <ProfileSlide defaultValue={props.profile.gender.bid}/>

            <span className="bold_text">interests </span>
            {/* {interests()} */}
            {/* <div className="grid_2columns"> */}
                {props.profile.interests.map(data => (
                    <div>
                        <span>{data.value}</span> 
                        <ProfileSlide defaultValue={data.bid}/>
                    </div>
                ))}
            {/* </div> */}
        </div>
    )
}