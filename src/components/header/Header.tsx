import gpsIconOff from 'assets/header/Gps_icon_off.png'
import gpsIconOn from 'assets/header/Gps_icon_on.png'
import mainIcon from 'assets/header/main_icon.png'
import resetIcon from 'assets/header/reset_icon.png'
import searchIcon from 'assets/header/search_icon.png'
import settingButton from 'assets/header/setting_icon.png'
import React, { useState } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'


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
  & img {
    width: 50px;
    height: 50px;
  }
`

const LocationBox = styled.div`
  position: relative;
  background-color: white;
  width: 220px;
  height: 5.8vh;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 clamp(5px, 25px, 25px) 0 clamp(0px, 0px, 5px);
  text-align: center;
`
const LocationTextBox = styled.div`
    width: 175px;
    height: 40px;
    margin: 0 0 0 25px;
    color:black;
    font-size:x-small;
    text-align :center;

`
const LittleLocationTextBox = styled.p`
    height: 20px;
    margin-block-start : 0;
    margin: 0;
    font-size:x-small;

`
const BigLocationTextBox = styled.h6`
    height: 20px;
    margin-block-start : 0;
    margin: 0;
    font-size:small;
`
const ResetButton = styled.span`
  margin-right: 8px;
  width: 25px;
  height: 25px;
  position: relative;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & img {
    width: 25px;
    height: 25px;
  }
  &:hover {
    animation-duration: 0.8s;
    animation-name: slidein;

    @keyframes slidein {
      15% {
        transform: rotate(40deg);
      }

      45% {
        transform: rotate(-40deg);
      }

      60% {
        transform: rotate(20deg);
      }

      75% {
        transform: rotate(-20deg);
      }

      90% {
        transform: rotate(10deg);
      }

      100% {
        transform: rotate(0);
      }
    }
  }
  &:active {
    transition: all 4s;
    transform: rotate(-360deg);
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
  cursor: pointer;
  & img {
    width: 30px;
    height: 30px;
  }
`


const HeaderRightComponent = styled.div`
    width:50%;
    display:flex;
    flex-direction:row;
    align-items:center;
    border-left:150px;
`

const SearchBox = styled.div`
  position: relative;
  background-color: white;
  width: clamp(400px, 70%, 700px);
  height: 6vh;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left: clamp(10px, 5%, 80px);
`
const SearchTextBox = styled.input`
  width: clamp(300px, 100%, 600px);
  text-align: start;
  margin: 0 10px 0 12px;
  background-color: white;
  color: gray;
  border-color: transparent;
  outline: none;
`
const SearchIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  right: 8px;
  cursor: pointer;
`

const SettingButton = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin-left: 60px;
  margin-right: 10px;
  cursor: pointer;
  & img {
    width: 30px;
    height: 30px;
  }
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

function Header(): React.JSX.Element {
  const [isGps, setIsGps] = useState<boolean>(true)
  const handleGps = () => setIsGps(!isGps)
  const [inputText, setInputText] = useState('')
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false)
  const researchNearestStation = () => {
    alert('가장 가까운 정류장 새로고침')
  }

  const handleSearch = () => {
    alert(`${inputText} 입력완료`)
  }
  const handleInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  const getFeedBack = () => {
    Swal.fire({
      title: 'Submit your FeedBack',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
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
      if (result.isConfirmed) {
        if (result.value !== '') {
          Toast.fire({
            icon: 'success',
            title: `${result.value}이 정상적으로 입력됨`,
          })
        } else {
          Toast.fire({
            icon: 'error',
            title: `피드백 내용이 없어 입력되지 않음`,
          })
        }
      }
    })
  }

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
          <ResetButton onClick={researchNearestStation}>
            <img src={resetIcon} />
          </ResetButton>
        </LocationBox>
        <GpsButton onClick={handleGps}>
          <img src={isGps ? gpsIconOn : gpsIconOff} />
        </GpsButton>
      </HeaderLeftComponent>
      <HeaderRightComponent>
        <SearchBox>
          <SearchTextBox
            type="text"
            placeholder="도착지점 또는 버스 검색"
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleInput}
          />
          <SearchIcon src={searchIcon} onClick={handleSearch} />
        </SearchBox>
        <SettingButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
          <img src={settingButton}></img>
        </SettingButton>
      </HeaderRightComponent>
      <SideMenuBar rightlocation={isSideMenuOpen ? 0 : -300}>
        <SendFeedbackButton onClick={getFeedBack}>피드백 전송</SendFeedbackButton>
      </SideMenuBar>
    </HeaderComponent>
  )
}

export default Header;