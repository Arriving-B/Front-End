import { create } from 'zustand'

export interface BusDetailContent {
  busId: string
  busNumber: string
  cityCode: number
  cityName: string
  busType: string
  busColor: string
  busEpName: string
  busSpName: string
  busFDTime: number
  busLDTime: number
  busIntervalTime: number
  busIntervalHalTime: number
}

interface BusDetailState {
  busDetail: BusDetailContent
  setBusDetail: (newBusDetail: BusDetailContent) => void
  setBusId: (newBusId: string) => void
}

export const useBusDetailStore = create<BusDetailState>((set) => ({
  busDetail: {
    busId: '',
    busNumber: '',
    cityCode: 0,
    cityName: '',
    busType: '',
    busColor: '',
    busEpName: '',
    busSpName: '',
    busFDTime: 0,
    busLDTime: 0,
    busIntervalTime: 0,
    busIntervalHalTime: 0,
  },
  setBusDetail: (newBusDetail: BusDetailContent) =>
    set(() => ({
      busDetail: {
        busId: newBusDetail.busId,
        busNumber: newBusDetail.busNumber,
        cityCode: newBusDetail.cityCode,
        cityName: newBusDetail.cityName,
        busType: newBusDetail.busType,
        busColor: newBusDetail.busColor,
        busEpName: newBusDetail.busEpName,
        busSpName: newBusDetail.busSpName,
        busFDTime: newBusDetail.busFDTime,
        busLDTime: newBusDetail.busLDTime,
        busIntervalTime: newBusDetail.busIntervalTime,
        busIntervalHalTime: newBusDetail.busIntervalHalTime,
      },
    })),
  setBusId: (newBusId: string) =>
    set((state) => ({
      busDetail: { ...state.busDetail, busId: newBusId },
    })),
}))
