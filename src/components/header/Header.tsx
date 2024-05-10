import gpsIconOff from 'assets/header/Gps_icon_off.png'
import gpsIconOn from 'assets/header/Gps_icon_on.png'
import mainIcon from 'assets/header/main_icon.png'
import resetIcon from 'assets/header/reset_icon.png'
import searchIcon from 'assets/header/search_icon.png'
import settingButton from 'assets/header/setting_icon.png'
import { useState } from 'react'
import styled from 'styled-components'

const HeaderComponent = styled.div`
  position: fixed;
  background-color: #272725;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
`
const HeaderLeftComponent = styled.div`
  width: 50%;
  margin-right: 5%;
  margin-left: clamp(5px, 5%, 5%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: start;
`
const MainIcon = styled.span`
  position: relative;
  width: 50px;
  height: 45px;
  margin: 0 5px 0 5px;
  & img {
    width: 50px;
    height: 45px;
  }
`

const LocationBox = styled.div`
  position: relative;
  background-color: white;
  width: 220px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 clamp(5px, 8px, 8px) 0 clamp(10px, 10px, 15px);
  text-align: center;
`
const LocationTextBox = styled.div`
  width: 175px;
  height: 40px;
  margin: 0 0 0 25px;
  color: black;
  font-size: x-small;
  text-align: center;
`
const LittleLocationTextBox = styled.p`
  height: 20px;
  margin-block-start: 0;
  margin: 0;
  font-size: x-small;
`
const BigLocationTextBox = styled.h6`
  height: 20px;
  margin-block-start: 0;
  margin: 0;
  font-size: small;
`
const ResetButton = styled.span`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 20px;
    height: 20px;
  }
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
  & img {
    width: 30px;
    height: 30px;
  }
`

const HeaderRightComponent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 150px;
`

const SearchBox = styled.div`
  position: relative;
  background-color: white;
  width: clamp(400px, 70%, 700px);
  height: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left: clamp(10px, 15%, 80px);
`
const SearchTextBox = styled.h5`
  width: clamp(300px, 100%, 600px);
  text-align: start;
  margin: 0 10px 0 15px;
  color: grey;
`
const SearchIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  right: 8px;
`

const SettingButton = styled.span`
  position: relative;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  & img {
    width: 30px;
    height: 30px;
  }
`

function Header() {
  const [isGps, setIsGps] = useState<boolean>(true)

  const handleGps = () => setIsGps(!isGps)

  return (
    <HeaderComponent>
      <HeaderLeftComponent>
        <MainIcon>
          <img src={mainIcon} />
        </MainIcon>
        <LocationBox>
          <LocationTextBox>
            <LittleLocationTextBox>가장 가까운 정류장</LittleLocationTextBox>
            <BigLocationTextBox>어쩔티비</BigLocationTextBox>
          </LocationTextBox>
          <ResetButton>
            <img src={resetIcon} />
          </ResetButton>
        </LocationBox>
        <GpsButton onClick={handleGps}>
          <img src={isGps ? gpsIconOn : gpsIconOff} />
        </GpsButton>
      </HeaderLeftComponent>
      <HeaderRightComponent>
        <SearchBox>
          <SearchTextBox>도착지점 또는 버스 검색</SearchTextBox>
          <SearchIcon src={searchIcon} />
        </SearchBox>
        <SettingButton>
          <img src={settingButton}></img>
        </SettingButton>
      </HeaderRightComponent>
    </HeaderComponent>
  )
}

export default Header
