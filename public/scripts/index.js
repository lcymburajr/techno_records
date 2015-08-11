var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header navbar-down">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img className="logo" src="images/logo.png" alt="Techno Records Logo"/></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">artist</a></li>
                <li><a href="#">news</a></li>
                <li><a href="#">contact</a></li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }
});

var HeroImage = React.createClass({
  render: function() {
    return (
      <div className="hero-image">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <a href=""><img className="img-responsive hero-image-text" src="images/deadmau5_just_signed.png" alt="Deadmau5 Just Signed"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Container = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-sm-8 col-md-6">
                <FeaturedArtist/>
                <NewsContainer url="http://demo2610719.mockable.io/news" />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <TweetsContainer url="http://demo2610719.mockable.io/tweets" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var FeaturedArtist = React.createClass({
  render: function() {
    return (
      <div className="featured-artist">
        <h1>featured artist</h1>
        <img className="img-responsive" src="images/featured_artist.jpg" alt="Featured Artist Skrillex"/>
        <div className="featured-song">
          <h3 className="techno-blue">featured song</h3>
          <button><img src="images/play_btn.png" alt="Play Button"/></button>
          <img src="images/song.png" alt="song"/>
          <hr/>
        </div>
      </div>
    );
  }
});

var TweetsContainer = React.createClass({
  loadTweetsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadTweetsFromServer();
    // setInterval(this.loadTweetsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="tweets-container">
        <h1>tweets</h1>
        <h2 className="techno-blue">@TechnoRecords</h2>
        <TweetsList data={this.state.data} />
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function() {
    return (
      <div className="tweet">
        <p>{this.props.msg}</p>
      </div>
    );
  }
});

var TweetsList = React.createClass({
  render: function() {
    var tweetNodes = this.props.data.map(function (tweet, index) {
      return (
        <Tweet msg={tweet.msg} key={index}/>
      );
    });
    return (
      <p>
        {tweetNodes}
      </p>
    );
  }
});

var NewsContainer = React.createClass({
  loadNewsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadNewsFromServer();
    // setInterval(this.loadNewsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="news-container">
        <h1 className="pull-left">news</h1>
        <p><a href="" className="techno-pink pull-right">view all</a></p>
        <div className="clearfix"></div>
        <NewsList data={this.state.data} />
      </div>
    );
  }
});

var News = React.createClass({
  render: function() {
    return (
      <div className="news-title">
        <h2>{this.props.headline}</h2>
        <p>{this.props.children}</p>
        <a href="" className="techno-pink">more...</a>
      </div>
    );
  }
});

var NewsList = React.createClass({
  render: function() {
    var newsNodes = this.props.data.map(function (news, index) {
      return (
        <News headline={news.headline} key={index}>
          {news.story}
        </News>
      );
    });
    return (
      <div>
        {newsNodes}
      </div>
    );
  }
});

var date = new Date();
var year = date.getFullYear();

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="pull-left">&copy; {year} Techno Records</p>
              <div className="social-icons">
                <img src="images/social_icons/facebook.png" alt="Facebook Icon"/>
                <img src="images/social_icons/twitter.png" alt="Twitter Icon"/>
                <img src="images/social_icons/google_plus.png" alt="Google Plus Icon"/>
                <img src="images/social_icons/mail.png" alt="Mail Icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <div className="content">
    <Navbar/>
    <HeroImage/>
    <Container/>
    <Footer/>
  </div>,
  document.getElementById('wrapper')
);