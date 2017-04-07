import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            <div id="c-footer">
                <div id="gradient-footer">
					          <div className="store">
						            <p id="footer-text">Download:</p>
                        <a href="http://www.apple.com/br/" target="_blank"> <img className="apple" src="images/app-store-logo.png"/></a>
					              <a href="https://play.google.com/store?hl=pt_BR" target="_blank"> <img className="googleplay" src="images/en_badge_web_generic.png"/></a>
                	  </div>
                    <div className="row">
                        @2017 Freelas to Founders - Todos os direitos reservados
                    </div>
                    <a href="http://www.fastdezine.com" target="_blank"> <img className="fastdezine" src="images/fast2.jpg"/></a>
                </div>
            </div>
        );
    }
}
export default Footer;
