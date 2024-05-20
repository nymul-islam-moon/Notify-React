import Badge from 'react-bootstrap/Badge';
const Tags = ({tags}) => {
    return <>
        {tags && tags.map(tag => ( <Badge className="tag-badge" key={tag} bg="secondary">{tag}</Badge> ))}
    </>
}

export default  Tags