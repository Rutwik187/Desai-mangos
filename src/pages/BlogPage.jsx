import React, { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { PortableText } from "@portabletext/react";
import { useParams } from 'react-router-dom';

import { RichTextComponent } from "../components/RichTextComponent";

const BlogPage = () => {
    const [post, setPost] = useState(null); // Initialize as null
    const { blog_id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await client.fetch(`*[_type == "blog" && slug.current == '${blog_id}'][0]`);
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        
        fetchPost();
    }, [blog_id]); // Dependency array with blog_id

    // Conditional rendering to handle when post is null
    if (!post) {
        return <div>Loading...</div>;
    }

    console.log("id",blog_id)
    console.log(post)

    return (
        <div className="container px-4 mx-auto py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
                <div>
                    <h1 className="pt-5 font-body text-3xl font-semibold text-gray-900 sm:text-3xl md:text-4xl xl:text-4xl m-auto">
                        {post.title}
                    </h1>
                    <br />
                    <span className="block pt-1 font-body text-xl  text-grey-30">
                        {new Date(post.publishedAt).toDateString()}
                    </span>
                </div>
                <img
                    className="bg-no-repeat bg-cover col-span-full lg:col-span-4"
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                />
                <div className="prose max-w-none pt-8">
                    <PortableText
                        value={post.body}
                        components={RichTextComponent}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
