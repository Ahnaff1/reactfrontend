import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import DB from "../utils/DB";
import { useHistory } from "react-router-dom";
import { Cookies } from "react-cookie";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://cynoorder.herokuapp.com/api/user/login", {
        email,
        password,
      })
      .then(function (res) {
        DB.storeData("token", res.data.jwt);
        DB.storeData("user", res.config.data);
        // console.log(res);
        // localStorage.setItem("token", res.data.jwt);
        // localStorage.setItem("user", res.config.data);
        if (res.data.jwt) {
          cookies.set("jwt", res.data.jwt);
          history.push("/dashboard");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Form>
        <Form.Group controlId="formBasicEmail" style={{ width: "300px" }}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ width: "300px" }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

// class Login extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };
//     this.onChange = this.onChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   handleSubmit(event) {
//     console.log(this.state.email);
//     console.log(this.state.password);
//     axios
//       .post("https://cynoorder.herokuapp.com/api/user/login", {
//         email: this.state.email,
//         password: this.state.password,
//       })
//       .then(function (res) {
//         DB.storeData("token", res.data.jwt);
//         DB.storeData("user", res.config.data);
//         // console.log(res);
//         // localStorage.setItem("token", res.data.jwt);
//         // localStorage.setItem("user", res.config.data);
//         if (res.data.jwt) {
//           console.log("WORKED");
//           Redirect("/dashboard");
//         }
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <Container style={{ marginTop: "100px" }}>
//         <Form>
//           <Form.Group controlId="formBasicEmail" style={{ width: "300px" }}>
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter email"
//               name="email"
//               value={this.state.email}
//               onChange={this.onChange}
//             />
//             <Form.Text className="text-muted"></Form.Text>
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword" style={{ width: "300px" }}>
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={this.state.password}
//               onChange={this.onChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group>
//           <Button variant="primary" type="submit" onClick={this.handleSubmit}>
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// export default withRouter(Login);
