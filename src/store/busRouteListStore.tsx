import { create } from 'zustand'

export interface RouteList {
  stationId: number
  name: string
  upDown: false
  order: number
}

interface BusRouteListState {
  routeList: Array<RouteList>
  setRouteList: (list: RouteList[]) => void
  addRouteList: (newRoute: RouteList) => void
}

export const useBusrouteListStore = create<BusRouteListState>((set) => ({
  routeList: [],
  setRouteList: (list: RouteList[]) =>
    set(() => ({
      routeList: list,
    })),
  addRouteList: (newRoute: RouteList) =>
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
