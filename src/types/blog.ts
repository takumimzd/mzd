import { BlogType } from "./supabase/table";

export type OtherBlogItemType = BlogType;

export type BlogParamsType = Pick<BlogType, "title" | "body">;
