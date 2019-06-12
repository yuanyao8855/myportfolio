import React from 'react';
import './style/App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {
    Link
} from "react-router-dom";

function App () {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Title" scroll>
                    <Navigation>
                        <Link to="/">home</Link>
                        <Link to="/aboutme">about me</Link>

                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/">home</Link>
                        <Link to="/aboutme">about me</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}
export default App;
