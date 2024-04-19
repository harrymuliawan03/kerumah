import { HttpResponse } from "@/models/api-response-models";
import { getData, getDataWithParam } from "@/utils/api";
import { BlogResponse, Data } from "../model/blog-response";

const GetBlog = async (param? : string): Promise<HttpResponse<Data>> => {
    const resp: HttpResponse<Data> = await getDataWithParam(`/article?${param}`)
    return resp;
}
const GetBlogById =  async (slug: string): Promise<HttpResponse<BlogResponse>> => {
    const res: HttpResponse<BlogResponse> = await getData(`/article/${slug}`)
    return res;
  }


export { GetBlog,GetBlogById }
