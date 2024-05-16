import axios from 'axios'
import Header from 'components/header/Header.tsx'
import ArrivingBusList from 'components/mainPage/ArrivingBusList'
import { useEffect, useState } from 'react'
import { busContent, useBusListStore } from 'store/busListStore'
import { useStationStore } from 'store/stationStore'
import styled from 'styled-components'

const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 7vh;
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

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #f2f2ff, #e0e0e0);
    border: 3px solid white;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    margin-block: 10px;
    height: 100%;
    border-radius: 10px;
  }
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
  const [apiUrl, setApiUrl] = useState<string>('http://localhost:8080/api/v1')
  const { station } = useStationStore()
  const { buses, setBuses, addBus } = useBusListStore()

  const [cityCode, setCityCode] = useState<number>(31250)

  const handleGetBus = async () => {
    try {
      const response = await axios.get(`${apiUrl}/bus?stationId=${station.id}&cityCode=${cityCode}`)
      const data = response.data.data.bus_list
      setBuses([])
      Object.keys(data).forEach((key) => {
        const newBus: busContent = {
          id: data[key].bus_id,
          num: data[key].name,
          type: data[key].type,
          color: data[key].color,
          stationsLeft: data[key].station_left,
          remainingTime: Math.floor(data[key].time_left / 60),
        }
        addBus(newBus)
      })
    } catch (err: unknown) {
      console.error('API Error :', err)
    }
  }

  useEffect(() => {
    handleGetBus()
  }, [])

  return (
    <>
      <Header></Header>
      <Background>
        <MapStationList>
          <BusList>
            {buses &&
              buses.map((bus) => {
                return (
                  <BusArriveInfo>
                    <Bus color={bus.color}>{bus.num}</Bus>
                    <WaitMinute>
                      {bus.remainingTime != -1
                        ? bus.remainingTime <= 1
                          ? `곧 도착`
                          : `${bus.remainingTime}분 남음`
                        : `?`}
                    </WaitMinute>
                  </BusArriveInfo>
                )
              })}
          </BusList>
          <MapStation>
            <ContainerCurrentBusStop>
              <CurrentBusStop>현재 정류장</CurrentBusStop>
              <CurrentBusStopName>{station.name}</CurrentBusStopName>
            </ContainerCurrentBusStop>
            <Map>
              <Mapinfo>
                대충 아무 정보
                <br />
                대충 지도
              </Mapinfo>
            </Map>
          </MapStation>
        </MapStationList>
        <BusListArriveSoon>
          <ArrivingBusList />
        </BusListArriveSoon>
      </Background>
    </>
  )
}

export default MainPage
