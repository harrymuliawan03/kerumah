export interface DetailBlog_response {
    details?: Details;
    data?:    Data;
    errors?:  null;
    message?: string;
    valid?:   boolean;
}

export interface Data {
    id?:                  number;
    type_id?:             number;
    title?:               string;
    slug?:                string;
    summary?:             string;
    details?:             string;
    image?:               string;
    picture_description?: null;
    tag?:                 null;
    published_at?:        Date;
    status?:              string;
    meta_desc?:           string;
    meta_title?:          string;
    meta_keys?:           string;
    created_at?:          Date;
    updated_at?:          Date;
    deleted_at?:          null;
}

export interface Details {
    uri?:         string;
    method?:      string;
    status_code?: number;
    query?:       null;
}
