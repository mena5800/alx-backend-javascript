const getListStudentIds = (objects) => {
  const ids = [];

  for (const obj of objects) {
    if (obj.id !== undefined) {
      ids.push(obj.id);
    }
  }
  return ids;
};

export default getListStudentIds;
