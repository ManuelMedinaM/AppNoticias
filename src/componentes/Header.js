import React,{Component} from 'react';

 class Header extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper light-blue darken-3">
                    <a className="brand-logo center ">
                        {this.props.titulo}
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header