import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/note";

function* addNote(action) {
  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    const { size } = yield select((state) => state.note);
    const resultFetched = yield call(api.fetchPaging, 0, size);

    yield put({
      type: "FETCH_NOTELIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchNoteListPaging(action) {
  try {
    const { page, size } = yield select((state) => state.note);

    const result = yield call(
      api.fetchPaging,
      action.payload ? action.payload.page : page,
      action.payload ? action.payload.size : size
    );
    console.log(result);

    yield put({
      type: "FETCH_NOTELIST_PAGING_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* removeNote(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);

    const { page, size } = yield select((state) => state.note);
    const resultFetched = yield call(api.fetchPaging, page, size);

    yield put({
      type: "FETCH_NOTELIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyNote(action) {
  try {
    const result = yield call(api.modify, action.payload);

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
  yield takeLatest("FETCH_NOTELIST_PAGING", fetchNoteListPaging);
}

export default noteSaga;
