import React, { useState, useEffect } from 'react';


function Liste() {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);


    const getUserList = () => {
        setLoading(true);
        setCount(count + 1)
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                setUserList(res.data);
                setLoading(false);
            });
    }

    useEffect(() => {
        document.title = `Api istek sayısı ${count} `;
    });


    return (
        <>
            <div className="container App">

                <h4 className="d-inline-block mt-4">User List</h4>
                <button
                    className="btn btn-info float-right mx-5"
                    onClick={getUserList}
                    disabled={loading}>
                    {loading ? 'Loading...' : 'Get User List'}
                </button>
                <div className="clearfix"></div>

                <table className="table mt-3">
                    <thead className="thead-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avatar</th></tr>
                    </thead>
                    <tbody>
                        {userList.map(x => <tr>
                            <td>{x.first_name}</td>
                            <td>{x.last_name}</td>
                            <td>{x.email}</td>
                            <td><img src={x.avatar} width="50" height="50" alt="deneme" /></td>
                        </tr>)}
                        {userList.length === 0 && <tr>
                            <td className="text-center" colSpan="4">
                                <b>No data found to display.</b>
                            </td>
                        </tr>}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default Liste;