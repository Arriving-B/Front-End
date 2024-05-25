import React from 'react'
import styled from 'styled-components'

// 메인보드
const MainBoard = styled.div`
  margin: 0 auto 0 auto;
  background-color: white;
  width: 80vw;
  height: 60vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`
const BoardCenter = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 20px 20px;
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
const BoardTopMid = styled.div<{ titleWidth: number }>`
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
  leftSubText: string
  midText: string
  rightSubText: string
  backgroundColor?: string
  children?: React.ReactNode
}

const InfromBoard: React.FC<InfromBorardProps> = ({
  titleWidth,
  leftSubText,
  midText,
  rightSubText,
  backgroundColor,
  children,
}) => {
  let subWidth: number = (100 - titleWidth) / 2
  backgroundColor = backgroundColor ? backgroundColor : 'black'
  return (
    <MainBoard>
      <BoardTopBackground>
        <BoardTopBetween titleWidth={subWidth} backgroundColor={backgroundColor}>
          <SubStationInfomTextBox> {leftSubText} </SubStationInfomTextBox>
        </BoardTopBetween>

        <BoardTopMid titleWidth={titleWidth}>
          <StationInfromTextBox style={{ fontSize: '50px' }}> {midText} </StationInfromTextBox>
        </BoardTopMid>

        <BoardTopBetween titleWidth={subWidth} backgroundColor={backgroundColor}>
          <SubStationInfomTextBox> {rightSubText} </SubStationInfomTextBox>
        </BoardTopBetween>
      </BoardTopBackground>
      <BoardCenter>{children}</BoardCenter>
    </MainBoard>
  )
}

export default InfromBoard
