import {DATE_FORMATTER} from '../util/constants.ts';

export const BoldArticle = (props: {
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
	first: boolean
}) => {
  const previewImage = <a href={props.article.link}>
    <img width="90" height="90" src={props.image.url}
      className="float-right pl-4" alt="" decoding="async"
    />
  </a>

  return <li className={(props.first ? "border-b-[1px] border-neutral-primary-200 " : "") + "pb-4 mb-4"}>
    <div className="md:hidden block">{previewImage}</div>
    <a className="font-title leading-tight text-[22px] font-bold" href={props.article.link}>
      {props.article.title}
    </a>
    <div className="mt-2">
      <div className="md:block hidden">{previewImage}</div>
      <p className="line-clamp-[7]" dangerouslySetInnerHTML={{__html: props.article.preview}}></p>
    </div>
    <div className="mt-3 text-neutral-primary-400 font-heading text-xs leading-3">
      By <a
        href="https://www.thetriangle.org/author/julia-conley-kasey-shamis-and-taylor-clark/"
        title={"Posts by " + props.article.author}
        className="uppercase" rel="author"
      >
        {props.article.author}
      </a> | {DATE_FORMATTER.format(props.article.date)}
    </div>
  </li>
}
