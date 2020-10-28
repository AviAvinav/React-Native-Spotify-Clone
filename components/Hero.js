import React from 'react';
import styled from 'styled-components/native';
import { Feather, Ionicons } from '@expo/vector-icons'

const Container = styled.View`
    position: absolute;
    width: 100%;
    align-items: center;
    bottom: 8px;
`

const Banner = styled.Image`
    height: 100px;
`

const Tags = styled.View`
    justify-content: center;
    margin-top: 20px;
    flex-direction: row;
`

const MenuTag = styled.Text`
    color: #91e691;
    padding: 0 8px;
    font-size: 45px;
    font-weight: bold;
    
`
const Separator = styled.View`
    width: 3px;
    height: 10px;
    background-color: #e8e8e8;
    margin: 6px 0;
    border-radius: 3px;
`

const MenuHero = styled.View`
    width: 90%;
    margin-top: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Button = styled.TouchableOpacity`
    align-items: center;
    flex: 1;
    display: flex;
    top:0;
    left: 0;
    right:0;
    bottom:0;
`

const TextButton = styled.Text`
    color: #fff;
    font-size: 13px;
    margin-top: 3px;
`
const DescriptionTag = styled.Text`        
    color: #fff;
    padding: 0 8px;
    font-size: 15px;
`

const LikesTag = styled.Text`        
    color: #bac2ba;
    padding: 0 8px;
    font-size: 12px;
`

const Play = styled.TouchableOpacity`
    background-color: #34de0d;
    flex-direction: row;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    align-items: center;
    padding: 0 8px;
    justify-content: center;

`

const TextButtonPlay = styled.Text`
    font-size: 15px;
    font-weight: bold;
    padding-left: 5px;
`

const Hero = () => {
    return (
        <Container>
            {/* <Banner resizeMode='contain' source={require('../assets/banner.png')} /> */}
            <Tags>
                <MenuTag>Today's Top Hits</MenuTag>
            </Tags>
            <Tags>
                <DescriptionTag>Taylor Swift is one of the hottest 50</DescriptionTag>
            </Tags>
            <Tags>
                <LikesTag>73.5M LIKES</LikesTag>
            </Tags>
            <MenuHero>
                <Play mode='contain'>
                    <Ionicons name='ios-play' size={26} color='white' />
                </Play>
            </MenuHero>
        </Container>
    )
}

export default Hero;