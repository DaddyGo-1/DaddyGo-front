import React, { Component } from "react";
import SideBar from "../components/sidebar";
import SideBarBottom from "../components/sideBarBottom";
import { InfoList } from "../info";
import { getInfoList } from "../info";
import "bootstrap/dist/css/bootstrap.css";
import Feed from "../components/feed";
import Nav from "../components/nav1";
import { paginate } from "../utilities/paginate1";
import reviews from "../app/data";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LoginForm from "../pages/Login";
import Register from "../pages/Register";
import homePage from "../pages/home";
import sideMenu from "../components/sidebar2";

class App extends Component {
  state = {
    List: InfoList,
    onList: getInfoList(),
    status: "student",
    data: reviews,
    pageSize: 3,
    currentPage: 1,
  };

  handleSwitchList = (listItem) => {
    this.setState({ selectedList: listItem });
    // console.log(listItem.name)
  };
  handleSwitch = (page) => {
    this.setState({ currentPage: page });
    console.log(page);
  };

  render() {
    const persons = paginate(
      this.state.data,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="app">
        <Nav />
        <div className="app-body">
          <div className="feed">
            <Switch>
              <Route path="/homePage" component={homePage} />

              <Route path="/movies/:id" exact component={Movie} />
              <Route path="/movies" component={homePage} />
              <Route
                path="/news"
                render={(props) => (
                  <SideBarBottom
                    reviews={this.state.data}
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    switchPage={this.handleSwitch}
                    persons={persons}
                    {...props}
                  />
                )}
              />
              <Route
                path="/register"
                render={(props) => (
                  <Register data={this.state.data} {...props} />
                )}
              />
              <Route path="/login" component={LoginForm} />
              <Route path="/not-found" component={NotFound} />
              <Route
                path="/home"
                render={(props) => (
                  <Feed
                    items={this.state.onList}
                    status={this.state.status}
                    selectedItem={this.state.selectedList}
                    switchList={this.handleSwitch}
                    {...props}
                  />
                )}
              />
              <Route
                path="/News"
                render={(props) => (
                  <div className="sbBottom">
                    <SideBarBottom
                      reviews={this.state.data}
                      pageSize={this.state.pageSize}
                      currentPage={this.state.currentPage}
                      switchPage={this.handleSwitch}
                      persons={persons}
                      {...props}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                render={(props) => (
                  <Feed items={this.state.onList} {...props} />
                )}
              />
              <Redirect from="/" to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
{
  /* <SideBarBottom /> */
}
