interface Rating {
    value: number
    votes: number
}

interface Genre {
    id    : number
    label : string
    
}

interface Link {
    title : string
    url   : string
}

interface MangaChapter {
    id        : number
    chapter   : string
    lang_code : string
    timestamp : number
    title     : string
    volume    : string 
}

interface Manga {
    _id          : string
    id           : number
    description? : string
    follows?     : number
    image_url?   : string
    lang_name?   : string
    rating?      : Rating
    title        : string
    views        : number
}

interface MangaInfo {
    _id         : string
    id          : number
    alt_names   : string[]
    artist      : string
    author      : string
    chapters    : MangaChapter[]
    cover_url   : string
    description : string
    genres      : Genre[]
    hentai      : number
    lang_flag   : string
    lang_name   : string
    last_chapter: string
    links       : Link[]
    status_text : string
    title       : string
}

interface Chapter {
    id         : number
    chapter    : string
    comments   : string
    hash       : string
    lang_code  : string
    lang_name  : string
    long_strip : number
    manga_id   : number
    page_array : string[]
    status     : string
    timestamp  : number
    title      : string
    volume     : string
}
