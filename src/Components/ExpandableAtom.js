import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';

export default class ExpandableAtom extends React.PureComponent {
    render() {
        const { title, seat, from, to } = this.props.item;
        const name = (title && title.length > 13) ? title.substring(0, 10) + '...' : title;
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 132,
                paddingVertical: 16,
                borderBottomColor: '#c0c0c0',
                borderBottomWidth: .5
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        marginRight: 11,
                        backgroundColor: '#c0c0c0',
                        borderRadius: 18,
                        height: 36,
                        width: 36,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 16, color: '#000054', fontWeight: 'bold' }}>{title.charAt(0)}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000054', fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ fontSize: 16, color: '#000054' }}>Seat {seat}</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 16,
                        }}>
                            <View style={{
                                marginRight: 11
                            }}>
                                <Icon 
                                type="Octicons"
                                name="primitive-dot"
                                style={{ fontSize: 15, marginLeft: 3, marginBottom: 3 }}
                                />
                                <View style={{
                                    borderStyle: 'dotted',
                                    borderWidth: 1,
                                    borderRadius: 1,
                                    transform: [{ rotate: '90deg'}]
                                }} />
                                <Icon 
                                type="MaterialIcons"
                                name="location-on"
                                style={{ fontSize: 14, marginTop: 7 }}
                                />
                            </View>
                            <View style={{ justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 11, color: '#000054' }}>{from}</Text>
                                <Text style={{ fontSize: 11, color: '#000054' }}>{to}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: '#26142a',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                    paddingHorizontal: 42
                }}>
                    <Text style={{ fontSize: 18, color: '#26142a' }}>End Trip</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
