import styled from 'styled-components'

const Container = styled.div`
  margin: 20px;
  width: 80%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InnerContainerUp = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const InnerContainerUnder = styled.div`
  background-color: #252527;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-radius: 0% 10px 10px 10px;
`

const BusNumBox = styled.div`
  background-color: #252527;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0% 0%;
`

const IInnerContainer2 = styled.div`
  background-color: white;
  width: 75%;
  height: 100%;
  display: flex;
  align-items: end;
`

const BusNum = styled.p`
  color: red;
  font-size: 1.6rem;
  font-weight: bold;
`
const BoundFor = styled.p`
  margin: 0;
  background-color: transparent;
  color: #252527;
  padding-inline: 10px;
  height: 70%;
  outline: solid 4px #252527;
  border-radius: 0 10px 0 0;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WaitMinBox = styled.div`
  background-color: #252527;
  width: 25%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WaitMin = styled.p`
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
`
const InnerContainerUnderRight = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RouteNavigationContainer = styled.div`
  background-color: transparent;
  width: 95%;
  height: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`
const Node = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  & p {
    color: white;
    margin: 0;
    margin-bottom: 5px;
    font-size: 0.7rem;
    font-weight: bold;
    white-space: nowrap;
  }
`
const NodePoint = styled.div<{ nodeColor: string }>`
  width: 25px;
  height: 25px;
  background-color: white;
  border: solid 5px ${(props) => props.nodeColor};
  border-radius: 100%;
`

function ArrivingBusList() {
  return (
    <Container>
      <InnerContainerUp>
        <BusNumBox>
          <BusNum>5500</BusNum>
        </BusNumBox>
        <IInnerContainer2>
          <BoundFor>거여역3번출구.현대2차아파트 방면</BoundFor>
        </IInnerContainer2>
      </InnerContainerUp>

      <InnerContainerUnder>
        <WaitMinBox>
          <WaitMin>6분 후 도착</WaitMin>
        </WaitMinBox>
        <InnerContainerUnderRight>
          <RouteNavigationContainer>
            <Node>
              <p>거여역6번출구</p>
              <NodePoint nodeColor={'#f25555'} />
            </Node>
            <Node>
              <NodePoint nodeColor={'#55d055'} />
            </Node>
            <Node>
              <NodePoint nodeColor={'#55d055'} />
            </Node>
            <Node>
              <NodePoint nodeColor={'#55d055'} />
            </Node>
          </RouteNavigationContainer>
        </InnerContainerUnderRight>
      </InnerContainerUnder>
    </Container>
  )
}

export default ArrivingBusList
