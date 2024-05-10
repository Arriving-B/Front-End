import styled from 'styled-components'

const Container = styled.div`
  background: white;
  width: 30vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const InnerContainerUnder = styled.div`
  background-color: black;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 0% 10px 10px 10px;
`

const InnerContainerUp = styled.div`
  background-color: white;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const BusNumBox = styled.div`
  background-color: black;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0% 0%;
`

const IInnerContainer2 = styled.div`
  background-color: white;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: end;
`

const BusNum = styled.p`
  color: red;
  font-size: 20px;
  font-weight: bold;
`
const BoundFor = styled.p`
  margin: 0;
  background-color: transparent;
  color: black;
  padding-inline: 10px;
  height: 70%;
  outline: solid 2px black;
  border-radius: 0 10px 0 0;
`
const RealTimeBusLocation = styled.div`
  clip-path: inset(74% 0 0 36%);
`
const WaitMinBox = styled.div`
  background-color: black;
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WaitMin = styled.p`
  color: white;
  font-size: 10px;
  font-weight: bold;
`
function ArrivingBusList() {
  return (
    <Container>
      <InnerContainerUp>
        <BusNumBox>
          <BusNum>5500</BusNum>
        </BusNumBox>
        <IInnerContainer2>
          <BoundFor>ssdffsdfsdfdsfdsfd</BoundFor>
        </IInnerContainer2>
      </InnerContainerUp>

      <InnerContainerUnder>
        <WaitMinBox>
          <WaitMin>6분 후 도착</WaitMin>
        </WaitMinBox>
      </InnerContainerUnder>
    </Container>
  )
}

export default ArrivingBusList
