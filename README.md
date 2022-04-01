# assignment-01-Dj5822
assignment-01-Dj5822 created by GitHub Classroom

## How to run the project
Change directory to backend, 
run: npm install

npm start

Change directory to frontend,
run: npm install

npm start

The app should work.

## How developers can get started with the Auth0 library
The quickstart guide specifies how to get started with Auth0.

First, you need to create an Auth0 account.

Next, after creating an account, you need to create an application.

From the application page, you can see a list of applications. You can press ‘Create Application’ and then type in the application name as well as the tech stack that you are using to create the application.

In our case, we will be using React to build the application.

Go to settings and configure the Allowed Callbacks URLs, allowed logout URLs, and allowed web origins to http://localhost:3000. 

Allowed Callbacks URLs: This is so that we can go back to http://localhost:3000 after authenticating.

Allowed logout URLs: This is so that we can go back to http://localhost:3000 after logging out. 

Allowed web origins: This is so that the authentication token is silently refreshed such that we don’t have to login every time the user visits the application.

Next, install the auth0 using the following command from the frontend folder:
npm install @auth0/auth0-react

Once you have that dependency installed, then you can create an Auth0Provider and use it to wrap the entire application. I chose to create this component in the index.js file. 

Next, you need to pass in the domain, clientId, and redirectUri to the Auth0Provider component. To put it simply, this is basically connecting up the Auth0 application that we just created with the Auth0Provider.

Now to add login to the application, you just have to get the loginWithRedirect function from auth0 and then invoke it using event handling. How I’ve set it up is so that once you press the Login button from the /auth page, you are redirected to the login screen that Auth0 provides. Once successfully authenticated, you will be redirected to the /home page.

You can roughly do the same with logging out. This time, the logout() function doesn’t automatically redirect the user, unless you manually specify where to return to. Since we want it to redirect, we will specify the returnTo value.

We can also check where the user is authenticated by checking the isAuthenticated boolean variable and we can also check user information accessing the user object.

## Single Sign On
Once you login once, you don’t need to login again unless the SSO cookie is not present. This basically happens when the cookie expires or when the user logs out.

We can demonstrate this by logging in, and then refreshing the page. When we press login, we skip the authentication process and we jump directly into the homepage. When we logout, you can see that the SSO cookie is deleted and we have to authenticate again.

## Identity Management
We check the users through ‘User Management’ → ‘Users’. In this page, there will be a list of users. From this page, we can perform password resets, creating and provisioning, as well as blocking and deleting users.

## Social logins
We can add social logins by going to Authentication → Social → Create Connection and then filling the specified details. Then we just need to enable it in the application and it will work.

## Multi factor authentication
We can enable multi factor authentication by going to security → Multi-factor Authentication
Customising the Auth0 login page
To customise the login page, we can go to Branding → Universal Login. We can also change the authentication url to a custom one by going to Branding → Custom Domains.

## Submission Instructions
The submission of the assignment is as follows:
- The main branch of your GitHub repo, as of the due date on this Canvas assignment page, will serve as your code submission.
- DO NOT commit your node_modules folder, or any build files. These should be appropriately .gitignore'd. 
  Failure to adhere to this instruction will result in an automatic 50% penalty for the assignment.
- You must submit a single video file containing your presentation to this Canvas assignment page, on or before its due date.
- You must submit your peer review via Google Form, within three weeks from the initial assignment due date.
