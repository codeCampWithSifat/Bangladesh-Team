import React from 'react';

const Team = (props) => {
    // console.log(props)
    const team = props.team
    let totalSalary = team.reduce((total , team) => total + team.salary, 0)
    return (
        <div>
            <h2>Team Member</h2>
            <p>Number Of Player : {team.length}</p>
            <p>Total Salary {totalSalary}</p>
        </div>
    );
};

export default Team;