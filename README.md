# AI-Analyzer: Your AI-Powered Resume Enhancement Tool

<img src="https://i.ibb.co/p61qF76m/magic-3d.webp" alt="Magic wand with sparkles, representing AI magic" width="100">
AI-Analyzer is a modern web application designed to empower students in their job search by helping them create and refine their resumes with the assistance of artificial intelligence. Our goal is to provide an intuitive and powerful platform that gives users a competitive edge in today's job market.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Backend & Authentication (Puter)](#backend--authentication-puter)
- [Getting Started](#getting-started)
- [License](#license)
- [Contact](#contact)

## Introduction

In today's competitive job market, a strong resume is crucial for securing interviews. AI-Analyzer leverages the power of AI to provide intelligent feedback and suggestions, helping students optimize their resumes for clarity, impact, and relevance to specific job descriptions. Say goodbye to generic resumes and hello to tailored, professional documents that stand out.

## Features

- **AI-Powered Resume Analysis:** Get intelligent suggestions and feedback to improve your resume's content, keywords, and formatting.
- **Real-time Feedback:** See immediate improvements as you make changes based on AI recommendations.
- **User-Friendly Interface:** An intuitive and clean design makes the resume building process enjoyable and efficient.
- **Secure Authentication:** Your data is protected with robust authentication powered by Puter.

## Tech Stack

This project utilizes a modern and efficient set of technologies to deliver a seamless user experience:

| Category        | Technology                               | Explanation                                                                                                                                                                             |
| :-------------- | :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | React.js                                    | A declarative, efficient, and flexible JavaScript library for building user interfaces. It forms the core of our application's frontend.                                                  |
|                 | React Router v7                          | A collection of navigational components that compose declaratively with your application. It handles client-side routing, ensuring smooth navigation between different views.           |
|                 | Zustand                                  | A small, fast, and scalable bear-friendly state-management solution. We use it for efficient and straightforward global state management across the application.                         |
|                 | Tailwind CSS                             | A utility-first CSS framework for rapidly building custom designs. It allows us to style our application quickly and consistently with highly customizable utility classes.            |
| **Backend/Auth**| Puter                                    | A free, open-source, web-based operating system designed to run entirely within a web browser. It provides cloud-based workspace features, handling all backend operations with a single script tag. |

## Backend & Authentication (Puter)

AI-Analyzer leverages **Puter** for all its backend and authentication needs. This unique choice offers significant advantages:

**What is Puter?**
Puter is an innovative, open-source, web-based operating system that operates entirely within a web browser. It aims to provide a cloud-based workspace with features akin to a traditional desktop operating system, serving as an alternative to conventional personal cloud storage and remote desktop environments.

**Why Puter?**
The primary reason for using Puter is its incredible simplicity and efficiency for handling backend functionalities. Puter manages all backend processes—including data storage, user authentication, and API interactions—with just a single script tag that needs to be included in the root of the project. This significantly reduces development complexity, accelerates deployment, and allows us to focus more on the user experience and AI features. It provides a robust and secure foundation without the overhead of setting up and managing a separate server infrastructure.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm
    ```bash
    npm install 
    ```

### Installation

1.  Clone the repo
    ```bash
    git clone [https://github.com/Nikhil123V/ai-analyzer.git](https://github.com/Nikhil123V/ai-analyzer.git)
    ```
2.  Navigate to the project directory
    ```bash
    cd AI-Analyzer
    ```
3.  Install NPM packages
    ```bash
    npm install
    ```
4.  Add the Puter script tag to your `index.html` (or equivalent root HTML file). Refer to the [Puter documentation](https://puter.com/docs) for the latest script.
    ```html
    <script src="[https://cdn.puter.com/sdk/puter.js](https://cdn.puter.com/sdk/puter.js)"></script>
    ```
5.  Start the development server
    ```bash
    npm start
    ```


## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [nikhilsuddapalli@gmail.com](mailto:nikhilsuddapalli@gmail.com)
Project Link: [https://ai-analyzer-eight.vercel.app/](https://ai-analyzer-eight.vercel.app/)
