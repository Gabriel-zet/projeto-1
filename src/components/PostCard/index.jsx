import P from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => {
  //Comum fazer destructuring com algo que esteja dentro da props

  return (
    <div className="post">
      <h1>{id}</h1>
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  id: P.number.isRequired,
  cover: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
};
