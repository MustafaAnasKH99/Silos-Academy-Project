import React from 'react'
import './cms.css'

export default class Cms extends React.Component{
    state = {
        course_name: '',
        level_name: '',
        article: '',    
        test: '',
        expected_answer: '',
        level_index: '',
        error_message: ''
    }
    
    createLevel = async () => {
        const post = (url, data = {}) => {
            const post_options = {
                method: "POST",
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
        
            return fetch(url, post_options)
            .then(response => response.json());
        }

        try {
          if (!this.state.level_name) {
            throw new Error(
              `you need a level name`
            ); 
          }
          const { course_name, level_name, article, test, expected_answer, level_index } = this.state
          const response = await post(
            `http://localhost:8080/levels/new/`,
            { course_name, level_name, article, test, expected_answer, level_index } 
        );
          const answer = await response.json();
          console.log(answer)  
          if (answer.success) {
              this.setState({course_name: ''})
          } else {
            this.setState({ error_message: answer.message });
          }
        } catch (err) {
          this.setState({ error_message: err.message });
        }
    }

    render(){
        return (
            <div>
                <h1>Admin CMS</h1>
                
                <div className="flex-grid">
                    <textarea 
                        className = "col"
                        placeholder = "Course Name"
                        onChange = {(e) => {this.setState({course_name: e.target.value})}}
                    />
                    <textarea 
                        className = "col"
                        placeholder = "Level Name"
                        onChange = {(e) => {this.setState({level_name: e.target.value})}}
                    />
                    <textarea
                        className = "col" 
                        placeholder = "Article"
                        onChange = {(e) => {this.setState({article: e.target.value})}}
                    />

                    <textarea 
                        className = "col"
                        placeholder = "Test"
                        onChange = {(e) => {this.setState({test: e.target.value})}}
                    />

                    <textarea 
                        className = "col"
                        placeholder = "Expected Answer"
                        onChange = {(e) => {this.setState({expected_answer: e.target.value})}}
                    />

                    <textarea 
                        className = "col"
                        placeholder = "Level Index"
                        onChange = {(e) => {this.setState({level_index: e.target.value})}}
                    />

                    <input 
                        type="button"
                        value="Submit"
                        onClick={() => this.createLevel()}
                    />
                </div>
            </div>
        )
    }
}