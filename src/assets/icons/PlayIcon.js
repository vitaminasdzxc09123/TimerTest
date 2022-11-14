import * as React            from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes     from 'prop-types';


function Icon(props) {
    return (
      <Svg
      width={24}
      height={24}
      fill={'#ffff'}
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <Path d="M23 12 1 24V0l22 12zM2 22.315 20.912 12 2 1.685v20.63z" />
    </Svg>
    );
}

Icon.propTypes = {
    color : PropTypes.string,
    style : PropTypes.object
};

Icon.defaultProps = {
    color : '#000000',
    style : {}
};

export default Icon;
