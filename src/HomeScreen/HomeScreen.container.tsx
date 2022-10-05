import { Dispatch } from 'react';
import { connect } from 'react-redux'
import { Action } from 'redux';
import { addBox, deleteBox, changeColor, changeCurrentBox, removeCurrentBox } from '../Redux/actions'
import { HomeScreen } from './HomeScreen'
import { BoxItem } from '../type'
interface StateProps {
  boxReducer: {list: BoxItem[], currentBox: BoxItem};
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    // dispatching actions returned by action creators
    addBox: (id: number, color: string) => dispatch(addBox(id, color)),
    deleteBox: (id: number) => dispatch(deleteBox(id)),
    changeColor: (id: number, color: string) => dispatch(changeColor(id, color)),
    changeCurrentBox: (id: number, color: string) => dispatch(changeCurrentBox(id, color)),
    removeCurrentBox: () => dispatch(removeCurrentBox())
  }
}
const mapStateToProps = (state: StateProps ) => {
  const arr = state.boxReducer.list
  const currentBox = state.boxReducer.currentBox
  return {
    data: arr,
    currentBox
  }
}

export const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
