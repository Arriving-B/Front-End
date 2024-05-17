import busIcon from 'assets/mainpage/bus.png'
import { useBusListStore } from 'store/busListStore'
import { useStationStore } from 'store/stationStore'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px;
  width: 80%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InnerContainerUp = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const InnerContainerUnder = styled.div`
  background-color: #252527;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-radius: 0% 10px 10px 10px;
`

const BusNumBox = styled.div`
  background-color: #252527;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0% 0%;
`

const IInnerContainer2 = styled.div`
  background-color: white;
  width: 75%;
  height: 100%;
  display: flex;
  align-items: end;
`

const BusNum = styled.p<{ busColor: string }>`
  color: ${(props) => props.busColor};
  font-size: 1.6rem;
  font-weight: bold;
`
const BoundFor = styled.p`
  margin: 0;
  background-color: transparent;
  color: #252527;
  padding-inline: 10px;
  height: 70%;
  outline: solid 4px #252527;
  border-radius: 0 10px 0 0;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WaitMinBox = styled.div`
  background-color: #252527;
  width: 25%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WaitMin = styled.p`
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
`
const InnerContainerUnderRight = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RouteNavigationContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
`
const Node = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  & p {
    color: white;
    margin: 0;
    margin-bottom: 5px;
    font-size: 0.7rem;
    font-weight: bold;
    white-space: nowrap;
  }
`
const NodePoint = styled.div<{ nodeColor: string }>`
  width: 24px;
  height: 24px;
  background-color: white;
  border: solid 5px ${(props) => props.nodeColor};
  border-radius: 100%;
  z-index: 1;
`
const NodeWay = styled.div`
  position: absolute;
  width: 74%;
  height: 10px;
  bottom: 10%;
  left: 12%;
  background-color: white;
  border: solid 5px #44d044;
  z-index: 0;
`
const IncomeBusWay = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`
const IncomeBus = styled.img<{ stationLeft: number }>`
  position: relative;
  width: 20px;
  height: 20px;
  // 75% 50% 25% 0%
  left: calc(37.5% - ${(props) => (3 - (props.stationLeft || 3.15)) * 25}%);
  background-color: #f25555;
  outline: solid 1px #f25555;
  border-radius: 100%;
  z-index: 2;
`

function ArrivingBusList() {
  const { buses } = useBusListStore()
  const { station } = useStationStore()

  return (
    <>
      {buses.map((bus) => (
        <Container>
          <InnerContainerUp>
            <BusNumBox>
              <BusNum busColor={bus.color}>{bus.num}</BusNum>
            </BusNumBox>
            <IInnerContainer2>
              <BoundFor>방면 미지원</BoundFor>
            </IInnerContainer2>
          </InnerContainerUp>

          <InnerContainerUnder>
            <WaitMinBox>
              <WaitMin>{bus.remainingTime != -1 ? `${bus.remainingTime}분 후 도착` : `도착 정보 없음`}</WaitMin>
            </WaitMinBox>
            <InnerContainerUnderRight>
              <RouteNavigationContainer>
                <Node>
                  <p>{station.name}</p>
                  <NodePoint nodeColor={'#f25555'} />
                </Node>
                <Node>
                  <NodePoint nodeColor={'#55d055'} />
                </Node>
                <Node>
                  <NodePoint nodeColor={'#55d055'} />
                </Node>
                <Node>
                  <NodePoint nodeColor={'#55d055'} />
                </Node>
                <NodeWay />
                {bus.stationsLeft != -1 && (
                  <IncomeBusWay>
                    <IncomeBus src={busIcon} stationLeft={bus.stationsLeft > 3 ? 3.15 : bus.stationsLeft} />
                  </IncomeBusWay>
                )}
              </RouteNavigationContainer>
            </InnerContainerUnderRight>
          </InnerContainerUnder>
        </Container>
      ))}
    </>
  )
}

export default ArrivingBusList
