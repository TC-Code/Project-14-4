var movies = [
  {
    id: 1,
    title: "Skazani na Shawshank (1994)",
    originTitle: "The Shawshank Redemption",
    director: "Frank Darabont",
    poster: "./images/1.jpg"
  },
  {
    id: 2,
    title: "Nietykalni (2011)",
    originTitle: "Intouchables",
    director: "Olivier Nakache, Eric Toledano",
    poster: "./images/2.jpg"
  },
  {
    id: 3,
    title: "Zielona mila (1999)",
    originTitle: "The Green Mile",
    director: "Frank Darabont",
    poster: "./images/3.jpg"
  },
  {
    id: 4,
    title: "Ojciec chrzestny (1972)",
    originTitle: "The Godfather",
    director: "Francis Ford Coppola",
    poster: "./images/4.jpg"
  },
  {
    id: 5,
    title: "Dwunastu gniewnych ludzi (1957)",
    originTitle: "12 Angry Men",
    director: "Sidney Lumet",
    poster: "./images/5.jpg"
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      "li",
      {},
      React.createElement(MovieTitle, { title: this.props.movie.title }),
      React.createElement(MovieOriginTitle, {
        originTitle: this.props.movie.originTitle
      }),
      React.createElement(MovieDirector, {
        director: this.props.movie.director
      }),
      React.createElement(MoviePoster, {
        poster: this.props.movie.poster,
        imgDisc: this.props.movie.title
      }),
      React.createElement(MovieLine, { line: this.props.movie.line })
    );
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("h2", {}, this.props.title);
  }
});

var MovieOriginTitle = React.createClass({
  propTypes: {
    originTitle: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("p", {}, this.props.originTitle);
  }
});

var MovieDirector = React.createClass({
  propTypes: {
    director: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("p", {}, this.props.director);
  }
});

var MoviePoster = React.createClass({
  propTypes: {
    poster: React.PropTypes.object.isRequired,
    imgDisc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("img", {
      src: this.props.poster,
      alt: this.props.imgDisc
    });
  }
});

var MovieLine = React.createClass({
  propTypes: {
    line: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement("hr", {}, this.props.line);
  }
});

var MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function() {
    var MoviesElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {
        key: movie.id,
        movie: movie
      });
    });
    return React.createElement("ul", {}, MoviesElements);
  }
});

var element = React.createElement(MoviesList, { movies: movies });
ReactDOM.render(element, document.getElementById("app"));
