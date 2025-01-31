const express = require('express');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;

const gitData = {
    "login": "imnileshh",
    "id": 129956918,
    "node_id": "U_kgDOB778Ng",
    "avatar_url": "https://avatars.githubusercontent.com/u/129956918?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/imnileshh",
    "html_url": "https://github.com/imnileshh",
    "followers_url": "https://api.github.com/users/imnileshh/followers",
    "following_url": "https://api.github.com/users/imnileshh/following{/other_user}",
    "gists_url": "https://api.github.com/users/imnileshh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/imnileshh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/imnileshh/subscriptions",
    "organizations_url": "https://api.github.com/users/imnileshh/orgs",
    "repos_url": "https://api.github.com/users/imnileshh/repos",
    "events_url": "https://api.github.com/users/imnileshh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/imnileshh/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2023-04-05T11:46:51Z",
    "updated_at": "2025-01-28T09:48:50Z"
}

app.get('/', (req, res) => {
    res.send('<h1>Hello this is Backend</h1>')
})

app.get('/login', (req, res) => {
    res.send('<h1> this is Login page</h1>')
})
app.get('/signup', (req, res) => {
    res.send('<h1> this is Sign Up page</h1>')
})
app.get('/github', (req, res) => {
    res.json(gitData)
})

app.listen(port, () => {
    console.log(`server is runnig on port ${port}`)
});