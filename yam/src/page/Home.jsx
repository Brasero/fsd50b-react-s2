import React from 'react';
import { Outlet} from "react-router-dom";
import Form from "../component/Form.jsx";

const Home = () => {
    return (
        <div>
            <h3>Le jeu</h3>
            <Form />
            <Outlet />
        </div>
    );
};

export default Home;