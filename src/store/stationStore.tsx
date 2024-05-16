import { create } from 'zustand'

export interface stationContent {
  id: string
  name: string
  cityCode: number
  latitude: number
  longitude: number
}

interface StationState {
  station: stationContent
  setStation: (data: stationContent) => void
}

export const useStationStore = create<StationState>((set) => ({
  station: {
    id: 'GGB234001212',
    name: '태전힐스테이트6지구',
    cityCode: 31250,
    latitude: 37.3778333,
    longitude: 127.2294333,
  },
  setStation: (data: stationContent) =>
    set(() => ({
      station: data,
    })),
}))
