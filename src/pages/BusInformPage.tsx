import axios from 'axios'
import BusInformBox from 'components/BusInform/SmallInformBox.tsx'
import InfromBoard from 'components/InfromBoard.tsx'
import Header from 'components/header/Header.tsx'
import { useEffect, useState } from 'react'
import { useBusDetailStore } from 'store/busDetailStore'
import { RouteList, useBusRouteListStore } from 'store/busRouteListStore'
import { useStationStore } from 'store/stationStore'
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

// InformBoard의 Top 외의 요소용 컨테이너
const MainContainer = styled.div`
  background-color: white;

  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
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
const StationPin = styled.div<{ busColor?: string }>`
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
const BarBetweenStation = styled.div<{ busColor?: string }>`
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
  const [busStationList, setBusStationList] = useState<RouteList[]>([])
  const { busDetail, setBusDetail, setBusId } = useBusDetailStore()
  const { routeList, setRouteList, addRouteList } = useBusRouteListStore()
  const { station } = useStationStore()
  const handleBusInform = async () => {
    try {
      const res = await axios.get(
        `http://52.79.183.211/api/v1/route?busId=${busDetail.busId}&cityCode=${station.cityCode}`,
      )
      const data = res.data.data
      setBusDetail({
        busId: data.busId,
        busNumber: data.busNumber,
        cityCode: data.cityCode,
        cityName: data.cityName,
        busType: data.busType,
        busColor: data.busColor,
        busEpName: data.busEpName,
        busSpName: data.busSpName,
        busFDTime: data.busFDTime,
        busLDTime: data.busLDTime,
        busIntervalTime: data.busIntervalTime,
        busIntervalHalTime: data.busIntervalHalTime,
      })
      return res
    } catch {
      return
    }
  }
  const handleGetBusRoute = async () => {
    try {
      const routeRes = await axios.get(
        `http://52.79.183.211/api/v1/route/map?busId=${busDetail.busId}&cityCode=${station.cityCode}`,
      )
      const routeData = routeRes.data.data.station_list
      setRouteList([])
      Object.keys(routeData).forEach((key) => {
        const newRoute: RouteList = {
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
    console.log(busDetail.busEpName)
  }, [])
  return (
    <div>
      <Header />
      <MainBoard>
        <InfromBoard
          titleWidth={30}
          leftText={busDetail.cityName}
          midText={busDetail.busNumber}
          rightText={busDetail.busType + '버스'}
          backgroundColor={busDetail.busColor}></InfromBoard>
        <MainContainer>
          <LittleBoxComponent>
            <AtomBoxComponentLeft>
              <BusInformBox isLeft={true} stringInBox={'기점'} stringNextToBox={busDetail.busSpName}></BusInformBox>
            </AtomBoxComponentLeft>
            <AtomBoxComponentMid />
            <AtomBoxComponentRight>
              <BusInformBox isLeft={false} stringInBox={'종점'} stringNextToBox={busDetail.busEpName}></BusInformBox>
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
                  (busDetail.busFDTime / 100 < 10 ? '0' : '') +
                  Math.floor(busDetail.busFDTime / 100) +
                  ' : ' +
                  (busDetail.busFDTime % 100 < 10 ? '0' : '') +
                  (busDetail.busFDTime % 100)
                }></BusInformBox>
            </AtomBoxComponentLeft>
            <AtomBoxComponentMid></AtomBoxComponentMid>
            <AtomBoxComponentRight>
              <BusInformBox
                isLeft={false}
                stringInBox={'평일배차간격'}
                stringNextToBox={busDetail.busIntervalTime.toString() + ' 분'}
              />
            </AtomBoxComponentRight>
          </LittleBoxComponent>
          <LittleBoxComponent>
            <AtomBoxComponentLeft>
              <BusInformBox
                isLeft={true}
                stringInBox={'막차'}
                stringNextToBox={
                  (busDetail.busLDTime / 100 < 10 ? '0' : '') +
                  Math.floor(busDetail.busLDTime / 100) +
                  ' : ' +
                  (busDetail.busLDTime % 100 < 10 ? '0' : '') +
                  (busDetail.busLDTime % 100)
                }
              />
            </AtomBoxComponentLeft>
            <AtomBoxComponentMid />
            <AtomBoxComponentRight>
              <BusInformBox
                isLeft={false}
                stringInBox={'주말배차간격'}
                stringNextToBox={busDetail.busIntervalHalTime.toString() + ' 분'}></BusInformBox>
            </AtomBoxComponentRight>
          </LittleBoxComponent>
        </MainContainer>
      </MainBoard>
    </div>
  )
}

export default BusInformPage
