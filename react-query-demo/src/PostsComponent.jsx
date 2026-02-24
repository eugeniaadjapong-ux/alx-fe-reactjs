import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.data;
};

export default function PostsComponent() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
    cacheTime: 300000,
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts List</h2>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {isFetching && <p>Updating data...</p>}

      <ul>
        {data?.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}