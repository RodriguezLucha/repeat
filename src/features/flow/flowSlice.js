import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { v1 as uuid} from 'uuid'; 

const flowAdapter = createEntityAdapter();

export const flowSlice = createSlice({
  name: 'flow',
  initialState: flowAdapter.getInitialState(),
  reducers: {
    addFlow: (state, action) => {
      let {name, id} = action.payload;
      id = id ? id : uuid();
      flowAdapter.upsertOne(state, {name, id});
    },
    removeFlow: (state, action) => {
       flowAdapter.removeOne(state, action.payload);
    },
  },
});

export const { addFlow, removeFlow } = flowSlice.actions;

export const { 
  selectById: selectFlowById,
  selectIds: selectFlowIds,
  selectEntities: selectFlowEntities,
  selectAll: selectAllFlows,
  selectTotal: selectTotalFlows } = flowAdapter.getSelectors(state => state.flow);

export default flowSlice.reducer;
