import React from 'react';
import './App.css';

class App extends React.Component {
  state = { 
    courses_list: [],
    users_list:[],
    error_message: ''
  }

  getUsers = async () => {
    try{
      const response = await fetch('//localhost:8080/users')
      const answer = await response.json()
        if (answer.success){
          const users_list = answer.result
          this.setState({users_list});
        } else { 
          const error_message = answer.message
          this.setState({error_message})
        }
    } catch(error) {
      this.setState({error_message: error})
    }
  }
  //  <-- WORK-ON -->
  // createCourse = async props => {
  //   try {
  //     if (!props) {
  //       throw new Error(
  //         `you need a course name`
  //       );
  //     }
  //     const { course_name } = props;
  //     const response = await fetch(
  //       `http://localhost:8080/courses/new/?course_name=${course_name}`
  //     );
  //     const answer = await response.json();
  //     if (answer.success) {
  //       // we reproduce the user that was created in the database, locally
  //       const id = answer.result;
  //       const course = { course_name, id };
  //       const courses_list = [...this.state.course, course];
  //       this.setState({ courses_list });
  //     } else {
  //       this.setState({ error_message: answer.message });
  //     }
  //   } catch (err) {
  //     this.setState({ error_message: err.message });
  //   }
  // }

  async componentDidMount(){
    this.getUsers()
  }

  render() {
    const { users_list, error_message } = this.state
    return (
      <div className="App">
        { error_message ? <p> ERROR! {error_message}</p> : false }
        { users_list.map( user => (
          <div key={user.id}>
            <p>{user.email} - {user.username} - {user.first_name} - {user.last_name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
