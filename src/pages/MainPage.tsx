import Header from 'components/header/Header.tsx'
import ArrivingBusList from 'components/mainPage/ArrivingBusList'
import styled from 'styled-components'

const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`
const BusListArriveSoon = styled.div`
  margin: 40px;
  padding: 15px;
  background-color: white;
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 20px;
  overflow-y: auto;
`
const MapStationList = styled.div`
  margin: 40px;
  padding: 15px;
  background-color: white;
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
`
const BusList = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 15px;
  background-color: #252527;
`
const MapStation = styled.div`
  width: calc(70% - 15px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const BusArriveInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ContainerCurrentBusStop = styled.div`
  background-color: #252527;
  width: 100%;
  height: 120px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Map = styled.div`
  background-color: #252527;
  width: 100%;
  height: calc(100% - 135px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const CurrentBusStopName = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
`
const CurrentBusStop = styled.h1`
  font-size: 0.8rem;
  font-weight: bold;
`
const Mapinfo = styled.div`
  font-size: 1rem;
  font-weight: bold;
`

const Bus = styled.p<{ color: string }>`
  padding: 0;
  margin: 0 10px 0 20px;
  color: ${(props) => props.color};
  font-size: 1.4rem;
  font-weight: bold;
`

const WaitMinute = styled.p`
  padding: 0;
  margin: 0 20px 0 10px;
  color: ${(props) => props.color || 'white'};
  font-size: 0.9rem;
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
              <Bus color={'#55d055'}>55 </Bus>
              <WaitMinute>8분</WaitMinute>
            </BusArriveInfo>
            <BusArriveInfo>
              <Bus color={'#55d055'}>G5500 </Bus>
              <WaitMinute>85분</WaitMinute>
            </BusArriveInfo>
            <BusArriveInfo>
              <Bus color={'#5555f0'}>N4462 </Bus>
              <WaitMinute>운행종료</WaitMinute>
            </BusArriveInfo>
            <BusArriveInfo>
              <Bus color={'#f05555'}>1650 </Bus>
              <WaitMinute>곧 도착</WaitMinute>
            </BusArriveInfo>
          </BusList>
          <MapStation>
            <ContainerCurrentBusStop>
              <CurrentBusStop>현재 정류장</CurrentBusStop>
              <CurrentBusStopName>거여역6번출구</CurrentBusStopName>
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
          <ArrivingBusList />
          <ArrivingBusList />
          <ArrivingBusList />
          <ArrivingBusList />
          <ArrivingBusList />
          <ArrivingBusList />
          <ArrivingBusList />
          <ArrivingBusList />
          <ArrivingBusList />
        </BusListArriveSoon>
      </Background>
    </>
  )
}

export default MainPage
