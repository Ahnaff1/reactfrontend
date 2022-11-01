import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useCallback } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import apiCaller from "../utils/axiosConfig";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZXhwIjoxNjY3NjQyMDYyLCJpYXQiOjE2NjcyMTAwNjJ9.hIRrQCzAu-yVePdEHECPJ2XxLdCMLlS-EJa210-rZ6w";

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default class Dashboard extends Component {
//   handleSubmit(event) {
//     axios
//       .get("https://cynoorder.herokuapp.com/api/user/Adminview")
//       .then(function (res) {
//         console.log(res);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//     event.preventDefault();
//     // try {
//     //   const res = axios.get(
//     //     "https://cynoorder.herokuapp.com/api/user/Adminview"
//     //   );
//     //   console.log(res);
//     // } catch (err) {
//     //   console.log(err.message);
//     // }
//   }
//   const fetchdata=useCallback(async()=>{
//       try {
//       const res = axios.get(
//         "https://cynoorder.herokuapp.com/api/user/Adminview"
//       );
//       console.log(res);
//     } catch (err) {
//       console.log(err.message);
//     }
//   })

//   render() {
//     if (!localStorage.getItem("token")) {
//       return <Redirect to="login" />;
//     }

//     return (
//       <Container style={{ marginTop: "100px" }}>
//         <Form>
//           <div>
//             {localStorage.getItem("user")}
//             <div>{localStorage.getItem("token")}</div>
//             <Form.Group>
//               <Button
//                 variant="primary"
//                 type="get"
//                 onClick={this.handleSubmit}
//               ></Button>
//             </Form.Group>
//           </div>
//         </Form>
//       </Container>
//     );
//   }
// }

function Dashboard(props) {
  const [cookies] = useCookies("jwt");
  const [data, setdata] = useState();
  const getdata = async (e) => {
    e.preventDefault();
    await apiCaller
      .get("user/Adminview")
      .then((res) => {
        console.log(res);
        setdata(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log(cookies, "===> worked?");
  }, [cookies]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Form>
        <div>
          {localStorage.getItem("user")}
          <div>{localStorage.getItem("token")}</div>
          <Form.Group>
            <Button
              variant="primary"
              type="get"
              //   onClick={this.handleSubmit}
              onClick={(e) => getdata(e)}
            ></Button>
          </Form.Group>
        </div>
      </Form>
    </Container>
  );
}

export default Dashboard;
