import React, { Component } from "react";
import PropTypes from "prop-types";

import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";
import ItbLogo from '../assets/logo_itb360.svg';

class DefaultLogoAuthIcon extends Component {
  static defaultProps = {
    height: 32,
  };
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    const { height, width } = this.props;
    return (
      <img 
        src={ItbLogo} 
        alt="Itb360 Logo" 
        key="logo-itb"
        height={height}
        width={width}
        >
      </img>
    );
  }
}

export default function LogoAuthIcon(props) {
  const [Component = DefaultLogoAuthIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
