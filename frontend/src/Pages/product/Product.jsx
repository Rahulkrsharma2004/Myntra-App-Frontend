import React, { useEffect, useState } from "react";
import "./Product.css";
import { Select } from "antd";
import product from "../../Components/Product/Product";
// import { getProduct } from "../../Redux/product/action";
// import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
import { useLocation, useParams } from "react-router-dom";
const Product = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("gender");
  const categories = new URLSearchParams(search).get("categories");
  const keyword = new URLSearchParams(search).get("keyword");
  const [prevQuery, setPrevQuery] = useState(query);
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  const {
    pro_loading,
    products: { data },
  } = useSelector((store) => store.products);
  console.log(data);
  useEffect(() => {
    if (prevQuery !== query) {
      setPage(1);
    }
    dispatch(getProduct(keyword, query, page, categories));
    setPrevQuery(query);
  }, [dispatch, keyword, query, page, prevQuery, categories]);

  const sortOptions = [
    {
      label: "Better Discount",
      value: "discount",
    },
    {
      label: "Customer Ratings",
      value: "rating",
    },
    {
      label: "Price low to high",
      value: "asc",
    },
    {
      label: "Price high to low",
      value: "desc",
    },
  ];
  return (
    <div className="productCon">
      <div className="proContainer">
        <p className="proNavigation">
          <span>Home /</span> Men
        </p>
        <p className="proCount">
          Products - <span>{data?.productLength} items</span>
        </p>
        <div className="proSort">
          <div>
            <Select
              size="large"
              placeholder="Sort By"
              style={{
                width: 200,
                border: "1px solid gray",
                color: "black",
                borderRadius: "8px",
                outline: "none",
              }}
              options={sortOptions}
            />
          </div>
        </div>
      </div>
      <div className="proBox">
        <div className="proFilters"></div>
        {pro_loading ? (
          <div className="proGrid">
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
            <div className="proSkeleton">
              <Skeleton active />
            </div>
          </div>
        ) : (
          <div className="proGrid">
            {data &&
              data.products.map((pro, i) => {
                return <ProComp product={pro} key={i} />;
              })}
          </div>
        )}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button>{page}</button>
        <button
          disabled={
            page === Math.ceil(data?.totalPage) || data?.products.length < 20
          }
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;