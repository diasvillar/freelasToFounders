import React, {Component} from 'react';
import {goToHome, goToQuemSomos, goToAllPost, goToAllEbooks} from '../../helpers/go-to';

class LogoAndMenu extends Component {

    render() {
        return (
            <div id="logoAndMenuContainer">
                <a onClick={goToHome.bind(this)}>
                    <img src="LOGOFF.png" height='50px'/>
                      <tag id="logo-name">FREELAS TO FOUNDERS</tag>
                </a>
                <div>
                  <input id="input-freela" type="text" name="fname" placeholder="Procure um freelancer"/>
                </div>
                <div id="menu" className="hide-on-med-and-down">
                    <div className="menu-item">
                        <a onClick={goToHome.bind(this)}>
                            Entre
                        </a>
                    </div>
                    <div className="menu-item">
                        <a onClick={goToAllPost.bind(this)}>
                            Cadastre-se
                        </a>
                    </div>
                    <div className="menu-item">
                        <a onClick={goToQuemSomos.bind(this)}>
                            Contato
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

LogoAndMenu.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default LogoAndMenu;
