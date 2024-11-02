"use client"; // Indicate this is a client component
import Card from "@/components/UI/Post/Card";
import { useGetSearchPost } from "@/hooks/search.hook";
import { IPost } from "@/types";
import { useSearchParams } from "next/navigation"; // Use next/navigation for App Router
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const searchParams = useSearchParams(); // Get search parameters
  const search = searchParams.get("caterogy"); // Get the search term from the query
  const [results, setResults] = useState([]); // Initialize results as an empty array

  const {
    mutate: searchpost,
    data: searchData,
    isSuccess,
  } = useGetSearchPost();

  useEffect(() => {
    if (search) {
      // If "all categories" is selected, pass an empty string or a specific value to fetch all posts
      searchpost(search.toLowerCase() === "all categories" ? "" : search);
    }
  }, [search, searchpost]);

  useEffect(() => {
    if (isSuccess && searchData) {
      setResults(searchData.data); // Set the results directly when successful
    }
  }, [isSuccess, searchData]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Category Results for: {search}
      </h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {results?.map((post: IPost) => (
            <Card post={post} key={post._id} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default CategoryPage;
