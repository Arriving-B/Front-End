import React from 'react'
import styled from 'styled-components'

const BoardTopContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
// 보드 상단 backBoard
const BoardTopBackground = styled.div`
  background-color: #252527;
  width: 100%;
  height: 50px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0;
`

//보드의 가운데 블럭
const BoardTopMidBlock = styled.div<{ titleWidth: number }>`
  background-color: #252527;
  width: ${(props) => props.titleWidth}%;
  height: 100px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
// 보드 가운데 블럭 텍스트 박스
const StationInfromTextBox = styled.h2`
  color: white;
  width: 100%;
  margin: 0 0 7px 0;
`

// 보드 좌우 블럭
const BoardTopBetween = styled.div<{ titleWidth: number; backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.titleWidth}%;
  height: 50px;
  border-radius: 20px 20px 0 0;
  justify-content: center;
`
// 보드 좌우 블럭 텍스트 박스
const SubStationInfomTextBox = styled.h3`
  color: white;
  width: 100%;
  height: 30px;
  margin: 10px 0 10px 0;
`
interface InfromBorardProps {
  titleWidth: number
  leftText: string
  midText: string
  rightText: string
  backgroundColor?: string
}

const InfromBoard: React.FC<InfromBorardProps> = ({ titleWidth, leftText, midText, rightText, backgroundColor }) => {
  let subWidth: number = (100 - titleWidth) / 2
  backgroundColor = backgroundColor ? backgroundColor : 'black'
  return (
    <div>
      <BoardTopContainer>
        <BoardTopBackground>
          <BoardTopBetween titleWidth={subWidth} backgroundColor={backgroundColor}>
            <SubStationInfomTextBox> {leftText} </SubStationInfomTextBox>
          </BoardTopBetween>

          <BoardTopMidBlock titleWidth={titleWidth}>
            <StationInfromTextBox style={{ fontSize: '50px' }}> {midText} </StationInfromTextBox>
          </BoardTopMidBlock>

          <BoardTopBetween titleWidth={subWidth} backgroundColor={backgroundColor}>
            <SubStationInfomTextBox> {rightText} </SubStationInfomTextBox>
          </BoardTopBetween>
        </BoardTopBackground>
      </BoardTopContainer>
    </div>
  )
}

export default InfromBoard
