import axios from 'axios'
import BusInformBox from 'components/BusInform/SmallInformBox.tsx'
import InfromBoard from 'components/InfromBoard.tsx'
import Header from 'components/header/Header.tsx'
import { useEffect, useState } from 'react'
import { routeList, useBusrouteListStore } from 'store/busRouteListStore'
import styled from 'styled-components'

// InformBoard의 Top 외의 요소용 컨테이너
const MainContainer = styled.div`
  background-color: white;
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 20px 20px;
`
// row 단위의 요소용 컨테이너
const LittleBoxComponent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
// LittleBoxComponent의 column 단위의 요소용 컨테이너들
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
//busRoute 요소용 컨테이너
const BusNotionBox = styled.div`
  background-color: #252527;
  flex-wrap: wrap; // 요소를 넘어갈시 줄 넘김
  width: 80%;
  height: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`
//각 버스정류장 관련 정보용 컨테이너
const RouteContainer = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;
`
//정류장 표시용 핀
const StationPin = styled.div<{ busColor: string }>`
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  //색깔입히기
  border: solid 5px ${(props) => props.busColor};
`
//정류장 name용 박스
const TextBox = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: center;
  font-size: 0.4rem;
`
//정류장 핀용 바
const BarBetweenStation = styled.div<{ busColor: string }>`
  background-color: white;
  width: 60px;
  height: 4px;
  //색깔입히기
  border-top: solid 4px ${(props) => props.busColor};
  border-bottom: solid 4px ${(props) => props.busColor};
  //pin 중앙정렬용
  display: flex;
  justify-content: center;
  align-items: center;
`
//컬러 입히기 용 Props
interface RouteProps {
  theBusColor?: string
}

const BusInformPage: React.FC<RouteProps> = ({ theBusColor }) => {
  const [stationId, setStationId] = useState<string>('GGB234001212')
  const [busId, setBusId] = useState<string>('GGB234001736')
  const [busNumber, setBusNumber] = useState<string>('')
  const [cityCode, setCityCode] = useState<number>(31250)
  const [cityName, setCityName] = useState<string>('')
  const [busType, setBusType] = useState<string>('')
  const [busColor, setBusColor] = useState<string>('')
  const [busEpName, setBusEpName] = useState<string>('')
  const [busSpName, setBusSpName] = useState<string>('')
  const [busFDTime, setBusFDTime] = useState<number>(0)
  const [busLDTime, setBusLDTime] = useState<number>(0)
  const [busIntervalTime, setBusIntervalTime] = useState<number>(0)
  const [busIntervalHalTime, setBusIntervalHalTime] = useState<number>(0)
  const [busStationList, setBusStationList] = useState<routeList[]>([])

  const { routeList, setRouteList, addRouteList } = useBusrouteListStore()
  theBusColor = busColor
  const handleBusInform = async () => {
    try {
      const res = await axios.get(`http://52.79.183.211/api/v1/route?busId=${busId}&cityCode=${cityCode}`)
      const data = res.data.data
      setBusNumber(data.num)
      setCityName(data.city)
      setBusType(data.type)
      setBusColor(data.color)
      setBusSpName(data.sp_nm)
      setBusEpName(data.ep_nm)
      setBusFDTime(data.fd_time)
      setBusLDTime(data.ld_time)
      setBusIntervalTime(data.interval_time)
      setBusIntervalHalTime(data.interval_haltime)
      return res
    } catch {
      return
    }
  }
  const handleGetBusRoute = async () => {
    try {
      const routeRes = await axios.get(`http://52.79.183.211/api/v1/route/map?busId=${busId}&cityCode=${cityCode}`)
      const routeData = routeRes.data.data.station_list
      setRouteList([])
      Object.keys(routeData).forEach((key) => {
        const newRoute: routeList = {
          stationId: routeData[key].station_id,
          name: routeData[key].name,
          upDown: routeData[key].up_down,
          order: routeData[key].order,
        }
        addRouteList(newRoute)
      })
    } catch (err: unknown) {
      console.error('API Error :', err)
    }
  }
  useEffect(() => {
    handleBusInform()
    handleGetBusRoute()
    routeList.map((bus) => {
      console.log(bus.name)
    })
    console.log(busEpName)
  }, [])
  return (
    <div>
      <Header />
      <InfromBoard
        titleWidth={30}
        leftSubText={cityName}
        midText={busNumber}
        rightSubText={busType + '버스'}
        backgroundColor={busColor}>
        <MainContainer>
          <LittleBoxComponent>
            <AtomBoxComponentLeft>
              <BusInformBox isLeft={true} stringInBox={'기점'} stringNextToBox={busSpName}></BusInformBox>
            </AtomBoxComponentLeft>
            <AtomBoxComponentMid />
            <AtomBoxComponentRight>
              <BusInformBox isLeft={false} stringInBox={'종점'} stringNextToBox={busEpName}></BusInformBox>
            </AtomBoxComponentRight>
          </LittleBoxComponent>
          <BusNotionBox>
            {routeList &&
              routeList.map((bus) => {
                return (
                  <div>
                    <RouteContainer>
                      <BarBetweenStation busColor={theBusColor}>
                        <StationPin busColor={theBusColor} />
                      </BarBetweenStation>
                      <TextBox>{bus.name}</TextBox>
                    </RouteContainer>
                  </div>
                )
              })}
          </BusNotionBox>
          <LittleBoxComponent>
            <AtomBoxComponentLeft>
              <BusInformBox
                isLeft={true}
                stringInBox={'첫차'}
                stringNextToBox={
                  (busFDTime / 100 < 10 ? '0' : '') +
                  Math.floor(busFDTime / 100) +
                  ' : ' +
                  (busFDTime % 100 < 10 ? '0' : '') +
                  (busFDTime % 100)
                }></BusInformBox>
            </AtomBoxComponentLeft>
            <AtomBoxComponentMid></AtomBoxComponentMid>
            <AtomBoxComponentRight>
              <BusInformBox
                isLeft={false}
                stringInBox={'평일배차간격'}
                stringNextToBox={busIntervalTime.toString() + ' 분'}
              />
            </AtomBoxComponentRight>
          </LittleBoxComponent>
          <LittleBoxComponent>
            <AtomBoxComponentLeft>
              <BusInformBox
                isLeft={true}
                stringInBox={'막차'}
                stringNextToBox={
                  (busLDTime / 100 < 10 ? '0' : '') +
                  Math.floor(busLDTime / 100) +
                  ' : ' +
                  (busLDTime % 100 < 10 ? '0' : '') +
                  (busLDTime % 100)
                }
              />
            </AtomBoxComponentLeft>
            <AtomBoxComponentMid />
            <AtomBoxComponentRight>
              <BusInformBox
                isLeft={false}
                stringInBox={'주말배차간격'}
                stringNextToBox={busIntervalHalTime.toString() + ' 분'}></BusInformBox>
            </AtomBoxComponentRight>
          </LittleBoxComponent>
        </MainContainer>
      </InfromBoard>
    </div>
  )
}

export default BusInformPage
