import React, { useState } from "react";

    import { UserTable } from './UserTable';
import { User } from './User';

export const UsersSubset = (props) => {
    const [currentUser, setCurrentUser] = useState();
    const [currentUserTableRow, setCurrentUserTableRow]  = useState();

    const onSelected = (userTableRow, user) => {
        if (currentUserTableRow !== undefined && currentUserTableRow !== null) {
            currentUserTableRow.style = `background: ;`
        }

        if (userTableRow !== undefined && userTableRow !== null) {
            userTableRow.style = `background: #FFD700;`
        }
        setCurrentUserTableRow(userTableRow)

        setCurrentUser(user)
    }

    return (
        <div style={{ width: "100%", height: "100%" }}>
            {/*ToDo: add id, subset name, comment*/}
            <div className="grid_2columns" style={{ gridTemplateColumns: "45% 55%", height: "100vh" }}>
                <UserTable users={props.users} onSelected={onSelected} />
                <User user={currentUser} onSelected={onSelected} />
            </div>
        </div>
    )
}