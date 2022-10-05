/* eslint-disable import/no-anonymous-default-export */
import { ADD_BOX, DELETE_BOX, CHANGE_CURRENT_BOX, CHANGE_COLOR, REMOVE_CURRENT_BOX } from '../actionTypes'
import { BoxItem } from '../../type'
const startData: BoxItem[] = [{ id: Math.random(), color: 'red' }, { id: Math.random(), color: 'orange' }, { id: Math.random(), color: 'blue' }, { id: Math.random(), color: 'yellow' } , { id: Math.random(), color: 'yellow' }]
const initialState : {list: BoxItem[], currentBox: BoxItem | {}} = {
  list: startData,
  currentBox: {},
}

interface AddBoxAction {
  type: 'ADD_BOX',
  payload: {id: number, color: string}
}

interface DeleteBoxAction {
  type: 'DELETE_BOX',
  payload: {id: number}
}

interface ChangeCurrentBoxAction {
  type: 'CHANGE_CURRENT_BOX',
  payload: {id: number, color: string}
}

interface ChangeColorAction {
  type: 'CHANGE_COLOR',
  payload: {id: number, color: string}
}

interface RemoveCurrentBoxAction {
  type: 'REMOVE_CURRENT_BOX'
}

type Action = AddBoxAction | DeleteBoxAction | ChangeCurrentBoxAction | ChangeColorAction | RemoveCurrentBoxAction
export default function (state = initialState, action : Action) {
  switch (action.type) {
    case ADD_BOX: {
      const { id, color } = action.payload
      return {
        ...state,
        list: [...state.list, { id, color }]
      }
    }
    case DELETE_BOX: {
      const { id } = action.payload
      return {
        list: [...state.list.filter(item => item.id !== id)],
        currentBox: {}
      }
    }
    case CHANGE_CURRENT_BOX: {
      const { id, color } = action.payload
      return {
        ...state,
        currentBox: { id, color}
      }
    }
    case CHANGE_COLOR: {
      const { id, color } = action.payload
      return {
        list: [...state.list.map(item => item.id === id ? { id, color } : item)],
        currentBox: { id, color}
      }
    }
    case REMOVE_CURRENT_BOX: {
      return {
        ...state,
        currentBox: {}
      }
    }
    default:
      return state
  }
}
