import styled from 'styled-components'
import Header from '../components/header/header'
import ArrivingBusList from '../components/mainpage/ArrivingBusList'

const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
`
const BusListArriveSoon = styled.div`
  background-color: white;
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const MapStationList = styled.div`
  background-color: white;
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
`
const BusList = styled.div`
  background-color: white;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 900px;
`
const MapStation = styled.div`
  background-color: white;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const BusArriveInfo = styled.div`
  background-color: black;
  width: 200%;
  height: 99%;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Map = styled.div`
  background-color: black;
  width: 95%;
  height: 80%;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ContainerCurrentBusStop = styled.div`
  background-color: black;
  width: 95%;
  height: 100px;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const CurrentBusStopname = styled.h1`
  font-size: 20px;
  font-weight: bold;
`
const CurrentBusStop = styled.h1`
  font-size: 12px;
  font-weight: bold;
`
const Mapinfo = styled.p`
  font-size: 20px;
  font-weight: bold;
`
const BusNum = styled.p`
  background-color: black;
  width: 50%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WaitingTime = styled.p`
  background-color: black;
  width: 50%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlueBus = styled.p`
  color: blue;
  font-size: 20px;
  font-weight: bold;
`
const RedBus = styled.p`
  color: red;
  font-size: 20px;
  font-weight: bold;
`
const GreenBus = styled.p`
  color: green;
  font-size: 20px;
  font-weight: bold;
`
const WaitMinute = styled.p`
  color: white;
  font-size: 15px;
  font-weight: bold;
`
function MainPage() {
  return (
    <>
      <Header></Header>
      <Background>
        <MapStationList>
          <BusList>
            <BusArriveInfo>
              <GreenBus>55 </GreenBus>
              <WaitMinute> 8분</WaitMinute>
            </BusArriveInfo>
          </BusList>
          <MapStation>
            <ContainerCurrentBusStop>
              <CurrentBusStop>현재 정류장</CurrentBusStop>
              <CurrentBusStopname>거여역6번출구</CurrentBusStopname>
            </ContainerCurrentBusStop>
            <Map>
              <Mapinfo>
                대충 아무 정보
                <br /> 대충 지도
              </Mapinfo>
            </Map>
          </MapStation>
        </MapStationList>
        <BusListArriveSoon>
          <ArrivingBusList></ArrivingBusList>
        </BusListArriveSoon>
      </Background>
    </>
  )
}

export default MainPage
