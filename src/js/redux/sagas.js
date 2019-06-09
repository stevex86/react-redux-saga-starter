import { spawn } from 'redux-saga/effects'

import Task from './domain/Task/TaskSagas';

export default function* rootSaga() {
  yield spawn(Task);
}
