import React, {Component} from 'react';
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { black } from 'material-ui/styles/colors';
import { white } from 'material-ui/styles/colors';
import getUserData from '../api/getUserInfo'
import {UserCard} from 'react-ui-cards';
 
class Home extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = { 
      userInput: "",
      bio: "", 
      blog: "",
      company: "",
      createdAt: "",
      email: "",
      eventsUrl: "",
      followers: "",
      followersUrl: "",
      following: "",
      followingUrl: "",
      gistsUrl: "",
      gravatarId: "",
      hireable: "",
      htmlUrl: "",
      id: "",
      location: "",
      login: "",
      name: "",
      nodeId: "",
      organizationsUrl: "",
      publicGists: "",
      publicRepos: "",
      receivedEventsUrl: "",
      reposUrl: "",
      siteAdmin: "",
      starredUrl: "",
      subscriptionsUrl: "",
      type: "",
      updatedAt: "",
      url: "",
      avatarUrl: "",
      publicRepos: ""
    };
  }

  getUserData = () => {
    getUserData(this.state.userInput).then(userInfo => { 
      this.setState({
        bio:                userInfo.bio,
        blog:               userInfo.blog,
        company:            userInfo.company,
        createdAt:          userInfo.created_at,
        email:              userInfo.email,
        eventsUrl:          userInfo.events_url,
        followers:          userInfo.followers,
        followersUrl:       userInfo.followers_url,
        following:          userInfo.following,
        followingUrl:       userInfo.following_url,
        gistsUrl:           userInfo.gists_url,
        gravatarId:         userInfo.gravatar_id,
        hireable:           userInfo.hireable,
        htmlUrl:            userInfo.html_url,
        id:                 userInfo.id,
        location:           userInfo.location,
        login:              userInfo.login,
        name:               userInfo.name,
        nodeId:             userInfo.node_id,
        organizationsUrl:   userInfo.organizations_url,
        publicGists:        userInfo.public_gists,
        publicRepos:        userInfo.public_repos,
        receivedEventsUrl:  userInfo.received_events_url,
        reposUrl:           userInfo.repos_url,
        siteAdmin:          userInfo.site_admin,
        starredUrl:         userInfo.starred_url,
        subscriptionsUrl:   userInfo.subscriptions_url,
        type:               userInfo.type,
        updatedAt:          userInfo.updated_at,
        url:                userInfo.url,
        avatarUrl:          userInfo.avatar_url
      });
    });
  }

  render(){
    debugger
    return (
      <div className='search-box'>
        <h3>Enter your GitHub username</h3>
        <MuiThemeProvider>
          <SearchBar
            onChange={(value) => this.setState({userInput: value})}
            onRequestSearch={() => this.getUserData()}
            className='search-bar'
            style={{
                margin: '0 auto',
                maxWidth: 500,
                background: black,
                boxShadow: 'rgba(255, 255, 255, 0.12) 0px 1px 6px, rgba(255, 255, 255, 0.12) 0px 1px 4px',
                color: white,
                border: '1px solid #ffff'
            }}
          />
        </MuiThemeProvider>
        <div className='user-profile'>
          <UserCard
            float
            header= { 'https://i.imgur.com/w5tX1Pn.jpg' }
            avatar= { this.state.avatarUrl === "" ? 'https://i.imgur.com/uDYejhJ.jpg' : this.state.avatarUrl }
            name= { this.state.name === "" ? 'Justin Case' : this.state.name }
            positionName= { this.state.bio === "" ? 'Software Developer' : this.state.bio }
            stats={[
              {
                name: 'Repository',
                value: (this.state.publicRepos === "" ? 0 : this.state.publicRepos)
              },
              {
                name: 'Followers',
                value: (this.state.followers === "" ? 0 : this.state.followers)
              },
              {
                name: 'Following',
                value: (this.state.following === "" ? 0 : this.state.following)
              }
            ]}
          />
        </div>
      </div>
    );
  };
}

export default Home;