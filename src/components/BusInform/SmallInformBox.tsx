import React from 'react'
import styled from 'styled-components'

interface BusInformProps {
  isLeft?: boolean
  stringInBox?: string
  stringNextToBox?: string
}

const LittleInformBox = styled.div`
  margin: 0 10px 0 10px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SmallInformBox = styled.div`
  background-color: #252527;
  display: flex;
  align-items: center;
  width: max-content;
  height: 25px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
`
const TextBox = styled.div`
  color: black;
  height: 30px;
  padding: 0 5px 0 5px;
  display: flex;
  align-items: center;
`
const BusInformBox: React.FC<BusInformProps> = ({ isLeft = true, stringInBox, stringNextToBox }) => {
  return isLeft ? (
    <div>
      <LittleInformBox>
        <SmallInformBox>
          <h6>{stringInBox}</h6>
        </SmallInformBox>
        <TextBox>
          <h6>{stringNextToBox}</h6>
        </TextBox>
      </LittleInformBox>
    </div>
  ) : (
    <div>
      <LittleInformBox>
        <TextBox>
          <h6>{stringNextToBox}</h6>
        </TextBox>
        <SmallInformBox>
          <h6>{stringInBox}</h6>
        </SmallInformBox>
      </LittleInformBox>
    </div>
  )
}
export default BusInformBox
