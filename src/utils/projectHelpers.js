export function getTechnologyFilters(projects) {
  const filters = ['All'];

  projects.forEach((project) => {
    project.techStack.forEach((technology) => {
      if (!filters.includes(technology)) {
        filters.push(technology);
      }
    });
  });

  return filters;
}

export function filterProjectsByTechnology(projects, activeTechnology) {
  if (!activeTechnology || activeTechnology === 'All') {
    return projects;
  }

  return projects.filter((project) => project.techStack.includes(activeTechnology));
}
