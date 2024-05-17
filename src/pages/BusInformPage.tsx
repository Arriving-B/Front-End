import BusInformBox from 'components/BusInform/SmallInformBox.tsx'
import InfromBoard from 'components/InfromBoard.tsx'
import styled from 'styled-components'

const MainContainer = styled.div`
  background-color: white;
  width: 90vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LittleBoxComponent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
const AtomBoxComponentLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`
const AtomBoxComponentMid = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AtomBoxComponentRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`
const BusNotionBox = styled.div`
  background-color: black;
  width: 80%;
  height: 300px;
  border-radius: 10px;
`
const NextArriveMinute = styled.h4`
  display: flex;
  justify-self: center;
  text-align: center;
  color: black;
`
function BusInform() {
  return (
    <InfromBoard titleWidth={30} leftSubText="나는 공부시" midText="어쩌구저쩌구" rightSubText="나는 잠들다">
      <MainContainer>
        <LittleBoxComponent>
          <AtomBoxComponentLeft>
            <BusInformBox isLeft={true} stringInBox={'기점'} stringNextToBox={'정지'}></BusInformBox>
          </AtomBoxComponentLeft>
          <AtomBoxComponentMid />
          <AtomBoxComponentRight>
            <BusInformBox isLeft={false} stringInBox={'종점'} stringNextToBox="지정"></BusInformBox>
          </AtomBoxComponentRight>
        </LittleBoxComponent>
        <BusNotionBox />
        <LittleBoxComponent>
          <AtomBoxComponentLeft>
            <BusInformBox isLeft={true} stringInBox={'첫차'} stringNextToBox={'04:20'}></BusInformBox>
          </AtomBoxComponentLeft>
          <AtomBoxComponentMid>
            <NextArriveMinute>6분후 도착</NextArriveMinute>
          </AtomBoxComponentMid>
          <AtomBoxComponentRight>
            <BusInformBox isLeft={false} stringInBox={'평일배차간격'} stringNextToBox={'12m'}></BusInformBox>
          </AtomBoxComponentRight>
        </LittleBoxComponent>
        <LittleBoxComponent>
          <AtomBoxComponentLeft>
            <BusInformBox isLeft={true} stringInBox={'막차'} stringNextToBox={'00:20'}></BusInformBox>
          </AtomBoxComponentLeft>
          <AtomBoxComponentMid />
          <AtomBoxComponentRight>
            <BusInformBox isLeft={false} stringInBox={'주말배차간격'} stringNextToBox={'12m'}></BusInformBox>
          </AtomBoxComponentRight>
        </LittleBoxComponent>
      </MainContainer>
    </InfromBoard>
  )
}

export default BusInform
