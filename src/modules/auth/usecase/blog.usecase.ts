import { ResponseUseCase } from "@/models/api-response-models"
import { GetBlog, GetBlogById } from "../repository/blog.repository"
import { BlogResponse, Data } from "../model/blog-response"

const BlogUseCase = async (param? : string): Promise<ResponseUseCase<Data>> => {
    const res = await GetBlog(param)

    if (res.valid) {
        return {
            valid: true,
            message: res.message,
            data: res.data
        }
    }
    return {
        valid: false,
        message: res.message ?? 'Data not found',
        data: null
    }
}
const GetBlogByIdUseCase =  async (slug: string): Promise <ResponseUseCase<BlogResponse>> => {
    const resp = await GetBlogById(slug)

    if (resp.valid) {
      return {
        valid: true,
        message: resp.message,
        data: resp.data,
      };
    }

    return {
      valid: false,
      message: resp.message ?? 'Failed retrieved data',
      data: null,
    };
  }


export { BlogUseCase , GetBlogByIdUseCase }
