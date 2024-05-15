// import Pagination from 'react-bootstrap/Pagination';
// import './index.css'; // Import your custom CSS file

// function PaginationFun() {
//   return (
//     <Pagination className='p-0 m-0'>
//       <Pagination.First />
//       <Pagination.Prev />

//       <Pagination.Item active>{1}</Pagination.Item>
  
//       <Pagination.Next />
//       <Pagination.Last />
//     </Pagination>
//   );
// }

// export default PaginationFun;

// import React from 'react';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
// import Pagination from 'react-bootstrap/Pagination';
// import './index.css'; // Import your custom CSS file

// const fetchPosts = async (page, limit) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// };

// function PaginationFun() {
//   const { data, isLoading, isError } = useQuery(['posts', 1], () => fetchPosts(1, 10));

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: Failed to fetch data</p>;

//   const { data:posts } = data;

//   // Add a null check to ensure posts is defined
//   if (!posts) return <p>No posts found</p>;

//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>

//       <Pagination className='p-0 m-0'>
//         {/* Pagination logic */}
//       </Pagination>
//     </div>
//   );
// }


// function PaginationContainer() {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <PaginationFun />
//     </QueryClientProvider>
//   );
// }

// export default PaginationContainer;

// import React, { useState } from 'react';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
// import Pagination from 'react-bootstrap/Pagination';
// import './index.css'; // Import your custom CSS file


// const fetchPosts = async (page, limit) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// };

// // function PaginationFun() {
// //   const { data, isLoading, isError } = useQuery(['posts', 1], () => fetchPosts(1, 10));

// //   console.log('Data:', data);

// //   if (isLoading) return <p>Loading...</p>;
// //   if (isError) return <p>Error: Failed to fetch data</p>;

// //   // Ensure that the data object and posts array are properly structured
// //   if (!data || !data.posts) return <p>No posts found</p>;

// //   return (
// //     <div>
// //       <ul>
// //         {data.posts.map((post) => (
// //           <li key={post.id}>{post.title}</li>
// //         ))}
// //       </ul>

// //       <Pagination className='p-0 m-0'>
// //         {/* Pagination logic */}
// //       </Pagination>
// //     </div>
// //   );
// // }

// // function PaginationFun() {
// //   const { data, isLoading, isError } = useQuery(['posts', 1], () => fetchPosts(1, 10));

// //   if (isLoading) return <p>Loading...</p>;
// //   if (isError) return <p>Error: Failed to fetch data</p>;

// //   // Ensure that the data object and posts array are properly structured
// //   if (!data || !data.length) return <p>No posts found</p>;

// //   return (
// //     <div>
// //       <ul>
// //         {data.map((post) => (
// //           <li key={post.id}>{post.title}</li>
// //         ))}
// //       </ul>

// //       <Pagination className='p-0 m-0'>
// //         {/* Pagination logic */}
// //       </Pagination>
// //     </div>
// //   );
// // }

// function PaginationFun() {
//   const { data, isLoading, isError } = useQuery(['posts', 1], () => fetchPosts(1, 10));

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: Failed to fetch data</p>;

//   if (!data || !data.length) return <p>No posts found</p>;

//   const posts = data;
//   const totalPages = Math.ceil(posts.length / 10); // Assuming 10 posts per page
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleClick = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPaginationItems = () => {
//     const items = [];
//     for (let i = 1; i <= totalPages; i++) {
//       items.push(
//         <Pagination.Item key={i} active={i === currentPage} onClick={() => handleClick(i)}>
//           {i}
//         </Pagination.Item>
//       );
//     }
//     return items;
//   };

//   // Calculate start and end index for current page
//   const startIndex = (currentPage - 1) * 10;
//   const endIndex = Math.min(startIndex + 9, posts.length - 1);

//   return (
//     <div>
//       <ul>
//         {posts.slice(startIndex, endIndex + 1).map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>

//       <Pagination className='p-0 m-0'>
//         <Pagination.First onClick={() => handleClick(1)} />
//         <Pagination.Prev onClick={() => handleClick(currentPage - 1)} />
//         {renderPaginationItems()}
//         <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
//         <Pagination.Last onClick={() => handleClick(totalPages)} />
//       </Pagination>
//     </div>
//   );
// }



// function PaginationContainer() {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <PaginationFun />
//     </QueryClientProvider>
//   );
// }

// export default PaginationContainer;


import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Pagination from 'react-bootstrap/Pagination';
import './index.css'; // Import your custom CSS file

const fetchPosts = async (page, limit) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

function PaginationFun() {
 
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 350);
  }, [currentPage]);

  const { data, isLoading, isError } = useQuery(['posts', currentPage], () => fetchPosts(currentPage, 10));

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Failed to fetch data</p>;

  const posts = data;

  const renderPaginationItems = () => {
    const totalPages = Math.ceil(posts.length / 10); // Assuming 10 posts per page
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePaginationClick(i)}>
          {currentPage}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <Pagination>
        {/* <Pagination.First onClick={() => handlePaginationClick(1)} /> */}
        <Pagination.Prev onClick={() => handlePaginationClick(Math.max(currentPage - 1, 1))} />
        {renderPaginationItems()}
        <Pagination.Next onClick={() => {
          handlePaginationClick(currentPage+1)
          // handlePaginationClick(Math.min(currentPage+1, renderPaginationItems().length))
          console.log(currentPage+1);}} />
        {/* <Pagination.Last onClick={() => handlePaginationClick(renderPaginationItems().length)} /> */}
      </Pagination>
    </div>
  );
}

function PaginationContainer() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaginationFun />
    </QueryClientProvider>
  );
}

export default PaginationContainer;
