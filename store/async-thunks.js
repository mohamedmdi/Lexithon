import storeData from "../util/storeData";

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
