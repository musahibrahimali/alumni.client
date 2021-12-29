import React from 'react';
import {HeroSection, PageNavigation, SearchBar} from "../../../components";
import BlogItem from "./BlogItem";
import CategoryItem from "./CategoryItem";
import PopularTag from "./PopularTag";

function BlogPage() {

    const handleOnChange = (event) => {
        event.preventDefault();
    }
    
    return (
        <>
            <HeroSection
                url={"/blog"}
                title={"Our Blogs"}
                message={"Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need"}
            />
            <div className="bg-events-color dark:bg-gray-900 px-12 py-24">
                <div className="grid grid-cols-7 gap-2">
                    <div className="col-span-5">
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 mx-auto">
                                <div className="flex flex-wrap">
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                    <BlogItem />
                                </div>
                            </div>
                            <PageNavigation />
                        </section>

                    </div>

                    {/* side bar */}
                    <div className="col-span-2">
                        {/* search bar */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-10 px-4 py-8 shadow-md flex justify-center items-center">
                            <SearchBar title={"Search"} handleSearch={handleOnChange}  />
                        </div>

                        {/* categories */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-10 px-8 py-12 shadow-md">
                            <div className="flex flex-col justify-between">
                                <h1 className="text-black dark:text-gray-200 mb-4 font-bold text-left text-xl capitalize md:text-2xl">
                                    categories
                                </h1>
                                <CategoryItem title="Scholarships" />
                                <CategoryItem title="Alumni" />
                                <CategoryItem title="Events" />
                                <CategoryItem title="Member" />
                                <CategoryItem title="Tour" />
                                <CategoryItem title="Current Student" />
                            </div>
                        </div>

                        {/* popular tags */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-8 py-12 shadow-md">
                            <div className="grid grid-cols-3 gap-2">
                                <PopularTag url={"#"} tag={"Bootstrap"} />
                                <PopularTag url={"#"} tag={"Design"} />
                                <PopularTag url={"#"} tag={"web"} />
                                <PopularTag url={"#"} tag={"custom"} />
                                <PopularTag url={"#"} tag={"wordpress"} />
                                <PopularTag url={"#"} tag={"art"} />
                                <PopularTag url={"#"} tag={"team"} />
                                <PopularTag url={"#"} tag={"classic"} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default BlogPage;