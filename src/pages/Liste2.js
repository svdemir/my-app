import React from 'react';
import { gql, useQuery } from '@apollo/client';



const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      rocket {
        rocket_name
      },
      ships {
        name        
        image
      }

    }
  }
`;


function Liste2() {

    const { data, loading, error } = useQuery(FILMS_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return (
        <>
            <div className="container App">

                <h4 className="d-inline-block mt-4">SpaceX Launches</h4>
                <div className="clearfix"></div>

                <table className="table mt-3">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Mission Name</th>
                            <th>Rocket Name</th>
                            <th>Ship Name</th>

                        </tr>
                    </thead>
                    <tbody>

                        {data.launchesPast.map((launch) => (
                            <tr key={launch.id}>
                                <td>{launch.id}</td>
                                <td>{launch.mission_name}</td>
                                <td>{launch.rocket?.rocket_name}</td>
                                <td><img src={launch.ships[0]?.image} width="50" height="50" alt={launch.ships[0]?.name} /></td>
                            </tr>
                        ))}
                        {data.length === 0 && <tr>
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

export default Liste2;