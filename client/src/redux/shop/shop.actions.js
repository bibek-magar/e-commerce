import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from "./shop.types";

export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTIONS_START
});
export const fetchCollectionSuccess = collectionMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = message => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: message
});

export const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
