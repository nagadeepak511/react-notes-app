import React, { Component } from 'react';
import Header from './Header';
import {Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <Container>
                    <h1>Notes app</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend diam. Vestibulum felis nunc, convallis ac lacus vel, gravida tincidunt magna. Curabitur scelerisque tristique nunc a auctor. Ut rutrum, est at convallis luctus, lacus turpis semper turpis, scelerisque bibendum massa arcu ut ex. Cras ultrices malesuada commodo. Suspendisse potenti. Pellentesque ac justo dui. Aenean porttitor ex accumsan, tincidunt mi a, iaculis dui. Donec euismod diam elit, id dapibus justo feugiat sollicitudin. In ac leo quis neque lobortis volutpat. Ut venenatis tellus vitae tellus sollicitudin, eget consequat mauris efficitur. Maecenas sodales tortor non leo semper, nec bibendum turpis ultrices. Praesent accumsan magna elementum ex molestie, nec interdum elit malesuada. Ut auctor sit amet lorem eget tincidunt. Mauris non libero suscipit massa volutpat tempor. Suspendisse sed aliquam erat.

                    Maecenas tincidunt sed lectus ac congue. Phasellus egestas lacus malesuada ante sodales, quis efficitur nisl faucibus. Nullam eget purus ullamcorper, mattis lacus vel, facilisis metus. Suspendisse potenti. Fusce vel ultricies lacus. Aliquam id ligula imperdiet, mollis sapien ut, rutrum leo. In eget iaculis felis. Cras non convallis est, a vulputate dui. Sed nisl justo, dapibus vitae libero sed, sagittis laoreet nibh. Nunc nec felis vel dui finibus fringilla. Quisque sed odio vel est congue posuere. Proin sed ex libero. Ut dignissim tellus at arcu mollis, vitae pellentesque erat mollis. Duis eget odio ac massa euismod sodales quis nec ante.
                    </p>
                    <Link to="/createnew"><Button variant="success" className="m-1">&#43; Create new notes</Button></Link>
                    <Link to="/yournotes"><Button variant="secondary">&#x1F441; View your notes</Button></Link>
                </Container>
            </>
        )
    }
};

export default Home;