import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blogs-container'>
                <h1 className='mx-auto'>Difference between Node.JS and Javascript</h1>
                <h3 className='title'>NodeJS:</h3>
                <h6>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</h6>
                <h3 className='title'>JavaScript</h3>
                <h6>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </h6>
                <br />
                <h5>1.Javascript is a programming language that is used for writing scripts on the website. <br />
                NodeJS is a Javascript runtime environment.
                 </h5>
                 <br />
                <h5>2.Javascript can only be run in the browsers.	 <br />
                We can run Javascript outside the browser with the help of NodeJS..
                 </h5>

                 <h5>3.It is basically used on the client-side.	<br />
                 It is mostly used on the server-side.
                 </h5>
                 <br />

                 <h5>4.Javascript is capable enough to add HTML and play with the DOM. <br />
                 Nodejs does not have capability to add HTML tags.
                 </h5>
                 <br />

                 <h5>5.Javascript is used in frontend development.	<br />
                 Nodejs is used in server-side development.
                 </h5>
                 <br />

                 <h5>6.Some of the javascript frameworks are RamdaJS, TypedJS, etc.  <br />
                 Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 
                 </h5>
                 <br />
            </div>
{/* ------------------------------------ */}
            <div className='blogs-container mt-4'>
                <h1 className='mx-auto'>Difference between SQL and NoSQL</h1>
               <h4>The Main Difference</h4>
               <h6>Type, Language, The Scalability, The Structure, etc</h6>
                <br />
                <h5>1.SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)	<br />
                NoSQL is Non-relational or distributed database system.

                 </h5>
                 <br />
                <h5>2.These databases have fixed or static or predefined schema		 <br />
                They have dynamic schema
                 </h5>

                 <h5>3.These databases are not suited for hierarchical data storage.	<br />
                 These databases are best suited for hierarchical data storage.
                 </h5>
                 <br />

                 <h5>4.These databases are best suited for complex queries	 <br />
                 These databases are not so good for complex queries
                 </h5>
                 <br />

                 <h5>5.Vertically Scalable		<br />
                 Horizontally scalable
                 </h5>
                 <br />

              
            </div>

            {/* ------------------------ */}
            <div className='blogs-container mt-4'>
                <h1 className='mx-auto'>What is JWT and How Does it Work?</h1>
               <h5>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</h5>
               
               <h4>How JWT Works</h4>
               <h5>
               JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                <br />
                JWT looks something like xxxxxxx.yyyyyy.xxxxxxx.

                <br />
                Once Decoded Jwt we get 1. Header and the Payload . 2. The Signature
<br />
                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                <br />
                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 




               </h5>

              
            </div>
        </div>
    );
};

export default Blogs;