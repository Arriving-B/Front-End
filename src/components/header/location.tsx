import React from 'react'
import styled from 'styled-components'
import resetIcon from '../../assets/header/reset_icon.png'

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

function Location({ stationName }: { stationName: string }): React.JSX.Element {
  const researchNearestStation = () => {
    alert('가장 가까운 정류장 새로고침')
  }

  return (
    <LocationBox>
      <LocationTextBox>
        <LittleLocationTextBox>가장 가까운 정류장</LittleLocationTextBox>
        <BigLocationTextBox>{stationName}</BigLocationTextBox>
      </LocationTextBox>
      <ResetButton onClick={researchNearestStation}>
        <img src={resetIcon} alt="reset" />
      </ResetButton>
    </LocationBox>
  )
}
export default Location
