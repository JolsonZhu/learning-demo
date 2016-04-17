/**
 * Author      : Zhu Jiegao
 * Data        : 2016/4/17
 * Description : entry file
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    render() {
        return (
            <h1>It working!</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);