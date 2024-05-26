import gpsIconOff from 'assets/header/Gps_icon_off.png'
import gpsIconOn from 'assets/header/Gps_icon_on.png'
import mainIcon from 'assets/header/main_icon.png'
import settingButton from 'assets/header/setting_icon.png'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Swal, { SweetAlertOptions } from 'sweetalert2'
import useGeolocation from '../../hooks/useGeolocation.tsx'
import { stationContent, useStationStore } from '../../store/stationStore.tsx'
import Location from './location.tsx'
import SearchInput from './search-input.tsx'

const HeaderComponent = styled.div`
  position: fixed;
  background-color: #252527;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
`
const HeaderLeftComponent = styled.div`
  width: 50%;
  margin-right: 5%;
  margin-left: clamp(0px, 2%, 5%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: start;
`
const MainIcon = styled.span`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 30px 0 10%;
  cursor: pointer;
`

const GpsButton = styled.span`
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 100px;
  margin-left: clamp(5px, 7px, 10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const HeaderRightComponent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 150px;
`

const SettingButton = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin-left: 60px;
  margin-right: 10px;
  cursor: pointer;
  background-image: url('${settingButton}');
  &:hover {
    animation-duration: 2s;
    animation-name: slidein;

    @keyframes slidein {
      100% {
        transform: rotate(720deg);
      }
    }
  }
`

const SideMenuBar = styled.div<{ rightlocation: number }>`
  width: 240px;
  height: 14%;
  background: transparent;
  position: fixed;
  top: 10vh;
  right: ${(props) => props.rightlocation}px;
  z-index: 1;
  transition: all 0.35s;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const SendFeedbackButton = styled.button`
  width: 50%;
  height: 30%;
  background: #252527;
  margin-left: 33px;
  color: white;
  font-weight: bold;
  font-size: 10px;
`

type StationType = {
  station_id: string
  name: string
  city_code: number
  latitude: number
  longitude: number
}

function Header(): React.JSX.Element {
  const [isGps, setIsGps] = useState<boolean>(true)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false)
  const [isSendFeedback, setIsSendFeedback] = useState<boolean>(false)
  const [busId, setBusId] = useState<number>()
  const [missTime, setMissTime] = useState<number>()

  const { station, setStation } = useStationStore()
  const location = useGeolocation()

  useEffect(() => {
    const getStation = async () => {
      if (!location.loaded) return

      const { lng: longitude, lat: latitude } = location.coordinates!
      const { data } = await axios.get<{ data: StationType }>(
        `http://localhost:8000/api/v1/station?lat=${latitude}&lon=${longitude}`,
      )
      const newStation: stationContent = {
        id: data.data.station_id,
        name: data.data.name,
        cityCode: data.data.city_code,
        latitude: data.data.latitude,
        longitude: data.data.longitude,
      }
      setStation(newStation)
    }
    getStation()
  }, [location])

  const getFeedBack = async () => {
    const res = await Swal.fire({
      title: 'Submit your FeedBack',
      input: 'text',
      inputAttributes: { autocapitalize: 'off' },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      inputPlaceholder: 'bus_id, miss_time',
    })

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    })

    const [busId, missTime] = res.value.split(',')
    setBusId(busId)
    setMissTime(missTime)
    console.log(busId, missTime)
    await sendFeedBack()

    console.log(res.isConfirmed)
    console.log(res.value)
    console.log(isSendFeedback)

    const isValid = res.isConfirmed && res.value //&& isSendFeedback
    const alertOption: SweetAlertOptions = isValid
      ? { icon: 'success', title: `${res.value}이 정상적으로 입력됨` }
      : { icon: 'error', title: '잘못된 형식' }

    await Toast.fire(alertOption)
  }

  const sendFeedBack = async () => {
    //console.log(`http://localhost:8000/api/v1/search?context=${searchTextRef.current}&cityCode=${station.cityCode}`)
    const sendRes = await axios.post(
      `http://localhost:8000/api/v1/feedback`,
      {
        miss_time: 1,
        station_id: station.id,
        bus_id: 'BTTT0003',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
    setIsSendFeedback(sendRes.status === 200)
  }

  return (
    <HeaderComponent>
      <HeaderLeftComponent>
        <MainIcon>
          <img src={mainIcon} alt="logo" width={50} height={50} />
        </MainIcon>
        <Location stationName={station.name} />
        <GpsButton onClick={() => setIsGps(!isGps)}>
          <img src={isGps ? gpsIconOn : gpsIconOff} alt="gps" width={30} height={30} />
        </GpsButton>
      </HeaderLeftComponent>
      <HeaderRightComponent>
        <SearchInput />
        <SettingButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
          <img src="assets/header/setting_icon.png" width={30} height={30} alt="setting" />
        </SettingButton>
      </HeaderRightComponent>
      <SideMenuBar rightlocation={isSideMenuOpen ? 0 : -300}>
        <SendFeedbackButton onClick={getFeedBack}>피드백 전송</SendFeedbackButton>
      </SideMenuBar>
    </HeaderComponent>
  )
}

export default Header
