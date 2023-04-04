export const fetchDataAPI = () => {
  return async (dispatch, getState) => {
    const { appSlice } = getState();

    const fetchData = async () => {
      const response = await storeData({
        username: state.username,
        grade: state.grade,
        trophy: state.trophy,
        gender: state.gender,
      });

      await fetchData();
    };
  };
};
