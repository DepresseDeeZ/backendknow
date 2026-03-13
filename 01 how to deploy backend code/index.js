require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const githubData = {
  login: "DepresseDeeZ",
  id: 132985504,
  node_id: "U_kgDOB-0yoA",
  avatar_url: "https://avatars.githubusercontent.com/u/132985504?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/DepresseDeeZ",
  html_url: "https://github.com/DepresseDeeZ",
  followers_url: "https://api.github.com/users/DepresseDeeZ/followers",
  following_url:
    "https://api.github.com/users/DepresseDeeZ/following{/other_user}",
  gists_url: "https://api.github.com/users/DepresseDeeZ/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/DepresseDeeZ/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/DepresseDeeZ/subscriptions",
  organizations_url: "https://api.github.com/users/DepresseDeeZ/orgs",
  repos_url: "https://api.github.com/users/DepresseDeeZ/repos",
  events_url: "https://api.github.com/users/DepresseDeeZ/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/DepresseDeeZ/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Umang Raval",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 45,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-05-09T06:59:55Z",
  updated_at: "2026-02-24T07:01:48Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/portfolio", (req, res) => {
  res.send("https://umangraval.vercel.app/");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>hello brother</h2>");
});
app.get("/github", (req, res) => {
  res.type("json").send(JSON.stringify(githubData, null, 2));
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
