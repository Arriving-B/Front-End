import { create } from 'zustand'

export interface routeList {
  stationId: number
  name: string
  upDown: false
  order: number
}

interface BusrouteListState {
  routeList: Array<routeList>
  setRouteList: (list: routeList[]) => void
  addRouteList: (newRoute: routeList) => void
}

export const useBusrouteListStore = create<BusrouteListState>((set) => ({
  routeList: [],
  setRouteList: (list: routeList[]) =>
    set(() => ({
      routeList: list,
    })),
  addRouteList: (newRoute: routeList) =>
    set((state) => {
      if (state.routeList.includes(newRoute)) {
        return {
          routeList: state.routeList,
        }
      }
      return {
        routeList: [...state.routeList, newRoute],
      }
    }),
}))
