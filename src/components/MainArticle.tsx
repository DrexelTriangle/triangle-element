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
    return (<div className="flex flex-col gap-3">
		<a href={props.article.link}><img src={props.image.url}></img></a>
		<a className="text-headline-large" href={props.article.link}>{props.article.title}</a>
		<div className="frontpage-postinfo">Featured this week in {props.article.category}</div>
		<div className="category-author">By {props.article.author}  | {props.article.date.toDateString()}</div>
		<p>{props.article.preview}</p>
	</div>);
}