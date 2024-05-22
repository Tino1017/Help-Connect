import { Request, Response } from "express";
import mongoose from "mongoose";
import { v4 as uuidV4 } from "uuid";

const Post = mongoose.model("Post");
const PostImage = mongoose.model("PostImage");
const Creator = mongoose.model("Student");

export async function HttpCreatePostController(req: Request, res: Response) {
  try {
    const { post, creator } = req.body;
    const author = await Creator.findOne({ email: creator });

    // console.log(post, creator, author)

    if (!creator) {
      return res
        .status(400)
        .json({ message: "Cannot create post without user" });
    }

    if (!author) {
      return res
        .status(400)
        .json({ message: "Cannot create post without author" });
    }

    if (!author || !creator || !post) {
      return res.status(400).json({ message: "Cannot create post" });
    }

    const newPost = new Post({
      postID: uuidV4(),
      postType: "post-text",
      content: post,
      author: author._id,
    });
    await newPost.save();
    return res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function HttpCreatePostImageController(req: Request, res: Response) {
    try {
      const { post, creator, image, fileProperties } = req.body;
      const author = await Creator.findOne({ email: creator });
  
    //   console.log(post, creator, author)


  
      if (!creator) {
        return res
          .status(400)
          .json({ message: "Cannot create post without user" });
      }
  
      if (!author) {
        return res
          .status(400)
          .json({ message: "Cannot create post without author" });
      }
  
      if (!author || !creator || !post || !image || !fileProperties) {
        return res.status(400).json({ message: "Cannot create post" });
      }
  
      const newPost = new PostImage({
        postID: uuidV4(),
        postType: "post-image",
        content: post,
        image,
        fileProperties,
        author: author._id,
      });
      await newPost.save();
      return res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }

export async function HttpGetPostController(req: Request, res: Response) {
  try {
    const findPost = await Post.find().exec();

    if (!findPost) {
      return res.status(404).json({ message: "Post not found" });
    } else {
      const findPosterCreator = await Promise.all(
        findPost.map(async (item) => {
          const creator = await Creator.findById(item.author);

          if (creator) {
            return { ...item.toObject(), creator };
          }
        })
      );
      return res.status(200).json(findPosterCreator);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function HttpGetPostImageController(req: Request, res: Response) {
    try {
      const findPost = await PostImage.find().exec();
  
      if (!findPost) {
        return res.status(404).json({ message: "Post not found" });
      } else {
        const findPosterCreator = await Promise.all(
          findPost.map(async (item) => {
            const creator = await Creator.findById(item.author);
  
            if (creator) {
              return { ...item.toObject(), creator };
            }
          })
        );
        return res.status(200).json(findPosterCreator);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  