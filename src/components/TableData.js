import React from "react";

function TableData(props) {
    const data = props.employees
    console.log(data)
    return (
        data.map((employee) => {
            return(
            <tbody key={employee.first}>
                <tr>
                    <td>
                        {employee.first}
                    </td>
                    <td>
                        {employee.last}
                    </td>
                    <td>
                        {employee.phone}
                    </td>
                    <td>
                        {employee.email}
                    </td>
                </tr>
            </tbody>
        )})
    )
}

export default TableData;
