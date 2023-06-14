# PDF Management & Collaboration System

The PDF Management & Collaboration System is a web application designed to facilitate the seamless management and collaboration of PDFs. This application allows users to sign up, upload PDF files, share them with other users, and collaborate through comments. It is built using React for the front-end, Node.js for the back-end, MongoDB for data storage, and Cloudinary for file storage and management.

## Features

1. **User Signup and Authentication**: Users can create an account by providing essential information such as their name, email address, and password. Authentication mechanisms, such as email verification and two-factor authentication, are implemented to ensure secure access to the application.

2. **File Upload**: Authenticated users can upload PDF files to the system. The uploaded files are securely stored in Cloudinary and accessible only to authorized users. The application validates the uploaded files to ensure they are in PDF format, and there are defined file size limitations to manage storage requirements.

3. **Dashboard**: Users have a personalized dashboard displaying their uploaded PDF files and shared PDF files. The dashboard provides a search functionality based on file names or tags, allowing users to quickly find the desired files. Clicking on a PDF file takes users to a specific file view where they can see all the comments and discussions related to that file.

4. **File Sharing**: Users have the ability to share PDF files with others. Sharing can be done by generating a unique link or by inviting registered users. Invited users who are not registered can access shared PDF files through the provided link. Users can set permissions for shared files, such as read-only access or editing access, to control collaboration.

5. **Invited User File Access and Commenting**: Invited users can access shared PDF files through their invite link or by logging into their accounts. The system provides a user-friendly interface to view the PDF files, allowing zooming, scrolling, and page navigation. Invited users can add comments related to the PDF file on a sidebar or specific areas of the document. Commenting features include text formatting, replies to comments, and the ability to resolve or reopen comments.

6. **Security and Data Privacy**: The application implements robust security measures to protect user data. Access controls ensure that only authorized users can access PDF files and comments. User passwords are securely hashed and stored. Data transmission and storage are encrypted to safeguard user information. Regular data backups and disaster recovery plans are in place to prevent data loss.

7. **User Interface and Design**: The application features an intuitive and user-friendly interface with a modern design. It adopts responsive design principles to provide optimal user experience across various devices and screen sizes. The UI includes clear navigation, a PDF file preview with interactive features, and easy-to-use commenting capabilities. Accessibility standards are followed to ensure inclusivity for users with disabilities.

## Getting Started

These instructions will help you get a copy of the PDF Management & Collaboration System up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account for cloud database access.
- Cloudinary account for file storage and management.

### Installation

1. Clone the GitHub repository:

   ```shell
   git clone https://github.com/ranjan-vaidya/pdfmanager.git
   ```

2. Navigate to the project root directory:

   ```shell
   cd pdfmanager
   ```

3. Install the dependencies for the front-end:

   ```shell
   cd frontend
   npm install
   ```

4. Install the dependencies for the back-end:

   ```shell
   cd ..
   npm install
   ```

5. Configure the backend application

:

   - Create a `.env` file in the `backend` directory and configure the following environment variables:
     - `PORT`: Port number on which the server will run.
     - `MONGODB_URI`: MongoDB connection URI.
     - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Cloudinary API credentials.

6. Start the backend server:

   ```shell
   npm run dev
   ```
   
7. Configure the frontend

:

   - Create a `.env` file in the `frontend` directory and configure the following environment variables:
     - `REACT_APP_API_ENDPOINT`: API endpoint URL to fetch data from server

8. Start the development/frontend server:

   ```shell
   cd frontend
   npm start
   ```

9. Access the application in your browser at `http://localhost:3000`.

## Future Enhancements

Here are some potential future enhancements that can be considered beyond the scope of this project:

- Integration with third-party services for document editing, such as PDF annotation tools or collaboration suites.
- Implementation of a version control system to track and manage revisions of PDF files.
- Advanced search functionality, including OCR (Optical Character Recognition) to extract text from PDFs and enable full-text search.
- Integration with popular cloud storage platforms for seamless import/export of PDF files.
- Collaboration features like real-time editing, simultaneous commenting, and presence indicators.
- Integration with project management tools or task tracking systems for PDF-related workflows.

## Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Node.js](https://nodejs.org/) - JavaScript runtime for server-side development.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for data storage.
- [Cloudinary](https://cloudinary.com/) - Cloud-based media management platform.

