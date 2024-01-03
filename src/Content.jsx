
import ItemList from "./ItemList";
import Categories from "./Categories";
import ItemDetails from "./ItemDetails";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

export default function Content() {
  let urls = []

  const myNav = useNavigate()
  urls = location.pathname.split('/').slice(1)




  return (
    <div className="content">
      <button onClick={() => myNav("/")} >Categories</button>
      <Routes>
        {/*     where                  what  */}
        <Route path="/" element={<Categories />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryName" element={<ItemList />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Categories setCategory={setCategory} />
      <ItemList category={category} />
      <ItemDetails /> */}

    </div>
  )
}
