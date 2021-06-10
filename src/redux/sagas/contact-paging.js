import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/contact";

function* addContact(action) {
  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    const { size } = yield select((state) => state.contact);
    const resultFetched = yield call(api.fetchPaging, 0, size);

    yield put({
      type: "FETCH_CONTACTLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchContactListPaging(action) {
  try {
    const { page, size } = yield select((state) => state.contact);

    const result = yield call(
      api.fetchPaging,
      action.payload ? action.payload.page : page,
      action.payload ? action.payload.size : size
    );
    console.log(result);

    yield put({
      type: "FETCH_CONTACTLIST_PAGING_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* removeContact(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);

    const { page, size } = yield select((state) => state.contact);
    const resultFetched = yield call(api.fetchPaging, page, size);

    yield put({
      type: "FETCH_CONTACTLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyContact(action) {
  try {
    const result = yield call(api.modify, action.payload);

    yield put({
      type: "MODIFY_CONTACT_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* contactSaga() {
  yield takeEvery("ADD_CONTACT", addContact);
  yield takeEvery("REMOVE_CONTACT", removeContact);
  yield takeEvery("MODIFY_CONTACT", modifyContact);
  yield takeLatest("FETCH_CONTACTLIST_PAGING", fetchContactListPaging);
}

export default contactSaga;
