/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function EffectTest() {
    const [user, setUser] = useState(null)

    useEffect(() =>{
        async function getRandomUsers(){
        try{
            const res = await fetch('https://randomuser.me/api/')
            const data = await res.json()
            setUser(data.result[0])
        }catch(error){
            console.error('Error fetching data', error)
        }
        
    }
    })
 
  return (
    <div>
    
    </div>
  );
}
// Basic styles (you can customize or use CSS instead)
const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    card: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontWeight: '800',
        fontSize: '18px',
      }
  };

export default EffectTest;


//  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await res.json();
//         console.log(data);
//         setPosts(data);
//       } catch (error) {
//         console.error("There was an error fetching data", error);
//       }
//     }
//     fetchPosts();
//   }, []);

// <h1>Posts</h1>
// <div style={styles.grid}>
//   {posts.map(post => (
//    <div key={post.id} style={styles.card} >
//       <h2 style={styles.heading} >{post.title}</h2>
//       <p>{post.body}</p>
//    </div>
//   ))}
// </div>