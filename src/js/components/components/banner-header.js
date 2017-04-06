import React, {Component} from 'react';

import Spinner from '../objects/spinner';

class BannerHeader extends Component {

    render() {
        return (
            <div id="banner">

            </div>
        )
    }
}

BannerHeader.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default BannerHeader;
