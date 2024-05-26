import axios from 'axios'
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/header/search_icon.png'
import { useStationStore } from '../../store/stationStore.tsx'
import SearchResultComponent from './PopupModal.tsx'

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

function SearchInput(): React.JSX.Element {
  const searchTextRef = useRef<string>('')
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal((prev) => !prev)
  }
  const { station } = useStationStore()
  const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => (searchTextRef.current = e.target.value)
  const handleEnterSearch = async (e: KeyboardEvent) => {
    const isEnter = e.key === 'Enter'
    isEnter && (await searchStation())
  }
  const searchStation = async () => {
    //console.log(`http://localhost:8000/api/v1/search?context=${searchTextRef.current}&cityCode=${station.cityCode}`)
    const res = await axios.get(
      `http://localhost:8000/api/v1/search?context=${searchTextRef.current}&cityCode=${station.cityCode}`,
    )
    res.status === 200 && handleModal()
    console.log(res)
  }

  return (
    <SearchBox>
      <SearchTextBox
        type="text"
        placeholder="도착지점 또는 버스 검색"
        onChange={updateSearchText}
        onKeyDown={handleEnterSearch}
      />
      <SearchIcon src={searchIcon} onClick={searchStation} />
      {showModal && <SearchResultComponent onClose={handleModal} />}
    </SearchBox>
  )
}

export default SearchInput
