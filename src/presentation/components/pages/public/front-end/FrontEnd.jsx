/**
 *
 * todo: Prueba para frontend
 *
 */

import { useEffect, useState } from "react";
import "../../../../styles/style.css";
import axios from "axios";
import { Link } from "react-router-dom";

const FrontEnd = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);
  return (
    <div className="container-table">
      <div className="content">
        <div className="container">
          <div className="content-button  ">
            <span>Freelancers (50)</span>
            <div>
              <button className="btn btn-outline-primary bi bi-envelope ">
                {" "}
                Send Message
              </button>
              <button className="btn btn-outline-primary bi bi-pencil">
                Edit
              </button>
              <button className="btn btn-outline-primary bi bi-trash">
                Delete
              </button>
              <button className="btn btn-outline-primary bi bi-archive ">
                Archive
              </button>
            </div>
          </div>
          <table className="table table-responsive-lg   ">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    className="form-check-input mt-3 ms-3"
                  />
                </th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => (
                <tr key={user.id}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      className="form-check-input mt-3 ms-3"
                    />
                  </th>
                  <td className="content-user">
                    <img src={user.avatar} alt="" />
                    {` ${user.first_name} ${user.last_name}`}
                  </td>
                  <td> {user.email} </td>
                  <td className="content-message">
                    <Link className="bi bi-envelope "> Hire</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="Paginación">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Anterior">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Siguiente">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;



//esta es una prueba
