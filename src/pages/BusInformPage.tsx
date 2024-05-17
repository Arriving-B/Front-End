import styled from "styled-components"; 
import Header from "components/header/Header.tsx";
import InfromBoard from "components/InfromBoard.tsx";
import BusInformBox from "components/BusInform/SmallInformBox.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

const MainContainer = styled.div`
    background-color : white;
    width : 1000px;
    height : 500px;
    display : flex;
    flex-direction : column;
    align-items : center;
`
const LittleBoxComponent = styled.div`
    width : 100%;
    height : 50px;
    display:flex;
    flex-direction :row;
    justify-content : center;
    align-items : center;
    border-radius : 20px;
`
const AtomBoxComponentLeft = styled.div`
    width:50%;
    height : 100%;
    display : flex;
    justify-content:start;
    align-items : center;

`
const AtomBoxComponentMid = styled.div`
    width:50%;
    height : 100%;
    display : flex;
    justify-content:center;
    align-items : center;

`
const AtomBoxComponentRight = styled.div`
    width:50%;
    height : 100%;
    display : flex;
    justify-content : end;
    align-items : center;
    
`
const BusNotionBox = styled.div`
    background-color : #252527;
    width : 80%;
    height : 300px;
    border-radius:10px;
`
interface RouteList {
    RouteList :{
        station_id: number,
		name: string,
		up_down: false,
		order: number
    }
}

function BusInformPage(){
    const [stationId, setStationId] = useState<string>("GGB234001212")
    const [busId, setBusId] = useState<string>("GGB234001736")
    const [busNumber, setBusNumber] = useState<string>("")
    const [cityCode, setCityCode] = useState<number>(31250)
    const [cityName, setCityName] = useState<string>("")
    const [busType, setBusType] = useState<string>("")
    const [busColor, setBusColor] = useState<string>("")
    const [busEpName, setBusEpName] = useState<string>("")
    const [busSpName, setBusSpName] = useState<string>("")
    const [busFDTime, setBusFDTime] = useState<number>(0)
    const [busLDTime, setBusLDTime] = useState<number>(0)
    const [busIntervalTime, setBusIntervalTime] = useState<number>(0)
    const [busIntervalHalTime, setBusIntervalHalTime] = useState<number>(0)
    const [busStationList, setBusStationList] = useState<RouteList[]>()

    const handleInfrom = async()=>{
        try{
            const res = await (await axios.get(`http://localhost:8000/api/v1/route?busId=${busId}&cityCode=${cityCode}`))
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
        }
        catch{return}
    }
    useEffect(()=>{
        handleInfrom()
    },[])
    return (
        <div>
            <Header/>
            <InfromBoard 
                titleWidth={30} 
                leftSubText={cityName}
                midText={busNumber} 
                rightSubText={busType+'버스'}
                backgroundColor={busColor}
            >
            <MainContainer>
                <LittleBoxComponent>
                    <AtomBoxComponentLeft>
                        <BusInformBox isLeft = {true} stringInBox={"기점"} stringNextToBox={busSpName}></BusInformBox>
                    </AtomBoxComponentLeft>
                    <AtomBoxComponentMid/>
                    <AtomBoxComponentRight>
                        <BusInformBox isLeft = {false} stringInBox={"종점"} stringNextToBox={busEpName}></BusInformBox>
                    </AtomBoxComponentRight>
                </LittleBoxComponent>
                <BusNotionBox/>
                <LittleBoxComponent>
                    <AtomBoxComponentLeft>
                        <BusInformBox isLeft = {true} stringInBox={"첫차"} 
                            stringNextToBox={((busFDTime/100<10)?"0":"")+Math.floor(busFDTime/100)+" : "+((busFDTime%100<10)?"0":"")+busFDTime%100 }></BusInformBox>
                    </AtomBoxComponentLeft>
                    <AtomBoxComponentMid>
                    </AtomBoxComponentMid>
                    <AtomBoxComponentRight>
                        <BusInformBox isLeft = {false} stringInBox={"평일배차간격"} stringNextToBox={busIntervalTime.toString()+" 분"}/>
                    </AtomBoxComponentRight>
                </LittleBoxComponent>
                <LittleBoxComponent>
                    <AtomBoxComponentLeft>
                        <BusInformBox isLeft = {true} stringInBox={"막차"} 
                            stringNextToBox={((busLDTime/100<10)?"0":"")+Math.floor(busLDTime/100)+" : "+((busLDTime%100<10)?"0":"")+busLDTime%100}/>
                    </AtomBoxComponentLeft>
                    <AtomBoxComponentMid/>
                    <AtomBoxComponentRight>
                        <BusInformBox isLeft = {false} stringInBox={"주말배차간격"} stringNextToBox={busIntervalHalTime.toString()+" 분"}></BusInformBox>
                    </AtomBoxComponentRight>
                </LittleBoxComponent>
            </MainContainer>
            </InfromBoard>

        </div>
    )
}

export default BusInformPage;