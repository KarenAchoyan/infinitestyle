import usePrevious from "./usePrevious";

const usePreviousList = (items) => {
  const list = [];
  items.forEach((item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    list.push(usePrevious(item));
  });

  return list;
};

export default usePreviousList;
