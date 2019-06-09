import {
  call,
  put,
  spawn,
  takeEvery
} from 'redux-saga/effects';

import { TasksLoaded } from './TaskActions';

const dummyTasks = [
  { id: 1, title: 'Learn React-Redux' },
  { id: 2, title: 'Learn Redux-Saga' }
];

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

function* fetchTasks() {
  yield call(sleep, 2500);
  yield put(TasksLoaded(dummyTasks))
}

function* watchFetchTasks() {
  yield takeEvery('FETCH_TASKS', fetchTasks);
}

export default function* rootTaskSaga() {
  yield spawn(watchFetchTasks);
}