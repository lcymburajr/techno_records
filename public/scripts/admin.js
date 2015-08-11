var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
          <a className="navbar-brand" href="#"><img className="logo" src="images/logo_black_and_white.png" alt="Techno Records Logo"/></a>
          <h1 className="admin-portal">Admin Portal</h1>
      </nav>
    );
  }
});

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="container-fluid admin-nav">
        <ul className="nav nav-tabs pull-left">
          <li role="presentation" className="active"><a href="#">Artists</a></li>
          <li role="presentation"><a href="#">Analytics</a></li>
        </ul>
        <div className="dropdown pull-right">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

var Container = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Artists</h2>
            <div className="row">
              <div className="col-sm-6">
                <form className="form-inline">
                 <div className="form-group pull-left search">
                    <input type="text" className="form-control" placeholder="Search"/>
                  </div>
                  <button type="submit" className="btn btn-default pull-left"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                  <div className="clearfix"></div>
                </form>
              </div>
              <div className="col-sm-6">
                <form className="form-inline add-artist">
                 <div className="form-group pull-left">
                    <label>New Artist</label>
                  </div>
                  <button type="submit" className="btn btn-default pull-left">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Table/>
          </div>
        </div>
      </div>
    );
  }
});

var Table = React.createClass({
  render: function() {
    return (
      <table className="table table-striped table-bordered">
        <tr className="table-header">
          <th>Name</th>
          <th>Info</th>
          <th>Tasks</th>
        </tr>
        <tr>
          <td>Deadmau5</td>
          <td><button type="button" className="btn btn-default">View</button></td>
          <td><a href="">Edit</a> | <a href="">Delete</a></td>
        </tr>
        <tr>
          <td>Skillex</td>
          <td><button type="button" className="btn btn-default">View</button></td>
          <td><a href="">Edit</a> | <a href="">Delete</a></td>
        </tr>
        <tr className="tasks">
          <td>DubMaster7</td>
          <td><button type="button" className="btn btn-default">View</button></td>
          <td><a href="">Edit</a> | <a href="">Delete</a></td>
        </tr>
      </table>
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
              <p className="pull-right">&copy; {year} Techno Records</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <div className="content">
    <Header/>
    <NavBar/>
    <Container/>
    <Footer/>
  </div>,
  document.getElementById('wrapper')
);