export interface Post {
  title:string
  description?:string
  publish:Date
  poster:string
  comments:number
  readTime:number
}

export interface Note {
  title:string
  subtitle?:string
  description?:string
  publish:Date
}

export interface Column {
  title:string
  description?:string
  publish:Date
  posts:number
  poster:string
  subscribers:number
}

export interface Stream {
  title:string
  poster:string
  publish:Date
  duration:number
  views:number
}

export interface Notice {
  publish:Date
  
}

export interface PostOutline {
  year:number
  posts: Post[]
}

export interface NoteOutline {
  year:number
  notes:Note[]
}

export interface ColumnOutline {
  year:number
  columns:Column[]
}

export interface StreamOutline {  
  year:number
  streams:Stream[]
}

export interface NoticeOutline {
  year:number
  notices:Notice[]
}

export interface OutlineProps extends PostOutline, NoteOutline, ColumnOutline, StreamOutline, NoticeOutline {
  category:'post'|'note'|'column'|'stream'|'notice'
}


