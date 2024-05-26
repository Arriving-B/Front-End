import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  height: 30%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 999;
  overflow: hidden;
`

const CloseButton = styled.button`
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

const SearchResultComponent = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export default SearchResultComponent
