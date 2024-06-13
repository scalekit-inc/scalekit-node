<p align="right">
  <a href="https://scalekit.com" target="_blank" rel="noopener noreferrer">
    <picture>
      <img src="https://cdn.scalekit.cloud/v1/scalekit-logo-dark.svg" height="64">
    </picture>
  </a>
  <br/>
</p>

# Official Scalekit Node SDK
<a href="https://scalekit.com" target="_blank" rel="noopener noreferrer">Scalekit</a> is an Enterprise Authentication Platform purpose built for B2B applications. This Node SDK helps implement Enterprise Capabilities like Single Sign-on via SAML or OIDC in your Node.js applications within a few hours.

<div>
📚 <a target="_blank" href="https://docs.scalekit.com">Documentation</a> - 🚀 <a target="_blank" href="https://docs.scalekit.com">Getting started</a> - 💻 <a target="_blank" href="https://docs.scalekit.com/apis">API reference</a>
</div>
<hr />

## Getting Started

1. [Sign up](https://scalekit.com) for a Scalekit account.
2. Get your ```env_url```, ```client_id``` and ```client_secret``` from the Scalekit dashboard.

## Installation
Install Scalekit SDK using your preferred package manager. 

```sh
npm install @scalekit-sdk/node
#or
yarn add @scalekit-sdk/node
#or
pnpm add @scalekit-sdk/node
```

## Usage
Initialize the Scalekit client using the appropriate credentials. Refer code sample below.
```javascript
import { ScalekitClient } from "@scalekit-sdk/node";

const sc = new ScalekitClient(
  process.env.SCALEKIT_ENV_URL!,
  process.env.SCALEKIT_CLIENT_ID!,
  process.env.SCALEKIT_CLIENT_SECRET!
);

// Use the sc object to interact with the Scalekit API
const authUrl = sc.getAuthorizationUrl("https://acme-corp.com/redirect-uri", {
  state: "state",
  connectionId: "connection_id",
});

```

## Examples - SSO with Express.js
Below is a simple code sample that showcases how to implement Single Sign-on using Scalekit SDK
```javascript
import express from "express";
import { ScalekitClient } from "@scalekit-sdk/node";

const app = express();

const sc = new ScalekitClient(
  process.env.SCALEKIT_ENV_URL!,
  process.env.SCALEKIT_CLIENT_ID!,
  process.env.SCALEKIT_CLIENT_SECRET!
);

const redirectUri = `${process.env.HOST}/auth/callback`;

// Get the authorization URL and redirect the user to the IdP login page
app.get("/auth/login", (req, res) => {
  const authUrl = sc.getAuthorizationUrl(
    redirectUri, 
    {
      state: "state",
      connectionId: "connection_id",
    }
  );

  res.redirect(authUrl);
});

// Handle the callback from the Scalekit 
app.get("/auth/callback", async (req, res) => {
  const code = req.query.code as string;
  const authResp = await sc.authenticateWithCode(code, redirectUri);
  res.cookie("access_token", authResp.accessToken);
  res.json(token);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## Sample Apps  
Fully functional sample applications written using some popular web application frameworks and Scalekit SDK. Feel free to clone the repo and run them locally.
- [Express.js](https://github.com/scalekit-inc/scalekit-express-example.git)
- [Next.js](https://github.com/scalekit-inc/scalekit-nextjs-example.git)

## API Reference

See the [Scalekit API docs](https://docs.scalekit.com/apis) for more information about the API and authentication.

## More Information

- Quickstart Guide to implement Single Sign-on in your application: [SSO Quickstart Guide](https://docs.scalekit.com)
- Understand Single Sign-on basics: [SSO Basics](https://docs.scalekit.com/best-practices/single-sign-on)

## License

This project is licensed under the **MIT license**.
See the [LICENSE](LICENSE) file for more information.
