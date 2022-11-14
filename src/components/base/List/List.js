import React               from 'react';
import PropTypes           from 'prop-types';
import { FlatList, View }  from 'react-native';

import styles              from './styles';

function List({
    style,
    renderItem,
    list
}) {

    return (
        <View style = {[ styles.container, style ]}>
            <FlatList
                initialNumToRender           = {10}
                renderItem                   = {renderItem}
                data                         = {list}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

List.propTypes = {
    renderItem : PropTypes.func.isRequired,
    style      : PropTypes.object,
    list       : PropTypes.array
};

List.defaultProps = {
    style : {},
    list  : []
};

export default React.memo(List);
