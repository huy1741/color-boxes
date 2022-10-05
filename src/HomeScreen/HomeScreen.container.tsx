import { Dispatch } from 'react';
import { connect } from 'react-redux'
import { Action } from 'redux';
import { addBox, deleteBox, changeColor, changeCurrentBox, removeCurrentBox } from '../Redux/actions'
import { HomeScreen } from './HomeScreen'
import { BoxItem } from '../type'
interface StateProps {
  boxReducer: {list: BoxItem[], currentBox: BoxItem, singleColor: string};
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    // dispatching actions returned by action creators
    addBox: (id: number, color: string) => dispatch(addBox(id, color)),
    deleteBox: (id: number) => dispatch(deleteBox(id)),
    changeColor: (color: string) => dispatch(changeColor(color)),
    changeCurrentBox: (id: number, color: string) => dispatch(changeCurrentBox(id, color)),
    removeCurrentBox: () => dispatch(removeCurrentBox())
  }
}
const mapStateToProps = (state: StateProps ) => {
  const arr = state.boxReducer.list
  const currentBox = state.boxReducer.currentBox
  const singleColor = state.boxReducer.singleColor
  return {
    data: arr,
    currentBox,
    singleColor
  }
}

export const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
