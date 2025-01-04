// import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "./gallery-api";
import "modern-normalize";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!query.trim()) return;
    const getGalleryData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImages({ query, page });
        setGallery((prev) => [...prev, ...results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getGalleryData();
  }, [query, page]);
  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      toast.error("Please change query!");
      return;
    }
    if (!newQuery) {
      toast.error("Please enter query text!");
      return;
    }

    setQuery(newQuery);
    setPage(1);
    setGallery([]);
  };
  return (
    <>
      <SearchBar onSearchChange={handleChangeQuery} />
      {/* <ImageGallery /> */}
      {/* <LoadMoreBtn /> */}
      {/* <Loader /> */}
      {/* <ErrorMessage /> */}
      {/* <ImageModal /> */}
    </>
  );
};

export default App;
