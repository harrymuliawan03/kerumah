
  export interface Details {
    uri: string
    method: string
    status_code: number
    query: string
  }
  
  export interface Data {
    current_page: number
    data: BlogResponse[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: any
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
  
  export interface BlogResponse {
    id: number
    type_id: number
    title: string
    slug: string
    summary: string
    details: string
    image: string
    picture_description: any
    tag: string
    published_at: string
    status: string
    meta_desc: string
    meta_title: string
    meta_keys: string
    created_at: string
    updated_at: string
    deleted_at: any
    meta_key: string
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  