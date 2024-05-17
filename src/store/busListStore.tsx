import { create } from 'zustand'

export interface busContent {
  id: string
  num: string
  type: string
  color: string
  stationsLeft: number
  remainingTime: number
}

interface BusListState {
  buses: Array<busContent>
  setBuses: (list: busContent[]) => void
  addBus: (newBus: busContent) => void
}

export const useBusListStore = create<BusListState>((set) => ({
  buses: [],
  setBuses: (list: busContent[]) =>
    set(() => ({
      buses: list,
    })),
  addBus: (newBus: busContent) =>
    set((state) => {
      if (state.buses.includes(newBus)) {
        return {
          buses: state.buses,
        }
      }
      return {
        buses: [...state.buses, newBus],
      }
    }),
}))
