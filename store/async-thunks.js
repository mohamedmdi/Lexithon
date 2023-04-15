import storeData from "../util/storeData";
import getData from "../util/getData";

export const updateUserInfoStorage = () => {
  return async (dispatch, getState) => {
    const { user } = getState();
    await storeData({
      username: user.username,
      grade: user.grade,
      gender: user.gender,
      trophy: user.trophy,
    });
  };
};

export const updateTrophy = () => {
  return async (dispatch, getState) => {
    const { user } = getState();
    await storeData({
      username: user.username,
      grade: user.grade,
      gender: user.gender,
      trophy: user.trophy,
    });
    console.log('updateTrophy')

    console.log(await getData());
  };
};
