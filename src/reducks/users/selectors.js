import { createSelector } from "reselect";

const usersSelector = (state) => state.users; //store에서 관리하는 state중에 user에 관한 정보

export const getIsSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);

export const getUserId = createSelector([usersSelector], (state) => state.uid);
//2반쩨 인자는 usersSelector가 반환하는 값이라고 생각하면됨. state.users => state.users.uid랑 같음.
//이걸 쓰면 다른 컴포넌트에서 state를 변환해도 변환한값을 그떄그떄 받아오기 편하다.

export const getUsername = createSelector(
  [usersSelector],
  (state) => state.username
);
