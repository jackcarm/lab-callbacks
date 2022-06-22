const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.listFilmTitles = function (films) {
  const titles = [];
  films.forEach((film) => {
    titles.push(film.title)
  })
  return titles;
}

Cinema.prototype.findByTitle = function (films, title) {
  let result = films.find((film) => {
    return film.title === title
  })
  return result;
}

Cinema.prototype.filterByGenre = function (films, genre) {
  let result = films.filter((film) => {
    return film.genre === genre
  })
  return result;
}

Cinema.prototype.filterByYear = function (films, year) {
  let result = films.filter((film) => {
    return film.year === year
  })
  if (result === []) {
    return result = []
  }
  return result;
}

Cinema.prototype.filterByLength = function (films, length) {
  let result = films.filter((film) => {
    return film.length > length
  })
  return result;
}

Cinema.prototype.sumRunningTime = function (films) {
  const total = films.reduce((runningTime, film) => {
    return runningTime + film.length
  }, 0)
  return total
}

Cinema.prototype.filmsByProperty = function (films, property, value) {

  let result = films.filter((film) => {
    if (property === 'genre') {
      filmProperty = film.genre
    } else if (property === 'year') {
      filmProperty = film.year
    }
    return filmProperty === value
  })
  return result;
}

module.exports = Cinema;
