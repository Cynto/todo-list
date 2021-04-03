const localStorageAdder = (() => {
  const projectsAdder = (projectsArray) => {
    localStorage.setItem('projectsArray', JSON.stringify([projectsArray]));
  };
  const datesAdder = (dateProjectArray) => {
    localStorage.setItem(
      'dateProjectArray',
      JSON.stringify([dateProjectArray]),
    );
  };
  return { projectsAdder, datesAdder };
})();

export default localStorageAdder;
