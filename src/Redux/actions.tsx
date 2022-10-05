import { ADD_BOX, DELETE_BOX, CHANGE_CURRENT_BOX, CHANGE_COLOR, REMOVE_CURRENT_BOX } from './actionTypes'

export const addBox = (id: number, color: string) => ({
  type: ADD_BOX,
  payload: { id, color }
})

export const deleteBox = (id: number) => ({
  type: DELETE_BOX,
  payload: { id }
})

export const changeColor = (id: number, color: string) => ({
  type: CHANGE_COLOR,
  payload: { id, color }
})

export const changeCurrentBox = (id: number, color: string) => ({
  type: CHANGE_CURRENT_BOX,
  payload: { id, color }
})

export const removeCurrentBox = () => ({
  type: REMOVE_CURRENT_BOX
})
