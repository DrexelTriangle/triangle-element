import {DATE_FORMATTER} from '../util/constants.ts';

export const MiniArticle = (props: {
	article: {
		postID?: string,
		title: string,
		link: string,
		category: string,
		author: string,
		date: Date,
		preview: string
	}
	image: {
		url: string
	}
}) => {
  return <li className="story-item p-4 w-[231px]">
    <a href={props.article.link}>
      <img width="978" height="578" alt="" decoding="async" src={props.image.url}
        className="attachment-post-thumbnail size-post-thumbnail wp-post-image h-[154px] overflow-hidden object-cover"
        srcSet="https://www.thetriangle.org/wp-content/uploads/2022/09/Screen-Shot-2022-09-22-at-11.54.21-PM.png 978w, https://www.thetriangle.org/wp-content/uploads/2022/09/Screen-Shot-2022-09-22-at-11.54.21-PM-300x177.png 300w, https://www.thetriangle.org/wp-content/uploads/2022/09/Screen-Shot-2022-09-22-at-11.54.21-PM-768x454.png 768w"
        sizes="(max-width: 978px) 100vw, 978px"
      />
    </a>
    <div className="pt-3 pb-1 text-black font-heading text-[10px] leading-3 w-full">
      By <a
        href="https://www.thetriangle.org/author/julia-conley-kasey-shamis-and-taylor-clark/"
        title={"Posts by " + props.article.author}
        className="" rel="author"
      >
        {props.article.author}
      </a> | {DATE_FORMATTER.format(props.article.date)}
    </div>
    <a className="text-headline-small leading-tight" href={props.article.link}>{props.article.title}</a>
  </li>
}
