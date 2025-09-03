// // app/api/blogs/route.js
// export async function GET() {
//   try {
//     // यहाँ आप अपने actual backend API endpoint को call करेंगे
//     const backendResponse = await fetch('https://landing-page-yclw.vercel.app/api/fblog', {
//       headers: {
//         'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`, 
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!backendResponse.ok) {
//       throw new Error(`Backend responded with status: ${backendResponse.status}`);
//     }

//     const blogs = await backendResponse.json();

//     // Response को format करें
//     return new Response(JSON.stringify(blogs), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     console.error('Error fetching blogs from backend:', error);
    
//     const fallbackBlogs = [
//       {
//         id: 1,
//         title: 'The Future of Web Development',
//         excerpt: 'Explore the latest trends shaping web development in 2023.',
//         category: 'Technology',
//         date: 'May 15, 2023',
//         readTime: '6 min read',
//         image: '/images/tech-blog.jpg',
//         slug: 'future-of-web-development'
//       },
//       {
//         id: 2,
//         title: 'Building a Successful SaaS Business',
//         excerpt: 'Learn strategies that helped top SaaS companies achieve success.',
//         category: 'Business',
//         date: 'April 28, 2023',
//         readTime: '8 min read',
//         image: '/images/saas-blog.jpg',
//         slug: 'building-successful-saas'
//       }
//     ];

//     return new Response(JSON.stringify(fallbackBlogs), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }

import React from 'react'

function route() {
  return (
    <div>route</div>
  )
}

export default route