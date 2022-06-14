import React, { Component } from 'react';
import {Container,Dropdown,Card,Button,Spinner, Form} from 'react-bootstrap';
import Header from './Header';
import {Link} from 'react-router-dom';

class YourNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var arr = JSON.parse(localStorage.getItem('notes-list'));
        this.setState({notes: arr,filters: arr});
    }

    markAsDone = (e) => {
        var x = this.state.notes;
        x.map((note) => {if(note.title === e.target.getAttribute("note_title")) note.done= true;})
        localStorage.setItem('notes-list', JSON.stringify(x))
        this.setState({notes:x,filters:x})
    }

    markAsPending = (e) => {
        var x = this.state.notes;
        x.map((note) => {if(note.title === e.target.getAttribute("note_title")) note.done= false;})
        localStorage.setItem('notes-list', JSON.stringify(x))
        this.setState({notes:x,filters:x})
    }

    deleteNote = (e) => {
        var x = this.state.notes;
        x = x.filter((note) => {return note.title != e.target.getAttribute("note_title")})
        localStorage.setItem('notes-list', JSON.stringify(x))
        this.setState({notes:x,filters:x})
    }

    newestFirst = (e) => {
        var filters = this.state.notes.sort((a,b)=>{
            var d1 = new Date(a.createdAt), d2 = new Date(b.createdAt);
            return d2-d1;
        })
        this.setState({filters:filters})
    }

    wrtDeadlines = (e) => {
        var filters = this.state.notes.filter(f=>{return f.hasDeadline}).sort((a,b)=>{
            var d1 = new Date(a.deadline), d2 = new Date(b.deadline);
            return d1-d2;
        })
        this.state.notes.map(n=>{if(!n.hasDeadline) filters.push(n)});
        this.setState({filters: filters});
    }

    search = (e) => {
        var filters = this.state.notes.filter(f=>{
            return (f.title.toUpperCase().indexOf(e.target.value.toUpperCase())>-1) || (f.note.toUpperCase().indexOf(e.target.value.toUpperCase())>-1)
        })
        this.setState({filters: filters});
    }

    render() {
        return (
            <>
                <Header search={this.search}/>
                <Container>
                    <h1>Your notes</h1>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Sort By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.newestFirst}>Newest first</Dropdown.Item>
                            <Dropdown.Item onClick={this.wrtDeadlines}>Deadlines</Dropdown.Item>
                        </Dropdown.Menu>
                        <Form.Check label="Show only pending"/>
                    </Dropdown>
                    <Container fluid class="" className="p-3">
                        {
                            this.state.filters ? (
                                this.state.filters.map(note => {
                                    return (
                                        <Card border={note.done?"success":"none"} style={{
                                            width:"500px",
                                            maxWidth:"90%",
                                            float:"left",
                                            margin: "0.5em"
                                        }}>
                                            <Card.Header>Created on {note.createdAt.split('T')[0]}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>{note.title}</Card.Title>
                                                <Card.Text>
                                                    Deadline : {note.hasDeadline ? note.deadline : "No deadline"}
                                                </Card.Text>
                                                <Card.Text as="h4">
                                                {note.note}
                                                </Card.Text>
                                                <Button variant="outline-primary" className="m-1" onClick={note.done?this.markAsPending:this.markAsDone} note_title={note.title}>Mark as {note.done?"pending":"done"}</Button>
                                                <Button variant="outline-danger" note_title={note.title} onClick={this.deleteNote}>Delete</Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            ) : (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> )
                        }
                        <div>
                        <Link to="/createnew"><Button variant="success" className="m-1">&#43; Create new notes</Button></Link>
                        </div>
                    </Container>
                </Container>
            </>
        )
    }
};

export default YourNotes;