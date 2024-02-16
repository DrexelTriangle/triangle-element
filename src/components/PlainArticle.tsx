import {DATE_FORMATTER} from '../util/constants.ts';

export const PlainArticle = (props: {
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
	last: boolean
}) => {
console.log(props.article)
  return <li className={"mb-4 pb-4 list-none" + (props.last ? "" : " border-b-[1px] border-neutral-primary-200")}>
    <a className="text-black font-title text-base" href={props.article.link}>
      {props.article.title}
    </a>
    <div className="mt-3 text-neutral-primary-400 font-heading text-xs leading-3">
      By <a
        href="https://www.thetriangle.org/author/julia-conley-kasey-shamis-and-taylor-clark/"
        title={"Posts by " + props.article.author}
        className="uppercase" rel="author"
      >
        {props.article.author}
      </a> | {DATE_FORMATTER.format(props.article.date)}
    </div>
    <p className="my-4 line-clamp-3" dangerouslySetInnerHTML={{__html: props.article.preview}}></p>
  </li>
};
