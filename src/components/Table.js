import React, { Component }from "react";
import "../styles/Table.css"

function nameSort(sorted, data) {
  if (sorted === true) {
  }
  else{
    return data.sort()
  }
}

class Table extends React.Component {
	state = {
		sorted: false
	};

	sortChange = () => {
		const { sorted } = this.state;
		this.setState({
			sorted: true
		});
  };

  render() {
    const { data } = this.props;
    const { sorted } = this.state;

    return (
      <div>
      <table className="table">
        <thead>
          <tr>
            <th>
            First Name
              <button onClick={this.sortChange}>
							</button>
            </th>
            <th>
            Last Name
            </th>
            <th>
            Phone Number
            </th>
            <th>
            Email Address
            </th>
          </tr>
        </thead>
        <tbody>
          {nameSort(this.state, [...data]).map(d => (
            <tr key={d.id}>
                <td>
                    {d.first}
                </td>
                <td>
                    {d.last}
                </td>
                <td>
                    {d.phone}
                </td>
                <td>
                    {d.email}
                </td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
    );
  }
}

export default Table;
