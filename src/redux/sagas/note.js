import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/note";

function* addNote(action) {
  console.log("--sagas: add Note --");
  console.log(action);

  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    yield put({
      type: "ADD_NOTE_SUCCEEDED",
      payload: { id: result.data.id, ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchNoteList(action) {
  console.log("--sagas: fetch Notelist --");
  console.log(action);

  try {
    const result = yield call(api.fetch);
    console.log(result);
    yield put({ type: "FETCH_NOTELIST_SUCCEEDED", payload: result.data });
  } catch (e) {
    alert(e.message);
  }
}

function* removeNote(action) {
  console.log("--sagas: remove Note --");
  console.log(action);

  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);

    yield put({
      type: "REMOVE_NOTE_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyNote(action) {
  console.log("--sagas: modify Note --");
  console.log(action);

  try {
    const result = yield call(api.modify, action.payload);
    console.log(result);

    yield put({
      type: "MODIFY_NOTE_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* noteSaga() {
  yield takeEvery("ADD_NOTE", addNote);
  yield takeEvery("REMOVE_NOTE", removeNote);
  yield takeEvery("MODIFY_NOTE", modifyNote);
  yield takeLatest("FETCH_NOTELIST", fetchNoteList);
}

export default noteSaga;
