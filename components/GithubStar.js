const GithubStar = ({ user = 'oslabs-beta', repo = 'GraphQuill' }) => (
  <iframe
    src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true&size=large`}
    frameBorder="0"
    scrolling="0"
    width="135"
    height="30"
    title="GitHub"
  />
);

export default GithubStar;
