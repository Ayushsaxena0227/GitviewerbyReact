export default function Gitcard({ user }) {
  const {
    avatar_url,
    login,
    followers,
    following,
    public_repos,
    name,
    created_at,
  } = user;

  const createddate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}> {name || login}</a>
        <p>User Joined On {`${createddate.toLocaleDateString("en-us")}`}</p>
      </div>

      <div>
        <div>
          <p>Pubic repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
