# FUNDFINDER

Our team was driven by our personal experiences and growth to create an app that would cater to women who are new to the tech industry. As we worked together to develop the app, we learned invaluable lessons on the importance of teamwork, resilience, and dividing tasks in a collaborative environment.

However, we also faced some challenges along the way. For example, we took on tasks that we didn't have much experience with, resulting in some hiccups on the road. One such challenge was an issue with saving the user who was currently logged in. Though we were able to eventually figure it out, time constraints meant that we were unable to implement the feature fully. We also encountered issues with lifting states and using axios to filter requests.

Despite these challenges, we remained committed to overcoming them and producing an app that we are proud of.

![Hompage](https://user-images.githubusercontent.com/118302785/223016513-58b25f48-8af1-4936-83b5-2b8044b9f9cc.png)



## Technologies

#### Front-End
Language      | Tech Stack    | Dependencies
------------- | ------------- |--------------
Javascript    | React.js      | Axios, Email.js, JWT-decode, React-toastify, and Sass

## Run Locally

### Prerequesites
- To run the client-side, you will also need to install and run the server side code found here [Server-Side](https://github.com/Jorfishdan/FundFinder-server/ "Back-End Repository"). Copy the `PORT` that this repository is run on.
- You will need to create your own `.env` file in this repository to connect the client side to the server side. Be sure to use `REACT_APP_BASE_URL=` as a variable. Example, `REACT_APP_BASE_URL=http://localhost:8080`. This will be in the Installation Steps.

### Installation Steps

1. Run the following code in the terminal: 
```sh
git clone https://github.com/Jorfishdan/FundFinder-client.git
```

2. Navigate to the new directory:
```sh
cd FUNDFINDER-Client
```

3. Ensure a `.env` file exists, and if not create one, with the `PORT` the server is running on from the prerequisites:
```sh
echo 'REACT_APP_BASE_URL=http://localhost:<PORT>' >> .env
```

4. Install all packages and dependencies:
```sh
npm i
```

5. Start the app:
```sh
npm start
```

## Our Contact Information

Developers               | Email                          | LinkedIn
------------------------| ------------------------------ |--------------
Kimberly Nolsin         |  kimberly.nolsin@gmail.com     | [Kimberly's Profile](https://www.linkedin.com/in/kimberly-nolsin/ "Profile")
Hilary Britton Foster   |  hilarybrittonfoster@gmail.com | [Hilarys's Profile](https://www.linkedin.com/in/hilary-britton-foster/ "Profile")
Jordan Fish             |  jordanfish63@gmail.com       | [Jordan's Profile](https://www.linkedin.com/in/jordan-fish/ "Profile")


