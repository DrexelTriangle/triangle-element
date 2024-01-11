export const MainArticle = (props: {
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
  return <div className="px-4 border-x border-gray-300 flex flex-col gap-3">
		<a href={props.article.link}><img src={props.image.url} /></a>
		<a className="text-black text-[42px] leading-tight font-title"
			href={props.article.link}>{props.article.title}</a>
		<div className="text-xs font-heading">Featured this week in {props.article.category}</div>
		<div className="text-slate-500 text-xs leading-none font-heading">
			By {props.article.author}  | {props.article.date.toDateString()}</div>
		<p className="line-clamp-2" dangerouslySetInnerHTML={{__html: props.article.preview}}></p>
	</div>;
}
