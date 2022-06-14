import React, { Component } from 'react';
import {Container,Form,Button, Alert} from 'react-bootstrap';
import Header from './Header';
import {Navigate, Link} from 'react-router-dom';

class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "title":"",
            "hasDeadline":true,
            "deadline":"",
            "note":"",
            "createdAt":new Date()
        }
    }

    changeTitle = (e)=>{this.setState({"title":e.target.value})}
    changeHasDeadline = (e)=>{this.setState({"hasDeadline":!e.target.checked})}
    changeDeadline = (e)=>{this.setState({"deadline":e.target.value})}
    changeNote = (e)=>{this.setState({"note":e.target.value})}
    submit = (e)=>{
        e.preventDefault();
        if(!this.state.title) {
            this.setState({"warning": "Please enter a title."})
            return;
        }
        if(this.state.hasDeadline && (!this.state.deadline)) {
            this.setState({"warning": "Please select a deadline or check the status of deadline"})
            return;
        }
        if(!this.state.note) {
            this.setState({"warning": "Please enter a note"})
            return;
        }
        
        var arr = JSON.parse(localStorage.getItem('notes-list'));
        if(arr.length > 0 && (arr.filter(f=>{return f.title == this.state.title}).length > 0)) {
            this.setState({"warning":"Please choose a unique title"})
            return;
        }
        arr.push(this.state);
        localStorage.setItem('notes-list', JSON.stringify(arr));
        this.setState({"success":"Created notes sucessfully"});
        setTimeout(() => {
            <Navigate to="/yournotes" />;
          }, 500);
    }

    render() {
        return (
            <>
                <Header/>
                <Container>
                    <h1>Create new note</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="Title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" required onInput={this.changeTitle}/>
                            <Form.Text className="text-muted">
                            Choose a title which suits your note
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control type="date" onInput={this.changeDeadline} />
                            <span>Check this if you dont want to give deadline</span><Form.Check onClick={this.changeHasDeadline}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Note</Form.Label>
                            <Form.Control as="textarea" placeholder="Type your notes here" required onInput={this.changeNote} />
                        </Form.Group>
                        {
                            (this.state.warning?<Alert variant="danger">{this.state.warning}</Alert>:null)
                        }
                        {
                            (this.state.success?<Alert variant="success">{this.state.success}! Visit {<Link to="/yournotes">your notes</Link>}</Alert>:null)
                        }
                        <Button variant="primary" type="submit" onClick={this.submit}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>
        )
    }
};

export default CreateNew;