import React from 'react'
import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

const Container = styled.ScrollView`
	padding: 20px 0;
`

const Label = styled.Text`
	color: #fff;
	font-size: 16px;
    margin: 0 0 5px 10px;
    align-items: center;
    justify-content: center;
    display: flex;
`
const SmallLabel = styled.Text`
	color: #bac2ba;
	font-size: 10px;
    margin: 0 0 5px 10px;
    align-items: center;
    justify-content: center;
    display: flex;
`

const MovieScroll = styled.ScrollView`
	padding-left: 10px;
`

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 14) / 100)}px;
    height: 50px;
    padding: 5px;
`

const MovieCard = styled.View`
    padding-right: 9px;
    flex-direction: row;
`
const LabelView = styled.View`
    padding-right:9px;
    flex-direction: column;
`

const Songs = ({ label, item, small_label }) => {
	return (
		<Container>
			
			<MovieScroll horizontal>
				{item.map((song, item) => {
					return (
						<MovieCard key={String(item)}>
							<MoviePoster resizeMode='cover' source={song} />
                            <LabelView>
                                <Label>{label}</Label>
                                <SmallLabel>{small_label}</SmallLabel>
                            </LabelView>
						</MovieCard>
					)
				})}
			</MovieScroll>
		</Container>
	)
}

export default Songs;
